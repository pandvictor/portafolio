import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { CoverLetter, Resume } from "../../types/types";

/**
 * Vector cover letter generated from the live translation data, matching the
 * CV's typography. The checked-in cover-letter PDFs carry whatever the copy
 * said the day they were exported.
 */

const COLORS = {
  ink: "#101828",
  body: "#333333",
  muted: "#555555",
  rule: "#c9c9c9",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 28,
    paddingHorizontal: 46,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.55,
    color: COLORS.body,
  },
  eyebrow: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    letterSpacing: 1.6,
    color: COLORS.muted,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 19,
    lineHeight: 1.2,
    letterSpacing: 1,
    color: COLORS.ink,
    marginTop: 6,
  },
  role: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    color: COLORS.muted,
    marginTop: 3,
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
  divider: {
    marginTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.rule,
    borderBottomStyle: "solid",
  },
  meta: {
    marginTop: 10,
    fontSize: 8.5,
    color: COLORS.muted,
  },
  metaLabel: {
    fontFamily: "Helvetica-Bold",
    color: COLORS.ink,
  },
  headline: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
    lineHeight: 1.35,
    color: COLORS.ink,
    marginTop: 12,
  },
  subheadline: {
    marginTop: 5,
    fontSize: 9.5,
    color: COLORS.muted,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    letterSpacing: 1.4,
    color: COLORS.ink,
    marginTop: 10,
    marginBottom: 2,
  },
  paragraph: {
    marginTop: 5,
    fontSize: 9.5,
  },
  bulletRow: {
    flexDirection: "row",
    marginTop: 3,
  },
  bulletMark: {
    width: 10,
    color: COLORS.muted,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    color: "#222222",
  },
  closing: {
    marginTop: 4,
    fontSize: 9.5,
  },
  footerNote: {
    marginTop: 10,
    paddingTop: 7,
    fontSize: 8.5,
    color: COLORS.muted,
    borderTopWidth: 1,
    borderTopColor: COLORS.rule,
    borderTopStyle: "solid",
  },
});

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

type CoverLetterPdfProps = {
  coverLetter: CoverLetter;
  resume: Resume;
};

export const CoverLetterPdfDocument = ({
  coverLetter,
  resume,
}: CoverLetterPdfProps) => {
  const contacts = (resume?.contact_info ?? []).filter((item) =>
    ["email.svg", "phone.svg", "linkedin.svg"].includes(item.icon)
  );

  return (
    <Document
      title={`${resume?.full_name} — ${coverLetter?.title}`}
      author={resume?.full_name}
      subject={coverLetter?.headline}>
      <Page size='LETTER' style={styles.page}>
        <Text style={styles.eyebrow}>
          {(coverLetter?.eyebrow ?? "").toUpperCase()}
        </Text>
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
        <View style={styles.divider} />

        <Text style={styles.meta}>
          <Text style={styles.metaLabel}>{coverLetter?.recipient_label}: </Text>
          {coverLetter?.recipient_value}
          {coverLetter?.location ? `   ·   ${coverLetter.location}` : ""}
        </Text>

        <Text style={styles.headline}>{coverLetter?.headline}</Text>
        <Text style={styles.subheadline}>{coverLetter?.subheadline}</Text>

        {coverLetter?.sections?.map((section, idx) => (
          <View key={idx}>
            <View minPresenceAhead={56}>
              <Text style={styles.sectionTitle}>
                {(section.title ?? "").toUpperCase()}
              </Text>
            </View>
            {section.paragraphs?.map((paragraph, pIdx) => (
              <Text key={pIdx} style={styles.paragraph}>
                {paragraph}
              </Text>
            ))}
            {section.bullets?.map((bullet, bIdx) => (
              <View key={bIdx} style={styles.bulletRow} wrap={false}>
                <Text style={styles.bulletMark}>•</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
          </View>
        ))}

        {coverLetter?.closing && (
          <View wrap={false}>
            <Text style={styles.sectionTitle}>
              {(coverLetter.closing_title ?? "").toUpperCase()}
            </Text>
            <Text style={styles.closing}>{coverLetter.closing}</Text>
          </View>
        )}

        {coverLetter?.footer_note && (
          <Text style={styles.footerNote}>{coverLetter.footer_note}</Text>
        )}
      </Page>
    </Document>
  );
};
