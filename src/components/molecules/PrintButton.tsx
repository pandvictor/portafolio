import { Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import i18n from "../../utils/i18n";

type Props = {
  onClick: () => void;
};

export const PrintButton: React.FC<Props> = ({ onClick }) => (
  <Button
    className="no-print"
    onClick={onClick}
    startIcon={<PrintIcon />}
    variant="outlined"
    color="primary"
    sx={{
      borderRadius: 2,
      boxShadow: "0 12px 26px rgba(0,0,0,0.4)",
      textTransform: "none",
      alignSelf: "flex-start",
    }}>
    {i18n.t("resume.print_cv")}
  </Button>
);
