import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  React.useEffect(() => {
    AOS.init({
      // ... your other initialisation options here ...
      // once: true,
     });
  }, []);
  return (
    <Box
      id="AboutMe"
      sx={{
        margin: {
          xs: "20px 10px 0 10px",
          sm: "32px 16px 0 16px",
          md: "32px 32px 0 32px",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#fff",
          height: "100%",
          padding: { xs: "60px 28px", sm: "72px 32px", md: "96px 40px" },
          borderRadius: "40px",
        }}
      >
        <Box
          sx={{
            position: { xs: "static", sm: "static", md: "absolute" },
            marginBottom: { xs: "2.5rem", sm: "2.5rem", md: "0" },
            top: "3rem",
            right: "3rem",
            left: "auto",
            width: { xs: "40px", sm: "71px", md: "71px" },
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <img src="/Logo-black.svg" width="100%" />
        </Box>
        <Typography
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="250"
          sx={{
            fontSize: { xs: "2.25rem", sm: "8vw", md: "8vw" },
            fontWeight: "700",
            color: "#11131a",
            lineHeight: "80%",
            marginBottom: { xs: "60px", sm: "72px", md: "6.25rem" },
            letterSpacing: "-.07em",
          }}
        >
          ABOUT ME
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", sm: "2.5rem", md: "3.625rem" },
              fontWeight: "600",
              color: "#11131a",
              lineHeight: "80%",
              letterSpacing: "-.02em",
            }}
            data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="250"
          >
            I am not confined to coding; my mindset as a thinker and skills as a
            developer enable me to bring a versatile approach to every project.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1.25rem",
              alignItems: { sm: "flex-start", md: "flex-end" },
              justifyContent: { xs: "column-reverse" },
              flexDirection: { xs: "column-reverse", sm: "row", md: "row" },
            }}
            data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="250"
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "40vw", md: "40vw" },
                height: { xs: "100%", sm: "42vw", md: "42vw" },
              }}
            >
              <img
                src="/myImage.png"
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                  objectPosition: "27% 41%",
                  filter: "grayscale(80%)",
                }}
                width="100%"
                height="100%"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                width: { xs: "100%", sm: "50%", md: "50%" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.75rem", sm: "1.75rem", md: "1.75rem" },
                  fontWeight: "600",
                  color: "#11131a",
                  lineHeight: "130%",
                  letterSpacing: "-.02em",
                }}
              >
                Passionate Software Engineer Creating Innovative Solutions.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "16px", md: "16px" },
                  fontWeight: "600",
                  color: "#828282",
                  lineHeight: "160%",
                  letterSpacing: "-.02em",
                }}
              >
                As a computer science student, I embark on an exciting journey
                of exploration, seeking to unravel the mysteries of technology.
                With an insatiable thirst for knowledge, I aspire to compose
                innovative code symphonies, harmonizing creativity and
                dedication, while crafting solutions that resonate in the
                dynamic world of software engineering.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
