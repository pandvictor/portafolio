import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { Project, ProjectModalPayload } from "../../types/types";
import { publicPath } from "../../constants/gloabals";
import { resolveTechIconFromStack } from "../../utils/techIcons";

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

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  borderRadius: 24,
  border: "1px solid var(--border-subtle)",
  background:
    "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(10,15,24,0.98) 100%)",
  boxShadow: "var(--shadow-strong)",
  padding: "var(--space-6)",
  [theme.breakpoints.up("md")]: {
    padding: "var(--space-7)",
  },
}));

const Header = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-3)",
  marginBottom: "var(--space-5)",
}));

const Kicker = styled(Typography)(() => ({
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "var(--text-secondary)",
}));

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

const MediaImage = styled("img")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
}));

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

const OutcomeChip = styled(Chip)(() => ({
  borderRadius: 999,
  borderColor: "rgba(34,211,238,0.35)",
  backgroundColor: "rgba(15,23,42,0.5)",
  fontWeight: 700,
}));

const TechRow = styled(Stack)(() => ({
  flexWrap: "wrap",
}));

const TechAvatar = styled(Avatar)(() => ({
  width: 30,
  height: 30,
  backgroundColor: "rgba(15,23,42,0.65)",
  border: "1px solid var(--border-subtle)",
}));

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
    return (
      <Section>
        <Header>
          <Kicker variant='overline'>{kicker}</Kicker>
          <Typography variant='h3'>{title}</Typography>
          <Typography variant='body1' color='text.secondary'>
            {subtitle}
          </Typography>
        </Header>
        <ContentGrid>
          <MediaFrame>
            <MediaImage
              src={`${publicPath}/images/${project.image}`}
              alt={project.title}
            />
          </MediaFrame>
          <Stack spacing={2.5}>
            <CompanyRow direction='row' spacing={1.5}>
              {logos.map((logo, idx) => (
                <CompanyLogo
                  key={`${logo}-${idx}`}
                  src={`${publicPath}/images/${logo}`}
                  alt={companyName || project.title}
                />
              ))}
              <Typography variant='h5'>{project.title}</Typography>
            </CompanyRow>
            <FeaturedDescription variant='body1' color='text.secondary'>
              {project.description}
            </FeaturedDescription>
            {outcomes.length > 0 && (
              <OutcomesRow direction='row' spacing={1} useFlexGap>
                {outcomes.slice(0, 3).map((item, idx) => (
                  <OutcomeChip key={`${item}-${idx}`} label={item} size='small' variant='outlined' />
                ))}
              </OutcomesRow>
            )}
            <TechRow direction='row' spacing={1} useFlexGap>
              {project.tech_stack.slice(0, 6).map((tech, idx) => {
                const icon = resolveTechIconFromStack(tech);
                return (
                  <TechAvatar
                    key={`${tech.name}-${idx}`}
                    src={`${publicPath}/images/icons/${icon}`}
                    alt={tech.name}
                  />
                );
              })}
            </TechRow>
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
          </Stack>
        </ContentGrid>
      </Section>
    );
  }
);

HomeFeaturedProjectSection.displayName = "HomeFeaturedProjectSection";
