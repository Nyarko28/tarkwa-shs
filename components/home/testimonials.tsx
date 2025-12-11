'use client'

import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Akosua Mensah',
    role: 'Class of 2022',
    text: 'TARSCO transformed my academic journey and shaped my character. The teachers and facilities are exceptional.',
    rating: 5,
  },
  {
    name: 'Kwame Owusu',
    role: 'Class of 2021',
    text: 'The holistic education I received prepared me perfectly for university. I recommend TARSCO to all prospective students.',
    rating: 5,
  },
  {
    name: 'Ama Boateng',
    role: 'Class of 2023',
    text: 'Being part of TARSCO community has been an incredible experience. The school truly invests in student development.',
    rating: 5,
  },
]

function TestimonialCard({ name, role, text, rating, index }: any) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={cn(
        'p-8 rounded-lg bg-card border border-border',
        inView ? 'animate-fade-up' : 'opacity-0 translate-y-10'
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-secondary text-secondary" />
        ))}
      </div>
      <p className="text-foreground mb-6 text-lg italic leading-relaxed">"{text}"</p>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
            Student Voices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from TARSCO alumni and current students about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
