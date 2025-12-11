"use client"

import { Header } from "@/components/header/header"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer/footer"
import { useInView } from "react-intersection-observer"

const timeline = [
  {
    year: 1961,
    title: "Founded",
    description:
      "Tarkwa Senior High School established in September with 59 students and 3 staff under the Education Trust Scheme to provide quality education in the mining region of Ghana.",
  },
  {
    year: 1975,
    title: "Expansion Era",
    description:
      "School expands significantly with new academic buildings, science labs, and improved infrastructure to accommodate growing student population.",
  },
  {
    year: 2000,
    title: "Digital Age",
    description:
      "TARSCO embraces technology with computer labs and modern teaching facilities, positioning itself as a forward-thinking institution.",
  },
  {
    year: 2022,
    title: "60 Years Anniversary",
    description:
      "TARSCO celebrates 60 years of excellence with 2,123 students and recognition as one of Ghana's leading secondary schools.",
  },
]

const coreValues = [
  {
    icon: "⭐",
    title: "Excellence",
    description: "Academic and personal excellence in all endeavors",
  },
  {
    icon: "🛡️",
    title: "Discipline",
    description: "Strong character building through disciplined conduct",
  },
  {
    icon: "🤝",
    title: "Integrity",
    description: "Honesty and moral uprightness in all actions",
  },
  {
    icon: "👥",
    title: "Teamwork",
    description: "Collaborative spirit for collective success",
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "Forward-thinking approach to education",
  },
  {
    icon: "🌍",
    title: "Community",
    description: "Commitment to social responsibility and nation-building",
  },
]

const whyChooseTarsco = [
  {
    icon: "📚",
    title: "Academic Excellence",
    description: "Consistent high performance in national examinations and subject competitions",
  },
  {
    icon: "👨‍🏫",
    title: "Experienced Faculty",
    description: "Dedicated and qualified teaching staff committed to student success",
  },
  {
    icon: "🎯",
    title: "Holistic Development",
    description: "Well-rounded programs including sports, arts, and character development",
  },
  {
    icon: "🏆",
    title: "Leadership Training",
    description: "Programs designed to develop confident and responsible young leaders",
  },
  {
    icon: "🔬",
    title: "Modern Facilities",
    description: "State-of-the-art science labs, ICT centers, and learning environment",
  },
  {
    icon: "🌟",
    title: "Proven Track Record",
    description: "Over 60 years of producing successful graduates across all sectors",
  },
]

const leadership = [
  {
    name: "Kenneth Afedzie",
    role: "Head Teacher",
    bio: "Visionary leader dedicated to academic excellence and holistic student development at TARSCO. Under his leadership, the school continues to set new standards in educational excellence.",
    image: "/kenneth-afedzie-portrait.jpg",
  },
  {
    name: "Mrs. Abena Osei",
    role: "Vice Head Teacher (Academics)",
    bio: "An experienced educator focused on academic excellence and innovative teaching methodologies. Oversees curriculum implementation and student academic progress.",
    image: "/vice-principal-academics.jpg",
  },
  {
    name: "Mr. Yaw Mensah",
    role: "Vice Head Teacher (Administration)",
    bio: "Oversees operations and ensures smooth functioning of all school facilities, services, and student welfare programs.",
    image: "/vice-principal-administration.jpg",
  },
]

function TimelineItem({ item, index }: any) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`flex gap-8 mb-12 last:mb-0 transition-all duration-700 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center font-serif text-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          {item.year}
        </div>
        {index < timeline.length - 1 && <div className="w-1 h-20 bg-secondary/40 mt-4 rounded-full"></div>}
      </div>
      <div className="pb-12 pt-2">
        <h3 className="font-serif text-2xl font-bold text-primary mb-3">{item.title}</h3>
        <p className="text-muted-foreground leading-relaxed max-w-xl">{item.description}</p>
      </div>
    </div>
  )
}

function CoreValueCard({ value, index }: any) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`group p-6 rounded-xl bg-white border-2 border-primary/20 hover:border-secondary hover:shadow-lg transition-all duration-500 text-center cursor-default transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
    >
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
      <h4 className="font-serif text-xl font-bold text-primary mb-2">{value.title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
    </div>
  )
}

