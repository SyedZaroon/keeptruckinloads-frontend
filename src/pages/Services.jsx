import React, { useRef } from "react";
import { assets } from "../utils/assets";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div
        className="bg-[#006CB7] md:py-36 md:px-28 md:flex justify-between md:items-center md:flex-row flex-col p-12 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.contactimg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Overlay for better readability */}
        <div className="md:w-[40%] relative z-10">
          <h2 className="text-8xl md:text-6xl font-extrabold tracking-wide text-left text-white">
            Services
          </h2>
          <p className="text-white my-4"></p>
          <a
            href=""
            className="hover:shadow-md hover:translate-y-1 transition-all text-white"
          >
            Home // <span> Services</span>
          </a>
        </div>
      </div>
      {/* SERVICES SECTION */}
      <section className="text-center pt-12 pb-24  bg-white">
        <h2 className="text-[44px] lg:text-[64px] font-bold text-[#006CB7] flex justify-center items-center ">
          <span className="lg:txt-[64px] text-[44px] font-extrabold leading-[44px] ">
            Our Services
          </span>
        </h2>
        <p className="py-4 px-56">
          At KeepTruckin Loads, we offer a range of logistics and freight
          management services designed to streamline your operations and
          maximize efficiency. Our expertise ensures safe, compliant, and
          cost-effective transport solutions tailored to your business needs.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-2 sm:px-12 md:px-20 lg:px-28">
          {/* Shipping Solutions */}
          <div className="bg-white group relative transition-all flex flex-col ">
            <img
              src={assets.post1}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col  bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7] group-hover:text-white">
                Shipping Solutions
              </h3>
              <p className="text-gray-600 text-left font-light group-hover:text-white">
                Seamlessly connect shippers with reliable carriers through our
                efficient and innovative shipping solutions.
              </p>
              <Link className="text-left text-[#006cb7] opacity-0 group-hover:text-white group-hover:opacity-100 ">
                Read More
              </Link>
            </div>
          </div>

          {/* Partnerships */}
          <div className="bg-white group relative transition-all flex flex-col  ">
            <img
              src={assets.post2}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col  bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7] group-hover:text-white">
                Partnerships
              </h3>
              <p className="text-gray-600 text-left font-light group-hover:text-white">
                Build lasting partnerships with trusted carriers and shippers,
                fostering a collaborative and successful network.
              </p>
              <Link className="text-left text-[#006cb7] opacity-0 group-hover:text-white group-hover:opacity-100 ">
                Read More
              </Link>
            </div>
          </div>

          {/* {Freight Safety} */}
          <div className="bg-white group relative transition-all flex flex-col  ">
            <img
              src={assets.post3}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7] group-hover:text-white">
                Freight Safety
              </h3>
              <p className="text-gray-600 text-left font-light group-hover:text-white">
                Prioritize freight safety with our commitment to best practices
                and a focus on driver well-being.
              </p>
              <Link className="text-left text-[#006cb7] opacity-0 group-hover:text-white group-hover:opacity-100 ">
                Read More
              </Link>
            </div>
          </div>

          {/* Compliance & Safety */}
          <div className="bg-white group relative transition-all flex flex-col ">
            <img
              src={assets.post1}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col  bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7] group-hover:text-white">
                Compliance & Safety
              </h3>
              <p className="text-gray-600 text-left font-light group-hover:text-white">
                Seamlessly connect shippers with reliable carriers through our
                efficient and innovative shipping solutions.
              </p>
              <Link className="text-left text-[#006cb7] opacity-0 group-hover:text-white group-hover:opacity-100 ">
                Read More
              </Link>
            </div>
          </div>

          {/* Fuel Optimization */}
          <div className="bg-white group relative transition-all flex flex-col  ">
            <img
              src={assets.post2}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col  bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7] group-hover:text-white">
                Fuel Optimization
              </h3>
              <p className="text-gray-600 text-left font-light group-hover:text-white">
                Build lasting partnerships with trusted carriers and shippers,
                fostering a collaborative and successful network.
              </p>
              <Link className="text-left text-[#006cb7] opacity-0 group-hover:text-white group-hover:opacity-100 ">
                Read More
              </Link>
            </div>
          </div>

          {/* Reavenue Growth */}
          <div className="bg-white group relative transition-all flex flex-col  ">
            <img
              src={assets.post3}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7] group-hover:text-white">
                Reavenue Growth
              </h3>
              <p className="text-gray-600 text-left font-light group-hover:text-white">
                Prioritize freight safety with our commitment to best practices
                and a focus on driver well-being.
              </p>
              <Link className="text-left text-[#006cb7] opacity-0 group-hover:text-white group-hover:opacity-100 ">
                Read More
              </Link>
            </div>
          </div>

          {/* Dispatch Efficiency */}
          <div className="bg-white group relative transition-all flex flex-col ">
            <img
              src={assets.post1}
              alt="Dispatch Efficiency"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col  bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7] group-hover:text-white">
                Dispatch Efficiency
              </h3>
              <p className="text-gray-600 text-left font-light group-hover:text-white">
                Seamlessly connect shippers with reliable carriers through our
                efficient and innovative shipping solutions.
              </p>
              <Link className="text-left text-[#006cb7] opacity-0 group-hover:text-white group-hover:opacity-100 ">
                Read More
              </Link>
            </div>
          </div>

          {/* Financial Forecasting */}
          <div className="bg-white group relative transition-all flex flex-col  ">
            <img
              src={assets.post2}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col  bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7] group-hover:text-white">
                Financial Forecasting
              </h3>
              <p className="text-gray-600 text-left font-light group-hover:text-white">
                Build lasting Financial Forecasting with trusted carriers and
                shippers, fostering a collaborative and successful network.
              </p>
              <Link className="text-left text-[#006cb7] opacity-0 group-hover:text-white group-hover:opacity-100 ">
                Read More
              </Link>
            </div>
          </div>

          {/* Driver Performance */}
          <div className="bg-white group relative transition-all flex flex-col  ">
            <img
              src={assets.post3}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7] group-hover:text-white">
                Driver Performance
              </h3>
              <p className="text-gray-600 text-left font-light group-hover:text-white">
                Prioritize freight safety with our commitment to best practices
                and a focus on driver well-being.
              </p>
              <Link className="text-left text-[#006cb7] opacity-0 group-hover:text-white group-hover:opacity-100 ">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
