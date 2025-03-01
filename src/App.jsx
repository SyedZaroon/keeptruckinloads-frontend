import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Header />

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
