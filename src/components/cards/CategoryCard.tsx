import Image from "next/image";

export type CategoryItem = {
  imageSrc: string;
  title: string;
};

export default function CategoryCard({ imageSrc, title }: CategoryItem) {
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
