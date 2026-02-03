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
          {" "}
          English{" "}
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color='inherit' onClick={() => handleLanguageChange("es")}>
          {" "}
          Español{" "}
        </Button>
      </MenuItem>
    </Menu>
  );

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        marginTop: 5,
        px: 3,
        pb: 3,
      }}>
      <UserAvatar />
      <List sx={{ mt: 2 }}>
        {pages.map((page, idx) => (
          <LinkItem
            key={page}
            to={`${basePath}${page}`}
            color='inherit'
            relative='path'
            className='nav-link'>
            <ListItem key={page} disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  borderRadius: 2,
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                  opacity: 0,
                  animation: `${fadeInUp} 0.6s ease ${(idx + 1) * 0.08}s forwards`,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    backgroundColor: "rgba(0,0,0,0.04)",
                  },
                }}>
                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: 600 }}>
                      {i18n.t(page + ".title")}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          </LinkItem>
        ))}
        <Button
          fullWidth
          variant='contained'
          color='secondary'
          sx={{
            textTransform: "none",
            marginTop: 2,
            borderRadius: 2,
            boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
          }}
          size='medium'
          href={`${publicPath}/files/resume-victor-hernandez-${language}.pdf`}>
          {i18n.t("download")}
        </Button>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        color='default'
        position='fixed'
        sx={{
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.96), rgba(247,250,252,0.94))",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
          animation: `${fadeInDown} 0.6s ease`,
        }}>
        <Container maxWidth='xl'>
          <Toolbar
            disableGutters
            sx={{
              py: 1,
              px: { xs: 1.5, md: 2.5 },
              minHeight: 80,
              gap: 2,
            }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: { xs: 1, md: 0 },
              }}>
              <UserAvatar />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                gap: 0.75,
                "& a.nav-link": {
                  padding: "4px",
                  borderRadius: 10,
                },
                "& a.nav-link.active": {
                  backgroundColor: "rgba(79,70,229,0.1)",
                },
                "& a.nav-link.active button": {
                  color: "secondary.main",
                  fontWeight: 700,
                },
              }}>
              {pages.map((page) => (
                <LinkItem
                  key={page}
                  to={`${basePath}${page}`}
                  color='inherit'
                  relative='path'
                  className='nav-link'>
                  <Button
                    key={page}
                    color='inherit'
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: 2,
                      px: 2,
                      opacity: 0,
                      animation: `${fadeInDown} 0.6s ease 0.2s forwards`,
                      transition:
                        "color 0.2s ease, transform 0.2s ease, background-color 0.2s ease",
                      "&:hover": {
                        color: "secondary.main",
                        backgroundColor: "rgba(0,0,0,0.04)",
                        transform: "translateY(-2px)",
                      },
                    }}>
                    {i18n.t(page + ".title")}
                  </Button>
                </LinkItem>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                alignItems: "center",
                gap: 1,
                ml: { xs: 0, md: 2 },
              }}>
              <Button
                variant='contained'
                color='secondary'
                sx={{
                  display: { xs: "none", sm: "flex" },
                  textTransform: "none",
                  borderRadius: 2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  fontWeight: 700,
                }}
                size='small'
                href={`${publicPath}/files/resume-victor-hernandez-${language}.pdf`}>
                {i18n.t("download")}
              </Button>
              <Tooltip
                title={language === "es" ? "Cambiar idioma" : "Change language"}
                arrow>
                <IconButton
                  size='large'
                  aria-label={language === "es" ? "Cambiar idioma" : "Change language"}
                  aria-controls={mobileMenuId}
                  aria-haspopup='true'
                  onClick={handleMobileMenuOpen}
                  color='inherit'
                  sx={{
                    borderRadius: 2,
                    bgcolor: "rgba(0,0,0,0.03)",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.06)" },
                  }}>
                  <TranslateRoundedIcon sx={{ fontSize: 22 }} />
                </IconButton>
              </Tooltip>
              <IconButton
                size='small'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleDrawerToggle}
                color='inherit'
                sx={{
                  display: { xs: "inline-flex", md: "none" },
                  borderRadius: 2,
                  bgcolor: "rgba(0,0,0,0.03)",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.06)" },
                }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              background:
                "linear-gradient(180deg, rgba(247,250,252,0.96) 0%, #ffffff 65%)",
              borderTopLeftRadius: 18,
              borderTopRightRadius: 18,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
      {renderMobileMenu}
    </>
  );
};
