"use client"

import { useState } from "react"
import { Search } from "lucide-react"

interface GalleryFiltersProps {
  onCategoryChange: (category: string) => void
  onYearChange: (year: string) => void
  onSearch: (query: string) => void
}

export function GalleryFilters({ onCategoryChange, onYearChange, onSearch }: GalleryFiltersProps) {
  const [activeCategory, setActiveCategory] = useState("All Collections")
  const [activeYear, setActiveYear] = useState("2024")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    "All Collections",
    "Campus Life",
    "Academic Excellence",
    "Sports & Athletics",
    "Cultural Events",
    "Graduation Ceremonies",
    "Special Events",
    "Alumni Reunions",
  ]

  const years = ["2024", "2023", "2022", "2021", "2020", "All Years"]

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat)
    onCategoryChange(cat)
  }

  return (
    <div className="sticky top-24 md:top-32 z-30 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                onSearch(e.target.value)
              }}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex gap-2 whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition text-sm ${
                  activeCategory === cat ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Year Filter */}
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-sm font-medium text-muted-foreground">Year:</span>
          <div className="flex gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year)
                  onYearChange(year)
                }}
                className={`px-3 py-1.5 text-sm rounded transition ${
                  activeYear === year
                    ? "bg-primary text-white"
                    : "border border-border text-foreground hover:border-primary"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
