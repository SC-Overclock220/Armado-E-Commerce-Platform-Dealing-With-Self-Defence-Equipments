import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const CartDrawer = ({ openCartDrawer, toggleCartDrawer }) => {
  console.log(openCartDrawer);
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          openCartDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 ">
          <button onClick={() => toggleCartDrawer()}>
            <FaXmark className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
