import React from "react";
import { DrawerAppBar } from "../organisms";
import { Box, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import FloatingActionButtons from "../molecules/FloatingActionButtons";
import { ContactInfo } from "../../types";
import i18n from "../../utils/i18n";
import { version } from "../../constants/gloabals";

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

export const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contact_info = i18n.t("resume.contact_info") as ContactInfo[];
  return (
    <PageRoot>
      <DrawerAppBar />
      <ContentContainer maxWidth='lg'>{children}</ContentContainer>
      <FloatingActionButtons data={contact_info.slice(2)} />
      <VersionRow>
        <Button color='secondary' variant='contained' size='small'>
          version: {version}
        </Button>
      </VersionRow>
    </PageRoot>
  );
};
