/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Set to enable analytics; leave unset and nothing third-party loads. */
  readonly VITE_ANALYTICS_DOMAIN?: string;
  /** Override the analytics script URL (defaults to Plausible's). */
  readonly VITE_ANALYTICS_SRC?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
