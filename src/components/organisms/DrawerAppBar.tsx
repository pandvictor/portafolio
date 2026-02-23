import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
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
  Menu,
  MenuItem,
  Toolbar,
  Button,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

import { UserAvatar } from "../molecules";
import { publicPath } from "../../constants/gloabals";
import { LinkItem } from "../atoms";
import { useLanguage } from "../../context/LanguageContext";
import i18n from "../../utils/i18n";

const pages = ["resume"];
const basePath = import.meta.env.BASE_URL || "/";

const fadeInDown = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(12px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

const DrawerContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

const DrawerList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const DrawerNavButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "delay",
})<{ delay: number }>(({ delay, theme }) => ({
  textAlign: "center",
  borderRadius: theme.shape.borderRadius * 2,
  transition: "background-color 0.2s ease, transform 0.2s ease",
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease ${delay}s forwards`,
  "&:hover": {
    transform: "translateY(-2px)",
    backgroundColor: "rgba(255,255,255,0.06)",
  },
}));

const DrawerNavText = styled(Typography)(() => ({
  fontWeight: 600,
}));

const DrawerDownloadButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 16px 36px rgba(0,0,0,0.45)",
}));

const AppBarRoot = styled(AppBar)(() => ({
  boxShadow: "0 18px 40px rgba(0, 0, 0, 0.4)",
  background:
    "linear-gradient(120deg, rgba(10,15,24,0.92), rgba(14,22,34,0.88))",
  backdropFilter: "blur(16px)",
  borderBottom: "1px solid var(--border-subtle)",
  animation: `${fadeInDown} 0.6s ease`,
}));

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
  opacity: 0,
  animation: `${fadeInDown} 0.6s ease 0.2s forwards`,
  transition: "color 0.2s ease, transform 0.2s ease, background-color 0.2s ease",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "rgba(255,255,255,0.06)",
    transform: "translateY(-2px)",
  },
}));

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

const TopDownloadButton = styled(Button)(({ theme }) => ({
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

const LanguageIcon = styled(TranslateRoundedIcon)(() => ({
  fontSize: 22,
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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { setLanguage, language } = useLanguage();

  const handleLanguageChange = (newLanguage: string) => {
    handleMobileMenuClose();
    setLanguage(newLanguage);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <Button color='inherit' onClick={() => handleLanguageChange("en")}>
          English
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color='inherit' onClick={() => handleLanguageChange("es")}>
          Español
        </Button>
      </MenuItem>
    </Menu>
  );

  const drawer = (
    <DrawerContainer onClick={handleDrawerToggle}>
      <UserAvatar />
      <DrawerList>
        {pages.map((page, idx) => (
          <LinkItem
            key={page}
            to={`${basePath}${page}`}
            color='inherit'
            relative='path'
            className='nav-link'>
            <ListItem key={page} disablePadding>
              <DrawerNavButton delay={(idx + 1) * 0.08}>
                <ListItemText
                  primary={
                    <DrawerNavText>{i18n.t(page + ".title")}</DrawerNavText>
                  }
                />
              </DrawerNavButton>
            </ListItem>
          </LinkItem>
        ))}
        <DrawerDownloadButton
          fullWidth
          variant='contained'
          color='secondary'
          size='medium'
          href={`${publicPath}/files/resume-victor-hernandez-${language}.pdf`}>
          {i18n.t("download")}
        </DrawerDownloadButton>
      </DrawerList>
    </DrawerContainer>
  );

  return (
    <>
      <AppBarRoot color='default' position='fixed'>
        <Container maxWidth='xl'>
          <ToolbarRoot disableGutters>
            <LogoBox>
              <UserAvatar />
            </LogoBox>
            <NavLinks>
              {pages.map((page) => (
                <LinkItem
                  key={page}
                  to={`${basePath}${page}`}
                  color='inherit'
                  relative='path'
                  className='nav-link'>
                  <NavButton key={page} color='inherit'>
                    {i18n.t(page + ".title")}
                  </NavButton>
                </LinkItem>
              ))}
            </NavLinks>

            <ActionsBox>
              <TopDownloadButton
                variant='contained'
                color='secondary'
                size='small'
                href={`${publicPath}/files/resume-victor-hernandez-${language}.pdf`}>
                {i18n.t("download")}
              </TopDownloadButton>
              <Tooltip
                title={language === "es" ? "Cambiar idioma" : "Change language"}
                arrow>
                <ToolbarIconButton
                  size='large'
                  aria-label={
                    language === "es" ? "Cambiar idioma" : "Change language"
                  }
                  aria-controls={mobileMenuId}
                  aria-haspopup='true'
                  onClick={handleMobileMenuOpen}
                  color='inherit'>
                  <LanguageIcon />
                </ToolbarIconButton>
              </Tooltip>
              <MenuToggleButton
                size='small'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleDrawerToggle}
                color='inherit'>
                <MenuIcon />
              </MenuToggleButton>
            </ActionsBox>
          </ToolbarRoot>
        </Container>
      </AppBarRoot>
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
      {renderMobileMenu}
    </>
  );
};
