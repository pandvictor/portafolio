import { Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

type Props = {
  onClick: () => void;
};

export const PrintButton: React.FC<Props> = ({ onClick }) => (
  <Button
    onClick={onClick}
    startIcon={<PrintIcon />}
    sx={{
      display: { print: "none" },
      borderRadius: 2,
      boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
      textTransform: "none",
      alignSelf: "flex-start",
    }}>
    Print / Save PDF
  </Button>
);
