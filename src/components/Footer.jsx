import React from "react";
import { assets } from "../utils/assets";
import {
  FaBars,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${assets.footerbg})` }}
    >
      <div className="absolute bg-black opacity-80 inset-0"></div>

      <div className="relative z-10 p-3">
        <div className="my-6">
          <h2 className="flex items-center justify-center text-center gap-1 text-[30px] font-bold text-white md:text-[50px] ">
            <FaBars />
            <span>Get in Touch</span>
          </h2>

          <div className="flex flex-col gap-10 justify-center items-center mt-5 lg:flex-row ">
            <img src={assets.logo} className="w-[208px]" alt="Logo" />

            <div className="flex flex-col md:flex-row justify-center py-12 items-center gap-16">
              <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
                <FaEnvelope className="text-[28px] text-[#006CB7]" />
                <div className="flex justify-center items-center md:items-start flex-col text-white text-sm">
                  <span>Email</span>
                  <a href="">info@ktloads.com</a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
                <FaPhone className="text-[28px] text-[#006CB7]" />
                <div className="flex justify-center items-center md:items-start flex-col text-white text-sm ">
                  <span>Phone</span>
                  <a href="">+888-258-5623</a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-5 items-center">
                <FaClock className="text-[28px] text-[#006CB7]" />
                <div className="flex justify-center items-center md:items-start flex-col text-white text-sm">
                  <span>Opening Time</span>
                  <p>Mo – Fr: 8am – 5pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center pt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53084.35163011842!2d-118.281988!3d33.740712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd3639f8a0fad5%3A0x120090cd835a1606!2s425%20S%20Palos%20Verdes%20St%2C%20San%20Pedro%2C%20CA%2090731!5e0!3m2!1sen!2sus!4v1740756680781!5m2!1sen!2sus"
              className="h-[450px] border-0 max-w-[450px] w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div>
              <form action="" className="flex flex-col gap-7">
                <div className="flex gap-10 flex-col md:flex-row">
                  <input
                    type="name"
                    placeholder="Name"
                    className=" bg-transparent focus:outline-none border-b-2 border-dotted text-white "
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className=" bg-transparent focus:outline-none border-b-2 border-dotted text-white "
                  />
                </div>
                <div className="flex gap-10 flex-col">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className=" bg-transparent focus:outline-none border-b-2 border-dotted text-white "
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className=" bg-transparent focus:outline-none border-b-2 border-dotted text-white "
                  />
                </div>
                <div className="">
                  <select className="bg-transparent focus:outline-none border-b-2 border-dotted text-white w-full">
                    <option
                      className="text-black"
                      // value="basic"
                      defaultValue="basic"
                      disabled
                      selected
                      hidden
                    >
                      Select a Service
                    </option>
                    <option className="text-black" value="basic">
                      Basic
                    </option>
                    <option className="text-black" value="premium">
                      Premium
                    </option>
                    <option className="text-black" value="pro">
                      Pro
                    </option>
                  </select>
                </div>
                <textarea
                  name="Message"
                  id=""
                  rows={4}
                  placeholder="Message"
                  className="bg-transparent focus:outline-none border-b-2 border-dotted text-white w-full"
                ></textarea>
                <div className="flex items-center gap-4">
                  <input type="checkbox" />
                  <a
                    href=""
                    className="text-white hover:[ decoration-1 underline] "
                  >
                    I have read and understand the privacy policy.
                  </a>
                </div>
                <input
                  type="sumbit"
                  value="Submit"
                  className="bg-[#006CB7] text-white text-center p-2 hover:bg-[#005D9E] cursor-pointer "
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#3A3C3B] relative z-10 p-4 flex justify-around items-center flex-wrap gap-5 ">
        <div className="flex gap-2 text-white text-sm ">
          <span>© KeepTruckin Loads</span>
          <a
            href=""
            className=" border-b-2 border-b-transparent    border-white hover:border-b-2 hover:border-white "
          >
            | Legal Notice
          </a>
          <a
            href=""
            className=" border-b-2 border-b-transparent  border-white hover:border-b-2 hover:border-white "
          >
            | Privacy
          </a>
        </div>

        <div className="flex items-center  gap-2">
          <FaFacebookF className="text-white cursor-pointer hover:text-[#f7f7f7] " />
          <FaXTwitter className="text-white cursor-pointer hover:text-[#f7f7f7] " />
          <FaInstagram className="text-white cursor-pointer hover:text-[#f7f7f7] " />
          <FaGooglePlusG className="text-white cursor-pointer hover:text-[#f7f7f7] " />
          <FaWhatsapp className="text-white cursor-pointer hover:text-[#f7f7f7] " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
