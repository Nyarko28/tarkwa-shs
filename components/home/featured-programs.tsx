'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

const programs = [
  {
    title: 'Science Programme',
    description: 'Focus on physics, chemistry, biology, and mathematics to prepare students for STEM careers.',
    icon: '🔬',
  },
  {
    title: 'Humanities Programme',
    description: 'Explore literature, history, geography, and social sciences for diverse career paths.',
    icon: '📚',
  },
  {
    title: 'Business Programme',
    description: 'Study accounting, economics, and business management for entrepreneurial success.',
    icon: '💼',
  },
]

function ProgramCard({ title, description, icon, index }: any) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={cn(
        'p-8 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary transition-all duration-300',
        inView ? 'animate-fade-up' : 'opacity-0 translate-y-10'
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Link href="/academics" className="text-primary font-semibold hover:text-primary/80 transition">
        Learn more →
      </Link>
    </div>
  )
}

export function FeaturedPrograms() {
  return (
    <section className="py-20 md:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
            Our Academic Programmes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TARSCO offers comprehensive programmes designed to unlock student potential and foster excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} {...program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
