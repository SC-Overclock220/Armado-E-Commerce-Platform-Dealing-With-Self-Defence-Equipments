import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Topbar = () => {
  return (
    <>
      <div className="armado-topbar">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          <div className=" hidden md:flex center space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
          <div className="text-sm text-center flex-grow">
            <span>We ship world wide. Fast And Reliable Shipping</span>
          </div>
          <div className="text-sm hidden md:block">
            <a href="tel:+917980348212" className="hover:text-gray-300">
              (+91) 7980 348 212
            </a>
          </div>
        </div>
      </div>
    </>
  );
  s;
};

export default Topbar;
