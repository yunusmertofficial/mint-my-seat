import CategoryContainer from "@/containers/Category";
import {
  getAllCategories,
  getCategory,
  getCategoryWithTopEvents,
} from "@/utils/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: Promise<{
    category_slug: string;
  }>;
};

export async function generateStaticParams(): Promise<
  Array<{ category_slug: string }>
> {
  const categories = await getAllCategories();

  return categories.map((category) => ({
    category_slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const category_slug = (await params).category_slug;
  const category = await getCategory(category_slug);
  if (!category) {
    notFound();
  }

  return {
    title: `${category.name}`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Params) {
  const category_slug = (await params).category_slug;
  const category = await getCategoryWithTopEvents(category_slug);

  if (!category) {
    notFound();
  }

  return <CategoryContainer category={category} />;
}
