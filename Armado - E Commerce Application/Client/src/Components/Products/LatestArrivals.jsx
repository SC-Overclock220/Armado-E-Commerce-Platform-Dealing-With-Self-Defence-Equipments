import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const latestArrivals = [
  {
    _id: "1",
    prodID: "WAR0001",
    name: "AK-203",
    manufacturer: "Indo Russian Rifles",
    origin: "India",
    designed: "Kalashnikov Rifles",
    price: 85400,
    images: [
      { url: "https://picsum.photos/500/500?random=1", altText: "AK-203" },
    ],
  },
  {
    _id: "2",
    prodID: "WAR0002",
    name: "M416",
    manufacturer: "Heckler And Koch",
    origin: "Germany",
    designed: "Heckler And Koch",
    price: 90400,
    images: [
      { url: "https://picsum.photos/500/500?random=2", altText: "HK-416" },
    ],
  },
  {
    _id: "3",
    prodID: "WSM0003",
    name: "Kriss Vector",
    manufacturer: "KRISS USA",
    origin: "USA",
    designed: "KRISS",
    price: 70600,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Kriss Vector",
      },
    ],
  },
  {
    _id: "4",
    prodID: "WSM0004",
    name: "MP5-SD3",
    manufacturer: "Heckler And Koch",
    origin: "Germany",
    designed: "Heckler And Koch",
    price: 87600,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4",
        altText: "MP5-SD3",
      },
    ],
  },
  {
    _id: "5",
    prodID: "WSR0005",
    name: "Dragunoav",
    manufacturer: "Kalashnikov Rifles",
    origin: "Russia",
    designed: "Kalashnikov Rifles",
    price: 124900,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Dragunoav",
      },
    ],
  },
  {
    _id: "6",
    prodID: "WSR0006",
    name: "Barret M82",
    manufacturer: "Barret Firearms",
    origin: "USA",
    designed: "Barret Firearms",
    price: 144900,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Barret M82",
      },
    ],
  },
];

const LatestArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > container.clientWidth + leftScroll;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
    });
  };

  const scroll = (direction) => {
    const scrollAmt = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmt, behaviour: "smooth" });
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (container) container.addEventListener("scroll", updateScrollButtons);
  }, []);
  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>

        <p className="text-md md:text-md lg:text-lg text-gray-600 mb-8">
          Explore our entire arsenal of top notch latest, high in demand
          armaments
        </p>

        {/* Scroll Buttons */}

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border   ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border   ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative"
      >
        {latestArrivals.map((product, index) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0].url}
              alt={product.images[0].altText || product.name}
              className="w-full h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">
                  {product.price.toLocaleString("en-IN", { currency: "INR" })}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArrivals;
