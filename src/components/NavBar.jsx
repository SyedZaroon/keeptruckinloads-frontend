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
    <div className="md:flex justify-between text-sm items-center border-b-[1px] border-[#ABABAB] max-w-[850px] m-auto my-3 z-50 relative pb-2 py-1 hidden">
      <div className="flex items-center gap-2">
        <FaPhoneAlt className="text-white" />
        <span className="text-white">+888-258-5623</span>
      </div>

      <div className="flex items-center gap-3">
        <FaEnvelope className="text-white" />
        <span className="text-white">info@ktloads.com</span>
      </div>

      <div className="flex items-center gap-[15px]">
        <FaFacebookF className="text-white" />
        <FaTwitter className="text-white" />
        <FaInstagram className="text-white" />
        <FaGooglePlusG className="text-white" />
        <FaLinkedinIn className="text-white" />
        <FaWhatsapp className="text-white" />
      </div>
    </div>
  );
};

export default NavBar;
