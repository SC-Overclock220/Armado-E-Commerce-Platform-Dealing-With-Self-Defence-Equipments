import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="border-bottom border-gray-200">
      {/* Topbar */}

      <Topbar />

      {/* Navbar */}

      <Navbar />

      {/* Footers */}
    </header>
  );
};

export default Header;
