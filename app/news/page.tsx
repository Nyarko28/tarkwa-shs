import type { Metadata } from "next"
import NewsPageClient from "./news-page-client"

const newsArticles = [
  {
    id: 0,
    title: "TARSCO Celebrates 60 Years of Excellence and Legacy",
    date: "November 2022",
    category: "Anniversary",
    excerpt:
      'Tarkwa Senior High School celebrated its 60th anniversary with the theme "Achieving Academic Excellence Through Discipline for National Development." The milestone celebration highlighted six decades of transforming lives through education and character development.',
    image: "/images/tarsco-final-logo.jpg",
    author: "School Administration",
    isFeatured: true,
  },
  {
    id: 1,
    title: "TARSCO Wins Regional Science Olympiad",
    date: "November 15, 2024",
    category: "Achievement",
    excerpt:
      "Our science team triumphed in the regional competition, showcasing excellence in innovation and research.",
    image: "/placeholder.svg?key=15",
    author: "Mr. Kwesi Boateng",
  },
  {
    id: 2,
    title: "New Science Laboratory Inauguration",
    date: "November 10, 2024",
    category: "Infrastructure",
    excerpt: "State-of-the-art laboratory facility officially opened to support advanced STEM learning.",
    image: "/placeholder.svg?key=16",
    author: "Dr. Kwame Asante",
  },
  {
    id: 3,
    title: "Annual Sports Day Celebrated",
    date: "November 5, 2024",
    category: "Events",
    excerpt: "Students showcase athletic prowess in friendly competitions across multiple sports disciplines.",
    image: "/placeholder.svg?key=17",
    author: "Coach Ama Mensah",
  },
  {
    id: 4,
    title: "Admissions Portal Now Open",
    date: "October 28, 2024",
    category: "Admissions",
    excerpt: "Applications for 2025 intake now being accepted. Deadline is December 31, 2024.",
    image: "/placeholder.svg?key=18",
    author: "Registrar's Office",
  },
  {
    id: 5,
    title: "Environmental Sustainability Initiative",
    date: "October 20, 2024",
    category: "Community",
    excerpt: "TARSCO commits to green campus through tree-planting and waste management programs.",
    image: "/placeholder.svg?key=19",
    author: "Environmental Club",
  },
  {
    id: 6,
    title: "Alumni Network Expands Globally",
    date: "October 15, 2024",
    category: "Alumni",
    excerpt: "Former students now working in 25+ countries strengthen connections through online platform.",
    image: "/placeholder.svg?key=20",
    author: "Alumni Relations",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Year Group Orientation",
    date: "December 5, 2024",
    time: "9:00 AM",
    location: "Main Hall",
    category: "Events",
  },
  {
    id: 2,
    title: "Mid-Year Academic Review",
    date: "December 10, 2024",
    time: "10:00 AM",
    location: "School Auditorium",
    category: "Academic",
  },
  {
    id: 3,
    title: "Inter-House Competition Finals",
    date: "December 15, 2024",
    time: "2:00 PM",
    location: "Sports Field",
    category: "Sports",
  },
  {
    id: 4,
    title: "Christmas Carol & Awards Night",
    date: "December 20, 2024",
    time: "6:00 PM",
    location: "School Auditorium",
    category: "Celebration",
  },
]

const categories = [
  "All",
  "Anniversary",
  "Achievement",
  "Infrastructure",
  "Events",
  "Admissions",
  "Community",
  "Alumni",
]

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Stay updated with the latest news, events, achievements, and announcements from Tarkwa Senior High School. Read about academic achievements, sports, cultural events, and school activities.",
  keywords: [
    "TARSCO news",
    "school events",
    "academic achievements",
    "sports news",
    "school announcements",
    "Ghana education news",
  ],
  openGraph: {
    title: "News & Events | TARSCO",
    description: "Latest news, events, and achievements from Tarkwa Senior High School.",
  },
}

export default function NewsPage() {
  return <NewsPageClient newsArticles={newsArticles} upcomingEvents={upcomingEvents} categories={categories} />
}
