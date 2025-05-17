import React from "react";
import Hero from "../Components/Common/Hero";
import ProductsCollectionSection from "../Components/Products/ProductsCollectionSection";
import LatestArrivals from "../Components/Products/LatestArrivals";
import ProductDescription from "../Components/Products/ProductDescription";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsCollectionSection />
      <LatestArrivals />

      {/* Best Seller */}

      <div>
        <h2 className="text-3xl text-center mb-4 font-bold mt-10">
          Best Seller Of The Week
        </h2>
        <ProductDescription />
      </div>
    </>
  );
};

export default Home;
