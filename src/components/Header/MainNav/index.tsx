"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import MainNavLinks from "./MainNavLinks";
import MobileMenuToggle from "./MobileMenuToggle";
import { Category, City } from "@/types/model";

type Props = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  cities: City[];
  categories: Category[];
};

const MainNav: React.FC<Props> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  cities,
  categories,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);

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

  return (
    <div className="flex items-center h-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center w-full px-8 md:justify-start justify-between">
        <Logo />
        <MainNavLinks
          categories={categories}
          cities={cities}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          openSubDropdown={openSubDropdown}
          setOpenSubDropdown={setOpenSubDropdown}
        />
        <div className="md:hidden">
          <MobileMenuToggle
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
