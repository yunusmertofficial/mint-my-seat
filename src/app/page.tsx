import CategorySection from "@/sections/CategorySection";
import { CategoryItem } from "@/components/cards/CategoryCard";
import TopEventsSection from "@/sections/TopEventsSection";
import SuccessfullSection from "@/sections/SuccessfullSection";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
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
      <HeroSection />
      <div className="relative bottom-28">
        <TopEventsSection />
        <CategorySection title="Music" items={musicItems} />
        <CategorySection title="Sports" items={sportsItems} />
        <CategorySection title="Shows" items={showsItems} />
        <SuccessfullSection />
      </div>
    </main>
  );
}
