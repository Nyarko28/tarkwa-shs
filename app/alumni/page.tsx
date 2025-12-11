import type { Metadata } from "next"
import { Header } from "@/components/header/header"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer/footer"
import { StatsSection } from "@/components/alumni/stats-section"
import { SuccessStories } from "@/components/alumni/success-stories"
import { UpcomingEvents } from "@/components/alumni/upcoming-events"
import { GivingSection } from "@/components/alumni/giving-section"
import { Users, Globe, Briefcase } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Alumni Network",
  description:
    "Join the TARSCO Alumni Network. Connect with fellow graduates, attend events, support the school, and stay engaged with the TARSCO community. Discover success stories and giving opportunities.",
  keywords: ["TARSCO alumni", "alumni network", "school donations", "alumni events", "success stories", "TARPSA"],
  openGraph: {
    title: "Alumni Network | TARSCO",
    description: "Connect with the TARSCO alumni community and support your alma mater.",
  },
}

export default function AlumniPage() {
  return (
    <main id="main-content">
      <Header />
      <PageHeader title="Alumni Network" subtitle="TARSCO Graduates Making a Global Impact" variant="alumni" />

      {/* Stats Bar */}
      <StatsSection />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Welcome to the TARSCO Alumni Community</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            As a graduate of Tarkwa Senior High School, you are part of a distinguished network of over 5,000 alumni
            spanning 45+ countries. Whether you graduated decades ago or recently, your connection to TARSCO remains
            strong. Join us in celebrating our shared heritage and supporting the next generation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#register"
              className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition"
            >
              Join Alumni Network
            </Link>
            <Link
              href="#events"
              className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStories />

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-12">
            Benefits of Joining the Network
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <Users className="w-14 h-14 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-3">Connect & Network</h3>
              <p className="text-muted-foreground">
                Access our alumni directory, attend exclusive events, and build meaningful professional relationships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <Briefcase className="w-14 h-14 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-3">Career Opportunities</h3>
              <p className="text-muted-foreground">
                Get access to job postings, mentorship programs, and career development resources from fellow alumni.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <Globe className="w-14 h-14 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-3">Stay Connected</h3>
              <p className="text-muted-foreground">
                Receive updates on school developments, reunions, and opportunities to give back to TARSCO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back */}
      <GivingSection />

      {/* Registration CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">Ready to Reconnect?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Register with the TARSCO Alumni Network today and stay connected with your alma mater and fellow graduates.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition"
              >
                Register
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Already registered?{" "}
              <Link href="/alumni/login" className="text-primary font-semibold hover:underline">
                Sign in here
              </Link>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
