import React from "react";
import { DrawerAppBar } from "../organisms";
import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FloatingActionButtons from "../molecules/FloatingActionButtons";
import { ContactInfo } from "../../types";
import i18n from "../../utils/i18n";
import { version } from "../../constants/gloabals";
import { ContactIcon } from "../atoms";
import {
  PageTransition,
  Reveal,
  ScrollProgress,
  StaggerGroup,
  StaggerItem,
  motionize,
} from "../motion";

const PageRoot = styled(Box)(() => ({
  minHeight: "100vh",
  position: "relative",
  backgroundColor: "var(--bg)",
  backgroundImage:
    "radial-gradient(circle at 12% 18%, rgba(34, 211, 238, 0.18), transparent 42%), radial-gradient(circle at 88% 12%, rgba(163, 230, 53, 0.14), transparent 35%), linear-gradient(180deg, #0b111b 0%, #0c1523 40%, #0a0f18 100%)",
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(9),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(12),
  },
}));

/** Colophon line. A filled green button for the build number read as a CTA. */
const VersionRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(0.5),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(5),
  color: "var(--text-secondary)",
}));

const FooterRoot = styled(Box)(({ theme }) => ({
  borderTop: "1px solid var(--border-subtle)",
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(4),
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const FooterTag = styled(Typography)(() => ({
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "var(--text-secondary)",
}));

const FooterLinks = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
}));

const FooterLink = styled("a")(() => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "6px 12px",
  borderRadius: 999,
  border: "1px solid var(--border-subtle)",
  color: "inherit",
  background: "rgba(15,23,42,0.6)",
  textDecoration: "none",
  fontWeight: 600,
  transition: "border-color 0.2s ease, background-color 0.2s ease",
  "&:hover": {
    borderColor: "var(--border-strong)",
    backgroundColor: "rgba(30,41,59,0.75)",
  },
}));

const MotionFooterLink = motionize(FooterLink);

/** Slow-drifting ambient wash behind the whole page. */
const AmbientLayer = styled(Box)(() => ({
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: 0,
  background:
    "radial-gradient(680px circle at 78% 8%, rgba(34,211,238,0.07), transparent 60%), radial-gradient(520px circle at 8% 72%, rgba(163,230,53,0.045), transparent 62%)",
}));

const MotionAmbientLayer = motionize(AmbientLayer);

export const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contact_info = i18n.t("resume.contact_info") as ContactInfo[];
  const footerCopy = i18n.t("footer") as {
    availability_tag: string;
    availability_title: string;
    availability_desc: string;
    availability_meta: string;
  };
  const footerLinks = contact_info.filter((item) =>
    ["linkedin.svg", "github.svg", "whatsapp.svg"].includes(item.icon)
  );
  return (
    <PageRoot className='app-shell'>
      <ScrollProgress />
      <MotionAmbientLayer
        className='ambient-layer'
        aria-hidden
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <DrawerAppBar />
        <ContentContainer maxWidth='lg'>
          <PageTransition>{children}</PageTransition>
        </ContentContainer>
        <FloatingActionButtons data={contact_info.slice(2)} />
        <Container maxWidth='lg' className='site-footer'>
          <FooterRoot>
            <Reveal preset='up'>
              <FooterContent>
                <Box>
                  <FooterTag variant='overline'>
                    {footerCopy.availability_tag}
                  </FooterTag>
                  <Typography variant='h6'>
                    {footerCopy.availability_title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {footerCopy.availability_desc}
                  </Typography>
                  <Typography variant='caption' color='text.secondary'>
                    {footerCopy.availability_meta}
                  </Typography>
                </Box>
                <StaggerGroup stagger={0.07}>
                  <FooterLinks>
                    {footerLinks.map((item) => (
                      <StaggerItem key={item.title}>
                        <MotionFooterLink
                          href={item.url}
                          target='_blank'
                          rel='noreferrer'
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.97 }}>
                          <ContactIcon icon={item.icon} size={18} />
                          {item.title}
                        </MotionFooterLink>
                      </StaggerItem>
                    ))}
                  </FooterLinks>
                </StaggerGroup>
              </FooterContent>
            </Reveal>
          </FooterRoot>
        </Container>
        <VersionRow className='site-colophon'>
          <Typography variant='caption' color='text.secondary'>
            © {new Date().getFullYear()} {i18n.t("resume.full_name")}
          </Typography>
          <Typography variant='caption' sx={{ opacity: 0.6 }}>
            v{version}
          </Typography>
        </VersionRow>
      </Box>
    </PageRoot>
  );
};
