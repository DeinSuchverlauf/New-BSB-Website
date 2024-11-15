import { Box, Typography } from "@mui/material";
import OurSchool_SchoolTypes from "./OurSchool_SchoolTypes";
import OurSchool_ThatsMe from "./OurSchool_ThatsMe";

const OurSchoolLayout = () => {
  return (
    <Box sx={{ p: 10, pl: 10, pr: 10 }}>
      <Box>
        <Typography variant="h3" sx={{ color: "#729d89" }}>
          Unsere Schule
        </Typography>
      </Box>

      <OurSchool_SchoolTypes />
      <OurSchool_ThatsMe />
    </Box>
  );
};

export default OurSchoolLayout;
