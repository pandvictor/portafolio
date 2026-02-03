import { Box, Grid, Stack, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import { MainTemplate } from "../templates";
import { CardItem, TrustedLogosMarquee } from "../molecules";
import { ContactInfo, Project, ProjectModalPayload, WorkHistory } from "../../types/types";
import { useLanguage } from "../../context/LanguageContext";
import i18n from "../../utils/i18n";
import { memo, useMemo, useState } from "react";
import { ProjectDialog } from "../organisms/ProjectDialog";
import { HeroSection } from "../organisms";

export type ModalPayload = ProjectModalPayload;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(18px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const riseIn = keyframes`
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`;

type RenderProjectsProps = {
  projects: Project[];
  companyImage?: string;
  companyImages?: string[];
  companyName?: string;
  companyUrl?: string;
  onOpen?: (payload: ModalPayload) => void;
};

const RenderProjects = memo(({
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
});
RenderProjects.displayName = "RenderProjects";

const ProjectsGrid = memo(
  ({
    works,
    onOpen,
  }: {
    works: (WorkHistory & { _origIndex: number })[];
    onOpen: (payload: ModalPayload) => void;
  }) => (
    <Grid container spacing={3}>
      {works.map((element: WorkHistory & { _origIndex: number }, idx: number) => (
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
          onOpen={onOpen}
        />
      ))}
    </Grid>
  )
);
ProjectsGrid.displayName = "ProjectsGrid";

export default function HomePage() {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<ModalPayload | null>(null);
  const resumeData = i18n.t("resume") as any;
  const contactInfo = useMemo(
    () => (resumeData?.contact_info || []) as ContactInfo[],
    [resumeData]
  );
  const heroBullets = useMemo(
    () =>
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
          ],
    [language]
  );

  const services = useMemo(
    () =>
      language === "es"
        ? [
            {
              title: "Liderazgo técnico",
              desc: "Dirección de equipos, estándares, mentoring y revisión de arquitectura.",
            },
            {
              title: "Crypto/Fintech",
              desc: "Wallets Bitcoin/Lightning, trading, KYC/KYB, cumplimiento y riesgos.",
            },
            {
              title: "Rescate de legacy",
              desc: "Refactor, pruebas y modernización de código para acelerar entregas.",
            },
            {
              title: "Performance & SRE",
              desc: "Optimización de latencia, observabilidad y confiabilidad en producción.",
            },
          ]
        : [
            {
              title: "Technical leadership",
              desc: "Team direction, standards, mentoring and architectural reviews.",
            },
            {
              title: "Crypto/Fintech",
              desc: "Bitcoin/Lightning wallets, trading, KYC/KYB, compliance and risk.",
            },
            {
              title: "Legacy rescue",
              desc: "Refactors, tests and modernization to speed up delivery.",
            },
            {
              title: "Performance & SRE",
              desc: "Latency tuning, observability and reliability in production.",
            },
          ],
    [language]
  );

  const worksRaw = i18n.t("resume.work_history") as WorkHistory[];
  const works = useMemo(
    () =>
      (worksRaw || [])
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
        }),
    [worksRaw]
  );

  return (
    <MainTemplate>
      <HeroSection
        resume={resumeData}
        language={language}
        contactInfo={contactInfo}
        bullets={heroBullets}
      />

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
        <TrustedLogosMarquee />
      </Box>

      <Box
        sx={{
          mb: { xs: 4, md: 6 },
          borderRadius: 3,
          border: "1px solid rgba(226,232,240,0.8)",
          backgroundColor: "rgba(255,255,255,0.95)",
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
          px: { xs: 2.5, md: 3.5 },
          py: { xs: 3, md: 3.5 },
        }}>
        <Typography variant='h6' sx={{ fontWeight: 800, mb: 2 }}>
          {language === "es" ? "Servicios" : "Services"}
        </Typography>
        <Grid container spacing={2}>
          {services.map((svc, idx) => (
            <Grid item xs={12} sm={6} md={3} key={`${svc.title}-${idx}`}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2.5,
                  border: "1px solid rgba(226,232,240,0.8)",
                  background: "rgba(250,251,255,0.95)",
                  boxShadow: "0 10px 26px rgba(15,23,42,0.06)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  animation: `${riseIn} 0.6s ease ${idx * 0.08}s both`,
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 36px rgba(15,23,42,0.1)",
                  },
                }}>
                <Typography variant='subtitle1' sx={{ fontWeight: 800, mb: 0.5 }}>
                  {svc.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {svc.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <ProjectsGrid works={works} onOpen={(payload) => setSelected(payload)} />

      <ProjectDialog
        open={Boolean(selected)}
        payload={selected}
        onClose={() => setSelected(null)}
      />
    </MainTemplate>
  );
}
