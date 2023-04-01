import React from "react";
import { Link } from "react-router-dom";
import { IoLogoIonic } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="w-full mx-auto bg-transparent p-1 py-3 h-[4.5rem] flex items-center justify-between absolute top-2 z-10">
      <nav className=" px-4 bg-[#2183c2] py-2 rounded-md md:px-2 w-full mx-auto flex items-center justify-between">
        <div className="logo flex items-center space-x-3">
          <div className=" cursor-pointer hidden  md:flex">
            <HiMenuAlt1 size={25} className=" text-white" />
          </div>
          <Link className=" text-xl p-2 px-3 rounded-md bg-white text-black flex items-center space-x-2 ">
            <IoLogoIonic className=" text-green-500" />
            <p className="text-lg font-medium">Quora</p>
          </Link>
        </div>
        <div className="auth flex items-center">
          <div>
            <Link className="p-2 px-7 rounded-3xl bg-white text-black flex items-center space-x-2 ">
              Login
            </Link>
          </div>
          <div>
            <Link className="p-2 px-6 rounded-3xl bg-white text-black flex items-center space-x-2 ">
              <img
                className=" w-[22px] border-2 overflow-hidden bg-black border-black rounded-full h-[22px]"
                src="https://img.icons8.com/color/48/null/user.png"
                alt="user_image"
              />
              <p>Lana</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
