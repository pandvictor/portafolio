import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
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
  const coins = data.coins || [];
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
            <Box
              key={`${img}-${idx}`}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 60,
                maxWidth: 140,
                maxHeight: 42,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}>
              <img
                src={`${publicPath}/images/${img}`}
                alt={companyName || title}
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: 140,
                  maxHeight: 42,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
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
        {coins.length > 0 && (
          <Stack direction='row' spacing={1} flexWrap='wrap' sx={{ mt: 1 }}>
            {coins.slice(0, 4).map((coin, idx) => {
              const icon = resolveTechIconFromStack(coin);
              return (
                <Chip
                  key={`${coin.name}-${idx}`}
                  size='small'
                  label={coin.name}
                  avatar={
                    <Avatar
                      src={`${publicPath}/images/icons/${icon}`}
                      alt={coin.name}
                      sx={{ width: 22, height: 22 }}
                    />
                  }
                  sx={{
                    mr: 0.5,
                    mb: 0.5,
                    borderRadius: 2,
                    bgcolor: "rgba(0,0,0,0.03)",
                  }}
                />
              );
            })}
            {coins.length > 4 && (
              <Chip
                size='small'
                label={`+${coins.length - 4}`}
                sx={{
                  mr: 0.5,
                  mb: 0.5,
                  borderRadius: 2,
                  bgcolor: "rgba(0,0,0,0.03)",
                }}
              />
            )}
          </Stack>
        )}
      </CardContent>
      <CardActions disableSpacing>
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
