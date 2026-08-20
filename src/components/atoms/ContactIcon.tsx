import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { publicPath } from "../../constants/gloabals";

/**
 * Brand colours tuned for the dark surfaces they sit on. The shipped SVGs are
 * all solid black, which is invisible against the app background, so the icon
 * is drawn as a mask and coloured here instead.
 */
const BRAND_COLORS: Record<string, string> = {
  "linkedin.svg": "#2E8FE8",
  "github.svg": "#E6EDF3",
  "whatsapp.svg": "#25D366",
  "gitlab.svg": "#FC6D26",
  "email.svg": "#F59E0B",
};

const Glyph = styled(Box, {
  shouldForwardProp: (prop) => prop !== "icon" && prop !== "size",
})<{ icon: string; size: number }>(({ icon, size }) => {
  const url = `${publicPath}/images/icons/${icon}`;
  return {
    display: "inline-block",
    width: size,
    height: size,
    flexShrink: 0,
    backgroundColor: BRAND_COLORS[icon] ?? "var(--text-primary)",
    // Masking keeps one asset per icon while letting us recolour it.
    maskImage: `url("${url}")`,
    WebkitMaskImage: `url("${url}")`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    transition: "background-color 0.2s ease",
  };
});

type ContactIconProps = {
  /** File name inside `assets/images/icons`, e.g. "github.svg". */
  icon: string;
  size?: number;
  title?: string;
};

export const ContactIcon = ({ icon, size = 22, title }: ContactIconProps) => (
  <Glyph icon={icon} size={size} role='img' aria-label={title} title={title} />
);
