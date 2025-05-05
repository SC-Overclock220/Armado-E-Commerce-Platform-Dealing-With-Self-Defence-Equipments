import React from "react";
import Hero from "../Components/Common/Hero";
import ProductsCollectionSection from "../Components/Products/ProductsCollectionSection";
import LatestArrivals from "../Components/Products/LatestArrivals";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsCollectionSection />
      <LatestArrivals />
    </>
  );
};

export default Home;
