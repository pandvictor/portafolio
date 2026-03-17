import { useMemo } from "react";
import i18n from "../../utils/i18n";
import { useLanguage } from "../../context/LanguageContext";
import { ContactInfo, CoverLetter, Resume } from "../../types";
import { MainTemplate } from "../templates";
import { CoverLetterDocument } from "../organisms";

export function CoverLetterPage() {
  const { language } = useLanguage();
  const coverLetter = useMemo(
    () => i18n.t("cover_letter") as CoverLetter,
    [language]
  );
  const resume = useMemo(() => i18n.t("resume") as Resume, [language]);
  const contacts = resume?.contact_info as ContactInfo[] | undefined;

  return (
    <MainTemplate>
      <CoverLetterDocument
        coverLetter={coverLetter}
        resume={resume}
        contacts={contacts ?? []}
        language={language}
      />
    </MainTemplate>
  );
}
