import { Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

type Props = {
  onClick: () => void;
};

export const PrintButton: React.FC<Props> = ({ onClick }) => (
  <Button
    onClick={onClick}
    startIcon={<PrintIcon />}
    variant="outlined"
    color="primary"
    sx={{
      display: { print: "none" },
      borderRadius: 2,
      boxShadow: "0 12px 26px rgba(0,0,0,0.4)",
      textTransform: "none",
      alignSelf: "flex-start",
    }}>
    Print / Save PDF
  </Button>
);
