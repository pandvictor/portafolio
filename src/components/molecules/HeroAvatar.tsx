import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent } from "react";
import i18n from "../../utils/i18n";
import { motionize, transitions } from "../motion";

type HeroAvatarProps = {
  src: string;
  alt?: string;
};

const AvatarWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  flexShrink: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  perspective: "900px",
  [theme.breakpoints.up("md")]: {
    width: 340,
  },
}));

/** Dot matrix behind the portrait — gives the frame something to sit against. */
const DotGrid = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: 260,
  height: 260,
  right: -18,
  bottom: -22,
  borderRadius: 24,
  pointerEvents: "none",
  backgroundImage:
    "radial-gradient(rgba(148,163,184,0.45) 1px, transparent 1px)",
  backgroundSize: "14px 14px",
  maskImage: "radial-gradient(circle at 70% 70%, #000 10%, transparent 72%)",
  WebkitMaskImage: "radial-gradient(circle at 70% 70%, #000 10%, transparent 72%)",
  opacity: 0.5,
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const Stage = styled(motion.div)(({ theme }) => ({
  position: "relative",
  width: 190,
  height: 190,
  transformStyle: "preserve-3d",
  [theme.breakpoints.up("sm")]: {
    width: 240,
    height: 240,
  },
  [theme.breakpoints.up("md")]: {
    width: 292,
    height: 292,
  },
}));

/**
 * The rim animates the conic gradient's own angle rather than rotating an
 * element. Spinning a square swings its corners past the frame, and clipping it
 * does not work here because the tilt puts this inside a preserve-3d context,
 * where `overflow: hidden` is ignored.
 */
const Ring = styled(motion.div)(() => ({
  position: "absolute",
  inset: 0,
  borderRadius: 34,
}));

const Halo = styled(Box)(() => ({
  position: "absolute",
  inset: -26,
  borderRadius: 48,
  background:
    "radial-gradient(circle, rgba(34,211,238,0.30), rgba(163,230,53,0.12) 55%, transparent 72%)",
  filter: "blur(20px)",
  pointerEvents: "none",
}));

const MotionHalo = motionize(Halo);

const Frame = styled(Box)(() => ({
  position: "absolute",
  inset: 3,
  borderRadius: 31,
  overflow: "hidden",
  backgroundColor: "rgba(9,14,23,0.9)",
  boxShadow: "0 26px 60px rgba(0,0,0,0.55)",
}));

const Portrait = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
}));

/** Keeps the face readable where the status pill overlaps the frame. */
const Scrim = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to top, rgba(6,10,17,0.72) 0%, rgba(6,10,17,0.12) 26%, transparent 48%)",
  pointerEvents: "none",
}));

const StatusPill = styled(Box)(({ theme }) => ({
  position: "absolute",
  // Centred with auto margins rather than translateX(-50%): framer-motion owns
  // this element's transform for the entrance animation and would wipe it.
  left: 0,
  right: 0,
  marginInline: "auto",
  width: "fit-content",
  bottom: -14,
  zIndex: 2,
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(0.75, 1.75),
  borderRadius: 999,
  whiteSpace: "nowrap",
  border: "1px solid rgba(163,230,53,0.45)",
  backgroundColor: "rgba(10,15,24,0.92)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 14px 30px rgba(0,0,0,0.5)",
}));

const MotionStatusPill = motionize(StatusPill);

const StatusDot = styled(Box)(() => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: "#a3e635",
  flexShrink: 0,
}));

const MotionStatusDot = motionize(StatusDot);

const StatusLabel = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: "0.78rem",
  letterSpacing: "0.04em",
  color: "var(--text-primary)",
}));

/**
 * The portrait was a flat rounded square on a static glow. It now sits on a
 * rotating gradient rim, tilts toward the pointer, and carries an availability
 * pill — the first thing a visitor looks at is also the first thing that says
 * he is open to work.
 */
export const HeroAvatar = memo(({ src, alt }: HeroAvatarProps) => {
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, { stiffness: 150, damping: 18, mass: 0.7 });
  const springY = useSpring(py, { stiffness: 150, damping: 18, mass: 0.7 });
  const rotateX = useTransform(springY, [0, 1], [9, -9]);
  const rotateY = useTransform(springX, [0, 1], [-11, 11]);

  const angle = useMotionValue(0);
  useAnimationFrame((time) => {
    if (!reduceMotion) angle.set((time / 40) % 360);
  });
  const ringGradient = useMotionTemplate`conic-gradient(from ${angle}deg, #22d3ee, #a3e635, #60a5fa, #22d3ee)`;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <AvatarWrap onPointerMove={handlePointerMove} onPointerLeave={reset}>
      <DotGrid aria-hidden />
      <MotionHalo
        aria-hidden
        animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />
      <Stage
        style={reduceMotion ? undefined : { rotateX, rotateY }}
        transition={transitions.spring}>
        <Ring aria-hidden style={{ background: ringGradient }} />
        <Frame>
          <Portrait alt={alt} src={src} />
          <Scrim aria-hidden />
        </Frame>
        <MotionStatusPill
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.enter, delay: 0.9 }}>
          <MotionStatusDot
            aria-hidden
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(163,230,53,0.5)",
                "0 0 0 8px rgba(163,230,53,0)",
                "0 0 0 0 rgba(163,230,53,0)",
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          />
          <StatusLabel variant='body2'>{i18n.t("hero.available")}</StatusLabel>
        </MotionStatusPill>
      </Stage>
    </AvatarWrap>
  );
});

HeroAvatar.displayName = "HeroAvatar";
