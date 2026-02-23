import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import { publicPath } from "../../constants/gloabals";
import { SkillIconsRow } from "../molecules";
import { Resume, ContactInfo } from "../../types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import i18n from "../../utils/i18n";
import { keyframes } from "@mui/system";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(18px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const HeroRoot = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  position: "relative",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius * 4,
  border: "1px solid var(--border-subtle)",
  background:
    "radial-gradient(circle at 18% 20%, rgba(34,211,238,0.18), transparent 40%), radial-gradient(circle at 82% 10%, rgba(163,230,53,0.16), transparent 38%), linear-gradient(135deg, rgba(12,18,28,0.98), rgba(11,17,27,0.92))",
  boxShadow: "var(--shadow-strong)",
  animation: `${fadeInUp} 0.6s ease`,
  perspective: "1600px",
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(7),
    borderRadius: theme.shape.borderRadius * 5,
  },
}));

const FlipButtonShell = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
  zIndex: 5,
  padding: "1px",
  borderRadius: 999,
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.95), rgba(163,230,53,0.9))",
  boxShadow: "0 12px 28px rgba(34,211,238,0.35)",
  [theme.breakpoints.up("sm")]: {
    top: 14,
    right: 14,
  },
}));

const FlipIcon = styled(SwapHorizRoundedIcon)(() => ({
  fontSize: 18,
}));

const FlipButton = styled(Button)(({ theme }) => ({
  borderRadius: 999,
  padding: theme.spacing(0.45, 1.4),
  minHeight: 0,
  textTransform: "none",
  fontWeight: 800,
  fontSize: "0.72rem",
  color: "rgba(226,232,240,0.92)",
  backgroundColor: "rgba(15,23,42,0.7)",
  backdropFilter: "blur(6px)",
  boxShadow: "inset 0 0 0 1px rgba(148,163,184,0.35)",
  "&:hover": {
    backgroundColor: "rgba(17,24,39,0.9)",
    transform: "translateY(-2px)",
    boxShadow: "0 12px 22px rgba(0,0,0,0.45)",
  },
}));

const OrbTop = styled(Box)(() => ({
  position: "absolute",
  width: 180,
  height: 180,
  borderRadius: "50%",
  top: -50,
  right: -30,
  background:
    "radial-gradient(circle, rgba(34,211,238,0.28) 0%, rgba(34,211,238,0.06) 60%, transparent 70%)",
  filter: "blur(1px)",
}));

const OrbBottom = styled(Box)(() => ({
  position: "absolute",
  width: 220,
  height: 220,
  borderRadius: "50%",
  bottom: -60,
  left: -40,
  background:
    "radial-gradient(circle, rgba(163,230,53,0.2) 0%, rgba(163,230,53,0.05) 65%, transparent 75%)",
  filter: "blur(2px)",
}));

const FlipGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== "flipped" && prop !== "reducedMotion",
})<{ flipped: boolean; reducedMotion: boolean }>(({ flipped, reducedMotion }) => ({
  position: "relative",
  display: "grid",
  transformStyle: "preserve-3d",
  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  transition: reducedMotion ? "none" : "transform 0.9s ease",
}));

const FlipFace = styled(Box)(() => ({
  gridArea: "1 / 1",
  backfaceVisibility: "hidden",
}));

const FlipBackFace = styled(Box)(() => ({
  gridArea: "1 / 1",
  transform: "rotateY(180deg)",
  backfaceVisibility: "hidden",
}));

const HeroContent = styled(Stack)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3.5, 2.5),
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6, 5),
  },
}));

const HeroLeft = styled(Stack)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  textAlign: "center",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    alignItems: "flex-start",
  },
}));

const ChipRow = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

const GradientChip = styled(Chip)(({ theme }) => ({
  fontWeight: 800,
  borderRadius: 999,
  color: "white",
  background: "linear-gradient(90deg, #22d3ee, #a3e635)",
  boxShadow: "0 12px 30px rgba(34,211,238,0.35)",
  "& .MuiChip-label": {
    paddingLeft: theme.spacing(1.25),
    paddingRight: theme.spacing(1.25),
    letterSpacing: "0.02em",
  },
}));

const SecondaryChip = styled(Chip)(() => ({
  fontWeight: 700,
  borderRadius: 999,
}));

const OutlineChip = styled(Chip)(() => ({
  fontWeight: 700,
  borderRadius: 999,
  borderColor: "var(--border-strong)",
  color: "var(--text-primary)",
}));

