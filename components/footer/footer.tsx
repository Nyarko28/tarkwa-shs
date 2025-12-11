"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send, Award } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80">Get the latest news, events, and announcements from TARSCO</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-secondary transition"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-opacity-90 transition flex items-center gap-2 group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
            {subscribed && (
              <div className="lg:col-span-2 text-center text-secondary animate-fade-up">✓ Thanks for subscribing!</div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Award size={24} className="text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">TARSCO</h3>
                <p className="text-xs text-primary-foreground/60">Est. 1961</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Tarkwa Senior High School is committed to academic excellence, character development, and holistic student
              growth. Carpe Diem - Seize the Day.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition group"
              >
                <Facebook size={18} className="group-hover:scale-110 transition" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition group"
              >
                <Twitter size={18} className="group-hover:scale-110 transition" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition group"
              >
                <Instagram size={18} className="group-hover:scale-110 transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-secondary text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-secondary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-primary-foreground/80 hover:text-secondary transition">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-primary-foreground/80 hover:text-secondary transition">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-primary-foreground/80 hover:text-secondary transition">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="font-semibold mb-6 text-secondary text-sm uppercase tracking-wider">Programmes</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/academics#business" className="text-primary-foreground/80 hover:text-secondary transition">
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#general-arts"
                  className="text-primary-foreground/80 hover:text-secondary transition"
                >
                  General Arts
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#general-science"
                  className="text-primary-foreground/80 hover:text-secondary transition"
                >
                  General Science
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#home-economics"
                  className="text-primary-foreground/80 hover:text-secondary transition"
                >
                  Home Economics
                </Link>
              </li>
              <li>
                <Link
                  href="/academics#visual-arts"
                  className="text-primary-foreground/80 hover:text-secondary transition"
                >
                  Visual Arts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-secondary text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-primary-foreground/80 hover:text-secondary transition cursor-pointer group">
                <Phone size={16} className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition" />
                <a href="tel:+233312022551">+233 312 022551</a>
              </li>
              <li className="flex gap-3 text-primary-foreground/80 hover:text-secondary transition cursor-pointer group">
                <Mail size={16} className="flex-shrink-0 mt-0.5 group-hover:scale-110 transition" />
                <a href="mailto:info@tarsco.edu.gh">info@tarsco.edu.gh</a>
              </li>
              <li className="flex gap-3 text-primary-foreground/80 group">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Tarkwa, Western Region, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-primary-foreground/70">
          <p>© {currentYear} Tarkwa Senior High School. All rights reserved. Carpe Diem.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-secondary transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-secondary transition">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-secondary transition">
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
    </footer>
  )
}
