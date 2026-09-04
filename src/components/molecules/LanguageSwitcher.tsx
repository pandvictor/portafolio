import { Box, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { motion } from "framer-motion";
import { LANGUAGES, publicPath } from "../../constants/gloabals";
import { useLanguage } from "../../context/LanguageContext";
import { transitions } from "../motion";

type LanguageSwitcherProps = {
  /** "bar" for the header pill, "wide" for the mobile drawer. */
  variant?: "bar" | "wide";
};

const Group = styled(Box, {
  shouldForwardProp: (prop) => prop !== "wide",
})<{ wide?: boolean }>(({ theme, wide }) => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.5),
  borderRadius: 999,
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(10,15,24,0.6)",
  ...(wide ? { width: "100%", justifyContent: "center" } : null),
  "@media print": {
    display: "none",
  },
}));

/**
 * Each flag is a button; the inactive ones are desaturated and dimmed, so the
 * active language reads as the only one "on".
 */
const FlagButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 38,
  height: 28,
  padding: 0,
  border: "none",
  borderRadius: 999,
  background: "none",
  cursor: active ? "default" : "pointer",
  WebkitTapHighlightColor: "transparent",
  "&:focus-visible": {
    outline: "2px solid var(--accent-1)",
    outlineOffset: 2,
  },
}));

const FlagImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
  position: "relative",
  zIndex: 1,
  width: 24,
  height: 16,
  objectFit: "cover",
  borderRadius: 3,
  display: "block",
  boxShadow: active
    ? "0 2px 8px rgba(0,0,0,0.5)"
    : "0 1px 3px rgba(0,0,0,0.35)",
  // "off" state: drained of colour and dimmed until it is the active language.
  filter: active ? "none" : "grayscale(1) brightness(0.85)",
  opacity: active ? 1 : 0.45,
  transition: "filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease",
  "button:hover &": {
    filter: "none",
    opacity: 0.85,
    transform: "scale(1.08)",
  },
}));

/** Slides between flags instead of fading, so the switch reads as one control. */
const ActivePill = styled(motion.span)(() => ({
  position: "absolute",
  inset: 0,
  borderRadius: 999,
  background:
    "linear-gradient(135deg, rgba(34,211,238,0.22), rgba(163,230,53,0.18))",
  border: "1px solid rgba(34,211,238,0.45)",
}));

export const LanguageSwitcher = memo(({ variant = "bar" }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <Group wide={variant === "wide"} role='group' aria-label='Language'>
      {LANGUAGES.map((item) => {
        const active = language === item.code;
        return (
          <Tooltip key={item.code} title={item.label} arrow>
            <FlagButton
              type='button'
              active={active}
              aria-label={item.label}
              aria-pressed={active}
              onClick={() => setLanguage(item.code)}>
              {active && (
                <ActivePill
                  layoutId={`lang-pill-${variant}`}
                  transition={transitions.spring}
                />
              )}
              <FlagImage
                active={active}
                src={`${publicPath}/images/flags/${item.flag}`}
                alt=''
                aria-hidden
              />
            </FlagButton>
          </Tooltip>
        );
      })}
    </Group>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";
