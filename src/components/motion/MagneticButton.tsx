import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { transitions } from "./tokens";

type MagneticButtonProps = {
  children: ReactNode;
  /** How far the element drifts toward the cursor, in pixels. */
  strength?: number;
  className?: string;
};

/**
 * Wraps a CTA so it leans toward the pointer while hovered.
 *
 * The pull is intentionally small: enough to feel responsive, never enough to
 * make the click target move out from under the cursor.
 */
export const MagneticButton = ({
  children,
  strength = 8,
  className,
}: MagneticButtonProps) => {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 240, damping: 18, mass: 0.5 });

  const handlePointerMove = (event: PointerEvent<HTMLSpanElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 2 * strength);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 2 * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={{ display: "inline-flex", x: springX, y: springY }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={transitions.quick}>
      {children}
    </motion.span>
  );
};
