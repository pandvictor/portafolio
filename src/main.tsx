import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MotionConfig } from "framer-motion";
import "./index.css";
import HomePage from "./components/pages/HomePage.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import {
  CoverLetterPage,
  ExercisePage,
  NotFoundPage,
  ResumePage,
  ResumePrintPage,
  UsersCrudPage,
} from "./components/pages";
import theme from "./theme";
//import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/portafolio" replace />,
  },
  {
    path: "/portafolio/ex",
    element: <ExercisePage />,
  },
  {
    path: "/users",
    element: <UsersCrudPage />,
  },
  {
    path: "/portafolio/users",
    element: <UsersCrudPage />,
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* `reducedMotion="user"` makes every framer-motion animation in the app
          respect the OS "reduce motion" setting without per-component checks. */}
      <MotionConfig reducedMotion='user'>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </MotionConfig>
    </ThemeProvider>
  </React.StrictMode>
);
