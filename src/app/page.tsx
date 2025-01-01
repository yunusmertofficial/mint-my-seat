import HomeContainer from "@/containers/Home";
import { getAllCategoriesWithTopEvents } from "@/utils/data";
import React from "react";

async function HomePage() {
  const categories = await getAllCategoriesWithTopEvents();

  return (
    <HomeContainer
      categories={categories.categories}
      topEvents={categories.topEvents}
    />
  );
}

export default HomePage;
