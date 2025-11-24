import {
  Stack,
  Typography,
  Grid,
  Paper,
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";
import { format, intervalToDuration, formatDuration, parseISO } from "date-fns";
import { publicPath } from "./../../constants/gloabals";
import { LinkItem } from "../atoms";
import i18n from "../../utils/i18n";
import { useLanguage } from "../../context/LanguageContext";
import { Resume } from "../../types/";
import { MainTemplate } from "../templates";

export function ResumePage() {
  const { setLanguage, language } = useLanguage();
  const resume = i18n.t("resume") as Resume;

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const stars = (num: number) => {
    let renderStars = "";
    for (let i = 0; i < num; i++) {
      renderStars += "★";
    }
    return <span> {renderStars} </span>;
  };

  const workHistory = resume?.work_history?.map((work) => (
    <Paper
      key={work.position}
      elevation={0}
      style={{ padding: "20px", marginBottom: "20px" }}>
      <Stack direction='row' spacing={3} sx={{ flexGrow: 1 }}>
        <div>
          <Typography variant='subtitle1'>
            {format(parseISO(work.start_date), "MMM, yy")} -{" "}
            {format(
              work.end_date ? parseISO(work.end_date) : new Date(),
              "MMM,yy",
              {}
            )}
          </Typography>
          <Typography variant='subtitle1'>
            {formatDuration(
              intervalToDuration({
                start: parseISO(work.start_date),
                end: work.end_date ? parseISO(work.end_date) : new Date(),
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
      <div style={{ marginLeft: "140px" }}>
        <div>
          <Typography>{work.description}</Typography>
          <ul>
            {work?.tasks?.map((task, index) => <li key={index}>{task}</li>)}
          </ul>
        </div>
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
      </div>
    </Paper>
  ));

  return (
    <MainTemplate>
      <Box sx={{ padding: 0, margin: 0 }}>
        <Grid container spacing={3}>
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
                      {i18n.t("resume.full_name")}
                    </Typography>
                    <Typography variant='h6' color='lightgrey'>
                      {i18n.t("resume.position")}
                    </Typography>
                  </div>
                }
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={9}>
            <section>
              <Typography paragraph>{resume.summary}</Typography>
            </section>
            <section>
              <Typography variant='h5'>
                {i18n.t("resume.experience")}
              </Typography>
              <hr />
              {workHistory}
            </section>
            <section>
              <Typography variant='h5'>{i18n.t("resume.education")}</Typography>
              <hr />
              <Stack direction='row' spacing={3}>
                <div>
                  <Typography>{resume.university.start_date}</Typography>
                  <Typography>{resume.university.end_date}</Typography>
                </div>
                <div>
                  <Typography variant='h5'>
                    {resume.university.title}
                  </Typography>
                  <Typography variant='h6'>
                    {resume.university.school}
                  </Typography>
                </div>
              </Stack>
            </section>
          </Grid>
          <Grid item xs={12} md={3}>
            <section style={{ marginBottom: "5em" }}>
              <Typography variant='h5'>{i18n.t("resume.contact")}</Typography>
              <hr />
              <Stack direction='column' spacing={1}>
                {resume.contact_info.map((item, index) => (
                  <ListItem key={index} component='div' disablePadding>
                    <LinkItem to={item.url}>{item.title}</LinkItem>
                  </ListItem>
                ))}
              </Stack>
            </section>
            <section style={{ marginBottom: "5em" }}>
              <Typography variant='h5'>
                {i18n.t("resume.languages_title")}
              </Typography>
              <hr />
              <Stack direction='column' spacing={1}>
                {resume.languages.map((item, index) => (
                  <Typography key={index} variant='h6'>
                    {item.language} | {item.level}
                  </Typography>
                ))}
              </Stack>
            </section>
            <section style={{ marginBottom: "5em" }}>
              <Typography variant='h5'>Skills</Typography>
              <hr />
              {resume.tech_skills.map((item, index) => (
                <section key={index} style={{ marginBottom: 30 }}>
                  <Typography variant='h6'>
                    {item.title}
                    {stars(item.stars)}
                  </Typography>
                  <Stack display='inline' spacing={1}>
                    {item.tools.map((tool, index) => (
                      <Typography
                        key={index}
                        variant='body2'
                        display='inline-block'>
                        {tool} |
                      </Typography>
                    ))}
                  </Stack>
                </section>
              ))}
            </section>
          </Grid>
        </Grid>
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
            }>
            <Avatar
              sx={{ display: "flex", mr: 1, height: 30, width: 30 }}
              alt='A'
              src={`${publicPath}/images/icons/${"locale.svg"}`}
            />
          </Button>
        </Stack>
      </Box>
    </MainTemplate>
  );
}
