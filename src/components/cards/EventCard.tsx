import Image from "next/image";
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
export default EventCard;
