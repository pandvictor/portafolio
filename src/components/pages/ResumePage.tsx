import { useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import i18n from "../../utils/i18n";
import { useLanguage } from "../../context/LanguageContext";
import { Resume } from "../../types/";
import { MainTemplate } from "../templates";
import { PrintButton } from "../molecules";
import { Reveal, StaggerGroup, StaggerItem } from "../motion";
import {
  ResumeContactSection,
  ResumeEducationSection,
  ResumeHeaderSection,
  ResumeLanguageToggle,
  ResumeLanguagesSection,
  ResumeSkillsSection,
  ResumeWorkHistorySection,
} from "../organisms";

export function ResumePage() {
  const { setLanguage, language } = useLanguage();
  const resume = useMemo(() => i18n.t("resume") as Resume, [language]);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const workHistory = useMemo(() => resume?.work_history || [], [resume]);
  const contactInfo = useMemo(() => resume?.contact_info || [], [resume]);
  const languages = useMemo(() => resume?.languages || [], [resume]);
  const techSkills = useMemo(() => resume?.tech_skills || [], [resume]);
  const handlePrint = () => window.print();

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
            </StaggerGroup>
          </Grid>
        </Grid>

        <Box
          sx={{ mt: 2 }}
          className='no-print'>
          <PrintButton onClick={handlePrint} />
        </Box>

        <ResumeLanguageToggle
          onToggle={() => handleLanguageChange(language === "en" ? "es" : "en")}
        />
      </Box>
    </MainTemplate>
  );
}
