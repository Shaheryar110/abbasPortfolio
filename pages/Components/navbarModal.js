import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "relative",
  width: "100%",
  height:"100vh",
  bgcolor: "#11131a",
  boxShadow: 24,
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  p: 4,
  padding: { xs: "80px 28px", sm: "80px 32px" },
  zIndex:"1"
};

const page = {
  LinkedIn: {
    url: "https://www.linkedin.com/in/abbas-imran-9b1920227/",
  },
  Github: {
    url: "https://github.com/Abbas-Imran",
  },
  Twitter: {
    url: "https://twitter.com/AbbasBaloxh07",
  },
  Medium: {
    url: "https://medium.com/@balochabbas241",
  },
};

export default function NavbarModal(props) {
  return (
    <Modal
      keepMounted
      open={props.open}
      onClose={props.navbarHandler}
      sx={{overflowY:"scroll", zIndex: "1", border: "none", width:"100vw" }}
      BackdropProps={{ invisible: true }}
      className="navbarModal"
  >
      <Box sx={style}>
        <Typography
          id="keep-mounted-modal-title"
          sx={{
            fontWeight: "bold",
            letterSpacing: "-.04em;",
            color: "#9eff00",
            fontSize: "4.875rem",
            lineHeight: "80%",
            marginBottom: "80px",
          }}
          variant="h1"
          component="h2"
        >
          (20/ 23)
        </Typography>
        <div
          style={{
            height: "341.562px",
            marginBottom: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {props.pages.map((page) => (
            <div key={page}>
              <Button
                onClick={props.navbarHandler}
                className="button"
                sx={{
                  filter: "contrast(18.55)",
                  fontWeight: "bold",
                  margin: "0px",
                  padding: "0px",
                  textTransform: "capitalize",
                  lineHeight: "130%",
                  color: "white",
                  display: "block",
                  fontSize: "28px",
                }}
              >
                <a href={page.href}>{page.name}</a>
              </Button>
              <div className="bottom"></div>
            </div>
          ))}
        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"95%", paddingBottom: "2.25rem", borderBottom:"1px solid #4f4f4f"}}>
        {Object.entries(page).map(([name, { url }]) => (
          <div key={page}>
            <Button
              className="button"
              sx={{
                fontWeight: "bold",
                margin: "0px",
                padding: "0px",
                textTransform: "capitalize",
                lineHeight: "130%",
                color: "#9eff00;",
                display: "block",
                fontSize: "20px",
              }}
            >
              <a href={url}>{name}</a>
            </Button>
            <div className="bottomNav"></div>
          </div>
        ))}
        </div>
        <div style={{marginTop:"50px"}}>
            <Button
              key={page}
              className="button"
              sx={{
                fontWeight: "bold",
                margin: "0px",
                padding: "0px",
                lineHeight: "130%",
                color: "#9eff00;",
                display: "block",
                fontSize: "20px",
              }}
            >
              <a href="mailto:balochabbas241@gmail.com">balochabbas241@gmail.com</a>
            </Button>
            <div className="bottomNav"></div>
          </div>
      </Box>
    </Modal>
  );
}
