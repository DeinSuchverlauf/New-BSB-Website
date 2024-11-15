import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPageLayout from "./assets/MainPage/MainPageLayout";
import NewsLayout from "./News/NewsLayout";
import FoodPlanLayout from "./FoodPlan/FoodPlanLayout";
import Navbar from "./Navbar";
import OurSchoolLayout from "./OurSchool/OurSchoolLayout";

function App() {
  const MainPage = () => {
    return;
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
      </div>
    </>
  );
}

export default App;
