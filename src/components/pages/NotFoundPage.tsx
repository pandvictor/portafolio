import { Box, Button, Stack, Typography } from "@mui/material";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import i18n from "../../utils/i18n";
import { homePath } from "../../constants/gloabals";
import { MainTemplate } from "../templates";
import { SectionSurface } from "../molecules";
import { Reveal } from "../motion";

const Panel = styled(SectionSurface)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(8, 3),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(12, 6),
  },
}));

const Code = styled(Typography)(() => ({
  fontWeight: 800,
  lineHeight: 1,
  fontSize: "clamp(4rem, 12vw, 7rem)",
  letterSpacing: "-0.04em",
  background: "linear-gradient(120deg, #22d3ee, #a3e635)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
}));

const HomeButton = styled(Button)<ButtonProps<typeof RouterLink>>(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

/** Replaces four routes that each rendered a bare, untranslated placeholder. */
export function NotFoundPage() {
  return (
    <MainTemplate>
      <Reveal preset='up'>
        <Panel tone='raised'>
          <Stack spacing={2} alignItems='center'>
            <Code variant='h1'>404</Code>
            <Typography variant='h4'>{i18n.t("not_found.title")}</Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ maxWidth: 520 }}>
              {i18n.t("not_found.desc")}
            </Typography>
            <Box sx={{ pt: 2 }}>
              <HomeButton
                component={RouterLink}
                to={homePath}
                variant='contained'
                color='primary'
                size='large'
                startIcon={<ArrowBackRoundedIcon />}>
                {i18n.t("not_found.cta")}
              </HomeButton>
            </Box>
          </Stack>
        </Panel>
      </Reveal>
    </MainTemplate>
  );
}
