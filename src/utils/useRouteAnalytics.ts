import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageview } from "./analytics";

/**
 * Counts a pageview per route.
 *
 * Lives beside `useScrollToTop` and is called from the same two places, since
 * "a route rendered" is exactly the moment both care about. It is a no-op
 * unless a provider is configured at build time.
 */
export const useRouteAnalytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageview(pathname);
  }, [pathname]);
};
