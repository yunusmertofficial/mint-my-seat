import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import { Category } from "@/types/model";

const MobileCategoryMenu: React.FC<{
  category: Category;
  isOpen: boolean;
  toggleMegaCategory: (id: string) => void;
  onCloseMenu: () => void;
}> = ({ category, isOpen, toggleMegaCategory, onCloseMenu }) => {
  const [openSubcategories, setOpenSubcategories] = useState<string[]>([]);

  const toggleSubcategory = (id: string) => {
    setOpenSubcategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <li className="space-y-2">
      <div
        className="flex justify-between items-center cursor-pointer text-lg font-bold"
        onClick={() => toggleMegaCategory(category._id)}
      >
        <span>{category.name}</span>
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
          {category.subcategories?.map((subcategory) => (
            <li key={subcategory._id} className="space-y-2">
              <div
                className="flex justify-between items-center cursor-pointer text-base font-semibold text-gray-700 hover:text-gray-500"
                onClick={() => toggleSubcategory(subcategory._id)}
              >
                <span>{subcategory.name}</span>
                {openSubcategories.includes(subcategory._id) ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </div>
              {openSubcategories.includes(subcategory._id) && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mt-2 ml-4 space-y-1"
                >
                  {subcategory.events?.map((event) => (
                    <li key={event._id}>
                      <Link
                        href={`/events/${event.slug}`}
                        onClick={onCloseMenu}
                        className="block text-sm text-gray-700 hover:text-gray-500"
                      >
                        {event.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </motion.ul>
      )}
    </li>
  );
};

export default MobileCategoryMenu;
