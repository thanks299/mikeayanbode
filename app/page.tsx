"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Book, Church, Crown, Star, Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import TestimonyModal from "@/components/testimony-modal"

export default function Home() {
  const [isTestimonyModalOpen, setIsTestimonyModalOpen] = useState(false)

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh]">
        <Image
          src="/mikaaynbode.jpeg"
          alt="Pastor Mike Ayanbode"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#FF8C00] text-base md:text-lg lg:text-xl mb-2"
            >
              LATEST SERMON
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3"
            >
              LET THERE BE LIGHT
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-xl mb-6 text-sm md:text-base"
            >
              God saw that there was light, only after He had declared Let there be light. What are you declaring
              concerning you?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 w-fit text-sm md:text-base">Listen Now</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-[#1a1a2e] to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <FeatureCard
              icon={<Book className="w-8 h-8 md:w-10 md:h-10" />}
              title="WORD"
              description="The greatest deliverance that a man can experience can only happen when he's exposed to God's word"
            />
            <FeatureCard
              icon={<Church className="w-8 h-8 md:w-10 md:h-10" />}
              title="WORSHIP"
              description="Worship is not just a song, worship is our response to God in everything we think and do"
            />
            <FeatureCard
              icon={<Crown className="w-8 h-8 md:w-10 md:h-10" />}
              title="KINGDOM"
              description="Seek first my kingdom, seek first to see the Earth as I do and you'll be restored to its purpose"
            />
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-8 md:py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Hello there,</h2>
              <p className="mb-4 text-sm md:text-base">
                I am Pastor Mike Ayanbode and you are welcome to my official website, I hope you get refreshed and
                nourished as you interact with the available materials and items created for you.
              </p>
              <p className="mb-6 text-sm md:text-base">
                Be sure to get in touch with me on my social media platforms, I would love to connect with you.
              </p>
              <Button variant="link" className="text-[#FF8C00] px-0 text-sm md:text-base">
                Read more....
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[200px] md:h-[300px] lg:h-[400px]"
            >
              <Image
                src="/mikaaynbode.jpeg"
                alt="Pastor Mike Ayanbode"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Praise Report Section */}
      <section className="py-8 md:py-12 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center"
          >
            Praise Reports
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Healing Testimony",
                content: "I was healed from a chronic illness after Pastor Mike prayed for me.",
              },
              {
                title: "Financial Breakthrough",
                content:
                  "After following Pastor Mike's teachings on financial stewardship, I received an unexpected promotion at work.",
              },
              {
                title: "Restored Relationship",
                content:
                  "My marriage was on the brink of divorce, but through counseling with Pastor Mike, we've reconciled and are stronger than ever.",
              },
            ].map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 p-4 rounded-lg"
              >
                <Star className="w-6 h-6 text-[#FF8C00] mb-2" />
                <h3 className="text-base md:text-lg font-bold mb-2">{report.title}</h3>
                <p className="text-xs md:text-sm text-gray-400">{report.content}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-center"
          >
            <Button
              className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-sm md:text-base"
              onClick={() => setIsTestimonyModalOpen(true)}
            >
              Share Your Testimony
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-black to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center"
          >
            Upcoming Events
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sunday Service", date: "Every Sunday, 10:00 AM" },
              { title: "Bible Study", date: "Every Wednesday, 7:00 PM" },
              { title: "Youth Conference", date: "July 15-17, 2023" },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 p-4 rounded-lg flex items-center"
              >
                <Calendar className="w-8 h-8 md:w-10 md:h-10 text-[#FF8C00] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1 text-sm md:text-base">{event.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400">{event.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="link" className="text-[#FF8C00] text-sm md:text-base">
              View All Events <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <TestimonyModal isOpen={isTestimonyModalOpen} onClose={() => setIsTestimonyModalOpen(false)} />
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-zinc-900 p-4 rounded-lg text-center">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF8C00]/10 rounded-full flex items-center justify-center mx-auto mb-3">
        {icon}
      </div>
      <h3 className="text-base md:text-lg font-bold mb-2">{title}</h3>
      <p className="text-xs md:text-sm text-gray-400">{description}</p>
    </motion.div>
  )
}

