import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-primary ">
      <Link to={"/"}>
        <img className="w-44" src={assets.logo} alt="profile-logo" />
      </Link>
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="uppercase text-gray-600 py-1">Home</li>
          <hr
            className={`border-none outline-none h-0.5 w-3/5 m-auto ${
              path === "/" ? "bg-primary w-full" : "bg-transparent"
            } `}
          />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="uppercase py-1 text-gray-600">All Doctors</li>
          <hr
            className={`border-none outline-none h-0.5 w-3/5 m-auto ${
              path === "/doctors" ? "bg-primary w-full" : "bg-transparent"
            }`}
          />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="uppercase py-1 text-gray-600">About</li>
          <hr
            className={`border-none outline-none h-0.5 w-3/5 m-auto ${
              path === "/about" ? "bg-primary w-full" : "bg-transparent"
            } `}
          />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="uppercase py-1 text-gray-600">Contact</li>
          <hr
            className={`border-none outline-none h-0.5 w-3/5 m-auto ${
              path === "/contact" ? "bg-primary w-full" : "bg-transparent"
            }`}
          />
        </NavLink>
      </ul>
      <div>
        {token ? (
          <div className="flex items-center gap-3 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt="profile-picture"
              className="w-10 h-10 rounded-full"
            />
            <img
              src={assets.dropdown_icon}
              alt="dropdown-icon"
              className="w-3 h-3"
            />
            <div className="absolute top-1 right-0 pt-14  hidden group-hover:block z-20 text-base font-medium text-gray-500 rounded transition-all duration-300">
              <div className="min-w-48 flex flex-col gap-4  p-4 bg-stone-50 shadow-sm rounded border border-gray-300 capitalize">
                <Link
                  to={"/my-profile"}
                  className="hover:text-primary  transition-all duration-150"
                >
                  My Profile
                </Link>
                <Link
                  to={"/my-appointments"}
                  className="hover:text-primary  transition-all duration-150"
                >
                  My Appointments
                </Link>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-red-600  transition-all duration-150"
                >
                  Log Out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="bg-primary text-gray-50 font-semibold  px-8 py-3 rounded-full hidden md:block hover:bg-red-600 transition-all duration-300 "
          >
            <button className="capitalize">create account</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;