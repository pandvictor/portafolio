import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PrintIcon from "@mui/icons-material/Print";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { CircularProgress } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { ButtonProps } from "@mui/material/Button";
import { format, parseISO } from "date-fns";
import { es as esLocale, it as itLocale } from "date-fns/locale";
import { useCallback, useMemo, useState } from "react";
import i18n from "../../utils/i18n";
import { useLanguage } from "../../context/LanguageContext";
import { useTranslated } from "../../utils/useTranslated";
import { Resume, WorkHistory } from "../../types/";
import { homePath } from "../../constants/gloabals";
import { useScrollToTop } from "../../utils/useScrollToTop";
import { LanguageSwitcher } from "../molecules";
import { downloadResumePdf } from "../../utils/downloadResumePdf";
import { isDuplicateText, parseDescription } from "../../utils/resumeText";

/**
 * Print-first CV.
 *
 * Deliberately not the site's design: a single ink-on-paper column, matching
 * the structure of the distributed PDF. The previous version reused the dark
 * web layout with a right sidebar, which printed as a cramped, ragged column.
 */

const Screen = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: "#525659",
  padding: theme.spacing(10, 2, 4),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 2),
  },
  display: "flex",
  justifyContent: "center",
  "@media print": {
    minHeight: 0,
    padding: 0,
    display: "block",
    backgroundColor: "#fff",
  },
}));

/** US Letter content width at 96dpi minus the @page margins. */
const Sheet = styled("article")(({ theme }) => ({
  width: "100%",
  maxWidth: 820,
  backgroundColor: "#ffffff",
  color: "#1a1a1a",
  padding: theme.spacing(6, 6, 7),
  borderRadius: 4,
  boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
  fontFamily: '"Sora", "Helvetica Neue", Arial, sans-serif',
  fontSize: 11,
  lineHeight: 1.5,
  "@media print": {
    maxWidth: "none",
    padding: 0,
    borderRadius: 0,
    boxShadow: "none",
  },
}));

const Name = styled(Typography)(() => ({
  fontSize: 26,
  fontWeight: 800,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  lineHeight: 1.1,
  color: "#111",
}));

const Role = styled(Typography)(() => ({
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.02em",
  color: "#444",
  marginTop: 2,
}));

const ContactLine = styled("div")(() => ({
  marginTop: 8,
  fontSize: 10.5,
  color: "#333",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  columnGap: 8,
  rowGap: 2,
}));

const ContactSeparator = styled("span")(() => ({
  color: "#bbb",
}));

const ContactLink = styled("a")(() => ({
  color: "#1a1a1a",
  textDecoration: "none",
}));

const SectionTitle = styled("h2")(() => ({
  margin: "18px 0 6px",
  fontSize: 11.5,
  fontWeight: 800,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#111",
  paddingBottom: 4,
  borderBottom: "1px solid #c9c9c9",
  // A heading stranded at the foot of a page reads as a mistake.
  breakAfter: "avoid",
  pageBreakAfter: "avoid",
}));

const Entry = styled("section")(() => ({
  marginTop: 10,
  breakInside: "avoid",
  pageBreakInside: "avoid",
}));

const EntryHead = styled("div")(() => ({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: 12,
}));

const EntryTitle = styled("h3")(() => ({
  margin: 0,
  fontSize: 12,
  fontWeight: 800,
  color: "#111",
}));

const EntryDates = styled("span")(() => ({
  fontSize: 10,
  fontWeight: 600,
  color: "#555",
  whiteSpace: "nowrap",
  fontVariantNumeric: "tabular-nums",
}));

const EntryCompany = styled("div")(() => ({
  fontSize: 11,
  fontWeight: 600,
  color: "#444",
  marginTop: 1,
}));

const EntryDescription = styled("p")(() => ({
  margin: "5px 0 0",
  fontSize: 10.5,
  color: "#333",
}));

const Bullets = styled("ul")(() => ({
  margin: "5px 0 0",
  paddingLeft: 16,
  "& li": {
    fontSize: 10.5,
    marginBottom: 2.5,
    color: "#222",
  },
}));

const Highlights = styled("p")(() => ({
  margin: "5px 0 0",
  fontSize: 10.5,
  color: "#333",
}));

