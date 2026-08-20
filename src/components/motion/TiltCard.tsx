import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { transitions } from "./tokens";

type TiltCardProps = {
  children: ReactNode;
  /** Maximum rotation on each axis, in degrees. Keep it small — 6–10. */
  maxTilt?: number;
  /** How far the card lifts on hover, in pixels. */
  lift?: number;
  /** Draw a cursor-following highlight over the surface. */
  glare?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Pointer-reactive 3D tilt with a specular highlight.
 *
 * Rotation is spring-damped so the card settles instead of snapping, and the
 * whole effect collapses to a plain hover lift under reduced motion.
 */
export const TiltCard = ({
  children,
  maxTilt = 7,
  lift = 8,
  glare = true,
  className,
  style,
}: TiltCardProps) => {
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springX = useSpring(px, { stiffness: 180, damping: 20, mass: 0.6 });
  const springY = useSpring(py, { stiffness: 180, damping: 20, mass: 0.6 });

  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);
  const glareX = useTransform(springX, (v) => `${v * 100}%`);
  const glareY = useTransform(springY, (v) => `${v * 100}%`);
  const glareBackground = useMotionTemplate`radial-gradient(340px circle at ${glareX} ${glareY}, rgba(34,211,238,0.16), transparent 62%)`;

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
    <motion.div
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={{
        position: "relative",
        height: "100%",
        transformStyle: "preserve-3d",
        ...(reduceMotion ? {} : { rotateX, rotateY }),
        ...style,
      }}
      // Named variants (rather than an inline `whileHover` object) so the hover
      // state cascades down to the glare layer, which can't be hovered itself.
      variants={{ rest: { y: 0 }, hover: { y: -lift } }}
      initial='rest'
      animate='rest'
      whileHover='hover'
      transition={transitions.spring}>
      {children}
      {glare && !reduceMotion && (
        <motion.span
          aria-hidden
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={transitions.base}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            background: glareBackground,
          }}
        />
      )}
    </motion.div>
  );
};
