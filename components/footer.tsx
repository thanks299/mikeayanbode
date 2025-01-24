"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react"
import { subscribeToNewsletter } from "@/app/subscribe-action"

export default function Footer() {
  const [isPending, setIsPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    try {
      const result = await subscribeToNewsletter(formData)
      setMessage(result.message)
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsPending(false)
    }
  }

  const socialMediaLinks = [
    'https://www.facebook.com/yourfacebookpage',
    'https://x.com/rpmikeayanbode?t=azGtd-KqAw5_7Oj_GRZcAw&s=09',
    'https://www.instagram.com/yourinstagramhandle',
    'https://www.youtube.com/@RealPastorMikeAyanbode',
  ];

  return (
    <footer className="bg-black text-white pt-8 md:pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Brand Section */}
        <div>
          <div className="mb-3">
            <span className="text-[#FF8C00] font-bold text-sm md:text-base">PASTOR</span>
            <h3 className="text-base md:text-lg lg:text-xl font-bold">MIKE AYANBODE</h3>
          </div>
          <p className="mb-3 text-xs md:text-sm">
            Pastor Mike Ayanbode is a man that brings out the gift and the ability in people's lives to enable them live
            an excellent life on earth
          </p>
          <p className="mb-3 text-xs md:text-sm">Come worship with me</p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
              key={i}
              href={socialMediaLinks[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-[#FF8C00] flex items-center justify-center hover:bg-[#FF8C00] transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Visit Section */}
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3">PAY US A VISIT</h3>
          <p className="mb-3 text-xs md:text-sm">I'd love to host you.</p>
          <div className="space-y-2 text-xs md:text-sm">
            <div className="flex gap-3">
              <MapPin className="text-[#FF8C00] flex-shrink-0 w-4 h-4" />
              <div>
                <p>Abuja</p>
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
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3">Subscribe</h3>
          <p className="mb-3 text-xs md:text-sm">Subscribe to our newsletter. Be always in trend!</p>
          <form action={handleSubmit} className="space-y-3">
            <Input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              className="bg-transparent border-[#FF8C00] text-white text-xs md:text-sm h-12"
            />
            <Button
              type="submit"
              disabled={isPending}
              className="border border-[#FF8C00] bg-black text-white hover:bg-[#FF8C00] hover:text-black transition-colors w-auto px-4 md:px-6 text-xs md:text-sm h-12"
              variant="outline"
            >
              {isPending ? "Subscribing..." : "Subscribe"}
            </Button>
            {message && <p className="text-sm text-[#FF8C00]">{message}</p>}
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-gray-800 text-center text-xs text-gray-400">
        Copyright © 2025 Pastor Mike ayanbode | All Rights Reserved
      </div>
    </footer>
  )
}

