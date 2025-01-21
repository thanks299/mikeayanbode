"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Search, MessageSquare } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-[#1a1a2e] to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#FF8C00] font-bold">PASTOR</span>
            <span className="text-white font-bold">MIKE AYANBODE</span>
          </Link>

          <div className="flex items-center gap-4">
            <Search className="text-[#FF8C00]" />
            <MessageSquare className="text-[#FF8C00]" />
          </div>
        </div>

        <nav className="flex justify-between items-center bg-white rounded-full px-8 py-2 mb-4">
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
  )
}

