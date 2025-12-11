"use client"
import { ChevronRight } from "lucide-react"
import collections from "@/data/gallery-collections.json"

interface FeaturedCollectionsProps {
  onCollectionClick: (id: number) => void
}

export function FeaturedCollections({ onCollectionClick }: FeaturedCollectionsProps) {
  const featured = collections.filter((col) => col.featured)

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">Featured Collections</h2>
          <div className="w-16 h-1 bg-secondary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((collection, idx) => (
            <button
              key={collection.id}
              onClick={() => onCollectionClick(collection.id)}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img
                src={collection.cover || "/placeholder.svg"}
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  {collection.name}
                </h3>
                <p className="text-sm text-gray-200 line-clamp-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-secondary transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <span>
                    {collection.imageCount} Photos • {collection.videoCount} Videos
                  </span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
