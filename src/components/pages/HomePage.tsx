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

      <ProjectsGrid works={works} onOpen={(payload) => setSelected(payload)} />

      <ProjectDialog
        open={Boolean(selected)}
        payload={selected}
        onClose={() => setSelected(null)}
      />
    </MainTemplate>
  );
}
