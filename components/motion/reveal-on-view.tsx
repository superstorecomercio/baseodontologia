"use client"

import { createElement } from "react"
import { cn } from "@/lib/utils"
import { useRevealInView } from "@/hooks/use-reveal-in-view"

interface RevealOnViewProps {
  as?: "div" | "figure" | "article" | "section"
  children: React.ReactNode
  className?: string
  rootMargin?: string
  threshold?: number | number[]
  /** Classe base de animação (ex.: scroll-reveal, treatment-figure-reveal). */
  revealClassName?: string
}

export function RevealOnView({
  as: Tag = "div",
  children,
  className,
  rootMargin = "0px",
  threshold = 0,
  revealClassName = "scroll-reveal",
}: RevealOnViewProps) {
  const { ref, isVisible } = useRevealInView({ rootMargin, threshold, once: true })

  return createElement(
    Tag,
    {
      ref,
      className: cn(revealClassName, isVisible && "is-visible", className),
    },
    children
  )
}
