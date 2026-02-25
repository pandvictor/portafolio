import { Typography } from "@mui/material";
import { memo } from "react";
import i18n from "../../utils/i18n";
import { WorkHistory } from "../../types";
import { ResumeWorkCard } from "../molecules";

type ResumeWorkHistorySectionProps = {
  workHistory: WorkHistory[];
};

export const ResumeWorkHistorySection = memo(
  ({ workHistory }: ResumeWorkHistorySectionProps) => (
    <section>
      <Typography variant='h5'>{i18n.t("resume.experience")}</Typography>
      <hr />
      {workHistory.map((work) => (
        <ResumeWorkCard
          key={`${work.company}-${work.position}-${work.start_date}`}
          work={work}
        />
      ))}
    </section>
  )
);

ResumeWorkHistorySection.displayName = "ResumeWorkHistorySection";
