/* eslint-disable react-refresh/only-export-components -- entry point:
   the lazy route components live here by design and nothing imports it. */
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MotionConfig } from "framer-motion";
import "./index.css";
import HomePage from "./components/pages/HomePage.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
// The landing page loads eagerly; the rest are split out so a first visit does
// not download the resume, the cover letter, and the printable CV as well.
const ResumePage = lazy(() =>
  import("./components/pages/ResumePage").then((m) => ({ default: m.ResumePage }))
);
const ResumePrintPage = lazy(() =>
  import("./components/pages/ResumePrintPage").then((m) => ({
    default: m.ResumePrintPage,
  }))
);
const CoverLetterPage = lazy(() =>
  import("./components/pages/CoverLetterPage").then((m) => ({
    default: m.CoverLetterPage,
  }))
);
const NotFoundPage = lazy(() =>
  import("./components/pages/NotFoundPage").then((m) => ({
    default: m.NotFoundPage,
  }))
);
import theme from "./theme";
import { initAnalytics } from "./utils/analytics";
//import App from './App.tsx';

/** Matches the page background so a split chunk does not flash white. */
const RouteFallback = () => (
  <div style={{ minHeight: "100vh", backgroundColor: "#0b111b" }} />
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/portafolio" replace />,
  },
  {
    path: "/portafolio",
    element: <HomePage />,
  },
  {
    path: "/portafolio/",
    element: <HomePage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
  {
    path: "/portafolio/resume",
    element: <ResumePage />,
  },
  {
    path: "/cover-letter",
    element: <CoverLetterPage />,
  },
  {
    path: "/cover_letter",
    element: <Navigate to="/cover-letter" replace />,
  },
  {
    path: "/portafolio/cover-letter",
    element: <CoverLetterPage />,
  },
  {
    path: "/portafolio/cover_letter",
    element: <Navigate to="/portafolio/cover-letter" replace />,
  },
  {
    path: "/printResume",
    element: <ResumePrintPage />,
  },
  {
    path: "/portafolio/printResume",
    element: <ResumePrintPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

initAnalytics();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* `reducedMotion="user"` makes every framer-motion animation in the app
          respect the OS "reduce motion" setting without per-component checks. */}
      <MotionConfig reducedMotion='user'>
        <LanguageProvider>
          <Suspense fallback={<RouteFallback />}>
            <RouterProvider router={router} />
          </Suspense>
        </LanguageProvider>
      </MotionConfig>
    </ThemeProvider>
  </React.StrictMode>
);
