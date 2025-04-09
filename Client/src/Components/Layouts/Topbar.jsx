import React from "react";
import { FaLinkedin, FaMeta, FaTwitter } from "react-icons/fa6";

const Topbar = () => {
  return (
    <div className="bg-armado-olive ">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 ">
            <FaMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-center "><span>We Ship Worldwide - Fast And Reliable Shipping</span></div>
      </div>
    </div>
  );
};

export default Topbar;
