import { Box, Stack, Typography } from "@mui/material";
import { memo } from "react";
import i18n from "../../utils/i18n";
import { Language } from "../../types";

type ResumeLanguagesSectionProps = {
  languages: Language[];
};

export const ResumeLanguagesSection = memo(
  ({ languages }: ResumeLanguagesSectionProps) => (
    <section style={{ marginBottom: "5em" }}>
      <Typography variant='h5'>{i18n.t("resume.languages_title")}</Typography>
      <hr />
      <Stack direction='column' spacing={1}>
        {languages.map((item, index) => (
          <Stack key={index} direction='row' spacing={1} alignItems='center'>
            <Typography variant='h6'>{item.language}</Typography>
            <Box
              component='span'
              sx={{
                color: "text.disabled",
                fontWeight: 700,
                mx: 0.5,
              }}>
              |
            </Box>
            <Typography variant='body1' color='text.secondary'>
              {item.level}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </section>
  )
);

ResumeLanguagesSection.displayName = "ResumeLanguagesSection";
