import { Grid } from "@mui/material";
import { MainTemplate } from "../templates";
import { CardItem, CardClients } from "../molecules";
import { Project, WorkHistory } from "../../types/types";
import { useLanguage } from "../../context/LanguageContext";
import i18n from "../../utils/i18n";

type RenderProjectsProps = {
  projects: Project[];
};

const RenderProjects = ({ projects }: RenderProjectsProps) => {
  return projects.map((element: Project, index) => (
    <Grid item xs={12} md={6} lg={4} key={index}>
      <CardItem data={element} />
    </Grid>
  ));
};

export default function HomePage() {
  useLanguage();

  const works = i18n.t("resume.work_history") as WorkHistory[];
  return (
    <MainTemplate>
      <Grid container spacing={3}>
        {works &&
          works?.map((element: WorkHistory) => (
            <RenderProjects projects={element.achievements} />
          ))}
      </Grid>
      {/* <Grid container spacing={3}>
        {projects.map((_item: Project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <CardItem key_id={index} />
          </Grid>
        ))}
      </Grid> */}
      <Grid container spacing={3} sx={{ marginY: 5 }}>
        {works &&
          works.map((_item: WorkHistory) => <CardClients data={_item} />)}
      </Grid>
    </MainTemplate>
  );
}
