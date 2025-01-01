import TopEventsSection from "@/containers/TopEventsSection";
import BreadcrumbHeaderSection from "@/containers/BreadcrumbHeaderSection";
import EventSection from "../EventSection";
import GetSubCategoryWithTopEvents from "@/types/api-models/getSubCategoryWithTopEvents";

export default function SubcategoryContainer({
  subcategory,
}: {
  subcategory: GetSubCategoryWithTopEvents;
}) {
  return (
    <main className="relative">
      <BreadcrumbHeaderSection
        title={subcategory.name}
        description={subcategory.description}
        src={subcategory.imageUrl}
        alt={`${subcategory.name} category banner`}
        breadcrumbs={[
          { label: "Home", link: "/" },
          {
            label: subcategory?.category?.name || "",
            link: `/${subcategory?.category?.slug}`,
          },
          { label: subcategory.name },
        ]}
      />
      <div className="relative bottom-28">
        <TopEventsSection topEvents={subcategory.topEvents} />
        <EventSection
          title={subcategory.name}
          events={subcategory?.events || []}
        />
      </div>
    </main>
  );
}
