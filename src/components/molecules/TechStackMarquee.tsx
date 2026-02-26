import { Box } from "@mui/material";
import { keyframes } from "@mui/system";
import { styled } from "@mui/material/styles";
import { memo, useMemo } from "react";
import { publicPath } from "../../constants/gloabals";
import { TechStack } from "../../types/types";
import { resolveTechIconFromStack } from "../../utils/techIcons";

type TechStackMarqueeProps = {
  items: TechStack[];
};

type TechBadgeItem = {
  name: string;
  icon: string;
};

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeShell = styled(Box)(() => ({
  overflow: "hidden",
  position: "relative",
  width: "100%",
  maskImage:
    "linear-gradient(90deg, transparent 0, black 10%, black 90%, transparent 100%)",
}));

const MarqueeTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== "animate",
})<{ animate: boolean }>(({ animate }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  width: "max-content",
  animation: animate ? `${marquee} 18s linear infinite` : "none",
  "&:hover": {
    animationPlayState: "paused",
  },
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
}));

const IconWrap = styled(Box)(() => ({
  width: 28,
  height: 28,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
}));

const IconImage = styled("img")(() => ({
  width: 20,
  height: 20,
}));

export const TechStackMarquee = memo(({ items }: TechStackMarqueeProps) => {
  const badges = useMemo<TechBadgeItem[]>(() => {
    if (!items || items.length === 0) return [];
    return items.map((tech) => ({
      name: tech.name,
      icon: resolveTechIconFromStack(tech),
    }));
  }, [items]);

  if (badges.length === 0) return null;

  const shouldAnimate = badges.length > 4;
  const loopItems = shouldAnimate ? [...badges, ...badges] : badges;

  return (
    <MarqueeShell>
      <MarqueeTrack animate={shouldAnimate}>
        {loopItems.map((tech, idx) => (
          <IconWrap key={`${tech.name}-${idx}`} title={tech.name}>
            <IconImage
              src={`${publicPath}/images/icons/${tech.icon}`}
              alt={tech.name}
            />
          </IconWrap>
        ))}
      </MarqueeTrack>
    </MarqueeShell>
  );
});

TechStackMarquee.displayName = "TechStackMarquee";
