import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { publicPath } from "../../constants/gloabals";
import { ContactInfo, CoverLetter, Resume } from "../../types";

type CoverLetterDocumentProps = {
  coverLetter: CoverLetter;
  resume: Resume;
  contacts: ContactInfo[];
  language: string;
};

const Shell = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const Intro = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
}));

const Eyebrow = styled(Typography)(() => ({
  letterSpacing: "0.26em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "var(--text-secondary)",
}));

const ActionStack = styled(Stack)(({ theme }) => ({
  alignItems: "flex-start",
  gap: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-end",
  },
}));

const DownloadButton = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1),
  minHeight: 44,
  padding: theme.spacing(1.1, 2),
  textDecoration: "none",
  color: theme.palette.secondary.contrastText,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius * 2,
  fontWeight: 700,
  boxShadow: "0 18px 40px rgba(0,0,0,0.4)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 22px 44px rgba(0,0,0,0.45)",
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const Paper = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(180deg, rgba(252,252,253,0.98) 0%, rgba(245,247,250,0.98) 100%)",
  color: "#111827",
  borderRadius: 28,
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    borderRadius: 32,
  },
}));

const PaperHeader = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  background:
    "linear-gradient(135deg, rgba(248,250,252,0.98) 0%, rgba(240,244,248,0.98) 100%)",
  borderBottom: "1px solid rgba(15,23,42,0.08)",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.8fr)",
    alignItems: "start",
    padding: theme.spacing(5),
  },
}));

const HeaderCopy = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1.5),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: "-0.03em",
  color: "#0f172a",
  [theme.breakpoints.up("md")]: {
    maxWidth: "14ch",
  },
}));

const Role = styled(Typography)(() => ({
  color: "#334155",
  fontWeight: 600,
}));

const ContactCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.25),
  padding: theme.spacing(2.5),
  borderRadius: 22,
  background: "rgba(15,23,42,0.04)",
  border: "1px solid rgba(15,23,42,0.08)",
}));

const ContactLine = styled("a")(() => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  color: "#0f172a",
  textDecoration: "none",
  fontWeight: 600,
}));

const ContactIcon = styled("img")(() => ({
  width: 16,
  height: 16,
  display: "block",
}));

const Grid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "minmax(0, 1.35fr) minmax(260px, 0.85fr)",
    alignItems: "start",
    gap: theme.spacing(4),
    padding: theme.spacing(5),
  },
}));

const SingleColumnGrid = styled(Box)(({ theme }) => ({
  display: "block",
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5),
  },
}));

const MainColumn = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4),
}));

const SectionBlock = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
}));

const SectionTitle = styled(Typography)(() => ({
  color: "#0f172a",
  fontWeight: 800,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontSize: "0.88rem",
}));

const BulletList = styled("ul")(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(2.5),
  display: "grid",
  gap: theme.spacing(1),
  color: "#334155",
}));

const Sidebar = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}));

const SidebarCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: 22,
  border: "1px solid rgba(15,23,42,0.08)",
  background: "rgba(241,245,249,0.78)",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.25),
}));

const SidebarList = styled("ul")(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(2.5),
  display: "grid",
  gap: theme.spacing(0.8),
  color: "#334155",
}));

const Closing = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
}));

const ClosingText = styled(Typography)(() => ({
  color: "var(--text-secondary)",
}));

const FooterNote = styled(Typography)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  color: "#64748b",
  textAlign: "center",
  borderTop: "1px solid rgba(15,23,42,0.08)",
}));

export const CoverLetterDocument = memo(
  ({ coverLetter, resume, contacts, language }: CoverLetterDocumentProps) => {
    const primaryContacts = contacts.filter((item) =>
      ["email.svg", "phone.svg", "linkedin.svg"].includes(item.icon)
    );
    const hasSidebar = coverLetter.sidebar_groups.length > 0;
    const BodyLayout = hasSidebar ? Grid : SingleColumnGrid;

    return (
      <Shell>
        <Intro>
          <Box>
            <Eyebrow variant='overline'>{coverLetter.eyebrow}</Eyebrow>
            <Typography variant='h3'>{coverLetter.headline}</Typography>
            <Typography variant='body1' color='text.secondary'>
              {coverLetter.subheadline}
            </Typography>
          </Box>
          <ActionStack>
            <DownloadButton
              download
              href={`${publicPath}/files/cover-letter-victor-hernandez-${language}.pdf`}>
              <DownloadRoundedIcon fontSize='small' />
              {coverLetter.download_label}
            </DownloadButton>
            <Typography variant='caption' color='text.secondary'>
              {coverLetter.download_note}
            </Typography>
          </ActionStack>
        </Intro>

        <Paper>
          <PaperHeader>
            <HeaderCopy>
              <Title variant='h2'>
                {coverLetter.title} | {resume.full_name}
              </Title>
              <Role variant='h6'>{resume.position}</Role>
              <Typography variant='body1'>{coverLetter.subheadline}</Typography>
            </HeaderCopy>

            <ContactCard>
              <Typography variant='overline' color='text.secondary'>
                {coverLetter.recipient_label}
              </Typography>
              <Typography variant='h6'>{coverLetter.recipient_value}</Typography>
              <Typography variant='body2' color='text.secondary'>
                {coverLetter.location}
              </Typography>
              {primaryContacts.map((item) => (
                <ContactLine key={item.title} href={item.url} target='_blank' rel='noreferrer'>
                  <ContactIcon
                    src={`${publicPath}/images/icons/${item.icon}`}
                    alt={item.title}
                  />
                  {item.title}
                </ContactLine>
              ))}
            </ContactCard>
          </PaperHeader>

          <BodyLayout>
            <MainColumn>
              {coverLetter.sections.map((section) => (
                <SectionBlock key={section.title}>
                  <SectionTitle>{section.title}</SectionTitle>
                  {section.paragraphs?.map((paragraph) => (
                    <Typography key={paragraph} variant='body1' color='text.secondary'>
                      {paragraph}
                    </Typography>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <BulletList>
                      {section.bullets.map((item) => (
                        <li key={item}>
                          <Typography variant='body1' color='text.secondary'>
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </BulletList>
                  )}
                </SectionBlock>
              ))}

              <SectionBlock>
                <SectionTitle>{coverLetter.closing_title}</SectionTitle>
                <ClosingText variant='body1'>
                  {coverLetter.closing}
                </ClosingText>
              </SectionBlock>

              <Closing>
                <FooterNote variant='body2'>{coverLetter.footer_note}</FooterNote>
              </Closing>
            </MainColumn>

            {hasSidebar && (
              <Sidebar>
                {coverLetter.sidebar_groups.map((group) => (
                  <SidebarCard key={group.title}>
                    <SectionTitle>{group.title}</SectionTitle>
                    <SidebarList>
                      {group.items.map((item) => (
                        <li key={item}>
                          <Typography variant='body2'>{item}</Typography>
                        </li>
                      ))}
                    </SidebarList>
                  </SidebarCard>
                ))}
              </Sidebar>
            )}
          </BodyLayout>
        </Paper>
      </Shell>
    );
  }
);

CoverLetterDocument.displayName = "CoverLetterDocument";
