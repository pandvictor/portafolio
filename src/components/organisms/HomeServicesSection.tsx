import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { publicPath } from "../../constants/gloabals";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  motionize,
  transitions,
} from "../motion";

type ServiceItem = {
  title: string;
  desc: string;
  icon?: string;
};

type HomeServicesSectionProps = {
  kicker: string;
  title: string;
  intro: string;
  services: ServiceItem[];
};

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

const MotionServicesList = motionize(ServicesList);

const ServiceRow = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  "&:hover .service-row-accent": {
    transform: "scaleY(1)",
  },
  "&:hover .service-row-icon": {
    transform: "scale(1.12)",
  },
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
}));

const MotionServiceRow = motionize(ServiceRow);

const ServiceMeta = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  alignItems: "center",
  minWidth: 36,
}));

const ServiceIcon = styled("span")(() => ({
  transform: "scale(1)",
  transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
  width: 34,
  height: 34,
  borderRadius: "50%",
  border: "1px solid var(--border-subtle)",
  background: "rgba(15,23,42,0.7)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 10px 22px rgba(0,0,0,0.35)",
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

/** Left accent bar that wipes down as the pointer enters the row. */
const RowAccent = styled(Box)(() => ({
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: 3,
  transform: "scaleY(0)",
  transformOrigin: "top",
  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  background: "linear-gradient(180deg, #22d3ee, #a3e635)",
}));

const rowVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    boxShadow: "0 16px 36px rgba(0,0,0,0.35)",
    transition: transitions.enter,
  },
};

const rowHover = { y: -5, boxShadow: "0 24px 48px rgba(0,0,0,0.5)" };

export const HomeServicesSection = memo(
  ({ kicker, title, intro, services }: HomeServicesSectionProps) => (
    <Reveal preset='up'>
      <ServicesSection>
        <ServicesLayout>
          <StaggerGroup stagger={0.08}>
            <StaggerItem>
              <ServicesKicker variant='overline'>{kicker}</ServicesKicker>
            </StaggerItem>
            <StaggerItem preset='up'>
              <ServicesTitle variant='h4'>{title}</ServicesTitle>
            </StaggerItem>
            <StaggerItem>
              <ServicesIntro variant='body1' color='text.secondary'>
                {intro}
              </ServicesIntro>
            </StaggerItem>
          </StaggerGroup>
          <MotionServicesList
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.15 }}>
            {services.map((svc, idx) => (
              <MotionServiceRow
                key={`${svc.title}-${idx}`}
                variants={rowVariants}
                whileHover={rowHover}
                transition={transitions.base}>
                <RowAccent aria-hidden className='service-row-accent' />
                <ServiceMeta>
                  <ServiceIcon className='service-row-icon'>
                    {svc.icon && (
                      <img
                        src={`${publicPath}/images/icons/${svc.icon}`}
                        alt={`${svc.title} icon`}
                        width={18}
                        height={18}
                      />
                    )}
                  </ServiceIcon>
                  <ServiceIndex variant='overline'>
                    {String(idx + 1).padStart(2, "0")}
                  </ServiceIndex>
                </ServiceMeta>
                <Box>
                  <ServiceCardTitle variant='subtitle1'>
                    {svc.title}
                  </ServiceCardTitle>
                  <Typography variant='body2' color='text.secondary'>
                    {svc.desc}
                  </Typography>
                </Box>
              </MotionServiceRow>
            ))}
          </MotionServicesList>
        </ServicesLayout>
      </ServicesSection>
    </Reveal>
  )
);

HomeServicesSection.displayName = "HomeServicesSection";
