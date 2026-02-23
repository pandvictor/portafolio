import { Box } from "@mui/material";
import { keyframes } from "@mui/system";
import { publicPath } from "../../constants/gloabals";

type LogoItem = { src: string; alt: string };

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const defaultLogos: LogoItem[] = [
  { src: "alphapoint-logo.png", alt: "AlphaPoint" },
  { src: "sat_logo-transparent.png", alt: "SAT" },
  { src: "bullseye-logo-transparent.png", alt: "Bullseye" },
  { src: "fantasygol-logo-transparent.png", alt: "FantasyGol" },
  { src: "fao.png", alt: "FAO" },
  { src: "oim-transparent.png", alt: "OIM" },
  { src: "sbs.png", alt: "SBS" },
  { src: "sieca.png", alt: "SIECA" },
  { src: "red-regional.png", alt: "Red Regional" },
];

export const TrustedLogosMarquee: React.FC<{ logos?: LogoItem[] }> = ({
  logos = defaultLogos,
}) => {
  if (!logos.length) return null;
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 3, md: 5 },
          width: "200%",
          animation: `${marquee} 18s linear infinite`,
        }}>
        {[...logos, ...logos].map((logo, idx) => (
          <Box
            key={`${logo.src}-${idx}`}
            sx={{
              height: 46,
              minWidth: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              filter: "grayscale(1) brightness(1.7)",
              opacity: 0.75,
              transition: "opacity 0.2s ease, filter 0.2s ease",
              "&:hover": {
                opacity: 1,
              },
            }}>
            <img
              src={`${publicPath}/images/${logo.src}`}
              alt={logo.alt}
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
