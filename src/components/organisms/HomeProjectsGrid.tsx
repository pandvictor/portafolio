import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import { memo } from "react";
import { CardItem } from "../molecules";
import { Project, ProjectModalPayload, WorkHistory } from "../../types/types";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(18px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const AnimatedGridItem = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "delay",
})<{ delay: number }>(({ delay }) => ({
  opacity: 0,
  animation: `${fadeInUp} 0.7s ease ${delay}s forwards`,
  transformOrigin: "center",
}));

type RenderProjectsProps = {
  projects: Project[];
  companyImage?: string;
  companyImages?: string[];
  companyName?: string;
  companyUrl?: string;
  onOpen?: (payload: ProjectModalPayload) => void;
};

const RenderProjects = memo(
  ({
    projects,
    companyImage,
    companyImages,
    companyName,
    companyUrl,
    onOpen,
  }: RenderProjectsProps) =>
    projects.map((element: Project, index) => (
      <AnimatedGridItem
        item
        xs={12}
        md={6}
        lg={4}
        key={index}
        delay={(index + 1) * 0.08}>
        <CardItem
          data={element}
          companyImage={companyImage}
          companyImages={companyImages}
          companyName={companyName}
          companyUrl={companyUrl}
          onOpen={onOpen}
        />
      </AnimatedGridItem>
    ))
);
RenderProjects.displayName = "RenderProjects";

type HomeProjectsGridProps = {
  works: (WorkHistory & { _origIndex: number })[];
  onOpen: (payload: ProjectModalPayload) => void;
};

export const HomeProjectsGrid = memo(
  ({ works, onOpen }: HomeProjectsGridProps) => (
    <Grid container spacing={3}>
      {works.map((element: WorkHistory & { _origIndex: number }, idx: number) => (
        <RenderProjects
          key={`${element.company}-${idx}`}
          projects={element.achievements}
          companyImage={
            Array.isArray(element.company_image)
              ? element.company_image[0]
              : element.company_image
          }
          companyImages={
            Array.isArray(element.company_image)
              ? element.company_image
              : element.company_image
                ? [element.company_image]
                : []
          }
          companyName={element.company}
          companyUrl={element.achievements?.[0]?.url}
          onOpen={onOpen}
        />
      ))}
    </Grid>
  )
);
HomeProjectsGrid.displayName = "HomeProjectsGrid";
