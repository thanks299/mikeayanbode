"use client"

import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ChurchSections() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col gap-20 p-8">
      {/* Visit Section */}
      <section className="max-w-xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-8">PAY US A VISIT</h2>
        <div className="w-12 h-0.5 bg-white mb-8"></div>
        <p className="text-2xl mb-12">I&apos;d love to host you.</p>

        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#FF8C00] flex-shrink-0 mt-1" />
            <div>
              <p>RCCG Desire of Nations, 14 IT</p>
              <p>Igbani Street,</p>
              <p>Jabi, Abuja</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-[#FF8C00]" />
            <p>info@pastormikeayanbode.com</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-[#FF8C00]" />
            <p>+234 803 xxxx xxxx</p>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="max-w-xl mx-auto w-full text-center">
        <h2 className="text-4xl font-bold mb-6">Subscribe</h2>
        <p className="text-xl mb-8">Subscribe to our newsletter. Be always in trend!</p>
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Enter Email" className="bg-transparent border-[#FF8C00] h-12" />
          <Button variant="outline" className="border-[#FF8C00] text-white hover:bg-[#FF8C00] h-12">
            Subscribe
          </Button>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="max-w-xl mx-auto w-full text-center">
        <h3 className="text-[#FF8C00] text-2xl font-bold mb-2">PASTOR</h3>
        <h2 className="text-4xl font-bold mb-8 text-gray-200">MIKE AYANBODE</h2>
        <p className="text-lg mb-8 max-w-lg mx-auto">
          Pastor Mike Ayanbode is a man that brings out the gift and the ability in people&apos;s lives to enable them
          live an excellent life on earth
        </p>
        <p className="mb-8">Come worship with me</p>

        <div className="flex justify-center gap-6">
          {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full border border-[#FF8C00] flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

