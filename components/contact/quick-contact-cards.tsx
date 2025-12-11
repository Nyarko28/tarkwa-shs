"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useInView } from "react-intersection-observer"

export function QuickContactCards() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const cards = [
    {
      icon: Phone,
      label: "Call Us",
      primary: "+233 312 022551",
      secondary: "Alternative: +233 XXX XXX XXX",
      hours: "Monday - Friday, 8:00 AM - 5:00 PM",
      href: "tel:+233312022551",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Mail,
      label: "Email Us",
      primary: "info@tarsco.edu.gh",
      secondary: "Admissions: admissions@tarsco.edu.gh",
      hours: "24-hour response time",
      href: "mailto:info@tarsco.edu.gh",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      primary: "Tarkwa Senior High School",
      secondary: "P.O. Box 55, Tarkwa",
      hours: "Western Region, Ghana",
      href: "https://maps.google.com/?q=Tarkwa+Senior+High+School",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Clock,
      label: "Office Hours",
      primary: "Weekdays: 8:00 AM - 5:00 PM",
      secondary: "Saturday: 8:00 AM - 1:00 PM",
      hours: "Sunday: Closed",
      color: "bg-primary/10 text-primary",
    },
  ]

  return (
    <section ref={ref} className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon
            const delay = index * 100

            return (
              <div
                key={card.label}
                className={`bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-t-primary ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mb-4`}>
                  <Icon size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">{card.label}</h3>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.icon === MapPin ? "_blank" : undefined}
                    rel={card.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="text-primary hover:text-primary/80 font-semibold text-lg mb-1 block transition"
                  >
                    {card.primary}
                  </a>
                ) : (
                  <p className="text-foreground font-semibold text-lg mb-1">{card.primary}</p>
                )}
                <p className="text-sm text-muted-foreground mb-1">{card.secondary}</p>
                <p className="text-sm text-muted-foreground">{card.hours}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
