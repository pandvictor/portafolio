import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import i18n from "../../utils/i18n";

type HeroFlipButtonProps = {
  isFlipped: boolean;
  onToggle: () => void;
};

const FlipButtonShell = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 16,
  right: 16,
  zIndex: 5,
  padding: "1px",
  borderRadius: 999,
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.95), rgba(163,230,53,0.9))",
  boxShadow: "0 12px 28px rgba(34,211,238,0.35)",
  [theme.breakpoints.up("sm")]: {
    top: 20,
    right: 20,
  },
}));

const FlipIcon = styled(SwapHorizRoundedIcon)(() => ({
  fontSize: 18,
}));

const FlipButton = styled(Button)(({ theme }) => ({
  borderRadius: 999,
  padding: theme.spacing(0.45, 1.4),
  minHeight: 0,
  textTransform: "none",
  fontWeight: 800,
  fontSize: "0.72rem",
  color: "rgba(226,232,240,0.92)",
  backgroundColor: "rgba(15,23,42,0.7)",
  backdropFilter: "blur(6px)",
  boxShadow: "inset 0 0 0 1px rgba(148,163,184,0.35)",
  "&:hover": {
    backgroundColor: "rgba(17,24,39,0.9)",
    transform: "translateY(-2px)",
    boxShadow: "0 12px 22px rgba(0,0,0,0.45)",
  },
}));

export const HeroFlipButton = memo(({ isFlipped, onToggle }: HeroFlipButtonProps) => {
  const ariaLabel = i18n.t("hero.flip.aria");
  const label = isFlipped
    ? i18n.t("hero.flip.view_profile")
    : i18n.t("hero.flip.view_ai");

  return (
    <FlipButtonShell>
      <FlipButton onClick={onToggle} aria-label={ariaLabel} endIcon={<FlipIcon />} size='small'>
        {label}
      </FlipButton>
    </FlipButtonShell>
  );
});

HeroFlipButton.displayName = "HeroFlipButton";
