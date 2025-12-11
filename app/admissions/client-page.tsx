"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Header } from "@/components/header/header"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer/footer"
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  FileText,
  GraduationCap,
  HelpCircle,
  Home,
  MapPin,
  Phone,
  Users,
  AlertCircle,
  ExternalLink,
  Mail,
  Clock,
} from "lucide-react"

type KeyDate = {
  month: string
  event: string
  description: string
  status: "past" | "critical" | "important" | "action" | "start"
  highlight?: string
  icon: string
}

type CsspsStep = {
  number: string
  title: string
  description: string
  icon: string
}

type Programme = {
  name: string
  description: string
  icon: string
  gradient: string
}

type Requirement = {
  title: string
  description: string
  icon: string
}

type FeeItem = {
  item: string
  amount: string
}

type FeesData = {
  government: FeeItem[]
  parental: FeeItem[]
}

type Faq = {
  q: string
  a: string
}

type ClientAdmissionsPageProps = {
  keyDates: KeyDate[]
  csspsSteps: CsspsStep[]
  programmes: Programme[]
  requirements: Requirement[]
  feesData: FeesData
  faqs: Faq[]
}

const iconMap = {
  FileText: FileText,
  GraduationCap: GraduationCap,
  Calendar: Calendar,
  CheckCircle2: CheckCircle2,
  AlertCircle: AlertCircle,
  MapPin: MapPin,
  Users: Users,
  BookOpen: BookOpen,
  Clock: Clock,
  HelpCircle: HelpCircle,
  Home: Home,
  Phone: Phone,
  Mail: Mail,
}

