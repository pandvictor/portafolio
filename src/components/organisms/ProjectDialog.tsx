import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { publicPath } from "../../constants/gloabals";
import { ProjectModalPayload } from "../../types/types";
import { resolveTechIconFromStack } from "../../utils/techIcons";
import i18n from "../../utils/i18n";
import { motionize, transitions } from "../motion";

type Props = {
  open: boolean;
  payload: ProjectModalPayload | null;
  onClose: () => void;
};

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 24,
    background:
      "linear-gradient(160deg, rgba(19,29,48,0.98) 0%, rgba(9,14,23,0.99) 100%)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "0 40px 90px rgba(0,0,0,0.65)",
    [theme.breakpoints.up("md")]: {
      maxHeight: "90vh",
    },
  },
}));

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2.5, 3, 2),
  borderBottom: "1px solid var(--border-subtle)",
}));

const HeaderLogo = styled("img")(() => ({
  height: 30,
  width: "auto",
  maxWidth: 90,
  objectFit: "contain",
  flexShrink: 0,
}));

const HeaderMeta = styled(Typography)(() => ({
  color: "var(--text-secondary)",
  fontWeight: 600,
}));

/**
 * Media on the left, facts on the right. Previously everything stacked in a
 * 600px column: the stack grid alone filled a third of the height and pushed
 * the screenshots — the actual substance — below the fold.
 */
const Layout = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)",
    gap: theme.spacing(4),
    alignItems: "start",
  },
}));

const Stage = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  paddingTop: "62%",
  borderRadius: 16,
  overflow: "hidden",
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(6,10,17,0.85)",
}));

const StageImage = styled(motion.img)(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "contain",
  display: "block",
}));

const Caption = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  color: "var(--text-secondary)",
  minHeight: "3.2em",
}));

const Thumbs = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginTop: theme.spacing(1.5),
}));

const Thumb = styled("button", {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
  width: 66,
  height: 44,
  padding: 0,
  borderRadius: 9,
  overflow: "hidden",
  cursor: "pointer",
  backgroundColor: "rgba(6,10,17,0.9)",
  border: active
    ? "1px solid rgba(34,211,238,0.75)"
    : "1px solid var(--border-subtle)",
  opacity: active ? 1 : 0.55,
  transition: "opacity 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
  "&:hover": { opacity: 1, transform: "translateY(-2px)" },
  "&:focus-visible": { outline: "2px solid var(--accent-1)", outlineOffset: 2 },
  "& img": { width: "100%", height: "100%", objectFit: "cover", display: "block" },
}));

const Label = styled(Typography)(({ theme }) => ({
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: "0.66rem",
  color: "var(--text-secondary)",
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(2.5),
}));

const OutcomeRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(0.75),
}));

const OutcomeChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "lead",
})<{ lead?: boolean }>(({ lead }) => ({
  borderRadius: 8,
  height: 26,
  fontWeight: lead ? 700 : 600,
  fontSize: "0.75rem",
  borderColor: lead ? "rgba(34,211,238,0.6)" : "rgba(148,163,184,0.28)",
  backgroundColor: lead ? "rgba(34,211,238,0.14)" : "rgba(148,163,184,0.06)",
}));

/** Dense icon row with tooltips, in place of a labelled grid ten items tall. */
const StackRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(0.75),
}));

const StackIcon = styled(Box)(() => ({
  width: 32,
  height: 32,
  borderRadius: 9,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid var(--border-subtle)",
  backgroundColor: "rgba(15,23,42,0.75)",
  transition: "transform 0.2s ease, border-color 0.2s ease",
  "&:hover": { transform: "translateY(-3px)", borderColor: "rgba(34,211,238,0.5)" },
  "& img": { width: 18, height: 18, objectFit: "contain" },
}));

const VisitButton = styled(Button)<ButtonProps<"a">>(({ theme }) => ({
  marginTop: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  fontWeight: 700,
}));

const MotionVisitButton = motionize(VisitButton);

/** Framer-driven surface, swapped in for MUI's default Grow transition. */
const MotionPaper = (props: Record<string, unknown>) => (
  <motion.div
    {...props}
    initial={{ opacity: 0, y: 28, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 16, scale: 0.97 }}
    transition={transitions.enter}
  />
);

