import React from "react";
import CategoryDropdownMenu from "./CategoryDropdownMenu";
import { Category, City } from "@/types/model";
import CityDropdownMenu from "./CityDropdownMenu";

type MainNavLinksProps = {
  categories: Category[];
  cities: City[];
  openDropdown: string | null;
  setOpenDropdown: (label: string | null) => void;
  openSubDropdown: string | null;
  setOpenSubDropdown: (label: string | null) => void;
};

const MainNavLinks: React.FC<MainNavLinksProps> = ({
  categories,
  cities,
  openDropdown,
  setOpenDropdown,
  openSubDropdown,
  setOpenSubDropdown,
}) => (
  <div className="hidden md:flex items-center space-x-6 ml-8">
    <ul className="flex space-x-8 menu">
      {categories.map((category) => (
        <CategoryDropdownMenu
          key={category._id}
          dropdownOption={{
            label: category.name,
            value: category._id,
          }}
          items={category.subcategories || []}
          isOpen={openDropdown === category._id}
          setOpenDropdown={setOpenDropdown}
          setOpenSubDropdown={setOpenSubDropdown}
          openSubDropdown={openSubDropdown}
        />
      ))}
      <CityDropdownMenu
        key="city"
        dropdownOption={{
          label: "City",
          value: "City",
        }}
        items={cities}
        isOpen={openDropdown === "City"}
        setOpenDropdown={setOpenDropdown}
      />
    </ul>
  </div>
);

export default MainNavLinks;
