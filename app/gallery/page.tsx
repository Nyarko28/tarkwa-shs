import type { Metadata } from "next"
import GalleryClient from "./GalleryClient"

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Explore TARSCO's vibrant campus life through our photo gallery. View images of academic activities, sports events, cultural programs, facilities, and student life.",
  keywords: [
    "TARSCO photos",
    "school gallery",
    "campus life",
    "school facilities",
    "student activities",
    "school events photos",
  ],
  openGraph: {
    title: "Photo Gallery | TARSCO Campus Life",
    description: "Explore the vibrant campus life and facilities at Tarkwa Senior High School.",
  },
}

export default function GalleryPage() {
  return <GalleryClient />
}