const OutlineSecondaryChip = styled(Chip)(() => ({
  fontWeight: 700,
  borderRadius: 999,
  borderColor: "rgba(163,230,53,0.6)",
  color: "var(--text-primary)",
}));

const HeroName = styled(Typography)(() => ({
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
}));

const HeroRole = styled(Typography)(() => ({
  fontWeight: 600,
}));

const HeroSubtitle = styled(Typography)(() => ({
  maxWidth: 720,
}));

const BulletRow = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

const BulletDot = styled(Box)(() => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: "radial-gradient(circle, #22d3ee 0%, #a3e635 80%)",
  boxShadow: "0 0 0 6px rgba(34,211,238,0.2)",
  flexShrink: 0,
}));

const BulletText = styled(Typography)(() => ({
  fontWeight: 600,
}));

const CtaRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  alignItems: "stretch",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));

const PrimaryCtaButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
}));

const LinkedInButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  textTransform: "none",
  fontWeight: 700,
  borderColor: "rgba(10,102,194,0.6)",
  color: "#7cb6ff",
  backgroundColor: "rgba(10,102,194,0.18)",
  "&:hover": {
    borderColor: "#7cb6ff",
    backgroundColor: "rgba(10,102,194,0.28)",
  },
}));

const TalkButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
}));

const LinkedInIcon = styled("img")(() => ({
  width: 18,
  height: 18,
}));

const AvatarWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: 340,
  },
}));

const AvatarGlow = styled(Box)(() => ({
  position: "absolute",
  inset: 14,
  borderRadius: "28px",
  background:
    "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(163,230,53,0.12))",
  filter: "blur(6px)",
}));

const HeroAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  borderRadius: "28px",
  border: "2px solid rgba(148,163,184,0.35)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
  position: "relative",
  zIndex: 1,
  objectFit: "cover",
  [theme.breakpoints.up("sm")]: {
    width: 240,
    height: 240,
  },
  [theme.breakpoints.up("md")]: {
    width: 300,
    height: 300,
  },
}));

const SectionTitle = styled(Typography)(() => ({
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
}));

const SectionBody = styled(Typography)(() => ({
  maxWidth: 700,
}));

const TagRow = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  gap: theme.spacing(1),
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

const TagChip = styled(Chip)(() => ({
  borderRadius: 999,
  fontWeight: 700,
  borderColor: "var(--border-strong)",
}));

const ToolChip = styled(Chip)(() => ({
  borderRadius: 999,
  fontWeight: 800,
  color: "white",
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.9), rgba(163,230,53,0.85))",
  boxShadow: "0 10px 22px rgba(34,211,238,0.3)",
}));

const ToolsCaption = styled(Typography)(() => ({
  fontWeight: 600,
}));

const PipelineWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: 440,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: 380,
  },
}));

const PipelineGlow = styled(Box)(() => ({
  position: "absolute",
  inset: 14,
  borderRadius: "28px",
  background:
    "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(163,230,53,0.12))",
  filter: "blur(6px)",
}));

const PipelinePanel = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: "28px",
  border: "2px solid rgba(148,163,184,0.35)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
  position: "relative",
  zIndex: 1,
  background:
    "linear-gradient(135deg, rgba(12,18,28,0.95), rgba(15,23,42,0.9))",
  backdropFilter: "blur(6px)",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(2.5),
  },
}));

const PipelineHeaderIcon = styled(Box)(() => ({
  width: 36,
  height: 36,
  borderRadius: "12px",
  display: "grid",
  placeItems: "center",
  background:
    "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(163,230,53,0.18))",
}));

const Icon20 = styled("img")(() => ({
  width: 20,
  height: 20,
}));

const PipelineTitle = styled(Typography)(() => ({
  fontWeight: 800,
}));

const PipelineChip = styled(Chip)(() => ({
  marginLeft: "auto",
  fontWeight: 800,
  borderRadius: 999,
  color: "white",
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.9), rgba(163,230,53,0.9))",
}));

const PipelineDivider = styled(Box)(() => ({
  height: 2,
  borderRadius: 999,
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.6), rgba(163,230,53,0.6))",
  opacity: 0.7,
}));

const PipelineStepsRow = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  gap: theme.spacing(0.75),
  alignItems: "center",
}));

const PipelineStepBadge = styled(Box)(() => ({
  padding: "3.2px 8px",
  borderRadius: 999,
  backgroundColor: "rgba(148,163,184,0.12)",
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.02em",
}));

