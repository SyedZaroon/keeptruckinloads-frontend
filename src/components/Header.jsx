import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import { assets } from "../utils/assets";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-3 relative z-50 md:my-0 my-4">
      <div>
        <img src={assets.logo} className="h-[82px]" alt="Logo" />
      </div>

      <div className="md:flex hidden items-center gap-4 font-medium uppercase">
        <Link
          to="/"
          className="text-white border-t-2 font-bold border-transparent hover:border-t-2 hover:border-white"
        >
          Home
        </Link>
        <Link
          to="/aboutus"
          className="text-white border-t-2 font-bold border-transparent hover:border-t-2 hover:border-white"
        >
          About Us
        </Link>
        <Link
          to="/services"
          className="text-white border-t-2 font-bold border-transparent hover:border-t-2 hover:border-white"
        >
          Services
        </Link>
        <Link
          to="/testimonials"
          className="text-white border-t-2 font-bold border-transparent hover:border-t-2 hover:border-white"
        >
          Testimonials
        </Link>
        <Link
          to="/contact"
          className="text-white border-t-2 font-bold border-transparent hover:border-t-2 hover:border-white"
        >
          Contact
        </Link>
      </div>

      <div className="md:block hidden">
        <button className="px-[10px] py-[6px] border-[1px] hover:shadow-md hover:translate-y-1 transition-all text-white">
          GET A LOAD
        </button>
      </div>

      <div className="md:hidden flex gap-5">
        <FaPhone className="text-3xl text-white" />
        <FaBars
          className="text-3xl text-white cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <div
        className={`fixed inset-0 bg-[#006CB7] transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col items-center justify-center z-50`}
      >
        <FaTimes
          className="text-white text-3xl absolute top-5 right-5 cursor-pointer"
          onClick={toggleMenu}
        />

        <div className="flex flex-col items-center gap-5">
          <Link
            to="/"
            className="text-white border-t-2 font-bold border-transparent hover:border-t-2 hover:border-white"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="text-white border-t-2 font-bold border-transparent hover:border-t-2 hover:border-white"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-white border-t-2 font-bold border-transparent hover:border-t-2 hover:border-white"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/testimonials"
            className="text-white border-t-2 font-bold border-transparent hover:border-t-2 hover:border-white"
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="text-white border-t-2 font-bold border-transparent hover:border-t-2 hover:border-white"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
