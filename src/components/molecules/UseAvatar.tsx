import { Avatar, Button, Stack, Typography } from "@mui/material";
import { publicPath } from "../../constants/gloabals";
import { LinkItem } from "../atoms";
import i18n from "../../utils/i18n";

const basePath = import.meta.env.BASE_URL || "/";
export const UserAvatar = () => {
  const fullName = i18n.t("resume.full_name");
  const position = i18n.t("resume.position");
  return (
    <Button
      component={LinkItem}
      to={`${basePath}`}
      relative='path'
      color='inherit'
      sx={{
        p: 0,
        textTransform: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        color: "inherit",
        borderRadius: 999,
        transition: "transform 0.2s ease, filter 0.2s ease",
        "&:hover": {
          transform: "translateY(-1px)",
          filter: "drop-shadow(0 10px 24px rgba(0,0,0,0.45))",
          backgroundColor: "transparent",
        },
      }}>
      <Avatar
        sx={{
          display: "flex",
          flexGrow: 1,
          width: 42,
          height: 42,
          border: "2px solid rgba(148,163,184,0.4)",
        }}
        alt='A'
        src={`${publicPath}/images/vic.jpeg`}
      />
      <Stack spacing={0.15} alignItems='flex-start'>
        <Typography
          noWrap
          component='span'
          sx={{
            display: "flex",
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}>
          {fullName}
        </Typography>
        <Typography
          component='span'
          variant='caption'
          sx={{ color: "text.secondary", lineHeight: 1.3 }}>
          {position}
        </Typography>
      </Stack>
    </Button>
  );
};
