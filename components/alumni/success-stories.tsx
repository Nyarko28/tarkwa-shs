"use client"

import { useInView } from "react-intersection-observer"
import { Quote } from "lucide-react"

const stories = [
  {
    name: "Dr. Kwaku Mensah",
    year: "1995",
    title: "WHO Regional Director",
    story:
      "TARSCO gave me the foundation to pursue medicine. Today, I lead healthcare initiatives across West Africa, and I owe it all to the values instilled in me at this great institution.",
    image: "/professional-doctor-portrait.png",
  },
  {
    name: "Ama Boateng",
    year: "2005",
    title: "Tech Entrepreneur & Founder",
    story:
      "The problem-solving skills I learned at TARSCO helped me build a fintech startup that serves millions across Africa. The school taught me to dream big and work hard.",
    image: "/female-entrepreneur-portrait.png",
  },
  {
    name: "Yaw Osei",
    year: "2010",
    title: "UN Climate Ambassador",
    story:
      "TARSCO sparked my passion for environmental science. Now I represent Ghana at the UN, fighting for climate action. My teachers believed in me when I needed it most.",
    image: "/environmental-scientist-portrait.jpg",
  },
]

export function SuccessStories() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <h2
            className={`font-serif text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Alumni Success Stories
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Inspiring achievements from TARSCO graduates making a difference worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Quote className="w-10 h-10 text-secondary mb-4" />
              <img
                src={story.image || "/placeholder.svg"}
                alt={story.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
              />
              <p className="text-muted-foreground mb-6 italic leading-relaxed">{story.story}</p>
              <div className="text-center">
                <h4 className="font-bold text-lg text-foreground">{story.name}</h4>
                <p className="text-primary font-semibold text-sm">{story.title}</p>
                <p className="text-muted-foreground text-sm">Class of {story.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
