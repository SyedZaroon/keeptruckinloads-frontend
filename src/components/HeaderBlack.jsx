import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import { assets } from "../utils/assets";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to check if the link is active
  const isActive = (path) =>
    location.pathname === path ? "border-black" : "border-transparent";

  return (
    <div className="flex items-center justify-between px-3 relative z-50 md:my-4 my-4">
      <div>
        <img src={assets.logo} alt="Logo" />
      </div>

      <div className="md:flex hidden items-center gap-6">
        {["/", "/About", "/Services", "/Testimonials", "/Contact"].map(
          (path, index) => (
            <Link
              key={index}
              to={path}
              className={`text-black border-t-2 hover:border-black border-t-2 ${isActive(
                path
              )}`}
            >
              {path === "/" ? "Home" : path.replace("/", "").replace("-", " ")}
            </Link>
          )
        )}
      </div>

      <div className="md:block hidden">
        <button className="p-2 border-2 hover:shadow-md hover:translate-y-1 bg-[#006cb7] transition-all text-white">
          Get a Load
        </button>
      </div>

      <div className="md:hidden flex gap-5">
        <FaPhone className="text-3xl text-black" />
        <FaBars
          className="text-3xl text-black cursor-pointer"
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
          {["/", "/aboutus", "/services", "/testimonials", "/contact"].map(
            (path, index) => (
              <Link
                key={index}
                to={path}
                className={`text-white border-t-2 hover:border-white ${isActive(
                  path
                )}`}
                onClick={toggleMenu}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").replace("-", " ")}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
