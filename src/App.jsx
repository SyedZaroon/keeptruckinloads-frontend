import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeaderBlack from "./components/HeaderBlack"; 
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import NavBarBlack from "./components/NavBarBlack"

function App() {
  const location = useLocation(); 

  return (
    <div>
      {location.pathname === "/" ? <NavBar /> : <NavBarBlack />}

     
      {location.pathname === "/" ? <Header /> : <HeaderBlack />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