const HighlightName = styled("span")(() => ({
  fontWeight: 700,
  color: "#111",
}));

const SkillRow = styled("div")(() => ({
  fontSize: 10.5,
  marginBottom: 3,
  color: "#222",
}));

const SkillLabel = styled("span")(() => ({
  fontWeight: 800,
  color: "#111",
}));

const Toolbar = styled(Stack)(({ theme }) => ({
  position: "fixed",
  top: theme.spacing(2),
  left: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1200,
  gap: theme.spacing(1),
  justifyContent: "space-between",
  pointerEvents: "none",
  "& > *": {
    pointerEvents: "auto",
  },
}));

const ToolbarGroup = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(1),
}));

const toolbarButtonStyles = {
  backgroundColor: "#0f172a",
  color: "#e2e8f0",
  borderRadius: 10,
  textTransform: "none",
  fontWeight: 700,
  minWidth: 0,
  boxShadow: "0 12px 26px rgba(0,0,0,0.4)",
  "&:hover": {
    backgroundColor: "#1e293b",
  },
  // Labels are dropped on narrow screens so three buttons do not span the
  // viewport and cover the top of the CV.
  "@media (max-width: 599px)": {
    "& .MuiButton-startIcon": {
      margin: 0,
    },
  },
} as const;

const ToolbarButton = styled(Button)(() => toolbarButtonStyles);

const ToolbarLinkButton = styled(Button)<ButtonProps<typeof RouterLink>>(
  () => toolbarButtonStyles
);

const ButtonLabel = styled("span")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

/** "linkedin.com/in/avihergo" reads better on paper than the full URL. */
const shortUrl = (url?: string) => {
  if (!url) return undefined;
  if (url.startsWith("mailto:")) return url.slice(7);
  if (url.startsWith("tel:")) return url.slice(4);
  try {
    const parsed = new URL(url);
    return `${parsed.host.replace(/^www\./, "")}${parsed.pathname.replace(/\/$/, "")}`;
  } catch {
    return url;
  }
};

