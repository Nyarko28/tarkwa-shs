'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number | number[]
  margin?: string
  triggerOnce?: boolean
}

export function useInView({ threshold = 0.1, margin = '0px', triggerOnce = false }: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    if (triggerOnce && hasTriggered) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (triggerOnce) {
            setHasTriggered(true)
            observer.unobserve(ref.current!)
          }
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      { threshold, rootMargin: margin }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, margin, triggerOnce, hasTriggered])

  return { ref, inView }
}
