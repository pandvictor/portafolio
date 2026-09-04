import { useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslated } from "../../utils/useTranslated";
import { Resume } from "../../types/";
import { MainTemplate } from "../templates";
import { PrintButton } from "../molecules";
import { Reveal, StaggerGroup, StaggerItem } from "../motion";
import {
  ResumeCertificationsSection,
  ResumeContactSection,
  ResumeEducationSection,
  ResumeHeaderSection,
  ResumeLanguageToggle,
  ResumeLanguagesSection,
  ResumeSkillsSection,
  ResumeWorkHistorySection,
} from "../organisms";

export function ResumePage() {
  const resume = useTranslated<Resume>("resume");

  const workHistory = useMemo(() => resume?.work_history || [], [resume]);
  const contactInfo = useMemo(() => resume?.contact_info || [], [resume]);
  const languages = useMemo(() => resume?.languages || [], [resume]);
  const techSkills = useMemo(() => resume?.tech_skills || [], [resume]);

  return (
    <MainTemplate>
      <Box sx={{ padding: 0, margin: 0 }} className='resume-root'>
        <Grid
          container
          spacing={3}
          sx={{
            backgroundColor: "rgba(15,23,42,0.7)",
            px: { xs: 1, md: 0 },
            borderRadius: 3,
            border: "1px solid var(--border-subtle)",
          }}>
          <ResumeHeaderSection resume={resume} />

          <Grid item xs={12} md={9} className='resume-main'>
            <Reveal preset='up' as='section'>
              <Typography paragraph>{resume.summary}</Typography>
            </Reveal>

            <ResumeWorkHistorySection workHistory={workHistory} />
            <ResumeEducationSection resume={resume} />
          </Grid>

          <Grid item xs={12} md={3} className='resume-side'>
            <StaggerGroup stagger={0.12}>
              <StaggerItem preset='up'>
                <ResumeContactSection contacts={contactInfo} />
              </StaggerItem>
              <StaggerItem preset='up'>
                <ResumeLanguagesSection languages={languages} />
              </StaggerItem>
              <StaggerItem preset='up'>
                <ResumeSkillsSection skills={techSkills} />
              </StaggerItem>
              <StaggerItem preset='up'>
                <ResumeCertificationsSection
                  title={resume.certifications_title ?? ""}
                  certifications={resume.certifications ?? []}
                />
              </StaggerItem>
            </StaggerGroup>
          </Grid>
        </Grid>

        <Box
          sx={{ mt: 2 }}
          className='no-print'>
          <PrintButton />
        </Box>

        <ResumeLanguageToggle />
      </Box>
    </MainTemplate>
  );
}
