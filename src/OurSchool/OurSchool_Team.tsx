import { Box, Divider, Typography } from "@mui/material";

const OurSchool_Team = () => {
  return (
    <Box sx={{ pl: 10, pr: 10, pt: 5, pb: 5 }}>
      <Box>
        <Typography variant="h3">Unser Team</Typography>
        <Divider
          sx={{
            width: 420,
            bgcolor: "black",
            mt: 2,
            mb: 2,
          }}
        />
        <Typography variant="h5">Das sind wir!</Typography>
      </Box>
      <Box sx={{ pt: 5 }}>
        <img width={"100%"} src="\Images\ourTeamImages\FullTeam.jpeg" />
      </Box>
    </Box>
  );
};

export default OurSchool_Team;
