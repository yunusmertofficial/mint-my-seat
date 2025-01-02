"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import MobileCategoryMenu from "./MobileCategoryMenu";
import MobileCityMenu from "./MobileCityMenu";
import { Category, City } from "@/types/model";

const MobileMenuNav: React.FC<{
  onCloseMenu: () => void;
  cities: City[];
  categories: Category[];
}> = ({ onCloseMenu, cities, categories }) => {
  const [openMegaCategories, setOpenMegaCategories] = useState<string[]>([]);

  const toggleMegaCategory = (id: string) => {
    setOpenMegaCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Dialog open={true} onClose={onCloseMenu} className="relative z-50">
      <div className="fixed inset-0 flex bg-gray-800 bg-opacity-75">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-4/5 h-full bg-white p-6 overflow-auto shadow-lg"
        >
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Menu</span>
            <button onClick={onCloseMenu} className="text-gray-600">
              ✕
            </button>
          </div>
          <hr className="my-4 border-gray-300" />
          <ul className="space-y-4">
            {categories.map((category) => (
              <MobileCategoryMenu
                key={category._id}
                category={category}
                isOpen={openMegaCategories.includes(category._id)}
                toggleMegaCategory={toggleMegaCategory}
                onCloseMenu={onCloseMenu}
              />
            ))}
            <MobileCityMenu
              cities={cities}
              isOpen={openMegaCategories.includes("City")}
              toggleMegaCategory={toggleMegaCategory}
              onCloseMenu={onCloseMenu}
            />
          </ul>
        </motion.div>
        <div className="flex-1" onClick={onCloseMenu}></div>
      </div>
    </Dialog>
  );
};

export default MobileMenuNav;
