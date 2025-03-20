import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HeaderBlack from "./components/HeaderBlack";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import NavBarBlack from "./components/NavBarBlack";
import ContactUs from "./pages/ContactUs";
import ContactForm from "./pages/ContactForm";
import OnBoarding from "./pages/OnBoarding";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? <NavBar /> : <NavBarBlack />}

      {location.pathname === "/" ? <Header /> : <HeaderBlack />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
