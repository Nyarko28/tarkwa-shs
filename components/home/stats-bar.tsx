"use client"

import { useEffect, useState } from "react"
import { Calendar, TrendingUp, Users, GraduationCap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const STATS = [
  {
    icon: Calendar,
    number: 60,
    suffix: "+",
    label: "Years of Academic Excellence",
  },
  {
    icon: GraduationCap,
    number: 2500,
    suffix: "+",
    label: "Proud Students",
  },
  {
    icon: Users,
    number: 150,
    suffix: "+",
    label: "Dedicated Staff",
  },
  {
    icon: TrendingUp,
    number: 98,
    suffix: "%",
    label: "University Admission Rate",
  },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return <span ref={ref}>{count}</span>
}

export function StatsBar() {
  return (
    <section className="bg-gray-50 py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUp end={stat.number} />
                  {stat.suffix}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
