"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryFilters } from "@/components/gallery/gallery-filters"
import { FeaturedCollections } from "@/components/gallery/featured-collections"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { Lightbox } from "@/components/gallery/lightbox"

const galleryItems = [
  { id: 1, category: "Campus Life", title: "Main Building", image: "/school-main-building.jpg", date: "2024-03-15" },
  {
    id: 2,
    category: "Sports & Athletics",
    title: "Football Match",
    image: "/vibrant-football-match.png",
    date: "2024-03-12",
  },
  {
    id: 3,
    category: "Graduation Ceremonies",
    title: "Graduation 2024",
    image: "/graduation-ceremony.png",
    date: "2024-07-06",
  },
  { id: 4, category: "Campus Life", title: "Student Center", image: "/student-center.jpg", date: "2024-03-10" },
  {
    id: 5,
    category: "Academic Excellence",
    title: "Science Lab",
    image: "/science-laboratory.png",
    date: "2024-02-28",
  },
  {
    id: 6,
    category: "Sports & Athletics",
    title: "Volleyball",
    image: "/volleyball-tournament.jpg",
    date: "2024-03-08",
  },
  {
    id: 7,
    category: "Cultural Events",
    title: "Cultural Week",
    image: "/vibrant-cultural-festival.png",
    date: "2024-02-15",
  },
  { id: 8, category: "Campus Life", title: "Library", image: "/school-library.png", date: "2024-03-01" },
  {
    id: 9,
    category: "Academic Excellence",
    title: "Computer Lab",
    image: "/computer-lab.png",
    date: "2024-02-20",
  },
  {
    id: 10,
    category: "Special Events",
    title: "Founders Day",
    image: "/founders-day.jpg",
    date: "2024-03-17",
  },
  {
    id: 11,
    category: "Sports & Athletics",
    title: "Track & Field",
    image: "/track-and-field.jpg",
    date: "2024-01-25",
  },
  { id: 12, category: "Campus Life", title: "Dormitories", image: "/student-dormitory.jpg", date: "2024-02-10" },
]

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("All Collections")
  const [selectedYear, setSelectedYear] = useState("2024")
  const [searchQuery, setSearchQuery] = useState("")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const categoryMatch = selectedCategory === "All Collections" || item.category === selectedCategory
      const yearMatch = selectedYear === "All Years" || item.date?.startsWith(selectedYear)
      const searchMatch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())

      return categoryMatch && yearMatch && searchMatch
    })
  }, [selectedCategory, selectedYear, searchQuery])

  const handleImageClick = (image: string, item: (typeof galleryItems)[0]) => {
    const index = filteredItems.findIndex((i) => i.id === item.id)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <main id="main-content">
      <Header />
      <GalleryHero />
      <GalleryFilters onCategoryChange={setSelectedCategory} onYearChange={setSelectedYear} onSearch={setSearchQuery} />

      {/* Featured Collections */}
      <FeaturedCollections onCollectionClick={(id) => {}} />

      {/* Main Gallery Section */}
      <section id="gallery-collections" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
              {filteredItems.length === 0 ? "No images found" : `Gallery (${filteredItems.length} images)`}
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full" />
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No images match your filters. Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <GalleryGrid items={filteredItems} onImageClick={handleImageClick} />
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox images={filteredItems} initialIndex={lightboxIndex} onClose={() => setLightboxOpen(false)} />
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Subscribe to our newsletter to get the latest photos and updates from TARSCO
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none"
            />
            <button className="px-6 py-3 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
