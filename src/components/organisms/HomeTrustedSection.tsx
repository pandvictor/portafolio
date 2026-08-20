import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { SectionSurface, TrustedLogosMarquee } from "../molecules";
import { Reveal, motionize, transitions } from "../motion";

type HomeTrustedSectionProps = {
  title: string;
};

const TrustedSection = styled(SectionSurface)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3.5, 3),
  },
}));

const TrustedHeader = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const TrustedTitle = styled(Typography)(() => ({
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  fontSize: "0.72rem",
  color: "var(--text-secondary)",
  whiteSpace: "nowrap",
}));

const TrustedDivider = styled(Box)(({ theme }) => ({
  height: 1,
  flexGrow: 1,
  transformOrigin: "left",
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.35), rgba(163,230,53,0.28))",
  borderRadius: 99,
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const MotionTrustedDivider = motionize(TrustedDivider);

export const HomeTrustedSection = memo(({ title }: HomeTrustedSectionProps) => (
  <Reveal preset='fade'>
    <TrustedSection tone='quiet'>
      <TrustedHeader
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        alignItems={{ xs: "flex-start", sm: "center" }}>
        <TrustedTitle variant='overline'>{title}</TrustedTitle>
        <MotionTrustedDivider
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ ...transitions.enter, delay: 0.15 }}
        />
      </TrustedHeader>
      <TrustedLogosMarquee />
    </TrustedSection>
  </Reveal>
));

HomeTrustedSection.displayName = "HomeTrustedSection";
