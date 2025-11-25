import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ImageIcons } from "./ImageIcons";
import { publicPath } from "../../constants/gloabals";
import { Project, ProjectModalPayload } from "../../types/types";
import { resolveTechIconFromStack } from "../../utils/techIcons";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Theme as MuiTheme,
  Typography,
  Avatar,
  Stack,
  Tooltip,
  Button,
} from "@mui/material";
import i18n from "../../utils/i18n";

interface RecipeReviewCardProps {
  data: Project;
  companyImage?: string;
  companyName?: string;
  companyUrl?: string;
  onOpen?: (payload: ProjectModalPayload) => void;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }: { theme: MuiTheme; expand: boolean }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardItem: React.FC<RecipeReviewCardProps> = ({
  data,
  companyImage,
  companyName,
  companyUrl,
  onOpen,
}) => {
  const { title, description, image, tech_stack } = data;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderActionIcons = () => {
    return tech_stack.map((item) => {
      const icon = resolveTechIconFromStack(item);
      return (
        <Tooltip key={item.name} title={item.name} arrow placement='top'>
          <IconButton
            sx={{
              backgroundColor: "#ffffffad",
              borderRadius: "8px",
              margin: 1,
            }}>
            <img
              src={`${publicPath}/images/icons/${icon}`}
              height={25}
              width={25}
              alt={item.name}
            />
          </IconButton>
        </Tooltip>
      );
    });
  };

  return (
    <Card sx={{ maxWidth: 800, borderRadius: "28px", height: "100%" }}>
      <ImageIcons
        actionIcons={<Box sx={{ padding: 1 }}>{renderActionIcons()}</Box>}
        image={{
          src: `${publicPath}/images/${image}`,
          srcSet: "",
          alt: "",
        }}
      />
      <CardContent>
        <Stack direction='row' spacing={1} alignItems='center'>
          {companyImage && (
            <Avatar
              src={`${publicPath}/images/${companyImage}`}
              alt={companyName || title}
              sx={{ width: 36, height: 36 }}
            />
          )}
          <Typography variant='h5' component='div'>
            {title}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <Button
          size='small'
          onClick={() =>
            onOpen?.({ project: data, companyImage, companyName, companyUrl })
          }>
          {i18n.t("more_info")}
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
