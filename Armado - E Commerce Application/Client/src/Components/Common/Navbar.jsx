import React, { useState } from "react";
import { FaRegUser, FaCartShopping, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Cart/CartDrawer";
import NavbarDrawer from "./NavbarDrawer";

const Navbar = () => {
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const [openNavbarDrawer, setOpenNavbarDrawer] = useState(false);

  const toggleCartDrawer = () => {
    setOpenCartDrawer(!openCartDrawer);
  };

  const toggleNavbarDrawer = () => {
    setOpenNavbarDrawer(!openNavbarDrawer);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}

        <div>
          <Link to="/" className="text-2xl font-medium">
            Armado
          </Link>
        </div>

        {/* Navigation Links */}

        <div className="hidden lg:flex space-x-4">
          <Link to="#" className="armado-navlinks">
            Collection
          </Link>
          <Link to="#" className="armado-navlinks">
            Ammunition
          </Link>
          <Link to="#" className="armado-navlinks">
            Apparels
          </Link>
          <Link to="#" className="armado-navlinks">
            Accessories
          </Link>
          <Link to="#" className="armado-navlinks">
            Combat Gears
          </Link>
        </div>

        {/* Right Icons */}

        <div className="flex items-center space-x-4">
          <Link to="/profile" className="Hover:text-black">
            <FaRegUser className="w-6 h-6 text-gray-700" />
          </Link>

          <button
            className="relative hover:text-black"
            onClick={toggleCartDrawer}
          >
            <FaCartShopping className="text-gray-700 w-6 h-6" />
            <span className="absolute armado-green text-xs rounded-full px-1 py-0.5 -top-2.5 ">
              9+
            </span>
          </button>
          {/* Search  */}

          <div className="overflow-hidden">
            <SearchBar className="" />
          </div>

          <button className="block lg:hidden" onClick={toggleNavbarDrawer}>
            <FaBars className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrawer
        openCartDrawer={openCartDrawer}
        toggleCartDrawer={toggleCartDrawer}
      />

      {/* Mobile Navigation */}

      <NavbarDrawer
        openNavbarDrawer={openNavbarDrawer}
        toggleNavbarDrawer={toggleNavbarDrawer}
      />
    </>
  );
};

export default Navbar;