export default function ClientAdmissionsPage({
  keyDates,
  csspsSteps,
  programmes,
  requirements,
  feesData,
  faqs,
}: ClientAdmissionsPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <main id="main-content" className="font-[family-name:var(--font-poppins)]">
      <Header />
      <PageHeader title="Admissions" subtitle="Join the TARSCO Family" variant="admissions" />

      {/* Info Banner - Government School Emphasis */}
      <section className="bg-[#DBEAFE] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#006B3F] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-[#1F2937] text-lg mb-1">TARSCO is a Public Government School</h3>
              <p className="text-[#1F2937] leading-relaxed">
                All Form 1 admissions are processed through the{" "}
                <strong>Computerized School Selection and Placement System (CSSPS)</strong> managed by the Ghana
                Education Service. Direct applications are not accepted. Tuition is FREE under the Free SHS policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Into TARSCO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" ref={ref1}>
            <h2
              className={`font-bold text-4xl md:text-5xl mb-4 text-[#1F2937] transition-all duration-700 ${
                inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              How to Get Into TARSCO
            </h2>
            <p
              className={`text-[#1F2937] text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
                inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Follow these 6 simple steps to join our community of excellence. All admissions are through the CSSPS
              portal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {csspsSteps.map((step, i) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap]
              return (
                <div
                  key={i}
                  className={`bg-[#F9FAFB] rounded-lg p-8 border-l-4 border-[#006B3F] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    inView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-[#006B3F]">{IconComponent && <IconComponent className="w-12 h-12" />}</div>
                    <span className="font-bold text-[#FDB913] text-3xl">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-[#1F2937]">{step.title}</h3>
                  <p className="text-[#1F2937] leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://cssps.gov.gh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#006B3F] text-white font-bold rounded-lg hover:bg-[#004d2d] transition-all hover:scale-105 shadow-lg"
            >
              Visit CSSPS Portal
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Key Dates & Deadlines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" ref={ref2}>
            <h2
              className={`font-bold text-4xl mb-2 text-[#1F2937] transition-all duration-700 ${
                inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Key Dates & Deadlines
            </h2>
            <p
              className={`text-[#006B3F] text-lg font-semibold transition-all duration-700 delay-100 ${
                inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Academic Year 2024/2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyDates.map((date, i) => {
              const IconComponent = iconMap[date.icon as keyof typeof iconMap]
              return (
                <div
                  key={i}
                  className={`bg-white rounded-lg p-6 border-l-4 shadow-md hover:shadow-xl transition-all duration-300 ${
                    date.status === "past"
                      ? "border-gray-400"
                      : date.status === "critical"
                        ? "border-red-500"
                        : date.status === "important"
                          ? "border-orange-500"
                          : date.status === "action"
                            ? "border-red-600"
                            : "border-[#006B3F]"
                  } ${inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div
                        className={`text-3xl font-bold mb-2 ${
                          date.status === "past"
                            ? "text-gray-400"
                            : date.status === "start"
                              ? "text-[#006B3F]"
                              : "text-[#006B3F]"
                        }`}
                      >
                        {date.month}
                      </div>
                      {date.highlight && (
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            date.status === "critical"
                              ? "bg-red-500 text-white"
                              : date.status === "important"
                                ? "bg-orange-500 text-white"
                                : date.status === "action"
                                  ? "bg-red-600 text-white"
                                  : "bg-[#006B3F] text-white"
                          }`}
                        >
                          {date.highlight}
                        </span>
                      )}
                    </div>
                    <div className={`${date.status === "past" ? "text-gray-400" : "text-[#006B3F]"}`}>
                      {IconComponent && <IconComponent className="w-10 h-10" />}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#1F2937]">{date.event}</h3>
                  <p className="text-[#1F2937] text-sm leading-relaxed">{date.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-4 bg-[#FEF3C7] rounded-lg border border-[#FDB913]/30">
            <p className="text-[#1F2937] text-sm text-center">
              <strong>Note:</strong> Dates are subject to Ghana Education Service announcements. Check the CSSPS portal
              regularly for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Programmes Offered */}
      <section className="py-20 bg-[#F0FDF4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" ref={ref3}>
            <h2
              className={`font-bold text-4xl mb-4 text-[#1F2937] transition-all duration-700 ${
                inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Programmes Offered
            </h2>
            <p
              className={`text-[#1F2937] text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
                inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Choose your path of excellence. All programmes are of equal quality and lead to bright futures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((prog, i) => (
              <div
                key={i}
                className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  inView3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${prog.gradient} p-6 text-center`}>
                  <div className="text-6xl mb-3">{prog.icon}</div>
                  <h3 className="font-bold text-2xl text-white">{prog.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-[#1F2937] leading-relaxed">{prog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16" ref={ref4}>
            <h2
              className={`font-bold text-4xl mb-4 text-[#1F2937] transition-all duration-700 ${
                inView4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              General Requirements
            </h2>
            <p
              className={`text-[#1F2937] text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
                inView4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Basic eligibility criteria for admission to TARSCO through CSSPS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, i) => {
              const IconComponent = iconMap[req.icon as keyof typeof iconMap]
              return (
                <div
                  key={i}
                  className={`bg-[#F9FAFB] rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                    inView4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="text-[#006B3F] flex justify-center mb-4">
                    {IconComponent && <IconComponent className="w-10 h-10" />}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#1F2937]">{req.title}</h3>
                  <p className="text-[#1F2937] text-sm leading-relaxed">{req.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fees & Costs */}
      <section className="py-20 bg-[#F0FDF4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16" ref={ref5}>
            <h2
              className={`font-bold text-4xl mb-4 text-[#1F2937] transition-all duration-700 ${
                inView5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Fees & Costs
            </h2>
            <p
              className={`text-[#1F2937] text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
                inView5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Transparent breakdown of what's free and what parents cover
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Government Covered */}
            <div
              className={`bg-white rounded-lg p-8 shadow-lg transition-all duration-700 ${
                inView5 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#006B3F]" />
                <h3 className="font-bold text-2xl text-[#1F2937]">Government Covers</h3>
              </div>
              <div className="space-y-4">
                {feesData.government.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-[#1F2937]">{item.item}</span>
                    <span className="font-bold text-[#006B3F] text-lg">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parental Responsibility */}
            <div
              className={`bg-white rounded-lg p-8 shadow-lg transition-all duration-700 ${
                inView5 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-[#FDB913]" />
                <h3 className="font-bold text-2xl text-[#1F2937]">Parental Responsibility</h3>
              </div>
              <div className="space-y-4">
                {feesData.parental.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-[#1F2937]">{item.item}</span>
                    <span className="font-bold text-[#FDB913]">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#DBEAFE] p-6 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-[#006B3F] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[#1F2937] mb-2">Financial Support Available</h4>
                <p className="text-[#1F2937] leading-relaxed">
                  Don't let cost concerns stop you! TARSCO offers scholarships, payment plans, and financial assistance
                  for families in need. Contact our admissions office to discuss options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-bold text-4xl mb-4 text-[#1F2937] text-center">Frequently Asked Questions</h2>
          <p className="text-center text-[#1F2937] mb-12 text-lg">Get answers to common admissions questions</p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-6 bg-[#F9FAFB] rounded-lg hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[#006B3F]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <HelpCircle className="w-6 h-6 text-[#006B3F] flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-[#1F2937] text-lg">{faq.q}</h3>
                  </div>
                  <span
                    className={`text-[#006B3F] transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </div>
                {openFaq === i && <p className="mt-4 text-[#1F2937] leading-relaxed pl-9 animate-fade-up">{faq.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Help Section */}
      <section className="py-20 bg-gradient-to-r from-[#006B3F] to-[#004d2d] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bold text-4xl mb-4">Need Help with Your Application?</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Our admissions team is here to guide you through the CSSPS process and answer any questions.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <Phone className="w-10 h-10 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="opacity-90">+233 312 022 XXX</p>
              <p className="text-sm opacity-75 mt-1">Mon-Fri, 8am-5pm</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <Mail className="w-10 h-10 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="opacity-90">admissions@tarsco.edu.gh</p>
              <p className="text-sm opacity-75 mt-1">24-48hr response</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <MapPin className="w-10 h-10 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="opacity-90">Tarkwa, Western Region</p>
              <p className="text-sm opacity-75 mt-1">Campus tours available</p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FDB913] text-[#1F2937] font-bold rounded-lg hover:bg-[#e6a711] transition-all hover:scale-105 shadow-lg"
            >
              Contact Admissions Office
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
