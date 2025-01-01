import {
  getSubcategory,
  getAllSubcategories,
  getSubcategoryWithTopEvents,
} from "@/utils/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import SubcategoryContainer from "@/containers/SubCategory";

type Params = {
  params: Promise<{
    category_slug: string;
    subcategory_slug: string;
  }>;
};

// Static Params for Dynamic Routes
export async function generateStaticParams(): Promise<
  Array<{ category_slug: string; subcategory_slug: string }>
> {
  const subcategories = await getAllSubcategories();

  return subcategories.map((subcategory) => ({
    category_slug: subcategory.category.slug,
    subcategory_slug: subcategory.slug,
  }));
}

// Metadata for SEO
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = await params;
  const { category_slug, subcategory_slug } = slug;
  const subcategory = await getSubcategory(category_slug, subcategory_slug);

  if (!subcategory) {
    notFound();
  }

  return {
    title: `${subcategory.name} - ${subcategory.category.name}`,
    description: subcategory.description,
  };
}

// Page Component
export default async function SubcategoryPage({ params }: Params) {
  const slug = await params;
  const { category_slug, subcategory_slug } = slug;
  const subcategory = await getSubcategoryWithTopEvents(
    category_slug,
    subcategory_slug
  );

  if (!subcategory) {
    notFound();
  }

  return <SubcategoryContainer subcategory={subcategory} />;
}
