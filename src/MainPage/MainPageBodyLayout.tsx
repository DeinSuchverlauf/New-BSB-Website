import { Box } from "@mui/material";
import MainPageBody_welcome from "./MainPage - Body layout/MainPageBody_welcome";
import MainPageBody_second from "./MainPage - Body layout/MainPageBody_second";
import MainPageBody_news from "./MainPage - Body layout/MainPageBody_news";
import MainPageBody_ourTeam from "./MainPage - Body layout/MainPageBody_ourTeam";
import MainPageBody_location from "./MainPage - Body layout/MainPageBody_location";

const MainPageBody = () => {
  return (
    <Box>
      <MainPageBody_welcome />
      <MainPageBody_second />
      <MainPageBody_news />
      <MainPageBody_ourTeam />
      <MainPageBody_location />
    </Box>
  );
};

export default MainPageBody;
