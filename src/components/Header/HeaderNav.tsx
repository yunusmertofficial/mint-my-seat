"use client";

import { useState } from "react";
import MainNav from "./MainNav";
import MobileMenuNav from "./MobileMenuNav";
import { Category, City } from "@/types/model";

const HeaderNav = ({
  cities,
  categories,
}: {
  cities: City[];
  categories: Category[];
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav aria-label="Ana Menü" className="sticky top-0 z-50">
        <MainNav
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          cities={cities}
          categories={categories}
        />
        {isMobileMenuOpen && (
          <MobileMenuNav
            onCloseMenu={handleCloseMenu}
            cities={cities}
            categories={categories}
          />
        )}
      </nav>
    </>
  );
};

export default HeaderNav;
