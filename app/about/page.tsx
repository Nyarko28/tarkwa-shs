import type { Metadata } from "next"
import AboutClient from "./about-client"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tarkwa Senior High School's rich history since 1961, our mission, vision, core values, and dedicated leadership team. Discover why TARSCO is a center of academic excellence in Ghana.",
  keywords: [
    "TARSCO history",
    "school mission",
    "school vision",
    "Kenneth Afedzie",
    "Ghana education",
    "school leadership",
  ],
  openGraph: {
    title: "About TARSCO | Our History & Mission",
    description: "Discover the rich history and mission of Tarkwa Senior High School since 1961.",
  },
}

export default function AboutPage() {
  return <AboutClient />
}
