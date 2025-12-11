"use client"

import Link from "next/link"
import { ClipboardList, BookOpen, Users2, GraduationCap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const RESOURCES = [
  {
    icon: ClipboardList,
    title: "For Prospective Students",
    links: [
      { label: "Admission Information", href: "/admissions" },
      { label: "Application Portal", href: "/admissions#apply" },
      { label: "Entry Requirements", href: "/admissions#requirements" },
      { label: "Scholarship Opportunities", href: "/admissions#scholarships" },
    ],
  },
  {
    icon: BookOpen,
    title: "For Current Students",
    links: [
      { label: "Student Portal", href: "#" },
      { label: "Academic Calendar", href: "#" },
      { label: "Timetables", href: "#" },
      { label: "E-Learning Platform", href: "#" },
    ],
  },
  {
    icon: Users2,
    title: "For Parents",
    links: [
      { label: "Parent Portal", href: "#" },
      { label: "PTA Information", href: "#" },
      { label: "Fee Structure", href: "/admissions#fees" },
      { label: "Contact Staff", href: "/contact" },
    ],
  },
  {
    icon: GraduationCap,
    title: "For Alumni",
    links: [
      { label: "Alumni Association", href: "/alumni" },
      { label: "Reunions & Events", href: "/alumni#events" },
      { label: "Give Back", href: "/alumni#donate" },
      { label: "Success Stories", href: "/alumni#stories" },
    ],
  },
]

export function QuickResources() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESOURCES.map((resource, index) => {
            const Icon = resource.icon
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{resource.title}</h3>
                <ul className="space-y-2">
                  {resource.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-secondary rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-200"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
