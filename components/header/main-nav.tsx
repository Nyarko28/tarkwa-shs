"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "News & Events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-xl shadow-lg py-3" : "bg-white/95 backdrop-blur-md shadow-md py-4",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-85 transition duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
          >
            <div className="relative">
              <Image
                src="/images/0040904-crest.jpg"
                alt="TARSCO Official Crest"
                width={80}
                height={80}
                className={cn(
                  "transition-all duration-300 group-hover:scale-105 h-auto",
                  isScrolled ? "w-11 sm:w-12" : "w-12 sm:w-14",
                )}
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-primary text-xl group-hover:text-primary/80 transition">
                TARSCO
              </div>
              <div className="text-xs text-secondary font-semibold">Since 1961</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-md"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex gap-3 items-center">
            <Link
              href="/admissions"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 btn-glow-apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls={menuId}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div
            id={menuId}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border/50 animate-slide-in-down"
            role="menu"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col p-6 gap-3 max-w-7xl mx-auto">
              {navItems.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium px-3 py-2 rounded-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animation: `fade-up 0.3s ease-out ${idx * 50}ms backwards`,
                  }}
                >
                  {item.label}
                  <ChevronRight
                    size={16}
                    className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50 flex flex-col gap-3">
                <Link
                  href="/admissions"
                  className="px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary rounded-lg transition-all duration-300 text-center shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </nav>

      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-primary/50">
        Skip to main content
      </a>
    </>
  )
}
