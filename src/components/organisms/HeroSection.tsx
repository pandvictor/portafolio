import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { ButtonProps } from "@mui/material/Button";
import { publicPath } from "../../constants/gloabals";
import {
  HeroAvatar,
  HeroFlipButton,
  HeroImpactPanel,
  SkillIconsRow,
} from "../molecules";
import { Resume, ContactInfo } from "../../types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import i18n from "../../utils/i18n";
import { keyframes } from "@mui/system";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(18px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const HeroRoot = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  position: "relative",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius * 4,
  border: "1px solid var(--border-subtle)",
  background:
    "radial-gradient(circle at 18% 20%, rgba(34,211,238,0.18), transparent 40%), radial-gradient(circle at 82% 10%, rgba(163,230,53,0.16), transparent 38%), linear-gradient(135deg, rgba(12,18,28,0.98), rgba(11,17,27,0.92))",
  boxShadow: "var(--shadow-strong)",
  animation: `${fadeInUp} 0.6s ease`,
  perspective: "1600px",
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(7),
    borderRadius: theme.shape.borderRadius * 5,
  },
}));

const OrbTop = styled(Box)(() => ({
  position: "absolute",
  width: 180,
  height: 180,
  borderRadius: "50%",
  top: -50,
  right: -30,
  background:
    "radial-gradient(circle, rgba(34,211,238,0.28) 0%, rgba(34,211,238,0.06) 60%, transparent 70%)",
  filter: "blur(1px)",
}));

const OrbBottom = styled(Box)(() => ({
  position: "absolute",
  width: 220,
  height: 220,
  borderRadius: "50%",
  bottom: -60,
  left: -40,
  background:
    "radial-gradient(circle, rgba(163,230,53,0.2) 0%, rgba(163,230,53,0.05) 65%, transparent 75%)",
  filter: "blur(2px)",
}));

const FlipGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== "flipped" && prop !== "reducedMotion",
})<{ flipped: boolean; reducedMotion: boolean }>(({ flipped, reducedMotion }) => ({
  position: "relative",
  display: "grid",
  transformStyle: "preserve-3d",
  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  transition: reducedMotion ? "none" : "transform 0.9s ease",
}));

const FlipFace = styled(Box)(() => ({
  gridArea: "1 / 1",
  backfaceVisibility: "hidden",
}));

const FlipBackFace = styled(Box)(() => ({
  gridArea: "1 / 1",
  transform: "rotateY(180deg)",
  backfaceVisibility: "hidden",
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  alignItems: "center",
  padding: theme.spacing(3.5, 2.5),
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6, 11),
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 340px",
    alignItems: "center",
    columnGap: theme.spacing(5),
    rowGap: theme.spacing(4),
  },
}));

const HeroLeft = styled(Stack)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  textAlign: "center",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    alignItems: "flex-start",
  },
}));

const ChipRow = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

const GradientChip = styled(Chip)(({ theme }) => ({
  fontWeight: 800,
  borderRadius: 999,
  color: "white",
  background: "linear-gradient(90deg, #22d3ee, #a3e635)",
  boxShadow: "0 12px 30px rgba(34,211,238,0.35)",
  "& .MuiChip-label": {
    paddingLeft: theme.spacing(1.25),
    paddingRight: theme.spacing(1.25),
    letterSpacing: "0.02em",
  },
}));

const SecondaryChip = styled(Chip)(() => ({
  fontWeight: 700,
  borderRadius: 999,
}));

const OutlineChip = styled(Chip)(() => ({
  fontWeight: 700,
  borderRadius: 999,
  borderColor: "var(--border-strong)",
  color: "var(--text-primary)",
}));

const OutlineSecondaryChip = styled(Chip)(() => ({
  fontWeight: 700,
  borderRadius: 999,
  borderColor: "rgba(163,230,53,0.6)",
  color: "var(--text-primary)",
}));

const HeroName = styled(Typography)(() => ({
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
}));

