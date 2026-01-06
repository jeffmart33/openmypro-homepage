"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";



/* ---------------- TYPES ---------------- */
type Slide = {
  name: string;
  subtitle: string;
  location: string;
  unlock: string;
  rent: string;
  rating: number;
  reviews: number;
  images: string[];
};

/* ---------------- DATA ---------------- */
const slides: Slide[] = [
  {
    name: "GLOBAL 7500",
    subtitle: "Long Haul Power Trip",
    location: "New York, NY",
    unlock: "$899",
    rent: "$420,000 / month",
    rating: 5,
    reviews: 156,
    images: ["/images/air1.jpg", "/images/air2.jpg", "/images/air3.jpg"],
  },
  {
    name: "Elite Wellness Suite",
    subtitle: "Premium Care",
    location: "Austin, TX",
    unlock: "$999",
    rent: "$350 / session",
    rating: 5,
    reviews: 127,
    images: ["/images/air1.jpg", "/images/air2.jpg", "/images/air3.jpg"],
  },
  {
    name: "Private Recovery Space",
    subtitle: "Elite Experience",
    location: "Miami, FL",
    unlock: "$499",
    rent: "$300 / session",
    rating: 5,
    reviews: 102,
    images: ["/images/air1.jpg", "/images/air2.jpg", "/images/air3.jpg"],
  },
  {
    name: "Wellness Retreat",
    subtitle: "Relax & Recharge",
    location: "Los Angeles, CA",
    unlock: "$799",
    rent: "$400 / session",
    rating: 5,
    reviews: 88,
    images: ["/images/air1.jpg", "/images/air2.jpg", "/images/air3.jpg"],
  },
  {
    name: "Executive Suite",
    subtitle: "Elite Business Travel",
    location: "Chicago, IL",
    unlock: "$1099",
    rent: "$450 / session",
    rating: 5,
    reviews: 112,
    images: ["/images/air1.jpg", "/images/air2.jpg", "/images/air3.jpg"],
  },
];

/* ---------------- COMPONENT ---------------- */
export default function TopCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const cardWidth = 336;

  useEffect(() => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.offsetWidth;
    const scrollX =
      activeIndex * cardWidth - containerWidth / 2 + cardWidth / 2;

    scrollRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((i) => (i + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleArrow = (dir: "left" | "right") => {
    if (dir === "left" && activeIndex > 0) setActiveIndex(activeIndex - 1);
    if (dir === "right" && activeIndex < slides.length - 1)
      setActiveIndex(activeIndex + 1);
  };

  return (
    <section className="py-16">
      <div className="bg-[#f6f9fc] max-w-5xl mx-auto px-6 py-12 rounded-2xl shadow-lg">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-yellow-200 text-yellow-900 px-5 py-1.5 rounded-full text-sm font-semibold shadow">
            ✦ Elite Wellness Access ✦
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-extrabold text-gray-900">
          Luxury <span className="text-blue-600">Wellness</span> Care
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Experience unparalleled comfort and convenience with our curated
          network of elite wellness professionals and premium care spaces.
        </p>

        {/* Carousel */}
        <div className="relative mt-12">
          <button
            onClick={() => handleArrow("left")}
            disabled={activeIndex === 0}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10
            bg-white w-10 h-10 rounded-full shadow flex items-center justify-center
            hover:scale-110 transition disabled:opacity-30"
          >
            ←
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth px-2"
          >
           {slides.map((slide, i) => {
  let offset = 0;
  if (i === 1) offset = 2;
  if (i === 2) offset = 1;

  return (
    <Card
      key={i}
      slide={slide}
      imgIndex={(imgIndex + offset) % 3}
      mounted={mounted} // ← pass it here
    />
  );
})}

          </div>

          <button
            onClick={() => handleArrow("right")}
            disabled={activeIndex === slides.length - 1}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10
            bg-white w-10 h-10 rounded-full shadow flex items-center justify-center
            hover:scale-110 transition disabled:opacity-30"
          >
            →
          </button>
        </div>

        {/* CTA INSIDE CONTAINER */}
       <div className="text-center mt-16">
  <h3 className="text-xl font-medium text-gray-800 mb-6">
    Ready to elevate your travel experience?
  </h3>

  {mounted && (
    <CustomButton
      color="blue"
      alertText="Explore All Jets clicked!"
      className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-semibold shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600"
    >
      ✈ Explore All Jets
    </CustomButton>
  )}

        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */
function Card({
  slide,
  imgIndex,
  mounted, // pass this from parent
}: {
  slide: Slide;
  imgIndex: number;
  mounted: boolean;
}) {
  return (
    <div className="w-[320px] flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg">
      
      {/* IMAGE */}
      <div className="relative h-56">
        {slide.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={slide.name}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              i === imgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* AVAILABLE */}
        <div className="absolute bottom-1 right-4 bg-green-500 text-white text-xs px-4 py-1.5 rounded-full shadow">
          ● AVAILABLE
        </div>

        {/* OVERLAY */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-bold">{slide.name}</h3>
          <p className="text-sm opacity-90">{slide.subtitle}</p>

          <div className="flex justify-between text-xs mt-2 opacity-90">
            <span>✈ RANGE 7,700 nm</span>
            <span>📍 {slide.location}</span>
          </div>

          <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
            {"★★★★★"}
            <span className="text-white text-xs ml-1">
              ({slide.reviews})
            </span>
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {slide.images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === imgIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* INFO */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>🔓 Unlock</span>
          <strong className="text-gray-900">{slide.unlock}</strong>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>💳 Rent</span>
          <strong className="text-gray-900">{slide.rent}</strong>
        </div>

        {/* Only CustomButton is conditional */}
        {mounted && (
          <CustomButton
            color="blue"
            alertText={`Book Now clicked for ${slide.name}`}
            className="mt-4 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500"
          >
            📅 Book Now →
          </CustomButton>
        )}
      </div>
    </div>
  );
}
