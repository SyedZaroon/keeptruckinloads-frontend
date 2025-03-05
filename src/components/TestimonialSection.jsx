import React from "react";
import { assets } from "../utils/assets";

const TestimonialSection = () => {
  return (
    <div>
      <section className="w-full">
        <div className="flex flex-col-reverse md:flex-row">
          {/* Review Text */}
          <div className="w-full bg-[#006CB7] text-white px-2 py-16 lg:px-16 ">
            <h2 className="text-2xl md:text-4xl font-bold text-left">
              Fantastic Service
            </h2>
            <p className="mt-1 text-lg font-medium text-left leading-5">
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
            <p className="mt-6 font-light text-left">Harrison Cole</p>
            <p className="italic font-light text-left">
              Owner, 9 Tales Trucking
            </p>
          </div>

          {/* Review Image */}
          <div className="w-full">
            <img
              src={assets.review}
              alt="Client"
              className="w-full lg:h-[501px] object-cover  "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
