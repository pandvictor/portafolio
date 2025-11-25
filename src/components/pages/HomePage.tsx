import { Grid } from "@mui/material";
import { MainTemplate } from "../templates";
import { CardItem, CardClients } from "../molecules";
import { Project, ProjectModalPayload, WorkHistory } from "../../types/types";
import { useLanguage } from "../../context/LanguageContext";
import i18n from "../../utils/i18n";
import { useState } from "react";
import { ProjectDialog } from "../organisms/ProjectDialog";

export type ModalPayload = ProjectModalPayload;

type RenderProjectsProps = {
  projects: Project[];
  companyImage?: string;
  companyName?: string;
  companyUrl?: string;
  onOpen?: (payload: ModalPayload) => void;
};

const RenderProjects = ({
  projects,
  companyImage,
  companyName,
  companyUrl,
  onOpen,
}: RenderProjectsProps) => {
  return projects.map((element: Project, index) => (
    <Grid item xs={12} md={6} lg={4} key={index}>
      <CardItem
        data={element}
        companyImage={companyImage}
        companyName={companyName}
        companyUrl={companyUrl}
        onOpen={onOpen}
      />
    </Grid>
  ));
};

export default function HomePage() {
  useLanguage();
  const [selected, setSelected] = useState<ModalPayload | null>(null);

  const works = i18n.t("resume.work_history") as WorkHistory[];
  return (
    <MainTemplate>
      <Grid container spacing={3}>
        {works &&
          works?.map((element: WorkHistory) => (
            <RenderProjects
              projects={element.achievements}
              companyImage={element.company_image}
              companyName={element.company}
              companyUrl={element.achievements?.[0]?.url}
              onOpen={(payload) => setSelected(payload)}
            />
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
      <ProjectDialog
        open={Boolean(selected)}
        payload={selected}
        onClose={() => setSelected(null)}
      />
    </MainTemplate>
  );
}
