import React from "react";
import { assets } from "../utils/assets";

const Services = () => {
  return (
    <>
      <section className="text-center py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-blue-600 flex justify-center items-center gap-2">
          <span className="text-4xl">&#9776;</span> OUR SERVICES
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 mx-56">
          {/* Shipping Solutions */}
          <div className="bg-white">
            <img
              src={assets.post1}
              alt="Shipping Solutions"
              className="w-80 h-52  object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold text-blue-600">
              Shipping Solutions
            </h3>
            <p className="mt-2 text-gray-600">
              Seamlessly connect shippers with reliable carriers through our
              efficient and innovative shipping solutions.
            </p>
          </div>
          {/* Partnerships */}
          <div className="bg-white">
            <img
              src={assets.post2}
              alt="Partnerships"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold text-blue-600">
              Partnerships
            </h3>
            <p className="mt-2 text-gray-600">
              Build lasting partnerships with trusted carriers and shippers,
              fostering a collaborative and successful network.
            </p>
          </div>
          {/* Freight Safety */}
          <div className="bg-white">
            <img
              src={assets.post3}
              alt="Freight Safety"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold text-blue-600">
              Freight Safety
            </h3>
            <p className="mt-2 text-gray-600">
              Prioritize freight safety with our commitment to best practices
              and a focus on driver well-being.
            </p>
          </div>
          {/* Shipping Solutions */}
          <div className="bg-white">
            <img
              src={assets.post1}
              alt="Shipping Solutions"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold text-blue-600">
              Shipping Solutions
            </h3>
            <p className="mt-2 text-gray-600">
              Seamlessly connect shippers with reliable carriers through our
              efficient and innovative shipping solutions.
            </p>
          </div>
          {/* Partnerships */}
          <div className="bg-white">
            <img
              src={assets.post2}
              alt="Partnerships"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold text-blue-600">
              Partnerships
            </h3>
            <p className="mt-2 text-gray-600">
              Build lasting partnerships with trusted carriers and shippers,
              fostering a collaborative and successful network.
            </p>
          </div>
          {/* Freight Safety */}
          <div className="bg-white">
            <img
              src={assets.post3}
              alt="Freight Safety"
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-bold text-blue-600">
              Freight Safety
            </h3>
            <p className="mt-2 text-gray-600">
              Prioritize freight safety with our commitment to best practices
              and a focus on driver well-being.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
