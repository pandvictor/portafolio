import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import { memo } from "react";

type ServiceItem = {
  title: string;
  desc: string;
};

type HomeServicesSectionProps = {
  kicker: string;
  title: string;
  intro: string;
  services: ServiceItem[];
};

const riseIn = keyframes`
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const ServicesSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  borderRadius: 18,
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(15,23,42,0.7)",
  boxShadow: "var(--shadow-soft)",
  padding: "var(--space-6)",
  [theme.breakpoints.up("md")]: {
    padding: "var(--space-7)",
    marginBottom: theme.spacing(6),
  },
}));

const ServicesLayout = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: "var(--space-6)",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
    alignItems: "start",
  },
}));

const ServicesKicker = styled(Typography)(() => ({
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "var(--text-secondary)",
}));

const ServicesTitle = styled(Typography)(() => ({
  fontWeight: 800,
  lineHeight: 1.1,
}));

const ServicesIntro = styled(Typography)(() => ({
  maxWidth: 420,
}));

const ServicesList = styled(Box)(() => ({
  display: "grid",
  gap: "var(--space-4)",
}));

const ServiceRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "delay",
})<{ delay: number }>(({ delay }) => ({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "var(--space-4)",
  alignItems: "start",
  padding: "var(--space-4)",
  borderRadius: 18,
  border: "1px solid var(--border-subtle)",
  background:
    "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(12,18,28,0.95))",
  boxShadow: "0 16px 36px rgba(0,0,0,0.35)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  animation: `${riseIn} 0.6s ease ${delay}s both`,
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 22px 45px rgba(0,0,0,0.45)",
  },
}));

const ServiceIndex = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: "0.9rem",
  color: "var(--text-secondary)",
  minWidth: 32,
}));

const ServiceCardTitle = styled(Typography)(() => ({
  fontWeight: 800,
  marginBottom: 6,
}));

export const HomeServicesSection = memo(
  ({ kicker, title, intro, services }: HomeServicesSectionProps) => (
    <ServicesSection>
      <ServicesLayout>
        <Box>
          <ServicesKicker variant='overline'>{kicker}</ServicesKicker>
          <ServicesTitle variant='h4'>{title}</ServicesTitle>
          <ServicesIntro variant='body1' color='text.secondary'>
            {intro}
          </ServicesIntro>
        </Box>
        <ServicesList>
          {services.map((svc, idx) => (
            <ServiceRow delay={idx * 0.08} key={`${svc.title}-${idx}`}>
              <ServiceIndex variant='overline'>
                {String(idx + 1).padStart(2, "0")}
              </ServiceIndex>
              <Box>
                <ServiceCardTitle variant='subtitle1'>
                  {svc.title}
                </ServiceCardTitle>
                <Typography variant='body2' color='text.secondary'>
                  {svc.desc}
                </Typography>
              </Box>
            </ServiceRow>
          ))}
        </ServicesList>
      </ServicesLayout>
    </ServicesSection>
  )
);

HomeServicesSection.displayName = "HomeServicesSection";
