import React from "react";
import AppraelCollection from "../../assets/ProductsSection1.png";
import AdventureGearCollection from "../../assets/ProductsSection2.png";
import { Link } from "react-router-dom";
const ProductsCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="py-6 container mx-auto flex flex-col md:flex-row gap-8">
        {/* Apparel Collection */}
        <div className="relative flex-1">
          <img
            src={AppraelCollection}
            alt="Apparel Collection"
            className="w-full height-[700px] object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-md md:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
              Apparel Collection
            </h2>

            <Link
              to="/collections/all?category=apparel"
              className="text-gray-900 underline "
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Trekking Gear Collection */}

        <div className="relative flex-1">
          <img
            src={AdventureGearCollection}
            alt="Adventure Gear  Collection"
            className="w-full height-[400px] object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-md md:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
              Adventure Gear Collection
            </h2>

            <Link
              to="/collections/all?category=adventuregear"
              className="text-gray-900 underline "
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCollectionSection;
