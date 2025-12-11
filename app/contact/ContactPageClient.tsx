"use client"

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { QuickContactCards } from "@/components/contact/quick-contact-cards"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactSidebar } from "@/components/contact/contact-sidebar"
import { ChevronRight, MapPin, Building2, Calendar, Users, FileText, AlertCircle, Phone } from "lucide-react"

export default function ContactPageClient() {
  const departments = [
    { name: "Administration", contact: "Mr. John Doe", extension: "Ext. 101", email: "admin@tarsco.edu.gh" },
    { name: "Academics", contact: "Mrs. Jane Smith", extension: "Ext. 102", email: "academics@tarsco.edu.gh" },
    { name: "Admissions", contact: "Mr. Kwame Mensah", extension: "Ext. 103", email: "admissions@tarsco.edu.gh" },
    { name: "Finance/Accounts", contact: "Mrs. Ama Serwaa", extension: "Ext. 104", email: "finance@tarsco.edu.gh" },
    { name: "IT/Technical Support", contact: "Mr. Kofi Asante", extension: "Ext. 105", email: "it@tarsco.edu.gh" },
    { name: "Library", contact: "Ms. Abena Owusu", extension: "Ext. 106", email: "library@tarsco.edu.gh" },
    { name: "Sports & Recreation", contact: "Mr. Yaw Mensah", extension: "Ext. 107", email: "sports@tarsco.edu.gh" },
    { name: "Health Center", contact: "Nurse Akua", extension: "Ext. 108", email: "health@tarsco.edu.gh" },
  ]

  return (
    <main id="main-content">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <a href="/" className="hover:text-primary transition">
              Home
            </a>
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">Contact Us</span>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up">
              Get in Touch with TARSCO
            </h1>
            <p className="text-xl text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We're here to answer your questions and help you join the TARSCO family
            </p>
            <div
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 text-primary animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Response time: Within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <QuickContactCards />

      {/* Main Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Form (2/3 width) */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Right Column - Additional Information (1/3 width) */}
            <div className="lg:col-span-1">
              <ContactSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Find Us on the Map</h2>
            <p className="text-xl text-muted-foreground">Located in the heart of Tarkwa, Western Region</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
            <iframe
              title="TARSCO Location"
              width="100%"
              height="500"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8223674382302!2d-2.0058793259607164!3d5.290395236265367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdd6e141a2b77dd%3A0x9be52002d11bde8a!2sTarkwa%20Senior%20High%20School%20(TARSCO)!5e0!3m2!1sen!2sgh!4v1765458827821!5m2!1sen!2sgh"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          {/* Directions */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <MapPin className="text-primary mb-3" size={32} />
              <h4 className="font-semibold text-foreground mb-2">From Takoradi</h4>
              <p className="text-sm text-muted-foreground">45 minutes via N1 highway. Follow signs to Tarkwa.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <MapPin className="text-primary mb-3" size={32} />
              <h4 className="font-semibold text-foreground mb-2">From Accra</h4>
              <p className="text-sm text-muted-foreground">4 hours via N1 and regional roads. Well signposted.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <MapPin className="text-primary mb-3" size={32} />
              <h4 className="font-semibold text-foreground mb-2">Public Transport</h4>
              <p className="text-sm text-muted-foreground">Regular bus services from major cities to Tarkwa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Department Contacts</h2>
            <p className="text-xl text-muted-foreground">Direct contacts for specific inquiries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition hover:-translate-y-1"
              >
                <Building2 className="text-primary mb-3" size={24} />
                <h4 className="font-semibold text-foreground mb-2">{dept.name}</h4>
                <p className="text-sm text-muted-foreground mb-1">{dept.contact}</p>
                <p className="text-sm text-primary font-medium mb-1">{dept.extension}</p>
                <a href={`mailto:${dept.email}`} className="text-xs text-primary hover:underline">
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-12 bg-red-50 dark:bg-red-950/20 border-y border-red-200 dark:border-red-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
                <AlertCircle className="text-red-600 dark:text-red-400" size={32} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-2xl text-red-900 dark:text-red-100 mb-4">Emergency Contacts</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-red-800 dark:text-red-200 mb-1">24/7 Security</p>
                  <a
                    href="tel:+233XXXXXXXXX"
                    className="text-lg font-bold text-red-600 dark:text-red-400 hover:underline"
                  >
                    +233 XXX XXX XXX
                  </a>
                </div>
                <div>
                  <p className="text-sm text-red-800 dark:text-red-200 mb-1">School Nurse</p>
                  <a
                    href="tel:+233XXXXXXXXX"
                    className="text-lg font-bold text-red-600 dark:text-red-400 hover:underline"
                  >
                    +233 XXX XXX XXX
                  </a>
                </div>
                <div>
                  <p className="text-sm text-red-800 dark:text-red-200 mb-1">Headmaster (Urgent)</p>
                  <a
                    href="tel:+233312022551"
                    className="text-lg font-bold text-red-600 dark:text-red-400 hover:underline"
                  >
                    +233 312 022551
                  </a>
                </div>
              </div>
              <p className="text-sm text-red-700 dark:text-red-300 mt-4 italic">
                For emergencies only - please use main contact for general inquiries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/tarsco-campus-hero-image.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Calendar className="mx-auto mb-6" size={48} />
          <h2 className="font-serif text-4xl font-bold mb-4">Want to Visit Our Campus?</h2>
          <p className="text-xl mb-6 text-white/90">
            Experience TARSCO firsthand! Schedule a personalized campus tour and see our facilities, meet our staff, and
            get a feel for student life.
          </p>
          <ul className="text-left max-w-md mx-auto mb-8 space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>See our modern facilities</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Meet with admissions staff</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Talk to current students</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Get application guidance</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition shadow-lg">
              Schedule a Tour
            </button>
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition shadow-lg">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Partnership & Alumni */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Partnership */}
            <div className="bg-card border border-border rounded-lg p-8">
              <FileText className="text-primary mb-4" size={40} />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Partnership & Media Inquiries</h3>
              <p className="text-muted-foreground mb-4">Interested in partnering with TARSCO or covering our story?</p>
              <a
                href="mailto:partnerships@tarsco.edu.gh"
                className="text-primary hover:underline font-semibold block mb-2"
              >
                partnerships@tarsco.edu.gh
              </a>
              <p className="text-sm text-muted-foreground mb-4">Media Contact: +233 XXX XXX XXX</p>
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition">
                Download Press Kit
              </button>
            </div>

            {/* Alumni */}
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-border rounded-lg p-8">
              <Users className="text-accent mb-4" size={40} />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Stay Connected, Alumni</h3>
              <p className="text-muted-foreground mb-4">Keep your alma mater updated with your achievements</p>
              <p className="text-foreground font-semibold mb-4">Alumni Office: alumni@tarsco.edu.gh</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition">
                  Update Your Info
                </button>
                <button className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition">
                  Join Alumni Association
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Call Button (Mobile) */}
      <a
        href="tel:+233312022551"
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition z-50 lg:hidden pulse-glow"
      >
        <Phone size={24} />
      </a>

      <Footer />
    </main>
  )
}
