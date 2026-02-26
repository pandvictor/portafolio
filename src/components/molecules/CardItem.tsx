import React from "react";
import { ImageIcons, ImagePresentation } from "./ImageIcons";
import { TechStackMarquee } from "./TechStackMarquee";
import { publicPath } from "../../constants/gloabals";
import { Project, ProjectModalPayload } from "../../types/types";
import { resolveTechIconFromStack } from "../../utils/techIcons";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Button,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import i18n from "../../utils/i18n";

interface RecipeReviewCardProps {
  data: Project;
  companyImage?: string;
  companyImages?: string[];
  companyName?: string;
  companyUrl?: string;
  onOpen?: (payload: ProjectModalPayload) => void;
}

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
  "fantasygol-card.png": {
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

const CardRoot = styled(Card)(() => ({
  maxWidth: 800,
  borderRadius: "28px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  background:
    "linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(10,15,24,0.98) 100%)",
  border: "1px solid var(--border-subtle)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
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
    height: 6,
    background:
      "linear-gradient(90deg, rgba(34,211,238,0.5), rgba(163,230,53,0.6))",
    opacity: 0,
    transform: "translateY(6px)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
    pointerEvents: "none",
  },
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 26px 70px rgba(0,0,0,0.55)",
    "&:before": {
      opacity: 1,
    },
    "&:after": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const CardContentRoot = styled(CardContent)(() => ({
  flexGrow: 1,
}));

const HeaderStack = styled(Stack)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(1.2),
  gap: theme.spacing(2),
  border: "none",
}));

const LogoRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  flexShrink: 0,
}));

const LogoWrap = styled(Box)(() => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 42,
  maxWidth: 140,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const LogoImage = styled("img")(() => ({
  height: "100%",
  width: "auto",
  maxWidth: 140,
  objectFit: "contain",
  display: "block",
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  lineHeight: 1.2,
  flexGrow: 1,
  color: theme.palette.text.primary,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  minHeight: "2.4em",
}));

const TechAvatar = styled(Avatar)(() => ({
  width: 22,
  height: 22,
}));

const CoinsRow = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(1),
  flexWrap: "wrap",
}));

const CoinChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: "rgba(34,211,238,0.08)",
}));

const CardActionsRoot = styled(CardActions)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingTop: 0,
}));

const MoreInfoButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  fontWeight: 700,
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.2), rgba(163,230,53,0.2))",
  color: "var(--text-primary)",
  boxShadow: "0 10px 22px rgba(0,0,0,0.4)",
  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(34,211,238,0.35), rgba(163,230,53,0.35))",
    boxShadow: "0 16px 30px rgba(0,0,0,0.5)",
  },
}));

export const CardItem: React.FC<RecipeReviewCardProps> = ({
  data,
  companyImage,
  companyImages,
  companyName,
  companyUrl,
  onOpen,
}) => {
  const { title, image, tech_stack } = data;
  const coins = data.coins || [];
  const hasCoins = coins.length > 0;

  return (
    <CardRoot>
      <ImageIcons
        actionIcons={null}
        presentation={getProjectImagePresentation(image)}
        image={{
          src: `${publicPath}/images/${image}`,
          srcSet: "",
          alt: title,
        }}
      />
      <CardContentRoot>
        <HeaderStack direction='row' alignItems='center' spacing={2}>
          <LogoRow>
            {(companyImages && companyImages.length > 0
              ? companyImages
              : companyImage
                ? [companyImage]
                : []
            ).map((img, idx) => (
              <LogoWrap key={`${img}-${idx}`}>
                <LogoImage
                  src={`${publicPath}/images/${img}`}
                  alt={companyName || title}
                />
              </LogoWrap>
            ))}
          </LogoRow>
          <ProjectTitle variant='h6'>
            {title}
          </ProjectTitle>
        </HeaderStack>
        <TechStackMarquee items={tech_stack} />
        {hasCoins && (
          <CoinsRow direction='row' spacing={1}>
            {coins.slice(0, 4).map((coin, idx) => {
              const icon = resolveTechIconFromStack(coin);
              return (
                <CoinChip
                  key={`${coin.name}-${idx}`}
                  size='small'
                  label={coin.name}
                  avatar={
                    <TechAvatar
                      src={`${publicPath}/images/icons/${icon}`}
                      alt={coin.name}
                    />
                  }
                />
              );
            })}
            {coins.length > 4 && (
              <CoinChip size='small' label={`+${coins.length - 4}`} />
            )}
          </CoinsRow>
        )}
      </CardContentRoot>
      <CardActionsRoot disableSpacing>
        <MoreInfoButton
          size='small'
          fullWidth
          variant='contained'
          color='primary'
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
        </MoreInfoButton>
      </CardActionsRoot>
    </CardRoot>
  );
};
