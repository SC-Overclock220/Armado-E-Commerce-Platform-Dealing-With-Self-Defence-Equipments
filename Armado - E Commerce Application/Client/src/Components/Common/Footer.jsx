import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaSquarePhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3
            className="
          text-lg text-gray-800 mb-4"
          >
            News Letter
          </h3>

          <p className="text-gray-500 mb-4">
            Be the first to hear about our new products,exclusive events and
            online offers
          </p>

          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign Up and get 10% off on your first orders
          </p>

          {/* Newsletter form */}

          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all "
            />

            <button
              type="submit"
              className="armado-green text-white px-6 py-3 text-sm rounded-r-md hover:bg-black transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}

        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Shop</h3>
          <ul className="space-y-2 text-gray-600 ">
            <li className="">
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Guns Collection
              </Link>
            </li>

            <li className="">
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Ammunition
              </Link>
            </li>
            <li className="">
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Apparels
              </Link>
            </li>
            <li className="">
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Accessories
              </Link>
            </li>
            <li className="">
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Combat Gears
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Supports</h3>
          <ul className="space-y-2 text-gray-600 ">
            <li className="">
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>

            <li className="">
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li className="">
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li className="">
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* Socials */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="hover:text-gray-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              className="hover:text-gray-500"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="hover:text-gray-500"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <FaPhone className="h-6 w-6 inline-block mr-2 " />
            (+91) 7980 348 212
          </p>
        </div>
      </div>

      {/* Footer Bottom */}

      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-center text-sm tracking-tighter">
          © Sagnik's InfoSystems. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
