import { cn } from "@/lib/utils"

interface PageHeroProps {
  children: React.ReactNode
  className?: string
}

/**
 * Hero institucional acima da dobra: entrada via CSS (sem JS na main thread).
 */
export function PageHero({ children, className }: PageHeroProps) {
  return <section className={cn(className, "anim-page-hero")}>{children}</section>
}
