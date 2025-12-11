"use client"

import { Trophy, Building2, TrendingUp, Users, Shield, GraduationCap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const FEATURES = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    stat: "Top 10 in Regional Rankings",
    description: "Consistently outstanding academic performance with dedicated faculty",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    stat: "State-of-the-Art Infrastructure",
    description: "Equipped laboratories, digital library, and modern classrooms",
  },
  {
    icon: TrendingUp,
    title: "Holistic Development",
    stat: "200+ Extra-Curricular Activities",
    description: "Sports, arts, clubs, and leadership programs",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    stat: "150+ Qualified Educators",
    description: "Passionate teachers committed to student success",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    stat: "24/7 Security & Support",
    description: "Caring environment with student welfare as priority",
  },
  {
    icon: GraduationCap,
    title: "University Placement",
    stat: "98% University Admission",
    description: "Strong track record of tertiary education placements",
  },
]

export function WhyChoose() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose TARSCO?</h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            Experience an education that prepares you for success in an ever-changing world
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl transform ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{feature.title}</h3>
                <p className="text-secondary font-semibold text-center mb-3">{feature.stat}</p>
                <p className="text-white/80 text-center leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
