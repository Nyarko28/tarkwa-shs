'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

const galleryImages = [
  {
    src: '/tarsco-students-in-classroom-learning.jpg',
    alt: 'Students in class',
    title: 'Academic Excellence',
  },
  {
    src: '/vibrant-football-match.png',
    alt: 'Football match',
    title: 'Sports Events',
  },
  {
    src: '/traditional-dance.png',
    alt: 'Cultural dance',
    title: 'Cultural Events',
  },
  {
    src: '/track-and-field.jpg',
    alt: 'Track and field',
    title: 'Athletics',
  },
  {
    src: '/school-library.png',
    alt: 'School library',
    title: 'Campus Life',
  },
  {
    src: '/science-lab.jpg',
    alt: 'Science lab',
    title: 'STEM Facilities',
  },
]

function GalleryImageCard({ src, alt, title, index }: any) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <Link href="/gallery" ref={ref}>
      <div
        className={cn(
          'relative aspect-square rounded-lg overflow-hidden group cursor-pointer',
          inView ? 'animate-fade-up' : 'opacity-0 translate-y-10'
        )}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex items-end p-4">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export function GalleryPreview() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-foreground">
              Photo Gallery
            </h2>
            <p className="text-muted-foreground">Explore moments from TARSCO life</p>
          </div>
          <Link href="/gallery" className="text-primary hover:text-primary/80 font-semibold transition hidden md:block">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImageCard key={image.alt} {...image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
