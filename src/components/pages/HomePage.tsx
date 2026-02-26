import { MainTemplate } from "../templates";
import { ContactInfo, ProjectModalPayload, Resume, WorkHistory } from "../../types/types";
import { useLanguage } from "../../context/LanguageContext";
import i18n from "../../utils/i18n";
import { useCallback, useMemo, useState } from "react";
import { ProjectDialog } from "../organisms/ProjectDialog";
import {
  HeroSection,
  HomeProjectsGrid,
  HomeServicesSection,
  HomeTrustedSection,
} from "../organisms";

export type ModalPayload = ProjectModalPayload;

type ServiceItem = {
  title: string;
  desc: string;
};

const EMPTY_CONTACTS: ContactInfo[] = [];

export default function HomePage() {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<ModalPayload | null>(null);
  const resumeData = useMemo(() => i18n.t("resume") as Resume, [language]);
  const contactInfo = resumeData?.contact_info ?? EMPTY_CONTACTS;
  const heroBullets = useMemo(() => {
    const bullets = i18n.t("home.hero_bullets") as unknown;
    return Array.isArray(bullets) ? bullets : [];
  }, [language]);
  const services = useMemo(() => {
    const list = i18n.t("home.services") as unknown;
    return Array.isArray(list) ? (list as ServiceItem[]) : [];
  }, [language]);
  const trustedTitle = i18n.t("home.trusted_by");
  const servicesTitle = i18n.t("home.services_title");
  const servicesKicker = i18n.t("home.services_kicker");
  const servicesIntro = i18n.t("home.services_intro");
  const projectsKicker = i18n.t("home.projects_kicker");
  const projectsTitle = i18n.t("home.projects_title");
  const projectsSubtitle = i18n.t("home.projects_subtitle");
  const projectsNote = i18n.t("home.projects_note");
  const worksRaw = resumeData?.work_history as WorkHistory[] | undefined;
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
  const handleOpen = useCallback((payload: ModalPayload) => {
    setSelected(payload);
  }, []);
  const handleClose = useCallback(() => {
    setSelected(null);
  }, []);

  return (
    <MainTemplate>
      <HeroSection
        resume={resumeData}
        language={language}
        contactInfo={contactInfo}
        bullets={heroBullets}
      />

      <HomeTrustedSection title={trustedTitle} />

      <HomeServicesSection
        kicker={servicesKicker}
        title={servicesTitle}
        intro={servicesIntro}
        services={services}
      />

      <HomeProjectsGrid
        works={works}
        onOpen={handleOpen}
        kicker={projectsKicker}
        title={projectsTitle}
        subtitle={projectsSubtitle}
        note={projectsNote}
      />

      <ProjectDialog
        open={Boolean(selected)}
        payload={selected}
        onClose={handleClose}
      />
    </MainTemplate>
  );
}
