import { Stack, Typography } from "@mui/material";
import { memo } from "react";
import i18n from "../../utils/i18n";
import { Resume } from "../../types";

type ResumeEducationSectionProps = {
  resume: Resume;
};

export const ResumeEducationSection = memo(
  ({ resume }: ResumeEducationSectionProps) => (
    <section>
      <Typography variant='h5'>{i18n.t("resume.education")}</Typography>
      <hr />
      <Stack direction='row' spacing={3}>
        <div>
          <Typography>{resume.university.start_date}</Typography>
          <Typography>{resume.university.end_date}</Typography>
        </div>
        <div>
          <Typography variant='h5'>{resume.university.title}</Typography>
          <Typography variant='h6'>{resume.university.school}</Typography>
        </div>
      </Stack>
    </section>
  )
);

ResumeEducationSection.displayName = "ResumeEducationSection";
