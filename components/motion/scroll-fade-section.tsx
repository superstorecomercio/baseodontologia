"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { transitionReveal } from "@/lib/motion"

interface ScrollFadeSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

/**
 * Bloco `<section>` que entra suave ao entrar na viewport (server-friendly wrapper).
 */
export function ScrollFadeSection({ children, className, id }: ScrollFadeSectionProps) {
  const reduce = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={reduce ? undefined : { once: true, amount: 0.15, margin: "0px 0px -64px 0px" }}
      transition={reduce ? { duration: 0 } : transitionReveal}
    >
      {children}
    </motion.section>
  )
}
