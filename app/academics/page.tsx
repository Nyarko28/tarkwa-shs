import type { Metadata } from "next"
import { Header } from "@/components/header/header"
import { PageHeader } from "@/components/page-header"
import { Footer } from "@/components/footer/footer"

export const metadata: Metadata = {
  title: "Academic Programmes",
  description:
    "Explore TARSCO's five academic programmes: Business, General Arts, General Science, Home Economics, and Visual Arts. Discover our comprehensive curriculum designed for excellence.",
  keywords: [
    "Business programme",
    "General Arts Ghana",
    "General Science",
    "Home Economics",
    "Visual Arts",
    "TARSCO curriculum",
    "WAEC subjects",
  ],
  openGraph: {
    title: "Academic Programmes at TARSCO",
    description: "Five comprehensive programmes designed for academic excellence and career success.",
  },
}

const programmes = [
  {
    id: "general-science",
    name: "General Science",
    description:
      "Advanced study of physics, chemistry, biology, and mathematics for aspiring scientists and engineers.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "ICT"],
    icon: "flask",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "general-arts",
    name: "General Arts",
    description: "Comprehensive exploration of literature, history, geography, and social sciences.",
    subjects: ["English Literature", "History", "Geography", "Government", "Economics"],
    icon: "book",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "business",
    name: "Business",
    description: "Master accounting, economics, and business management for future entrepreneurs and executives.",
    subjects: ["Accounting", "Economics", "Business Management", "ICT"],
    icon: "briefcase",
    color: "from-green-600 to-emerald-600",
  },
  {
    id: "home-economics",
    name: "Home Economics",
    description: "Study nutrition, family development, and practical life skills for sustainable living.",
    subjects: ["Nutrition", "Food Science", "Family Development", "Textiles", "Hospitality"],
    icon: "home",
    color: "from-rose-500 to-orange-600",
  },
  {
    id: "visual-arts",
    name: "Visual Arts",
    description: "Develop creative skills in painting, sculpture, design, and contemporary art practices.",
    subjects: ["Painting", "Sculpture", "Graphic Design", "Art History", "Digital Media"],
    icon: "palette",
    color: "from-amber-500 to-orange-600",
  },
]

const iconMap = {
  flask: "🧪",
  book: "📚",
  briefcase: "💼",
  home: "🏠",
  palette: "🎨",
}

export default function AcademicsPage() {
  return (
    <main id="main-content">
      <Header />
      <PageHeader
        title="Academic Programmes"
        subtitle="Pursuing Excellence Through Diverse Learning Pathways"
        variant="academics"
      />

      {/* Programmes Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Five Programmes</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              TARSCO offers five diverse academic streams designed to cater to different interests and career
              aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((programme, index) => (
              <div key={programme.id} className="animate-fade-up group" style={{ animationDelay: `${index * 100}ms` }}>
                <div
                  className={`bg-gradient-to-br ${programme.color} p-8 rounded-xl mb-6 text-white h-32 flex flex-col justify-between transition-transform group-hover:scale-105 duration-300`}
                >
                  <div className="text-4xl">{iconMap[programme.icon as keyof typeof iconMap]}</div>
                  <h3 className="font-serif text-2xl font-bold">{programme.name}</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{programme.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Key Subjects:</h4>
                  <ul className="space-y-2">
                    {programme.subjects.map((subject) => (
                      <li key={subject} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
            Outstanding Faculty
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
            Our experienced educators are dedicated to fostering intellectual growth and academic excellence through
            innovative teaching methods.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Qualified Teachers", value: "120+" },
              { title: "Advanced Degrees", value: "85%" },
              { title: "Years of Experience", value: "15+ avg" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-lg border border-border">
                <p className="text-4xl font-serif font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-foreground font-semibold">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
