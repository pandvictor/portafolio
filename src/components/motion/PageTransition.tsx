import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { DURATION, EASE_OUT } from "./tokens";

type PageTransitionProps = {
  children: ReactNode;
};

/**
 * Route-level entrance. Keyed on the pathname so navigating between pages
 * replays the transition instead of swapping content instantly.
 */
export const PageTransition = ({ children }: PageTransitionProps) => {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slow, ease: EASE_OUT }}>
      {children}
    </motion.div>
  );
};
