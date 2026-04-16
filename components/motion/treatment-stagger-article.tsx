"use client"

import { cn } from "@/lib/utils"
import { useRevealInView } from "@/hooks/use-reveal-in-view"

interface TreatmentStaggerArticleProps {
  children: React.ReactNode
  className?: string
}

/**
 * Artigo com seções que revelam em sequência (CSS + um único IO).
 */
export function TreatmentStaggerArticle({ children, className }: TreatmentStaggerArticleProps) {
  const { ref, isVisible } = useRevealInView({
    rootMargin: "0px",
    threshold: 0,
    once: true,
  })

  return (
    <article
      ref={ref}
      className={cn("treatment-article-stagger", isVisible && "is-visible", className)}
    >
      {children}
    </article>
  )
}
