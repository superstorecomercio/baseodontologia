"use client"

import { useLayoutEffect, useRef, useState } from "react"

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

  useLayoutEffect(() => {
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

    // IO pode atrasar o primeiro callback; takeRecords pega interseções já válidas no frame atual.
    const raf = requestAnimationFrame(() => {
      const records =
        typeof obs.takeRecords === "function" ? obs.takeRecords() : []
      if (records.some((e) => e.isIntersecting)) {
        setIsVisible(true)
        if (once) obs.disconnect()
      }
    })

    return () => {
      cancelAnimationFrame(raf)
      obs.disconnect()
    }
  }, [isVisible, once, rootMargin, threshold])

  return { ref, isVisible }
}
