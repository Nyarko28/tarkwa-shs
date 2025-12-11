'use client'

import Link from 'next/link'
import { BookOpen, Users, FileText, LogIn } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

const links = [
  {
    icon: BookOpen,
    label: 'Academics',
    href: '/academics',
    description: 'Explore our programs',
  },
  {
    icon: Users,
    label: 'Alumni',
    href: '/alumni',
    description: 'Connect with graduates',
  },
  {
    icon: FileText,
    label: 'Admissions',
    href: '/admissions',
    description: 'Apply to TARSCO',
  },
  {
    icon: LogIn,
    label: 'Student Portal',
    href: '#',
    description: 'Access resources',
  },
]

function QuickLinkCard({ icon: Icon, label, href, description, index }: any) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <Link href={href} ref={ref}>
      <div
        className={cn(
          'p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:translate-y-(-2px) bg-card',
          inView ? 'animate-fade-up' : 'opacity-0 translate-y-10'
        )}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="mb-4 p-3 bg-secondary/10 rounded-lg inline-block">
          <Icon className="w-6 h-6 text-secondary" />
        </div>
        <h3 className="font-semibold text-lg mb-1 text-foreground">{label}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

export function QuickLinks() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <QuickLinkCard key={link.label} {...link} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
