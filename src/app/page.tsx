"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Card Component
const Card = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white relative h-72 w-full sm:h-80">
      <div className="relative h-2/3 w-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative h-[450px] sm:h-[500px] w-full flex flex-col justify-center items-center">
        <Image
          src="/hero.webp"
          alt="Hero"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Overlay */}
        <div className="relative flex flex-col justify-center items-center text-white px-8 pb-20">
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
              className="flex-1 p-3 rounded-l-lg border-none outline-none"
            />
            <button className="bg-red-500 text-white px-4 py-3 rounded-r-lg hover:bg-red-600">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Top Events Section */}
      <section className=" relative bottom-28">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-start mb-6 text-white">
            Top Events
          </h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <Card
                imageSrc="/event1.webp"
                title="Moneybagg Yo"
                description="From $82.50 • Dec 27 • Coliseum at North Charleston"
              />
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <Card
                imageSrc="/event2.webp"
                title="Sheng Wang"
                description="From $44.00 • Dec 27 • The Aztec Theatre"
              />
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <Card
                imageSrc="/event3.webp"
                title="Maroon 5"
                description="From $300.30 • Dec 27 • Hard Rock Live at Seminole"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}
