import dynamic from "next/dynamic"
import { Header } from "@/components/header/header"
import { HeroSection } from "@/components/hero/hero-section"
import { StatsBar } from "@/components/home/stats-bar"
import { WelcomeSection } from "@/components/home/welcome-section"
import { FeaturedPrograms } from "@/components/home/featured-programs"
import { WhyChoose } from "@/components/home/why-choose"
import { HeadMessage } from "@/components/home/head-message"
import { Testimonials } from "@/components/home/testimonials"
import { QuickResources } from "@/components/home/quick-resources"
import { NewsletterSignup } from "@/components/home/newsletter-signup"
import { FinalCTA } from "@/components/home/final-cta"
import { Footer } from "@/components/footer/footer"
import type { Metadata } from "next"

const CampusLife = dynamic(() => import("@/components/home/campus-life").then((m) => m.CampusLife), {
  loading: () => <div className="py-12" />,
})

const NewsCarousel = dynamic(() => import("@/components/home/news-carousel").then((m) => m.NewsCarousel), {
  loading: () => <div className="py-12" />,
})

const Facilities = dynamic(() => import("@/components/home/facilities").then((m) => m.Facilities), {
  loading: () => <div className="py-12" />,
})

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Tarkwa Senior High School (TARSCO) - A premier secondary education institution in Ghana offering Business, General Arts, General Science, Home Economics, and Visual Arts programmes. Carpe Diem - Seize the Day.",
  keywords: ["TARSCO home", "Ghana secondary school", "CSSPS", "school admissions", "academic excellence"],
  openGraph: {
    title: "Tarkwa Senior High School | Excellence in Education",
    description:
      "Premier secondary education institution committed to academic excellence and character development since 1961.",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <main id="main-content">
      <Header />
      <HeroSection />
      <StatsBar />
      <WelcomeSection />
      <FeaturedPrograms />
      <WhyChoose />
      <CampusLife />
      <HeadMessage />
      <NewsCarousel />
      <Testimonials />
      <Facilities />
      <QuickResources />
      <NewsletterSignup />
      <FinalCTA />
      <Footer />
    </main>
  )
}
