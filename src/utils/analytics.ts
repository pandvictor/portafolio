/**
 * Optional, privacy-friendly visitor counting.
 *
 * Nothing third-party loads unless `VITE_ANALYTICS_ID` is set at build time, so
 * the site ships with no external requests and no cookie banner by default.
 *
 * GitHub Pages serves static files only — there is no server to count requests
 * — so any counter has to be a client script reporting to a hosted endpoint.
 * Four are supported; all are cookie-free and need no consent banner:
 *
 *   VITE_ANALYTICS_PROVIDER=cloudflare   VITE_ANALYTICS_ID=<beacon token>
 *   VITE_ANALYTICS_PROVIDER=goatcounter  VITE_ANALYTICS_ID=<site code>
 *   VITE_ANALYTICS_PROVIDER=umami        VITE_ANALYTICS_ID=<website id>
 *   VITE_ANALYTICS_PROVIDER=plausible    VITE_ANALYTICS_ID=<domain>
 *
 * `VITE_ANALYTICS_SRC` overrides the script URL for a self-hosted instance.
 */
type Provider = "cloudflare" | "goatcounter" | "umami" | "plausible";

type ProviderConfig = {
  src: string;
  attrs: (id: string) => Record<string, string>;
};

const PROVIDERS: Record<Provider, ProviderConfig> = {
  cloudflare: {
    src: "https://static.cloudflareinsights.com/beacon.min.js",
    attrs: (id) => ({ "data-cf-beacon": JSON.stringify({ token: id }) }),
  },
  goatcounter: {
    src: "https://gc.zgo.at/count.js",
    attrs: (id) => ({
      // A bare site code expands to the hosted subdomain; a full URL is passed
      // through so a self-hosted instance works too.
      "data-goatcounter": id.startsWith("http")
        ? id
        : `https://${id}.goatcounter.com/count`,
    }),
  },
  umami: {
    src: "https://cloud.umami.is/script.js",
    attrs: (id) => ({ "data-website-id": id }),
  },
  plausible: {
    src: "https://plausible.io/js/script.js",
    attrs: (id) => ({ "data-domain": id }),
  },
};

const env = import.meta.env;
const provider = env.VITE_ANALYTICS_PROVIDER as Provider | undefined;
// `VITE_ANALYTICS_DOMAIN` is the older Plausible-only name, still honoured.
const id = env.VITE_ANALYTICS_ID ?? env.VITE_ANALYTICS_DOMAIN;
const active: Provider | null =
  id && provider && provider in PROVIDERS
    ? provider
    : id
      ? "plausible"
      : null;

/** Guards against double-counting the page the loader script already reported. */
let lastPath: string | null = null;

export const initAnalytics = () => {
  if (!active || typeof document === "undefined") return;
  if (document.querySelector("script[data-site-analytics]")) return;

  const config = PROVIDERS[active];
  const script = document.createElement("script");
  script.defer = true;
  script.src = env.VITE_ANALYTICS_SRC ?? config.src;
  script.dataset.siteAnalytics = active;
  Object.entries(config.attrs(id!)).forEach(([key, value]) =>
    script.setAttribute(key, value)
  );
  document.head.appendChild(script);

  lastPath = window.location.pathname;
};

/**
 * Reports a client-side navigation.
 *
 * Cloudflare, Umami and Plausible watch `history.pushState` themselves, so
 * calling them here would count every route twice. GoatCounter does not, and
 * without this every visit to the resume or the cover letter was invisible.
 */
export const trackPageview = (path: string) => {
  if (!active || path === lastPath) return;
  lastPath = path;
  if (active !== "goatcounter") return;

  const goatcounter = (
    window as unknown as {
      goatcounter?: { count: (opts: Record<string, unknown>) => void };
    }
  ).goatcounter;
  goatcounter?.count({ path, title: document.title, event: false });
};
