import { Box } from "@mui/material";
import { memo } from "react";

type StarsProps = {
  count: number;
};

export const Stars = memo(({ count }: StarsProps) => (
  <Box
    component='span'
    sx={{
      color: "#f5c518",
      ml: 1,
      fontSize: 18,
      letterSpacing: "0.5px",
      fontWeight: 700,
    }}
    aria-label={`${count} star rating`}>
    {"★".repeat(Math.max(0, count))}
  </Box>
));

Stars.displayName = "Stars";
