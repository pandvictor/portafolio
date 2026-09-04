import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portafolio/",
  build: {
    rollupOptions: {
      output: {
        /**
         * Route splitting alone barely moved the bundle because the weight is
         * shared libraries, not page code. Separating them means a deploy that
         * only touches the site does not invalidate the vendor chunk in
         * visitors' caches.
         */
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          mui: ["@mui/material", "@mui/icons-material"],
          motion: ["framer-motion"],
          dates: ["date-fns"],
        },
      },
    },
  },
});
