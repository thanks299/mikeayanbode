"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Search, MessageSquare, Menu, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-[#1a1a2e] to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#FF8C00] font-bold text-xl">PASTOR</span>
            <span className="text-white text-xl">MIKE AYANBODE</span>
          </Link>

          <div className="flex items-center gap-4">
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
          <div className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-lg z-50 p-6 lg:hidden">
            {/* Close Button */}
            <button
              className="text-[#FF8C00] flex items-center gap-2 mb-4"
              onClick={() => setMenuOpen(false)}
            >
              <ArrowLeft size={24} />
            </button>

            <nav className="flex flex-col gap-4">
              {/* Navigation Links */}
              <div>
                <Link href="/" className="hover:text-[#FF8C00] text-gray-800">
                  Home
                </Link>
                <hr className="border-gray-300 my-2" />
              </div>
              <div>
                <Link href="/about" className="hover:text-[#FF8C00] text-gray-800">
                  About Me
                </Link>
                <hr className="border-gray-300 my-2" />
              </div>
              <div>
                <Link href="/resources" className="hover:text-[#FF8C00] text-gray-800">
                  Resources
                </Link>
                <hr className="border-gray-300 my-2" />
              </div>
              <div>
                <Link href="/contact" className="hover:text-[#FF8C00] text-gray-800">
                  Contact
                </Link>
                <hr className="border-gray-300 my-2" />
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-8">
                <Link href="#" className="hover:text-[#FF8C00] text-gray-800">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="hover:text-[#FF8C00] text-gray-800">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="hover:text-[#FF8C00] text-gray-800">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="hover:text-[#FF8C00] text-gray-800">
                  <Youtube size={20} />
                </Link>
              </div>
            </nav>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-between items-center bg-white rounded-full px-8 py-2 mb-4">
          <div className="flex gap-8">
            <Link href="/" className="hover:text-[#FF8C00]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#FF8C00]">
              About Me
            </Link>
            <Link href="/resources" className="hover:text-[#FF8C00]">
              Resources
            </Link>
            <Link href="/contact" className="hover:text-[#FF8C00]">
              Contact
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#FF8C00]">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-[#FF8C00]">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-[#FF8C00]">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-[#FF8C00]">
              <Youtube size={20} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
