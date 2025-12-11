'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const newsItems = [
  {
    id: 1,
    title: 'TARSCO Wins Regional Science Olympiad',
    date: 'November 15, 2024',
    category: 'Achievement',
    image: '/placeholder.svg?key=1',
  },
  {
    id: 2,
    title: 'New Science Laboratory Inauguration',
    date: 'November 10, 2024',
    category: 'Infrastructure',
    image: '/placeholder.svg?key=2',
  },
  {
    id: 3,
    title: 'Annual Sports Day Celebrated',
    date: 'November 5, 2024',
    category: 'Events',
    image: '/placeholder.svg?key=3',
  },
  {
    id: 4,
    title: 'Admissions Portal Now Open',
    date: 'October 28, 2024',
    category: 'Admissions',
    image: '/placeholder.svg?key=4',
  },
]

export function NewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % newsItems.length)
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + newsItems.length) % newsItems.length)
    setAutoplay(false)
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-foreground">
              Latest News
            </h2>
            <p className="text-muted-foreground">Stay updated with TARSCO news and events</p>
          </div>
          <Link href="/news" className="text-primary hover:text-primary/80 font-semibold transition hidden md:block">
            View All →
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative bg-card rounded-lg overflow-hidden border border-border">
          {/* Items */}
          <div className="flex transition-transform duration-500 ease-out" style={{
            transform: `translateX(-${current * 100}%)`,
          }}>
            {newsItems.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="aspect-video md:aspect-auto relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-semibold text-xs rounded mb-4 w-fit">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{item.date}</p>
                  <Link href={`/news/${item.id}`} className="text-primary font-semibold hover:text-primary/80 transition w-fit">
                    Read Story →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex gap-2">
            <button
              onClick={prev}
              className="p-2 bg-primary hover:bg-primary/90 text-white rounded-full transition"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-2 bg-primary hover:bg-primary/90 text-white rounded-full transition"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2">
            {newsItems.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i)
                  setAutoplay(false)
                }}
                className={`w-2 h-2 rounded-full transition ${
                  i === current ? 'bg-primary' : 'bg-primary/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
