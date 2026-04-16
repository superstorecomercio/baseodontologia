"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/react"

/**
 * Carrega o script de analytics após idle para não competir com LCP / TBT.
 */
export function AnalyticsLoader() {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const run = () => setLoad(true)
    if (typeof window === "undefined") return

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(run, { timeout: 2500 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = setTimeout(run, 2000)
    return () => clearTimeout(timeoutId)
  }, [])

  if (process.env.NODE_ENV !== "production" || !load) {
    return null
  }

  return <Analytics />
}
