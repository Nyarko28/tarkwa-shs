"use client"

import { Mail, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { useState } from "react"

export function ContactSidebar() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const contactPersons = [
    {
      title: "Admissions Inquiries",
      name: "Mr. Kwame Mensah",
      position: "Admissions Officer",
      email: "admissions@tarsco.edu.gh",
      phone: "+233 XXX XXX XXX",
      office: "Administration Block, Room 102",
    },
    {
      title: "Academic Inquiries",
      name: "Mrs. Akua Boateng",
      position: "Academic Coordinator",
      email: "academics@tarsco.edu.gh",
      phone: "+233 XXX XXX XXX",
      office: "Academic Office, Room 205",
    },
    {
      title: "Student Support",
      name: "Mr. Yaw Osei",
      position: "Student Affairs Officer",
      email: "welfare@tarsco.edu.gh",
      phone: "+233 XXX XXX XXX",
      office: "Student Affairs Office, Room 103",
    },
  ]

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "BECE certificate with minimum aggregate of 15 and good grades in core subjects.",
    },
    {
      question: "How do I apply for admission?",
      answer: "Visit our Admissions page for the online application form and detailed instructions.",
    },
    {
      question: "What programs do you offer?",
      answer: "We offer Business, General Arts, General Science, Home Economics, and Visual Arts.",
    },
    {
      question: "What are the school fees?",
      answer: "Fees vary by program. Contact admissions@tarsco.edu.gh for detailed fee structure.",
    },
    {
      question: "Do you offer scholarships?",
      answer: "Yes, we offer merit-based and need-based scholarships. Details on our Admissions page.",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Contact Person Cards */}
      <div className="space-y-4">
        {contactPersons.map((person, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition hover:scale-105"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-primary mb-1">{person.title}</h4>
                <p className="font-bold text-foreground mb-1">{person.name}</p>
                <p className="text-xs text-muted-foreground mb-2">{person.position}</p>
                <a href={`mailto:${person.email}`} className="text-xs text-primary hover:underline block mb-1">
                  {person.email}
                </a>
                <a href={`tel:${person.phone}`} className="text-xs text-muted-foreground hover:text-primary block mb-1">
                  {person.phone}
                </a>
                <p className="text-xs text-muted-foreground">{person.office}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Answers FAQ */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-bold text-lg text-foreground mb-4">Quick Answers</h3>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border last:border-0 pb-2 last:pb-0">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between py-2 text-left hover:text-primary transition"
              >
                <span className="text-sm font-medium">{faq.question}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform flex-shrink-0 ${openFaq === index ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === index && (
                <p className="text-sm text-muted-foreground pb-2 animate-slide-in-down">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <a href="/faq" className="text-sm text-primary hover:underline font-medium mt-4 inline-block">
          View All FAQs →
        </a>
      </div>

      {/* Social Media */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-border rounded-lg p-6">
        <h3 className="font-bold text-lg text-foreground mb-2">Connect on Social Media</h3>
        <p className="text-sm text-muted-foreground mb-4">Follow us for daily updates</p>
        <p className="text-sm font-semibold text-primary mb-4">@tarsco_official</p>
        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] rounded-full flex items-center justify-center text-white hover:scale-110 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center text-white hover:scale-110 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:scale-110 transition"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
