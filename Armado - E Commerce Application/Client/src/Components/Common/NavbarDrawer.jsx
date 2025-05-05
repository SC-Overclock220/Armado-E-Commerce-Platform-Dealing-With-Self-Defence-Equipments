import React from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavbarDrawer = ({ openNavbarDrawer, toggleNavbarDrawer }) => {
  console.log(openNavbarDrawer);
  return (
    <div
      className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        openNavbarDrawer ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleNavbarDrawer}>
          <FaXmark className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 ">Menu</h2>

        <nav className="space-y-4">
          <Link
            to="#"
            onClick={toggleNavbarDrawer}
            className="block text-gray-600 hover:text-black "
          >
            Collection
          </Link>
          <Link
            to="#"
            onClick={toggleNavbarDrawer}
            className="block text-gray-600 hover:text-black "
          >
            Ammunition
          </Link>
          <Link
            to="#"
            onClick={toggleNavbarDrawer}
            className="block text-gray-600 hover:text-black "
          >
            Apparels
          </Link>
          <Link
            to="#"
            onClick={toggleNavbarDrawer}
            className="block text-gray-600 hover:text-black "
          >
            Accessories
          </Link>
          <Link
            to="#"
            onClick={toggleNavbarDrawer}
            className="block text-gray-600 hover:text-black "
          >
           Adventure Gears
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavbarDrawer;
