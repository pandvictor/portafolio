import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import PrintIcon from "@mui/icons-material/Print";
import { Link as RouterLink } from "react-router-dom";
import i18n from "../../utils/i18n";
import { printResumePath } from "../../constants/gloabals";

/**
 * Sends the visitor to the print-first CV rather than printing this page.
 *
 * The styled web resume prints as a second, much rougher PDF than the
 * dedicated one, so both routes now end at the same document.
 */
const StyledPrintButton = styled(Button)<ButtonProps<typeof RouterLink>>(
  ({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 12px 26px rgba(0,0,0,0.4)",
    textTransform: "none",
    fontWeight: 700,
    alignSelf: "flex-start",
  })
);

export const PrintButton = () => (
  <StyledPrintButton
    className='no-print'
    component={RouterLink}
    to={printResumePath}
    startIcon={<PrintIcon />}
    variant='outlined'
    color='primary'>
    {i18n.t("resume.print_cv")}
  </StyledPrintButton>
);
