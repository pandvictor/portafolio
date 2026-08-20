import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo, useMemo } from "react";
import { SectionHeader, SectionSurface } from "../molecules";
import { AnimatedCounter, Reveal, motionize, transitions } from "../motion";

type StatItem = {
  value: string;
  label: string;
};

type HomeCredibilitySectionProps = {
  kicker: string;
  title: string;
  stats: StatItem[];
};

/**
 * Stat copy arrives as one string ("500k+ users"). Splitting the numeric part
 * from its unit lets the number carry display weight while the unit stays
 * quiet, which reads far better than one uniform line.
 */
const splitStat = (value: string) => {
  const match = /^(\D*\d[\d,.]*[a-zA-Z]*\+?)\s*(.*)$/s.exec(value.trim());
  if (!match) return { figure: value, unit: "" };
  return { figure: match[1], unit: match[2] };
};

const StatsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
  },
}));

const MotionStatsGrid = motionize(StatsGrid);

const StatCard = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  padding: theme.spacing(2.5, 2.5, 2.5, 3),
  borderRadius: 16,
  border: "1px solid var(--border-subtle)",
  background: "rgba(9,14,23,0.55)",
  // Accent rail on the leading edge ties the four cards into one group.
  "&::before": {
    content: "''",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    background: "linear-gradient(180deg, #22d3ee, #a3e635)",
    opacity: 0.7,
  },
}));

const MotionStatCard = motionize(StatCard);

const Figure = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: "-0.03em",
  lineHeight: 1,
  fontVariantNumeric: "tabular-nums",
  fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)",
  background: "linear-gradient(120deg, #e2e8f0 20%, #22d3ee 120%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  marginBottom: theme.spacing(0.5),
}));

const Unit = styled(Typography)(() => ({
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  fontSize: "0.7rem",
  color: "var(--accent-1)",
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  color: "var(--text-secondary)",
  marginTop: theme.spacing(1),
  lineHeight: 1.45,
}));

export const HomeCredibilitySection = memo(
  ({ kicker, title, stats }: HomeCredibilitySectionProps) => {
    const parsed = useMemo(
      () => stats.map((stat) => ({ ...stat, ...splitStat(stat.value) })),
      [stats]
    );

    if (!stats?.length) return null;

    return (
      <Reveal preset='up'>
        <SectionSurface tone='raised'>
          <SectionHeader kicker={kicker} title={title} />
          <MotionStatsGrid
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}>
            {parsed.map((stat, idx) => (
              <MotionStatCard
                // Index key: the value is translated ("19+ years" / "19+ años").
                key={idx}
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
                <Figure variant='h3'>
                  <AnimatedCounter value={stat.figure} />
                </Figure>
                {stat.unit && <Unit variant='overline'>{stat.unit}</Unit>}
                <StatLabel variant='body2'>{stat.label}</StatLabel>
              </MotionStatCard>
            ))}
          </MotionStatsGrid>
        </SectionSurface>
      </Reveal>
    );
  }
);

HomeCredibilitySection.displayName = "HomeCredibilitySection";
