import Card from "@mui/material/Card";
import { Project, TechStack, WorkHistory } from "../../types/types";
import { publicPath } from "../../constants/gloabals";
import { Avatar, Box, CardActions, CardContent, CardHeader, Grid , IconButton, Typography} from "@mui/material";

type CardClientsProps = {
  data: WorkHistory;
};

export const CardClients = ({ data }: CardClientsProps) => {
  const renderActionIcons = (tech_stack: TechStack[]) => {
    return tech_stack.map((item: TechStack) => {
      return (
        <IconButton
          sx={{
            backgroundColor: "rgba(15,23,42,0.7)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "8px",
            margin: 1,
          }}
          key={item.name}
        >
          <img
            src={`${publicPath}/images/icons/${item.icon}`}
            height={25}
            width={25}
            alt={item.name}
          />
        </IconButton>
      );
    });
  };

  return data.achievements.map((item: Project, index) => (
    <Grid item xs={12} md={6} lg={4} key={`${data.company}-${item.title}-${index}`}>
      <Card sx={{ maxWidth: 800, borderRadius: "28px", height: "100%" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ display: "flex", mr: 1, height: 60, width: 60 }}
              alt={data.company}
              src={
                Array.isArray(data.company_image)
                  ? `${publicPath}/images/${data.company_image[0]}`
                  : `${publicPath}/images/${data.company_image}`
              }
            />
          }
          title={data.company}
          titleTypographyProps={{ variant: "h5", color: "primary" }}
          subheader={data.position}
          subheaderTypographyProps={{ variant: "h6", color: "secondary" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Box sx={{ padding: 1 }}>{renderActionIcons(item.tech_stack)}</Box>
        </CardActions>
      </Card>
    </Grid>
  ));
};
