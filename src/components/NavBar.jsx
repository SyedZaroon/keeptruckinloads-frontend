import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="md:flex justify-between text-sm items-center border-b-[1px] border-[#ABABAB] max-w-[944px] m-auto my-3 z-50 relative pb-2 py-1 hidden">
      <div className="flex items-center gap-2">
        <FaPhoneAlt className="text-white" />
        <span className="text-white text-[16px] ">+888-258-5623</span>
      </div>

      <div className="flex items-center gap-3">
        <FaEnvelope className="text-white" />
        <span className="text-white text-[16px] ">info@ktloads.com</span>
      </div>

      <div className="flex items-center gap-[15px]">
        <FaFacebookF className="text-white text-[16px] " />
        <FaTwitter className="text-white text-[16px] " />
        <FaInstagram className="text-white text-[16px] " />
        <FaGooglePlusG className="text-white text-[16px] " />
        <FaLinkedinIn className="text-white text-[16px] " />
        <FaWhatsapp className="text-white text-[16px] " />
      </div>
    </div>
  );
};

export default NavBar;
