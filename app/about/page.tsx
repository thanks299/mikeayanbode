"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/mikaaynbode.jpeg"
              alt="Pastor Mike Ayanbode"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-6">
              Pastor Mike Ayanbode is a dynamic and visionary leader, dedicated to bringing out the best in people and
              helping them live excellent lives. With a passion for the Word of God and a heart for worship, he has
              touched countless lives through his ministry.
            </p>
            <p className="mb-6">
              Pastor Mike has created a welcoming community where individuals can grow in their faith, discover their purpose, and make a positive impact on the world
              around them.
            </p>
            <p>
              His teachings focus on practical application of biblical principles, empowering believers to live out
              their faith in every aspect of their lives. Through his powerful sermons, books, and various outreach
              programs, Pastor Mike continues to inspire and guide people towards a deeper relationship with God.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

