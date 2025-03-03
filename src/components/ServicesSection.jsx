import React from "react";
import { assets } from "../utils/assets";

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
        <h2 className="text-6xl font-bold text-blue-600 flex justify-center items-center gap-2 py-8">
          <span className="text-6xl">&#9776;</span> OUR SERVICES
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-2 sm:px-12 md:px-20 lg:px-56">
          {/* Shipping Solutions */}
          <div className="bg-white shadow-lg  overflow-hidden">
            <img
              src={assets.post1}
              alt="Shipping Solutions"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-600">
                Shipping Solutions
              </h3>
              <p className="mt-2 text-gray-600">
                Seamlessly connect shippers with reliable carriers through our
                efficient and innovative shipping solutions.
              </p>
            </div>
          </div>

          {/* Partnerships */}
          <div className="bg-white shadow-lg  overflow-hidden">
            <img
              src={assets.post2}
              alt="Partnerships"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-600">Partnerships</h3>
              <p className="mt-2 text-gray-600">
                Build lasting partnerships with trusted carriers and shippers,
                fostering a collaborative and successful network.
              </p>
            </div>
          </div>

          {/* Freight Safety */}
          <div className="bg-white shadow-lg  overflow-hidden">
            <img
              src={assets.post3}
              alt="Freight Safety"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-600">
                Freight Safety
              </h3>
              <p className="mt-2 text-gray-600">
                Prioritize freight safety with our commitment to best practices
                and a focus on driver well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
