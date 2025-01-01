import TopEventsSection from "@/containers/TopEventsSection";
import CategorySection from "@/containers/CategorySection";
import BreadcrumbHeaderSection from "@/containers/BreadcrumbHeaderSection";
import GetCategoryWithTopEvents from "@/types/api-models/getCategoryWithTopEvents";

interface CategoryContainerProps {
  category: GetCategoryWithTopEvents;
}

export default function CategoryContainer({
  category,
}: CategoryContainerProps) {
  return (
    <main className="relative">
      <BreadcrumbHeaderSection
        title={category.name}
        description={category.description}
        src={category.imageUrl}
        alt={`${category.name} category banner`}
        breadcrumbs={[{ label: "Home", link: "/" }, { label: category.name }]}
      />
      <div className="relative bottom-28">
        <TopEventsSection topEvents={category.topEvents} />
        {category.subcategories?.map((subcategory) => (
          <CategorySection
            key={subcategory._id}
            href={`${category.slug}/${subcategory.slug}`}
            title={subcategory.name}
            events={subcategory.events || []}
          />
        ))}
      </div>
    </main>
  );
}
