/**
 * Busca rating + reviews na Places API (New) e grava em data/google-business-cache.json.
 * Uso: npm run sync:google-reviews
 * Requer .env.local com GOOGLE_PLACES_API_KEY (+ GOOGLE_PLACE_ID ou GOOGLE_PLACE_TEXT_QUERY).
 */

import { mkdirSync, writeFileSync, existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const CACHE_FILE = path.join(ROOT, "data", "google-business-cache.json")

function normalizePlaceId(raw) {
  const t = String(raw).trim()
  if (t.startsWith("places/")) return t.slice("places/".length)
  return t
}

async function resolvePlaceId(apiKey) {
  const explicit = process.env.GOOGLE_PLACE_ID?.trim()
  if (explicit) return normalizePlaceId(explicit)

  const textQuery = process.env.GOOGLE_PLACE_TEXT_QUERY?.trim()
  if (!textQuery) return null

  const body = { textQuery, pageSize: 5 }
  const bias = process.env.GOOGLE_PLACE_SEARCH_BIAS_LATLON?.trim()
  if (bias) {
    const parts = bias.split(",").map((s) => s.trim())
    const lat = Number(parts[0])
    const lon = Number(parts[1])
    if (!Number.isNaN(lat) && !Number.isNaN(lon)) {
      body.locationBias = {
        circle: {
          center: { latitude: lat, longitude: lon },
          radius: 1500,
        },
      }
    }
  }

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id,places.name,places.displayName",
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    console.error("Text Search falhou:", res.status, await res.text())
    return null
  }

  const data = await res.json()
  const first = data.places?.[0]
  if (!first) return null
  if (first.id) return normalizePlaceId(first.id)
  if (first.name?.startsWith("places/")) return normalizePlaceId(first.name)
  return null
}

function mapReview(review, index) {
  return {
    id: review.name ?? `google-review-${index}`,
    author: review.authorAttribution?.displayName ?? "Avaliador Google",
    rating: typeof review.rating === "number" ? review.rating : 5,
    text: review.text?.text?.trim() ?? "",
    publishTime: review.publishTime ?? undefined,
  }
}

const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim()
if (!apiKey) {
  console.error("Defina GOOGLE_PLACES_API_KEY em .env.local")
  process.exit(1)
}

const placeId = await resolvePlaceId(apiKey)
if (!placeId) {
  console.error("Não foi possível resolver o Place ID (GOOGLE_PLACE_ID ou GOOGLE_PLACE_TEXT_QUERY).")
  process.exit(1)
}

const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`
const detailRes = await fetch(url, {
  headers: {
    "X-Goog-Api-Key": apiKey,
    "X-Goog-FieldMask": "rating,userRatingCount,reviews",
  },
})

const detail = await detailRes.json()
if (!detailRes.ok) {
  console.error("Place Details falhou:", detailRes.status, JSON.stringify(detail, null, 2))
  process.exit(1)
}

const reviews = (detail.reviews ?? [])
  .map(mapReview)
  .filter((r) => r.text.length > 0)

if (reviews.length === 0) {
  console.error("A API não retornou reviews com texto.")
  process.exit(1)
}

const payload = {
  version: 1,
  syncedAt: new Date().toISOString(),
  placeId,
  rating: typeof detail.rating === "number" ? detail.rating : 0,
  totalReviews:
    typeof detail.userRatingCount === "number" ? detail.userRatingCount : 0,
  reviews,
}

const dir = path.dirname(CACHE_FILE)
if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
writeFileSync(CACHE_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8")

console.log("Cache atualizado:", CACHE_FILE)
console.log(
  "Rating:",
  payload.rating,
  "| Total:",
  payload.totalReviews,
  "| Reviews no cache:",
  payload.reviews.length,
)
console.log("Sincronizado em:", payload.syncedAt)
