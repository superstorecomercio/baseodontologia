"use client"

import { cn } from "@/lib/utils"
import { useRevealInView } from "@/hooks/use-reveal-in-view"

interface ScrollFadeSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

/**
 * Bloco `<section>` que entra suave ao entrar na viewport (CSS + IO leve).
 */
export function ScrollFadeSection({ children, className, id }: ScrollFadeSectionProps) {
  const { ref, isVisible } = useRevealInView({
    rootMargin: "0px",
    threshold: 0,
    once: true,
  })

  return (
    <section
      ref={ref}
      id={id}
      className={cn("scroll-reveal", isVisible && "is-visible", className)}
    >
      {children}
    </section>
  )
}
