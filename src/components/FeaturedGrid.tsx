export default function FeaturedGrid() {
  const featured = [
    {
      name: "Acapulco Luxury Apartment",
      desc: "Apartment on the beach in Acapulco",
      reviews: "5.0 ★ (1 review)",
      status: "Active",
    },
    {
      name: "Kokoro Wellness",
      desc: "State of the art fitness and wellness center focusing on peak performance",
      reviews: "5.0 ★ (1 review)",
      status: "Active",
    },
    {
      name: "Hand To Shoulder Austin",
      desc: "Austin’s premier hand, wrist, elbow and shoulder specialists",
      reviews: "5.0 ★ (1 review)",
      status: "Active",
    },
    {
      name: "Kyle B",
      desc: "Business and leadership advisor, serial entrepreneur with a number of successes",
      reviews: "5.0 ★ (1 review)",
      status: "Active",
    },
    {
      name: "Stephen Kwame Ansong",
      desc: "As a dedicated fitness coach, I specialize in personalized wellness programs",
      reviews: "5.0 ★ (2 reviews)",
      status: "Inactive",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {featured.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-md cursor-pointer transition-all duration-300 ease-out
              hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-cyan-200 flex flex-col"
            >
              {/* Top */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full whitespace-nowrap">
                  Featured
                </span>
              </div>

              {/* Content */}
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 leading-snug">
                {item.name}
              </h3>

              <p className="text-[10px] sm:text-xs text-gray-500 mt-1 line-clamp-3">
                {item.desc}
              </p>

              <p className="text-[10px] sm:text-xs text-gray-600 mt-2">{item.reviews}</p>

              {/* Status */}
              <div className="flex items-center gap-2 mt-3 text-[10px] sm:text-xs">
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.status === "Active" ? "bg-teal-500" : "bg-gray-400"
                  }`}
                />
                <span className="text-gray-600">{item.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold text-center">
            See All Featured Centers & Wellness Professionals
          </button>
        </div>
      </div>
    </section>
  );
}
