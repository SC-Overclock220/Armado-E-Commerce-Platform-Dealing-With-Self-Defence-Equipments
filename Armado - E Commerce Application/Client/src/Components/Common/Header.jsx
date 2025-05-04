import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* Topbar */}

      <Topbar />

      {/* Navbar */}

      <Navbar />
    </header>
  );
};

export default Header;
