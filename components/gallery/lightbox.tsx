"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Share2, Download } from "lucide-react"

interface LightboxProps {
  images: Array<{ id: number; title: string; image: string }>
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-up"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        {/* Main Image */}
        <div className="relative bg-black rounded-lg overflow-hidden">
          <Image
            src={currentImage.image || "/placeholder.svg"}
            alt={currentImage.title}
            width={1200}
            height={900}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Image Info */}
        <div className="mt-4 text-white">
          <h3 className="text-lg font-semibold">{currentImage.title}</h3>
          <p className="text-sm text-gray-300">
            Image {currentIndex + 1} of {images.length}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition text-white"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition text-white"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition text-white"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Bottom Action Buttons */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-center">
          <button className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition text-white">
            <Share2 size={20} />
          </button>
          <button className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition text-white">
            <Download size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
