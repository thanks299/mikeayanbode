import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8 md:pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 md:gap-8">
        {/* Brand Section */}
        <div>
          <div className="mb-3">
            <span className="text-[#FF8C00] font-bold">PASTOR</span>
            <h3 className="text-lg md:text-xl font-bold">MIKE AYANBODE</h3>
          </div>
          <p className="mb-3 text-sm">
            Pastor Mike Ayanbode is a man that brings out the gift and the ability in people's lives to enable them live
            an excellent life on earth
          </p>
          <p className="mb-3 text-sm">Come worship with me</p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-[#FF8C00] flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Visit Section */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-3">PAY US A VISIT</h3>
          <p className="mb-3 text-sm">I'd love to host you.</p>
          <div className="space-y-2 text-sm">
            <div className="flex gap-3">
              <MapPin className="text-[#FF8C00] flex-shrink-0 w-4 h-4" />
              <div>
                <p>RCCG Desire of Nations, 14 IT</p>
                <p>Igbani Street, Jabi, Abuja</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="text-[#FF8C00] w-4 h-4" />
              <p>mikeayanbode@gmail.com</p>
            </div>
            <div className="flex gap-3">
              <Phone className="text-[#FF8C00] w-4 h-4" />
              <p>+234 803 xxxx xxxx</p>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-3">Subscribe</h3>
          <p className="mb-3 text-sm">Subscribe to our newsletter. Be always in trend!</p>
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent border-[#FF8C00] text-white text-sm"
            />
            <Button
              className="bg-black text-[#FF8C00] border border-[#FF8C00] hover:bg-[#FF8C00] hover:text-black transition-colors w-auto px-6 text-sm"
              variant="outline"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-gray-800 text-center text-xs text-gray-400">
        Copyright © 2025 Pastor Mike ayanbode | All Rights Reserved
      </div>
    </footer>
  )
}

