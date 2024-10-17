import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap px-6 md:px-10 lg:px-20 bg-primary rounded-lg">
      {/* Left Side Start here */}
      <div className="w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-gray-100  font-semibold leading-tight">
          Book Appointment <br className="hidden md:block" /> with Trusetd
          Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-50 font-[400]">
          <img
            className="w-28 md:w-20"
            src={assets.group_profiles}
            alt="group-profiles"
          />
          <p>
            Simply browse through our extnsive list of trusted doctors,{" "}
            <br className="hidden md:block" />
            schedule an appointment hassel-free
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center  gap-2 text-xs md:text-sm bg-gray-100 px-2 md:px-8 py-3 text-gray-600 font-medium border border-gray-400 shadow-md rounded-full  hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out "
        >
          Book Appointment{" "}
          <img className="w-3 my-2" src={assets.arrow_icon} alt="arrow-icon" />
        </a>
      </div>
      {/* Left Side End here */}

      {/* Right Side Start here */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 rounded-lg"
          src={assets.header_img}
          alt="header-image"
        />
      </div>
      {/* Right Side End here */}
    </div>
  );
};

export default Header;
