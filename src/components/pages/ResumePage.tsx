import { memo, useMemo } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import { format, formatDuration, intervalToDuration, parseISO } from "date-fns";
import { publicPath } from "./../../constants/gloabals";
import { LinkItem } from "../atoms";
import i18n from "../../utils/i18n";
import { useLanguage } from "../../context/LanguageContext";
import { ContactInfo, Language, Resume, TechSkill, WorkHistory } from "../../types/";
import { MainTemplate } from "../templates";
import { resolveTechIcon } from "../../utils/techIcons";
import { PrintButton } from "../molecules";

const Stars = ({ count }: { count: number }) => (
  <Box
    component='span'
    sx={{
      color: "#f5c518",
      ml: 1,
      fontSize: 18,
      letterSpacing: "0.5px",
      fontWeight: 700,
    }}
    aria-label={`${count} star rating`}>
    {"★".repeat(count)}
  </Box>
);

const HeaderSection = memo(({ resume }: { resume: Resume }) => (
  <Grid item xs={12} sx={{ backgroundColor: "#343a40" }}>
    <ListItem>
      <ListItemAvatar>
        <Avatar
          sx={{
            display: "flex",
            mr: 5,
            flexGrow: 1,
            width: 90,
            height: 90,
          }}
          alt='A'
          src={`${publicPath}/images/vic.jpeg`}
        />
      </ListItemAvatar>
      <ListItemText
        children={
          <div style={{ flex: 1 }}>
            <Typography variant='h4' color='lightgrey'>
              {resume.full_name}
            </Typography>
            <Typography variant='h6' color='lightgrey'>
              {resume.position}
            </Typography>
          </div>
        }
      />
    </ListItem>
  </Grid>
));
HeaderSection.displayName = "HeaderSection";

const WorkCard = memo(({ work }: { work: WorkHistory }) => {
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
WorkCard.displayName = "WorkCard";

const WorkHistorySection = memo(({ workHistory }: { workHistory: WorkHistory[] }) => (
  <section>
    <Typography variant='h5'>{i18n.t("resume.experience")}</Typography>
    <hr />
    {workHistory.map((work) => (
      <WorkCard key={`${work.company}-${work.position}-${work.start_date}`} work={work} />
    ))}
  </section>
));
WorkHistorySection.displayName = "WorkHistorySection";

const EducationSection = memo(({ resume }: { resume: Resume }) => (
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
));
EducationSection.displayName = "EducationSection";

const ContactSection = memo(({ contacts }: { contacts: ContactInfo[] }) => (
  <section style={{ marginBottom: "5em" }}>
    <Typography variant='h5'>{i18n.t("resume.contact")}</Typography>
    <hr />
    <Stack direction='column' spacing={1}>
      {contacts.map((item, index) => (
        <ListItem key={index} component='div' disablePadding>
          <LinkItem to={item.url}>{item.title}</LinkItem>
        </ListItem>
      ))}
    </Stack>
  </section>
));
ContactSection.displayName = "ContactSection";

const LanguagesSection = memo(({ languages }: { languages: Language[] }) => (
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
));
LanguagesSection.displayName = "LanguagesSection";

const SkillsSection = memo(({ skills }: { skills: TechSkill[] }) => (
  <section style={{ marginBottom: "5em" }}>
    <Typography variant='h5'>Skills</Typography>
    <hr />
    {skills.map((item, index) => (
      <section key={index} style={{ marginBottom: 30 }}>
        <Typography variant='h6' sx={{ mb: 1 }}>
          {item.title}
          <Stars count={item.stars} />
        </Typography>
        <Stack
          direction='row'
          spacing={1}
          flexWrap='wrap'
          alignItems='center'
          sx={{ columnGap: 1, rowGap: 1 }}>
          {item.tools.map((tool, idx) => {
            const icon = resolveTechIcon(tool);
            return (
              <Chip
                key={`${tool}-${idx}`}
                label={tool}
                avatar={
                  <Avatar
                    src={`${publicPath}/images/icons/${icon}`}
                    alt={tool}
                    sx={{ width: 22, height: 22 }}
                  />
                }
                sx={{ borderRadius: 2 }}
              />
            );
          })}
        </Stack>
      </section>
    ))}
  </section>
));
SkillsSection.displayName = "SkillsSection";

export function ResumePage() {
  const { setLanguage, language } = useLanguage();
  const resume = i18n.t("resume") as Resume;

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
      <Box sx={{ padding: 0, margin: 0 }}>
        <Grid container spacing={3} sx={{ backgroundColor: "white", px: { xs: 1, md: 0 } }}>
          <HeaderSection resume={resume} />

          <Grid item xs={12} md={9}>
            <section>
              <Typography paragraph>{resume.summary}</Typography>
            </section>

            <WorkHistorySection workHistory={workHistory} />
            <EducationSection resume={resume} />
          </Grid>

          <Grid item xs={12} md={3}>
            <ContactSection contacts={contactInfo} />
            <LanguagesSection languages={languages} />
            <SkillsSection skills={techSkills} />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: { print: "none" },
            mt: 2,
          }}>
          <PrintButton onClick={handlePrint} />
        </Box>

        <Stack
          direction={{ xs: "row", md: "column" }}
          sx={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            zIndex: 1000,
            display: { print: "none" },
          }}>
          <Button
            onClick={() =>
              handleLanguageChange(language === "en" ? "es" : "en")
            }
            aria-label={language === "es" ? "Cambiar idioma" : "Change language"}>
            <Tooltip title={language === "es" ? "Cambiar idioma" : "Change language"} arrow>
              <TranslateRoundedIcon sx={{ fontSize: 26 }} />
            </Tooltip>
          </Button>
        </Stack>
      </Box>
    </MainTemplate>
  );
}
