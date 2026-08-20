import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import { Button, Stack, Tooltip } from "@mui/material";
import { memo } from "react";
import i18n from "../../utils/i18n";

type ResumeLanguageToggleProps = {
  onToggle: () => void;
};

export const ResumeLanguageToggle = memo(
  ({ onToggle }: ResumeLanguageToggleProps) => {
    const label = i18n.t("resume.change_language");
    return (
      <Stack
        className='no-print'
        direction={{ xs: "row", md: "column" }}
        sx={{
          position: "fixed",
          left: "10px",
          bottom: "10px",
          zIndex: 1000,
        }}>
        <Button onClick={onToggle} aria-label={label}>
          <Tooltip title={label} arrow>
            <TranslateRoundedIcon sx={{ fontSize: 26 }} />
          </Tooltip>
        </Button>
      </Stack>
    );
  }
);

ResumeLanguageToggle.displayName = "ResumeLanguageToggle";
