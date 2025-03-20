import React from "react";
import { FaEnvelope, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import {
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaVimeoV,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="bg-[#0D2A41]">
      <div className="md:flex justify-between items-center  text-white max-w-[1220px] m-auto py-2 ">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="" />
            <span className="">+888-258-5623</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="" />
            <span className="">info@ktloads.com</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <FaFacebookF className="cursor-pointer hover:text-gray-400" />
          <FaTwitter className="cursor-pointer hover:text-gray-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
          <FaPinterestP className="cursor-pointer hover:text-gray-400" />
          <FaVimeoV className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
