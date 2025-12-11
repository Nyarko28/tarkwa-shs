import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tarkwa Senior High School. Find our contact information, location, office hours, and reach out for admissions inquiries, general information, or support.",
  keywords: [
    "TARSCO contact",
    "school location",
    "contact number",
    "email address",
    "visit campus",
    "school directions",
  ],
  openGraph: {
    title: "Contact Us | TARSCO",
    description: "Get in touch with Tarkwa Senior High School for inquiries and support.",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
