"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaChevronDown, FaChevronRight, FaUser } from "react-icons/fa";
import Link from "next/link";
import { categories } from "@/utils/data";

type Props = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
};

const MainNav: React.FC<Props> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  // State to handle the open state of each dropdown
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".menu")) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cities = [
    { label: "Atlanta", href: "/cities/atlanta" },
    { label: "Austin", href: "/cities/austin" },
    { label: "Boston", href: "/cities/boston" },
    { label: "Charlotte", href: "/cities/charlotte" },
    { label: "Chicago", href: "/cities/chicago" },
    { label: "Cincinnati", href: "/cities/cincinnati" },
  ];

  return (
    <div className="flex items-center h-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center w-full px-8 md:justify-start justify-between">
        {/* Logo (Text) */}
        <div className="text-3xl font-extrabold flex-shrink-0">
          <Link href="/" aria-label="Ana Sayfa">
            MintMySeat
          </Link>
        </div>

        {/* Main Nav Links */}
        <div className="hidden md:flex items-center space-x-6 ml-8">
          <ul className="flex space-x-8 menu">
            {categories.map((link) => (
              <li
                key={link.id}
                className="capitalize relative group font-semibold"
                onClick={() => setOpenDropdown(link.label)}
              >
                <div
                  className={`relative flex items-center hover:text-gray-300 cursor-pointer`}
                >
                  {link.label}
                  <FaChevronDown className="ml-1" />
                </div>
                {openDropdown === link.label && (
                  <div className="absolute left-0 w-full z-10 transition-all duration-300 ease-in-out">
                    <div className="mt-7" />
                    <ul className="py-4 px-6 bg-white shadow-lg rounded-lg space-y-2 relative min-w-max">
                      {link.dropdown.map((item) => (
                        <li
                          key={item.label}
                          className="group"
                          onClick={() => setOpenSubDropdown(item.label)}
                        >
                          <div className="flex items-center justify-between hover:bg-gray-100 p-2 rounded-md transition-colors duration-200 cursor-pointer ">
                            <span className="flex items-center justify-between text-gray-700 font-semibold ">
                              {item.label}
                              <FaChevronRight className="ml-3" />
                            </span>
                          </div>
                          {openSubDropdown === item.label && item.dropdown && (
                            <ul className="absolute left-full top-0 bg-white shadow-lg rounded-lg p-4 space-y-2 min-w-max">
                              {item.dropdown.map((subItem) => (
                                <li
                                  key={subItem.label}
                                  className="hover:bg-gray-100 p-2 rounded-md transition-colors duration-200 whitespace-nowrap cursor-pointer"
                                >
                                  <Link
                                    href={subItem.href}
                                    className="block text-gray-700 font-semibold"
                                  >
                                    {subItem.label}
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
            ))}
            <li
              key={"city"}
              className="capitalize relative group font-semibold"
              onClick={() => setOpenDropdown("city")}
            >
              <div
                className={`relative flex items-center hover:text-gray-300 cursor-pointer`}
              >
                City
                <FaChevronDown className="ml-1" />
              </div>
              {openDropdown === "city" && (
                <div className="absolute left-0 w-full z-10 transition-all duration-300 ease-in-out">
                  <div className="mt-7" />
                  <ul className="py-4 px-6 bg-white shadow-lg rounded-lg space-y-2 relative min-w-max">
                    {cities.map((item) => (
                      <li
                        key={item.label}
                        className="group"
                        onClick={() => setOpenSubDropdown(item.label)}
                      >
                        <div className="flex items-center justify-between hover:bg-gray-100 p-2 rounded-md transition-colors duration-200 cursor-pointer">
                          <Link
                            href={item.href}
                            className="block text-gray-700 font-semibold"
                          >
                            {item.label}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Sağ Menü Öğeleri */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <Link
            href="/sell"
            className="text-white hover:text-gray-300 font-semibold"
          >
            Sell
          </Link>
          <Link
            href="/support"
            className="text-white hover:text-gray-300 font-semibold"
          >
            Support
          </Link>
          <Link href="/profile" aria-label="Kullanıcı Profili">
            <FaUser size={24} className="text-white hover:text-gray-300" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
            aria-label="Mobile Menu"
            whileTap={{ scale: 0.9 }}
          >
            <FaBars size={30} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
