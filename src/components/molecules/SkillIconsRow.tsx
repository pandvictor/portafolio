import { Box, Button, Stack, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { publicPath } from "../../constants/gloabals";

type IconItem = { src: string; alt: string };

const defaultIcons: IconItem[] = [
  { src: "react.svg", alt: "React" },
  { src: "react-native.svg", alt: "React Native" },
  { src: "typescript.png", alt: "TypeScript" },
  { src: "javascript.svg", alt: "JavaScript" },
  { src: "nodejs.svg", alt: "Node.js" },
  { src: "redux.svg", alt: "Redux" },
  { src: "rtk-query.svg", alt: "RTK Query" },
  { src: "expo.svg", alt: "Expo" },
  { src: "android.svg", alt: "Android" },
  { src: "ios.svg", alt: "iOS" },
  { src: "aws.svg", alt: "AWS" },
  { src: "docker.svg", alt: "Docker" },
  { src: "kubernetes.svg", alt: "Kubernetes" },
  { src: "mongodb.svg", alt: "MongoDB" },
  { src: "mysql-database.svg", alt: "MySQL" },
  { src: "sqlserver.svg", alt: "SQL Server" },
  { src: "git.svg", alt: "Git" },
  { src: "gitlab.svg", alt: "GitLab" },
  { src: "jira.svg", alt: "Jira" },
  { src: "linux.svg", alt: "Linux" },
  { src: "bitcoin.svg", alt: "Bitcoin" },
  { src: "eth.svg", alt: "Ethereum" },
  { src: "usdt.svg", alt: "USDT" },
  { src: "xrp.svg", alt: "XRP" },
];

export const SkillIconsRow: React.FC<{
  icons?: IconItem[];
  justify?: "center" | "flex-start";
  initialVisibleCount?: number;
  language?: string;
}> = ({
  icons = defaultIcons,
  justify = "flex-start",
  initialVisibleCount = 6,
  language,
}) => {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = Math.max(
    0,
    Math.min(initialVisibleCount, icons.length)
  );
  const hiddenCount = Math.max(0, icons.length - visibleCount);
  const isEs = language === "es";
  const visibleIcons = useMemo(
    () => (expanded ? icons : icons.slice(0, visibleCount)),
    [expanded, icons, visibleCount]
  );

  return (
    <Stack
      direction='row'
      spacing={1.5}
      flexWrap='wrap'
      alignItems='center'
      sx={{
        pt: 1,
        justifyContent: { xs: "center", md: justify },
        gap: 1.5,
      }}>
      {visibleIcons.map((item) => (
        <Stack
          key={item.alt}
          direction='row'
          alignItems='center'
          spacing={0.8}
          sx={{
            px: 1.25,
            py: 0.6,
            borderRadius: 999,
            backgroundColor: "rgba(0,0,0,0.04)",
            boxShadow: "0 8px 18px rgba(0,0,0,0.05)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 14px 26px rgba(0,0,0,0.08)",
            },
          }}>
          <Box
            sx={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              backgroundColor: "rgba(79,70,229,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}>
            <img
              src={`${publicPath}/images/icons/${item.src}`}
              alt={item.alt}
              style={{
                width: item.src.endsWith(".png") ? 20 : 18,
                height: item.src.endsWith(".png") ? 20 : 18,
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography
            variant='body2'
            sx={{ fontWeight: 700, fontSize: "0.8rem" }}>
            {item.alt}
          </Typography>
        </Stack>
      ))}
      {hiddenCount > 0 && (
        <Button
          variant='outlined'
          size='small'
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          sx={{
            borderRadius: 999,
            px: 1.4,
            py: 0.35,
            minWidth: "auto",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "0.75rem",
            borderColor: "rgba(15,23,42,0.2)",
            color: "text.primary",
            backgroundColor: "rgba(255,255,255,0.6)",
            "&:hover": {
              borderColor: "rgba(15,23,42,0.35)",
              backgroundColor: "rgba(255,255,255,0.9)",
            },
          }}>
          {expanded
            ? isEs
              ? "Ver menos"
              : "Show less"
            : isEs
              ? `+${hiddenCount} más`
              : `+${hiddenCount} more`}
        </Button>
      )}
    </Stack>
  );
};
