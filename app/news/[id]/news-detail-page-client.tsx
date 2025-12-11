"use client"
import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Share2, Bookmark } from "lucide-react"

// Define the structure for a news article
interface NewsArticle {
  id: number
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  author: string
  content: string
  isFeatured?: boolean // Optional property
}

interface NewsDetailPageClientProps {
  article: NewsArticle | undefined
  allArticles: NewsArticle[]
  articleId: number
}

export default function NewsDetailPageClient({ article, allArticles, articleId }: NewsDetailPageClientProps) {
  if (!article) {
    return (
      <main id="main-content">
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <Link href="/news" className="text-primary hover:underline">
              Back to News
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main id="main-content">
      <Header />

      {/* Back Button */}
      <div className="bg-background border-b border-border sticky top-20 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition font-medium"
          >
            <ArrowLeft size={20} />
            Back to News
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="h-96 md:h-96 overflow-hidden bg-muted relative">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Article Content */}
      <article className="bg-background py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar size={16} />
              {article.date}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <User size={16} />
              By {article.author}
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none mb-12">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share & Bookmark */}
          <div className="flex gap-4 pt-8 border-t border-border">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-card transition">
              <Share2 size={18} />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-card transition">
              <Bookmark size={18} />
              Save
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-card border-t border-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {allArticles
              .filter((a) => a.id !== articleId && a.category === article.category)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/news/${relatedArticle.id}`}>
                  <div className="group rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                    <div className="aspect-video overflow-hidden bg-muted relative">
                      <Image
                        src={relatedArticle.image || "/placeholder.svg"}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-2">{relatedArticle.date}</p>
                      <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