export const ProjectDialog = ({ open, payload, onClose }: Props) => {
  const project = payload?.project;

  /**
   * The card artwork and the first detail screen are often the same file. Detail
   * screens go first so the deduplicated entry keeps their specific caption,
   * and the card artwork joins uncaptioned — the project description already
   * sits in the right-hand column.
   */
  const slides = useMemo(() => {
    if (!project) return [];
    const seen = new Set<string>();
    const out: { image: string; description?: string }[] = [];
    const push = (image?: string, description?: string) => {
      if (!image || seen.has(image)) return;
      seen.add(image);
      out.push({ image, description });
    };
    (project.modal_details ?? []).forEach((d) => push(d.image, d.description));
    push(project.image);
    return out;
  }, [project]);

  const [index, setIndex] = useState(0);
  useEffect(() => setIndex(0), [project?.title]);

  const active = slides[index];
  const logo =
    payload?.companyImages?.[0] ?? payload?.companyImage ?? undefined;
  const year = project?.date ? String(project.date).slice(0, 4) : undefined;
  const stack = [...(project?.tech_stack ?? []), ...(project?.coins ?? [])];
  const outcomes = project?.outcomes ?? [];

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth='lg'
      fullWidth
      PaperProps={{ component: MotionPaper }}>
      <Header>
        {logo && (
          <HeaderLogo src={`${publicPath}/images/${logo}`} alt={payload?.companyName} />
        )}
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Typography variant='h6' component='h2'>
            {project?.title}
          </Typography>
          <HeaderMeta variant='body2'>
            {payload?.companyName}
            {year ? ` · ${year}` : ""}
          </HeaderMeta>
        </Box>
        <IconButton aria-label={i18n.t("close")} onClick={onClose} size='small'>
          <CloseIcon />
        </IconButton>
      </Header>

      <DialogContent sx={{ p: 3 }}>
        <Layout>
          <Box>
            {active && (
              <>
                <Stage>
                  <AnimatePresence mode='wait'>
                    <StageImage
                      data-testid='project-stage'
                      key={active.image}
                      src={`${publicPath}/images/${active.image}`}
                      alt={project?.title}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={transitions.base}
                    />
                  </AnimatePresence>
                </Stage>
                {slides.length > 1 && (
                  <Thumbs role='tablist' aria-label={i18n.t("home.project_gallery")}>
                    {slides.map((slide, idx) => (
                      <Thumb
                        key={slide.image}
                        type='button'
                        role='tab'
                        active={idx === index}
                        aria-selected={idx === index}
                        aria-label={`${i18n.t("home.project_gallery")} ${idx + 1}`}
                        onClick={() => setIndex(idx)}>
                        <img
                          src={`${publicPath}/images/${slide.image}`}
                          alt=''
                          loading='lazy'
                        />
                      </Thumb>
                    ))}
                  </Thumbs>
                )}
                <Caption variant='body2'>{active.description}</Caption>
              </>
            )}
          </Box>

          <Box>
            <Typography variant='body1' color='text.secondary'>
              {project?.description}
            </Typography>

            {outcomes.length > 0 && (
              <>
                <Label>{i18n.t("home.project_outcomes")}</Label>
                <OutcomeRow>
                  {outcomes.map((item, idx) => (
                    <OutcomeChip
                      key={idx}
                      label={item}
                      size='small'
                      variant='outlined'
                      lead={idx === 0}
                    />
                  ))}
                </OutcomeRow>
              </>
            )}

            {stack.length > 0 && (
              <>
                <Label>{i18n.t("home.project_stack")}</Label>
                <StackRow>
                  {stack.map((tech, idx) => (
                    <Tooltip key={idx} title={tech.name} arrow>
                      <StackIcon>
                        <img
                          src={`${publicPath}/images/icons/${resolveTechIconFromStack(tech)}`}
                          alt={tech.name}
                          loading='lazy'
                        />
                      </StackIcon>
                    </Tooltip>
                  ))}
                </StackRow>
              </>
            )}

            {project?.url && (
              <MotionVisitButton
                component='a'
                href={project.url}
                target='_blank'
                rel='noreferrer'
                variant='contained'
                color='primary'
                endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 16 }} />}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={transitions.quick}>
                {i18n.t("visit_project")}
              </MotionVisitButton>
            )}
          </Box>
        </Layout>
      </DialogContent>
    </StyledDialog>
  );
};
