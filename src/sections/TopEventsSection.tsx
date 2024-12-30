"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "@/components/cards/EventCard";

function TopEventsSection() {
  return (
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
  );
}

export default TopEventsSection;
