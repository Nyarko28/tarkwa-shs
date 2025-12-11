"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 400)
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    toggleVisibility()

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 md:w-14 md:h-14 bg-[var(--tarsco-green)] hover:bg-[#005000] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--tarsco-green)] focus:ring-offset-2"
    >
      <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
    </button>
  )
}
