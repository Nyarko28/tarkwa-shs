"use client"
import Link from "next/link"
import Image from "next/image"
import { Award, Heart, Lightbulb, Building2, Users } from "lucide-react"
import { useInView } from "react-intersection-observer"

const KEY_POINTS = [
  { icon: Award, text: "Academic Excellence" },
  { icon: Heart, text: "Character Development" },
  { icon: Lightbulb, text: "Holistic Education" },
  { icon: Building2, text: "Modern Facilities" },
  { icon: Users, text: "Experienced Faculty" },
]

export function WelcomeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div
            className={`lg:col-span-2 transform transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-4">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Welcome to TARSCO</span>
              <div className="w-16 h-1 bg-secondary mt-2"></div>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Tomorrow's Leaders Today
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Since 1961, Tarkwa Senior High School has stood as a beacon of academic excellence and character
                development in Ghana's educational landscape. Our commitment to holistic education has transformed
                thousands of young minds into capable, confident leaders.
              </p>
              <p>
                At TARSCO, we believe education extends beyond textbooks. We nurture critical thinking, creativity, and
                moral values that prepare our students for the challenges of tomorrow while instilling a deep sense of
                responsibility to their communities and nation.
              </p>
              <p>
                Our state-of-the-art facilities, experienced faculty, and comprehensive curriculum create an environment
                where every student can discover their potential and pursue excellence in their chosen fields.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3 mb-8">
              {KEY_POINTS.map((point, index) => {
                const Icon = point.icon
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">{point.text}</span>
                  </div>
                )
              })}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Us
            </Link>

            {/* School Seal */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Image
                src="/images/0040904-crest.jpg"
                alt="TARSCO Official Crest"
                width={160}
                height={80}
                className="h-20 w-auto opacity-80"
              />
            </div>
          </div>

          {/* Right Column - Images */}
          <div
            className={`lg:col-span-3 transform transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <Image
                  src="/tarkwa-senior-high-school-campus.jpg"
                  alt="TARSCO Campus"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Since 1961 Badge */}
              <div className="absolute -bottom-6 -left-6 bg-secondary text-primary px-8 py-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-sm font-semibold uppercase tracking-wider">Since</div>
                  <div className="text-4xl font-bold">1961</div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">60+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Years of
                    <br />
                    Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
