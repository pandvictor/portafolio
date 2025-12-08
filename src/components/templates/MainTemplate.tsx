import React from "react";
import { DrawerAppBar } from "../organisms";
import { Box, Button, Container } from "@mui/material";
import FloatingActionButtons from "../molecules/FloatingActionButtons";
import { ContactInfo } from "../../types";
import i18n from "../../utils/i18n";
import { version } from "../../constants/gloabals";

export const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contact_info = i18n.t("resume.contact_info") as ContactInfo[];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f7f9fb",
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(45, 178, 255, 0.12), transparent 35%), radial-gradient(circle at 85% 10%, rgba(78, 205, 196, 0.12), transparent 28%), linear-gradient(180deg, #f8fbff 0%, #f6f9fd 35%, #f4f6fa 100%)",
      }}>
      <DrawerAppBar />
      <Container
        maxWidth='lg'
        sx={{
          pt: { xs: 12, md: 14 },
          pb: { xs: 9, md: 12 },
        }}>
        {children}
      </Container>
      <FloatingActionButtons data={contact_info.slice(2)} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 4,
        }}>
        <Button color='secondary' variant='contained' size='small'>
          version: {version}
        </Button>
      </Box>
    </Box>
  );
};
