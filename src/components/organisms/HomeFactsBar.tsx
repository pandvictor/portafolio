import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo, useMemo } from "react";
import i18n from "../../utils/i18n";
import { Resume } from "../../types/types";
import { SectionSurface } from "../molecules";
import { Reveal, StaggerGroup, StaggerItem, motionize } from "../motion";

type HomeFactsBarProps = {
  resume: Resume;
};

const Bar = styled(SectionSurface)(({ theme }) => ({
  padding: theme.spacing(2.5, 3),
  display: "grid",
  gap: theme.spacing(2.5),
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: theme.spacing(4),
  },
}));

const Fact = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(2.5),
    borderLeft: "1px solid var(--border-subtle)",
    "&:first-of-type": {
      paddingLeft: 0,
      borderLeft: "none",
    },
  },
}));

const Label = styled(Typography)(() => ({
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: "0.66rem",
  color: "var(--text-secondary)",
  lineHeight: 1.4,
}));

const Value = styled(Typography)(() => ({
  fontWeight: 600,
  color: "var(--text-primary)",
  lineHeight: 1.4,
}));

const StatusRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
}));

const StatusDot = styled(Box)(() => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: "#a3e635",
  flexShrink: 0,
}));

const MotionStatusDot = motionize(StatusDot);

/**
 * Answers a recruiter's first three filters — is he available, where is he,
 * and can he work in English — without making them read to the footer.
 */
export const HomeFactsBar = memo(({ resume }: HomeFactsBarProps) => {
  const languages = useMemo(
    () =>
      (resume?.languages ?? [])
        .map((item) => `${item.language} (${item.level})`)
        .join(" · "),
    [resume]
  );

  const facts = [
    {
      label: i18n.t("home.facts_availability"),
      value: i18n.t("footer.availability_title"),
      status: true,
    },
    { label: i18n.t("home.facts_location"), value: resume?.location },
    { label: i18n.t("home.facts_languages"), value: languages },
  ].filter((fact) => Boolean(fact.value));

  if (facts.length === 0) return null;

  return (
    <Reveal preset='fade'>
      <StaggerGroup stagger={0.08}>
        <Bar tone='quiet'>
          {facts.map((fact, idx) => (
            <StaggerItem key={idx}>
              <Fact>
                <Label variant='overline'>{fact.label}</Label>
                {fact.status ? (
                  <StatusRow>
                    <MotionStatusDot
                      aria-hidden
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(163,230,53,0.45)",
                          "0 0 0 7px rgba(163,230,53,0)",
                          "0 0 0 0 rgba(163,230,53,0)",
                        ],
                      }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                    />
                    <Value variant='body2'>{fact.value}</Value>
                  </StatusRow>
                ) : (
                  <Value variant='body2'>{fact.value}</Value>
                )}
              </Fact>
            </StaggerItem>
          ))}
        </Bar>
      </StaggerGroup>
    </Reveal>
  );
});

HomeFactsBar.displayName = "HomeFactsBar";
