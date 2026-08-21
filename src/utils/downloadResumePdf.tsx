import { CoverLetter, Resume } from "../types/types";

type DownloadArgs = {
  resume: Resume;
  /** Pre-formatted date ranges, one per work-history entry. */
  dateRanges: string[];
  labels: {
    summary: string;
    experience: string;
    education: string;
    languages: string;
    skills: string;
  };
  /** Used to name the file, e.g. "en" → victor-hernandez-cv-en.pdf */
  language: string;
};

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const triggerDownload = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  // Revoking immediately can cancel the download in some browsers.
  window.setTimeout(() => URL.revokeObjectURL(url), 10000);
};

/**
 * Builds the CV as a real PDF from the live translation data and hands it to
 * the browser as a download.
 *
 * The renderer is imported on demand: it is a large dependency and nobody
 * should pay for it just to read the site.
 */
export const downloadResumePdf = async ({
  resume,
  dateRanges,
  labels,
  language,
}: DownloadArgs) => {
  const [{ pdf }, { ResumeDocument }] = await Promise.all([
    import("@react-pdf/renderer"),
    import("../components/pdf/ResumeDocument"),
  ]);

  const blob = await pdf(
    <ResumeDocument resume={resume} dateRanges={dateRanges} labels={labels} />
  ).toBlob();

  triggerDownload(blob, `${slugify(resume?.full_name ?? "resume")}-cv-${language}.pdf`);
};

type CoverLetterArgs = {
  coverLetter: CoverLetter;
  resume: Resume;
  language: string;
};

/** Same approach as the CV: render from live data, never from a stale file. */
export const downloadCoverLetterPdf = async ({
  coverLetter,
  resume,
  language,
}: CoverLetterArgs) => {
  const [{ pdf }, { CoverLetterPdfDocument }] = await Promise.all([
    import("@react-pdf/renderer"),
    import("../components/pdf/CoverLetterDocument"),
  ]);

  const blob = await pdf(
    <CoverLetterPdfDocument coverLetter={coverLetter} resume={resume} />
  ).toBlob();

  triggerDownload(
    blob,
    `${slugify(resume?.full_name ?? "cover-letter")}-cover-letter-${language}.pdf`
  );
};
