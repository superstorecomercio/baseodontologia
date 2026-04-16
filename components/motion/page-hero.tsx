"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { transitionHero } from "@/lib/motion"

interface PageHeroProps {
  children: React.ReactNode
  className?: string
}

/**
 * Hero institucional acima da dobra: entrada suave ao carregar a página.
 */
export function PageHero({ children, className }: PageHeroProps) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={transitionHero}
    >
      {children}
    </motion.section>
  )
}