const ArrowIcon = styled(ArrowRightAltRoundedIcon)(() => ({
  fontSize: 14,
  color: "rgba(148,163,184,0.9)",
}));

const PipelineCardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0,1fr))",
  gap: theme.spacing(1.25),
}));

const PipelineCard = styled(Box)(() => ({
  padding: "9.6px",
  borderRadius: 8,
  border: "1px solid var(--border-subtle)",
  background: "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(12,18,28,0.95))",
  boxShadow: "0 16px 28px rgba(0,0,0,0.45)",
  display: "flex",
  flexDirection: "column",
  gap: 6,
  minHeight: 92,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 22px 36px rgba(0,0,0,0.55)",
  },
}));

const PipelineCardIcon = styled(Box)(() => ({
  width: 32,
  height: 32,
  borderRadius: "10px",
  backgroundColor: "rgba(34,211,238,0.12)",
  display: "grid",
  placeItems: "center",
}));

const Icon18 = styled("img")(() => ({
  width: 18,
  height: 18,
}));

const PipelineCardTitle = styled(Typography)(() => ({
  fontWeight: 800,
}));

const DeliveryRow = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.8, 1.2),
  borderRadius: 999,
  border: "1px solid rgba(34,211,238,0.3)",
  backgroundColor: "rgba(34,211,238,0.12)",
}));

const DeliveryItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
}));

const Icon16 = styled("img")(() => ({
  width: 16,
  height: 16,
}));

const DeliveryLabel = styled(Typography)(() => ({
  fontWeight: 700,
}));

const DeliveryCaption = styled(Typography)(() => ({
  fontWeight: 600,
  marginLeft: "auto",
}));

