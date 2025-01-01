"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "@/components/cards/EventCard";
import Link from "next/link";

export type TopEvents = {
  _id: string;
  slug: string;
  imageUrl: string;
  name: string;
  description: string;
};

type TopEventsSectionProps = {
  topEvents: TopEvents[];
};

function TopEventsSection({ topEvents }: TopEventsSectionProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
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
          style={{ padding: "1rem 0 1rem 1rem" }}
          className="w-full"
        >
          {topEvents.map((event, index) => (
            <SwiperSlide
              key={event._id}
              style={{
                paddingRight: index === topEvents.length - 1 ? "1rem" : "",
              }}
            >
              <Link href={`/events/${event.slug}`}>
                <EventCard
                  imageSrc={event.imageUrl}
                  title={event.name}
                  description={event.description}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TopEventsSection;
