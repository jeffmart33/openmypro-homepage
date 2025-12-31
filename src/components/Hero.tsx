export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center px-6 pt-16 pb-10">
      {/* Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          ✨ Elite Wellness Network ✨
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Meet Our <span className="text-blue-500">Elite</span> Pros
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-gray-600 text-base md:text-lg mb-10">
        Connect with world-class professionals who combine cutting-edge
        expertise with compassionate care.
      </p>

      {/* Availability */}
      <div className="flex items-center gap-3">
        <span className="text-blue-500 font-semibold text-lg">
          Available Now
        </span>
        <span className="w-2 h-2 bg-green-500 rounded-full" />
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Professionals accepting clients right now!
      </p>
    </section>
  );
}
