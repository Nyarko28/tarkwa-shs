"use client"

import { useState } from "react"
import { Header } from "@/components/header/header"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer/footer"
import Link from "next/link"
import { Search, Calendar, Award, Users, Zap } from "lucide-react"

interface NewsArticle {
  id: number
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  author: string
  isFeatured?: boolean
}

interface UpcomingEvent {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: string
}

interface NewsPageClientProps {
  newsArticles: NewsArticle[]
  upcomingEvents: UpcomingEvent[]
  categories: string[]
}

export default function NewsPageClient({ newsArticles, upcomingEvents, categories }: NewsPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Anniversary":
        return <Award className="w-4 h-4" />
      case "Events":
        return <Calendar className="w-4 h-4" />
      case "Achievement":
        return <Zap className="w-4 h-4" />
      case "Alumni":
        return <Users className="w-4 h-4" />
      default:
        return null
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Anniversary: "bg-secondary/10 text-secondary border border-secondary/20",
      Achievement: "bg-green-100 text-green-700 border border-green-200",
      Infrastructure: "bg-blue-100 text-blue-700 border border-blue-200",
      Events: "bg-purple-100 text-purple-700 border border-purple-200",
      Admissions: "bg-amber-100 text-amber-700 border border-amber-200",
      Community: "bg-teal-100 text-teal-700 border border-teal-200",
      Alumni: "bg-red-100 text-red-700 border border-red-200",
    }
    return colors[category] || "bg-gray-100 text-gray-700"
  }

  return (
    <main id="main-content">
      <Header />
      <PageHeader title="News & Events" subtitle="Stay Updated with TARSCO" variant="news" />

      {/* Featured Article Showcase */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">Featured Story</h2>
            <div className="w-16 h-1 bg-secondary rounded-full"></div>
          </div>

          {newsArticles.length > 0 && (
            <Link href={`/news/${newsArticles[0].id}`}>
              <div className="group rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl animate-scale-in bg-card">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto overflow-hidden bg-muted">
                    <img
                      src={newsArticles[0].image || "/placeholder.svg"}
                      alt={newsArticles[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(newsArticles[0].category)}`}
                      >
                        {getCategoryIcon(newsArticles[0].category)}
                        {newsArticles[0].category}
                      </span>
                      <span className="text-sm text-muted-foreground">{newsArticles[0].date}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition">
                      {newsArticles[0].title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{newsArticles[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">By {newsArticles[0].author}</p>
                      <span className="text-primary font-semibold group-hover:translate-x-2 transition">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">Upcoming Events</h2>
            <div className="w-16 h-1 bg-secondary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="group rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 p-6 bg-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center text-white">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date} • {event.time}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">📍 {event.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-lg"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <Link key={article.id} href={`/news/${article.id}`}>
                  <div
                    className="h-full group rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-up bg-card"
                    style={{ animationDelay: `${(index % 3) * 100}ms` }}
                  >
                    <div className="aspect-video overflow-hidden bg-muted relative">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`text-xs font-semibold uppercase inline-flex items-center gap-1 px-2 py-1 rounded ${getCategoryColor(article.category)}`}
                        >
                          {getCategoryIcon(article.category)}
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold mb-3 text-foreground group-hover:text-primary transition line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                      <p className="text-xs text-muted-foreground">By {article.author}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter for the latest news, events, and updates from TARSCO.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-yellow-400 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
