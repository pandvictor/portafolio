import type { Variants } from "framer-motion";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { motionize } from "./motionComponent";
import { VIEWPORT, createStagger, fadeUp, fadeUpSoft, scaleIn } from "./tokens";

type StaggerGroupProps = {
  children: ReactNode;
  /** Gap between each child's entrance, in seconds. */
  stagger?: number;
  /** Pause before the first child animates, in seconds. */
  delayChildren?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Run on mount rather than when scrolled into view. */
  immediate?: boolean;
};

/**
 * Parent that cascades its `StaggerItem` children into view.
 *
 * Only the group observes the viewport; children simply inherit the `hidden` /
 * `visible` states, which keeps a long list down to one IntersectionObserver.
 */
export const StaggerGroup = ({
  children,
  stagger = 0.08,
  delayChildren = 0,
  as = "div",
  className,
  style,
  immediate = false,
}: StaggerGroupProps) => {
  const Component = motionize(as) as ElementType;

  return (
    <Component
      className={className}
      style={style}
      variants={createStagger(stagger, delayChildren)}
      initial='hidden'
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: VIEWPORT })}>
      {children}
    </Component>
  );
};

const ITEM_PRESETS: Record<string, Variants> = {
  up: fadeUp,
  soft: fadeUpSoft,
  scale: scaleIn,
};

type StaggerItemProps = {
  children: ReactNode;
  preset?: keyof typeof ITEM_PRESETS;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

export const StaggerItem = ({
  children,
  preset = "soft",
  as = "div",
  className,
  style,
}: StaggerItemProps) => {
  const Component = motionize(as) as ElementType;

  return (
    <Component
      className={className}
      style={style}
      variants={ITEM_PRESETS[preset] ?? fadeUpSoft}>
      {children}
    </Component>
  );
};
