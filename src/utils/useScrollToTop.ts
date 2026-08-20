import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets the scroll position when the route changes.
 *
 * React Router keeps the previous scroll offset, so jumping from halfway down
 * the resume to the printable CV dropped the visitor into the middle of the
 * new page.
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
};
