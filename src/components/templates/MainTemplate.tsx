import React from "react";
import { DrawerAppBar } from "../organisms";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FloatingActionButtons from "../molecules/FloatingActionButtons";
import { ContactInfo } from "../../types";
import i18n from "../../utils/i18n";
import { publicPath, version } from "../../constants/gloabals";

const PageRoot = styled(Box)(() => ({
  minHeight: "100vh",
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

const VersionRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingBottom: theme.spacing(4),
}));

const FooterRoot = styled(Box)(({ theme }) => ({
  borderTop: "1px solid var(--border-subtle)",
  paddingTop: theme.spacing(4),
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
  transition: "transform 0.2s ease, border-color 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: "var(--border-strong)",
  },
}));

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
    <PageRoot>
      <DrawerAppBar />
      <ContentContainer maxWidth='lg'>{children}</ContentContainer>
      <FloatingActionButtons data={contact_info.slice(2)} />
      <Container maxWidth='lg'>
        <FooterRoot>
          <FooterContent>
            <Box>
              <FooterTag variant='overline'>{footerCopy.availability_tag}</FooterTag>
              <Typography variant='h6'>{footerCopy.availability_title}</Typography>
              <Typography variant='body2' color='text.secondary'>
                {footerCopy.availability_desc}
              </Typography>
              <Typography variant='caption' color='text.secondary'>
                {footerCopy.availability_meta}
              </Typography>
            </Box>
            <FooterLinks>
              {footerLinks.map((item) => (
                <FooterLink key={item.title} href={item.url} target='_blank' rel='noreferrer'>
                  <img
                    src={`${publicPath}/images/icons/${item.icon}`}
                    width={18}
                    height={18}
                    alt={item.title}
                  />
                  {item.title}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterContent>
        </FooterRoot>
      </Container>
      <VersionRow>
        <Button color='secondary' variant='contained' size='small'>
          version: {version}
        </Button>
      </VersionRow>
    </PageRoot>
  );
};
