"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ScrollArrow from '@/components/scroll-arrow'

export default function Resources() {
  const resources = [
    { title: "Weekly Sermon Series", description: "Access our latest sermon series on various biblical topics." },
    { title: "Bible Study Materials", description: "In-depth study materials to help you grow in your faith." },
    { title: "Prayer Guides", description: "Guides to help you develop a stronger prayer life." },
    { title: "Worship Albums", description: "Inspirational worship music to uplift your spirit." },
    { title: "Books by Pastor Mike", description: "Explore books written by Pastor Mike Ayanbode." },
    { title: "Ministry Podcasts", description: "Listen to our podcasts on various aspects of Christian living." },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Resources
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 p-6 rounded-lg"
            >
              <h2 className="text-xl font-bold mb-4">{resource.title}</h2>
              <p className="mb-6 text-gray-400">{resource.description}</p>
              <Button className="bg-[#FF8C00] hover:bg-[#FF8C00]/90">Access Resource</Button>
            </motion.div>
          ))}
        </div>
      </div>
      <ScrollArrow />
    </div>
  )
}

