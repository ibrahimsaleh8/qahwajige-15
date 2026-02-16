"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HeaderData } from "@/lib/responseType";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { AiOutlineCoffee } from "react-icons/ai";

const navLinks = [
  { href: "#about", label: "عنّا" },
  { href: "#services", label: "خدماتنا" },
  { href: "#packages", label: "باقاتنا" },
  { href: "#gallery", label: "معرض الصور" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Header({
  brandName,
  telephone,
}: HeaderData & { telephone?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black bg-white`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3  sm:text-lg md:text-xl font-bold text-black">
            <span className="w-8 h-8 rounded bg-main-color flex items-center justify-center">
              <AiOutlineCoffee className="w-5 h-5 text-white" />
            </span>
            <span>{brandName}</span>
          </Link>

          {/* Desktop Navigation - Right */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-main-color transition-colors font-bold text-sm">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="toggle mobile menu"
              className="lg:hidden text-black cursor-pointer p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <a
              target="_blank"
              href={`tel:${telephone}`}
              className="flex items-center gap-1 rounded-full border-2 border-black bg-white text-black shadow-[4px_4px_0px_#0D1B2A] hover:bg-main-color/90 font-semibold md:px-6 py-2 px-4 text-sm md:text-base transition-all">
              <IoIosCall className="rotate-248 md:w-5 md:h-5" />
              احجز الآن
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white fixed w-full border-y border-black/20">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    setTimeout(() => setIsMobileMenuOpen(false), 300)
                  }
                  className="text-black hover:text-main-color transition-colors font-medium py-2">
                  {link.label}
                </Link>
              ))}
              <a
                target="_blank"
                href={`tel:${telephone}`}
                className="flex items-center gap-1 rounded-full border-2 border-black bg-main-color text-white shadow-[4px_4px_0px_#0D1B2A] hover:bg-main-color/90 font-semibold md:px-6 py-2 px-4 text-sm md:text-base transition-all">
                احجز الآن
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
