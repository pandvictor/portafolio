import { Box, Button, Chip, Stack, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import type { ButtonProps } from "@mui/material/Button";
import type { TypographyProps } from "@mui/material/Typography";
import { printResumePath, publicPath } from "../../constants/gloabals";
import {
  HeroAvatar,
  HeroFlipButton,
  HeroImpactPanel,
  SkillIconsRow,
} from "../molecules";
import { Resume, ContactInfo } from "../../types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import i18n from "../../utils/i18n";
import { useLanguage } from "../../context/LanguageContext";
import { Link as RouterLink } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import {
  MagneticButton,
  ShimmerText,
  StaggerItem,
  createStagger,
  motionize,
  transitions,
} from "../motion";

const HeroRoot = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  position: "relative",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius * 4,
  border: "1px solid var(--border-subtle)",
  background:
    "radial-gradient(circle at 18% 20%, rgba(34,211,238,0.18), transparent 40%), radial-gradient(circle at 82% 10%, rgba(163,230,53,0.16), transparent 38%), linear-gradient(135deg, rgba(12,18,28,0.98), rgba(11,17,27,0.92))",
  boxShadow: "var(--shadow-strong)",
  perspective: "1600px",
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(7),
    borderRadius: theme.shape.borderRadius * 5,
  },
}));

const MotionHeroRoot = motionize(HeroRoot);

const Orb = styled(Box)(() => ({
  position: "absolute",
  borderRadius: "50%",
  pointerEvents: "none",
}));

const MotionOrb = motionize(Orb);

const FlipGrid = styled(Box)(() => ({
  position: "relative",
  display: "grid",
  transformStyle: "preserve-3d",
}));

const MotionFlipGrid = motionize(FlipGrid);

const FlipFace = styled(Box)(() => ({
  gridArea: "1 / 1",
  backfaceVisibility: "hidden",
}));

const FlipBackFace = styled(Box)(() => ({
  gridArea: "1 / 1",
  transform: "rotateY(180deg)",
  backfaceVisibility: "hidden",
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2.5),
  alignItems: "center",
  // Extra top padding on small screens keeps the first chip row from running
  // under the absolutely positioned flip button.
  padding: theme.spacing(7, 2, 3),
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(7),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    gap: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6, 11),
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 340px",
    alignItems: "center",
    columnGap: theme.spacing(5),
    rowGap: theme.spacing(4),
  },
}));

const HeroLeft = styled(Stack)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  textAlign: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 2,
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    alignItems: "flex-start",
  },
}));

const MotionHeroLeft = motionize(HeroLeft);

const ChipRow = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  justifyContent: "center",
  "& .MuiChip-root": {
    height: 26,
    fontSize: "0.74rem",
  },
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

const MotionGradientChip = motionize(GradientChip);

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

const HeroName = styled(Typography)<TypographyProps<"h1">>(() => ({
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
}));

const HeroRole = styled(Typography)<TypographyProps<"p">>(() => ({
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
  flexShrink: 0,
}));

const MotionBulletDot = motionize(BulletDot);

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

