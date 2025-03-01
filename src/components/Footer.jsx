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

      <div className="relative z-10 p-6">
        {/* Title */}
        <h2 className="flex items-center justify-center text-center gap-2 text-3xl md:text-[52px] font-bold text-white">
          <FaBars />
          <span>Get in Touch</span>
        </h2>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-6">
          <img src={assets.logo} className="w-40 md:w-[208px]" alt="Logo" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex gap-3 items-center">
              <FaEnvelope className="text-2xl md:text-[28px] text-[#006CB7]" />
              <div className="flex flex-col text-white text-sm">
                <span>Email</span>
                <a href="mailto:info@ktloads.com">info@ktloads.com</a>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <FaPhone className="text-2xl md:text-[28px] text-[#006CB7]" />
              <div className="flex flex-col text-white text-sm">
                <span>Phone</span>
                <a href="tel:+888-258-5623">+888-258-5623</a>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <FaClock className="text-2xl md:text-[28px] text-[#006CB7]" />
              <div className="flex flex-col text-white text-sm">
                <span>Opening Time</span>
                <p>Mo – Fr: 8am – 5pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Form Section */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53084.35163011842!2d-118.281988!3d33.740712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd3639f8a0fad5%3A0x120090cd835a1606!2s425%20S%20Palos%20Verdes%20St%2C%20San%20Pedro%2C%20CA%2090731!5e0!3m2!1sen!2sus!4v1740756680781!5m2!1sen!2sus"
            className="w-full md:w-[450px] h-[300px] md:h-[450px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <form className="w-full max-w-lg bg-white bg-opacity-10 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border-b-2 border-dotted text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b-2 border-dotted text-white focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-transparent border-b-2 border-dotted text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company"
                className="bg-transparent border-b-2 border-dotted text-white focus:outline-none"
              />
            </div>

            <select className="bg-transparent border-b-2 border-dotted text-white w-full mt-4 focus:outline-none">
              <option className="text-black" disabled selected hidden>
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

            <textarea
              name="Message"
              rows={4}
              placeholder="Message"
              className="bg-transparent border-b-2 border-dotted text-white w-full mt-4 focus:outline-none"
            ></textarea>

            <div className="flex items-center gap-4 mt-4">
              <input type="checkbox" />
              <a href="#" className="text-white underline hover:text-gray-300">
                I have read and understand the privacy policy.
              </a>
            </div>

            <input
              type="submit"
              value="Submit"
              className="bg-[#006CB7] text-white p-2 mt-4 w-full cursor-pointer hover:bg-[#005D9E]"
            />
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#3A3C3B] relative z-10 p-4 flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <div className="flex flex-col md:flex-row gap-2 text-center md:text-left">
          <span>© KeepTruckin Loads</span>
          <a href="#" className="hover:underline">
            | Legal Notice
          </a>
          <a href="#" className="hover:underline">
            | Privacy
          </a>
        </div>

        <div className="flex gap-2 mt-4 md:mt-0">
          <FaFacebookF className="cursor-pointer hover:text-gray-400" />
          <FaXTwitter className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaGooglePlusG className="cursor-pointer hover:text-gray-400" />
          <FaWhatsapp className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
