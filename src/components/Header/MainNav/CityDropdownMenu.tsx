import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { City } from "@/types/model";
import Link from "next/link";

type CityDropdownMenuProps = {
  dropdownOption: {
    label: string;
    value: string;
  };
  items: City[];
  isOpen: boolean;
  setOpenDropdown: (label: string | null) => void;
};

const CityDropdownMenu: React.FC<CityDropdownMenuProps> = ({
  dropdownOption,
  items,
  isOpen,
  setOpenDropdown,
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
              className="hover:bg-gray-100 p-2 rounded-md transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              <Link
                href={`/cities/${item.slug}`}
                className="block text-gray-700 font-semibold"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
);

export default CityDropdownMenu;
