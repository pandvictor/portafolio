import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { keyframes } from "@mui/system";
import { MainTemplate } from "../templates";
import { CardItem } from "../molecules";
import {
  ContactInfo,
  Project,
  ProjectModalPayload,
  WorkHistory,
} from "../../types/types";
import { useLanguage } from "../../context/LanguageContext";
import i18n from "../../utils/i18n";
import { useState } from "react";
import { ProjectDialog } from "../organisms/ProjectDialog";
import { publicPath } from "../../constants/gloabals";

export type ModalPayload = ProjectModalPayload;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(18px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

type RenderProjectsProps = {
  projects: Project[];
  companyImage?: string;
  companyImages?: string[];
  companyName?: string;
  companyUrl?: string;
  onOpen?: (payload: ModalPayload) => void;
};

const RenderProjects = ({
  projects,
  companyImage,
  companyImages,
  companyName,
  companyUrl,
  onOpen,
}: RenderProjectsProps) => {
  return projects.map((element: Project, index) => (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      key={index}
      sx={{
        opacity: 0,
        animation: `${fadeInUp} 0.7s ease ${(index + 1) * 0.08}s forwards`,
        transformOrigin: "center",
      }}>
      <CardItem
        data={element}
        companyImage={companyImage}
        companyImages={companyImages}
        companyName={companyName}
        companyUrl={companyUrl}
        onOpen={onOpen}
      />
    </Grid>
  ));
};

export default function HomePage() {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<ModalPayload | null>(null);
  const resumeData = i18n.t("resume") as any;
  const contactInfo = (resumeData?.contact_info || []) as ContactInfo[];
  const heroBullets =
    language === "es"
      ? [
          "19+ años construyendo producto digital",
          "Experto en Bitcoin/Lightning y exchanges cripto",
          "Liderazgo técnico y entrega de producto",
        ]
      : [
          "19+ years shipping digital products",
          "Bitcoin/Lightning specialist for crypto exchanges",
          "Technical leadership and delivery focus",
        ];
  const logos = [
    { src: "alphapoint-logo.png", alt: "AlphaPoint" },
    { src: "sat_logo.png", alt: "SAT" },
    { src: "bullseye-logo.png", alt: "Bullseye" },
    { src: "fantasygol-logo.png", alt: "FantasyGol" },
  ];

  const worksRaw = i18n.t("resume.work_history") as WorkHistory[];
  const works = (worksRaw || [])
    .map(
      (w, idx) =>
        ({ ...(w as WorkHistory), _origIndex: idx }) as WorkHistory & {
          _origIndex: number;
        }
    )
    .filter((w) => w.show_on_home !== false)
    .sort((a, b) => {
      const aOrder = a.home_order ?? a._origIndex;
      const bOrder = b.home_order ?? b._origIndex;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return a._origIndex - b._origIndex;
    });
  return (
    <MainTemplate>
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
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 6 },
          }}>
          <Stack spacing={2.5} sx={{ flex: 1, minWidth: 0 }}>
            <Stack direction='row' spacing={1} alignItems='center'>
              <Chip
                label={
                  language === "es"
                    ? "Fintech • Gobierno • Exchanges"
                    : "Fintech • Government • Exchanges"
                }
                color='secondary'
                sx={{ fontWeight: 700, borderRadius: 99 }}
              />
              <Chip
                label={language === "es" ? "19+ años" : "19+ years"}
                variant='outlined'
                color='default'
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
              {resumeData?.full_name}
            </Typography>
            <Typography
              variant='h5'
              color='text.secondary'
              sx={{ fontWeight: 600 }}>
              {resumeData?.position}
            </Typography>
            <Typography variant='body1' color='text.secondary' sx={{ maxWidth: 720 }}>
              {i18n.t("portfolio.subtitle")}
            </Typography>
            <Stack spacing={1}>
              {heroBullets.map((item, idx) => (
                <Stack
                  key={`${item}-${idx}`}
                  direction='row'
                  spacing={1.5}
                  alignItems='center'>
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
              sx={{ pt: 1 }}>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                sx={{ borderRadius: 2, boxShadow: "0 18px 40px rgba(0,0,0,0.12)" }}
                href={`${publicPath}/files/resume-victor-hernandez-${language}.pdf`}>
                {i18n.t("download")}
              </Button>
              {contactInfo?.[0]?.url && (
                <Button
                  variant='outlined'
                  color='inherit'
                  size='large'
                  sx={{ borderRadius: 2 }}
                  href={contactInfo[0].url}>
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
              alt={resumeData?.full_name}
              src={`${publicPath}/images/vic.jpeg`}
              sx={{
                width: { xs: 240, sm: 280, md: 300 },
                height: { xs: 240, sm: 280, md: 300 },
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
          px: { xs: 2, sm: 3 },
          py: { xs: 3, md: 4 },
          mb: { xs: 4, md: 6 },
          borderRadius: 3,
          border: "1px solid rgba(226,232,240,0.8)",
          backgroundColor: "rgba(255,255,255,0.9)",
          boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
        }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          alignItems={{ xs: "flex-start", sm: "center" }}
          sx={{ mb: 2 }}>
          <Typography variant='subtitle2' sx={{ fontWeight: 800, letterSpacing: "0.08em" }}>
            {language === "es" ? "He trabajado con" : "Trusted by"}
          </Typography>
          <Box
            sx={{
              height: 1,
              flexGrow: 1,
              background:
                "linear-gradient(90deg, rgba(79,70,229,0.25), rgba(16,185,129,0.18))",
              borderRadius: 99,
              display: { xs: "none", sm: "block" },
            }}
          />
        </Stack>
        <Box sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 3, md: 5 },
              width: "200%",
              animation: `${marquee} 18s linear infinite`,
            }}>
            {[...logos, ...logos].map((logo, idx) => (
              <Box
                key={`${logo.src}-${idx}`}
                sx={{
                  height: 46,
                  minWidth: 160,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  filter: "grayscale(1)",
                  opacity: 0.85,
                  transition: "opacity 0.2s ease",
                  "&:hover": { opacity: 1 },
                }}>
                <img
                  src={`${publicPath}/images/${logo.src}`}
                  alt={logo.alt}
                  style={{ height: "100%", width: "auto", objectFit: "contain" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {works &&
          works?.map((element: WorkHistory, idx: number) => (
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
              onOpen={(payload) => setSelected(payload)}
            />
          ))}
      </Grid>
      {/* <Grid container spacing={3}>
        {projects.map((_item: Project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <CardItem key_id={index} />
          </Grid>
        ))}
      </Grid> */}
      {/* <Grid container spacing={3} sx={{ marginY: 5 }}>
        {works &&
          works.map((_item: WorkHistory) => <CardClients data={_item} />)}
      </Grid> */}
      <ProjectDialog
        open={Boolean(selected)}
        payload={selected}
        onClose={() => setSelected(null)}
      />
    </MainTemplate>
  );
}
