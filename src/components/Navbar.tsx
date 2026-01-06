"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full min-h-[64px] sm:min-h-[72px] px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="OpenMyPro" width={36} height={36} />
        <span className="font-semibold text-base sm:text-lg">OpenMyPro</span>
      </div>

      {/* Desktop Search */}
      <div className="hidden md:flex items-center bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-[300px] sm:w-[480px] shadow-sm">
        <button className="text-gray-500 mr-2 text-sm sm:text-base">☰</button>
        <span className="text-xs sm:text-sm text-gray-600 mr-2 whitespace-nowrap">Wellness Pro</span>
        <input
          type="text"
          placeholder="Search Pro Name"
          className="flex-1 bg-transparent outline-none text-xs sm:text-sm placeholder-gray-400"
        />
        <button className="ml-2 bg-gray-100 p-1.5 sm:p-2 rounded-full">🔍</button>
      </div>

      {/* Mobile Search */}
      <div className="flex md:hidden">
        <button className="bg-gray-100 p-2 rounded-full shadow-sm text-sm">🔍</button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button className="hidden sm:block bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
          Company ⌄
        </button>
        <button className="bg-white p-2 rounded-full shadow-sm text-sm sm:text-base">🔔</button>
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-xs sm:text-sm">
          J
        </div>
      </div>
    </header>
  );
}
