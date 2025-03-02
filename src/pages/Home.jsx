import React from "react";
import Slider from "../components/Slider";
import AboutSection from "./../components/AboutSection";
import ServicesSection from "./../components/ServicesSection";

const Home = () => {
  return (
    <div className="mt-[-140px]">
      <Slider />
      <AboutSection />
      <ServicesSection />
    </div>
  );
};

export default Home;
