import type { Variants } from "framer-motion";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { motionize } from "./motionComponent";
import { VIEWPORT, fadeUp, fadeIn, scaleIn, slideInLeft, slideInRight } from "./tokens";

const PRESETS: Record<string, Variants> = {
  up: fadeUp,
  fade: fadeIn,
  scale: scaleIn,
  left: slideInLeft,
  right: slideInRight,
};

export type RevealPreset = keyof typeof PRESETS;

type RevealProps = {
  children: ReactNode;
  /** Entrance shape. Defaults to a subtle rise. */
  preset?: RevealPreset;
  /** Seconds to wait once the element enters the viewport. */
  delay?: number;
  /** Render as something other than a div (e.g. "section", "li"). */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Animate on mount instead of waiting for the scroll position. */
  immediate?: boolean;
};

/**
 * Scroll-triggered entrance for a single block.
 *
 * Reveals once and then stops observing, so long pages stay cheap. Motion is
 * disabled automatically for `prefers-reduced-motion` via the app-level
 * `MotionConfig reducedMotion="user"`.
 */
export const Reveal = ({
  children,
  preset = "up",
  delay = 0,
  as = "div",
  className,
  style,
  immediate = false,
}: RevealProps) => {
  const Component = motionize(as) as ElementType;
  const variants = PRESETS[preset] ?? fadeUp;

  return (
    <Component
      className={className}
      style={style}
      variants={variants}
      initial='hidden'
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: VIEWPORT })}
      transition={{ delay }}>
      {children}
    </Component>
  );
};
