import { Box, Paper, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { format, formatDuration, intervalToDuration, parseISO } from "date-fns";
import { WorkHistory } from "../../types";
import i18n from "../../utils/i18n";
import { motionize, transitions } from "../motion";
import { parseDescription } from "../../utils/resumeText";

const MotionPaper = motionize(Paper);

type ResumeWorkCardProps = {
  work: WorkHistory;
};

export const ResumeWorkCard = memo(({ work }: ResumeWorkCardProps) => {
  const start = parseISO(work.start_date);
  const end = work.is_current || !work.end_date ? new Date() : parseISO(work.end_date);
  const endLabel = work.is_current ? i18n.t("resume.present") : format(end, "MMM, yy");
  // A few descriptions are authored as bullet lists; render them as such.
  const parsed = parseDescription(work.description);
  const bullets = [...parsed.bullets, ...(work.tasks ?? [])];

  return (
    <MotionPaper
      className='resume-entry'
      elevation={0}
      sx={{ p: 2.5, mb: 2.5 }}
      whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.35)" }}
      transition={transitions.quick}>
      <Stack direction='row' spacing={3} sx={{ flexGrow: 1 }}>
        <div>
          <Typography variant='subtitle1'>
            {format(start, "MMM, yy")} - {endLabel}
          </Typography>
          <Typography variant='subtitle1'>
            {formatDuration(
              intervalToDuration({
                start,
                end,
              }),
              { format: ["years", "months"] }
            )}
          </Typography>
        </div>
        <div>
          <Typography variant='h5' component='h3'>
            {work.position}
          </Typography>
          <Typography variant='h6' component='p'>
            {work.company}
          </Typography>
        </div>
      </Stack>
      <Box sx={{ ml: { xs: 0, md: "140px" } }}>
        {parsed.lead && <Typography sx={{ mb: 1 }}>{parsed.lead}</Typography>}
        <ul style={{ marginTop: 8 }}>
          {bullets.map((task, index) => (
            <li key={index}>
              <Typography variant='body2'>{task}</Typography>
            </li>
          ))}
        </ul>
        <div>
          {work.achievements?.map((achievement, index) => (
            <Typography key={index} paragraph>
              <a href={achievement.url} className='h5'>
                {achievement?.title}
              </a>{" "}
              | {achievement.description}
            </Typography>
          ))}
        </div>
      </Box>
    </MotionPaper>
  );
});

ResumeWorkCard.displayName = "ResumeWorkCard";
