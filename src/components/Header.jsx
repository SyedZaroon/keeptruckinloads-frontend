import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import { assets } from "../utils/assets";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // Get current route

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to check active link
  const isActive = (path) =>
    location.pathname === path ? "border-white" : "border-transparent";

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-between px-10 relative z-50 md:my-0 my-4 ">
      <div>
        <img src={assets.logo} className="h-[82px]" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="md:flex hidden items-center gap-4 font-medium uppercase">
        {[
          { path: "/", label: "Home" },
          { path: "/aboutus", label: "About Us" },
          { path: "/services", label: "Services" },
          { path: "/testimonials", label: "Testimonials" },
          { path: "/contact", label: "Contact" },
        ].map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`text-white border-t-2 font-bold hover:border-white ${isActive(
              link.path
            )}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="md:block hidden">
        <button className="px-3 py-2 font-semibold border-[1px] hover:shadow-md hover:translate-y-1 transition-all text-white">
          GET A LOAD
        </button>
      </div>

      {/* Sticky Header (Appears after 500px scroll) */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#006CB7] shadow-md z-50 transition-transform duration-300 ${
          isSticky ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-10 py-3">
          <img src={assets.logo} className="h-[60px]" alt="Logo" />

          {/* Desktop Navigation */}
          <div className="md:flex hidden items-center gap-4 font-medium uppercase">
            {[
              { path: "/", label: "Home" },
              { path: "/aboutus", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/testimonials", label: "Testimonials" },
              { path: "/contact", label: "Contact" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`text-white border-t-2 font-bold hover:border-white ${isActive(
                  link.path
                )}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Button */}
          <div className="md:block hidden">
            <button className="px-3 py-2 font-semibold border-[1px] hover:shadow-md hover:translate-y-1 transition-all text-white">
              GET A LOAD
            </button>
          </div>
        </div>

        {/* Mobile Menu Icons */}
        <div className="md:hidden flex gap-5">
          <FaPhone className="text-3xl text-white" />
          <FaBars
            className="text-3xl text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Navigation Menu */}
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
            {[
              { path: "/", label: "Home" },
              { path: "/aboutus", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/testimonials", label: "Testimonials" },
              { path: "/contact", label: "Contact" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`text-white border-t-2 font-bold hover:border-white ${isActive(
                  link.path
                )}`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
