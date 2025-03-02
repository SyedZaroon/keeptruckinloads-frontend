import React, { useState, useEffect } from "react";
import { assets } from "../utils/assets";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Slider = () => {
  const slides = [assets.slider1, assets.slider2, assets.slider3];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-screen">
      {/* Slider Container */}
      <div
        className="relative flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full flex-shrink-0 object-cover grayscale "
          />
        ))}
      </div>

      
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <IoIosArrowDown className="z-30 absolute bottom-10 lg:bottom-0 left-1/2 text-white text-5xl transform -translate-x-1/2  " />
      
      
      <div className="flex lg:hidden items-center gap-[15px] z-30 absolute bottom-3 left-1/2 transform -translate-x-1/2 ">
              <FaFacebookF className="text-white" />
              <FaTwitter className="text-white" />
              <FaInstagram className="text-white" />
              <FaGooglePlusG className="text-white" />
              <FaLinkedinIn className="text-white" />
              <FaWhatsapp className="text-white" />
            </div>
     
      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold z-20 text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight w-[90%] md:w-[910px] uppercase">
        Your State wide Dispatch Service
      </span>
    </div>
  );
};

export default Slider;
