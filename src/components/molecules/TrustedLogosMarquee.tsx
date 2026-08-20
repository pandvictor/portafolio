import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import { publicPath } from "../../constants/gloabals";

type LogoItem = { src: string; alt: string };

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const defaultLogos: LogoItem[] = [
  { src: "alphapoint-logo.png", alt: "AlphaPoint" },
  { src: "bluequant-wordmark.svg", alt: "BlueQuant" },
  { src: "sat_logo-transparent.png", alt: "SAT" },
  { src: "bullseye.svg", alt: "Bullseye" },
  { src: "fantasygol-logo.svg", alt: "FantasyGol" },
  { src: "fao.png", alt: "FAO" },
  { src: "oim-transparent.png", alt: "OIM" },
  { src: "sbs.png", alt: "SBS" },
  { src: "sieca.png", alt: "SIECA" },
  { src: "red-regional-transparent.png", alt: "Red Regional" },
  { src: "quinielas-live-badge.png", alt: "Quinielas.live" },
];

/**
 * Soft edges keep the strip from cutting off mid-logo, which is what made the
 * row read as clipped rather than continuous.
 */
const MarqueeShell = styled(Box)(() => ({
  overflow: "hidden",
  maskImage:
    "linear-gradient(90deg, transparent 0, black 6%, black 94%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(90deg, transparent 0, black 6%, black 94%, transparent 100%)",
}));

const MarqueeTrack = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "max-content",
  gap: theme.spacing(6),
  animation: `${marquee} 42s linear infinite`,
  "&:hover": {
    animationPlayState: "paused",
  },
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(8),
  },
}));

/**
 * Client logos arrive in wildly different palettes and aspect ratios. Rendering
 * them desaturated at a fixed optical height makes the row read as one set;
 * hover restores the brand colour for the logo under the pointer.
 */
const LogoSlot = styled(Box)(() => ({
  height: 34,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  // Flattening every mark to a single light silhouette is the only treatment
  // that survives this mix of dark-on-transparent and light-on-transparent
  // artwork; hover restores the real logo.
  filter: "brightness(0) invert(0.82)",
  opacity: 0.72,
  transition: "filter 0.35s ease, opacity 0.35s ease, transform 0.35s ease",
  "&:hover": {
    filter: "none",
    opacity: 1,
    transform: "scale(1.06)",
  },
}));

const LogoImage = styled("img")(() => ({
  height: "100%",
  width: "auto",
  maxWidth: 132,
  objectFit: "contain",
  display: "block",
}));

export const TrustedLogosMarquee: React.FC<{ logos?: LogoItem[] }> = ({
  logos = defaultLogos,
}) => {
  if (!logos.length) return null;
  return (
    <MarqueeShell>
      <MarqueeTrack>
        {[...logos, ...logos].map((logo, idx) => (
          <LogoSlot key={`${logo.src}-${idx}`} aria-hidden={idx >= logos.length}>
            <LogoImage src={`${publicPath}/images/${logo.src}`} alt={logo.alt} />
          </LogoSlot>
        ))}
      </MarqueeTrack>
    </MarqueeShell>
  );
};
