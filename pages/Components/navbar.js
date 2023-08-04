import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import NavbarModal from "./navbarModal";
import AOS from "aos";
import "aos/dist/aos.css";

const pages = [
  { href: "#Services", name: "Services" },
  { href: "#AboutMe", name: "About Me"},
  { href: "#Projects", name: "Recent Projects"},
  { href: "#Experiece", name: "Experience"},
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [navbarItem, setNavbarItem] = React.useState(false);
  React.useEffect(() => {
    AOS.init({
      // ... your other initialisation options here ...
      once: true,
     });
  }, []);


  const navbarItemHandler = () => {
    setNavbarItem(!navbarItem);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        background: "transparent",
        zIndex: "2",
        padding: { xs: "24px 10px", sm: "24px 32px", md: "40px 0 40px 0" },
      }}
    >
      {navbarItem && (
        <NavbarModal
          open={navbarItem}
          navbarHandler={navbarItemHandler}
          pages={pages}
        />
      )}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              zIndex:"3"
            }}
          >
            <Box sx={{ width: { xs: "50px", sm: "50px", md: "71px" } }}>
              <img className="logo" width="100%" src="/Logo-white.svg" />
            </Box>
            <div
              className={navbarItem ? "burgerX" : "burgerButton"}
              onClick={navbarItemHandler}
          // data-aos-delay="250"
            >
              <div className={navbarItem ? "burgerXTop" : "burgerTop"}></div>
              <div className={navbarItem ? "burgerXMid" : "burgerMid"}></div>
              <div
                className={navbarItem ? "burgerXBottom" : "burgerBottom"}
              ></div>
            </div>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "4rem",
              alignItems: "center",
            }}
            data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          // data-aos-delay="250"
          >
            <Typography
              id="keep-mounted-modal-title"
              sx={{
                fontWeight: "bold",
                letterSpacing: "-.04em;",
                color: "#9eff00",
                fontSize: "4.875rem",
                lineHeight: "80%",
                marginBottom: "80px",
                position: "absolute",
                top: "18%",
                left: "80%",
                lineHeight: "100.5%",
                letterSpacing: "-.04em",
                display: { sm: "none", md: "block" },
              }}
              variant="h1"
              component="h2"
              data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"

            >
              &nbsp;(20/ 23)
            </Typography>
            <img className="logo" src="/Logo-white.svg" />
            {pages.map((page,index) => (
              <div key={index}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="button"
                  sx={{
                    textTransform: "capitalize",
                    lineHeight: "130%",
                    color: "white",
                    display: "block",
                    fontSize: "20px",
                    fontFamily: "arial",
                  }}
                >
                  <a href={page.href}>{page.name}</a>
                </Button>
                <div className="bottom"></div>
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
                }
export default Navbar;
