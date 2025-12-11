"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const CAROUSEL_DATA = [
  {
    id: 1,
    image: "/images/tarsco-final-logo.jpg",
    isLogo: true,
    text: "60 Years of Excellence & Legacy",
    description:
      "Celebrating six decades of transforming lives through education, character development, and leadership excellence since 1961.",
  },
  {
    id: 2,
    image: "/tarsco-campus-hero-image.jpg",
    text: "Excellence in Education, Character & Leadership",
    description:
      "Established in 1961, Tarkwa Senior High School stands as a beacon of academic excellence and character development in Ghana's educational landscape.",
  },
  {
    id: 3,
    image: "/tarsco-school-campus-library.jpg",
    text: "Nurturing Future Leaders Since 1961",
    description: "Our commitment to holistic education shapes minds and builds character for tomorrow's leaders.",
  },
  {
    id: 4,
    image: "/tarsco-students-in-classroom-learning.jpg",
    text: "Innovation Meets Tradition",
    description:
      "Blending time-honored values with modern educational approaches for comprehensive student development.",
  },
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const typewriterIntervalRef = useRef<NodeJS.Timeout>()
  const carouselIntervalRef = useRef<NodeJS.Timeout>()
  const currentTextRef = useRef(CAROUSEL_DATA[0].text)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Reset typewriter text
    setTypewriterText("")
    currentTextRef.current = CAROUSEL_DATA[currentSlide].text

    // Clear any existing interval
    if (typewriterIntervalRef.current) {
      clearInterval(typewriterIntervalRef.current)
    }

    // Start new typewriter animation
    let index = 0
    typewriterIntervalRef.current = setInterval(() => {
      if (index <= currentTextRef.current.length) {
        setTypewriterText(currentTextRef.current.slice(0, index))
        index++
      } else {
        clearInterval(typewriterIntervalRef.current)
      }
    }, 50)

    return () => {
      if (typewriterIntervalRef.current) {
        clearInterval(typewriterIntervalRef.current)
      }
    }
  }, [currentSlide, isVisible])

  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_DATA.length)
    }, 10000)

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current)
      }
    }
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    // Reset carousel timer when manually navigating
    if (carouselIntervalRef.current) {
      clearInterval(carouselIntervalRef.current)
    }
    carouselIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_DATA.length)
    }, 10000)
  }

  const goToPrevious = () => {
    goToSlide((currentSlide - 1 + CAROUSEL_DATA.length) % CAROUSEL_DATA.length)
  }

  const goToNext = () => {
    goToSlide((currentSlide + 1) % CAROUSEL_DATA.length)
  }

  const isLogoSlide = CAROUSEL_DATA[currentSlide].isLogo

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        {CAROUSEL_DATA.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.isLogo ? (
              <div className="w-full h-full bg-gradient-to-b from-primary via-primary/80 to-primary flex items-center justify-center p-6">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt="TARSCO 60 Years Anniversary"
                  className="w-full max-w-md md:max-w-lg h-auto"
                />
              </div>
            ) : (
              <>
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={`TARSCO Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/40"></div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-40 flex flex-col justify-center min-h-screen">
        {/* Main Heading */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-3xl text-balance">
            Welcome to TARSCO
          </h1>

          <p className="text-lg md:text-2xl text-white/90 mb-8 font-medium max-w-2xl h-12 flex items-center">
            <span className="typewriter">{typewriterText}</span>
            <span className="cursor ml-2 text-secondary"></span>
          </p>

          <p className="text-white/80 text-base md:text-lg max-w-2xl mb-10 leading-relaxed transition-all duration-500">
            {CAROUSEL_DATA[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/admissions"
              className="px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-yellow-400 transition inline-flex items-center gap-2 justify-center"
            >
              Apply Now
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition inline-flex items-center gap-2 justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
        {/* Previous button */}
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {CAROUSEL_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-secondary" : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition text-white"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
