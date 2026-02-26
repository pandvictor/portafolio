import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";

type HeroAvatarProps = {
  src: string;
  alt?: string;
};

const AvatarWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  flexShrink: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: 340,
  },
}));

const AvatarGlow = styled(Box)(() => ({
  position: "absolute",
  inset: 14,
  borderRadius: "28px",
  background:
    "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(163,230,53,0.12))",
  filter: "blur(6px)",
}));

const HeroAvatarFrame = styled(Box)(({ theme }) => ({
  width: 200,
  height: 200,
  borderRadius: "28px",
  border: "2px solid rgba(148,163,184,0.35)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
  backgroundColor: "rgba(15,23,42,0.5)",
  position: "relative",
  zIndex: 1,
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    width: 240,
    height: 240,
  },
  [theme.breakpoints.up("md")]: {
    width: 300,
    height: 300,
  },
}));

const HeroAvatarImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
}));

export const HeroAvatar = memo(({ src, alt }: HeroAvatarProps) => (
  <AvatarWrap>
    <AvatarGlow />
    <HeroAvatarFrame>
      <HeroAvatarImage alt={alt} src={src} />
    </HeroAvatarFrame>
  </AvatarWrap>
));

HeroAvatar.displayName = "HeroAvatar";
