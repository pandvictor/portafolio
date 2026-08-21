import React, { useMemo } from "react";
import { ImageIcons, ImagePresentation } from "./ImageIcons";
import { publicPath } from "../../constants/gloabals";
import { Project, ProjectModalPayload } from "../../types/types";
import { resolveTechIconFromStack } from "../../utils/techIcons";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Stack,
  Button,
  Chip,
  Tooltip,
} from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import type { ButtonProps } from "@mui/material/Button";
import type { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import i18n from "../../utils/i18n";
import { motionize, transitions } from "../motion";

interface RecipeReviewCardProps {
  data: Project;
  companyImage?: string;
  companyImages?: string[];
  companyName?: string;
  companyUrl?: string;
  onOpen?: (payload: ProjectModalPayload) => void;
}

type LogoPresentation = {
  blendMode?: React.CSSProperties["mixBlendMode"];
  filter?: string;
  scale?: number;
};

const MAX_TECH_ICONS = 6;

const PROJECT_IMAGE_PRESENTATION: Record<string, ImagePresentation> = {
  "red-regional.jpeg": {
    fit: "cover",
    padding: 0,
    blendMode: "multiply",
    scale: 1.04,
  },
  "red-regional-banner.svg": {
    fit: "cover",
    padding: 0,
    scale: 1,
  },
  "red-regional.png": {
    fit: "cover",
    padding: 0,
    blendMode: "multiply",
    scale: 1.04,
  },
  "fantasygol-card.webp": {
    fit: "cover",
    padding: 0,
    scale: 1.02,
  },
  "quinielas-live-hero.webp": {
    fit: "cover",
    padding: 0,
    scale: 1.02,
  },
};

const getProjectImagePresentation = (
  image?: string
): ImagePresentation | undefined => {
  if (!image) return undefined;
  return PROJECT_IMAGE_PRESENTATION[image];
};

const LOGO_PRESENTATION: Record<string, LogoPresentation> = {
  "bullseye-logo-transparent.png": {
    blendMode: "normal",
    filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.45)) brightness(1.08)",
    scale: 1.08,
  },
  "bullseye.svg": {
    blendMode: "normal",
    filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.45)) brightness(1.08)",
    scale: 1.08,
  },
  "fantasygol-logo-transparent.webp": {
    blendMode: "normal",
    filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.45)) brightness(1.08)",
    scale: 1.08,
  },
  "fantasygol-logo.webp": {
    blendMode: "normal",
    filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.45)) brightness(1.08)",
    scale: 1.08,
  },
  "quinielas-live-wordmark.webp": {
    blendMode: "normal",
    filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.38)) brightness(1.05)",
    scale: 1.04,
  },
  "quinielas-live-badge.webp": {
    blendMode: "normal",
    filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.42)) brightness(1.04)",
    scale: 1.02,
  },
  "bluequant-logo.svg": {
    blendMode: "normal",
    filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.42)) brightness(1.06)",
    scale: 1.02,
  },
};

const getLogoPresentation = (image?: string): LogoPresentation | undefined => {
  if (!image) return undefined;
  return LOGO_PRESENTATION[image];
};

const CardRoot = styled(Card)(() => ({
  maxWidth: 800,
  borderRadius: "24px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  background:
    "linear-gradient(180deg, rgba(17,26,44,0.95) 0%, rgba(10,15,24,0.98) 100%)",
  border: "1px solid var(--border-subtle)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
  // Lift + tilt are owned by the framer-motion `TiltCard` wrapper; this element
  // only handles the surface treatments so the two never fight over `transform`.
  transition: "box-shadow 0.25s ease, border-color 0.25s ease",
  "&:before": {
    content: "''",
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(110% 75% at 50% 100%, rgba(34,211,238,0.18), transparent 60%)",
    opacity: 0,
    transition: "opacity 0.3s ease",
    pointerEvents: "none",
  },
  "&:after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    background:
      "linear-gradient(90deg, rgba(34,211,238,0.6), rgba(163,230,53,0.6))",
    opacity: 0,
    transform: "translateY(4px)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
    pointerEvents: "none",
  },
  "&:hover": {
    boxShadow: "0 26px 70px rgba(0,0,0,0.55)",
    borderColor: "rgba(34,211,238,0.35)",
    "&:before": {
      opacity: 1,
    },
    "&:after": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

/** Placeholder that preserves the media slot for projects without artwork. */
const MediaFallback = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: theme.spacing(1),
  paddingTop: "56.25%",
  borderRadius: 18,
  border: "1px solid var(--border-subtle)",
  background:
    "linear-gradient(140deg, rgba(34,211,238,0.10), rgba(163,230,53,0.06)), rgba(9,14,23,0.9)",
}));

