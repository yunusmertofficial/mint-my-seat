import { getAllCategories, getAllCities } from "@/utils/data";
import React from "react";
import HeaderNav from "./HeaderNav";

async function Header() {
  const categories = await getAllCategories();
  const cities = await getAllCities();

  return <HeaderNav categories={categories} cities={cities} />;
}

export default Header;
