import React from "react";
import { ImageIcons } from "./ImageIcons";
import { publicPath } from "../../constants/gloabals";
import { Project, ProjectModalPayload } from "../../types/types";
import { resolveTechIconFromStack } from "../../utils/techIcons";
import {
  Box,
  Card,
  CardActions,
  CardContent,
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

export const CardItem: React.FC<RecipeReviewCardProps> = ({
  data,
  companyImage,
  companyImages,
  companyName,
  companyUrl,
  onOpen,
}) => {
  const { title, image, tech_stack } = data;
  const coins = data.coins || [];
  const hasCoins = coins.length > 0;

  return (
    <Card
      sx={{
        maxWidth: 800,
        borderRadius: "28px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, #f9fbff 100%)",
        border: "1px solid rgba(226, 232, 240, 0.8)",
        boxShadow: "0 18px 40px rgba(15, 23, 42, 0.05)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:before": {
          content: "''",
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(110% 75% at 50% 100%, rgba(79,70,229,0.16), transparent 60%)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        },
        "&:after": {
          content: "''",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background:
            "linear-gradient(90deg, rgba(79,70,229,0.4), rgba(16,185,129,0.5))",
          opacity: 0,
          transform: "translateY(6px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: "none",
        },
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)",
          "&:before": {
            opacity: 1,
          },
          "&:after": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}>
      <ImageIcons
        actionIcons={null}
        image={{
          src: `${publicPath}/images/${image}`,
          srcSet: "",
          alt: "",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack
          direction='row'
          alignItems='center'
          spacing={2}
          sx={{
            backgroundColor: "rgba(0,0,0,0.02)",
            p: 1.2,
            borderRadius: 2,
            gap: 2,
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexShrink: 0,
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
                  height: 42,
                  maxWidth: 140,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}>
                <img
                  src={`${publicPath}/images/${img}`}
                  alt={companyName || title}
                  style={{
                    height: "100%",
                    width: "auto",
                    maxWidth: 140,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Box>
          <Typography
            variant='h6'
            component='div'
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              flexGrow: 1,
              color: "text.primary",
            }}>
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
        {hasCoins && (
          <Stack
            direction='row'
            spacing={1}
            flexWrap='wrap'
            sx={{
              mt: 1,
              p: 1,
              borderRadius: 2,
              backgroundColor: "rgba(79,70,229,0.04)",
            }}>
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
                    bgcolor: "rgba(79,70,229,0.04)",
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
                  bgcolor: "rgba(79,70,229,0.04)",
                }}
              />
            )}
          </Stack>
        )}
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          px: 2,
          pb: 2,
          pt: 0,
        }}>
        <Button
          size='small'
          fullWidth
          variant='contained'
          color='inherit'
          sx={{
            borderRadius: 2,
            fontWeight: 700,
            bgcolor: "#e0e0e0",
            color: "#1f1f1f",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#d5d5d5",
              boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
            },
          }}
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
      </CardActions>
    </Card>
  );
};