const LinkedInButton = styled(Button)<ButtonProps<"a">>(({ theme }) => ({
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

const TalkButton = styled(Button)<ButtonProps<typeof RouterLink>>(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
}));

const LinkedInIcon = styled("img")(() => ({
  width: 18,
  height: 18,
}));

const SectionTitle = styled(Typography)<TypographyProps<"h2">>(() => ({
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
}));

const SectionBody = styled(Typography)(() => ({
  maxWidth: 700,
}));

const TagRow = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

const TagChip = styled(Chip)(() => ({
  borderRadius: 999,
  fontWeight: 700,
  borderColor: "var(--border-strong)",
}));

const MotionTagChip = motionize(TagChip);

const IMPACT_ICON_MAP: Record<string, string> = {
  features: "jira.svg",
  mobile: "react-native.svg",
  frontend: "react.svg",
  backend: "nodejs.svg",
  reliability: "kubernetes.svg",
  experiments: "openai.svg",
};

/**
 * Long enough that the panel is unlikely to change while someone is mid-sentence.
 * The previous 20s swapped the hero out from under a reader.
 */
const AUTO_FLIP_INTERVAL_MS = 45000;

type HeroSectionProps = {
  resume: Resume;
  contactInfo: ContactInfo[];
  bullets: string[];
  /** Opens the "email or WhatsApp?" chooser. */
  onContact: () => void;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  resume,
  contactInfo,
  bullets,
  onContact,
}) => {
  const { language } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  // Once the visitor flips the panel themselves they have taken control, and
  // swapping the content out from under them again is hostile to reading.
  const [autoFlipStopped, setAutoFlipStopped] = useState(false);
  const flipTimerRef = useRef<number | null>(null);
  const theme = useTheme();
  const isCompact = useMediaQuery(theme.breakpoints.down("sm"));
  const reduceMotion = useReducedMotion();

  // Cursor spotlight: a soft light that tracks the pointer across the hero.
  const pointerX = useMotionValue(-400);
  const pointerY = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${pointerX}px ${pointerY}px, rgba(34,211,238,0.12), transparent 65%)`;

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
  const primaryAction = { label: i18n.t("hero.cta.talk") };
  const secondaryAction = contactUrl
    ? { label: i18n.t("download"), href: printResumePath, type: "download" }
    : linkedinUrl
      ? { label: "LinkedIn", href: linkedinUrl, type: "linkedin" }
      : null;
  const prefersReducedMotion = Boolean(reduceMotion);
  const chipLabels = useMemo(() => i18n.t("hero.chips") as Record<string, string>, [
    language,
  ]);
  const backTags = useMemo(() => i18n.t("hero.back.tags") as string[], [language]);
  const impactCardsCopy = useMemo(
    () => i18n.t("hero.back.cards") as { key: string; title: string; desc: string }[],
    [language]
  );
  const impactCards = useMemo(
    () =>
      impactCardsCopy.map((card) => ({
        ...card,
        icon: IMPACT_ICON_MAP[card.key] ?? "react.svg",
      })),
    [impactCardsCopy]
  );
  const visibleBullets = useMemo(
    () => (isCompact ? bullets.slice(0, 2) : bullets),
    [bullets, isCompact]
  );

  const startFlipTimer = useCallback(() => {
    if (prefersReducedMotion || typeof window === "undefined") return;
    if (flipTimerRef.current) {
      window.clearInterval(flipTimerRef.current);
    }
    flipTimerRef.current = window.setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, AUTO_FLIP_INTERVAL_MS);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || autoFlipStopped) {
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
  }, [autoFlipStopped, isPaused, prefersReducedMotion, startFlipTimer]);

  const handleManualFlip = () => {
    setIsFlipped((prev) => !prev);
    setAutoFlipStopped(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
  };

  return (
    <MotionHeroRoot
      initial={{ opacity: 0, y: 28, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        pointerX.set(-400);
        pointerY.set(-400);
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: spotlight,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <HeroFlipButton isFlipped={isFlipped} onToggle={handleManualFlip} />
      <MotionOrb
        aria-hidden
        sx={{
          width: 180,
          height: 180,
          top: -50,
          right: -30,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.28) 0%, rgba(34,211,238,0.06) 60%, transparent 70%)",
          filter: "blur(1px)",
        }}
        animate={{ y: [0, 22, 0], x: [0, -14, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
      />
      <MotionOrb
        aria-hidden
        sx={{
          width: 220,
          height: 220,
          bottom: -60,
          left: -40,
          background:
            "radial-gradient(circle, rgba(163,230,53,0.2) 0%, rgba(163,230,53,0.05) 65%, transparent 75%)",
          filter: "blur(2px)",
        }}
        animate={{ y: [0, -26, 0], x: [0, 18, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, delay: 1.5 }}
      />
      <MotionFlipGrid
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.95, ease: [0.65, 0, 0.35, 1] }
        }>
        <FlipFace>
          <HeroContent>
            <MotionHeroLeft
              spacing={{ xs: 2, sm: 2.5 }}
              variants={createStagger(0.09, 0.25)}
              initial='hidden'
              animate='visible'>
                <StaggerItem>
                  <ChipRow direction='row' spacing={1} alignItems='center' useFlexGap>
                    <MotionGradientChip
                      label={chipLabels.ai}
                      size='small'
                      whileHover={{ scale: 1.06 }}
                      transition={transitions.quick}
                    />
                    <SecondaryChip
                      label={chipLabels.sectors}
                      color='secondary'
                      size='small'
                      sx={{ display: { xs: "none", sm: "inline-flex" } }}
                    />
                    <OutlineChip
                      label={chipLabels.experience}
                      variant='outlined'
                      color='default'
                      size='small'
                    />
                    <OutlineSecondaryChip
                      label={chipLabels.crypto}
                      variant='outlined'
                      color='secondary'
                      size='small'
                      sx={{ display: { xs: "none", sm: "inline-flex" } }}
                    />
                  </ChipRow>
                </StaggerItem>
                <StaggerItem preset='up'>
                  <HeroName
                    variant='h3'
                    component='h1'
                    sx={{ fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" } }}>
                    <ShimmerText>{resume?.full_name}</ShimmerText>
                  </HeroName>
                </StaggerItem>
                <StaggerItem>
                  <HeroRole
                    variant='h5'
                    component='p'
                    color='text.secondary'
                    sx={{ fontSize: { xs: "1.05rem", sm: "1.2rem" } }}>
                    {resume?.position}
                  </HeroRole>
                </StaggerItem>
                <StaggerItem>
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <SkillIconsRow justify='flex-start' />
                  </Box>
                </StaggerItem>
                <StaggerItem>
                  <HeroSubtitle variant='body1' color='text.secondary'>
                    {i18n.t("portfolio.subtitle")}
                  </HeroSubtitle>
                </StaggerItem>
                <StaggerItem>
                  <Stack spacing={1}>
                    {visibleBullets.map((item, idx) => (
                      <BulletRow
                        key={`${item}-${idx}`}
                        direction='row'
                        spacing={1.5}
                        alignItems='center'>
                        <MotionBulletDot
                          animate={{
                            boxShadow: [
                              "0 0 0 0 rgba(34,211,238,0.35)",
                              "0 0 0 8px rgba(34,211,238,0)",
                              "0 0 0 0 rgba(34,211,238,0)",
                            ],
                          }}
                          transition={{
                            duration: 2.6,
                            repeat: Infinity,
                            delay: idx * 0.4,
                            ease: "easeOut",
                          }}
                        />
                        <BulletText color='text.primary'>{item}</BulletText>
                      </BulletRow>
                    ))}
                  </Stack>
                </StaggerItem>
                <StaggerItem>
                  <CtaRow direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                    <MagneticButton>
                      <PrimaryCtaButton
                        variant='contained'
                        color='primary'
                        size='large'
                        onClick={onContact}>
                        {primaryAction.label}
                      </PrimaryCtaButton>
                    </MagneticButton>
                    {secondaryAction?.type === "linkedin" && (
                      <MagneticButton strength={6}>
                        <LinkedInButton
                          component='a'
                          variant='outlined'
                          size='large'
                          href={secondaryAction.href}
                          target='_blank'
                          rel='noreferrer'
                          sx={{ display: { xs: "none", sm: "inline-flex" } }}
                          startIcon={
                            <LinkedInIcon
                              alt='LinkedIn'
                              src={`${publicPath}/images/icons/linkedin.svg`}
                            />
                          }>
                          {secondaryAction.label}
                        </LinkedInButton>
                      </MagneticButton>
                    )}
                    {secondaryAction?.type === "download" && (
                      <MagneticButton strength={6}>
                        <TalkButton
                          variant='outlined'
                          color='inherit'
                          size='large'
                          component={RouterLink}
                          to={secondaryAction.href}
                          sx={{ display: { xs: "none", sm: "inline-flex" } }}>
                          {secondaryAction.label}
                        </TalkButton>
                      </MagneticButton>
                    )}
                  </CtaRow>
                </StaggerItem>
            </MotionHeroLeft>
            <HeroAvatar
              alt={resume?.full_name}
              src={`${publicPath}/images/vic.jpeg`}
            />
          </HeroContent>
        </FlipFace>
        <FlipBackFace>
          <HeroContent>
            <HeroLeft spacing={{ xs: 2, sm: 2.5 }}>
              <GradientChip label={i18n.t("hero.back.badge")} size='small' />
              <SectionTitle variant='h4' component='h2'>
                {i18n.t("hero.back.title")}
              </SectionTitle>
              <SectionBody variant='body1' color='text.secondary'>
                {i18n.t("hero.back.summary")}
              </SectionBody>
              <SectionBody variant='body2' color='text.secondary'>
                {i18n.t("hero.back.impact_line")}
              </SectionBody>
              <TagRow direction='row' useFlexGap>
                {backTags.map((tag, idx) => (
                  <MotionTagChip
                    key={tag}
                    label={tag}
                    size='small'
                    variant='outlined'
                    whileHover={{ y: -3, borderColor: "rgba(34,211,238,0.7)" }}
                    transition={{ ...transitions.quick, delay: idx * 0.01 }}
                  />
                ))}
              </TagRow>
            </HeroLeft>
            <HeroImpactPanel cards={impactCards} />
          </HeroContent>
        </FlipBackFace>
      </MotionFlipGrid>
    </MotionHeroRoot>
  );
};
