"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function GalleryHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const slides = [
    {
      image: "/tarsco-campus-life.jpg",
      title: "Our Gallery",
      subtitle: "Explore the moments that define excellence, character, and community at Tarkwa Senior High School",
    },
    {
      image: "/diverse-student-activities.png",
      title: "Life at TARSCO",
      subtitle: "Discover the vibrant culture, achievements, and spirit of our school community",
    },
    {
      image: "/school-events.jpg",
      title: "Our Story",
      subtitle: "Visual moments that capture the essence of excellence and tradition",
    },
  ]

  useEffect(() => {
    if (!isAutoplay) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoplay, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoplay(false)
  }

  return (
    <div className="relative w-full h-screen md:h-96 lg:h-[32rem] overflow-hidden bg-primary">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-fade-up">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {slides[currentSlide].subtitle}
        </p>
        <button
          onClick={() => document.getElementById("gallery-collections")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 px-8 py-3 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/90 transition animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Explore Collections
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full transition text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full transition text-white"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentSlide(idx)
              setIsAutoplay(false)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? "bg-secondary w-8" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
