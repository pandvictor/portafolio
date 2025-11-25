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
  Chip,
} from "@mui/material";
import i18n from "../../utils/i18n";

interface RecipeReviewCardProps {
  data: Project;
  companyImage?: string;
  companyImages?: string[];
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
  companyImages,
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
    return null;
  };

  return (
    <Card sx={{ maxWidth: 800, borderRadius: "28px", height: "100%" }}>
      <ImageIcons
        actionIcons={null}
        image={{
          src: `${publicPath}/images/${image}`,
          srcSet: "",
          alt: "",
        }}
      />
      <CardContent>
        <Stack
          direction='row'
          spacing={1}
          alignItems='center'
          sx={{
            backgroundColor: "rgba(0,0,0,0.02)",
            p: 1,
            borderRadius: 2,
          }}>
          {(companyImages && companyImages.length > 0
            ? companyImages
            : companyImage
              ? [companyImage]
              : []
          ).map((img, idx) => (
            <Avatar
              key={`${img}-${idx}`}
              src={`${publicPath}/images/${img}`}
              alt={companyName || title}
              sx={{
                width: 36,
                height: 36,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "scale(1.12)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
              }}
            />
          ))}
          <Typography variant='h5' component='div'>
            {title}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={1} flexWrap='wrap' sx={{ mt: 1 }}>
          {tech_stack.slice(0, 4).map((tech, idx) => {
            const icon = resolveTechIconFromStack(tech);
            return (
              <Chip
                key={`${tech.name}-${idx}`}
                size='small'
                label={tech.name}
                avatar={
                  <Avatar
                    src={`${publicPath}/images/icons/${icon}`}
                    alt={tech.name}
                    sx={{ width: 22, height: 22 }}
                  />
                }
                sx={{ mr: 0.5, mb: 0.5, borderRadius: 2 }}
              />
            );
          })}
          {tech_stack.length > 4 && (
            <Chip
              size='small'
              label={`+${tech_stack.length - 4}`}
              sx={{ mr: 0.5, mb: 0.5, borderRadius: 2 }}
            />
          )}
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
            onOpen?.({
              project: data,
              companyImage,
              companyImages,
              companyName,
              companyUrl,
            })
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
