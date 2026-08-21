import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Project, ProjectModalPayload } from "../../types/types";
import { publicPath } from "../../constants/gloabals";
import { resolveTechIconFromStack } from "../../utils/techIcons";
import { SectionHeader, SectionSurface } from "../molecules";
import {
  MagneticButton,
  Reveal,
  StaggerGroup,
  StaggerItem,
  mediaReveal,
  motionize,
  transitions,
} from "../motion";

type HomeFeaturedProjectSectionProps = {
  kicker: string;
  title: string;
  subtitle: string;
  cta: string;
  project: Project;
  companyName?: string;
  companyImage?: string;
  companyImages?: string[];
  onOpen?: (payload: ProjectModalPayload) => void;
};

const ContentGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: "var(--space-6)",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
    alignItems: "center",
  },
}));

const MediaFrame = styled(Box)(() => ({
  position: "relative",
  borderRadius: 20,
  overflow: "hidden",
  border: "1px solid var(--border-subtle)",
  background: "rgba(15,23,42,0.7)",
  paddingTop: "56.25%",
  boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
}));

const MotionMediaFrame = motionize(MediaFrame);

const MediaImage = styled("img")(() => ({
  position: "absolute",
  inset: "-6% 0",
  width: "100%",
  height: "112%",
  objectFit: "cover",
  display: "block",
}));

const MotionMediaImage = motionize(MediaImage);

const CompanyRow = styled(Stack)(() => ({
  alignItems: "center",
  gap: "var(--space-3)",
}));

const CompanyLogo = styled("img")(() => ({
  height: 34,
  width: "auto",
  maxWidth: 140,
  objectFit: "contain",
}));

const OutcomesRow = styled(Stack)(() => ({
  flexWrap: "wrap",
}));

const FeaturedDescription = styled(Typography)(() => ({
  display: "-webkit-box",
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));

const OutcomeChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "lead",
})<{ lead?: boolean }>(({ lead }) => ({
  borderRadius: 999,
  fontWeight: 700,
  borderColor: lead ? "rgba(34,211,238,0.65)" : "rgba(148,163,184,0.3)",
  backgroundColor: lead ? "rgba(34,211,238,0.14)" : "rgba(15,23,42,0.5)",
}));

const MotionOutcomeChip = motionize(OutcomeChip);

const TechRow = styled(Stack)(() => ({
  flexWrap: "wrap",
}));

const TechAvatar = styled(Avatar)(() => ({
  width: 30,
  height: 30,
  backgroundColor: "rgba(15,23,42,0.65)",
  border: "1px solid var(--border-subtle)",
}));

const MotionTechAvatar = motionize(TechAvatar);

export const HomeFeaturedProjectSection = memo(
  ({
    kicker,
    title,
    subtitle,
    cta,
    project,
    companyName,
    companyImage,
    companyImages,
    onOpen,
  }: HomeFeaturedProjectSectionProps) => {
    const logos =
      companyImages && companyImages.length > 0
        ? companyImages
        : companyImage
          ? [companyImage]
          : [];
    const outcomes = project.outcomes ?? [];

    // Slow vertical parallax on the screenshot as the section crosses the viewport.
    const frameRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: frameRef,
      offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
      <Reveal preset='up'>
        <SectionSurface tone='feature'>
          <SectionHeader
            kicker={kicker}
            title={title}
            subtitle={subtitle}
            size='lead'
          />
          <ContentGrid>
            <MotionMediaFrame
              ref={frameRef}
              variants={mediaReveal}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ scale: 1.015 }}
              transition={transitions.base}>
              <MotionMediaImage
                style={{ y: imageY }}
                src={`${publicPath}/images/${project.image}`}
                alt={project.title}
              />
            </MotionMediaFrame>
            <StaggerGroup stagger={0.07} delayChildren={0.1}>
              <Stack spacing={2.5}>
                <StaggerItem>
                  <CompanyRow direction='row' spacing={1.5}>
                    {logos.map((logo, idx) => (
                      <CompanyLogo
                        key={`${logo}-${idx}`}
                        src={`${publicPath}/images/${logo}`}
                        alt={companyName || project.title}
                      />
                    ))}
                    <Typography variant='h5' component='h3'>
                      {project.title}
                    </Typography>
                  </CompanyRow>
                </StaggerItem>
                <StaggerItem>
                  <FeaturedDescription variant='body1' color='text.secondary'>
                    {project.description}
                  </FeaturedDescription>
                </StaggerItem>
                {outcomes.length > 0 && (
                  <StaggerItem>
                    <OutcomesRow direction='row' spacing={1} useFlexGap>
                      {outcomes.slice(0, 3).map((item, idx) => (
                        <MotionOutcomeChip
                          key={`${item}-${idx}`}
                          label={item}
                          size='small'
                          variant='outlined'
                          lead={idx === 0}
                          whileHover={{ y: -3, scale: 1.04 }}
                          transition={transitions.quick}
                        />
                      ))}
                    </OutcomesRow>
                  </StaggerItem>
                )}
                <StaggerItem>
                  <TechRow direction='row' spacing={1} useFlexGap>
                    {project.tech_stack.slice(0, 6).map((tech, idx) => {
                      const icon = resolveTechIconFromStack(tech);
                      return (
                        <MotionTechAvatar
                          key={`${tech.name}-${idx}`}
                          src={`${publicPath}/images/icons/${icon}`}
                          alt={tech.name}
                          title={tech.name}
                          whileHover={{ y: -5, scale: 1.12 }}
                          transition={transitions.spring}
                        />
                      );
                    })}
                  </TechRow>
                </StaggerItem>
                <StaggerItem>
                  <MagneticButton>
                    <Button
                      variant='contained'
                      color='primary'
                      size='large'
                      onClick={() =>
                        onOpen?.({
                          project,
                          companyImage,
                          companyImages,
                          companyName,
                        })
                      }>
                      {cta}
                    </Button>
                  </MagneticButton>
                </StaggerItem>
              </Stack>
            </StaggerGroup>
          </ContentGrid>
        </SectionSurface>
      </Reveal>
    );
  }
);

HomeFeaturedProjectSection.displayName = "HomeFeaturedProjectSection";
