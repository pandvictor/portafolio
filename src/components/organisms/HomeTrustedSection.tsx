import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { TrustedLogosMarquee } from "../molecules";

type HomeTrustedSectionProps = {
  title: string;
};

const TrustedSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  marginBottom: theme.spacing(4),
  borderRadius: 12,
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(15,23,42,0.65)",
  boxShadow: "var(--shadow-soft)",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3, 3),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 3),
    marginBottom: theme.spacing(6),
  },
}));

const TrustedHeader = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const TrustedTitle = styled(Typography)(() => ({
  fontWeight: 800,
  letterSpacing: "0.08em",
}));

const TrustedDivider = styled(Box)(({ theme }) => ({
  height: 1,
  flexGrow: 1,
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.35), rgba(163,230,53,0.28))",
  borderRadius: 99,
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const HomeTrustedSection = memo(({ title }: HomeTrustedSectionProps) => (
  <TrustedSection>
    <TrustedHeader
      direction={{ xs: "column", sm: "row" }}
      spacing={1.5}
      alignItems={{ xs: "flex-start", sm: "center" }}>
      <TrustedTitle variant='subtitle2'>{title}</TrustedTitle>
      <TrustedDivider />
    </TrustedHeader>
    <TrustedLogosMarquee />
  </TrustedSection>
));

HomeTrustedSection.displayName = "HomeTrustedSection";
