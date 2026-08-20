import { motion } from "framer-motion";
import type { ElementType } from "react";

const cache = new Map<unknown, ElementType>();

/**
 * `motion.create()` builds a brand new component type on every call, so calling
 * it inside render would remount the subtree each time. This caches by element
 * type / component reference and keeps identities stable.
 */
export const motionize = (component: ElementType): ElementType => {
  const cached = cache.get(component);
  if (cached) return cached;
  const created = motion.create(component as never) as ElementType;
  cache.set(component, created);
  return created;
};
