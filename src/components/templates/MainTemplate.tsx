import React from "react";
import { DrawerAppBar } from "../organisms";
import { Box, Button } from "@mui/material";
import FloatingActionButtons from "../molecules/FloatingActionButtons";
import { ContactInfo } from "../../types";
import i18n from "../../utils/i18n";
import { version } from "../../constants/gloabals";

export const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contact_info = i18n.t("resume.contact_info") as ContactInfo[];
  return (
    <Box sx={{ margin: "lg" }}>
      <DrawerAppBar />
      <div style={{ marginTop: "80px" }}>{children}</div>
      <FloatingActionButtons data={contact_info.slice(2)} />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button color="secondary" variant="contained" size="small">
          version: {version}
        </Button>
      </Box>
    </Box>
  );
};
