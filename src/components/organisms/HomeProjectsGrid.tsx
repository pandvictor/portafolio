import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { CardItem } from "../molecules";
import { Project, ProjectModalPayload, WorkHistory } from "../../types/types";

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

const SlideItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "visible" && prop !== "delay",
})<{ visible: boolean; delay: number }>(({ theme, visible, delay }) => ({
  flex: "0 0 auto",
  width: "min(380px, 86vw)",
  scrollSnapAlign: "start",
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(16px)",
  transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
  [theme.breakpoints.up("sm")]: {
    width: 360,
  },
  [theme.breakpoints.up("md")]: {
    width: 380,
  },
}));

type SlideData = {
  key: string;
  project: Project;
  companyImage?: string;
  companyImages?: string[];
  companyName?: string;
  companyUrl?: string;
};

type ProjectSlideProps = {
  data: SlideData;
  delay: number;
  rootRef: React.RefObject<HTMLDivElement>;
  onOpen?: (payload: ProjectModalPayload) => void;
};

const ProjectSlide = memo(({ data, delay, rootRef, onOpen }: ProjectSlideProps) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = itemRef.current;
    if (!node || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        root: rootRef.current ?? null,
        rootMargin: "0px 120px",
        threshold: 0.25,
      }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootRef, visible]);

  return (
    <SlideItem ref={itemRef} visible={visible} delay={delay}>
      <CardItem
        data={data.project}
        companyImage={data.companyImage}
        companyImages={data.companyImages}
        companyName={data.companyName}
        companyUrl={data.companyUrl}
        onOpen={onOpen}
      />
    </SlideItem>
  );
});
ProjectSlide.displayName = "ProjectSlide";

type HomeProjectsGridProps = {
  works: (WorkHistory & { _origIndex: number })[];
  onOpen: (payload: ProjectModalPayload) => void;
  kicker: string;
  title: string;
  subtitle: string;
  note?: string;
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
        <ProjectsHeader>
          <ProjectsEyebrow variant='overline'>{kicker}</ProjectsEyebrow>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='body1' color='text.secondary'>
            {subtitle}
          </Typography>
          {note && (
            <Typography variant='body2' color='text.secondary'>
              {note}
            </Typography>
          )}
        </ProjectsHeader>
        <ScrollShell ref={scrollRef}>
          {slides.map((slide, index) => (
            <ProjectSlide
              key={slide.key}
              data={slide}
              delay={index * 50}
              rootRef={scrollRef}
              onOpen={onOpen}
            />
          ))}
        </ScrollShell>
      </ProjectsSection>
    );
  }
);
HomeProjectsGrid.displayName = "HomeProjectsGrid";
