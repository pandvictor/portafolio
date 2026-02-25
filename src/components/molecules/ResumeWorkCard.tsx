import { Box, Paper, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { format, formatDuration, intervalToDuration, parseISO } from "date-fns";
import { WorkHistory } from "../../types";

type ResumeWorkCardProps = {
  work: WorkHistory;
};

export const ResumeWorkCard = memo(({ work }: ResumeWorkCardProps) => {
  const start = parseISO(work.start_date);
  const end = work.end_date ? parseISO(work.end_date) : new Date();

  return (
    <Paper elevation={0} sx={{ p: 2.5, mb: 2.5 }}>
      <Stack direction='row' spacing={3} sx={{ flexGrow: 1 }}>
        <div>
          <Typography variant='subtitle1'>
            {format(start, "MMM, yy")} - {format(end, "MMM,yy")}
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
          <Typography variant='h5'>{work.position}</Typography>
          <Typography variant='h6'>{work.company}</Typography>
        </div>
      </Stack>
      <Box sx={{ ml: { xs: 0, md: "140px" } }}>
        <Typography sx={{ mb: 1 }}>{work.description}</Typography>
        <ul style={{ marginTop: 8 }}>
          {work?.tasks?.map((task, index) => (
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
    </Paper>
  );
});

ResumeWorkCard.displayName = "ResumeWorkCard";
