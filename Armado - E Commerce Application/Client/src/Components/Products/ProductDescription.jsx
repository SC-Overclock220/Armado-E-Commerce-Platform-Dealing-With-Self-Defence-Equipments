import React from "react";
import Prod100 from "../../assets/Products/Prod100.jpeg";

const selectedProduct = {
  name: "Tripole Colonel Rucksack XL 75",
  description: "Tripole Colonel Rucksack XL Size. Capacity Of 75 Ltr.",
  prodID: "AXCRS0001",
  price: 2799,
  originalPrice: 3199,
  origin: "India",
  manufacturer: "Tripole Gears",
  variants: ["Jungle Camo", "Olive Green", "Desert Camo"],
  images: [{ url: Prod100, altText: "Best Seller Of Week" }],
};
const ProductDescription = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}

          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                alt={image.altText || `Thumbnail Index`}
                key={index}
                className="w-20 h-20 object-cover cursor-pointer rounded-lg border"
              />
            ))}
          </div>

          {/* Main Image */}

          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedProduct.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mobile Thumbnail */}

          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                alt={image.altText || `Thumbnail Index`}
                key={index}
                className="w-20 h-20 object-cover cursor-pointer rounded-lg border"
              />
            ))}
          </div>

          {/* Right Side */}

          <div className="md:w=1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>

            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}`}
            </p>

            <p className="text-xl text-gray-500 mb-2">
              {selectedProduct.price &&
                `${selectedProduct.price.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}`}
            </p>

            <p className="text-gray-600 mb-4">
              {selectedProduct.ProductDescription}
            </p>

            <div className="mb-4">
              <p className="text-gray-700">Variants:</p>
              <div className="flex flex-grow gap-2 mt-2">
                {selectedProduct.variants.map((variant, index) => (
                  <button
                    key={index}
                    className="px-2 py-2 border rounded-lg armado-green text-sm sm:text-md lg:text-lg"
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">

                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
