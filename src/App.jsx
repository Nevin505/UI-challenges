import "./App.css";

import { Outlet, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OtpBox from "./pages/OTP";
import Day1CssChallenges from "./pages/day1";
import Day2CssChallenges from "./pages/day2/Day2CssChallenges";
import ThirdDay from "./pages/day3";
import FourthDay from "./pages/day4";
function App() {
  return (
    <div className="dark:bg-midnightblue-900 transition-colors duration-700 ripple h-screen">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/verify-email" element={<OtpBox />} />
        <Route path="/day1" element={<Day1CssChallenges />} />
        <Route path="/day2" element={<Day2CssChallenges />} />
        <Route path="/day3" element={<ThirdDay />} />
        <Route path="/day4" element={<FourthDay />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
