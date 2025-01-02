import React from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import { City } from "@/types/model";

const MobileCityMenu: React.FC<{
  cities: City[];
  isOpen: boolean;
  toggleMegaCategory: (id: string) => void;
  onCloseMenu: () => void;
}> = ({ cities, isOpen, toggleMegaCategory, onCloseMenu }) => (
  <li className="space-y-2">
    <div
      className="flex justify-between items-center cursor-pointer text-lg font-bold"
      onClick={() => toggleMegaCategory("City")}
    >
      <span>City</span>
      {isOpen ? <FaMinus /> : <FaPlus />}
    </div>
    {isOpen && (
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-3 space-y-2 ml-4"
      >
        {cities.map((city) => (
          <li key={city._id}>
            <Link
              href={`/cities/${city.slug}`}
              onClick={onCloseMenu}
              className="text-base font-semibold text-gray-700 hover:text-gray-500"
            >
              {city.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    )}
  </li>
);

export default MobileCityMenu;
