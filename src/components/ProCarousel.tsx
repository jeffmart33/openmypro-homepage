"use client";

import { useRef } from "react";

const pros = [
  { name: "Alyssa Cappelletti", location: "Austin, TX", price: "$0.00 / visit", rating: "5.0" },
  { name: "Michael Rosano", location: "Tlalpan, CDMX", price: "$0.00 / visit", rating: "5.0" },
  { name: "Walking Tall", location: "Asheville, NC", price: "$0.00 / visit", rating: "5.0" },
  { name: "Acapulco Luxury Apartment", location: "Acapulco, Mexico", price: "$0.00 / visit", rating: "5.0" },
  { name: "Kyle B", location: "Austin, TX", price: "$0.00 / visit", rating: "5.0" },
  { name: "Stephen Kwame Ansong", location: "Accra, Ghana", price: "$0.00 / visit", rating: "5.0" },
];

export default function ProCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 relative">

       

        {/* Carousel */}
        <div className="relative">
          {/* Left & Right Arrows */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-8 h-8 sm:w-10 sm:h-10 items-center justify-center"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-8 h-8 sm:w-10 sm:h-10 items-center justify-center"
          >
            →
          </button>

          {/* Cards Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4 sm:px-12 snap-x snap-mandatory"
          >
            {pros.map((pro, index) => (
              <div
                key={index}
                className="w-64 sm:w-72 md:w-80 lg:w-72 flex-shrink-0 bg-[#0B1220] text-white rounded-2xl p-4 shadow-xl cursor-pointer hover:translate-y-[-2px] transition-all duration-300 snap-start"
              >
                <div className="h-40 bg-gray-700 rounded-lg mb-4" />
                <h3 className="font-semibold text-lg">{pro.name}</h3>
                <p className="text-sm text-gray-300">{pro.location}</p>
                <div className="flex justify-between items-center mt-3 text-sm">
                  <span>{pro.price}</span>
                  <span className="text-yellow-400">★ {pro.rating}</span>
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-2.5 rounded-xl text-sm font-semibold">
                  Instant Book
                </button>
              </div>
            ))}
          </div>
        </div>


             {/* Featured Heading */}
        <div className="text-center mt-15 mb-6 px-2 sm:px-0">
          <div className="flex justify-center mb-2">
            <span className="text-xl font-bold text-green-700">✦</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Featured
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-xs sm:max-w-xl mx-auto">
            Discover highly-rated professionals ready to provide expert care, just a click away!
          </p>
          <p className="text-sm text-cyan-600 mt-1">
            Trusted by thousands of clients.
          </p>
        </div>

      </div>
    </section>
  );
}
