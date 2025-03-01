import React from "react";
import { assets } from "../utils/assets";

const ServicesSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative min-h-[80vh] md:h-screen bg-cover bg-center flex items-center justify-center text-white px-4 sm:px-8"
        style={{ backgroundImage: `url(${assets.footerbg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center">
          <img
            src={assets.logo}
            className="h-20 md:h-28 my-6 mx-auto"
            alt="logo"
          />
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            STATES WIDE <br className="hidden md:block" /> DISPATCH
          </h1>
          <h2 className="text-2xl md:text-3xl mt-2">SERVICE</h2>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="text-center py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-blue-600 flex justify-center items-center gap-2">
          <span className="text-4xl">&#9776;</span> OUR SERVICES
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 sm:px-12 md:px-20 lg:px-32">
          {/* Shipping Solutions */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
