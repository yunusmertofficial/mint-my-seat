"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CategorySection, { CategoryItem } from "@/components/cards/CategoryCard";
import { FaHeadset, FaLock, FaShieldAlt } from "react-icons/fa";

// Top Events Card (senin mevcut EventCard yapın)
function EventCard({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white relative h-72 w-full sm:h-80">
      <div className="relative h-2/3 w-full">
        <Image src={imageSrc} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  // Örnek "Music" verileri
  const musicItems: CategoryItem[] = [
    {
      imageSrc: "/event1.webp",
      title: "Music 1",
    },
    {
      imageSrc: "/event2.webp",
      title: "Music 2",
    },
    {
      imageSrc: "/event3.webp",
      title: "Music 3",
    },
    {
      imageSrc: "/event1.webp",
      title: "Music 4",
    },
    {
      imageSrc: "/event1.webp",
      title: "Music 5",
    },
    {
      imageSrc: "/event1.webp",
      title: "Music 6",
    },
    {
      imageSrc: "/event1.webp",
      title: "Music 7",
    },
    {
      imageSrc: "/event1.webp",
      title: "Music 8",
    },
  ];

  // Örnek "Sports" verileri
  const sportsItems: CategoryItem[] = [
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Sports+1",
      title: "Sports 1",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Sports+2",
      title: "Sports 2",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Sports+3",
      title: "Sports 3",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Sports+4",
      title: "Sports 4",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Sports+5",
      title: "Sports 5",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Sports+6",
      title: "Sports 6",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Sports+7",
      title: "Sports 7",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Sports+8",
      title: "Sports 8",
    },
  ];

  const showsItems = [
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Shows+1",
      title: "Shows 1",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Shows+2",
      title: "Shows 2",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Shows+3",
      title: "Shows 3",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Shows+4",
      title: "Shows 4",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Shows+5",
      title: "Shows 5",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Shows+6",
      title: "Shows 6",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Shows+7",
      title: "Shows 7",
    },
    {
      imageSrc: "https://via.placeholder.com/400x300?text=Shows+8",
      title: "Shows 8",
    },
  ];

  return (
    <main className="relative">
      {/* ---------- Hero ---------- */}
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

      {/* ---------- Top Events ---------- */}
      <div className="relative bottom-28">
        <section>
          <div className="max-w-7xl mx-auto ">
            <h2 className="text-3xl font-bold text-start mb-6 text-white px-4">
              Top Events
            </h2>

            <Swiper
              spaceBetween={20}
              slidesPerView={1.1}
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
              style={{ padding: "1rem 0 1rem 1rem" }} // Inline CSS
              className="w-full"
            >
              <SwiperSlide>
                <EventCard
                  imageSrc="/event1.webp"
                  title="Moneybagg Yo"
                  description="From $82.50 • Dec 27 • Coliseum at North Charleston"
                />
              </SwiperSlide>
              <SwiperSlide>
                <EventCard
                  imageSrc="/event2.webp"
                  title="Sheng Wang"
                  description="From $44.00 • Dec 27 • The Aztec Theatre"
                />
              </SwiperSlide>
              <SwiperSlide style={{ paddingRight: "1rem" }}>
                <EventCard
                  imageSrc="/event3.webp"
                  title="Maroon 5"
                  description="From $300.30 • Dec 27 • Hard Rock Live at Seminole"
                />
              </SwiperSlide>
              {/* İstersen daha fazla slide ekleyebilirsin */}
            </Swiper>
          </div>
        </section>

        {/* ---------- Kategoriler (Music, Sports vb.) ---------- */}

        <CategorySection title="Music" items={musicItems} />

        {/* Sports */}
        <CategorySection title="Sports" items={sportsItems} />

        <CategorySection title="Shows" items={showsItems} />

        {/* ---------- NEDEN BU KADAR BAŞARILIYIZ? ---------- */}
        <section className="pt-16 relative top-6  ">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              WHY ARE WE SO SUCCESSFUL?
            </h2>

            <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-8">
              Here are 3 powerful reasons to choose us:
            </p>

            {/* 3 adet kutucuk */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* 1. Kutu */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-center mb-4 text-4xl text-red-500">
                  <FaShieldAlt />
                </div>
                <h3 className="text-lg font-semibold">100% Buyer Guarantee</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Full refund if you don&apos;t get your tickets
                </p>
              </div>

              {/* 2. Kutu */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-center mb-4 text-4xl text-red-500">
                  <FaLock />
                </div>
                <h3 className="text-lg font-semibold">
                  Protected and reliable transactions
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Your personal information will always be secure
                </p>
              </div>

              {/* 3. Kutu */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-center mb-4 text-4xl text-red-500">
                  <FaHeadset />
                </div>
                <h3 className="text-lg font-semibold">
                  Comprehensive customer support
                </h3>
                <p className="text-sm text-gray-600 mt-2">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
