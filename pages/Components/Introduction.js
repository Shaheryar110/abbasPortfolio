import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Image from '@mui/material/Image';
import AOS from "aos";
import "aos/dist/aos.css";

function Introduction() {
  React.useEffect(() => {
    AOS.init({
      // ... your other initialisation options here ...
      once: true,
    });
    console.log("Aos");
  }, []);
  return (
    <Box
      sx={{
        padding: {
          xs: "94.8px 10px 0 10px",
          sm: "117.52px 32px 0 32px",
          md: "144.95px 32px 0px 32px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: { xs: "1rem", md: "2rem" },
          position: "relative",
        }}
      >
        <Box
          data-aos-duration="1000"
          data-aos-once="true"
          // data-aos-delay="250"
        >
          <Typography
            sx={{
              fontSize: { xs: "15vw", sm: "14.2vw", md: "15.4vw" },
              fontWeight: { md: "500" },
              color: "#9eff00",
              lineHeight: "80%",
            }}
          >
            Abbas
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "15vw", sm: "14.2vw", md: "15.4vw" },
              fontWeight: { md: "500" },
              color: "#9eff00",
              lineHeight: "80%",
            }}
          >
            Imran
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "90.84px", sm: "171.75px", md: "211.84px" },
            height: { xs: "90.84px", sm: "171.75px", md: "211.84px" },
            marginTop: { sm: "0", md: "3rem" },
          }}
        >
          <img
            src="/myImage.png"
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              objectPosition: "15% 40%",
            }}
            width="100%"
            height="100%"
            data-aos-duration="1000"
            data-aos-once="true"
            // data-aos-delay="250"
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: "80px", display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            width: { sm: "307px", md: "418.5px" },
            fontSize: { xs: "21px", sm: "24px", md: "28px" },
            fontWeight: { md: "500" },
            color: "#11131a",
            lineHeight: "130%",
            fontWeight: "bold",
          }}
        >
          I’m Abbas Imran, Software Engineer based in Pakistan
        </Typography>
        <Typography
          sx={{
            borderTop: "1px solid #11131a",
            marginTop: "26px",
            paddingTop: "32px",
            width: { xs: "100%", md: "418.5px" },
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: { md: "200" },
            color: "#11131a",
            lineHeight: "160%",
            fontWeight: "bold",
            letterSpacing: "-0.025em",
          }}
        >
          I am a dedicated Full Stack Software Engineer with expertise in the
          MERN stack, committed to continuous learning and collaborative
          problem-solving. Let&apos;s connect and drive innovation in software
          engineering.
        </Typography>
        <div style={{ marginTop: "32px" }}>
          <Box sx={{ width: { xs: "99px", sm: "99px", md: "120px" } }}>
            <Button
              className="buttonScroll"
              sx={{
                textTransform: "capitalize",
                lineHeight: "130%",
                fontWeight: "bold",
                color: "#11131a",
                display: "block",
                fontSize: { xs: "16px", sx: "16px", md: "20px" },
                padding: "0",
                fontFamily: "arial",
              }}
            >
              <a href="#Services">Scroll down</a>
            </Button>
            <div className="bottomScroll"></div>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default Introduction;
