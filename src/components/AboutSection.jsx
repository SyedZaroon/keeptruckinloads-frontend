import React from "react";
import { assets } from "../utils/assets";

const AboutSection = () => {
  return (
    <>
      {/* ABOUT US SECTION */}
      <section className="text-center py-[70px] px-6 bg-white">
        <h2 className="text-6xl font-semibold text-blue-600 flex justify-center items-center gap-2">
          <span className="text-6xl font-bold">&#9776;</span> ABOUT US
        </h2>
        <p className="my-8 text-[#5a5c5b] opacity-5 tracking-[-0.03em] max-w-[850px] text-start mx-auto">
          Keeptruckin Loads is your partner in maximizing trucking profits. We
          offer a comprehensive dispatch service, including load sourcing, rate
          negotiation, booking confirmations, fuel surcharge calculations, and
          back-office support. Our goal is to streamline your operations,
          increase your revenue, and improve your overall trucking experience.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 sm:px-12 md:px-20 lg:px-56">
          {/* Card 1 */}
          <div className="border-2 border-[#006cb7] p-4 shadow-md bg-white rounded-lg">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              ⚡
            </div>
            <h3 className="text-2xl font-bold text-blue-600 text-center">
              TIMELY DELIVERY
            </h3>
            <p className="mt-2 text-[#006cb7] text-center">
              We prioritize efficient and on-time deliveries, building strong
              relationships with our carriers and ensuring customer
              satisfaction.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-[#006cb7] p-4 shadow-md bg-white rounded-lg">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              🌍
            </div>
            <h3 className="text-2xl font-bold text-blue-600 text-center">
              NO STATE LIMITATIONS
            </h3>
            <p className="mt-2 text-[#006cb7] text-center">
              We connect you with loads across the entire United States,
              expanding your reach and maximizing your earning potential.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-[#006cb7] p-4 shadow-md bg-white rounded-lg">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              🛟
            </div>
            <h3 className="text-2xl font-bold text-blue-600 text-center">
              24/7 SUPPORT
            </h3>
            <p className="mt-2 text-[#006cb7] text-center">
              Our dedicated team is always available to assist you with any
              questions or concerns, ensuring you're never alone on the road.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEW SECTION */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row">
          {/* Review Text */}
          <div className="md:w-1/2 bg-blue-600 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
              Fantastic Service
            </h2>
            <p className="mt-4 text-lg text-center md:text-left">
              "Before Keeptruckin Loads, I was constantly juggling load boards,
              negotiating rates, and dealing with paperwork. It was exhausting
              and time-consuming. Since partnering with them, my business has
              improved significantly. Their team of dispatchers finds me
              high-paying loads consistently."
            </p>
            <p className="mt-6 font-semibold text-center md:text-left">
              Harrison Cole
            </p>
            <p className="italic text-center md:text-left">
              Owner, 9 Tales Trucking
            </p>
          </div>

          {/* Review Image */}
          <div className="md:w-1/2 flex">
            <img
              src={assets.review}
              alt="Client"
              className="shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* LOGOS SECTION */}
      <div className="flex flex-wrap justify-center items-center gap-6 py-6 mt-8 bg-white px-4 sm:px-8">
        <img src={assets.helpinghand} alt="logo1" className="h-12 md:h-14" />
        <img src={assets.logo2} alt="logo2" className="h-12 md:h-14" />
        <img src={assets.logo3} alt="logo3" className="h-12 md:h-14" />
        <img src={assets.earth4} alt="logo4" className="h-12 md:h-14" />
        <img src={assets.lotusflowe5} alt="logo5" className="h-12 md:h-14" />
        <img src={assets.rocket6} alt="logo6" className="h-12 md:h-14" />
      </div>
    </>
  );
};

export default AboutSection;
