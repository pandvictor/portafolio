import { MainTemplate } from "../templates";
import { ContactInfo, ProjectModalPayload, Resume, WorkHistory } from "../../types/types";
import i18n from "../../utils/i18n";
import { useCallback, useMemo, useState } from "react";
import { useTranslated, useTranslatedList } from "../../utils/useTranslated";
import { ProjectDialog } from "../organisms/ProjectDialog";
import { ContactDialog } from "../organisms";
import {
  HeroSection,
  HomeCapabilitiesSection,
  HomeCredibilitySection,
  HomeCtaSection,
  HomeFactsBar,
  HomeFeaturedProjectSection,
  HomeProjectsGrid,
  HomeServicesSection,
  HomeTrustedSection,
} from "../organisms";
import { SectionBlock } from "../molecules";
import { printResumePath } from "../../constants/gloabals";

export type ModalPayload = ProjectModalPayload;

type ServiceItem = {
  title: string;
  desc: string;
  icon?: string;
};

const EMPTY_CONTACTS: ContactInfo[] = [];

export default function HomePage() {
  const [selected, setSelected] = useState<ModalPayload | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const resumeData = useTranslated<Resume>("resume");
  const contactInfo = resumeData?.contact_info ?? EMPTY_CONTACTS;
  const heroBullets = useTranslatedList<string>("home.hero_bullets");
  const services = useTranslatedList<ServiceItem>("home.services");
  const trustedTitle = i18n.t("home.trusted_by");
  const servicesTitle = i18n.t("home.services_title");
  const servicesKicker = i18n.t("home.services_kicker");
  const servicesIntro = i18n.t("home.services_intro");
  const projectsKicker = i18n.t("home.projects_kicker");
  const projectsTitle = i18n.t("home.projects_title");
  const projectsSubtitle = i18n.t("home.projects_subtitle");
  const projectsNote = i18n.t("home.projects_note");
  const featuredKicker = i18n.t("home.featured_kicker");
  const featuredTitle = i18n.t("home.featured_title");
  const featuredSubtitle = i18n.t("home.featured_subtitle");
  const featuredCta = i18n.t("home.featured_cta");
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
  const ctaCopy = {
    kicker: i18n.t("home.cta_kicker"),
    title: i18n.t("home.cta_title"),
    desc: i18n.t("home.cta_desc"),
    primary: i18n.t("home.cta_primary"),
    secondary: i18n.t("home.cta_secondary"),
  };
  const credibilityKicker = i18n.t("home.credibility_kicker");
  const credibilityTitle = i18n.t("home.credibility_title");
  const credibilityStats = useTranslatedList<{ value: string; label: string }>(
    "home.credibility_stats"
  );
  const featuredProject = useMemo(() => {
    const preferredWork = works.find((work) =>
      work.company.toLowerCase().includes("alphapoint")
    );

    if (preferredWork) {
      // Pick by shape rather than by title: titles are translated, so matching
      // one hard-coded English string silently fell through in Spanish.
      const preferredProject =
        preferredWork.achievements.find(
          (proj) => proj.outcomes && proj.outcomes.length > 0
        ) ?? preferredWork.achievements[0];

      if (preferredProject) {
        const companyImage = Array.isArray(preferredWork.company_image)
          ? preferredWork.company_image[0]
          : preferredWork.company_image;
        const companyImages = Array.isArray(preferredWork.company_image)
          ? preferredWork.company_image
          : preferredWork.company_image
            ? [preferredWork.company_image]
            : [];

        return {
          project: preferredProject,
          companyName: preferredWork.company,
          companyImage,
          companyImages,
        };
      }
    }

    for (const work of works) {
      const projects = work.achievements || [];
      const match = projects.find((proj) => proj.outcomes && proj.outcomes.length > 0);
      if (match) {
        const companyImage = Array.isArray(work.company_image)
          ? work.company_image[0]
          : work.company_image;
        const companyImages = Array.isArray(work.company_image)
          ? work.company_image
          : work.company_image
            ? [work.company_image]
            : [];
        return {
          project: match,
          companyName: work.company,
          companyImage,
          companyImages,
        };
      }
    }
    const fallback = works[0];
    if (!fallback || !fallback.achievements?.length) return null;
    const companyImage = Array.isArray(fallback.company_image)
      ? fallback.company_image[0]
      : fallback.company_image;
    const companyImages = Array.isArray(fallback.company_image)
      ? fallback.company_image
      : fallback.company_image
        ? [fallback.company_image]
        : [];
    return {
      project: fallback.achievements[0],
      companyName: fallback.company,
      companyImage,
      companyImages,
    };
  }, [works]);
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
        contactInfo={contactInfo}
        bullets={heroBullets}
        onContact={() => setContactOpen(true)}
      />

      <SectionBlock>
        <HomeFactsBar resume={resumeData} />
      </SectionBlock>

      <SectionBlock>
        <HomeCapabilitiesSection />
      </SectionBlock>

      <SectionBlock>
        <HomeTrustedSection title={trustedTitle} />
      </SectionBlock>

      <SectionBlock>
        <HomeCredibilitySection
          kicker={credibilityKicker}
          title={credibilityTitle}
          stats={credibilityStats}
        />
      </SectionBlock>

      <SectionBlock>
        <HomeServicesSection
          kicker={servicesKicker}
          title={servicesTitle}
          intro={servicesIntro}
          services={services}
        />
      </SectionBlock>

      {featuredProject && (
        <SectionBlock>
          <HomeFeaturedProjectSection
            kicker={featuredKicker}
            title={featuredTitle}
            subtitle={featuredSubtitle}
            cta={featuredCta}
            project={featuredProject.project}
            companyName={featuredProject.companyName}
            companyImage={featuredProject.companyImage}
            companyImages={featuredProject.companyImages}
            onOpen={handleOpen}
          />
        </SectionBlock>
      )}

      <SectionBlock>
        <HomeProjectsGrid
          works={works}
          onOpen={handleOpen}
          kicker={projectsKicker}
          title={projectsTitle}
          subtitle={projectsSubtitle}
          note={projectsNote}
        />
      </SectionBlock>

      <SectionBlock>
        <HomeCtaSection
          kicker={ctaCopy.kicker}
          title={ctaCopy.title}
          desc={ctaCopy.desc}
          primaryLabel={ctaCopy.primary}
          onPrimary={() => setContactOpen(true)}
          secondaryLabel={ctaCopy.secondary}
          secondaryHref={printResumePath}
        />
      </SectionBlock>

      <ProjectDialog
        open={Boolean(selected)}
        payload={selected}
        onClose={handleClose}
      />

      <ContactDialog
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        contacts={contactInfo}
      />
    </MainTemplate>
  );
}
