import type { Transition, Variants, Easing } from "framer-motion";

/**
 * Motion design tokens.
 *
 * Every animation in the portfolio pulls its easing/duration from here so the
 * whole site feels like one system instead of a pile of one-off transitions.
 */

/** Expo-out. The workhorse: fast start, long soft landing. */
export const EASE_OUT: Easing = [0.22, 1, 0.36, 1];
/** Symmetric ease for state toggles (flips, dialogs). */
export const EASE_IN_OUT: Easing = [0.65, 0, 0.35, 1];
/** Slight overshoot for elements that should feel physical. */
export const EASE_BACK: Easing = [0.34, 1.3, 0.64, 1];

export const DURATION = {
  fast: 0.25,
  base: 0.45,
  slow: 0.7,
  slower: 1.1,
} as const;

export const transitions = {
  enter: { duration: DURATION.slow, ease: EASE_OUT } satisfies Transition,
  quick: { duration: DURATION.fast, ease: EASE_OUT } satisfies Transition,
  base: { duration: DURATION.base, ease: EASE_OUT } satisfies Transition,
  toggle: { duration: 0.9, ease: EASE_IN_OUT } satisfies Transition,
  spring: { type: "spring", stiffness: 260, damping: 26, mass: 0.9 } satisfies Transition,
  softSpring: { type: "spring", stiffness: 140, damping: 20, mass: 1 } satisfies Transition,
};

/** Shared viewport config: reveal once, a little before the element is centered. */
export const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -80px 0px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: transitions.enter },
};

export const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: transitions.base },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.enter },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: transitions.enter },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: transitions.enter },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: transitions.enter },
};

/** Cinematic reveal for hero/feature media. */
export const mediaReveal: Variants = {
  hidden: { opacity: 0, scale: 1.06, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.slower, ease: EASE_OUT },
  },
};

export const createStagger = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const staggerContainer = createStagger();

/** Hover/tap feedback shared by every interactive surface. */
export const liftHover = {
  whileHover: { y: -6, transition: transitions.quick },
  whileTap: { y: -2, scale: 0.99, transition: transitions.quick },
};
