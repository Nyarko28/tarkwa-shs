"use client"

import { useInView } from "react-intersection-observer"
import { Users, Globe, Award, Heart } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  { icon: Users, label: "Active Alumni", value: 5000, suffix: "+" },
  { icon: Globe, label: "Countries Reached", value: 45, suffix: "+" },
  { icon: Award, label: "Scholarships Given", value: 150, suffix: "+" },
  { icon: Heart, label: "Donations This Year", value: 50000, prefix: "GH₵", suffix: "+" },
]

function Counter({
  target,
  duration = 2000,
  prefix = "",
  suffix = "",
}: { target: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return

    const step = Math.ceil(target / (duration / 16))
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-secondary" />
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <Counter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
