import { Box, Button, Stack, Typography } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { MagneticButton, Reveal, StaggerGroup, StaggerItem, motionize } from "../motion";

type HomeCtaSectionProps = {
  kicker: string;
  title: string;
  desc: string;
  primaryLabel: string;
  onPrimary: () => void;
  secondaryLabel: string;
  secondaryHref: string;
};

const Band = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: 28,
  border: "1px solid rgba(34,211,238,0.28)",
  background:
    "radial-gradient(120% 140% at 15% 0%, rgba(34,211,238,0.16), transparent 55%), radial-gradient(110% 130% at 90% 100%, rgba(163,230,53,0.12), transparent 55%), linear-gradient(140deg, rgba(17,26,44,0.95), rgba(9,14,23,0.98))",
  boxShadow: "var(--shadow-strong)",
  padding: theme.spacing(5, 3),
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 7),
    textAlign: "left",
  },
}));

const Layout = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(6),
  },
}));

const Copy = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 620,
}));

const Kicker = styled(Typography)(() => ({
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "var(--accent-1)",
}));

const Actions = styled(Stack)(({ theme }) => ({
  flexShrink: 0,
  width: "100%",
  // Stacked buttons should share one width; sizing to their labels made the
  // column look ragged.
  [theme.breakpoints.down("sm")]: {
    alignItems: "stretch",
    "& > span": { width: "100%" },
    "& .MuiButton-root": { width: "100%" },
  },
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  whiteSpace: "nowrap",
  borderRadius: theme.shape.borderRadius * 2,
  paddingLeft: theme.spacing(3.5),
  paddingRight: theme.spacing(3.5),
}));

const SecondaryButton = styled(Button)<ButtonProps<typeof RouterLink>>(({ theme }) => ({
  whiteSpace: "nowrap",
  borderRadius: theme.shape.borderRadius * 2,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  borderColor: "var(--border-strong)",
  color: "var(--text-primary)",
}));

/** Slow sweep of light so the band reads as the page's closing beat. */
const Sheen = styled(Box)(() => ({
  position: "absolute",
  inset: "-40% -10%",
  pointerEvents: "none",
  background:
    "conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,0.10) 40deg, transparent 90deg, transparent 360deg)",
}));

const MotionSheen = motionize(Sheen);

/**
 * Closing call to action.
 *
 * The page used to end on the project rail followed by a large dead gap before
 * the footer, which left visitors with no next step.
 */
export const HomeCtaSection = memo(
  ({
    kicker,
    title,
    desc,
    primaryLabel,
    onPrimary,
    secondaryLabel,
    secondaryHref,
  }: HomeCtaSectionProps) => (
    <Reveal preset='up'>
      <Band>
        <MotionSheen
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 46, ease: "linear", repeat: Infinity }}
        />
        <StaggerGroup stagger={0.08}>
          <Layout>
            <Copy>
              <StaggerItem>
                <Kicker variant='overline'>{kicker}</Kicker>
              </StaggerItem>
              <StaggerItem preset='up'>
                <Typography variant='h3'>{title}</Typography>
              </StaggerItem>
              <StaggerItem>
                <Typography variant='body1' color='text.secondary'>
                  {desc}
                </Typography>
              </StaggerItem>
            </Copy>
            <StaggerItem>
              <Actions direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <MagneticButton>
                  <PrimaryButton
                    variant='contained'
                    color='primary'
                    size='large'
                    onClick={onPrimary}>
                    {primaryLabel}
                  </PrimaryButton>
                </MagneticButton>
                <MagneticButton strength={6}>
                  <SecondaryButton
                    variant='outlined'
                    color='inherit'
                    size='large'
                    component={RouterLink}
                    to={secondaryHref}>
                    {secondaryLabel}
                  </SecondaryButton>
                </MagneticButton>
              </Actions>
            </StaggerItem>
          </Layout>
        </StaggerGroup>
      </Band>
    </Reveal>
  )
);

HomeCtaSection.displayName = "HomeCtaSection";
