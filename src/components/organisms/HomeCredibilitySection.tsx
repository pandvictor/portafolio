import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";

type StatItem = {
  value: string;
  label: string;
};

type HomeCredibilitySectionProps = {
  kicker: string;
  title: string;
  stats: StatItem[];
};

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  borderRadius: 20,
  border: "1px solid var(--border-subtle)",
  background:
    "linear-gradient(140deg, rgba(15,23,42,0.85) 0%, rgba(10,15,24,0.98) 100%)",
  boxShadow: "var(--shadow-soft)",
  padding: "var(--space-6)",
  [theme.breakpoints.up("md")]: {
    padding: "var(--space-7)",
  },
}));

const Header = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-2)",
  marginBottom: "var(--space-5)",
}));

const Kicker = styled(Typography)(() => ({
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "var(--text-secondary)",
}));

const StatsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: "var(--space-4)",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  },
}));

const StatCard = styled(Box)(() => ({
  padding: "var(--space-4)",
  borderRadius: 18,
  border: "1px solid var(--border-subtle)",
  background: "rgba(15,23,42,0.6)",
  boxShadow: "0 14px 30px rgba(0,0,0,0.35)",
}));

const StatValue = styled(Typography)(() => ({
  fontWeight: 800,
  letterSpacing: "-0.01em",
}));

const StatLabel = styled(Typography)(() => ({
  color: "var(--text-secondary)",
  marginTop: 4,
}));

export const HomeCredibilitySection = memo(
  ({ kicker, title, stats }: HomeCredibilitySectionProps) => {
    if (!stats?.length) return null;
    return (
      <Section>
        <Header>
          <Kicker variant='overline'>{kicker}</Kicker>
          <Typography variant='h4'>{title}</Typography>
        </Header>
        <StatsGrid>
          {stats.map((stat, idx) => (
            <StatCard key={`${stat.value}-${idx}`}>
              <StatValue variant='h4'>{stat.value}</StatValue>
              <StatLabel variant='body2'>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Section>
    );
  }
);

HomeCredibilitySection.displayName = "HomeCredibilitySection";
