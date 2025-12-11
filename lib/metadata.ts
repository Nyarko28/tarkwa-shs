import type { Metadata } from "next"

const siteConfig = {
  name: "Tarkwa Senior High School",
  shortName: "TARSCO",
  description:
    "Premier secondary education institution in Ghana, offering Business, General Arts, General Science, Home Economics, and Visual Arts programmes. Committed to excellence, discipline, and holistic student development since 1961.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tarsco.edu.gh",
  ogImage: "/og-image.jpg",
  links: {
    facebook: "https://facebook.com/tarsco",
    twitter: "https://twitter.com/tarsco",
    instagram: "https://instagram.com/tarsco",
  },
  keywords: [
    "TARSCO",
    "Tarkwa Senior High School",
    "Ghana secondary school",
    "CSSPS Ghana",
    "Business programme Ghana",
    "General Arts Ghana",
    "General Science Ghana",
    "Home Economics Ghana",
    "Visual Arts Ghana",
    "Tarkwa schools",
    "Western Region schools Ghana",
    "best secondary schools Ghana",
    "WAEC Ghana",
    "senior high school admissions Ghana",
  ],
  contact: {
    phone: "+233 24 123 4567",
    email: "info@tarsco.edu.gh",
    address: "Tarkwa, Western Region, Ghana",
  },
}

export function createMetadata({
  title,
  description,
  image = siteConfig.ogImage,
  noIndex = false,
  keywords = [],
  type = "website",
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
  type?: "website" | "article"
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.shortName}` : `${siteConfig.name} (${siteConfig.shortName})`
  const metaDescription = description || siteConfig.description
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type,
      locale: "en_GH",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
      creator: "@tarsco",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google-site-verification-code",
      // Add actual verification codes when available
    },
  }
}

export { siteConfig }
