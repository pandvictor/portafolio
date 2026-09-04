import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { TypographyProps } from "@mui/material/Typography";
import { memo, useMemo } from "react";
import { format, formatDuration, intervalToDuration, parseISO } from "date-fns";
import { es as esLocale, it as itLocale } from "date-fns/locale";
import { WorkHistory } from "../../types";
import i18n from "../../utils/i18n";
import { useLanguage } from "../../context/LanguageContext";
import { motionize, transitions } from "../motion";
import { isDuplicateText, parseDescription } from "../../utils/resumeText";

const MotionPaper = motionize(Paper);

/**
 * Job title leads, dates trail. The previous layout put a fixed-width date
 * column first and indented the body by a matching hard-coded 140px, which put
 * the least important field in the most prominent slot.
 */
const Head = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.25),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: theme.spacing(2),
  },
}));

const Position = styled(Typography)<TypographyProps<"h3">>(() => ({
  fontWeight: 700,
}));

const Dates = styled(Typography)(() => ({
  color: "var(--text-secondary)",
  fontWeight: 600,
  whiteSpace: "nowrap",
  fontVariantNumeric: "tabular-nums",
  flexShrink: 0,
}));

const Company = styled(Typography)<TypographyProps<"p">>(({ theme }) => ({
  color: "var(--text-secondary)",
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

const Bullets = styled("ul")(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(2.5),
  "& li": {
    marginBottom: theme.spacing(0.5),
  },
}));

const Highlight = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const HighlightLink = styled("a")(() => ({
  fontWeight: 700,
  color: "var(--accent-1)",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const HighlightName = styled("span")(() => ({
  fontWeight: 700,
  color: "var(--text-primary)",
}));

type ResumeWorkCardProps = {
  work: WorkHistory;
};

export const ResumeWorkCard = memo(({ work }: ResumeWorkCardProps) => {
  const { language } = useLanguage();
  const dateLocale =
    language === "es" ? esLocale : language === "it" ? itLocale : undefined;

  const { range, tenure } = useMemo(() => {
    const start = parseISO(work.start_date);
    const end =
      work.is_current || !work.end_date ? new Date() : parseISO(work.end_date);
    const startLabel = format(start, "MMM yyyy", { locale: dateLocale });
    const endLabel = work.is_current
      ? i18n.t("resume.present")
      : format(end, "MMM yyyy", { locale: dateLocale });
    return {
      range: `${startLabel} – ${endLabel}`,
      // Without an explicit locale date-fns falls back to English, so the
      // Spanish resume used to read "5 months".
      tenure: formatDuration(intervalToDuration({ start, end }), {
        format: ["years", "months"],
        locale: dateLocale,
      }),
    };
  }, [dateLocale, work.end_date, work.is_current, work.start_date]);

  // A few descriptions are authored as bullet lists; render them as such.
  const parsed = parseDescription(work.description);
  const bullets = [...parsed.bullets, ...(work.tasks ?? [])];

  return (
    <MotionPaper
      className='resume-entry'
      elevation={0}
      sx={{ p: 2.5, mb: 2.5 }}
      whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.35)" }}
      transition={transitions.quick}>
      <Head>
        <Position variant='h5' component='h3'>
          {work.position}
        </Position>
        <Dates variant='body2'>
          {range}
          {tenure ? ` · ${tenure}` : ""}
        </Dates>
      </Head>
      <Company variant='subtitle1' component='p'>
        {work.company}
      </Company>

      {parsed.lead && <Typography sx={{ mb: 1 }}>{parsed.lead}</Typography>}
      {bullets.length > 0 && (
        <Bullets>
          {bullets.map((task, index) => (
            <li key={index}>
              <Typography variant='body2'>{task}</Typography>
            </li>
          ))}
        </Bullets>
      )}

      {work.achievements?.map((achievement, index) => {
        // Some roles repeat their whole description inside an achievement.
        const repeatsRole = isDuplicateText(
          achievement.description,
          work.description
        );
        const detail = repeatsRole
          ? ""
          : parseDescription(achievement.description).lead ??
            achievement.description;
        return (
          <Highlight key={index} variant='body2'>
            {achievement.url ? (
              <HighlightLink
                href={achievement.url}
                target='_blank'
                rel='noreferrer'>
                {achievement.title}
              </HighlightLink>
            ) : (
              <HighlightName>{achievement.title}</HighlightName>
            )}
            {detail ? ` — ${detail}` : ""}
          </Highlight>
        );
      })}
    </MotionPaper>
  );
});

ResumeWorkCard.displayName = "ResumeWorkCard";
