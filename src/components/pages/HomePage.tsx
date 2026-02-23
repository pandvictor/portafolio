import { Box, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
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

const AnimatedGridItem = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "delay",
})<{ delay: number }>(({ delay }) => ({
  opacity: 0,
  animation: `${fadeInUp} 0.7s ease ${delay}s forwards`,
  transformOrigin: "center",
}));

const TrustedSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  marginBottom: theme.spacing(4),
  borderRadius: 12,
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(15,23,42,0.65)",
  boxShadow: "var(--shadow-soft)",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3, 3),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 3),
    marginBottom: theme.spacing(6),
  },
}));

const TrustedHeader = styled(Stack)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const TrustedTitle = styled(Typography)(() => ({
  fontWeight: 800,
  letterSpacing: "0.08em",
}));

const TrustedDivider = styled(Box)(({ theme }) => ({
  height: 1,
  flexGrow: 1,
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.35), rgba(163,230,53,0.28))",
  borderRadius: 99,
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const ServicesSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  borderRadius: 12,
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(15,23,42,0.7)",
  boxShadow: "var(--shadow-soft)",
  padding: theme.spacing(3, 2.5),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3.5, 3.5),
    marginBottom: theme.spacing(6),
  },
}));

const ServicesTitle = styled(Typography)(() => ({
  fontWeight: 800,
  marginBottom: 16,
}));

const ServiceCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "delay",
})<{ delay: number }>(({ delay }) => ({
  padding: 16,
  borderRadius: 20,
  border: "1px solid var(--border-subtle)",
  background:
    "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(12,18,28,0.95))",
  boxShadow: "0 16px 36px rgba(0,0,0,0.35)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  animation: `${riseIn} 0.6s ease ${delay}s both`,
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 22px 45px rgba(0,0,0,0.45)",
  },
}));

const ServiceCardTitle = styled(Typography)(() => ({
  fontWeight: 800,
  marginBottom: 4,
}));

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
    <AnimatedGridItem
      item
      xs={12}
      md={6}
      lg={4}
      key={index}
      delay={(index + 1) * 0.08}>
      <CardItem
        data={element}
        companyImage={companyImage}
        companyImages={companyImages}
        companyName={companyName}
        companyUrl={companyUrl}
        onOpen={onOpen}
      />
    </AnimatedGridItem>
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

      <TrustedSection>
        <TrustedHeader
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          alignItems={{ xs: "flex-start", sm: "center" }}>
          <TrustedTitle variant='subtitle2'>
            {language === "es" ? "He trabajado con" : "Trusted by"}
          </TrustedTitle>
          <TrustedDivider />
        </TrustedHeader>
        <TrustedLogosMarquee />
      </TrustedSection>

      <ServicesSection>
        <ServicesTitle variant='h6'>
          {language === "es" ? "Servicios" : "Services"}
        </ServicesTitle>
        <Grid container spacing={2}>
          {services.map((svc, idx) => (
            <Grid item xs={12} sm={6} md={3} key={`${svc.title}-${idx}`}>
              <ServiceCard delay={idx * 0.08}>
                <ServiceCardTitle variant='subtitle1'>
                  {svc.title}
                </ServiceCardTitle>
                <Typography variant='body2' color='text.secondary'>
                  {svc.desc}
                </Typography>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </ServicesSection>

      <ProjectsGrid works={works} onOpen={(payload) => setSelected(payload)} />

      <ProjectDialog
        open={Boolean(selected)}
        payload={selected}
        onClose={() => setSelected(null)}
      />
    </MainTemplate>
  );
}
