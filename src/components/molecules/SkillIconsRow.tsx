import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import { useMemo } from "react";
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
}> = ({
  icons = defaultIcons,
  justify = "flex-start",
  initialVisibleCount = 6,
}) => {
  const shouldAnimate = icons.length > initialVisibleCount;
  const loopIcons = useMemo(
    () => (shouldAnimate ? [...icons, ...icons] : icons),
    [icons, shouldAnimate],
  );

  return (
    <MarqueeShell>
      <MarqueeTrack animate={shouldAnimate} justify={justify}>
        {loopIcons.map((item, idx) => (
          <IconWrap key={`${item.alt}-${idx}`} title={item.alt}>
            <IconImage
              src={`${publicPath}/images/icons/${item.src}`}
              alt={item.alt}
            />
          </IconWrap>
        ))}
      </MarqueeTrack>
    </MarqueeShell>
  );
};

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeShell = styled(Box)(() => ({
  overflow: "hidden",
  position: "relative",
  width: "fit-content",
  maxWidth: 520,
  paddingTop: 4,
  paddingBottom: 4,
  maskImage:
    "linear-gradient(90deg, transparent 0, black 10%, black 90%, transparent 100%)",
}));

const MarqueeTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== "animate" && prop !== "justify",
})<{ animate: boolean; justify: "center" | "flex-start" }>(
  ({ animate, justify }) => ({
    display: "flex",
    alignItems: "center",
    gap: 8,
    width: animate ? "max-content" : "100%",
    justifyContent: animate ? "flex-start" : justify,
    animation: animate ? `${marquee} 22s linear infinite` : "none",
    "&:hover": {
      animationPlayState: "paused",
    },
    "@media (prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  }),
);

/**
 * Bare icons floating on the hero background read as scattered noise. Giving
 * each one the same bordered tile used on the project cards makes the strip
 * look like a deliberate component.
 */
const IconWrap = styled(Box)(() => ({
  width: 34,
  height: 34,
  flexShrink: 0,
  borderRadius: 10,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(15,23,42,0.7)",
  transition: "border-color 0.25s ease, transform 0.25s ease",
  "&:hover": {
    borderColor: "rgba(34,211,238,0.5)",
    transform: "translateY(-2px)",
  },
}));

const IconImage = styled("img")(() => ({
  width: 19,
  height: 19,
  objectFit: "contain",
}));
