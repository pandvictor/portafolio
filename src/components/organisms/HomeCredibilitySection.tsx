import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import {
  AnimatedCounter,
  Reveal,
  StaggerGroup,
  StaggerItem,
  motionize,
  transitions,
} from "../motion";

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

const MotionStatsGrid = motionize(StatsGrid);

const StatCard = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  padding: "var(--space-4)",
  borderRadius: 18,
  border: "1px solid var(--border-subtle)",
  background: "rgba(15,23,42,0.6)",
  boxShadow: "0 14px 30px rgba(0,0,0,0.35)",
  // Accent rail that fills in as the card enters.
  "&::before": {
    content: "''",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    background: "linear-gradient(180deg, #22d3ee, #a3e635)",
    opacity: 0.65,
  },
}));

const MotionStatCard = motionize(StatCard);

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
      <Reveal preset='up'>
        <Section>
          <StaggerGroup stagger={0.06}>
            <Header>
              <StaggerItem>
                <Kicker variant='overline'>{kicker}</Kicker>
              </StaggerItem>
              <StaggerItem preset='up'>
                <Typography variant='h4'>{title}</Typography>
              </StaggerItem>
            </Header>
          </StaggerGroup>
          <MotionStatsGrid
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}>
            {stats.map((stat, idx) => (
              <MotionStatCard
                key={`${stat.value}-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: 22, scale: 0.97 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={transitions.enter}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(34,211,238,0.45)",
                  boxShadow: "0 26px 50px rgba(0,0,0,0.5)",
                }}>
                <StatValue variant='h4'>
                  <AnimatedCounter value={stat.value} />
                </StatValue>
                <StatLabel variant='body2'>{stat.label}</StatLabel>
              </MotionStatCard>
            ))}
          </MotionStatsGrid>
        </Section>
      </Reveal>
    );
  }
);

HomeCredibilitySection.displayName = "HomeCredibilitySection";
