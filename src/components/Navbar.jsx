import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { images } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggleBtn = () => {
    setToggle(!toggle);
  };
  return (
    <header className="bg-black px-5 md:px-10 py-5 shadow">
      <nav className="text-white font-heading flex justify-between items-center text-sm md:text-base select-none">
        <div className="flex items-center justify-start">
          <img src={images.gericht} alt="logo" className="w-28 md:w-44" />
        </div>
        <ul className=" hidden md:flex justify-center  items-center gap-5 flex-1">
          <li className=" cursor-pointer hover:text-golden transition-all duration-200">
            Home
          </li>
          <li className=" cursor-pointer hover:text-golden transition-all duration-200">
            Pages
          </li>
          <li className=" cursor-pointer hover:text-golden transition-all duration-200">
            Contact Us
          </li>
          <li className=" cursor-pointer hover:text-golden transition-all duration-200">
            Blog
          </li>
          <li className=" cursor-pointer hover:text-golden transition-all duration-200">
            Landing
          </li>
        </ul>
        <div className="sm:flex justify-end items-center gap-3 hidden ">
          <a
            href="#"
            className="text-white hover:text-golden hover:border-b-2 border-b-golden transition-all duration-150"
          >
            {" "}
            Login/Register
          </a>
          <div className="w-[1px] h-8 bg-golden" />
          <a
            href="#"
            className="text-white hover:text-golden hover:border-b-2 border-b-golden transition-all duration-150"
          >
            Book Table
          </a>
        </div>
        <div className="md:hidden">
          <GiHamburgerMenu
            className=" w-6 h-6 cursor-pointer text-white"
            onClick={handleToggleBtn}
          />
          {toggle && (
            <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black flex flex-col justify-center items-center duration-300  transition-transform slide-bottom ">
              <MdOutlineRestaurantMenu
                className=" w-6 h-6 cursor-pointer text-golden absolute top-5 right-5"
               onClick={handleToggleBtn}
              />
              <ul className=" flex flex-col justify-center items-center gap-5 flex-1">
                <li className=" cursor-pointer hover:text-golden transition-all duration-200">
                  Home
                </li>
                <li className=" cursor-pointer hover:text-golden transition-all duration-200">
                  Pages
                </li>
                <li className=" cursor-pointer hover:text-golden transition-all duration-200">
                  Contact Us
                </li>
                <li className=" cursor-pointer hover:text-golden transition-all duration-200">
                  Blog
                </li>
                <li className=" cursor-pointer hover:text-golden transition-all duration-200">
                  Landing
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
