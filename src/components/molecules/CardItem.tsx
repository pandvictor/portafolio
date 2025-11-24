import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ImageIcons } from "./ImageIcons";
import { publicPath } from "../../constants/gloabals";
import { Project, TechStack } from "../../types/types";
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
} from "@mui/material";
import { LinkItem } from "../atoms";

interface RecipeReviewCardProps {
  data: Project;
  companyImage?: string;
  companyName?: string;
  companyUrl?: string;
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
}) => {
  const { title, description, image, url, tech_stack } = data;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const techIconFromName = (tech: TechStack) => {
    if (tech.icon) return tech.icon;
    const key = tech.name.toLowerCase();
    if (key.includes("react")) return "react.svg";
    if (key.includes("react native")) return "react-native.svg";
    if (key.includes("expo")) return "expo.svg";
    if (key.includes("redux")) return "redux.svg";
    if (key.includes("aws")) return "aws.svg";
    if (key.includes("docker")) return "docker.svg";
    if (key.includes("kubernetes")) return "kubernetes.svg";
    if (key.includes("node")) return "javascript.svg";
    if (key.includes("typescript")) return "typescript.png";
    if (key.includes("javascript")) return "javascript.svg";
    return "javascript.svg";
  };

  const renderActionIcons = () => {
    return tech_stack.map((item) => {
      const icon = techIconFromName(item);
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
            <LinkItem
              to={companyUrl || url}
              target='_blank'
              rel='noopener noreferrer'>
              {title}
            </LinkItem>
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
