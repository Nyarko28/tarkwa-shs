"use client"

import { useInView } from "react-intersection-observer"
import { Heart, GraduationCap, Building, Trophy } from "lucide-react"

const givingOptions = [
  {
    icon: GraduationCap,
    title: "Scholarship Fund",
    description: "Support deserving students who need financial assistance",
    amount: "From GH₵500",
  },
  {
    icon: Building,
    title: "Infrastructure Development",
    description: "Help build modern classrooms, labs, and facilities",
    amount: "From GH₵1,000",
  },
  {
    icon: Trophy,
    title: "Sports & Activities",
    description: "Fund sports equipment and extracurricular programs",
    amount: "From GH₵300",
  },
  {
    icon: Heart,
    title: "General Donation",
    description: "Flexible support for the school's greatest needs",
    amount: "Any Amount",
  },
]

export function GivingSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12" ref={ref}>
          <h2
            className={`font-serif text-4xl font-bold mb-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Give Back to TARSCO
          </h2>
          <p
            className={`text-xl text-white/90 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Your generosity creates opportunities for the next generation of TARSCO leaders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {givingOptions.map((option, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <option.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-bold text-lg mb-2">{option.title}</h3>
              <p className="text-white/80 text-sm mb-4">{option.description}</p>
              <p className="text-secondary font-bold">{option.amount}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-secondary text-primary font-bold px-10 py-4 rounded-lg text-lg hover:bg-yellow-400 transition-all hover:scale-105 shadow-lg">
            Make a Donation Today
          </button>
          <p className="text-white/70 text-sm mt-4">Tax-deductible donations accepted</p>
        </div>
      </div>
    </section>
  )
}
