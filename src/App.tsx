import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPageLayout from "./MainPage/MainPageLayout";
import NewsLayout from "./News/NewsLayout";
import FoodPlanLayout from "./FoodPlan/FoodPlanLayout";
import Navbar from "./Navbar";
import OurSchoolLayout from "./OurSchool/OurSchoolLayout";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path={"/"} element={<MainPageLayout />} />
            <Route path={"/aktuelles"} element={<NewsLayout />} />
            <Route path={"/speiseplan"} element={<FoodPlanLayout />} />
            <Route path={"/unsere-schule"} element={<OurSchoolLayout />} />

            {/* Fängt ungültige Pfade ab und leitet zur Hauptseite weiter */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>

        <Fab
          color="default"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </>
  );
}

export default App;
