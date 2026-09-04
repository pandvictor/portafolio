import { defineConfig, devices } from "@playwright/test";

/**
 * The suite drives the real production build: these checks exist to catch the
 * things unit tests cannot see — print stylesheets, scroll-triggered reveals,
 * and copy that only changes when the language does.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://localhost:4173/portafolio/",
    trace: "on-first-retry",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "npm run build && npm run preview -- --port 4173",
    url: "http://localhost:4173/portafolio/",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
