"use client"

import Link from "next/link"
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react"

export function UtilityBar() {
  return (
    <div className="hidden md:flex bg-gradient-to-r from-primary via-primary to-primary/95 text-primary-foreground px-6 py-3 text-sm border-b border-secondary/20 backdrop-blur-sm">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-8">
        {/* Left: Logo/Brand */}
        <div className="flex items-center gap-2 font-serif font-bold text-base">
          <span className="text-secondary font-extrabold">TARSCO</span>
          <span className="text-primary-foreground/80 text-xs">Since 1961</span>
        </div>

        {/* Center: Contact Info */}
        <div className="flex items-center gap-6 text-xs">
          <a
            href="tel:+233312022551"
            className="flex items-center gap-2 hover:text-secondary transition duration-300 group"
          >
            <Phone size={16} className="group-hover:scale-110 transition" />
            <span className="hidden sm:inline">+233 312 022551</span>
          </a>
          <div className="hidden lg:block w-px h-4 bg-primary-foreground/30"></div>
          <a
            href="mailto:info@tarsco.edu.gh"
            className="flex items-center gap-2 hover:text-secondary transition duration-300 group"
          >
            <Mail size={16} className="group-hover:scale-110 transition" />
            <span className="hidden sm:inline">info@tarsco.edu.gh</span>
          </a>
        </div>

        {/* Right: Quick Links & Social */}
        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex gap-5 text-xs border-l border-primary-foreground/30 pl-5">
            <Link href="/alumni" className="hover:text-secondary transition duration-300 font-medium">
              Alumni
            </Link>
            <span className="text-primary-foreground/30">•</span>
            <Link href="/contact" className="hover:text-secondary transition duration-300 font-medium">
              Support
            </Link>
          </nav>
          <div className="flex gap-3">
            <a
              href="#"
              className="hover:text-secondary hover:scale-125 transition duration-300 p-1 rounded hover:bg-white/10"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="hover:text-secondary hover:scale-125 transition duration-300 p-1 rounded hover:bg-white/10"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="hover:text-secondary hover:scale-125 transition duration-300 p-1 rounded hover:bg-white/10"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
