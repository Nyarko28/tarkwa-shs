"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"

const FACILITIES = [
  {
    title: "Science & Computer Labs",
    image: "/science-lab.jpg",
    description: "Fully equipped laboratories for hands-on learning",
  },
  {
    title: "Library & Resource Center",
    image: "/tarsco-school-campus-library.jpg",
    description: "Extensive digital and physical collection",
  },
  {
    title: "Sports Complex",
    image: "/sports-field-stadium.jpg",
    description: "Modern facilities for various sports",
  },
  {
    title: "Dormitories",
    image: "/school-dormitory-beds.jpg",
    description: "Comfortable and secure living spaces",
  },
  {
    title: "Dining Hall",
    image: "/school-cafeteria-dining.jpg",
    description: "Spacious cafeteria with nutritious meals",
  },
  {
    title: "Assembly Hall",
    image: "/school-auditorium-hall.jpg",
    description: "Large auditorium for events and gatherings",
  },
]

export function Facilities() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Modern infrastructure supporting 21st-century learning
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FACILITIES.map((facility, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-white/90 text-sm mb-4">{facility.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 text-secondary font-semibold">Explore →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-lg"
          >
            Take a Virtual Campus Tour
          </Link>
        </div>
      </div>
    </section>
  )
}
