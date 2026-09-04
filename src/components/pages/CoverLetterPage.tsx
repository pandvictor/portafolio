import { useLanguage } from "../../context/LanguageContext";
import { useTranslated } from "../../utils/useTranslated";
import { ContactInfo, CoverLetter, Resume } from "../../types";
import { MainTemplate } from "../templates";
import { CoverLetterDocument } from "../organisms";

export function CoverLetterPage() {
  const { language } = useLanguage();
  const coverLetter = useTranslated<CoverLetter>("cover_letter");
  const resume = useTranslated<Resume>("resume");
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
