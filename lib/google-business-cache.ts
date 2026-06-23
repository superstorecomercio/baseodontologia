import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs"
import path from "node:path"

import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import type { GoogleBusinessData, GoogleReview } from "@/lib/data"

export const GOOGLE_BUSINESS_CACHE_FILE = path.join(
  process.cwd(),
  "data",
  "google-business-cache.json",
)

export interface CachedGoogleReview {
  id: string
  author: string
  rating: number
  text: string
  publishTime?: string
}

export interface GoogleBusinessCacheFile {
  version: 1
  syncedAt: string
  placeId?: string
  rating: number
  totalReviews: number
  reviews: CachedGoogleReview[]
}

function formatReviewDatePt(publishTime: string | undefined): string {
  if (!publishTime?.trim()) return ""
  const d = new Date(publishTime)
  if (Number.isNaN(d.getTime())) return ""
  try {
    return formatDistanceToNow(d, { addSuffix: true, locale: ptBR })
  } catch {
    return ""
  }
}

function toDisplayReview(review: CachedGoogleReview): GoogleReview {
  let date = formatReviewDatePt(review.publishTime)
  if (!date && review.publishTime) {
    try {
      date = new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(review.publishTime))
    } catch {
      date = ""
    }
  }
  return {
    id: review.id,
    author: review.author,
    rating: review.rating,
    date: date || "—",
    text: review.text,
  }
}

export function readGoogleBusinessCacheFile(): GoogleBusinessCacheFile | null {
  try {
    if (!existsSync(GOOGLE_BUSINESS_CACHE_FILE)) return null
    const raw = readFileSync(GOOGLE_BUSINESS_CACHE_FILE, "utf8")
    const parsed = JSON.parse(raw) as GoogleBusinessCacheFile
    if (parsed.version !== 1) return null
    if (typeof parsed.rating !== "number") return null
    if (typeof parsed.totalReviews !== "number") return null
    if (!Array.isArray(parsed.reviews)) return null
    return parsed
  } catch {
    return null
  }
}

export function readGoogleBusinessFromCache(): GoogleBusinessData | null {
  const file = readGoogleBusinessCacheFile()
  if (!file) return null

  const reviews = file.reviews
    .map(toDisplayReview)
    .filter((r) => r.text.length > 0)

  if (reviews.length === 0) return null

  return {
    rating: file.rating,
    totalReviews: file.totalReviews,
    reviews,
    reviewsSource: "cached",
  }
}

export function writeGoogleBusinessCacheFile(payload: GoogleBusinessCacheFile) {
  const dir = path.dirname(GOOGLE_BUSINESS_CACHE_FILE)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  writeFileSync(
    GOOGLE_BUSINESS_CACHE_FILE,
    `${JSON.stringify(payload, null, 2)}\n`,
    "utf8",
  )
}
