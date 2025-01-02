import React from "react";
import Link from "next/link";

const Logo: React.FC = () => (
  <div className="text-3xl font-extrabold flex-shrink-0">
    <Link href="/" aria-label="Ana Sayfa">
      MintMySeat
    </Link>
  </div>
);

export default Logo;
