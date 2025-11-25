import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack,
  Avatar,
  Tooltip,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { publicPath } from "../../constants/gloabals";
import { ProjectModalPayload } from "../../types/types";
import { resolveTechIcon } from "../../utils/techIcons";

type Props = {
  open: boolean;
  payload: ProjectModalPayload | null;
  onClose: () => void;
};

export const ProjectDialog = ({ open, payload, onClose }: Props) => (
  <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
    <DialogTitle>
      <Stack direction='row' spacing={1} alignItems='center' justifyContent='space-between'>
        <Stack direction='row' spacing={1} alignItems='center'>
          {payload?.companyImage && (
            <Avatar
              src={`${publicPath}/images/${payload.companyImage}`}
              alt={payload.companyName}
              sx={{ width: 36, height: 36 }}
            />
          )}
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
            <Stack key={tech.name} alignItems='center' spacing={0.5} sx={{ m: 0.5, minWidth: 64 }}>
              <Tooltip title={tech.name} arrow>
                <IconButton
                  sx={{
                    backgroundColor: "#ffffffad",
                    borderRadius: "8px",
                    width: 44,
                    height: 44,
                  }}>
                  <img
                    src={`${publicPath}/images/icons/${icon}`}
                    height={24}
                    width={24}
                    alt={tech.name}
                  />
                </IconButton>
              </Tooltip>
              <Typography variant='caption' color='text.secondary' textAlign='center'>
                {tech.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
      {payload?.project.modal_details && payload.project.modal_details.length > 0 && (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {payload.project.modal_details.map((item, idx) => (
            <Grid item xs={12} key={`${item.image}-${idx}`}>
              <Card variant='outlined'>
                <CardMedia
                  component='img'
                  height='180'
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
        </Grid>
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
  </Dialog>
);