const HeroRole = styled(Typography)(() => ({
  fontWeight: 600,
}));

const HeroSubtitle = styled(Typography)(() => ({
  maxWidth: 720,
}));

const BulletRow = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

const BulletDot = styled(Box)(() => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: "radial-gradient(circle, #22d3ee 0%, #a3e635 80%)",
  boxShadow: "0 0 0 6px rgba(34,211,238,0.2)",
  flexShrink: 0,
}));

const BulletText = styled(Typography)(() => ({
  fontWeight: 600,
}));

const CtaRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  alignItems: "stretch",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));

const PrimaryCtaButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
}));

const LinkedInButton = styled(Button)<ButtonProps<"a">>(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  textTransform: "none",
  fontWeight: 700,
  borderColor: "rgba(10,102,194,0.6)",
  color: "#7cb6ff",
  backgroundColor: "rgba(10,102,194,0.18)",
  "&:hover": {
    borderColor: "#7cb6ff",
    backgroundColor: "rgba(10,102,194,0.28)",
  },
}));

const TalkButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
}));

const LinkedInIcon = styled("img")(() => ({
  width: 18,
  height: 18,
}));

const SectionTitle = styled(Typography)(() => ({
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
}));

const SectionBody = styled(Typography)(() => ({
  maxWidth: 700,
}));

const TagRow = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  gap: theme.spacing(1),
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

const TagChip = styled(Chip)(() => ({
  borderRadius: 999,
  fontWeight: 700,
  borderColor: "var(--border-strong)",
}));

const ToolChip = styled(Chip)(() => ({
  borderRadius: 999,
  fontWeight: 800,
  color: "white",
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.9), rgba(163,230,53,0.85))",
  boxShadow: "0 10px 22px rgba(34,211,238,0.3)",
}));

const ToolsCaption = styled(Typography)(() => ({
  fontWeight: 600,
}));

const IMPACT_ICON_MAP: Record<string, string> = {
  features: "jira.svg",
  mobile: "react-native.svg",
  frontend: "react.svg",
  backend: "nodejs.svg",
  reliability: "kubernetes.svg",
  experiments: "dash.svg",
};

