"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trophy, Music, Users, Crown, Heart } from "lucide-react"
import { useInView } from "react-intersection-observer"

const CATEGORIES = [
  {
    id: "sports",
    name: "Sports & Athletics",
    icon: Trophy,
    images: [
      { src: "/sports-day.jpg", caption: "Inter-House Athletics" },
      { src: "/diverse-soccer-team.png", caption: "Football Team" },
      { src: "/outdoor-basketball-court.png", caption: "Basketball" },
      { src: "/track-and-field.jpg", caption: "Track & Field" },
    ],
  },
  {
    id: "cultural",
    name: "Cultural Activities",
    icon: Music,
    images: [
      { src: "/choir-performance.png", caption: "School Choir" },
      { src: "/traditional-dance.png", caption: "Cultural Dance" },
      { src: "/dramatic-stage-performance.png", caption: "Drama Club" },
      { src: "/music-band.jpg", caption: "School Band" },
    ],
  },
  {
    id: "clubs",
    name: "Student Clubs",
    icon: Users,
    images: [
      { src: "/debate-club.jpg", caption: "Debate Society" },
      { src: "/science-club.png", caption: "Science Club" },
      { src: "/art-club.png", caption: "Arts & Crafts" },
      { src: "/reading-club.jpg", caption: "Literary Club" },
    ],
  },
  {
    id: "leadership",
    name: "Leadership Programs",
    icon: Crown,
    images: [
      { src: "/student-council.jpg", caption: "Student Council" },
      { src: "/prefects.jpg", caption: "Prefects Body" },
      { src: "/youth-parliament.jpg", caption: "Youth Parliament" },
      { src: "/leadership-training-workshop.png", caption: "Leadership Training" },
    ],
  },
  {
    id: "community",
    name: "Community Service",
    icon: Heart,
    images: [
      { src: "/environmental-initiative.jpg", caption: "Environmental Clean-Up" },
      { src: "/charity-work.jpg", caption: "Charity Outreach" },
      { src: "/community-tree-planting.png", caption: "Tree Planting" },
      { src: "/community-help.jpg", caption: "Community Visits" },
    ],
  },
]

export function CampusLife() {
  const [activeCategory, setActiveCategory] = useState("sports")
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const currentCategory = CATEGORIES.find((cat) => cat.id === activeCategory) || CATEGORIES[0]

  return (
    <section ref={ref} className="py-20 md:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Life at TARSCO</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Experience a vibrant community where learning meets living
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow"
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentCategory.images.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
