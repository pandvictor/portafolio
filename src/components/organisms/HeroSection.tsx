import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { publicPath } from "../../constants/gloabals";
import { SkillIconsRow } from "../molecules";
import { Resume, ContactInfo } from "../../types";
import { useMemo } from "react";
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
  const contactUrl = contactInfo?.[0]?.url;
  const downloadHref = useMemo(
    () => `${publicPath}/files/resume-victor-hernandez-${language}.pdf`,
    [language]
  );

  return (
    <Box
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
      }}>
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
            sx={{ flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
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
  );
};
