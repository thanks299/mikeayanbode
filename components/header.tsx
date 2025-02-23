"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Search, MessageSquare, Menu, ArrowLeft } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "#", icon: <Facebook size={20} /> },
    { href: "https://x.com/rpmikeayanbode", icon: <Twitter size={20} /> },
    { href: "https://www.instagram.com/pmikeayanbode", icon: <Instagram size={20} /> },
    { href: "https://www.youtube.com/@RealPastorMikeAyanbode", icon: <Youtube size={20} /> },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  return (
    <header className="bg-gradient-to-b from-[#1a1a2e] to-transparent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex justify-between items-center py-3 lg:py-4">
          <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[#FF8C00] font-bold text-xl">Pastor</span>
            <span className="text-white text-xl">Mike Ayanbode</span>
          </Link>

          <div className="flex items-center gap-3 lg:gap-6">
            <Search className="text-[#FF8C00] cursor-pointer" />
            <MessageSquare className="text-[#FF8C00] cursor-pointer" />
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#FF8C00]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-lg z-50 p-6 lg:hidden transform transition-transform">
            {/* Close Button */}
            <button
              className="text-[#FF8C00] flex items-center gap-2 mb-4"
              onClick={() => setMenuOpen(false)}
            >
              <ArrowLeft size={24} />
            </button>

            <nav className="flex flex-col gap-4">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#FF8C00] text-gray-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <hr className="border-gray-300 my-2" />
                </div>
              ))}

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-8">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF8C00] text-gray-800"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-between items-center bg-white rounded-full px-6 lg:px-8 py-2 mb-4">
          <div className="flex gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#FF8C00]">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} className="hover:text-[#FF8C00]">
                {social.icon}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
