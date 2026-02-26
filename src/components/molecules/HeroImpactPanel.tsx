import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { publicPath } from "../../constants/gloabals";

type ImpactCard = {
  key: string;
  icon: string;
  title: string;
  desc: string;
};

type HeroImpactPanelProps = {
  cards: ImpactCard[];
};

const PanelWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: 440,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: 380,
  },
}));

const PanelGlow = styled(Box)(() => ({
  position: "absolute",
  inset: 14,
  borderRadius: "28px",
  background:
    "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(163,230,53,0.12))",
  filter: "blur(6px)",
}));

const Panel = styled(Box)(({ theme }) => ({
  width: "100%",
  borderRadius: "28px",
  border: "2px solid rgba(148,163,184,0.35)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
  position: "relative",
  zIndex: 1,
  background:
    "linear-gradient(135deg, rgba(12,18,28,0.95), rgba(15,23,42,0.9))",
  backdropFilter: "blur(6px)",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(2.5),
  },
}));

const CardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0,1fr))",
  gap: theme.spacing(1.25),
  [theme.breakpoints.down("sm")]: {
    "& > *:nth-of-type(n + 5)": {
      display: "none",
    },
  },
}));

const Card = styled(Box)(() => ({
  padding: "10px",
  borderRadius: 10,
  border: "1px solid var(--border-subtle)",
  background: "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(12,18,28,0.95))",
  boxShadow: "0 16px 28px rgba(0,0,0,0.45)",
  display: "flex",
  flexDirection: "column",
  gap: 5,
  minHeight: 96,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 22px 36px rgba(0,0,0,0.55)",
  },
}));

const CardIconWrap = styled(Box)(() => ({
  width: 34,
  height: 34,
  borderRadius: "10px",
  backgroundColor: "rgba(34,211,238,0.12)",
  display: "grid",
  placeItems: "center",
}));

const CardIcon = styled("img")(() => ({
  width: 20,
  height: 20,
}));

const CardTitle = styled(Typography)(() => ({
  fontWeight: 800,
  fontSize: "0.9rem",
}));

const CardDesc = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: "0.72rem",
  lineHeight: 1.3,
}));

export const HeroImpactPanel = memo(({ cards }: HeroImpactPanelProps) => (
  <PanelWrap>
    <PanelGlow />
    <Panel>
      <CardsGrid>
        {cards.map((card) => (
          <Card key={card.key}>
            <CardIconWrap>
              <CardIcon
                alt={card.title}
                src={`${publicPath}/images/icons/${card.icon}`}
              />
            </CardIconWrap>
            <CardTitle variant='subtitle2'>{card.title}</CardTitle>
            <CardDesc variant='caption' color='text.secondary'>
              {card.desc}
            </CardDesc>
          </Card>
        ))}
      </CardsGrid>
    </Panel>
  </PanelWrap>
));

HeroImpactPanel.displayName = "HeroImpactPanel";
