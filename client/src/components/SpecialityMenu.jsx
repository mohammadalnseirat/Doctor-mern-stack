import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-700 "
    >
      <h1 className="text-3xl md:text-5xl font-semibold capitalize text-primary font-mono">
        find by speciality
      </h1>
      <p className="text-center sm:w-1/3 text-sm font-[500] text-gray-600">
        Simply browse through our extnsive list of trusted doctors,Schedule an
        appointment hassel-free
      </p>
      <div className="flex items-center sm:justify-center gap-4 w-full pt-5 overflow-scroll ">
        {specialityData.map((special) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-sm flex-shrink-0 hover:translate-y-[-10px]  transition-all duration-300 "
            to={`/doctors/${special.speciality}`}
            key={special.speciality}
          >
            <img
              className="w-16 sm:w-24 mb-2"
              src={special.image}
              alt="speciality-image"
            />
            <p className="font-semibold text-gray-600 ">{special.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
