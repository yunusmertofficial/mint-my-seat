import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { Subcategory } from "@/types/model";

type CategoryDropdownMenuProps = {
  dropdownOption: {
    label: string;
    value: string;
  };
  items: Subcategory[];
  isOpen: boolean;
  setOpenDropdown: (label: string | null) => void;
  setOpenSubDropdown: (label: string | null) => void;
  openSubDropdown: string | null;
};

const CategoryDropdownMenu: React.FC<CategoryDropdownMenuProps> = ({
  dropdownOption,
  items,
  isOpen,
  setOpenDropdown,
  setOpenSubDropdown,
  openSubDropdown,
}) => (
  <li
    className="capitalize relative group font-semibold"
    onClick={() => setOpenDropdown(dropdownOption.value)}
  >
    <div className="relative flex items-center hover:text-gray-300 cursor-pointer">
      {dropdownOption.label}
      <FaChevronDown className="ml-1" />
    </div>
    {isOpen && (
      <div className="absolute left-0 w-full z-10 transition-all duration-300 ease-in-out">
        <div className="mt-7"></div>
        <ul className="py-4 px-6 bg-white shadow-lg rounded-lg space-y-2 relative min-w-max">
          {items.map((item) => (
            <li
              key={item._id}
              className="group"
              onClick={() => setOpenSubDropdown(item._id)}
            >
              <div className="flex items-center justify-between hover:bg-gray-100 p-2 rounded-md transition-colors duration-200 cursor-pointer">
                <span className="flex items-center justify-between text-gray-700 font-semibold">
                  {item.name}
                  <FaChevronRight className="ml-3" />
                </span>
              </div>
              {openSubDropdown === item._id && (
                <ul className="absolute left-full top-0 bg-white shadow-lg rounded-lg p-4 space-y-2 min-w-max">
                  {item.events?.map((subItem) => (
                    <li
                      key={subItem._id}
                      className="hover:bg-gray-100 p-2 rounded-md transition-colors duration-200 whitespace-nowrap cursor-pointer"
                    >
                      <Link
                        href={`/events/${subItem.slug}`}
                        className="block text-gray-700 font-semibold"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
);

export default CategoryDropdownMenu;
