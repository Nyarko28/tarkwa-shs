"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Play, Heart } from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  image: string
  category: string
  date?: string
  isVideo?: boolean
}

interface GalleryGridProps {
  items: GalleryItem[]
  onImageClick: (image: string, item: GalleryItem) => void
}

export function GalleryGrid({ items, onImageClick }: GalleryGridProps) {
  const [liked, setLiked] = useState<number[]>([])

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setLiked((prev) => (prev.includes(id) ? prev.filter((lid) => lid !== id) : [...prev, id]))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item, idx) => (
        <div
          key={item.id}
          role="button"
          tabIndex={0}
          onClick={() => onImageClick(item.image, item)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              // support keyboard activation (Enter or Space)
              e.preventDefault()
              onImageClick(item.image, item)
            }
          }}
          className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer animate-fade-up hover:shadow-lg transition duration-300"
          style={{ animationDelay: `${(idx % 8) * 0.05}s` }}
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-300"
            sizes="(max-width: 768px) 100vw, 25vw"
          />

          {item.isVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
              <Play size={32} className="text-white fill-white" />
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-4 text-white">
            <div className="flex justify-between items-start">
              <span className="text-xs bg-primary/90 px-2.5 py-1 rounded-full font-medium">{item.category}</span>
              <button
                onClick={(e) => toggleLike(item.id, e)}
                className={`p-2 rounded-full transition ${
                  liked.includes(item.id) ? "bg-secondary" : "bg-white/20 hover:bg-white/30"
                }`}
              >
                <Heart size={18} className={liked.includes(item.id) ? "fill-red-500 text-red-500" : ""} />
              </button>
            </div>
            <div>
              <p className="font-semibold text-sm">{item.title}</p>
              {item.date && <p className="text-xs text-gray-300 mt-1">{item.date}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
