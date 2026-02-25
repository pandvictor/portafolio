import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import { memo } from "react";

type ServiceItem = {
  title: string;
  desc: string;
};

type HomeServicesSectionProps = {
  title: string;
  services: ServiceItem[];
};

const riseIn = keyframes`
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const ServicesSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  borderRadius: 12,
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(15,23,42,0.7)",
  boxShadow: "var(--shadow-soft)",
  padding: theme.spacing(3, 2.5),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3.5, 3.5),
    marginBottom: theme.spacing(6),
  },
}));

const ServicesTitle = styled(Typography)(() => ({
  fontWeight: 800,
  marginBottom: 16,
}));

const ServiceCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "delay",
})<{ delay: number }>(({ delay }) => ({
  padding: 16,
  borderRadius: 20,
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

const ServiceCardTitle = styled(Typography)(() => ({
  fontWeight: 800,
  marginBottom: 4,
}));

export const HomeServicesSection = memo(
  ({ title, services }: HomeServicesSectionProps) => (
    <ServicesSection>
      <ServicesTitle variant='h6'>{title}</ServicesTitle>
      <Grid container spacing={2}>
        {services.map((svc, idx) => (
          <Grid item xs={12} sm={6} md={3} key={`${svc.title}-${idx}`}>
            <ServiceCard delay={idx * 0.08}>
              <ServiceCardTitle variant='subtitle1'>
                {svc.title}
              </ServiceCardTitle>
              <Typography variant='body2' color='text.secondary'>
                {svc.desc}
              </Typography>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </ServicesSection>
  )
);

HomeServicesSection.displayName = "HomeServicesSection";
