"use client"
import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, ArrowRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

const events = [
  {
    id: 1,
    title: "Annual Homecoming & Reunion",
    date: "DEC 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "TARSCO Campus, Tarkwa",
    category: "Reunion",
    categoryColor: "bg-secondary text-primary",
    description: "Join us for our biggest gathering of the year with activities, speeches, and celebration",
    attendees: 150,
    image: "/school-homecoming-celebration.jpg",
  },
  {
    id: 2,
    title: "Alumni Business Networking Night",
    date: "NOV 30, 2024",
    time: "6:00 PM - 10:00 PM",
    location: "Accra Business Center",
    category: "Professional",
    categoryColor: "bg-accent text-white",
    description: "Connect with fellow alumni professionals and expand your business network",
    attendees: 80,
    image: "/professional-networking-event.png",
  },
  {
    id: 3,
    title: "Scholarship Fundraising Gala",
    date: "JAN 20, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Labadi Beach Hotel, Accra",
    category: "Fundraiser",
    categoryColor: "bg-primary text-white",
    description: "Support deserving students through our annual scholarship fundraising gala dinner",
    attendees: 200,
    image: "/elegant-fundraising-gala.jpg",
  },
]

export function UpcomingEvents() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12" ref={ref}>
          <h2
            className={`font-serif text-4xl font-bold text-foreground transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Upcoming Alumni Events
          </h2>
          <Link
            href="/alumni/events"
            className={`text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            View All Events <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Event Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                  {event.date}
                </div>

                {/* Category Badge */}
                <div
                  className={`absolute top-4 right-4 ${event.categoryColor} px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                >
                  {event.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-4">{event.title}</h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>

                {/* Attendees */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground font-semibold">{event.attendees}+ attending</span>
                </div>

                {/* Register Button */}
                <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