type HeroSectionProps = {
  resume: Resume;
  language: string;
  contactInfo: ContactInfo[];
  bullets: string[];
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  resume,
  language,
  contactInfo,
  bullets,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const flipTimerRef = useRef<number | null>(null);
  const contactUrl = contactInfo?.[0]?.url;
  const linkedinUrl = useMemo(
    () =>
      contactInfo?.find(
        (item) =>
          item?.title?.toLowerCase?.().includes("linkedin") ||
          item?.icon === "linkedin.svg"
      )?.url,
    [contactInfo]
  );
  const downloadHref = useMemo(
    () => `${publicPath}/files/resume-victor-hernandez-${language}.pdf`,
    [language]
  );
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);
  const chipLabels = useMemo(() => i18n.t("hero.chips") as Record<string, string>, [
    language,
  ]);
  const backTags = useMemo(() => i18n.t("hero.back.tags") as string[], [language]);
  const impactCardsCopy = useMemo(
    () => i18n.t("hero.back.cards") as { key: string; title: string; desc: string }[],
    [language]
  );
  const impactCards = useMemo(
    () =>
      impactCardsCopy.map((card) => ({
        ...card,
        icon: IMPACT_ICON_MAP[card.key] ?? "react.svg",
      })),
    [impactCardsCopy]
  );

  const startFlipTimer = useCallback(() => {
    if (prefersReducedMotion || typeof window === "undefined") return;
    if (flipTimerRef.current) {
      window.clearInterval(flipTimerRef.current);
    }
    flipTimerRef.current = window.setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 20000);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (flipTimerRef.current) {
        window.clearInterval(flipTimerRef.current);
        flipTimerRef.current = null;
      }
      return;
    }
    startFlipTimer();
    return () => {
      if (flipTimerRef.current) {
        window.clearInterval(flipTimerRef.current);
        flipTimerRef.current = null;
      }
    };
  }, [isPaused, prefersReducedMotion, startFlipTimer]);

  const handleManualFlip = () => {
    setIsFlipped((prev) => !prev);
    if (!isPaused) startFlipTimer();
  };

  return (
    <HeroRoot
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <HeroFlipButton isFlipped={isFlipped} onToggle={handleManualFlip} />
      <OrbTop />
      <OrbBottom />
      <FlipGrid flipped={isFlipped} reducedMotion={prefersReducedMotion}>
        <FlipFace>
          <HeroContent>
            <HeroLeft spacing={2.5}>
              <ChipRow direction='row' spacing={1} alignItems='center' useFlexGap>
                <GradientChip
                  label={chipLabels.ai}
                  size='small'
                />
                <SecondaryChip
                  label={chipLabels.sectors}
                  color='secondary'
                  size='small'
                />
                <OutlineChip
                  label={chipLabels.experience}
                  variant='outlined'
                  color='default'
                  size='small'
                />
                <OutlineSecondaryChip
                  label={chipLabels.crypto}
                  variant='outlined'
                  color='secondary'
                  size='small'
                />
              </ChipRow>
              <HeroName variant='h3'>{resume?.full_name}</HeroName>
              <HeroRole variant='h5' color='text.secondary'>
                {resume?.position}
              </HeroRole>
              <SkillIconsRow justify='flex-start' />
              <HeroSubtitle variant='body1' color='text.secondary'>
                {i18n.t("portfolio.subtitle")}
              </HeroSubtitle>
              <Stack spacing={1}>
                {bullets.map((item, idx) => (
                  <BulletRow
                    key={`${item}-${idx}`}
                    direction='row'
                    spacing={1.5}
                    alignItems='center'>
                    <BulletDot />
                    <BulletText color='text.primary'>{item}</BulletText>
                  </BulletRow>
                ))}
              </Stack>
              <CtaRow
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}>
                <PrimaryCtaButton
                  variant='contained'
                  color='primary'
                  size='large'
                  href={downloadHref}>
                  {i18n.t("download")}
                </PrimaryCtaButton>
                {linkedinUrl && (
                  <LinkedInButton
                    component='a'
                    variant='outlined'
                    size='large'
                    href={linkedinUrl}
                    target='_blank'
                    rel='noreferrer'
                    startIcon={
                      <LinkedInIcon
                        alt='LinkedIn'
                        src={`${publicPath}/images/icons/linkedin.svg`}
                      />
                    }>
                    LinkedIn
                  </LinkedInButton>
                )}
                {contactUrl && (
                  <TalkButton
                    variant='outlined'
                    color='inherit'
                    size='large'
                    href={contactUrl}>
                    {i18n.t("hero.cta.talk")}
                  </TalkButton>
                )}
              </CtaRow>
            </HeroLeft>
            <HeroAvatar
              alt={resume?.full_name}
              src={`${publicPath}/images/vic.jpeg`}
            />
          </HeroContent>
        </FlipFace>
        <FlipBackFace>
          <HeroContent>
            <HeroLeft spacing={2.5}>
              <GradientChip
                label={i18n.t("hero.back.badge")}
                size='small'
              />
              <SectionTitle variant='h4'>
                {i18n.t("hero.back.title")}
              </SectionTitle>
              <SectionBody variant='body1' color='text.secondary'>
                {i18n.t("hero.back.summary")}
              </SectionBody>
              <SectionBody variant='body2' color='text.secondary'>
                {i18n.t("hero.back.impact_line")}
              </SectionBody>
              <TagRow direction='row' useFlexGap>
                {backTags.map((tag) => (
                  <TagChip key={tag} label={tag} size='small' variant='outlined' />
                ))}
              </TagRow>
            </HeroLeft>
            <HeroImpactPanel cards={impactCards} />
          </HeroContent>
        </FlipBackFace>
      </FlipGrid>
    </HeroRoot>
  );
};
