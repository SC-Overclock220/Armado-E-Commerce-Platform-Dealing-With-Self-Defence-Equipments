import React, { useState } from "react";
import { FaSistrix, FaXmark } from "react-icons/fa6";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const handleSearchToggle = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Text", searchText);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        searchBarVisible
          ? "absolute top-0 left-0 bg-white h-24 z-50 w-full"
          : "w-auto"
      }`}
    >
      {searchBarVisible ? (
        <form
          className="relative flex items-center justify-center w-full"
          onSubmit={handleSubmit}
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none placeholder:text-gray-700 w-full"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <FaSistrix className="h-5 w-5" />
            </button>
          </div>

          {/* Close Button */}

          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            onClick={handleSearchToggle}
          >
            <FaXmark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button type="submit">
          <FaSistrix className="h-7 w-7" onClick={handleSearchToggle} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
