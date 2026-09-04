/**
 * Optional, privacy-friendly page analytics.
 *
 * Nothing loads unless `VITE_ANALYTICS_DOMAIN` is set at build time, so the
 * site ships with no third-party requests and no cookie banner by default.
 * Point it at a Plausible-compatible endpoint to turn it on:
 *
 *   VITE_ANALYTICS_DOMAIN=pandvictor.github.io npm run build
 *   VITE_ANALYTICS_SRC=https://plausible.io/js/script.js   # optional override
 */
export const initAnalytics = () => {
  const domain = import.meta.env.VITE_ANALYTICS_DOMAIN;
  if (!domain || typeof document === "undefined") return;

  const src =
    import.meta.env.VITE_ANALYTICS_SRC ?? "https://plausible.io/js/script.js";
  if (document.querySelector(`script[data-domain="${domain}"]`)) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = src;
  script.dataset.domain = domain;
  document.head.appendChild(script);
};
