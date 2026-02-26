import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import { Box, Stack, Typography, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";
import { publicPath } from "../../constants/gloabals";

type PipelineCard = {
  key: string;
  icon: string;
  title: string;
  desc: string;
};

type DeliveryItem = {
  key: string;
  icon: string;
  label: string;
};

type HeroPipelinePanelProps = {
  title: string;
  subtitle: string;
  badgeLabel: string;
  steps: string[];
  cards: PipelineCard[];
  deliveryItems: DeliveryItem[];
  deliveryCaption: string;
};

const PipelineWrap = styled(Box)(({ theme }) => ({
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

const PipelineGlow = styled(Box)(() => ({
  position: "absolute",
  inset: 14,
  borderRadius: "28px",
  background:
    "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(163,230,53,0.12))",
  filter: "blur(6px)",
}));

const PipelinePanel = styled(Box)(({ theme }) => ({
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

const PipelineHeaderIcon = styled(Box)(() => ({
  width: 36,
  height: 36,
  borderRadius: "12px",
  display: "grid",
  placeItems: "center",
  background:
    "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(163,230,53,0.18))",
}));

const Icon20 = styled("img")(() => ({
  width: 20,
  height: 20,
}));

const PipelineTitle = styled(Typography)(() => ({
  fontWeight: 800,
}));

const PipelineChip = styled(Chip)(() => ({
  marginLeft: "auto",
  fontWeight: 800,
  borderRadius: 999,
  color: "white",
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.9), rgba(163,230,53,0.9))",
}));

const PipelineDivider = styled(Box)(() => ({
  height: 2,
  borderRadius: 999,
  background:
    "linear-gradient(90deg, rgba(34,211,238,0.6), rgba(163,230,53,0.6))",
  opacity: 0.7,
}));

const PipelineStepsRow = styled(Stack)(({ theme }) => ({
  flexWrap: "wrap",
  gap: theme.spacing(0.75),
  alignItems: "center",
}));

const PipelineStepBadge = styled(Box)(() => ({
  padding: "3.2px 8px",
  borderRadius: 999,
  backgroundColor: "rgba(148,163,184,0.12)",
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.02em",
}));

const ArrowIcon = styled(ArrowRightAltRoundedIcon)(() => ({
  fontSize: 14,
  color: "rgba(148,163,184,0.9)",
}));

const PipelineCardsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0,1fr))",
  gap: theme.spacing(1.25),
}));

const PipelineCard = styled(Box)(() => ({
  padding: "9.6px",
  borderRadius: 8,
  border: "1px solid var(--border-subtle)",
  background: "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(12,18,28,0.95))",
  boxShadow: "0 16px 28px rgba(0,0,0,0.45)",
  display: "flex",
  flexDirection: "column",
  gap: 6,
  minHeight: 92,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 22px 36px rgba(0,0,0,0.55)",
  },
}));

const PipelineCardIcon = styled(Box)(() => ({
  width: 32,
  height: 32,
  borderRadius: "10px",
  backgroundColor: "rgba(34,211,238,0.12)",
  display: "grid",
  placeItems: "center",
}));

const Icon18 = styled("img")(() => ({
  width: 18,
  height: 18,
}));

const PipelineCardTitle = styled(Typography)(() => ({
  fontWeight: 800,
}));

const DeliveryRow = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.8, 1.2),
  borderRadius: 999,
  border: "1px solid rgba(34,211,238,0.3)",
  backgroundColor: "rgba(34,211,238,0.12)",
}));

const DeliveryItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
}));

const Icon16 = styled("img")(() => ({
  width: 16,
  height: 16,
}));

const DeliveryLabel = styled(Typography)(() => ({
  fontWeight: 700,
}));

const DeliveryCaption = styled(Typography)(() => ({
  fontWeight: 600,
  marginLeft: "auto",
}));

export const HeroPipelinePanel = memo(
  ({
    title,
    subtitle,
    badgeLabel,
    steps,
    cards,
    deliveryItems,
    deliveryCaption,
  }: HeroPipelinePanelProps) => (
    <PipelineWrap>
      <PipelineGlow />
      <PipelinePanel>
        <Stack spacing={1.75}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <PipelineHeaderIcon>
              <Icon20 alt='AI' src={`${publicPath}/images/icons/aws.svg`} />
            </PipelineHeaderIcon>
            <Stack spacing={0.25}>
              <PipelineTitle variant='subtitle2'>{title}</PipelineTitle>
              <Typography variant='caption' color='text.secondary'>
                {subtitle}
              </Typography>
            </Stack>
            <PipelineChip label={badgeLabel} size='small' />
          </Stack>
          <PipelineDivider />
          <PipelineStepsRow direction='row' useFlexGap>
            {steps.map((step, idx) => (
              <Stack key={step} direction='row' spacing={0.5} alignItems='center'>
                <PipelineStepBadge>{step}</PipelineStepBadge>
                {idx < steps.length - 1 && <ArrowIcon />}
              </Stack>
            ))}
          </PipelineStepsRow>

          <PipelineCardsGrid>
            {cards.map((card) => (
              <PipelineCard key={card.key}>
                <PipelineCardIcon>
                  <Icon18
                    alt={card.title}
                    src={`${publicPath}/images/icons/${card.icon}`}
                  />
                </PipelineCardIcon>
                <PipelineCardTitle variant='subtitle2'>
                  {card.title}
                </PipelineCardTitle>
                <Typography variant='caption' color='text.secondary'>
                  {card.desc}
                </Typography>
              </PipelineCard>
            ))}
          </PipelineCardsGrid>

          <DeliveryRow direction='row' spacing={1} alignItems='center'>
            {deliveryItems.map((item) => (
              <DeliveryItem key={item.key}>
                <Icon16
                  alt={item.label}
                  src={`${publicPath}/images/icons/${item.icon}`}
                />
                <DeliveryLabel variant='caption'>{item.label}</DeliveryLabel>
              </DeliveryItem>
            ))}
            <DeliveryCaption variant='caption' color='text.secondary'>
              {deliveryCaption}
            </DeliveryCaption>
          </DeliveryRow>
        </Stack>
      </PipelinePanel>
    </PipelineWrap>
  )
);

HeroPipelinePanel.displayName = "HeroPipelinePanel";
