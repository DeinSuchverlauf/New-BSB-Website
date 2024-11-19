import { Box, Typography } from "@mui/material";
import OurSchool_SchoolTypes from "./OurSchool_SchoolTypes";
import OurSchool_ThatsMe from "./OurSchool_ThatsMe";
import OurSchool_Team from "./OurSchool_Team";

const OurSchoolLayout = () => {
  return (
    <Box>
      <Box sx={{ pl: 10, pr: 10, pt: 5 }}>
        <Typography variant="h3">Unsere Schule</Typography>
      </Box>
      <OurSchool_SchoolTypes />
      <OurSchool_ThatsMe />
      <OurSchool_Team />
    </Box>
  );
};

export default OurSchoolLayout;
