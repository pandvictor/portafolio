import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { publicPath } from "../../constants/gloabals";
import { Resume } from "../../types";
import { motionize, transitions } from "../motion";

const MotionAvatar = motionize(Avatar);
const MotionListItem = motionize(ListItem);

type ResumeHeaderSectionProps = {
  resume: Resume;
};

export const ResumeHeaderSection = memo(({ resume }: ResumeHeaderSectionProps) => (
  <Grid item xs={12} sx={{ backgroundColor: "rgba(15,23,42,0.9)" }}>
    <MotionListItem
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitions.enter}>
      <ListItemAvatar>
        <MotionAvatar
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={transitions.spring}
          sx={{
            display: "flex",
            mr: 5,
            flexGrow: 1,
            width: 90,
            height: 90,
          }}
          alt='A'
          src={`${publicPath}/images/vic.jpeg`}
        />
      </ListItemAvatar>
      <ListItemText
        children={
          <div style={{ flex: 1 }}>
            <Typography variant='h4' color='text.primary'>
              {resume.full_name}
            </Typography>
            <Typography variant='h6' color='text.secondary'>
              {resume.position}
            </Typography>
          </div>
        }
      />
    </MotionListItem>
  </Grid>
));

ResumeHeaderSection.displayName = "ResumeHeaderSection";
