import { Box, Typography } from "@mui/material";

const MainPageBody_welcome = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      <img
        src="Images/Tafel.jpg"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        alt="Hintergrund"
      />
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
        }}
      >
        Willkommen an den <br /> Beruflichen Schulen Bretten
      </Typography>

      <Box
        sx={{
          display: { sm: "none", md: "block" },
        }}
      >
        <img
          src="Images/pen-emovebg-preview.png"
          alt="Bild 1"
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "200px",
            height: "200px",
          }}
        />
        <img
          src="Images/book.png"
          alt="Bild 2"
          style={{
            position: "absolute",
            top: "20%",
            right: "15%",
            width: "200px",
            height: "200px",
          }}
        />
        <img
          src="Images/message-bubbles-chalk-white-icon-260nw-1748784449-removebg-preview.png"
          alt="Bild 3"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            width: "200px",
            height: "200px",
          }}
        />
        <img
          src="Images/certificate-chalk-icon-vector-28876288-removebg-preview.png"
          alt="Bild 4"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            width: "200px",
            height: "200px",
          }}
        />
        <img
          src="Images/pngtree-edit-chalk-white-icon-on-black-background-sketch-correct-outline-vector-png-image_30410786-removebg-preview.png"
          alt="Bild 4"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "44%",
            width: "200px",
            height: "200px",
          }}
        />
      </Box>
    </Box>
  );
};

export default MainPageBody_welcome;
