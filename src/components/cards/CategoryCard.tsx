import Image from "next/image";
import { Event } from "@/types/model";

export default function CategoryCard({ imageUrl, name }: Event) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative w-full h-52 md:h-44">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="p-3 text-center">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
      </div>
    </div>
  );
}
