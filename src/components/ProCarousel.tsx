"use client";

import { useRef } from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton"; // adjust path if needed
import Link from "next/link";



const pros = [
  {
    name: "Alyssa Cappelletti",
    location: "Austin, TX",
    price: "$0.00 / visit",
    rating: "5.0",
    image: "/images/image1.jpg",
  },
  {
    name: "Michael Rosano",
    location: "Tlalpan, CDMX",
    price: "$0.00 / visit",
    rating: "5.0",
    image: "/images/image2.jpg",
  },
  {
    name: "Walking Tall",
    location: "Asheville, NC",
    price: "$0.00 / visit",
    rating: "5.0",
    image: "/images/image3.jpg",
  },
  {
    name: "Acapulco Luxury Apartment",
    location: "Acapulco, Mexico",
    price: "$0.00 / visit",
    rating: "5.0",
    image: "/images/image5.jpg",
  },
  {
    name: "Kyle B",
    location: "Austin, TX",
    price: "$0.00 / visit",
    rating: "5.0",
    image: "/images/image6.jpg",
  },
  {
    name: "Stephen Kwame Ansong",
    location: "Accra, Ghana",
    price: "$0.00 / visit",
    rating: "5.0",
    image: "/images/image1.jpg",
  },
];

export default function ProCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleInstantBook = (name: string) => {
    alert(`Instant Book clicked for ${name}`);
  };

  return (
    <section className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Carousel */}
        <div className="relative">
          {/* Left & Right Arrows */}
          <button
            onClick={() => scroll("left")}
            className="flex absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur shadow-lg rounded-full w-8 h-8 sm:w-10 sm:h-10 items-center justify-center"

          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="flex absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur shadow-lg rounded-full w-8 h-8 sm:w-10 sm:h-10 items-center justify-center"

          >
            →
          </button>

          {/* Cards Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4 sm:px-12 snap-x snap-mandatory"
          >
            {pros.map((pro, index) => (
  <Link
    key={index}
    href={`/pros/${encodeURIComponent(pro.name)}`}
    className="block w-64 sm:w-72 md:w-80 lg:w-72 flex-shrink-0 snap-start"
  >
    <div className="relative rounded-2xl shadow-xl cursor-pointer hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      
      {/* Card image container */}
      <div className="relative h-64 w-full">
        <Image
          src={pro.image}
          alt={pro.name}
          fill
          className="object-cover rounded-2xl"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/30 p-4 flex flex-col justify-end rounded-2xl">
          <h3 className="font-semibold text-lg text-white">
            {pro.name}
          </h3>
          <p className="text-sm text-gray-200">
            {pro.location}
          </p>

          <div className="flex justify-between items-center mt-2 text-sm text-white">
            <span>{pro.price}</span>
            <span className="text-yellow-400">★ {pro.rating}</span>
          </div>

          <CustomButton
            color="blue"
            alertText={`Book Now clicked for ${pro.name}`}
            onClick={(e) => e.stopPropagation()}
            className="mt-4 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Instant Book
          </CustomButton>
        </div>
      </div>

    </div>
  </Link>
))}



                        </div>
        </div>

        {/* Featured Heading */}
        <div className="text-center mt-15 mb-6 px-2 sm:px-0">
          <div className="flex justify-center mb-2">
            <span className="text-7xl font-bold text-green-700">✦</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Featured
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-xs sm:max-w-xl mx-auto">
            Discover highly-rated professionals ready to provide expert care,
            just a click away!
          </p>
          <p className="text-sm font-bold text-green-700 mt-1">
            Trusted by thousands of clients.
          </p>
        </div>
      </div>
    </section>
  );
}
