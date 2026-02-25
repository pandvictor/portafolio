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

type ResumeHeaderSectionProps = {
  resume: Resume;
};

export const ResumeHeaderSection = memo(({ resume }: ResumeHeaderSectionProps) => (
  <Grid item xs={12} sx={{ backgroundColor: "rgba(15,23,42,0.9)" }}>
    <ListItem>
      <ListItemAvatar>
        <Avatar
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
    </ListItem>
  </Grid>
));

ResumeHeaderSection.displayName = "ResumeHeaderSection";
