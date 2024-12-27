"use client";
import Link from "next/link";
import React from "react";

interface LinkItem {
  label: string;
  href: string;
  /**
   * external: true olduğunda harici link
   * (target="_blank", rel="noopener noreferrer") ile açılır.
   */
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: LinkItem[];
}

export default function Footer() {
  // Footer'a ait sütun ve link verileri (dinamik)
  const footerLinks: FooterColumn[] = [
    {
      title: "Music",
      links: [
        { label: "Sports", href: "/sports" },
        { label: "Shows", href: "/shows" },
        { label: "Sell on MintMySeat", href: "/sell-on-mint-my-seat" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Help & Support", href: "/help-support" },
        { label: "MintMySeat Magazine", href: "/MintMySeat-magazine" },
      ],
    },
    {
      title: "Our Commitment",
      links: [
        { label: "Terms of Use", href: "/terms-of-use" },
        { label: "Privacy Notice", href: "/privacy-notice" },
        { label: "Additional Terms for Sellers", href: "/additional-terms" },
        {
          label: "California Privacy Notice",
          href: "/california-privacy-notice",
        },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "X", href: "https://twitter.com", external: true },
        { label: "Facebook", href: "https://facebook.com", external: true },
        { label: "Instagram", href: "https://instagram.com", external: true },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Üst kısım: 4 sütunluk linkler */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-white font-bold mb-3">{column.title}</h3>
              <ul className="space-y-2 text-base font-medium">
                {column.links.map((linkItem, linkIdx) => (
                  <li key={linkIdx}>
                    {linkItem.external ? (
                      // Harici link için yeni sekmede açılması + güvenlik
                      <Link
                        href={linkItem.href}
                        className="hover:text-gray-100 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {linkItem.label}
                      </Link>
                    ) : (
                      // Dahili link (Next.js sayfası)
                      <Link
                        href={linkItem.href}
                        className="hover:text-gray-100 transition-colors"
                      >
                        {linkItem.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt kısım: Çizgi ve marka bilgisi */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-between">
          <div className="text-white text-lg font-bold">MintMySeat</div>
          <div className="text-gray-400 text-sm">© MintMySeat 2024</div>
        </div>
      </div>
    </footer>
  );
}
