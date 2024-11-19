import { Box, Divider, Typography } from "@mui/material";

const MainPageBody_location = () => {
  return (
    <Box sx={{ bgcolor: "#729d89", p: 10, pl: 10, pr: 10 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" sx={{ color: "white" }}>
          Wo findet ihr uns?
        </Typography>
        <Divider sx={{ width: 100, bgcolor: "white", mt: 2, mb: 2 }} />
        <Typography variant="h5" sx={{ color: "white" }}>
          Standort
        </Typography>
      </Box>

      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388.8285626606454!2d8.703032899227157!3d49.03500151265659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977580f9fbad67%3A0x50be0ea39fcbef52!2sBerufliche%20Schulen%20Bretten!5e0!3m2!1sde!2sde!4v1731592077172!5m2!1sde!2sde"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
};

export default MainPageBody_location;
