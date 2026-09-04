import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useScroll, useTransform } from "framer-motion";

import { LanguageSwitcher, UserAvatar } from "../molecules";
import { Link as RouterLink } from "react-router-dom";
import type { ButtonProps } from "@mui/material/Button";
import { printResumePath } from "../../constants/gloabals";
import { LinkItem } from "../atoms";
import { useLanguage } from "../../context/LanguageContext";
import i18n from "../../utils/i18n";
import { createStagger, fadeUpSoft, motionize, transitions } from "../motion";

const pages = [
  { key: "resume", path: "resume" },
  { key: "cover_letter", path: "cover-letter" },
];
const basePath = import.meta.env.BASE_URL || "/";

const getPagePath = (path: string) =>
  `${basePath}/${path}`.replace(/\/{2,}/g, "/");

const DrawerContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

const DrawerList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
  // LinkItem is inline-flex for the desktop nav, which made the drawer entries
  // sit side by side instead of stacking.
  "& > a": {
    display: "flex",
    width: "100%",
  },
}));

const MotionDrawerList = motionize(DrawerList);

const DrawerNavButton = styled(ListItemButton)(({ theme }) => ({
  textAlign: "center",
  borderRadius: theme.shape.borderRadius * 2,
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.06)",
  },
}));

const MotionDrawerNavButton = motionize(DrawerNavButton);

const DrawerNavText = styled(Typography)(() => ({
  fontWeight: 600,
}));

const DrawerDownloadButton = styled(Button)<ButtonProps<typeof RouterLink>>(({ theme }) => ({
  textTransform: "none",
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 16px 36px rgba(0,0,0,0.45)",
}));

const AppBarRoot = styled(AppBar)(() => ({
  background:
    "linear-gradient(120deg, rgba(10,15,24,0.92), rgba(14,22,34,0.88))",
  backdropFilter: "blur(16px)",
  borderBottom: "1px solid var(--border-subtle)",
}));

const MotionAppBarRoot = motionize(AppBarRoot);

const ToolbarRoot = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  minHeight: 80,
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
  },
}));

const MotionToolbarRoot = motionize(ToolbarRoot);

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
  [theme.breakpoints.up("md")]: {
    flexGrow: 0,
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(0.75),
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  "& a.nav-link": {
    padding: "4px",
    borderRadius: 10,
  },
  "& a.nav-link.active": {
    backgroundColor: "rgba(34,211,238,0.18)",
  },
  "& a.nav-link.active button": {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 600,
  borderRadius: theme.shape.borderRadius * 2,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  transition: "color 0.2s ease, background-color 0.2s ease",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "rgba(255,255,255,0.06)",
  },
}));

const MotionNavLink = motionize(Box);

const ActionsBox = styled(Box)(({ theme }) => ({
  flexGrow: 0,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginLeft: 0,
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(2),
  },
}));

const TopDownloadButton = styled(Button)<ButtonProps<typeof RouterLink>>(({ theme }) => ({
  display: "none",
  textTransform: "none",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 16px 36px rgba(0,0,0,0.45)",
  fontWeight: 700,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const ToolbarIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: "rgba(255,255,255,0.08)",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.12)",
  },
}));

const MenuToggleButton = styled(ToolbarIconButton)(({ theme }) => ({
  display: "inline-flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: "100%",
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.98) 0%, rgba(11,17,27,0.98) 65%)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
}));

export const DrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();
  // Condense the bar as soon as the page starts moving.
  const barShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 18px 40px rgba(0, 0, 0, 0.45)"]
  );
  const barMinHeight = useTransform(scrollY, [0, 80], [80, 64]);
  const { language } = useLanguage();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <DrawerContainer onClick={handleDrawerToggle}>
      <UserAvatar />
      <MotionDrawerList
        variants={createStagger(0.09, 0.12)}
        initial='hidden'
        animate='visible'>
        {pages.map((page) => (
          <LinkItem
            key={page.key}
            to={getPagePath(page.path)}
            color='inherit'
            relative='path'
            className='nav-link'>
            <ListItem key={page.key} disablePadding>
              <MotionDrawerNavButton
                variants={fadeUpSoft}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}>
                <ListItemText
                  primary={
                    <DrawerNavText>{i18n.t(page.key + ".title")}</DrawerNavText>
                  }
                />
              </MotionDrawerNavButton>
            </ListItem>
          </LinkItem>
        ))}
        <Box sx={{ px: 1, pt: 2 }}>
          <LanguageSwitcher variant='wide' />
        </Box>
        <DrawerDownloadButton
          fullWidth
          variant='contained'
          color='secondary'
          size='medium'
          component={RouterLink}
          to={printResumePath}>
          {i18n.t("download")}
        </DrawerDownloadButton>
      </MotionDrawerList>
    </DrawerContainer>
  );

  return (
    <>
      <MotionAppBarRoot
        color='default'
        position='fixed'
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ boxShadow: barShadow }}>
        <Container maxWidth='xl'>
          <MotionToolbarRoot disableGutters style={{ minHeight: barMinHeight }}>
            <LogoBox>
              <UserAvatar />
            </LogoBox>
            <NavLinks>
              {pages.map((page, idx) => (
                <MotionNavLink
                  key={page.key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transitions.base, delay: 0.25 + idx * 0.08 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}>
                  <LinkItem
                    to={getPagePath(page.path)}
                    color='inherit'
                    relative='path'
                    className='nav-link'>
                    <NavButton color='inherit'>
                      {i18n.t(page.key + ".title")}
                    </NavButton>
                  </LinkItem>
                </MotionNavLink>
              ))}
            </NavLinks>

            <ActionsBox>
              <TopDownloadButton
                variant='contained'
                color='secondary'
                size='small'
                component={RouterLink}
                to={printResumePath}>
                {i18n.t("download")}
              </TopDownloadButton>
              {/* Three flags plus the avatar block and the menu button do not
                  fit a phone toolbar; the drawer carries the switcher there. */}
              <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
                <LanguageSwitcher />
              </Box>
              <MenuToggleButton
                size='small'
                aria-label={language === "es" ? "Abrir menú" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleDrawerToggle}
                color='inherit'>
                <MenuIcon />
              </MenuToggleButton>
            </ActionsBox>
          </MotionToolbarRoot>
        </Container>
      </MotionAppBarRoot>
      <nav>
        <MobileDrawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}>
          {drawer}
        </MobileDrawer>
      </nav>
    </>
  );
};