const CardContentRoot = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  paddingTop: theme.spacing(1),
}));

/** Company logo, company name, and year — the context line above the title. */
const MetaRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
  minHeight: 26,
}));

const LogoWrap = styled(Box)(() => ({
  display: "inline-flex",
  alignItems: "center",
  height: 24,
  flexShrink: 0,
}));

const LogoImage = styled("img", {
  shouldForwardProp: (prop) =>
    prop !== "blendMode" && prop !== "logoFilter" && prop !== "logoScale",
})<{
  blendMode?: React.CSSProperties["mixBlendMode"];
  logoFilter?: string;
  logoScale?: number;
}>(({ blendMode, logoFilter, logoScale }) => ({
  height: "100%",
  width: "auto",
  // Narrow enough that a wordmark never crowds out the company name beside it.
  maxWidth: 66,
  objectFit: "contain",
  display: "block",
  mixBlendMode: blendMode,
  filter: logoFilter,
  transform: logoScale ? `scale(${logoScale})` : undefined,
  transformOrigin: "center",
}));

const MetaText = styled(Typography)(() => ({
  color: "var(--text-secondary)",
  fontWeight: 600,
  letterSpacing: "0.04em",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const MetaDot = styled("span")(() => ({
  width: 3,
  height: 3,
  borderRadius: "50%",
  backgroundColor: "var(--text-secondary)",
  opacity: 0.6,
  flexShrink: 0,
}));

const YearText = styled(Typography)(() => ({
  marginLeft: "auto",
  flexShrink: 0,
  color: "var(--text-secondary)",
  fontWeight: 700,
  fontVariantNumeric: "tabular-nums",
  letterSpacing: "0.08em",
}));

const ProjectTitle = styled(Typography)<TypographyProps<"h3">>(({ theme }) => ({
  fontWeight: 700,
  lineHeight: 1.25,
  color: theme.palette.text.primary,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  // Two lines reserved so every card in the rail aligns on the same baseline.
  minHeight: "2.5em",
}));

const OutcomesRow = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  gap: theme.spacing(0.75),
}));

/**
 * Outcomes are ordered strongest-first, so the lead result gets extra weight.
 * Three chips of identical emphasis gave the eye nothing to land on.
 */
const OutcomeChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "lead",
})<{ lead?: boolean }>(({ theme, lead }) => ({
  borderRadius: 8,
  height: 26,
  fontSize: "0.75rem",
  color: theme.palette.text.primary,
  fontWeight: lead ? 700 : 600,
  borderColor: lead ? "rgba(34,211,238,0.6)" : "rgba(148,163,184,0.28)",
  backgroundColor: lead ? "rgba(34,211,238,0.14)" : "rgba(148,163,184,0.06)",
}));

/** Static stack row — a scrolling marquee inside a card reads as decoration. */
const TechRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(0.75),
  marginTop: "auto",
  paddingTop: theme.spacing(1),
}));

const TechIcon = styled(Box)(() => ({
  width: 30,
  height: 30,
  borderRadius: 9,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(15,23,42,0.75)",
  transition: "transform 0.2s ease, border-color 0.2s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    borderColor: "rgba(34,211,238,0.5)",
  },
  "& img": {
    width: 17,
    height: 17,
    objectFit: "contain",
  },
}));

const TechOverflow = styled(Box)(() => ({
  height: 30,
  minWidth: 30,
  padding: "0 8px",
  borderRadius: 9,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px dashed var(--border-subtle)",
  color: "var(--text-secondary)",
  fontSize: "0.72rem",
  fontWeight: 700,
}));

const CardActionsRoot = styled(CardActions)(({ theme }) => ({
  gap: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingTop: 0,
}));

const MoreInfoButton = styled(Button)(({ theme }) => ({
  flexGrow: 1,
  borderRadius: theme.shape.borderRadius,
  fontWeight: 700,
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.22), rgba(163,230,53,0.22))",
  color: "var(--text-primary)",
  boxShadow: "none",
  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(34,211,238,0.38), rgba(163,230,53,0.38))",
  },
}));

const LiveButton = styled(Button)<ButtonProps<"a">>(({ theme }) => ({
  flexShrink: 0,
  borderRadius: theme.shape.borderRadius,
  fontWeight: 700,
  color: "var(--text-secondary)",
  borderColor: "var(--border-subtle)",
  "&:hover": {
    color: "var(--text-primary)",
    borderColor: "rgba(34,211,238,0.5)",
  },
}));