type HeroSectionProps = {
  resume: Resume;
  language: string;
  contactInfo: ContactInfo[];
  bullets: string[];
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  resume,
  language,
  contactInfo,
  bullets,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const flipTimerRef = useRef<number | null>(null);
  const contactUrl = contactInfo?.[0]?.url;
  const linkedinUrl = useMemo(
    () =>
      contactInfo?.find(
        (item) =>
          item?.title?.toLowerCase?.().includes("linkedin") ||
          item?.icon === "linkedin.svg"
      )?.url,
    [contactInfo]
  );
  const downloadHref = useMemo(
    () => `${publicPath}/files/resume-victor-hernandez-${language}.pdf`,
    [language]
  );
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);
  const pipelineCards = useMemo(
    () => [
      {
        key: "data",
        icon: "mongodb.svg",
        title: language === "es" ? "Capa de datos" : "Data layer",
        desc: language === "es" ? "Ingesta + calidad" : "Ingestion + quality",
      },
      {
        key: "retrieval",
        icon: "rtk-query.svg",
        title: language === "es" ? "Recuperación" : "Retrieval",
        desc: language === "es" ? "Embeddings + RAG" : "Embeddings + RAG",
      },
      {
        key: "orchestration",
        icon: "kubernetes.svg",
        title: language === "es" ? "Orquestación" : "Orchestration",
        desc: language === "es" ? "Pipelines + tools" : "Pipelines + tools",
      },
      {
        key: "evaluation",
        icon: "jira.svg",
        title: language === "es" ? "Evaluación" : "Evaluation",
        desc: language === "es" ? "LLM-as-judge" : "LLM-as-judge",
      },
      {
        key: "monitoring",
        icon: "dash.svg",
        title: language === "es" ? "Monitoreo" : "Monitoring",
        desc: language === "es" ? "Latencia + costo" : "Latency + cost",
      },
      {
        key: "feedback",
        icon: "git.svg",
        title: language === "es" ? "Ciclo de feedback" : "Feedback loop",
        desc: language === "es" ? "A/B + reentrenar" : "A/B + retraining",
      },
    ],
    [language]
  );
  const deliveryIcons = useMemo(
    () => [
      { key: "web", icon: "react.svg", label: "Web" },
      { key: "ios", icon: "ios.svg", label: "iOS" },
      { key: "android", icon: "android.svg", label: "Android" },
    ],
    []
  );
  const pipelineSteps = useMemo(
    () =>
      language === "es"
        ? ["Ingesta", "Embeddings", "RAG", "Evaluación", "Deploy"]
        : ["Ingest", "Embeddings", "RAG", "Evaluation", "Deploy"],
    [language]
  );

  const startFlipTimer = useCallback(() => {
    if (prefersReducedMotion || typeof window === "undefined") return;
    if (flipTimerRef.current) {
      window.clearInterval(flipTimerRef.current);
    }
    flipTimerRef.current = window.setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 20000);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (flipTimerRef.current) {
        window.clearInterval(flipTimerRef.current);
        flipTimerRef.current = null;
      }
      return;
    }
    startFlipTimer();
    return () => {
      if (flipTimerRef.current) {
        window.clearInterval(flipTimerRef.current);
        flipTimerRef.current = null;
      }
    };
  }, [isPaused, prefersReducedMotion, startFlipTimer]);

  const handleManualFlip = () => {
    setIsFlipped((prev) => !prev);
    if (!isPaused) startFlipTimer();
  };

  return (
    <HeroRoot
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <FlipButtonShell>
        <FlipButton
          onClick={handleManualFlip}
          aria-label={language === "es" ? "Girar sección" : "Flip section"}
          endIcon={<FlipIcon />}
          size='small'>
          {isFlipped
            ? language === "es"
              ? "Ver perfil"
              : "View profile"
            : language === "es"
              ? "Ver IA"
              : "View AI"}
        </FlipButton>
      </FlipButtonShell>
      <OrbTop />
      <OrbBottom />
      <FlipGrid flipped={isFlipped} reducedMotion={prefersReducedMotion}>
        <FlipFace>
          <HeroContent
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 5 }}
            alignItems='center'>
            <HeroLeft spacing={2.5}>
              <ChipRow direction='row' spacing={1} alignItems='center' useFlexGap>
                <GradientChip
                  label={
                    language === "es"
                      ? "Trabajo con IA • LLMs"
                      : "Working with AI • LLMs"
                  }
                  size='small'
                />
                <SecondaryChip
                  label={
                    language === "es"
                      ? "Fintech • Gobierno • Exchanges"
                      : "Fintech • Government • Exchanges"
                  }
                  color='secondary'
                  size='small'
                />
                <OutlineChip
                  label={language === "es" ? "19+ años" : "19+ years"}
                  variant='outlined'
                  color='default'
                  size='small'
                />
                <OutlineSecondaryChip
                  label={
                    language === "es"
                      ? "Crypto • Bitcoin • Lightning"
                      : "Crypto • Bitcoin • Lightning"
                  }
                  variant='outlined'
                  color='secondary'
                  size='small'
                />
              </ChipRow>
              <HeroName variant='h3'>{resume?.full_name}</HeroName>
              <HeroRole variant='h5' color='text.secondary'>
                {resume?.position}
              </HeroRole>
              <SkillIconsRow justify='flex-start' language={language} />
              <HeroSubtitle variant='body1' color='text.secondary'>
                {i18n.t("portfolio.subtitle")}
              </HeroSubtitle>
              <Stack spacing={1}>
                {bullets.map((item, idx) => (
                  <BulletRow
                    key={`${item}-${idx}`}
                    direction='row'
                    spacing={1.5}
                    alignItems='center'>
                    <BulletDot />
                    <BulletText color='text.primary'>{item}</BulletText>
                  </BulletRow>
                ))}
              </Stack>
              <CtaRow
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}>
                <PrimaryCtaButton
                  variant='contained'
                  color='primary'
                  size='large'
                  href={downloadHref}>
                  {i18n.t("download")}
                </PrimaryCtaButton>
                {linkedinUrl && (
                  <LinkedInButton
                    variant='outlined'
                    size='large'
                    href={linkedinUrl}
                    target='_blank'
                    rel='noreferrer'
                    startIcon={
                      <LinkedInIcon
                        alt='LinkedIn'
                        src={`${publicPath}/images/icons/linkedin.svg`}
                      />
                    }>
                    LinkedIn
                  </LinkedInButton>
                )}
                {contactUrl && (
                  <TalkButton
                    variant='outlined'
                    color='inherit'
                    size='large'
                    href={contactUrl}>
                    {language === "es" ? "Hablemos" : "Let's talk"}
                  </TalkButton>
                )}
              </CtaRow>
            </HeroLeft>
            <AvatarWrap>
              <AvatarGlow />
              <HeroAvatar
                alt={resume?.full_name}
                src={`${publicPath}/images/vic.jpeg`}
              />
            </AvatarWrap>
          </HeroContent>
        </FlipFace>
        <FlipBackFace>
          <HeroContent
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 5 }}
            alignItems='center'>
            <HeroLeft spacing={2.5}>
              <GradientChip
                label={language === "es" ? "Arquitectura LLM" : "LLM Architecture"}
                size='small'
              />
              <SectionTitle variant='h4'>
                {language === "es"
                  ? "Arquitectura por capas"
                  : "Layered architecture"}
              </SectionTitle>
              <SectionBody variant='body1' color='text.secondary'>
                {language === "es"
                  ? "Capa de datos • Recuperación • Orquestación • Evaluación • Monitoreo"
                  : "Data Layer • Retrieval Layer • Orchestration • Evaluation • Monitoring"}
              </SectionBody>
              <SectionBody variant='body2' color='text.secondary'>
                {language === "es"
                  ? "Mejora continua con feedback de usuarios web/mobile, guardrails y observabilidad end-to-end."
                  : "Continuous improvement with web/mobile feedback, guardrails, and end-to-end observability."}
              </SectionBody>
              <TagRow direction='row' useFlexGap>
                {[
                  language === "es" ? "Datos" : "Data",
                  language === "es" ? "Recuperación" : "Retrieval",
                  language === "es" ? "Orquestación" : "Orchestration",
                  language === "es" ? "Evaluación" : "Evaluation",
                  language === "es" ? "Monitoreo" : "Monitoring",
                ].map((tag) => (
                  <TagChip key={tag} label={tag} size='small' variant='outlined' />
                ))}
              </TagRow>
              <TagRow direction='row' useFlexGap>
                {[
                  language === "es" ? "Codex" : "Codex",
                  language === "es" ? "Claude" : "Claude",
                ].map((tool) => (
                  <ToolChip key={tool} label={tool} size='small' />
                ))}
                <ToolsCaption variant='caption' color='text.secondary'>
                  {language === "es"
                    ? "Herramientas principales de trabajo"
                    : "Primary working tools"}
                </ToolsCaption>
              </TagRow>
            </HeroLeft>
            <PipelineWrap>
              <PipelineGlow />
              <PipelinePanel>
                <Stack spacing={1.75}>
                  <Stack direction='row' spacing={1} alignItems='center'>
                    <PipelineHeaderIcon>
                      <Icon20
                        alt='AI'
                        src={`${publicPath}/images/icons/aws.svg`}
                      />
                    </PipelineHeaderIcon>
                    <Stack spacing={0.25}>
                      <PipelineTitle variant='subtitle2'>
                        {language === "es"
                          ? "Pipeline LLM en producción"
                          : "Production LLM pipeline"}
                      </PipelineTitle>
                      <Typography variant='caption' color='text.secondary'>
                        {language === "es"
                          ? "Capas técnicas + mejora continua"
                          : "Layered system + continuous improvement"}
                      </Typography>
                    </Stack>
                    <PipelineChip label='AI Ops' size='small' />
                  </Stack>
                  <PipelineDivider />
                  <PipelineStepsRow direction='row' useFlexGap>
                    {pipelineSteps.map((step, idx) => (
                      <Stack
                        key={step}
                        direction='row'
                        spacing={0.5}
                        alignItems='center'>
                        <PipelineStepBadge>{step}</PipelineStepBadge>
                        {idx < pipelineSteps.length - 1 && <ArrowIcon />}
                      </Stack>
                    ))}
                  </PipelineStepsRow>

                  <PipelineCardsGrid>
                    {pipelineCards.map((card) => (
                      <PipelineCard key={card.key}>
                        <PipelineCardIcon>
                          <Icon18
                            alt={card.title}
                            src={`${publicPath}/images/icons/${card.icon}`}
                          />
                        </PipelineCardIcon>
                        <PipelineCardTitle variant='subtitle2'>
                          {card.title}
                        </PipelineCardTitle>
                        <Typography variant='caption' color='text.secondary'>
                          {card.desc}
                        </Typography>
                      </PipelineCard>
                    ))}
                  </PipelineCardsGrid>

                  <DeliveryRow direction='row' spacing={1} alignItems='center'>
                    {deliveryIcons.map((item) => (
                      <DeliveryItem key={item.key}>
                        <Icon16
                          alt={item.label}
                          src={`${publicPath}/images/icons/${item.icon}`}
                        />
                        <DeliveryLabel variant='caption'>
                          {item.label}
                        </DeliveryLabel>
                      </DeliveryItem>
                    ))}
                    <DeliveryCaption variant='caption' color='text.secondary'>
                      {language === "es" ? "Web + Mobile" : "Web + Mobile"}
                    </DeliveryCaption>
                  </DeliveryRow>
                </Stack>
              </PipelinePanel>
            </PipelineWrap>
          </HeroContent>
        </FlipBackFace>
      </FlipGrid>
    </HeroRoot>
  );
};
