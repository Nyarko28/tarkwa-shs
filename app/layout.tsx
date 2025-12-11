import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import BackToTop from "@/components/back-to-top"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Tarkwa Senior High School (TARSCO) | Excellence in Education Since 1961",
    template: "%s | TARSCO",
  },
  description:
    "Premier secondary education institution in Ghana offering Business, General Arts, General Science, Home Economics, and Visual Arts programmes. Committed to academic excellence, discipline, and holistic student development since 1961.",
  keywords: [
    "TARSCO",
    "Tarkwa Senior High School",
    "Ghana secondary school",
    "CSSPS Ghana",
    "Business programme Ghana",
    "General Arts Ghana",
    "General Science Ghana",
    "senior high school Ghana",
    "Tarkwa schools",
    "Western Region schools",
    "best secondary schools Ghana",
  ],
  authors: [{ name: "Tarkwa Senior High School" }],
  creator: "Tarkwa Senior High School",
  publisher: "Tarkwa Senior High School",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tarsco.edu.gh"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://tarsco.edu.gh",
    siteName: "Tarkwa Senior High School",
    title: "Tarkwa Senior High School (TARSCO) | Excellence in Education Since 1961",
    description: "Premier secondary education institution committed to academic excellence and character development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tarkwa Senior High School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarkwa Senior High School (TARSCO)",
    description: "Premier secondary education institution in Ghana",
    images: ["/og-image.jpg"],
    creator: "@tarsco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/0040904-crest.jpg", type: "image/jpeg" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/images/0040904-crest.jpg" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GH">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#006400" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://tarsco.edu.gh/#organization",
              name: "Tarkwa Senior High School",
              alternateName: "TARSCO",
              url: "https://tarsco.edu.gh",
              logo: {
                "@type": "ImageObject",
                url: "https://tarsco.edu.gh/images/0040904-crest.jpg",
                width: 200,
                height: 200,
              },
              image: "https://tarsco.edu.gh/og-image.jpg",
              description:
                "Premier secondary education institution in Ghana offering Business, General Arts, General Science, Home Economics, and Visual Arts programmes.",
              foundingDate: "1961",
              founder: {
                "@type": "Organization",
                name: "Education Trust Scheme, Ghana",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tarkwa",
                addressLocality: "Tarkwa",
                addressRegion: "Western Region",
                addressCountry: "GH",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+233-24-123-4567",
                contactType: "Admissions",
                email: "info@tarsco.edu.gh",
                availableLanguage: ["English"],
              },
              sameAs: ["https://facebook.com/tarsco", "https://twitter.com/tarsco", "https://instagram.com/tarsco"],
              areaServed: {
                "@type": "Country",
                name: "Ghana",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Tarkwa Senior High School Alumni Association",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <BackToTop />
      </body>
    </html>
  )
}
