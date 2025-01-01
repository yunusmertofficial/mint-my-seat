import TopEventsSection from "@/containers/TopEventsSection";
import SuccessfullSection from "@/containers/Home/SuccessfullSection";
import HeroSection from "@/containers/Home/HeroSection";
import CategorySection from "@/containers/CategorySection";
import CategoryWithTopEvents from "@/types/api-models/getAllCategoriesWithTopEvents";

export default function Home({ categories, topEvents }: CategoryWithTopEvents) {
  return (
    <main className="relative">
      <HeroSection />
      <div className="relative bottom-28">
        <TopEventsSection topEvents={topEvents} />
        {categories.map((category) => (
          <CategorySection
            key={category._id}
            href={`${category.slug}`}
            title={category.name}
            events={category.events}
          />
        ))}
        <SuccessfullSection />
      </div>
    </main>
  );
}
