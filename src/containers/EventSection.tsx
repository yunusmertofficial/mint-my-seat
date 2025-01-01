"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "@/components/cards/CategoryCard";
import { Event } from "@/types/model";

type EventSectionProps = {
  title: string;
  events: Event[];
};

export default function EventSection({ title, events }: EventSectionProps) {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 px-4">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block px-4">
          <div className="grid grid-cols-4 gap-4">
            {events.map((event) => (
              <CategoryCard key={event._id} {...event} />
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={16}
            className="w-full"
            style={{ padding: "1rem 0 1rem 1rem" }}
          >
            {events.map((event) => (
              <SwiperSlide key={event._id}>
                <CategoryCard {...event} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
