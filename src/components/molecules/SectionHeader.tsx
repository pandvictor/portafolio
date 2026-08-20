import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { StaggerGroup, StaggerItem, motionize, transitions } from "../motion";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  note?: string;
  /** Visual weight of the title. Use "lead" once per page, "section" elsewhere. */
  size?: "section" | "lead";
  /** Extra content pinned to the right on wide screens (actions, counters). */
  action?: React.ReactNode;
};

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: theme.spacing(4),
  },
}));

const Copy = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  maxWidth: 680,
}));

const KickerRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
}));

/** Short gradient rule that anchors the eyebrow text. */
const KickerRule = styled(Box)(() => ({
  width: 28,
  height: 2,
  borderRadius: 2,
  transformOrigin: "left",
  background: "linear-gradient(90deg, #22d3ee, #a3e635)",
}));

const MotionKickerRule = motionize(KickerRule);

const Kicker = styled(Typography)(() => ({
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "var(--text-secondary)",
  lineHeight: 1,
}));

const Actions = styled(Box)(() => ({
  flexShrink: 0,
}));

/**
 * One header treatment for every section on the site.
 *
 * Before this existed each section invented its own eyebrow size, heading
 * level, and spacing, which made the page read as a stack of unrelated blocks.
 */
export const SectionHeader = memo(
  ({ kicker, title, subtitle, note, size = "section", action }: SectionHeaderProps) => (
    <StaggerGroup stagger={0.07}>
      <Root>
        <Copy>
          <StaggerItem>
            <KickerRow>
              <MotionKickerRule
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ ...transitions.base, delay: 0.1 }}
              />
              <Kicker variant='overline'>{kicker}</Kicker>
            </KickerRow>
          </StaggerItem>
          <StaggerItem preset='up'>
            <Typography variant={size === "lead" ? "h3" : "h4"}>{title}</Typography>
          </StaggerItem>
          {subtitle && (
            <StaggerItem>
              <Typography variant='body1' color='text.secondary'>
                {subtitle}
              </Typography>
            </StaggerItem>
          )}
          {note && (
            <StaggerItem>
              <Typography variant='body2' color='text.secondary'>
                {note}
              </Typography>
            </StaggerItem>
          )}
        </Copy>
        {action && (
          <StaggerItem>
            <Actions>{action}</Actions>
          </StaggerItem>
        )}
      </Root>
    </StaggerGroup>
  )
);

SectionHeader.displayName = "SectionHeader";
