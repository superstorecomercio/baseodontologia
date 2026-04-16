"use client"

import { useEffect, useRef, useState } from "react"

export interface UseRevealInViewOptions {
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

/**
 * IntersectionObserver leve (substitui whileInView do Framer para menos trabalho na main thread).
 */
export function useRevealInView(options: UseRevealInViewOptions = {}) {
  const { rootMargin = "0px", threshold = 0, once = true } = options
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) return
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        setIsVisible(true)
        if (once) obs.disconnect()
      },
      { rootMargin, threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [isVisible, once, rootMargin, threshold])

  return { ref, isVisible }
}
