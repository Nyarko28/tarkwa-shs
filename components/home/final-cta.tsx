"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/tarsco-students-in-classroom-learning.jpg"
          alt="TARSCO Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Join the TARSCO Family?
        </h2>
        <p className="text-white/90 text-xl md:text-2xl mb-12">Begin your journey to excellence today</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/admissions"
            className="px-10 py-5 bg-secondary text-primary font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-secondary/50 hover:scale-105 inline-flex items-center gap-2"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
          >
            Schedule a Visit
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-white/90">
          <Phone className="w-5 h-5" />
          <p className="text-lg">
            Questions? Call us at{" "}
            <a href="tel:+233312022551" className="text-secondary font-semibold hover:underline">
              +233 312 022551
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
