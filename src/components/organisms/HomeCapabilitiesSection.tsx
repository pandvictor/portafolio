import { Box, Chip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo, useMemo } from "react";
import i18n from "../../utils/i18n";
import { publicPath } from "../../constants/gloabals";
import { SectionSurface } from "../molecules";
import { Reveal, motionize, transitions } from "../motion";

type CapabilityCard = {
  key: string;
  title: string;
  desc: string;
};

const ICON_MAP: Record<string, string> = {
  features: "jira.svg",
  mobile: "react-native.svg",
  frontend: "react.svg",
  backend: "nodejs.svg",
  reliability: "kubernetes.svg",
  experiments: "openai.svg",
};

const Layout = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
    alignItems: "start",
    gap: theme.spacing(6),
  },
}));

const Copy = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const Kicker = styled(Chip)(({ theme }) => ({
  alignSelf: "flex-start",
  fontWeight: 800,
  borderRadius: 999,
  color: "white",
  background: "linear-gradient(90deg, #22d3ee, #a3e635)",
  boxShadow: "0 12px 30px rgba(34,211,238,0.3)",
  "& .MuiChip-label": {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    letterSpacing: "0.02em",
  },
}));

/** The one line with a concrete, recent result gets an accent rail. */
const ImpactLine = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  borderLeft: "2px solid",
  borderImage: "linear-gradient(180deg, #22d3ee, #a3e635) 1",
  color: "var(--text-primary)",
  fontWeight: 600,
}));

const TagRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginTop: theme.spacing(0.5),
}));

const TagChip = styled(Chip)(() => ({
  borderRadius: 999,
  fontWeight: 700,
  borderColor: "var(--border-strong)",
  color: "var(--text-primary)",
}));

const MotionTagChip = motionize(TagChip);

const CardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
}));

const MotionCardsGrid = motionize(CardsGrid);

const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  height: "100%",
  padding: theme.spacing(2.5),
  borderRadius: 18,
  border: "1px solid var(--border-subtle)",
  background:
    "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(10,15,24,0.95))",
  boxShadow: "0 16px 34px rgba(0,0,0,0.35)",
}));

const MotionCard = motionize(Card);

const CardIcon = styled(Box)(() => ({
  width: 38,
  height: 38,
  borderRadius: 12,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(34,211,238,0.10)",
  "& img": {
    width: 20,
    height: 20,
    objectFit: "contain",
  },
}));

const CardTitle = styled(Typography)(() => ({
  fontWeight: 800,
}));

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: transitions.enter },
};

/**
 * Was the reverse face of a hero card that auto-flipped every 45 seconds.
 *
 * Hiding half the pitch behind a timer meant most visitors never saw it, and
 * the ones who did had the hero swap under them mid-read. It is a section now.
 */
export const HomeCapabilitiesSection = memo(() => {
  const copy = i18n.t("home.capabilities") as {
    kicker: string;
    title: string;
    summary: string;
    impact_line: string;
    tags: string[];
    cards: CapabilityCard[];
  };

  const cards = useMemo(
    () =>
      (copy?.cards ?? []).map((card) => ({
        ...card,
        icon: ICON_MAP[card.key] ?? "react.svg",
      })),
    [copy]
  );

  if (!copy?.title) return null;

  return (
    <Reveal preset='up'>
      <SectionSurface tone='raised'>
        <Layout>
          <Copy>
            <Kicker label={copy.kicker} size='small' />
            <Typography variant='h4' component='h2'>
              {copy.title}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {copy.summary}
            </Typography>
            <ImpactLine>
              <Typography variant='body2'>{copy.impact_line}</Typography>
            </ImpactLine>
            <TagRow>
              {copy.tags?.map((tag, idx) => (
                <MotionTagChip
                  key={idx}
                  label={tag}
                  size='small'
                  variant='outlined'
                  whileHover={{ y: -3, borderColor: "rgba(34,211,238,0.7)" }}
                  transition={transitions.quick}
                />
              ))}
            </TagRow>
          </Copy>

          <MotionCardsGrid
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}>
            {cards.map((card, idx) => (
              <MotionCard
                // Index key: titles are translated, and a content-derived key
                // would remount the card into a permanently hidden state.
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: "rgba(34,211,238,0.4)" }}
                transition={transitions.base}>
                <CardIcon>
                  <img
                    src={`${publicPath}/images/icons/${card.icon}`}
                    alt=''
                    aria-hidden
                    loading='lazy'
                  />
                </CardIcon>
                <CardTitle variant='subtitle1'>{card.title}</CardTitle>
                <Typography variant='body2' color='text.secondary'>
                  {card.desc}
                </Typography>
              </MotionCard>
            ))}
          </MotionCardsGrid>
        </Layout>
      </SectionSurface>
    </Reveal>
  );
});

HomeCapabilitiesSection.displayName = "HomeCapabilitiesSection";
