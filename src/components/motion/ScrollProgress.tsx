import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient bar pinned to the top of the viewport that tracks reading
 * progress. Sits above the app bar (theme z-index for AppBar is 1100).
 */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className='scroll-progress'
      aria-hidden
      style={{
        scaleX,
        transformOrigin: "0% 50%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 1300,
        background:
          "linear-gradient(90deg, #22d3ee 0%, #60a5fa 45%, #a3e635 100%)",
        boxShadow: "0 0 18px rgba(34,211,238,0.55)",
      }}
    />
  );
};
