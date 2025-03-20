import React, { useState } from "react";
import { assets } from "../utils/assets";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div
        className="bg-[#006CB7] md:py-36 md:px-28 md:flex justify-between md:items-center md:flex-row flex-col p-12 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.contactimg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Overlay for better readability */}
        <div className="md:w-[40%] relative z-10">
          <h2 className="text-8xl md:text-6xl font-extrabold tracking-wide text-left text-white">
            Contact Us
          </h2>
          <p className="text-white my-4"></p>
          <a
            href=""
            className="hover:shadow-md hover:translate-y-1 transition-all text-white"
          >
            Home // <span> Contact Us</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 justify-center items-center pt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53084.35163011842!2d-118.281988!3d33.740712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd3639f8a0fad5%3A0x120090cd835a1606!2s425%20S%20Palos%20Verdes%20St%2C%20San%20Pedro%2C%20CA%2090731!5e0!3m2!1sen!2sus!4v1740756680781!5m2!1sen!2sus"
          className="h-[500px] border-0 w-[94%]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-20 mb-28 gap-10">
        {/* Left Side: Image */}
        <div className="md:w-[63%] w-full ">
          <div class="bg-[#F3F6F6] my-6 p-12 mx-auto  rounded-md shadow-md w-full mt-[-90px]">
            <h2 class="text-3xl text-[#1E3446] text-center md:text-4xl font-extrabold mb-5">
              Have Any Question?
            </h2>
            <p className="text-center text-[#626B72] font-medium mb-10 mx-24 ">
              It is a long established fact that a reader will be distracted
              content of a page when looking.
            </p>
            <form onSubmit={handleSubmit} class="space-y-6">
              <div class="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  class="w-full px-3 py-3 focus:outline-none focus:ring-2 focus:[#006CB7]"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  class="w-full px-3 py-3 focus:outline-none focus:ring-2 focus:[#006CB7]"
                />
              </div>

              <div class="grid grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone"
                  class="w-full px-3 py-3 focus:outline-none focus:ring-2 focus:[#006CB7]"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  class="w-full px-3 py-3 focus:outline-none focus:ring-2 focus:[#006CB7]"
                />
              </div>

              <div class="">
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  rows={8}
                  cols={40}
                  class="w-full px-3 py-3  focus:outline-none focus:ring-2 focus:[#006CB7]"
                />
              </div>

              <button
                type="submit"
                class="bg-[#006CB7] text-white text-center p-2 hover:bg-[#005D9E] cursor-pointer w-48"
              >
                Get in Touch
              </button>
            </form>
          </div>{" "}
        </div>

        {/* Right Side: Form */}
        <div className="md:w-[32%] w-full p-6 bg-white">
          <div className="space-y-4">
            {/* Call Us */}
            <div className="flex items-center p-4 border border-gray-300">
              <FaPhoneAlt className="text-[#005D9E] text-2xl mr-4" />
              <div>
                <h3 className=" font-semibold">Call Us:</h3>
                <p className="text-gray-600">+00 697-836-937</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-center p-4 border border-gray-300 shadow-md">
              <FaEnvelope className="text-[#005D9E] text-2xl mr-4" />
              <div>
                <h3 className=" font-semibold">E-mail Us:</h3>
                <p className="text-gray-600">wosabinfo@gmail.com</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center p-4 border border-gray-300 shadow-md">
              <FaClock className="text-[#005D9E] text-2xl mr-4" />
              <div>
                <h3 className=" font-semibold">Opening Hours:</h3>
                <p className="text-gray-600">09:00 am to 10:00 pm</p>
              </div>
            </div>

            {/* Our Location */}
            <div className="flex items-center p-4 border border-gray-300 shadow-md">
              <FaMapMarkerAlt className="text-[#005D9E] text-2xl mr-4" />
              <div>
                <h3 className=" font-semibold">Our Location:</h3>
                <p className="text-gray-600">8932, Natíska, USA.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
