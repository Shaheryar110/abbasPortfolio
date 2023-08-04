import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  React.useEffect(() => {
    AOS.init({
      // ... your other initialisation options here ...
      // once: true,
     });
  }, []);
  const navItems = [
    { url: "https://www.linkedin.com/in/abbas-imran-9b1920227/", name: "Linkedin" },
    { url: "https://github.com/Abbas-Imran", name: "Github" },
    { url: "https://twitter.com/AbbasBaloxh07", name: "Twitter" },
    { url: "https://medium.com/@balochabbas241", name: "Medium" },
  ];
  return (
    <Box
      sx={{
        margin: {
          xs: "20px 10px 0 10px",
          sm: "32px 16px 0 16px",
          md: "32px 32px 0 32px",
        },  
        borderRadius: "40px",
        backgroundColor: "#11131a",
      }}
    >
      <Box sx={{ padding: "96px 40px 56px 40px" }}>
        <Typography
          sx={{
            fontSize: { xs: "2.25rem", sm: "8vw", md: "8.5vw" },
            fontWeight: { md: "600" },
            color: "#9eff00",
            lineHeight: "105%",
            textTransform: "Uppercase",
            letterSpacing: "-.04em",
            marginBottom: { xs: "60px", sm: "60px", md: "112px" },
            textAlign: { xs: "center", sm: "center", md: "start" },
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          Got a project? &nbsp; Let’s talk!
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
            marginBottom: "20px",
            paddingBottom: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <Box sx={{ width: { xs: "40px", sm: "40px", md: "71px" } }}>
              <img className="logo" width="100%" src="/Logo-white.svg" />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: { xs: "2rem", sm: "2rem", md: "4rem" },
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {navItems.map((page, index) => (
                <div data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index*100}
                key={index}>
                  <Button
                    className="button"
                    sx={{
                      textTransform: "capitalize",
                      lineHeight: "130%",
                      color: "white",
                      display: "block",
                      fontSize: { xs: "1.25", sm: "1.5rem", md: "1.4rem" },
                      fontFamily: "arial",
                      fontWeight: "600",
                    }}
                  >
                    <a href={page.url}>{page.name}</a>
                  </Button>
                  <div className="bottom"></div>
                </div>
              ))}
            </Box>
            <Box></Box>
          </Box>
          <div
            sx={{
              display: { xs: "block", sm: "block", md: "block" },
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <Button
                className="button"
                sx={{
                  textTransform: "capitalize",
                  lineHeight: "130%",
                  color: "#9eff00",
                  display: "block",
                  fontSize: { xs: "1.2rem", sm: "2rem", md: "42px" },
                  fontFamily: "arial",
                  fontWeight: "600",
                }}
              >
                balochabbas241@gmail.com
              </Button>
              <div className="bottomNav"></div>
            </div>
          </div>
        </Box>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#4f4f4f",
            marginBottom: "5rem",
          }}
        ></div>
        <Typography
          sx={{
            fontSize: { xs: "3vw", sm: "2vw", md: "2vw" },
            fontWeight: { md: "600" },
            color: "#4f4f4f",
            lineHeight: "105%",
            textTransform: "Uppercase",
            letterSpacing: "-.04em",
            marginBottom: { xs: "60px", sm: "60px", md: "112px" },
            textAlign: { xs: "center", sm: "center", md: "center" },
          }}
        >
          All copyright is reserved by{" "}
          <span style={{ color: "#9eff00" }}>Abbas Imran</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
