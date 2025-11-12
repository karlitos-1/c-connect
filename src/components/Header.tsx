"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/forfaits", label: "Forfaits" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-40 h-40 md:w-40 md:h-40">
              <Image
                src="/images/logo.png"
                alt="Logo C-CONNECT"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#0B0B0B] hover:text-[#FFD400] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="tel:+24206940139"
              className="flex items-center text-[#0B0B0B] hover:text-[#FFD400] transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">+242 06 940 13 92</span>
            </a>
            <Link
              href="/devis"
              className="bg-[#FFD400] text-[#0B0B0B] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#FFD400]/90 transition-all"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#0B0B0B] hover:bg-gray-100 rounded-lg transition"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md animate-slideDown">
          <nav className="flex flex-col space-y-4 px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#0B0B0B] hover:text-[#FFD400] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+24206940139"
              className="flex items-center text-[#0B0B0B] hover:text-[#FFD400] transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4 mr-2" />
              +242 06 940 13 92
            </a>
            <Link
              href="/devis"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#FFD400] text-[#0B0B0B] px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#FFD400]/90 transition-colors text-center"
            >
              Devis gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
