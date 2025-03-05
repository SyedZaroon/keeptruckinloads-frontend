import React from "react";
import { assets } from "../utils/assets";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-[150vh] md:h-screen bg-cover bg-center flex items-center justify-center text-white px-4 sm:px-8"
        style={{ backgroundImage: `url(${assets.footerbg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center">
          <img
            src={assets.logo}
            className="h-20 md:h-48 my-6 mx-auto"
            alt="logo"
          />
          <h1 className="text-4xl text-[#E1E1E1] pt-44 md:text-7xl font-bold leading-tight">
            STATES WIDE <br className="hidden md:block" /> DISPATCH
          </h1>
          <div className="pt-12">
            <button className="px-[10px] py-[6px] font-medium border-[1px] hover:shadow-md hover:translate-y-1 transition-all text-white">
              GET A LOAD
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="text-center py-12 px-6 bg-white">
        <h2 className="text-[44px] lg:text-[64px] font-bold text-[#006CB7] flex justify-center items-center ">
          <VscThreeBars className="stroke-[0.5px] rounded-md " />
          <span className="lg:txt-[64px] text-[44px] font-bold leading-[44px] ">
            {" "}
            Our Services
          </span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-2 sm:px-12 md:px-20 lg:px-56">
          {/* Shipping Solutions */}
          <div className="bg-white group relative transition-all flex  ">
            <img
              src={assets.post1}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col absolute bottom-0 bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
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
          {/* <div className="bg-white overflow-hidden">
            <img
              src={assets.post2}
              alt="Partnerships"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col ">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7]">
                Partnerships
              </h3>
              <p className="text-gray-600 text-left font-light ">
                Build lasting partnerships with trusted carriers and shippers,
                fostering a collaborative and successful network.
              </p>
              <Link className="text-left text-[#006cb7] font-light hidden hover:underline  ">
                Read More
              </Link>
            </div>
          </div> */}

          <div className="bg-white group relative transition-all flex  ">
            <img
              src={assets.post2}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col absolute bottom-0 bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
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

          {/* Freight Safety */}
          <div className="bg-white overflow-hidden">
            <img
              src={assets.post3}
              alt="Freight Safety"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col ">
              <h3 className="text-[28px] text-left font-bold text-[#006CB7]">
                Freight Safety
              </h3>
              <p className="text-gray-600 text-left font-light ">
                Prioritize freight safety with our commitment to best practices
                and a focus on driver well-being.
              </p>
              <Link className="text-left text-[#006cb7] font-light hidden hover:underline  ">
                Read More
              </Link>
            </div>
          </div>

          {/* <div className="bg-white group relative transition-all flex  ">
            <img
              src={assets.post3}
              alt="Shipping Solutions"
              className="w-full h-52 object-cover"
            />
            <div className="p-4 flex flex-col absolute bottom-0 bg-white group-hover:bg-[#006CB7] transition-all duration-500 ease-in-out transform group-hover:translate-y-[-80px]">
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
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
