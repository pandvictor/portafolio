import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Restores scroll position on navigation.
 *
 * React Router keeps the previous offset, so jumping from halfway down the
 * resume dropped the visitor into the middle of the next page. When the target
 * carries a hash — the header's section links do — it scrolls there instead.
 */
export const useScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // The target section may still be mounting when this runs.
      const id = hash.slice(1);
      const scroll = () => document.getElementById(id)?.scrollIntoView();
      scroll();
      const retry = window.setTimeout(scroll, 120);
      return () => window.clearTimeout(retry);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
};
