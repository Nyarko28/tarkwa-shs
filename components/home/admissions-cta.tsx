'use client'

import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

export function AdmissionsCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80">
      <div className={cn(
        'max-w-4xl mx-auto px-6 text-center',
        inView ? 'animate-fade-up' : 'opacity-0 translate-y-10'
      )}>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
          Ready to Join TARSCO?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Begin your journey to academic excellence and character development. Apply now for the next intake.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/admissions"
            className="px-10 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-yellow-400 transition inline-flex items-center justify-center"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
