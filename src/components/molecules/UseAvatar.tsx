import { Avatar, Button, Typography } from "@mui/material";
import { publicPath } from "../../constants/gloabals";
import { LinkItem } from "../atoms";
import i18n from "../../utils/i18n";

const basePath = import.meta.env.BASE_URL || "/";
export const UserAvatar = () => {
  return (
    <Button sx={{ p: 0, textTransform: "none" }} color='inherit'>
      <Avatar
        sx={{ display: "flex", mr: 1, flexGrow: 1 }}
        alt='A'
        src={`${publicPath}/images/vic.jpeg`}
      />
      <LinkItem to={`${basePath}`} color='inherit' relative='path'>
        <Typography
          noWrap
          component='a'
          sx={{
            mr: 2,
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 700,
            textDecoration: "none",
          }}>
          {i18n.t("resume.name")}
        </Typography>
      </LinkItem>
    </Button>
  );
};