function WhyChooseCard({ item, index }: any) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`p-8 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:border-secondary hover:shadow-xl transition-all duration-500 transform ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: inView ? `${index * 100}ms` : "0ms" }}
    >
      <div className="text-4xl mb-4">{item.icon}</div>
      <h4 className="font-serif text-xl font-bold text-primary mb-3">{item.title}</h4>
      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
    </div>
  )
}

function LeadershipCard({ person, index }: any) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: inView ? `${index * 150}ms` : "0ms" }}
    >
      <div className="mb-6 inline-block">
        <img
          src={person.image || "/placeholder.svg"}
          alt={person.name}
          className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-secondary shadow-lg hover:shadow-xl transition-shadow"
        />
      </div>
      <h3 className="font-serif text-2xl font-bold text-primary mb-2">{person.name}</h3>
      <p className="text-secondary font-bold text-lg mb-4">{person.role}</p>
      <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">{person.bio}</p>
    </div>
  )
}

export default function AboutClient() {
  const { ref: schoolIdRef, inView: schoolIdInView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <main id="main-content">
      <Header />
      <PageHeader
        title="About TARKWA SENIOR HIGH SCHOOL"
        subtitle="Shaping disciplined, confident and academically excellent young leaders."
        variant="about"
      />

      {/* School Identity Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={schoolIdRef}
              className={`transition-all duration-700 ${
                schoolIdInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="font-serif text-4xl font-bold mb-6 text-primary">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  <span className="text-primary font-semibold">Tarkwa Senior High School (TARSCO)</span> was established
                  in <span className="text-secondary font-bold">September 1961</span> under the Education Trust Scheme
                  with just 59 students and 3 dedicated staff members.
                </p>
                <p>
                  Today, we have grown into a <span className="text-secondary font-bold">premier institution</span> with
                  over 2,123 students and a team of 95 teaching and 35 non-teaching staff committed to educational
                  excellence.
                </p>
                <p>
                  Located in the historic mining town of Tarkwa, TARSCO is recognized across Ghana as a{" "}
                  <span className="text-secondary font-bold">center of academic excellence</span>, producing
                  disciplined, morally upright, and globally competitive young leaders.
                </p>
                <p className="pt-4">
                  Our <span className="text-primary font-bold">Carpe Diem</span> (Seize the Day) motto encapsulates our
                  commitment to maximizing every opportunity for student growth and nation-building.
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${
                schoolIdInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <img
                src="/tarkwa-senior-high-school-campus.jpg"
                alt="TARSCO Campus"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary text-center">Our Journey</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-16 rounded-full"></div>

          <div className="relative">
            {timeline.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-primary text-center">
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group p-8 md:p-12 rounded-2xl bg-white border-l-4 border-secondary shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🎯</div>
                <h3 className="font-serif text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide quality, accessible, and inclusive education that develops{" "}
                <span className="text-primary font-semibold">
                  academically excellent, morally upright, and spiritually nourished individuals
                </span>{" "}
                who contribute meaningfully to society and nation-building.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group p-8 md:p-12 rounded-2xl bg-white border-l-4 border-accent shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">✨</div>
                <h3 className="font-serif text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be a{" "}
                <span className="text-secondary font-semibold">
                  leading center of academic and character excellence
                </span>
                , producing students who are globally competitive, socially responsible, and ready to lead
                transformatively in their respective fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary text-center">Our Core Values</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-16 rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <CoreValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Highlight */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-white text-center">School Leadership</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {leadership.map((person, index) => (
              <LeadershipCard key={person.name} person={person} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TARSCO */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary text-center">Why Choose TARSCO</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-16 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseTarsco.map((item, index) => (
              <WhyChooseCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
