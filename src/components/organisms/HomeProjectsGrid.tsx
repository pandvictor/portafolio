import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo, useMemo, useRef } from "react";
import { CardItem } from "../molecules";
import { Project, ProjectModalPayload, WorkHistory } from "../../types/types";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  TiltCard,
  motionize,
  transitions,
} from "../motion";

const ProjectsSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));

const ProjectsHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-3)",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(4),
  },
}));

const ProjectsEyebrow = styled(Typography)(() => ({
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "var(--text-secondary)",
}));

const ScrollShell = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  display: "flex",
  gap: theme.spacing(2),
  padding: theme.spacing(1, 0, 2),
  perspective: "1400px",
  scrollSnapType: "x mandatory",
  scrollPaddingLeft: theme.spacing(2),
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    height: 8,
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(148,163,184,0.35)",
    borderRadius: 999,
  },
  "&::-webkit-scrollbar-track": {
    background: "rgba(15,23,42,0.4)",
    borderRadius: 999,
  },
}));

const MotionScrollShell = motionize(ScrollShell);

const SlideItem = styled(Box)(({ theme }) => ({
  flex: "0 0 auto",
  width: "min(380px, 86vw)",
  scrollSnapAlign: "start",
  borderRadius: 24,
  [theme.breakpoints.up("sm")]: {
    width: 360,
  },
  [theme.breakpoints.up("md")]: {
    width: 380,
  },
}));

const MotionSlideItem = motionize(SlideItem);

type SlideData = {
  key: string;
  project: Project;
  companyImage?: string;
  companyImages?: string[];
  companyName?: string;
  companyUrl?: string;
};

type HomeProjectsGridProps = {
  works: (WorkHistory & { _origIndex: number })[];
  onOpen: (payload: ProjectModalPayload) => void;
  kicker: string;
  title: string;
  subtitle: string;
  note?: string;
};

/** Cards fly in from the right, matching the direction the rail scrolls. */
const slideVariants = {
  hidden: { opacity: 0, x: 48, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: transitions.enter },
};

export const HomeProjectsGrid = memo(
  ({ works, onOpen, kicker, title, subtitle, note }: HomeProjectsGridProps) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const slides = useMemo<SlideData[]>(() => {
      const items: SlideData[] = [];
      works.forEach((work, workIdx) => {
        const companyImage = Array.isArray(work.company_image)
          ? work.company_image[0]
          : work.company_image;
        const companyImages = Array.isArray(work.company_image)
          ? work.company_image
          : work.company_image
            ? [work.company_image]
            : [];
        work.achievements.forEach((project, projectIdx) => {
          items.push({
            key: `${work.company}-${project.title}-${workIdx}-${projectIdx}`,
            project,
            companyImage,
            companyImages,
            companyName: work.company,
            companyUrl: work.achievements?.[0]?.url,
          });
        });
      });
      return items;
    }, [works]);

    return (
      <ProjectsSection>
        <StaggerGroup stagger={0.07}>
          <ProjectsHeader>
            <StaggerItem>
              <ProjectsEyebrow variant='overline'>{kicker}</ProjectsEyebrow>
            </StaggerItem>
            <StaggerItem preset='up'>
              <Typography variant='h4'>{title}</Typography>
            </StaggerItem>
            <StaggerItem>
              <Typography variant='body1' color='text.secondary'>
                {subtitle}
              </Typography>
            </StaggerItem>
            {note && (
              <StaggerItem>
                <Typography variant='body2' color='text.secondary'>
                  {note}
                </Typography>
              </StaggerItem>
            )}
          </ProjectsHeader>
        </StaggerGroup>
        <Reveal preset='fade'>
          <MotionScrollShell
            ref={scrollRef}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09 } },
            }}
            initial='hidden'
            whileInView='visible'
            // The rail is wider than the viewport, so trigger on a thin slice
            // instead of waiting for the whole row to be on screen.
            viewport={{ once: true, amount: 0.05 }}>
            {slides.map((slide) => (
              <MotionSlideItem key={slide.key} variants={slideVariants}>
                <TiltCard maxTilt={6} lift={6}>
                  <CardItem
                    data={slide.project}
                    companyImage={slide.companyImage}
                    companyImages={slide.companyImages}
                    companyName={slide.companyName}
                    companyUrl={slide.companyUrl}
                    onOpen={onOpen}
                  />
                </TiltCard>
              </MotionSlideItem>
            ))}
          </MotionScrollShell>
        </Reveal>
      </ProjectsSection>
    );
  }
);

HomeProjectsGrid.displayName = "HomeProjectsGrid";
