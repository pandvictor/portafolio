import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { LanguageSwitcher } from "../molecules";

/**
 * Floating language control for the resume page.
 *
 * Replaces a button that flipped between two languages — with three shipped,
 * a flag switcher shows what is available instead of hiding it behind a cycle.
 */
const Dock = styled(Box)(({ theme }) => ({
  position: "fixed",
  left: theme.spacing(1.5),
  bottom: theme.spacing(3),
  zIndex: 1000,
  "@media print": {
    display: "none",
  },
}));

export const ResumeLanguageToggle = memo(() => (
  <Dock className='no-print'>
    <LanguageSwitcher />
  </Dock>
));

ResumeLanguageToggle.displayName = "ResumeLanguageToggle";
