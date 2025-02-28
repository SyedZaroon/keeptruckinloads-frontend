import React from "react";
import { assets } from "../utils/assets";

const AboutSection = () => {
  return (
    <>
      <section className="text-center py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-blue-600 flex justify-center items-center gap-2">
          <span className="text-4xl">&#9776;</span> ABOUT US
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Keeptruckin Loads is your partner in maximizing trucking profits. We
          offer a comprehensive dispatch service, including load sourcing, rate
          negotiation, booking confirmations, fuel surcharge calculations, and
          back-office support. Our goal is to streamline your operations,
          increase your revenue, and improve your overall trucking experience.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8 mx-20">
          <div className="border p-6 rounded-lg shadow-md bg-white">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-blue-600">TIMELY DELIVERY</h3>
            <p className="mt-2 text-gray-600">
              We prioritize efficient and on-time deliveries, building strong
              relationships with our carriers and ensuring customer
              satisfaction.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-md bg-white">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              🌍
            </div>
            <h3 className="text-xl font-bold text-blue-600">
              NO STATE LIMITATIONS
            </h3>
            <p className="mt-2 text-gray-600">
              We connect you with loads across the entire United States,
              expanding your reach and maximizing your earning potential.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-md bg-white">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              🛟
            </div>
            <h3 className="text-xl font-bold text-blue-600">24/7 SUPPORT</h3>
            <p className="mt-2 text-gray-600">
              Our dedicated team is always available to assist you with any
              questions or concerns, ensuring you're never alone on the road.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 bg-blue-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold">
              &#8220;Fantastic Service&#8221;
            </h2>
            <p className="mt-4 text-lg">
              "Before Keeptruckin Loads, I was constantly juggling load boards,
              negotiating rates, and dealing with paperwork. It was exhausting
              and time-consuming. Since partnering with them, my business has
              seen a significant improvement. Their team of dispatchers are
              incredibly efficient, finding me high-paying loads consistently. I
              highly recommend their services to any truck owner looking to
              increase their revenue and streamline their operations."
            </p>
            <p className="mt-6 font-semibold">Harrison Cole</p>
            <p className="italic">Owner, 9 Tales Trucking</p>
          </div>
          <div className="md:w-1/2 flex justify-center p-6">
            <img
              src={assets.review}
              alt="Client"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center gap-6 py-6 mt-8 bg-white">
        <img src={assets.helpinghand} alt="logo1" className="h-14" />
        <img src={assets.logo2} alt="logo2" className="h-14" />
        <img src={assets.logo3} alt="logo3" className="h-14" />
        <img src={assets.earth4} alt="logo4" className="h-14" />
        <img src={assets.lotusflowe5} alt="logo4" className="h-14" />
        <img src={assets.rocket6} alt="logo5" className="h-14" />
      </div>
    </>
  );
};

export default AboutSection;
