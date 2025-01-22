"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone } from "lucide-react"
import ScrollArrow from '@/components/scroll-arrow'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Schedule an Appointment with me
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/mikeayanbody2.jpg"
              alt="Pastor Mike Ayanbode"
              width={500}
              height={600}
              className="rounded-lg mb-8"
            />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#FF8C00]" />
                <p>Abuja</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#FF8C00]" />
                <p>mikeayanbode@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#FF8C00]" />
                <p>+234 803 xxxx xxxx</p>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input id="name" className="bg-zinc-900 border-[#FF8C00]" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input id="email" type="email" className="bg-zinc-900 border-[#FF8C00]" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2">
                Phone
              </label>
              <Input id="phone" type="tel" className="bg-zinc-900 border-[#FF8C00]" />
            </div>
            <div>
              <label htmlFor="date" className="block mb-2">
                Preferred Date
              </label>
              <Input id="date" type="date" className="bg-zinc-900 border-[#FF8C00]" />
            </div>
            <div>
              <label htmlFor="time" className="block mb-2">
                Preferred Time
              </label>
              <Input id="time" type="time" className="bg-zinc-900 border-[#FF8C00]" />
            </div>
            <div>
              <label htmlFor="reason" className="block mb-2">
                Reason for Appointment
              </label>
              <Textarea id="reason" className="bg-zinc-900 border-[#FF8C00]" rows={4} />
            </div>
            <Button className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 w-full">Schedule Appointment</Button>
          </motion.form>
        </div>
      </div>
      <ScrollArrow />
    </div>
  )
}

