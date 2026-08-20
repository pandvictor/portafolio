import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { publicPath } from "../../constants/gloabals";
import { SectionHeader, SectionSurface } from "../molecules";
import { Reveal, motionize, transitions } from "../motion";

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

const ServicesList = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    // An odd count would otherwise leave a hole beside the final card.
    "& > *:last-of-type:nth-of-type(odd)": {
      gridColumn: "1 / -1",
    },
  },
}));

const MotionServicesList = motionize(ServicesList);

const ServiceRow = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "100%",
  padding: theme.spacing(3),
  "&:hover .service-row-accent": {
    transform: "scaleY(1)",
  },
  "&:hover .service-row-icon": {
    transform: "scale(1.12)",
  },
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: theme.spacing(2),
  alignItems: "start",
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
      <SectionSurface tone='raised'>
        <SectionHeader kicker={kicker} title={title} subtitle={intro} />
        <MotionServicesList
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}>
          {services.map((svc, idx) => (
            <MotionServiceRow
              // Index key: the title is translated, and a changing key would
              // remount the row into a permanently hidden state.
              key={idx}
              variants={rowVariants}
              whileHover={rowHover}
              transition={transitions.base}>
              <RowAccent aria-hidden className='service-row-accent' />
              <ServiceMeta>
                <ServiceIcon className='service-row-icon'>
                  {svc.icon && (
                    <img
                      src={`${publicPath}/images/icons/${svc.icon}`}
                      alt=''
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
                <ServiceCardTitle variant='subtitle1'>{svc.title}</ServiceCardTitle>
                <Typography variant='body2' color='text.secondary'>
                  {svc.desc}
                </Typography>
              </Box>
            </MotionServiceRow>
          ))}
        </MotionServicesList>
      </SectionSurface>
    </Reveal>
  )
);

HomeServicesSection.displayName = "HomeServicesSection";
