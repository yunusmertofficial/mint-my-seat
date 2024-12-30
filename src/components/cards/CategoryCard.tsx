"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdArrowForward } from "react-icons/md";

export type CategoryItem = {
  imageSrc: string;
  title: string;
};

function CategoryCard({ imageSrc, title }: CategoryItem) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* 
        Burada mobilde biraz daha yüksek (h-40), 
        md breakpoint’inde (≥768px) ise h-44 verdik.
      */}
      <div className="relative w-full h-52 md:h-44">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-3 text-center">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}

type CategorySectionProps = {
  title: string;
  items: CategoryItem[];
};

export default function CategorySection({
  title,
  items,
}: CategorySectionProps) {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto ">
        {/* Başlık + View All butonu */}
        <div className="flex items-center justify-between mb-6 px-4">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <button className="flex items-center gap-2">
            <span className="uppercase tracking-wide text-gray-900 font-light md:font-semibold">
              View All
            </span>
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-900 text-white">
              <MdArrowForward size={16} />
            </span>
          </button>
        </div>

        {/* Masaüstü (≥ md) için grid */}
        <div className="hidden md:block px-4">
          <div className="grid grid-cols-4 gap-4 mb-4">
            {items.slice(0, 4).map((item) => (
              <CategoryCard key={item.title} {...item} />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {items.slice(4, 8).map((item) => (
              <CategoryCard key={item.title} {...item} />
            ))}
          </div>
        </div>

        {/* Mobil (< md) için Swiper */}
        <div className="block md:hidden">
          <Swiper
            slidesPerView={2.2}
            spaceBetween={16}
            className="w-full"
            style={{ padding: "1rem 0 1rem 1rem" }} // Inline CSS
          >
            {items.map((item, index) => (
              <SwiperSlide
                key={item.title}
                style={{
                  paddingRight: index === items.length - 1 ? "1rem" : "",
                }}
              >
                <CategoryCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
