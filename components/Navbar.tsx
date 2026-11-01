"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-0 py-6 md:py-10 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/logo.svg"
            alt="Positivus"
            width={180}
            height={29}
            className="h-7 md:h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10 text-[20px] font-normal text-[#191A23]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-black hover:underline underline-offset-4 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="border border-[#191A23] rounded-[14px] px-[35px] py-[18px] text-[20px] font-normal text-[#191A23] hover:bg-[#191A23] hover:text-white transition-all duration-200 active:scale-95"
          >
            Request a quote
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#191A23] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#191A23]/10 px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-5 text-[18px] font-medium text-[#191A23]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-[#B9FF66] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center border border-[#191A23] rounded-[14px] px-6 py-4 text-[18px] font-medium bg-[#191A23] text-white hover:bg-[#B9FF66] hover:text-black transition-colors"
              >
                Request a quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

