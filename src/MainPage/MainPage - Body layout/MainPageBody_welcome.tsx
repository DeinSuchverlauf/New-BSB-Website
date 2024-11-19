import { Box, Typography } from "@mui/material";

const MainPageBody_welcome = () => {
  return (
    <Box
      sx={{
        p: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          bgcolor: "#729d89",
          p: 5,
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Willkommen an den <br /> Beruflichen Schulen Bretten
        </Typography>
      </Box>

      <Box
        component="img"
        src="\Images\Education-rafiki.png"
        sx={{
          width: { xs: "100%", sm: "50%" },
          display: { xs: "none", md: "block" },
        }}
      />
    </Box>
  );
};

export default MainPageBody_welcome;
