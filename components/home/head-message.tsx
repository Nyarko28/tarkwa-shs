"use client"

import { useInView } from "react-intersection-observer"

export function HeadMessage() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Image */}
          <div
            className={`md:col-span-1 transform transition-all duration-1000 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-secondary">
              <img
                src="/head-teacher-portrait.jpg"
                alt="Kenneth Afedzie - Head Teacher"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="font-serif text-2xl font-bold text-primary mb-1">Kenneth Afedzie</h3>
              <p className="text-secondary font-semibold">Head Teacher</p>
            </div>
          </div>

          {/* Message Content */}
          <div
            className={`md:col-span-2 transform transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="mb-6">
              <span className="inline-block bg-secondary text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                A Message from the Head
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Welcome to TARSCO</h2>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Welcome to Tarkwa Senior High School, a beacon of educational excellence for over six decades. As Head
                Teacher, I am honored to lead an institution dedicated to nurturing brilliant minds and shaping
                responsible leaders for our nation and the world.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At TARSCO, we believe that education transcends academic achievement. We are committed to developing
                well-rounded individuals who exhibit integrity, critical thinking, and a genuine passion for learning.
                Our students are exposed to rigorous academics, character development, and practical skills that prepare
                them for the complexities of the modern world.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our success is built on the collective efforts of dedicated staff, supportive parents, and most
                importantly, our exceptional students who embody the TARSCO spirit. Together, we are not just building a
                school; we are building a legacy.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg font-semibold">
                I invite you to join our community and experience excellence in education.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t-2 border-secondary/30">
              <p className="font-serif text-xl font-bold text-primary">Kenneth Afedzie</p>
              <p className="text-secondary font-semibold">Head Teacher, TARSCO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
