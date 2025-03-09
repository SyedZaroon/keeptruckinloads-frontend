import React from "react";
import { assets } from "../utils/assets";

const AboutUs = () => {
  return (
    <>
      <section className="bg-[#F7F9FC] py-16 px-6">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-blue-900 uppercase">
            Welcome to keeptruckinloads Star Group
          </h2>
          <div className="mt-2 w-12 h-1 bg-blue-900 mx-auto"></div>
          <p className="text-[#687284] text-sm mt-4 max-w-[39rem]">
            keeptruckinloads primary aim is to provide integrated land transport
            with a variety of trucks & trailers to its valued customers with
            reliability, flexibility, and stability to maintain our lead as a
            single source solution provider.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row  mt-12">
          <div className="lg:w-[800px] mt-8 lg:mt-0">
            <img
              src={assets.aboutcargo}
              alt="Transportation Services"
              className="w-full"
            />
            <p className="text-[#3c4a62] text-sm leading-6 mt-4">
              We offer specialized transportation and logistics Services for
              Customers with specialized equipments for oversized cargo, cross
              border transportation, local deliveries and line haul movements
              also. Thought our primary activity is road transportation, we also
              undertake sea and air freight clearing and forwarding services to
              anywhere in the world.
            </p>
          </div>
          <div className="lg:w-full px-6">
            <h3 className="text-4xl font-extrabold text-[#3c4a62]">
              We Have 25 Years Experience In <br /> This Passion
            </h3>
            <p className="text-[#3c4a62] text-sm leading-6 mt-8">
              keeptruckinloads Star Transport was incorporated in 2007 with the
              vision to contribute professional services in the field of
              Transportation & Freight Forwarding to the ever-expanding market
              in the Middle East. Through the combined expertise and dedication
              of professional partners, we provide tailor-made solutions for the
              transportation needs of our valued customers.
            </p>
            <a href="#" className="text-[#3c4a62] text-sm mt-4 inline-block">
              Read More &gt;
            </a>
          </div>
        </div>

        <div className="container mx-auto text-center mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
            <h4 className="text-yellow-500 text-3xl font-bold">8000</h4>
            <p className="text-gray-700">Project Done</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap ">
          <div className="w-full md:w-1/2">
            <img
              src={assets.aboutdetails}
              alt="Our Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-2xl font-extrabold text-[#3c4a62]">
              OUR <span className="text-yellow-500">VISION</span>
            </h2>
            <p className="mt-4 text-[#3c4a62]">
              "To be acknowledged & trusted as the leading provider of
              transportation & freight forwarding services."
            </p>
          </div>
        </div>
      </section>
      {/* <section
        className="py-16 bg-cover bg-center text-center text-white"
        style={{ backgroundImage: "url('/path-to-your-background.jpg')" }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold">
            WE PROVIDE INTERNATIONAL FREIGHT & LOGISTICS SERVICE WORLDWIDE
          </h2>
          <button className="mt-6 bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600">
            GET A QUOTE
          </button>
        </div>
      </section> */}
      {/* <section className="text-center py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-blue-600 flex justify-center items-center gap-2">
          <span className="text-4xl">&#9776;</span> ABOUT US
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Keeptruckin Loads is your partner in maximizing trucking profits. We
          offer a comprehensive dispatch service, including load sourcing, rate
          negotiation, booking confirmations, fuel surcharge calculations, and
          back-office support. Our goal is to streamline your operations,
          increase your revenue, and improve your overall trucking experience.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8 mx-56">
          <div className="border-2 border-[#006cb7] p-2 shadow-md bg-white">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              ⚡
            </div>
            <h3 className="text-2xl font-bold text-blue-600">
              TIMELY DELIVERY
            </h3>
            <p className="mt-2 text-[#006cb7]">
              We prioritize efficient and on-time deliveries, building strong
              relationships with our carriers and ensuring customer
              satisfaction.
            </p>
          </div>
          <div className="border-2 border-[#006cb7] p-2 shadow-md bg-white">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              🌍
            </div>
            <h3 className="text-[22px] font-bold text-blue-600">
              NO STATE LIMITATIONS
            </h3>
            <p className="mt-2 text-[#006cb7]">
              We connect you with loads across the entire United States,
              expanding your reach and maximizing your earning potential.
            </p>
          </div>
          <div className="border-2 border-[#006cb7] p-2 shadow-md bg-white">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              🛟
            </div>
            <h3 className="text-2xl font-bold text-blue-600">24/7 SUPPORT</h3>
            <p className="mt-2 text-[#006cb7]">
              Our dedicated team is always available to assist you with any
              questions or concerns, ensuring you're never alone on the road.
            </p>
          </div>
          <div className="border-2 border-[#006cb7] p-2 shadow-md bg-white">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              ⚡
            </div>
            <h3 className="text-2xl font-bold text-blue-600">
              TIMELY DELIVERY
            </h3>
            <p className="mt-2 text-[#006cb7]">
              We prioritize efficient and on-time deliveries, building strong
              relationships with our carriers and ensuring customer
              satisfaction.
            </p>
          </div>
          <div className="border-2 border-[#006cb7] p-2 shadow-md bg-white">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              🌍
            </div>
            <h3 className="text-[22px] font-bold text-blue-600">
              NO STATE LIMITATIONS
            </h3>
            <p className="mt-2 text-[#006cb7]">
              We connect you with loads across the entire United States,
              expanding your reach and maximizing your earning potential.
            </p>
          </div>
          <div className="border-2 border-[#006cb7] p-2 shadow-md bg-white">
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              🛟
            </div>
            <h3 className="text-2xl font-bold text-blue-600">24/7 SUPPORT</h3>
            <p className="mt-2 text-[#006cb7]">
              Our dedicated team is always available to assist you with any
              questions or concerns, ensuring you're never alone on the road.
            </p>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutUs;
