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
        <p className="my-8 text-[#5a5c5b] font-thin  max-w-[850px] text-start mx-auto">
          Keeptruckin Loads is your partner in maximizing trucking profits. We
          offer a comprehensive dispatch service, including load sourcing, rate
          negotiation, booking confirmations, fuel surcharge calculations, and
          back-office support. Our goal is to streamline your operations,
          increase your revenue, and improve your overall trucking experience.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 px-2 sm:px-12 md:px-20 lg:px-56">
          {/* Card 1 */}
          <div className=" relative border-[2px] border-[#006cb7] p-4 shadow-md bg-white ">
            <div className="pt-5">
              <h3 className="text-2xl font-semibold text-blue-600 text-center">
                TIMELY DELIVERY
              </h3>
              <p className="mt-2 text-[#006cb7] font-thin text-center">
                We prioritize efficient and on-time deliveries, building strong
                relationships with our carriers and ensuring customer
                satisfaction.
              </p>
            </div>

            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="259 -787 480 875"
                data-icon="ico-flash"
                className="w-16 h-16 p-1 fill-[#006CB7] bg-white "
                preserveAspectRatio="xMidYMid"
              >
                <path d="M484 -391.7h256.4C618.8 -230.9 498.4 -71.7 378 87.5l-1.8 -1C419.7 -32.9 463.3 -152.2 507.6 -274c-82.9 3.7 -163.9 7.3 -248.1 11 123.4 -176.3 245.4 -350.4 367.4 -524.5l2.3 1C580.9 -655.5 532.7 -524.4 484 -391.7z"></path>
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" relative border-[2px] border-[#006cb7] p-4 shadow-md bg-white ">
            <div className="pt-5">
              <h3 className="text-2xl font-semibold text-blue-600 text-center leading-6">
                NO STATE LIMITATIONS
              </h3>
              <p className="mt-2 text-[#006cb7] font-thin text-center">
                We connect you with loads across the entire United States,
                expanding your reach and maximizing your earning potential.
              </p>
            </div>

            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -416 448 448"
                data-icon="ion-ion-earth"
                className="w-16 h-16 p-1 fill-[#006CB7] bg-white "
                preserveAspectRatio="xMidYMid"
              >
                <path d="M325 -322c2 4 7 12 3 15c-3 2 -10 2 -13 -5s0 -11 -5 -9s-7 -3 -6 -4c1 -2 3 -3 5 -4c0 -2 -4 -8 2 -7c4 1 12 10 14 14zM344 -277v-0v-0zM403 -251c0 -0 -2 -0 0 -0v-0zM224 -416c124 -0 224 100 224 224s-100 224 -224 224s-224 -100 -224 -224s100 -224 224 -224zM141 -19l8 4c3 1 6 2 10 3c14 5 28 8 43 10c28 3 56 1 83 -8c15 -5 30 -11 43 -20c6 -4 6 -16 10 -24c8 -16 -2 -33 12 -47c12 -14 4 -19 4 -34c0 -10 8 -18 4 -29c-1 -4 -7 3 -9 -1c-5 -7 -21 -1 -28 -2c-13 -2 -24 -14 -33 -23c-5 -5 0 -20 1 -26c4 -15 0 -33 19 -38c5 -1 5 -9 10 -11c5 -1 10 -3 15 -4c9 -1 17 2 26 2c10 -0 14 5 22 11c7 6 13 3 22 5c7 -0 0 -5 -2 -8c-3 -2 -6 -2 -8 -2c-16 -4 -23 -22 -36 -30c-6 -3 -9 -2 -11 -0c-1 1 1 12 1 12c-1 3 -10 4 -13 5c-9 2 -29 -17 -15 -22c4 -1 27 -5 24 -15c-3 -6 2 -13 -5 -14c-8 -1 -7 -7 -15 -8c-5 -1 -5 -11 -5 -14c0 -9 2 -6 9 -7c-17 -11 -37 -19 -57 -24c-1 3 -5 12 -8 12c-5 1 -6 -0 -9 3c-9 10 -16 28 -25 7c-4 -11 5 -19 2 -28h-6h-3c6 12 -5 18 -8 19c-8 -0 -10 -5 -17 -4c-4 1 -7 -4 -11 -2s-13 8 -14 12c-3 12 6 13 14 6c6 -6 17 -12 25 -6c6 5 5 9 5 14s-1 18 -9 16c-4 -1 -7 -6 -11 -3c-8 7 -18 6 -29 9c-10 2 -16 6 -25 9c-8 3 -11 4 -12 12c0 2 0 14 -3 15c-5 2 -8 -22 -22 -20c-12 1 -30 13 -25 28c2 5 28 3 10 14c-2 1 2 17 2 20c1 8 13 18 21 10c6 -6 6 -5 14 -2c15 8 33 15 45 27c6 6 9 24 17 28c9 5 19 5 26 14c6 7 -2 19 -8 23c-4 2 -12 24 -16 29c-2 4 -12 6 -16 7c-3 -0 -7 9 -9 11c-7 7 -8 13 -17 19c-18 12 -22 23 -18 44c2 8 5 13 11 16zM100 -46l2 2c7 6 15 11 23 16c-21 -21 -23 -49 -21 -78l3 -24c1 -3 -4 -7 -4 -11c0 -10 0 -5 -8 -13c-4 -4 -10 -11 -12 -17c-7 -16 1 -30 10 -43c9 -14 -7 -20 -10 -32c-1 -6 -7 -6 -6 -12c1 -7 -4 -5 -9 -9c-12 -8 -1 -20 -7 -26c-43 70 -36 162 16 224c1 1 0 1 1 2h1c3 4 6 8 9 11s7 6 10 9z"></path>
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" relative border-[2px] border-[#006cb7] p-4 shadow-md bg-white ">
            <div className="pt-5">
              <h3 className="text-2xl font-semibold text-blue-600 text-center">
                24/7 SUPPORT
              </h3>
              <p className="mt-2 text-[#006cb7] font-thin text-center">
                Our dedicated team is always available to assist you with any
                questions or concerns, ensuring you're never alone on the road.
              </p>
            </div>

            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="8 -440 496 496"
                data-icon="fa-solid-life-ring"
                className="w-16 h-16 p-1 fill-[#006CB7] bg-white "
                preserveAspectRatio="xMidYMid"
              >
                <path d="M256 -440C119.033 -440 8 -328.967 8 -192S119.033 56 256 56S504 -55.033 504 -192S392.967 -440 256 -440zM429.696 -320.441L366.297 -257.042C355.31 -275.601 339.627 -291.294 321.042 -302.297L384.441 -365.696A218.396 218.396 0 0 0 429.696 -320.441zM256 -96C202.981 -96 160 -138.981 160 -192S202.981 -288 256 -288S352 -245.019 352 -192S309.019 -96 256 -96zM127.559 -365.696L190.958 -302.297C172.399 -291.31 156.706 -275.627 145.703 -257.042L82.304 -320.441A218.372 218.372 0 0 0 127.559 -365.696zM82.304 -63.559L145.703 -126.958C156.69 -108.399 172.373 -92.706 190.958 -81.703L127.559 -18.304A218.396 218.396 0 0 0 82.304 -63.559zM384.441 -18.304L321.042 -81.703C339.601 -92.69 355.294 -108.373 366.297 -126.958L429.696 -63.559A218.403 218.403 0 0 0 384.441 -18.304z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW SECTION */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row">
          {/* Review Text */}
          <div className="w-1/2 bg-[#006CB7] text-white p-16">
            <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
              Fantastic Service
            </h2>
            <p className="mt-4 text-lg text-center md:text-left ">
              "Before Keeptruckin Loads, I was constantly juggling load boards,
              negotiating rates, and dealing with paperwork. It was exhausting
              and time-consuming. Since partnering with them, my business has
              seen a significant improvement. Their team of dispatchers are
              incredibly efficient, finding me high-paying loads consistently. I
              no longer have to worry about empty miles or low-paying freight.
              Keeptruckin Loads has truly taken a weight off my shoulders,
              allowing me to focus on what I do best: driving. I highly
              recommend their services to any truck owner looking to increase
              their revenue and streamline their operations."
            </p>
            <p className="mt-6 font-semibold text-center md:text-left">
              Harrison Cole
            </p>
            <p className="italic text-center md:text-left">
              Owner, 9 Tales Trucking
            </p>
          </div>

          {/* Review Image */}
          <div className="w-1/2 flex">
            <img
              src={assets.review}
              alt="Client"
              className="shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* LOGOS SECTION */}
      <div className="flex flex-wrap justify-center items-center gap-10 py-6 mt-8 bg-white px-4 sm:px-8">
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