const MotionMoreInfoButton = motionize(MoreInfoButton);

export const CardItem: React.FC<RecipeReviewCardProps> = ({
  data,
  companyImage,
  companyImages,
  companyName,
  companyUrl,
  onOpen,
}) => {
  const { title, image, url, date } = data;
  const outcomes = data.outcomes || [];
  // Coins are a handful of extra assets on the crypto projects; showing them in
  // their own row made those two cards taller than the rest for little gain, so
  // they share the stack row and keep their tooltips.
  const techStack = useMemo(
    () => [...(data.tech_stack || []), ...(data.coins || [])],
    [data.coins, data.tech_stack]
  );
  const logos = useMemo(
    () =>
      companyImages && companyImages.length > 0
        ? companyImages.slice(0, 1)
        : companyImage
          ? [companyImage]
          : [],
    [companyImage, companyImages]
  );
  const year = useMemo(() => {
    if (!date) return null;
    const parsed = Number(String(date).slice(0, 4));
    return Number.isFinite(parsed) && parsed > 1900 ? String(parsed) : null;
  }, [date]);
  const visibleTech = useMemo(
    () => (techStack || []).slice(0, MAX_TECH_ICONS),
    [techStack]
  );
  const hiddenTechCount = Math.max((techStack?.length || 0) - MAX_TECH_ICONS, 0);

  return (
    <CardRoot>
      {image ? (
        <ImageIcons
          actionIcons={null}
          presentation={getProjectImagePresentation(image)}
          image={{
            src: `${publicPath}/images/${image}`,
            srcSet: "",
            alt: title,
          }}
        />
      ) : (
        <MediaFallback aria-hidden />
      )}
      <CardContentRoot>
        <MetaRow>
          {logos.map((img, idx) => {
            const logoPresentation = getLogoPresentation(img);
            return (
              <LogoWrap key={`${img}-${idx}`}>
                <LogoImage
                  src={`${publicPath}/images/${img}`}
                  alt={companyName || title}
                  blendMode={logoPresentation?.blendMode}
                  logoFilter={logoPresentation?.filter}
                  logoScale={logoPresentation?.scale}
                />
              </LogoWrap>
            );
          })}
          {companyName && (
            <>
              {logos.length > 0 && <MetaDot aria-hidden />}
              <MetaText variant='caption'>{companyName}</MetaText>
            </>
          )}
          {year && <YearText variant='caption'>{year}</YearText>}
        </MetaRow>

        <ProjectTitle variant='h6' component='h3'>
          {title}
        </ProjectTitle>

        {outcomes.length > 0 && (
          <OutcomesRow direction='row' useFlexGap>
            {outcomes.slice(0, 3).map((item, idx) => (
              <OutcomeChip
                key={`${item}-${idx}`}
                size='small'
                label={item}
                variant='outlined'
                lead={idx === 0}
              />
            ))}
          </OutcomesRow>
        )}

        <TechRow>
          {visibleTech.map((tech, idx) => (
            <Tooltip key={`${tech.name}-${idx}`} title={tech.name} arrow>
              <TechIcon>
                <img
                  src={`${publicPath}/images/icons/${resolveTechIconFromStack(tech)}`}
                  alt={tech.name}
                  loading='lazy'
                />
              </TechIcon>
            </Tooltip>
          ))}
          {hiddenTechCount > 0 && (
            <Tooltip
              title={(techStack || [])
                .slice(MAX_TECH_ICONS)
                .map((tech) => tech.name)
                .join(", ")}
              arrow>
              <TechOverflow>+{hiddenTechCount}</TechOverflow>
            </Tooltip>
          )}
        </TechRow>
      </CardContentRoot>
      <CardActionsRoot disableSpacing>
        <MotionMoreInfoButton
          size='medium'
          variant='contained'
          color='primary'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={transitions.quick}
          onClick={() =>
            onOpen?.({
              project: data,
              companyImage,
              companyImages,
              companyName,
              companyUrl,
            })
          }>
          {i18n.t("more_info")}
        </MotionMoreInfoButton>
        {url && (
          <LiveButton
            component='a'
            size='medium'
            variant='outlined'
            href={url}
            target='_blank'
            rel='noreferrer'
            endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 15 }} />}>
            {i18n.t("home.project_live")}
          </LiveButton>
        )}
      </CardActionsRoot>
    </CardRoot>
  );
};
