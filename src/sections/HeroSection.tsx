import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="relative h-[450px] sm:h-[500px] w-full flex flex-col justify-center items-center">
      <Image
        src="/hero.webp"
        alt="Hero"
        fill
        style={{ objectFit: "cover" }}
        priority={true}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex flex-col justify-center items-center text-white p-8 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Small Fees, Big Fun
        </h1>
        <p className="mt-4 text-center text-sm sm:text-lg max-w-xl">
          TicketX is a brand-new ticket marketplace with ZERO hidden fees for
          buyers and ZERO commission fees for sellers.
        </p>
        <div className="mt-6 flex items-center w-full max-w-lg">
          <input
            type="text"
            placeholder="Event, artist or team"
            className="flex-1 p-3 rounded-l-lg border-none outline-none text-black"
          />
          <button className="bg-red-500 text-white px-4 py-3 rounded-r-lg hover:bg-red-600">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
