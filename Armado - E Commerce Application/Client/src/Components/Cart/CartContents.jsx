import React from "react";
import { FaBucket } from "react-icons/fa6";

const CartContents = () => {
  const cartProducts = [
    {
      id: 1,
      name: "AK-203",
      origin: "India",
      manufacturer: "Indo Russian Rifles",
      designed: "Kalashnikov Rifles",
      quantity: 1,
      price: 75000,
      image: `https://picsum.photos/200?random=1`,
    },
    {
      id: 2,
      name: "G3A3",
      origin: "Spain",
      manufacturer: "CETME",
      designed: "Heckler & Koch",
      quantity: 1,
      price: 81000,
      image: `https://picsum.photos/200?random=1`,
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-20 sm:w-20 sm:h-24 object-cover mr-4 rounded"
            />

            <div>
              <h3>{product.name}</h3>
              <h6>{product.designed}</h6>
              <p className="text-sm text-gray-500">
                {product.origin} | {product.manufacturer}
              </p>

              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>

          <div>
            <p>₹{product.price.toLocaleString("en-IN", { currency: "INR" })}</p>
            <button>
              <FaBucket className="h-6 w-6 mt-2  text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