export function ResumePrintPage() {
  const { language } = useLanguage();
  useScrollToTop();
  const resume = useTranslated<Resume>("resume");
  const dateLocale =
    language === "es" ? esLocale : language === "it" ? itLocale : undefined;

  const formatRange = useCallback(
    (work: WorkHistory) => {
      const start = format(parseISO(work.start_date), "MMM yyyy", {
        locale: dateLocale,
      });
      const end =
        work.is_current || !work.end_date
          ? i18n.t("resume.present")
          : format(parseISO(work.end_date), "MMM yyyy", { locale: dateLocale });
      return `${start} – ${end}`;
    },
    [dateLocale]
  );

  const [downloading, setDownloading] = useState(false);

  const handleDownload = useCallback(async () => {
    setDownloading(true);
    try {
      await downloadResumePdf({
        resume,
        dateRanges: (resume?.work_history ?? []).map(formatRange),
        labels: {
          summary: i18n.t("resume.summary_title"),
          experience: i18n.t("resume.experience"),
          education: i18n.t("resume.education"),
          languages: i18n.t("resume.languages_title"),
          skills: i18n.t("resume.skills"),
        },
        language,
      });
    } finally {
      setDownloading(false);
    }
  }, [formatRange, language, resume]);

  const contacts = useMemo(() => {
    const all = resume?.contact_info ?? [];
    const hasPhone = all.some((item) => item.url?.startsWith("tel:"));
    // wa.me/<number> repeats the phone line verbatim in the header.
    return all.filter((item) => !(hasPhone && item.icon === "whatsapp.svg"));
  }, [resume]);

  return (
    <Screen>
      <Toolbar direction='row' className='no-print'>
        <ToolbarLinkButton
          component={RouterLink}
          to={homePath}
          aria-label={i18n.t("resume.back_to_site")}
          startIcon={<ArrowBackRoundedIcon />}>
          <ButtonLabel>{i18n.t("resume.back_to_site")}</ButtonLabel>
        </ToolbarLinkButton>
        <ToolbarGroup>
          <Tooltip title={i18n.t("resume.download_pdf")} arrow>
            <ToolbarButton
              startIcon={
                downloading ? (
                  <CircularProgress size={16} color='inherit' />
                ) : (
                  <DownloadRoundedIcon />
                )
              }
              aria-label={i18n.t("resume.download_pdf")}
              disabled={downloading}
              onClick={handleDownload}>
              <ButtonLabel>{i18n.t("resume.download_pdf")}</ButtonLabel>
            </ToolbarButton>
          </Tooltip>
          <Tooltip title={i18n.t("resume.print_label")} arrow>
            <ToolbarButton
              startIcon={<PrintIcon />}
              aria-label={i18n.t("resume.print_label")}
              onClick={() => window.print()}>
              <ButtonLabel>{i18n.t("resume.print_label")}</ButtonLabel>
            </ToolbarButton>
          </Tooltip>
          <LanguageSwitcher />
        </ToolbarGroup>
      </Toolbar>

      <Sheet className='print-sheet'>
        <header>
          <Name variant='h1'>{resume?.full_name}</Name>
          <Role>{resume?.position}</Role>
          <ContactLine>
            {contacts.map((item, idx) => (
              <span key={`${item.title}-${idx}`}>
                {idx > 0 && <ContactSeparator>·&nbsp;</ContactSeparator>}
                <ContactLink href={item.url} target='_blank' rel='noreferrer'>
                  {shortUrl(item.url) ?? item.title}
                </ContactLink>
              </span>
            ))}
          </ContactLine>
        </header>

        {resume?.summary && (
          <>
            <SectionTitle>{i18n.t("resume.summary_title")}</SectionTitle>
            <EntryDescription>{resume.summary}</EntryDescription>
          </>
        )}

        <SectionTitle>{i18n.t("resume.experience")}</SectionTitle>
        {resume?.work_history?.map((work, index) => (
          <Entry key={`${work.company}-${work.position}-${index}`}>
            <EntryHead>
              <EntryTitle>{work.position}</EntryTitle>
              <EntryDates>{formatRange(work)}</EntryDates>
            </EntryHead>
            <EntryCompany>{work.company}</EntryCompany>
            {(() => {
              const parsed = parseDescription(work.description);
              const bullets = [...parsed.bullets, ...(work.tasks ?? [])];
              return (
                <>
                  {parsed.lead && <EntryDescription>{parsed.lead}</EntryDescription>}
                  {bullets.length > 0 && (
                    <Bullets>
                      {bullets.map((task, taskIdx) => (
                        <li key={taskIdx}>{task}</li>
                      ))}
                    </Bullets>
                  )}
                </>
              );
            })()}
            {work.achievements?.map((achievement, achievementIdx) => {
              const repeatsRole = isDuplicateText(
                achievement.description,
                work.description
              );
              return (
                <Highlights key={`${achievement.title}-${achievementIdx}`}>
                  <HighlightName>{achievement.title}</HighlightName>
                  {!repeatsRole && achievement.description
                    ? ` — ${parseDescription(achievement.description).lead ?? achievement.description}`
                    : ""}
                </Highlights>
              );
            })}
          </Entry>
        ))}

        {resume?.university && (
          <>
            <SectionTitle>{i18n.t("resume.education")}</SectionTitle>
            <Entry>
              <EntryHead>
                <EntryTitle>{resume.university.title}</EntryTitle>
                <EntryDates>
                  {resume.university.start_date} – {resume.university.end_date}
                </EntryDates>
              </EntryHead>
              <EntryCompany>{resume.university.school}</EntryCompany>
            </Entry>
          </>
        )}

        {resume?.languages?.length > 0 && (
          <>
            <SectionTitle>{i18n.t("resume.languages_title")}</SectionTitle>
            <SkillRow>
              {resume.languages
                .map((item) => `${item.language} — ${item.level}`)
                .join("  ·  ")}
            </SkillRow>
          </>
        )}

        {resume?.tech_skills?.length > 0 && (
          <>
            <SectionTitle>{i18n.t("resume.skills")}</SectionTitle>
            {resume.tech_skills.map((group, index) => (
              <SkillRow key={`${group.title}-${index}`}>
                <SkillLabel>{group.title}:</SkillLabel> {group.tools.join(", ")}
              </SkillRow>
            ))}
          </>
        )}
      </Sheet>
    </Screen>
  );
}
