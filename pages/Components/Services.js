import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";

function Services(props) {
  React.useEffect(() => {
    AOS.init({
      // ... your other initialisation options here ...
      // once: true,
     });
  }, []);
  const { Service } = props;
  const { experience } = props;
  console.log(experience);
  return (
    <Box id = {experience ? "Experiece" : "Services"}
      sx={{
        margin: {
          xs: experience ? "20px 10px 0 10px" : "98px 10px 0 10px",
          sm: experience ? "32px 10px 0 10px" : "98px 16px 0 16px",
          md: experience ? "32px 32px 0 32px" :"98px 32px 0 32px",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: experience ? "#fff" : "#11131a",
          height: "100%",
          padding: { xs: "60px 28px", sm: "72px 32px", md: "96px 40px" },
          borderRadius: "40px",
        }}
      >
        <Box
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="250"
          sx={{
            position: { xs: "static", sm: "static", md: "absolute" },
            marginBottom: { xs: "2.5rem", sm: "2.5rem", md: "0" },
            top: "3rem",
            right: "3rem",
            left: "auto",
            width: { xs: "40px", sm: "71px", md: "71px" },
          }}
        >
          <img
            src={experience ? "/Logo-black.svg" : "/Logo-green.svg"}
            width="100%"
          />
        </Box>
        <Typography
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="250"
          sx={{
            fontSize: "8vw",
            fontWeight: { md: "500" },
            color: experience ? "#000" : "#9eff00",
            lineHeight: "80%",
            marginBottom: { xs: "3rem", sm: "4.5rem", md: "6.25rem" },
            letterSpacing: "-0.06rem",
          }}
        >
          {experience ? "EXPERIECE" : "SERVICES"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
          className="serviceBox"
        >
          {Service.map((service,index) => {
            return (<div  key={index}>
              <Box data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-anchor="#example-anchor"
        sx={{width:"100%",height:"1px", backgroundColor:"#4f4f4f"}}></Box>
              <Box
              data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="250"
        data-aos-anchor-placement="center-bottom"
                sx={{
                  display: "flex",
                  key: { service },
                  gap: { xs: "1.25rem", sm: "1.25rem" },
                  justifyContent: "center",
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                  padding: "40px 0 64px",
                 
                }}
              >
                <Box
                  sx={{
                    width: { md: "50%" },
                    display: experience ? "flex" : "block",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", sm: "5vw", md: "58px" },
                      fontWeight: "600",
                      color: experience ? "#000" : "#9eff00",
                      lineHeight: "80%",
                      letterSpacing: "-.06em",
                    }}
                  >
                    {service.name}
                  </Typography>
                  {experience && (
                    <Typography
                      sx={{
                        fontSize: { xs: "16px", sm: "16px", md: "16px" },
                        fontWeight: "700",
                        color: "#828282",
                        lineHeight: "160%",
                      }}
                    >
                      {service.fromTo}
                    </Typography>
                  )}
                </Box>
                <Box
                  sx={{
                    width: { md: "50%" },
                    display: experience ? "flex" : "block",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {experience && (
                    <Typography
                      sx={{
                        fontSize: { xs: "2rem", sm: "5vw", md: "1.75rem" },
                        fontWeight: { md: "600" },
                        color: experience ? "#000" : "#9eff00",
                        lineHeight: "130%",
                        letterSpacing: "-.02em",
                      }}
                    >
                      {service.heading}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", sm: "16px", md: "16px" },
                      fontWeight: { md: "bold" },
                      color: "#828282",
                      lineHeight: "160%",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
              </div>);
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Services;
