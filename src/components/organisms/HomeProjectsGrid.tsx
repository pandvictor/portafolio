import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CardItem, SectionHeader } from "../molecules";
import { Project, ProjectModalPayload, WorkHistory } from "../../types/types";
import i18n from "../../utils/i18n";
import { Reveal, TiltCard, motionize, transitions } from "../motion";

const ProjectsSection = styled(Box)(() => ({
  position: "relative",
}));

const RailWrap = styled(Box)(() => ({
  position: "relative",
}));

const ScrollShell = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  display: "flex",
  gap: theme.spacing(2.5),
  padding: theme.spacing(1, 0, 2),
  perspective: "1400px",
  scrollSnapType: "x mandatory",
  scrollPaddingLeft: theme.spacing(2),
  scrollBehavior: "smooth",
  // The native bar competes with the arrow controls; scrolling stays available
  // via wheel, trackpad, drag, and the buttons.
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

const MotionScrollShell = motionize(ScrollShell);

/** Fades the rail into the page edge so cards never look abruptly cropped. */
const EdgeFade = styled(Box, {
  shouldForwardProp: (prop) => prop !== "side" && prop !== "visible",
})<{ side: "left" | "right"; visible: boolean }>(({ side, visible }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  [side]: -1,
  width: 72,
  pointerEvents: "none",
  zIndex: 2,
  opacity: visible ? 1 : 0,
  transition: "opacity 0.3s ease",
  background: `linear-gradient(${side === "left" ? "90deg" : "270deg"}, var(--bg) 0%, rgba(11,17,27,0.7) 45%, transparent 100%)`,
}));

const RailControls = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const RailButton = styled(IconButton)(() => ({
  width: 42,
  height: 42,
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(15,23,42,0.75)",
  color: "var(--text-primary)",
  transition: "border-color 0.2s ease, background-color 0.2s ease",
  "&:hover": {
    borderColor: "rgba(34,211,238,0.55)",
    backgroundColor: "rgba(23,35,58,0.95)",
  },
  "&.Mui-disabled": {
    opacity: 0.35,
    color: "var(--text-secondary)",
  },
}));

const RailProgressTrack = styled(Box)(({ theme }) => ({
  position: "relative",
  height: 3,
  borderRadius: 3,
  backgroundColor: "rgba(148,163,184,0.16)",
  marginTop: theme.spacing(1),
  overflow: "hidden",
}));

const RailProgressBar = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  borderRadius: 3,
  background: "linear-gradient(90deg, #22d3ee, #a3e635)",
  transition: "left 0.15s linear, width 0.15s linear",
}));

const SlideItem = styled(Box)(({ theme }) => ({
  flex: "0 0 auto",
  width: "min(360px, 82vw)",
  scrollSnapAlign: "start",
  borderRadius: 24,
  [theme.breakpoints.up("sm")]: {
    width: 350,
  },
  [theme.breakpoints.up("md")]: {
    width: 370,
  },
}));

const MotionSlideItem = motionize(SlideItem);

const CountBadge = styled(Typography)(() => ({
  color: "var(--text-secondary)",
  fontWeight: 700,
  fontVariantNumeric: "tabular-nums",
  letterSpacing: "0.14em",
}));

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
    const [progress, setProgress] = useState({ start: 0, end: 1 });
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

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
            // Position-based key: titles and company names are translated, so a
            // content-derived key changes on language switch. That remounts the
            // card, and because the rail already fired its `once` viewport
            // trigger, the fresh child stays stuck at `hidden`.
            key: `${workIdx}-${projectIdx}`,
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

    const syncScrollState = useCallback(() => {
      const node = scrollRef.current;
      if (!node) return;
      const scrollable = node.scrollWidth - node.clientWidth;
      if (scrollable <= 1) {
        setProgress({ start: 0, end: 1 });
        setAtStart(true);
        setAtEnd(true);
        return;
      }
      const ratio = node.scrollLeft / scrollable;
      const windowSize = node.clientWidth / node.scrollWidth;
      setProgress({
        start: ratio * (1 - windowSize),
        end: ratio * (1 - windowSize) + windowSize,
      });
      setAtStart(node.scrollLeft <= 2);
      setAtEnd(node.scrollLeft >= scrollable - 2);
    }, []);

    useEffect(() => {
      syncScrollState();
      const node = scrollRef.current;
      if (!node) return;
      node.addEventListener("scroll", syncScrollState, { passive: true });
      window.addEventListener("resize", syncScrollState);
      return () => {
        node.removeEventListener("scroll", syncScrollState);
        window.removeEventListener("resize", syncScrollState);
      };
    }, [syncScrollState, slides.length]);

    const scrollByCard = useCallback((direction: 1 | -1) => {
      const node = scrollRef.current;
      if (!node) return;
      const card = node.firstElementChild as HTMLElement | null;
      const step = card ? card.offsetWidth + 20 : node.clientWidth * 0.8;
      node.scrollBy({ left: step * direction, behavior: "smooth" });
    }, []);

    return (
      <ProjectsSection>
        <SectionHeader
          kicker={kicker}
          title={title}
          subtitle={subtitle}
          note={note}
          action={
            <RailControls>
              <CountBadge variant='overline'>
                {String(slides.length).padStart(2, "0")}
              </CountBadge>
              <RailButton
                aria-label={i18n.t("home.projects_prev")}
                onClick={() => scrollByCard(-1)}
                disabled={atStart}>
                <ChevronLeftRoundedIcon />
              </RailButton>
              <RailButton
                aria-label={i18n.t("home.projects_next")}
                onClick={() => scrollByCard(1)}
                disabled={atEnd}>
                <ChevronRightRoundedIcon />
              </RailButton>
            </RailControls>
          }
        />
        <Reveal preset='fade'>
          <RailWrap>
            <EdgeFade side='left' visible={!atStart} aria-hidden />
            <EdgeFade side='right' visible={!atEnd} aria-hidden />
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
          </RailWrap>
        </Reveal>
        <RailProgressTrack aria-hidden>
          <RailProgressBar
            sx={{
              left: `${progress.start * 100}%`,
              width: `${Math.max((progress.end - progress.start) * 100, 6)}%`,
            }}
          />
        </RailProgressTrack>
      </ProjectsSection>
    );
  }
);

HomeProjectsGrid.displayName = "HomeProjectsGrid";
