"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

type PageHeaderVariant = "default" | "about" | "academics" | "admissions" | "news" | "gallery" | "contact" | "alumni"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  variant?: PageHeaderVariant
}

export function PageHeader({ title, subtitle, backgroundImage, variant = "default" }: PageHeaderProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const variantStyles = {
    default: "bg-gradient-to-r from-primary to-primary/80",
    about: "relative bg-gradient-to-br from-primary via-primary to-accent",
    academics: "relative bg-gradient-to-r from-primary via-accent to-primary",
    admissions: "relative bg-gradient-to-b from-secondary/20 to-primary/10",
    news: "relative bg-gradient-to-r from-accent to-primary",
    gallery: "relative bg-gradient-to-tr from-primary/90 via-primary to-accent/80",
    contact: "relative bg-gradient-to-l from-primary to-accent",
    alumni: "relative bg-gradient-to-b from-accent via-primary to-accent/70",
  }

  const animationClasses = {
    default: "animate-fade-up",
    about: "animate-float-up",
    academics: "animate-scale-in",
    admissions: "animate-slide-in-down",
    news: "animate-fade-up",
    gallery: "animate-scale-in",
    contact: "animate-float-up",
    alumni: "animate-fade-up",
  }

  const decorations = {
    about:
      'before:absolute before:inset-0 before:opacity-10 before:bg-[url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h40v40H0z" fill="none"/%3E%3Cpath d="M0 0l40 40M40 0L0 40" stroke="%23006400" strokeWidth="1" opacity="0.5"/%3E%3C/svg%3E")]',
    academics:
      'before:absolute before:inset-0 before:opacity-5 before:bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23006400"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]',
    gallery:
      "before:absolute before:inset-0 before:opacity-10 before:bg-[linear-gradient(45deg,rgba(255,215,0,0.1)_1px,transparent_1px)] before:bg-[size:20px_20px]",
    default: "",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden py-20 md:py-32",
        variantStyles[variant as keyof typeof variantStyles],
        decorations[variant as keyof typeof decorations] || "",
      )}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage || "/placeholder.svg"}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </>
      )}

      {/* Animated accent elements for visual interest */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1
          className={cn(
            "font-serif text-5xl md:text-6xl font-bold text-white mb-4 text-balance",
            inView ? animationClasses[variant as keyof typeof animationClasses] : "opacity-0",
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "text-xl text-white/90 max-w-2xl mx-auto",
              inView ? "animate-slide-in-down" : "opacity-0",
              "transition-all duration-700",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
