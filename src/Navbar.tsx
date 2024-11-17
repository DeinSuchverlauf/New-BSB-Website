import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import MenuItem from "@mui/material/MenuItem";
import React, { Fragment, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Drawer,
  List,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const pagesWithSubpages = [
  {
    mainPage: "Unsere Schule",
    subpages: null,
    // subpages: [
    //   "Schularten",
    //   "Wir über uns",
    //   "Kollegium",
    //   "Schulleitung",
    //   "Sekretariat",
    //   "Hausmeisterteam",
    // ],
  },
  { mainPage: "Aktuelles", subpages: null },
  {
    mainPage: "Anmeldung",
    subpages: [
      "Berufsschulen",
      "Einjährige Berufsfachschule - Metall",
      "Fachschule für Technik",
      "AVDual",
      "VABO",
      "Zweijährige Berufsfachschulen - Mittlere Reife",
      "Berufsfachschulen zur Aus- und Weiterbildung",
      "BKFH",
      "Anmeldung BG & BK",
    ],
  },
  {
    mainPage: "Service",
    subpages: [
      "Flyer",
      "Downloads",
      "Pausenzeiten",
      "Orientierungspraktikum",
      "Schulpraktikum",
      "Verbesserungsmanagement",
      "Beschwerdemanagement",
    ],
  },
  {
    mainPage: "BSB-Intern",
    subpages: [
      "Webuntis",
      "PAEDML",
      "SchülerMoodle",
      "Auslandsaktivitäten an den BSB",
    ],
  },
  { mainPage: "Speiseplan", subpages: null },
  { mainPage: "Kontakt", subpages: ["Impressum", "Datenschutzerklärung"] },
];

const Navbar = () => {
  const handleOpenNavMenu = () => {
    setDrawerOpen(true);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
    page:
      | { mainPage: string; subpages: string[] }
      | { mainPage: string; subpages: null }
  ) => {
    if (page.subpages !== null) {
      setAnchorEl(event.currentTarget);
      setOpenMenuIndex(index);
    } else if (page.mainPage === "Aktuelles") {
      navigate("/aktuelles");
    } else if (page.mainPage === "Speiseplan") {
      navigate("/speiseplan");
    } else if (page.mainPage === "Unsere Schule") {
      navigate("/unsere-schule");
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <AppBar position="static" sx={{ bgcolor: "#719d88" }}>
      <Toolbar disableGutters sx={{ pl: 1, pr: 1 }}>
        <SchoolIcon
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          onClick={() => navigate("")}
        />
        <Typography
          variant="h6"
          onClick={() => navigate("")}
          noWrap
          component="a"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          BSB
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                bgcolor: "#719d88",
                color: "white",
              },
            }}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {pagesWithSubpages.map((page, index) => (
                  <Fragment key={index}>
                    {page.subpages !== null ? (
                      <Accordion
                        sx={{
                          boxShadow: "none",
                          bgcolor: "#719d88",
                          color: "white",
                          "& .MuiAccordionSummary-root:hover": {
                            bgcolor: "#a6c8b9",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon sx={{ color: "white" }} />
                          }
                        >
                          <Typography
                            sx={{
                              textDecoration:
                                page.mainPage.includes("Anmeldung") ||
                                page.mainPage.includes("Service") ||
                                page.mainPage.includes("BSB-Intern") ||
                                page.mainPage.includes("Kontakt")
                                  ? "line-through"
                                  : "none",
                            }}
                          >
                            {page.mainPage}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {page.subpages.map((subpage, subIndex) => (
                            <Box key={`${index}-${subIndex}`}>
                              <Divider />
                              <Button
                                fullWidth
                                sx={{
                                  color: "white",
                                  "&:hover": {
                                    bgcolor: "#a6c8b9",
                                  },
                                }}
                              >
                                {subpage}
                              </Button>
                            </Box>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    ) : (
                      <AccordionSummary
                        onClick={(e) => handleClick(e, index, page)}
                        sx={{
                          "&:hover": {
                            bgcolor: "#a6c8b9",
                          },
                        }}
                      >
                        <Typography>{page.mainPage}</Typography>
                      </AccordionSummary>
                    )}
                    <Divider />
                  </Fragment>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
        <SchoolIcon
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          onClick={() => navigate("")}
        />
        <Typography
          variant="h5"
          noWrap
          component="a"
          onClick={() => navigate("")}
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          BSB
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "end",
          }}
        >
          {pagesWithSubpages.map((page, index) => (
            <Box key={index}>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    backgroundColor: "#a6c8b9",
                    textDecoration:
                      page.mainPage.includes("Anmeldung") ||
                      page.mainPage.includes("Service") ||
                      page.mainPage.includes("BSB-Intern") ||
                      page.mainPage.includes("Kontakt")
                        ? "line-through"
                        : "none",
                  },
                  textDecoration:
                    page.mainPage.includes("Anmeldung") ||
                    page.mainPage.includes("Service") ||
                    page.mainPage.includes("BSB-Intern") ||
                    page.mainPage.includes("Kontakt")
                      ? "line-through"
                      : "none",
                }}
                aria-controls={
                  openMenuIndex === index ? "basic-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={openMenuIndex === index ? "true" : undefined}
                onClick={(e) => handleClick(e, index, page)}
              >
                {page.mainPage}
              </Button>

              {page.subpages !== null ? (
                <Menu
                  PaperProps={{ sx: { bgcolor: "#719d88" } }}
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenuIndex === index}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {page.subpages?.map((subpage, subIndex) => (
                    <MenuItem
                      key={subIndex}
                      onClick={handleClose}
                      sx={{
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#a6c8b9",
                        },
                      }}
                    >
                      {subpage}
                    </MenuItem>
                  ))}
                </Menu>
              ) : undefined}
            </Box>
          ))}
          <IconButton
            onClick={() => window.open("https://www.facebook.com/bsbbretten")}
          >
            <img
              src="Images\Icon\icons8-facebook-96.png"
              width={40}
              height={40}
            />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://www.instagram.com/bsb_bretten/")
            }
          >
            <img
              src="Images\Icon\icons8-instagram-100.png"
              width={40}
              height={40}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
