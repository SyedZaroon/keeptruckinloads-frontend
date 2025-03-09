import React from "react";
import { assets } from "../utils/assets";

const ContactUs = () => {
  return (
    <>
      <div
        className="bg-[#006CB7] md:p-24 md:flex justify-between md:items-center md:flex-row flex-col p-12 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.contactimg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Overlay for better readability */}
        <div className="md:w-[40%] relative z-10">
          <h2 className="text-4xl md:text-4xl font-bold text-left text-white">
            Contact Us
          </h2>
          <p className="text-white my-4">
            {/* Keeptruckin Loads is your partner in maximizing trucking profits. We
            offer a comprehensive dispatch service, including load sourcing,
            rate negotiation, booking confirmations, fuel surcharge
            calculations, and back-office support. Our goal is to streamline
            your operations, increase your revenue, and improve your overall
            trucking experience. */}
          </p>
          <a
            href=""
            className="hover:shadow-md hover:translate-y-1 transition-all text-white"
          >
            Home // <span> Contact</span>
          </a>

          {/* <a
            href=""
            className="px-[10px] py-[6px] border-[1px] hover:shadow-md hover:translate-y-1 transition-all text-white"
          >
            Get Started
          </a> */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
        {/* Left Side: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={assets.contactimg} // Replace with your actual image path
            alt="COVID-19 Test"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={assets.servicearea} // Replace with your actual image path
            alt="COVID-19 Test"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 w-full p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">GET IN TOUCH</h2>
          <p className="text-gray-600 mb-4">
            Need any help jusct send a message via our email address below or
            call us at <strong>NO</strong>.
          </p>

          <form className="space-y-4">
            {/* <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> */}
            <input
              type="text"
              placeholder="Full Name"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="email"
              placeholder="Email"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="tel"
              placeholder="Phone"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="text"
              placeholder="Based (City/State)"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="text"
              placeholder="Truck"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="text"
              placeholder="Preferred states"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="number"
              placeholder="Preferred weight (lbs)"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="number"
              placeholder="Wake up/FU"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="number"
              placeholder="MC number"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <button className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* <div class="bg-gray-200 my-6 p-6 mx-auto  rounded-md shadow-md w-full max-w-xl">
        <h2 class="text-2xl md:text-4xl font-bold text-left mb-4 ">
          GET A QUOTE
        </h2>
        <form action="#" method="POST" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="email"
              placeholder="Email"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="text"
              placeholder="Based (City/State)"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Truck"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="text"
              placeholder="Preferred states"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Preferred weight (lbs)"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="text"
              placeholder="Wake up/FU"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Next Available slot"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
            <input
              type="text"
              placeholder="MC number"
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:[#006CB7]"
            />
          </div>

          <button
            type="submit"
            class="bg-[#006CB7] text-white text-center p-2 hover:bg-[#005D9E] cursor-pointer w-full"
          >
            SEND
          </button>
        </form>
      </div> */}
    </>
  );
};

export default ContactUs;
