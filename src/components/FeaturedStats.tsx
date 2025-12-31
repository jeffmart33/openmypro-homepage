export default function FeaturedStats() {
  const stats = [
    { value: "30+", label: "Featured Pros" },
    { value: "100+", label: "Wellness Experts" },
    { value: "15K+", label: "Clients Served" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 -mt-20
                   bg-white rounded-2xl shadow-md
                   transition-shadow duration-300 hover:shadow-xl"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-500">
                {stat.value}
              </p>
              <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
