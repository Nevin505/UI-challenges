import "./App.css";

import { Outlet, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OtpBox from "./pages/OTP";
function App() {
  return (
    <div className="dark:bg-midnightblue-900 transition-colors duration-700 ripple h-screen">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/verify-email" element={<OtpBox />} />

        {/* <Route path="/products" element={<Products />}>
            <Route path="car" element={<CarProducts />} />
            <Route path="bike" element={<BikeProducts />} />
          </Route>
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
