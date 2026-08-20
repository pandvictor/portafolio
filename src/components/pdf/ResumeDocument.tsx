import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Link,
} from "@react-pdf/renderer";
import { Resume, WorkHistory } from "../../types/types";
import { isDuplicateText, parseDescription } from "../../utils/resumeText";

/**
 * Vector CV generated from the live translation data.
 *
 * Mirrors the on-screen printable CV, but as a real downloadable file: the
 * checked-in PDFs under `assets/files` drift out of sync with the JSON, and
 * `window.print()` only ever opens a dialog.
 */

const COLORS = {
  ink: "#101828",
  body: "#333333",
  muted: "#555555",
  rule: "#c9c9c9",
  faintRule: "#e4e7ec",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 38,
    paddingBottom: 44,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.45,
    color: COLORS.body,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 20,
    lineHeight: 1.15,
    letterSpacing: 1.2,
    color: COLORS.ink,
  },
  role: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginTop: 5,
    color: COLORS.muted,
  },
  contactLine: {
    marginTop: 5,
    fontSize: 8.5,
    color: COLORS.muted,
  },
  contactLink: {
    color: COLORS.muted,
    textDecoration: "none",
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    letterSpacing: 1.6,
    color: COLORS.ink,
    marginTop: 14,
    marginBottom: 4,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.rule,
    borderBottomStyle: "solid",
  },
  entry: {
    marginTop: 8,
  },
  entryHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  entryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: COLORS.ink,
    flexShrink: 1,
    paddingRight: 10,
  },
  entryDates: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    color: COLORS.muted,
  },
  entryCompany: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: COLORS.muted,
    marginTop: 1,
  },
  paragraph: {
    marginTop: 4,
    fontSize: 8.5,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 2.5,
    paddingRight: 4,
  },
  bulletMark: {
    width: 10,
    fontSize: 8.5,
    color: COLORS.muted,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: "#222222",
  },
  highlight: {
    marginTop: 4,
    fontSize: 8.5,
  },
  highlightName: {
    fontFamily: "Helvetica-Bold",
    color: COLORS.ink,
  },
  skillRow: {
    marginTop: 2.5,
    fontSize: 8.5,
    color: "#222222",
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    color: COLORS.ink,
  },
});

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

type ResumeDocumentProps = {
  resume: Resume;
  /** Pre-formatted "Mar 2026 – Present" strings, keyed by work index. */
  dateRanges: string[];
  labels: {
    summary: string;
    experience: string;
    education: string;
    languages: string;
    skills: string;
  };
};

const Bullets = ({ items }: { items: string[] }) => (
  <>
    {items.map((item, idx) => (
      <View key={idx} style={styles.bulletRow} wrap={false}>
        <Text style={styles.bulletMark}>•</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ))}
  </>
);

const ExperienceEntry = ({
  work,
  range,
}: {
  work: WorkHistory;
  range: string;
}) => {
  const parsed = parseDescription(work.description);
  const bullets = [...parsed.bullets, ...(work.tasks ?? [])];

  return (
    <View style={styles.entry}>
      <View minPresenceAhead={64}>
        <View style={styles.entryHead}>
          <Text style={styles.entryTitle}>{work.position}</Text>
          <Text style={styles.entryDates}>{range}</Text>
        </View>
        <Text style={styles.entryCompany}>{work.company}</Text>
      </View>
      {parsed.lead && <Text style={styles.paragraph}>{parsed.lead}</Text>}
      {bullets.length > 0 && <Bullets items={bullets} />}
      {work.achievements?.map((achievement, idx) => {
        const repeatsRole = isDuplicateText(achievement.description, work.description);
        const detail = repeatsRole
          ? ""
          : parseDescription(achievement.description).lead ?? achievement.description;
        return (
          <Text key={idx} style={styles.highlight}>
            <Text style={styles.highlightName}>{achievement.title}</Text>
            {detail ? ` — ${detail}` : ""}
          </Text>
        );
      })}
    </View>
  );
};

export const ResumeDocument = ({
  resume,
  dateRanges,
  labels,
}: ResumeDocumentProps) => {
  const contacts = (() => {
    const all = resume?.contact_info ?? [];
    const hasPhone = all.some((item) => item.url?.startsWith("tel:"));
    // wa.me/<number> repeats the phone line verbatim in the header.
    return all.filter((item) => !(hasPhone && item.icon === "whatsapp.svg"));
  })();

  return (
    <Document
      title={`${resume?.full_name} — CV`}
      author={resume?.full_name}
      subject={resume?.position}>
      <Page size='LETTER' style={styles.page}>
        <Text style={styles.name}>{(resume?.full_name ?? "").toUpperCase()}</Text>
        <Text style={styles.role}>{resume?.position}</Text>
        <Text style={styles.contactLine}>
          {contacts.map((item, idx) => (
            <Text key={idx}>
              {idx > 0 ? "  ·  " : ""}
              <Link src={item.url} style={styles.contactLink}>
                {shortUrl(item.url) ?? item.title}
              </Link>
            </Text>
          ))}
        </Text>

        {resume?.summary && (
          <>
            <Text style={styles.sectionTitle}>{labels.summary.toUpperCase()}</Text>
            <Text style={styles.paragraph}>{resume.summary}</Text>
          </>
        )}

        <Text style={styles.sectionTitle}>{labels.experience.toUpperCase()}</Text>
        {resume?.work_history?.map((work, idx) => (
          <ExperienceEntry key={idx} work={work} range={dateRanges[idx] ?? ""} />
        ))}

        {resume?.university && (
          <>
            <Text style={styles.sectionTitle}>{labels.education.toUpperCase()}</Text>
            <View style={styles.entry} wrap={false}>
              <View style={styles.entryHead}>
                <Text style={styles.entryTitle}>{resume.university.title}</Text>
                <Text style={styles.entryDates}>
                  {resume.university.start_date} – {resume.university.end_date}
                </Text>
              </View>
              <Text style={styles.entryCompany}>{resume.university.school}</Text>
            </View>
          </>
        )}

        {resume?.languages?.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>{labels.languages.toUpperCase()}</Text>
            <Text style={styles.skillRow}>
              {resume.languages
                .map((item) => `${item.language} — ${item.level}`)
                .join("   ·   ")}
            </Text>
          </>
        )}

        {resume?.tech_skills?.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>{labels.skills.toUpperCase()}</Text>
            {resume.tech_skills.map((group, idx) => (
              <Text key={idx} style={styles.skillRow}>
                <Text style={styles.skillLabel}>{group.title}: </Text>
                {group.tools.join(", ")}
              </Text>
            ))}
          </>
        )}
      </Page>
    </Document>
  );
};
