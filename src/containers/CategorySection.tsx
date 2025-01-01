"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowForward } from "react-icons/md";
import CategoryCard from "@/components/cards/CategoryCard";
import Link from "next/link";
import { Event } from "@/types/model";

type CategorySectionProps = {
  title: string;
  href: string;
  events: Event[];
};

export default function CategorySection({
  title,
  href,
  events,
}: CategorySectionProps) {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between mb-6 px-4">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <Link href={href} className="flex items-center gap-2">
            <span className="uppercase tracking-wide text-gray-900 font-light md:font-semibold">
              View All
            </span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-900 text-white">
              <MdArrowForward size={16} />
            </span>
          </Link>
        </div>

        <div className="hidden md:block px-4">
          <div className="grid grid-cols-4 gap-4 mb-4">
            {events.slice(0, 4).map((event) => (
              <Link href={`/events/${event.slug}`} key={event._id}>
                <CategoryCard key={event.name} {...event} />
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {events.slice(4, 8).map((event) => (
              <Link href={`/events/${event.slug}`} key={event._id}>
                <CategoryCard {...event} />
              </Link>
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <Swiper
            slidesPerView={2.2}
            spaceBetween={16}
            className="w-full"
            style={{ padding: "1rem 0 1rem 1rem" }} // Inline CSS
          >
            {events.map((item, index) => (
              <SwiperSlide
                key={item.slug}
                style={{
                  paddingRight: index === events.length - 1 ? "1rem" : "",
                }}
              >
                <Link href={`/events/${item.slug}`}>
                  <CategoryCard {...item} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
