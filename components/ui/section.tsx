"use client"

import { cn } from "@/lib/utils"
import { useRevealInView } from "@/hooks/use-reveal-in-view"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  variant?: "default" | "muted" | "primary"
}

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  const { ref, isVisible } = useRevealInView({
    rootMargin: "0px 0px -72px 0px",
    threshold: 0.12,
    once: true,
  })

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "scroll-reveal py-14 md:py-20 lg:py-24",
        isVisible && "is-visible",
        variant === "muted" && "bg-muted",
        variant === "primary" && "bg-primary text-primary-foreground",
        className
      )}
    >
      <div className="page-container">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: "left" | "center"
  /** Menos margem e tipografia menor (blocos densos na home). */
  density?: "default" | "compact"
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  density = "default",
  className,
}: SectionHeaderProps) {
  const isCompact = density === "compact"
  return (
    <div
      className={cn(
        isCompact ? "max-w-2xl mb-6 md:mb-8" : "max-w-3xl mb-10 md:mb-14",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <p
          className={cn(
            "font-semibold text-primary uppercase tracking-[0.22em]",
            isCompact
              ? "mb-2 text-[10px] md:text-[11px]"
              : "mb-3 text-[11px]",
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "font-serif font-semibold tracking-tight text-foreground text-balance",
          isCompact
            ? "text-2xl md:text-3xl lg:leading-snug"
            : "text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-muted-foreground",
            isCompact
              ? "mt-2 text-sm leading-relaxed md:text-[15px] md:leading-relaxed"
              : "mt-4 text-base leading-relaxed md:text-lg md:leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
