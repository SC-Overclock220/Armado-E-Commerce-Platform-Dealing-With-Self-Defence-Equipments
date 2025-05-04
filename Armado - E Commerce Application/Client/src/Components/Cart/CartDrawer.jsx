import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import CartContents from "./CartContents";

const CartDrawer = ({ openCartDrawer, toggleCartDrawer }) => {
  console.log(openCartDrawer);
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-2/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          openCartDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 ">
          <button onClick={() => toggleCartDrawer()}>
            <FaXmark className="h-6 w-6  text-gray-600" />
          </button>
        </div>

        {/* Cart Contents With Scrollbar Area */}

        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {/* Component For Cart Content */}

          <CartContents />
        </div>

        {/* Checkout Button fixed at the bottom */}

        <div className="p-4 bg-white sticky bottom-0">
          <button className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition">
            Checkout
          </button>
          <p className="text-sm tracking-tighter text-gray-500 text-center mt-2">
            Shipping, Taxes & Discounts calculated at checkout
          </p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
