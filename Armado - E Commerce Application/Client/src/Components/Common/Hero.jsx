import React from "react";
import HeroImage from "../../assets/Hero1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="relative">
        <img
          src={HeroImage}
          alt="Hero Section"
          className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h4 className="text-3xl md:text-5xl font-bold tracking-wide md:tracking-wider lg:tracking-extra-wide mb-4 uppercase">
              The Peace Keepers
            </h4>
            <p className="text-sm font-medium  tracking-wide md:text-lg mb-6">
              Explore Our Rashtriya Rifles Inspired Collection
            </p>
            <Link className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
