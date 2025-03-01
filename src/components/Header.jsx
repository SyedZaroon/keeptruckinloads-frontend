import React from "react";
import { assets } from "../utils/assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-3 relative z-50 ">
      <div>
        <img src={assets.logo} />
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/"
          className=" border-t-2 border-t-transparent text-white  hover:border-t-2 hover:border-t-white"
        >
          Home
        </Link>
        <Link
          to="/aboutus"
          className=" border-t-2 border-t-transparent text-white  hover:border-t-2 hover:border-t-white"
        >
          About us
        </Link>
        <Link
          to="/services"
          className=" border-t-2 border-t-transparent text-white  hover:border-t-2 hover:border-t-white"
        >
          Services
        </Link>
        <Link
          to="/trstimonials"
          className=" border-t-2 border-t-transparent text-white  hover:border-t-2 hover:border-t-white"
        >
          Testimonials
        </Link>
        <Link
          to="/contact"
          className=" border-t-2 border-t-transparent text-white  hover:border-t-2 hover:border-t-white"
        >
          Contact Us
        </Link>
      </div>

      <div>
        <button className="p-2 border-2 hover:shadow-md hover:translate-y-1 transition-all text-white">
          Get a Load
        </button>
      </div>
    </div>
  );
};

export default Header;
