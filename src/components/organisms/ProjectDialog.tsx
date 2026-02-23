import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack,
  Tooltip,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { publicPath } from "../../constants/gloabals";
import { ProjectModalPayload } from "../../types/types";
import { resolveTechIcon } from "../../utils/techIcons";

type Props = {
  open: boolean;
  payload: ProjectModalPayload | null;
  onClose: () => void;
};

const StyledDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.98) 0%, rgba(10,15,24,0.98) 100%)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
  },
}));

const LogoWrap = styled(Box)(() => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 60,
  maxWidth: 140,
  maxHeight: 42,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const LogoImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  maxWidth: 140,
  maxHeight: 42,
  objectFit: "contain",
}));

const TechItem = styled(Stack)(() => ({
  margin: 4,
  minWidth: 64,
}));

const TechIconButton = styled(IconButton)(() => ({
  backgroundColor: "rgba(15,23,42,0.7)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "8px",
  width: 44,
  height: 44,
}));

const DetailsGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const DetailMedia = styled(CardMedia)(() => ({
  width: "100%",
  maxHeight: 260,
  objectFit: "contain",
  backgroundColor: "rgba(15,23,42,0.6)",
}));

export const ProjectDialog = ({ open, payload, onClose }: Props) => (
  <StyledDialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
    <DialogTitle>
      <Stack direction='row' spacing={1} alignItems='center' justifyContent='space-between'>
        <Stack direction='row' spacing={1} alignItems='center'>
          {(payload?.companyImages && payload.companyImages.length > 0
            ? payload.companyImages
            : payload?.companyImage
              ? [payload.companyImage]
              : []
          ).map((img, idx) => (
            <LogoWrap key={`${img}-${idx}`}>
              <LogoImage
                src={`${publicPath}/images/${img}`}
                alt={payload?.companyName}
              />
            </LogoWrap>
          ))}
          <div>
            <Typography variant='h6'>{payload?.project.title}</Typography>
            <Typography variant='body2' color='text.secondary'>
              {payload?.companyName}
            </Typography>
          </div>
        </Stack>
        <IconButton aria-label='close' onClick={onClose} size='small'>
          <CloseIcon />
        </IconButton>
      </Stack>
    </DialogTitle>
    <DialogContent dividers>
      <Typography paragraph>{payload?.project.description}</Typography>
      <Stack direction='row' spacing={1} flexWrap='wrap'>
        {payload?.project.tech_stack.map((tech) => {
          const icon = resolveTechIcon(tech.name, tech.icon);
          return (
            <TechItem key={tech.name} alignItems='center' spacing={0.5}>
              <Tooltip title={tech.name} arrow>
                <TechIconButton>
                  <img
                    src={`${publicPath}/images/icons/${icon}`}
                    height={24}
                    width={24}
                    alt={tech.name}
                  />
                </TechIconButton>
              </Tooltip>
              <Typography variant='caption' color='text.secondary' textAlign='center'>
                {tech.name}
              </Typography>
            </TechItem>
          );
        })}
      </Stack>
      {payload?.project.modal_details && payload.project.modal_details.length > 0 && (
        <DetailsGrid container spacing={2}>
          {payload.project.modal_details.map((item, idx) => (
            <Grid item xs={12} key={`${item.image}-${idx}`}>
              <Card variant='outlined'>
                <DetailMedia
                  component='img'
                  image={`${publicPath}/images/${item.image}`}
                  alt={payload.project.title}
                />
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </DetailsGrid>
      )}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
      {payload?.project.url && (
        <Button onClick={() => window.open(payload.project.url, "_blank")} variant='contained'>
          Visit project
        </Button>
      )}
    </DialogActions>
  </StyledDialog>
);
