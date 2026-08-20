import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

type Tone = "raised" | "feature" | "quiet";

const TONES: Record<Tone, { background: string; shadow: string; border: string }> = {
  quiet: {
    background: "rgba(15,23,42,0.55)",
    shadow: "var(--shadow-soft)",
    border: "var(--border-subtle)",
  },
  raised: {
    background:
      "linear-gradient(150deg, rgba(17,26,44,0.9) 0%, rgba(10,15,24,0.97) 100%)",
    shadow: "var(--shadow-soft)",
    border: "var(--border-subtle)",
  },
  feature: {
    background:
      "linear-gradient(135deg, rgba(19,29,48,0.94) 0%, rgba(10,15,24,0.98) 100%)",
    shadow: "var(--shadow-strong)",
    border: "rgba(148, 163, 184, 0.28)",
  },
};

/**
 * The single container treatment for page sections.
 *
 * Sections previously each carried their own radius (12/18/20/24), padding, and
 * background, so the page read as a pile of unrelated boxes. One surface with
 * three tones gives the layout a consistent rhythm.
 */
export const SectionSurface = styled(Box, {
  shouldForwardProp: (prop) => prop !== "tone",
})<{ tone?: Tone }>(({ theme, tone = "raised" }) => ({
  position: "relative",
  borderRadius: 24,
  border: `1px solid ${TONES[tone].border}`,
  background: TONES[tone].background,
  boxShadow: TONES[tone].shadow,
  padding: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5),
  },
}));

/** Consistent vertical rhythm between top-level sections. */
export const SectionBlock = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  // The container already supplies the page's bottom padding; a trailing margin
  // here just opened a dead gap above the footer.
  "&:last-of-type": {
    marginBottom: 0,
  },
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(9),
  },
}));
