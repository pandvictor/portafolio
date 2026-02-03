import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
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
    <Box
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      sx={{
        mb: { xs: 5, md: 7 },
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: 4, md: 5 },
        border: "1px solid rgba(226,232,240,0.8)",
        background:
          "radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.12), transparent 35%), radial-gradient(circle at 80% 10%, rgba(16, 185, 129, 0.14), transparent 30%), linear-gradient(120deg, rgba(255,255,255,0.94), rgba(244, 248, 255, 0.92))",
        boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)",
        animation: `${fadeInUp} 0.6s ease`,
        perspective: "1600px",
      }}>
      <Tooltip
        title={language === "es" ? "Girar sección" : "Flip section"}
        arrow>
        <IconButton
          onClick={handleManualFlip}
          aria-label={language === "es" ? "Girar sección" : "Flip section"}
          sx={{
            position: "absolute",
            top: { xs: 10, sm: 14 },
            right: { xs: 10, sm: 14 },
            zIndex: 5,
            borderRadius: 2,
            border: "1px solid rgba(226,232,240,0.9)",
            backgroundColor: "rgba(255,255,255,0.9)",
            boxShadow: "0 12px 26px rgba(15,23,42,0.12)",
            "&:hover": {
              backgroundColor: "white",
              transform: "translateY(-2px)",
            },
          }}>
          <SwapHorizRoundedIcon sx={{ fontSize: 22 }} />
        </IconButton>
      </Tooltip>
      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          top: -50,
          right: -30,
          background:
            "radial-gradient(circle, rgba(79,70,229,0.24) 0%, rgba(79,70,229,0.05) 60%, transparent 70%)",
          filter: "blur(1px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          bottom: -60,
          left: -40,
          background:
            "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.04) 65%, transparent 75%)",
          filter: "blur(2px)",
        }}
      />
      <Box
        sx={{
          position: "relative",
          display: "grid",
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: prefersReducedMotion ? "none" : "transform 0.9s ease",
        }}>
        <Box
          sx={{
            gridArea: "1 / 1",
            backfaceVisibility: "hidden",
          }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 5 }}
            alignItems='center'
            sx={{
              position: "relative",
              px: { xs: 2.5, sm: 3, md: 5 },
              py: { xs: 3.5, md: 6 },
            }}>
            <Stack
              spacing={2.5}
              sx={{
                flex: 1,
                minWidth: 0,
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}>
              <Stack
                direction='row'
                spacing={1}
                alignItems='center'
                useFlexGap
                sx={{
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}>
                <Chip
                  label={
                    language === "es"
                      ? "Trabajo con IA • LLMs"
                      : "Working with AI • LLMs"
                  }
                  size='small'
                  sx={{
                    fontWeight: 800,
                    borderRadius: 99,
                    color: "white",
                    background: "linear-gradient(90deg, #0ea5e9, #10b981)",
                    boxShadow: "0 12px 30px rgba(14,165,233,0.35)",
                    "& .MuiChip-label": {
                      px: 1.25,
                      letterSpacing: "0.02em",
                    },
                  }}
                />
                <Chip
                  label={
                    language === "es"
                      ? "Fintech • Gobierno • Exchanges"
                      : "Fintech • Government • Exchanges"
                  }
                  color='secondary'
                  size='small'
                  sx={{ fontWeight: 700, borderRadius: 99 }}
                />
                <Chip
                  label={language === "es" ? "19+ años" : "19+ years"}
                  variant='outlined'
                  color='default'
                  size='small'
                  sx={{ fontWeight: 700, borderRadius: 99 }}
                />
                <Chip
                  label={
                    language === "es"
                      ? "Crypto • Bitcoin • Lightning"
                      : "Crypto • Bitcoin • Lightning"
                  }
                  variant='outlined'
                  color='secondary'
                  size='small'
                  sx={{ fontWeight: 700, borderRadius: 99 }}
                />
              </Stack>
              <Typography
                variant='h3'
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}>
                {resume?.full_name}
              </Typography>
              <Typography
                variant='h5'
                color='text.secondary'
                sx={{ fontWeight: 600 }}>
                {resume?.position}
              </Typography>
              <SkillIconsRow justify='flex-start' language={language} />
              <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 720 }}>
                {i18n.t("portfolio.subtitle")}
              </Typography>
              <Stack spacing={1}>
                {bullets.map((item, idx) => (
                  <Stack
                    key={`${item}-${idx}`}
                    direction='row'
                    spacing={1.5}
                    alignItems='center'
                    sx={{ justifyContent: { xs: "center", md: "flex-start" } }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, #4f46e5 0%, #10b981 80%)",
                        boxShadow: "0 0 0 6px rgba(79,70,229,0.08)",
                        flexShrink: 0,
                      }}
                    />
                    <Typography color='text.primary' sx={{ fontWeight: 600 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{
                  pt: 1,
                  alignItems: { xs: "stretch", sm: "center" },
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}>
                <Button
                  variant='contained'
                  color='secondary'
                  size='large'
                  sx={{ borderRadius: 2, boxShadow: "0 18px 40px rgba(0,0,0,0.12)" }}
                  href={downloadHref}>
                  {i18n.t("download")}
                </Button>
                {contactUrl && (
                  <Button
                    variant='outlined'
                    color='inherit'
                    size='large'
                    sx={{ borderRadius: 2 }}
                    href={contactUrl}>
                    {language === "es" ? "Hablemos" : "Let's talk"}
                  </Button>
                )}
              </Stack>
            </Stack>
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: 340 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: 14,
                  borderRadius: "28px",
                  background:
                    "linear-gradient(135deg, rgba(79,70,229,0.14), rgba(16,185,129,0.1))",
                  filter: "blur(6px)",
                }}
              />
              <Avatar
                alt={resume?.full_name}
                src={`${publicPath}/images/vic.jpeg`}
                sx={{
                  width: { xs: 200, sm: 240, md: 300 },
                  height: { xs: 200, sm: 240, md: 300 },
                  borderRadius: "28px",
                  border: "6px solid rgba(255,255,255,0.8)",
                  boxShadow: "0 18px 50px rgba(15,23,42,0.18)",
                  position: "relative",
                  zIndex: 1,
                  objectFit: "cover",
                }}
              />
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            gridArea: "1 / 1",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 5 }}
            alignItems='center'
            sx={{
              position: "relative",
              px: { xs: 2.5, sm: 3, md: 5 },
              py: { xs: 3.5, md: 6 },
            }}>
            <Stack
              spacing={2.5}
              sx={{
                flex: 1,
                minWidth: 0,
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}>
              <Chip
                label={language === "es" ? "Arquitectura LLM" : "LLM Architecture"}
                size='small'
                sx={{
                  fontWeight: 800,
                  borderRadius: 99,
                  color: "white",
                  background: "linear-gradient(90deg, #0ea5e9, #10b981)",
                  boxShadow: "0 12px 30px rgba(14,165,233,0.35)",
                }}
              />
              <Typography
                variant='h4'
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}>
                {language === "es"
                  ? "Arquitectura por capas"
                  : "Layered architecture"}
              </Typography>
              <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 700 }}>
                {language === "es"
                  ? "Capa de datos • Recuperación • Orquestación • Evaluación • Monitoreo"
                  : "Data Layer • Retrieval Layer • Orchestration • Evaluation • Monitoring"}
              </Typography>
              <Typography variant='body2' color='text.secondary' sx={{ maxWidth: 700 }}>
                {language === "es"
                  ? "Mejora continua con feedback de usuarios web/mobile, guardrails y observabilidad end-to-end."
                  : "Continuous improvement with web/mobile feedback, guardrails, and end-to-end observability."}
              </Typography>
              <Stack
                direction='row'
                useFlexGap
                sx={{
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}>
                {[
                  language === "es" ? "Datos" : "Data",
                  language === "es" ? "Recuperación" : "Retrieval",
                  language === "es" ? "Orquestación" : "Orchestration",
                  language === "es" ? "Evaluación" : "Evaluation",
                  language === "es" ? "Monitoreo" : "Monitoring",
                ].map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size='small'
                    variant='outlined'
                    sx={{ borderRadius: 99, fontWeight: 700 }}
                  />
                ))}
              </Stack>
              {contactUrl && (
                <Button
                  variant='contained'
                  color='secondary'
                  size='large'
                  sx={{
                    borderRadius: 2,
                    boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                  }}
                  href={contactUrl}>
                  {language === "es" ? "Hablemos de arquitectura" : "Talk architecture"}
                </Button>
              )}
            </Stack>
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: 380 },
                maxWidth: 440,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: 14,
                  borderRadius: "28px",
                  background:
                    "linear-gradient(135deg, rgba(14,165,233,0.18), rgba(16,185,129,0.12))",
                  filter: "blur(6px)",
                }}
              />
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "28px",
                  border: "6px solid rgba(255,255,255,0.8)",
                  boxShadow: "0 18px 50px rgba(15,23,42,0.18)",
                  position: "relative",
                  zIndex: 1,
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(6px)",
                  p: { xs: 2, sm: 2.5 },
                }}>
                <Stack spacing={1.75}>
                  <Stack direction='row' spacing={1} alignItems='center'>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "12px",
                        display: "grid",
                        placeItems: "center",
                        background:
                          "linear-gradient(135deg, rgba(14,165,233,0.18), rgba(16,185,129,0.18))",
                      }}>
                      <Box
                        component='img'
                        alt='AI'
                        src={`${publicPath}/images/icons/aws.svg`}
                        sx={{ width: 20, height: 20 }}
                      />
                    </Box>
                    <Stack spacing={0.25}>
                      <Typography variant='subtitle2' sx={{ fontWeight: 800 }}>
                        {language === "es"
                          ? "Pipeline LLM en producción"
                          : "Production LLM pipeline"}
                      </Typography>
                      <Typography variant='caption' color='text.secondary'>
                        {language === "es"
                          ? "Capas técnicas + mejora continua"
                          : "Layered system + continuous improvement"}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "repeat(2, minmax(0,1fr))" },
                      gap: 1.25,
                    }}>
                    {pipelineCards.map((card) => (
                      <Box
                        key={card.key}
                        sx={{
                          p: 1.2,
                          borderRadius: 2,
                          border: "1px solid rgba(226,232,240,0.9)",
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(241,245,249,0.85))",
                          boxShadow: "0 10px 18px rgba(15,23,42,0.06)",
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.6,
                          minHeight: 92,
                        }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: "10px",
                            backgroundColor: "rgba(79,70,229,0.08)",
                            display: "grid",
                            placeItems: "center",
                          }}>
                          <Box
                            component='img'
                            alt={card.title}
                            src={`${publicPath}/images/icons/${card.icon}`}
                            sx={{ width: 18, height: 18 }}
                          />
                        </Box>
                        <Typography variant='subtitle2' sx={{ fontWeight: 800 }}>
                          {card.title}
                        </Typography>
                        <Typography variant='caption' color='text.secondary'>
                          {card.desc}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Stack
                    direction='row'
                    spacing={1}
                    alignItems='center'
                    sx={{
                      px: 1.2,
                      py: 0.8,
                      borderRadius: 999,
                      border: "1px solid rgba(14,165,233,0.2)",
                      backgroundColor: "rgba(14,165,233,0.06)",
                    }}>
                    {deliveryIcons.map((item) => (
                      <Box
                        key={item.key}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}>
                        <Box
                          component='img'
                          alt={item.label}
                          src={`${publicPath}/images/icons/${item.icon}`}
                          sx={{ width: 16, height: 16 }}
                        />
                        <Typography variant='caption' sx={{ fontWeight: 700 }}>
                          {item.label}
                        </Typography>
                      </Box>
                    ))}
                    <Typography
                      variant='caption'
                      color='text.secondary'
                      sx={{ fontWeight: 600, ml: "auto" }}>
                      {language === "es" ? "Web + Mobile" : "Web + Mobile"}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
