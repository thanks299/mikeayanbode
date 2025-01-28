"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Book, Church, Crown, Star, Calendar, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import TestimonyModal from "@/components/testimony-modal"
import ScrollArrow from "@/components/scroll-arrow"

export default function Home() {
  const [isTestimonyModalOpen, setIsTestimonyModalOpen] = useState(false)

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-[110vh]">
        <Image
          src="/mikeayanbode3.jpg"
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
              className="text-[#FF8C00] text-base md:text-lg lg:text-xl mb-4"
            >
              LATEST SERMON
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              LET THERE BE LIGHT
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-xl mb-8 text-sm md:text-base"
            >
              God saw that there was light, only after He had declared Let there be light. What are you declaring
              concerning you?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 w-fit text-sm md:text-base">
                Listen Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-[#1a1a2e] to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-9"
          >
            <FeatureCard
              icon={
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto">
                  <Book className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              }
              title="WORD"
              description="The greatest deliverance that a man can experience can only happen when he's exposed to God's word"
            />
            <FeatureCard
              icon={
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto">
                  <Church className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              }
              title="WORSHIP"
              description="Worship is not just a song, worship is our response to God in everything we think and do"
            />
            <FeatureCard
              icon={
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto">
                  <Crown className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              }
              title="KINGDOM"
              description="Seek first my kingdom, seek first to see the Earth as I do and you'll be restored to its purpose"
            />
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                Hello there,
              </h2>
              <p className="mb-6 text-sm md:text-base">
                I am Pastor Mike Ayanbode and you are welcome to my official website, I hope you get refreshed and
                nourished as you interact with the available materials and items created for you.
              </p>
              <p className="mb-8 text-sm md:text-base">
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
              className="relative h-[750px] md:h-[450px] lg:h-[450px]"
            >
              <Image
                src="/mikaaynbode.jpeg"
                alt="Pastor Mike Ayanbode"
                fill
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Praise Report Section */}
      <section className="py-12 md:py-16 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center"
          >
            Praise Reports
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Healing Testimony", 
                content: "I was healed from a chronic illness after Pastor Mike prayed for me." 
              },
              { 
                title: "Financial Breakthrough", 
                content: "After following Pastor Mike's teachings on financial stewardship, I received an unexpected promotion at work." 
              },
              { 
                title: "Restored Relationship", 
                content: "My marriage was on the brink of divorce, but through counseling with Pastor Mike, we've reconciled and are stronger than ever." 
              }
            ].map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 p-6 rounded-lg"
              >
                <Star className="w-8 h-8 text-[#FF8C00] mb-3" />
                <h3 className="text-base md:text-lg font-bold mb-3">{report.title}</h3>
                <p className="text-xs md:text-sm text-gray-400">{report.content}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
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
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center"
          >
            Upcoming Events
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Sunday Service", 
                date: "Every Sunday, 9:00 AM" 
              },
              { 
                title: "Bible Study", 
                date: "Every Wednesday, 7:00 PM" 
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 p-6 rounded-lg flex items-center"
              >
                <Calendar className="w-10 h-10 md:w-12 md:h-12 text-[#FF8C00] mr-6 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-3 text-sm md:text-base">{event.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400">{event.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="link" className="text-[#FF8C00] text-sm md:text-base">
              View All Events <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <TestimonyModal 
        isOpen={isTestimonyModalOpen} 
        onClose={() => setIsTestimonyModalOpen(false)} 
      />
      <ScrollArrow />
    </div>
  )
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      className="bg-zinc-900 p-6 rounded-lg text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4">{icon}</div>
      <h3 className="font-bold mb-4 text-sm md:text-base">{title}</h3>
      <p className="text-xs md:text-sm text-gray-400">{description}</p>
    </motion.div>
  )
}
