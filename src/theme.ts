import { createTheme, alpha } from "@mui/material/styles";

const colors = {
  bg: "#0b111b",
  surface1: "#0f172a",
  surface2: "#111c2f",
  surface3: "#162235",
  textPrimary: "#e2e8f0",
  textSecondary: "#94a3b8",
  primary: "#22d3ee",
  secondary: "#a3e635",
  borderSubtle: "rgba(148, 163, 184, 0.22)",
  borderStrong: "rgba(148, 163, 184, 0.4)",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary,
      contrastText: "#04141b",
    },
    secondary: {
      main: colors.secondary,
      contrastText: "#0b111b",
    },
    background: {
      default: colors.bg,
      paper: colors.surface1,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    divider: colors.borderSubtle,
  },
  typography: {
    fontFamily: "\"Sora\", \"Space Grotesk\", sans-serif",
    h1: {
      fontFamily: "\"Space Grotesk\", \"Sora\", sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "clamp(2.6rem, 4vw, 3.6rem)",
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: "\"Space Grotesk\", \"Sora\", sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "clamp(2.1rem, 3vw, 3rem)",
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: "\"Space Grotesk\", \"Sora\", sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "clamp(1.7rem, 2.4vw, 2.4rem)",
      lineHeight: 1.15,
    },
    h4: {
      fontFamily: "\"Space Grotesk\", \"Sora\", sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      fontSize: "clamp(1.35rem, 1.8vw, 2rem)",
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "\"Space Grotesk\", \"Sora\", sans-serif",
      fontWeight: 700,
      fontSize: "1.15rem",
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: "\"Space Grotesk\", \"Sora\", sans-serif",
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.35,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.45,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "0.92rem",
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.92rem",
      lineHeight: 1.6,
    },
    overline: {
      fontSize: "0.72rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      fontWeight: 700,
    },
    button: {
      fontWeight: 700,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.bg,
          color: colors.textPrimary,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: `1px solid ${colors.borderSubtle}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage:
            "linear-gradient(180deg, rgba(17, 24, 39, 0.9) 0%, rgba(12, 17, 27, 0.98) 100%)",
          border: `1px solid ${colors.borderSubtle}`,
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          borderRadius: 12,
        },
        containedPrimary: {
          background: "linear-gradient(90deg, #22d3ee 0%, #60a5fa 50%, #a3e635 100%)",
          color: "#031018",
          boxShadow: "0 18px 40px rgba(34, 211, 238, 0.25)",
          "&:hover": {
            boxShadow: "0 22px 50px rgba(34, 211, 238, 0.35)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(90deg, #a3e635 0%, #22d3ee 100%)",
          color: "#04141b",
        },
        outlined: {
          borderColor: colors.borderStrong,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(15, 23, 42, 0.6)",
          borderRadius: 12,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.borderSubtle,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.borderStrong,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.primary,
            boxShadow: `0 0 0 2px ${alpha(colors.primary, 0.2)}`,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.textSecondary,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.borderSubtle}`,
        },
        head: {
          fontWeight: 700,
          color: colors.textSecondary,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: colors.surface3,
          border: `1px solid ${colors.borderSubtle}`,
          color: colors.textPrimary,
        },
      },
    },
  },
});

export default theme;
