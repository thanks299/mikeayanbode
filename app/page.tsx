"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { Book, Church, Crown, Star, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import TestimonyModal from "@/components/testimony-modal"
import ScrollArrow from "@/components/scroll-arrow"

export default function Home() {
  const [isTestimonyModalOpen, setIsTestimonyModalOpen] = useState(false)
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)
  const controls = useAnimation()
  const featureCardsRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: (
        <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto transition-transform transform hover:scale-110">
          <Book className="w-8 h-8 text-white" />
        </div>
      ),
      title: "WORD",
      description:
        "The greatest deliverance that a man can experience can only happen when he's exposed to God's word",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto transition-transform transform hover:scale-110">
          <Church className="w-8 h-8 text-white" />
        </div>
      ),
      title: "WORSHIP",
      description:
        "Worship is not just a song, worship is our response to God in everything we think and do",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto transition-transform transform hover:scale-110">
          <Crown className="w-8 h-8 text-white" />
        </div>
      ),
      title: "KINGDOM",
      description:
        "Seek first my kingdom, seek first to see the Earth as I do and you'll be restored to its purpose",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000); // Auto-switch every 5 seconds
  
    return () => clearInterval(interval);
  }, [features.length]);
  
  useEffect(() => {
    const container = featureCardsRef.current;
    if (!container || !container.children.length) return;
  
    const cardWidth = container.children[0].clientWidth;
    const gap = 32; // Space between cards
    const totalCards = features.length;
    
    // Compute the left, center (i), and right indices with wrap-around logic
    const prevIndex = (currentFeatureIndex - 1 + totalCards) % totalCards;
    const nextIndex = (currentFeatureIndex + 1) % totalCards;
  
    // Shift the entire carousel to center the active card (`i`)
    const totalShift = -((currentFeatureIndex * (cardWidth + gap)) - (container.clientWidth / 2 - cardWidth / 2));
  
    controls.start({
      x: totalShift,
      transition: { duration: 0.5 },
    });
  
  }, [currentFeatureIndex, controls, featureCardsRef]);
  
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh]">
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
      <section className="py-8 md:py-12 bg-gradient-to-b from-[#1a1a2e] to-black">
        <div className="max-w-6xl mx-auto px-4 overflow-hidden relative">
          <motion.div
            ref={featureCardsRef}
            animate={controls}
            className="flex gap-8"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isActive={index === currentFeatureIndex}
              />
            ))}
          </motion.div>
          {/* Navigation Arrows */}
          {<button
            onClick={() =>
              setCurrentFeatureIndex(
                (prevIndex) => (prevIndex - 1 + features.length) % features.length
              )
            }
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
          >
            &larr;
          </button>}
          {<button
            onClick={() =>
              setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length)
            }
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70"
          >
            &rarr;
          </button>}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-8 md:py-12 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                Hello there!
              </h2>
              <p className="mb-6 text-sm md:text-base">
                I am Pastor Mike Ayanbode and you are welcome to my official website, I hope you get refreshed and
                nourished as you interact with the available materials and items created for you.
              </p>
              <p className="mb-8 text-sm md:text-base">
                Be sure to get in touch with me on my social media platforms, I would love to connect with you.
              </p>
              <Link href="/about">
                <Button variant="link" className="text-[#FF8C00] px-0 text-sm md:text-base">
                  Read more....
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[350px] md:h-[400px] lg:h-[400px]"
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
      <section className="py-8 md:py-12 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center"
          >
            Praise Reports
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
      <section className="py-8 md:py-12 bg-gradient-to-b from-black to-[#1a1a2e]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center"
          >
            Upcoming Events
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Sunday School", date: "Every Sunday Service" },
              { title: "Midweek Prayer", date: "Twice a week" },
              { title: "Women Conference", date: "14 and 15th of February 2025" },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 p-6 rounded-lg"
              >
                <Calendar className="w-8 h-8 text-[#FF8C00] mb-3 mx-auto" />
                <h3 className="text-base md:text-lg font-bold mb-3 text-center">{event.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 text-center">{event.date}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Button className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-sm md:text-base">
              View More Events
            </Button>
          </motion.div>
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

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  isActive: boolean
}

const FeatureCard = ({ icon, title, description, isActive }: FeatureCardProps) => (
  <div
    className={`bg-zinc-900 p-6 rounded-lg hover:scale-105 transition-transform min-w-[300px] ${
      isActive ? "scale-110 opacity-100" : "scale-90 opacity-50"
    }`}
  >
    <div className="mb-4 text-center">{icon}</div>
    <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
    <p className="text-sm text-gray-400 text-center">{description}</p>
  </div>
)
