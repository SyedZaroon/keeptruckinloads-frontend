import React, { useState, useEffect } from 'react';
import { assets } from '../utils/assets';

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
    <div className="relative overflow-hidden w-full h-[100vh]">
      <div
        className="relative flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img key={index} src={img} className="w-full grayscale h-[100vh] flex-shrink-0 object-cover" />
        ))}
        <div className="absolute bg-black opacity-50 inset-0"></div>
      </div>
      
      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[60px] font-black text-white text-center">
        Your Statewide Dispatch Service
      </span>
    </div>
  );
};

export default Slider;
