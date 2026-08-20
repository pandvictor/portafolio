import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ShimmerTextProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Headline treatment: a slow light sweep travelling across the type.
 *
 * Implemented as an animated `background-position` on a clipped gradient, so it
 * costs one composited paint and leaves the text fully selectable.
 */
export const ShimmerText = ({ children, className }: ShimmerTextProps) => {
  const reduceMotion = useReducedMotion();

  const gradient =
    "linear-gradient(100deg, #e2e8f0 0%, #e2e8f0 34%, #22d3ee 46%, #a3e635 54%, #e2e8f0 66%, #e2e8f0 100%)";

  return (
    <motion.span
      className={className}
      style={{
        display: "inline-block",
        backgroundImage: gradient,
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
      initial={{ backgroundPosition: "180% 50%" }}
      animate={
        reduceMotion
          ? { backgroundPosition: "50% 50%" }
          : { backgroundPosition: ["180% 50%", "-80% 50%"] }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 6, ease: "linear", repeat: Infinity, repeatDelay: 3 }
      }>
      {children}
    </motion.span>
  );
};
