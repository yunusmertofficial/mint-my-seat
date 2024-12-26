"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/utils/data";

const MobileMenu: React.FC<{ onCloseMenu: () => void }> = ({ onCloseMenu }) => {
  const [openMegaCategories, setOpenMegaCategories] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMegaCategory = (label: string) => {
    setOpenMegaCategories((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isItemActive = (href: string) => pathname.startsWith(href);

  const cities = [
    { label: "Atlanta", href: "/cities/atlanta" },
    { label: "Austin", href: "/cities/austin" },
    { label: "Boston", href: "/cities/boston" },
    { label: "Charlotte", href: "/cities/charlotte" },
    { label: "Chicago", href: "/cities/chicago" },
    { label: "Cincinnati", href: "/cities/cincinnati" },
  ];

  return (
    <Dialog open={true} onClose={onCloseMenu} className="relative z-50">
      <div className="fixed inset-0 flex bg-gray-800 bg-opacity-75">
        {/* Sliding Panel */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-4/5 h-full bg-white p-6 overflow-auto shadow-lg"
        >
          {/* Header */}
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Menu</span>
            <button onClick={onCloseMenu} className="text-gray-600">
              ✕
            </button>
          </div>
          <hr className="my-4 border-gray-300" />

          {/* Menu Items */}
          <ul className="space-y-4">
            {categories.map((link) => (
              <li key={link.id} className="space-y-2">
                <div
                  className={`flex justify-between items-center cursor-pointer text-lg font-bold ${
                    pathname.startsWith(link.href)
                      ? "text-primary"
                      : "text-gray-700 hover:text-gray-500"
                  }`}
                  onClick={() => toggleMegaCategory(link.label)}
                >
                  <span>{link.label}</span>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{
                      rotate: openMegaCategories.includes(link.label) ? 180 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {openMegaCategories.includes(link.label) ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}
                  </motion.div>
                </div>
                {openMegaCategories.includes(link.label) && link.dropdown && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-3 space-y-2 ml-4"
                  >
                    {link.dropdown.map((category) => (
                      <li key={category.label}>
                        <div
                          className={`flex justify-between items-center cursor-pointer text-base font-semibold ${
                            category.dropdown?.some((item) =>
                              isItemActive(item.href)
                            )
                              ? "text-primary"
                              : "text-gray-700 hover:text-gray-500"
                          }`}
                          onClick={() => toggleMegaCategory(category.label)}
                        >
                          <span>{category.label}</span>
                          {category.dropdown && (
                            <motion.div
                              initial={{ rotate: 0 }}
                              animate={{
                                rotate: openMegaCategories.includes(
                                  category.label
                                )
                                  ? 180
                                  : 0,
                              }}
                              transition={{ duration: 0.4 }}
                            >
                              {openMegaCategories.includes(category.label) ? (
                                <FaMinus />
                              ) : (
                                <FaPlus />
                              )}
                            </motion.div>
                          )}
                        </div>
                        {openMegaCategories.includes(category.label) &&
                          category.dropdown && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="mt-2 ml-4 space-y-1"
                            >
                              {category.dropdown.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    className={`block text-sm ${
                                      isItemActive(item.href)
                                        ? "text-primary"
                                        : "text-gray-700 hover:text-gray-500"
                                    }`}
                                    onClick={onCloseMenu}
                                  >
                                    {item.label}
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
            ))}
            {/* City Dropdown */}
            <li className="space-y-2">
              <div
                className={`flex justify-between items-center cursor-pointer text-lg font-bold text-gray-700 hover:text-gray-500`}
                onClick={() => toggleMegaCategory("City")}
              >
                <span>City</span>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: openMegaCategories.includes("City") ? 180 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {openMegaCategories.includes("City") ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </motion.div>
              </div>
              {openMegaCategories.includes("City") && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mt-3 space-y-2 ml-4"
                >
                  {cities.map((city) => (
                    <li key={city.label}>
                      <Link
                        href={city.href}
                        className={`block text-base font-semibold ${
                          isItemActive(city.href)
                            ? "text-primary"
                            : "text-gray-700 hover:text-gray-500"
                        }`}
                        onClick={onCloseMenu}
                      >
                        {city.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          </ul>
        </motion.div>

        {/* Overlay to close the menu */}
        <div className="flex-1" onClick={onCloseMenu}></div>
      </div>
    </Dialog>
  );
};

export default MobileMenu;
