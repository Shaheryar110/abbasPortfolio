import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  // React.useEffect(() => {
  //   AOS.init({
  //     // ... your other initialisation options here ...
  //     // once: true,
  //    });
  // }, []);
  return (
    <Box
      id="Projects"
      sx={{
        position: "relative",
        margin: {
          xs: "44px 16px 0 16px",
          sm: "44px 16px 0 16px",
          md: "44px 32px 0 32px",
        },
      }}
    >
      <Box
        className="card"
        sx={{
          position: "sticky",
          top: "2vh",
          height: "96vh",
          // position: "-webkit-sticky",
          padding: { xs: "3.5rem 1.75rem", sm: "3.5rem 1.75rem", md: "5rem" },
          backgroundColor: "#11131a",
          borderRadius: "40px",
          cursor: "url(/public/right top icon.png)",
          marginBottom: "2rem",
        }}
      >
        <Link
          href="/"
          sx={{
            width: "100%",
            minHeight: "96vh",
            backgroundColor: "#11131a",
            borderRadius: "40px",
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20vh", sm: "15vh", md: "0" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "8vw",
                fontWeight: { md: "500" },
                color: "#fff",
                display: { xs: "block", sm: "none", md: "block" },
                lineHeight: "80%",
                marginBottom: "1rem",
                textAlign: "center",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              MERIBILTY CRM
            </Typography>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: { md: "600" },
                color: "#fff",
                lineHeight: "80%",
                marginBottom: "1rem",
                textAlign: "center",
                letterSpacing: "-.02em",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              Logistics / CRM / 2023
            </Typography>
          </Box>
          <div
            className="work-card-image-wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <img
              src="/meribilty.png"
              loading="lazy"
              alt=""
              width="100%"
              className="work-card-image"
            />
          </div>
        </Link>
      </Box>
      <Box
        className="card"
        sx={{
          position: "sticky",
          top: "2vh",
          height: "96vh",
          // position: "-webkit-sticky",
          padding: { xs: "3.5rem 1.75rem", sm: "3.5rem 1.75rem", md: "5rem" },
          backgroundColor: "#11131a",
          borderRadius: "40px",
          cursor: "url(/public/right top icon.png)",
          marginBottom: "2rem",
        }}
      >
        <Link
          href="/"
          sx={{
            width: "100%",
            minHeight: "96vh",
            backgroundColor: "#11131a",
            borderRadius: "40px",
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20vh", sm: "15vh", md: "0" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "8vw",
                fontWeight: { md: "500" },
                color: "#fff",
                display: { xs: "block", sm: "none", md: "block" },
                lineHeight: "80%",
                marginBottom: "1rem",
                textAlign: "center",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              AUSTIN TRIM
            </Typography>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: { md: "600" },
                color: "#fff",
                lineHeight: "80%",
                marginBottom: "1rem",
                textAlign: "center",
                letterSpacing: "-.02em",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              E-Commerce / CRM / 2023
            </Typography>
          </Box>
          <div
            className="work-card-image-wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <img
              src="/austintrim.png"
              loading="lazy"
              alt=""
              width="100%"
              className="work-card-image"
            />
          </div>
        </Link>
      </Box>
      <Box
        className="card"
        sx={{
          position: "sticky",
          top: "2vh",
          height: "96vh",
          // position: "-webkit-sticky",
          padding: { xs: "3.5rem 1.75rem", sm: "3.5rem 1.75rem", md: "5rem" },
          backgroundColor: "#11131a",
          borderRadius: "40px",
          cursor: "url(/public/right top icon.png)",
          marginBottom: "2rem",
        }}
      >
        <Link
          href="/"
          sx={{
            width: "100%",
            minHeight: "96vh",
            backgroundColor: "#11131a",
            borderRadius: "40px",
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            gap: { xs: "15vh", sm: "15vh", md: "0" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "8vw",
                fontWeight: { md: "500" },
                color: "#fff",
                display: { xs: "block", sm: "none", md: "block" },
                lineHeight: "80%",
                marginBottom: "1rem",
                textAlign: "center",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              BIZKAR
            </Typography>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: { md: "600" },
                color: "#fff",
                lineHeight: "80%",
                marginBottom: "1rem",
                textAlign: "center",
                letterSpacing: "-.02em",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              Branding / Frontend Design / 2023
            </Typography>
          </Box>
          <div
            className="work-card-image-wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <img
              src="/bizkar.png"
              loading="lazy"
              alt=""
              width="100%"
              className="work-card-image"
            />
          </div>
        </Link>
      </Box>
    </Box>
  );
}

export default Projects;
