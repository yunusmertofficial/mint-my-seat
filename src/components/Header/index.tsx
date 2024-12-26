"use client";

import { useState } from "react";
import MainNav from "./MainNav";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
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
        />
        {isMobileMenuOpen && <MobileMenu onCloseMenu={handleCloseMenu} />}
      </nav>
    </>
  );
};

export default Header;
