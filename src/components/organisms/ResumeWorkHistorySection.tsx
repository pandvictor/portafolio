import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import i18n from "../../utils/i18n";
import { WorkHistory } from "../../types";
import { ResumeWorkCard } from "../molecules";
import { Reveal, motionize, transitions } from "../motion";

type ResumeWorkHistorySectionProps = {
  workHistory: WorkHistory[];
};

/** Vertical rail the timeline entries hang from. */
const Timeline = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingLeft: theme.spacing(3),
  "&::before": {
    content: "''",
    position: "absolute",
    left: 6,
    top: 6,
    bottom: 6,
    width: 2,
    borderRadius: 2,
    background:
      "linear-gradient(180deg, rgba(34,211,238,0.55), rgba(163,230,53,0.35), transparent)",
  },
  "@media print": {
    paddingLeft: 0,
    "&::before": { display: "none" },
  },
}));

const MotionTimeline = motionize(Timeline);

const TimelineEntry = styled(Box)(() => ({
  position: "relative",
}));

const MotionTimelineEntry = motionize(TimelineEntry);

const TimelineDot = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: theme.spacing(-3),
  top: 26,
  width: 14,
  height: 14,
  marginLeft: 0,
  borderRadius: "50%",
  border: "2px solid rgba(11,17,27,0.9)",
  background: "linear-gradient(135deg, #22d3ee, #a3e635)",
  boxShadow: "0 0 0 4px rgba(34,211,238,0.12)",
  "@media print": { display: "none" },
}));

const entryVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: transitions.enter },
};

export const ResumeWorkHistorySection = memo(
  ({ workHistory }: ResumeWorkHistorySectionProps) => (
    <section>
      <Reveal preset='up'>
        <Typography variant='h5'>{i18n.t("resume.experience")}</Typography>
        <hr />
      </Reveal>
      <MotionTimeline
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.05 }}>
        {workHistory.map((work) => (
          <MotionTimelineEntry
            key={`${work.company}-${work.position}-${work.start_date}`}
            className='resume-entry-wrap'
            variants={entryVariants}>
            <TimelineDot aria-hidden />
            <ResumeWorkCard work={work} />
          </MotionTimelineEntry>
        ))}
      </MotionTimeline>
    </section>
  )
);

ResumeWorkHistorySection.displayName = "ResumeWorkHistorySection";
