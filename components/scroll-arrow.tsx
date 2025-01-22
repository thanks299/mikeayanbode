'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollArrow() {
  const [showScroll, setShowScroll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if the user is on a mobile device
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust breakpoint for mobile
    }
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const checkScrollTop = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      setShowScroll(st > 100) // Show arrow when scrolled down 100px
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Render only if on mobile view
  if (!isMobile || !showScroll) return null

  return (
    <div className="fixed right-4 bottom-4 z-50 animate-bounce">
      <button
        onClick={scrollToTop}
        className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white rounded-full p-2 transition-colors duration-300 shadow-md"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  )
}
