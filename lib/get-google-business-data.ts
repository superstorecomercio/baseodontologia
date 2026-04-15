import { cache } from "react"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import type { GoogleBusinessData, GoogleReview } from "@/lib/data"
import { googleBusinessData as mockGoogleBusinessData } from "@/lib/data"

interface PlacesReview {
  name?: string
  rating?: number
  text?: { text?: string }
  relativePublishTimeDescription?: string
  publishTime?: string
  authorAttribution?: { displayName?: string }
}

/** Data da avaliação em português (ex.: «há cerca de 4 meses»). Ignora o texto em inglês da API. */
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

function mapPlacesReview(review: PlacesReview, index: number): GoogleReview {
  const publish = review.publishTime
  let date = formatReviewDatePt(publish)
  if (!date && publish) {
    try {
      date = new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(publish))
    } catch {
      date = ""
    }
  }
  return {
    id: review.name ?? `google-review-${index}`,
    author: review.authorAttribution?.displayName ?? "Avaliador Google",
    rating: typeof review.rating === "number" ? review.rating : 5,
    date: date || "—",
    text: review.text?.text?.trim() ?? "",
  }
}

/** Extrai só o ID do recurso (ChIJ…) para o path Place Details. */
function normalizePlaceResourceId(raw: string): string {
  const t = raw.trim()
  if (t.startsWith("places/")) return t.slice("places/".length)
  return t
}

/**
 * Resolve o Place ID quando você só tem o link do Maps (com `1s0x…:0x…` ou `/g/…`), sem `ChIJ…` na URL.
 * Usa [Text Search (New)](https://developers.google.com/maps/documentation/places/web-service/text-search).
 */
async function resolvePlaceId(apiKey: string): Promise<string | null> {
  const explicit = process.env.GOOGLE_PLACE_ID?.trim()
  if (explicit) return normalizePlaceResourceId(explicit)

  const textQuery = process.env.GOOGLE_PLACE_TEXT_QUERY?.trim()
  if (!textQuery) return null

  const body: Record<string, unknown> = {
    textQuery,
    pageSize: 5,
  }

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
    next: { revalidate: 86400 },
  })

  if (!res.ok) return null

  const data = (await res.json()) as {
    places?: { id?: string; name?: string; displayName?: { text?: string } }[]
  }
  const first = data.places?.[0]
  if (!first) return null
  if (first.id) return normalizePlaceResourceId(first.id)
  if (first.name?.startsWith("places/"))
    return normalizePlaceResourceId(first.name)
  return null
}

/**
 * Dados públicos do Google Maps via [Place Details (New)](https://developers.google.com/maps/documentation/places/web-service/place-details).
 *
 * Variáveis:
 * - `GOOGLE_PLACES_API_KEY` (obrigatória para modo live)
 * - `GOOGLE_PLACE_ID` — id no formato `ChIJ…` **ou** `places/ChIJ…`
 * - **Ou**, se o link do Maps não mostrar `ChIJ…`:** `GOOGLE_PLACE_TEXT_QUERY` + opcional `GOOGLE_PLACE_SEARCH_BIAS_LATLON` (ex. `-23.5933515,-46.641009` do próprio URL `@lat,lon`)
 */
export const getGoogleBusinessData = cache(
  async (): Promise<GoogleBusinessData> => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim()
    if (!apiKey) {
      return { ...mockGoogleBusinessData, reviewsSource: "mock" }
    }

    let placeId: string | null = null
    try {
      placeId = await resolvePlaceId(apiKey)
    } catch {
      placeId = null
    }

    if (!placeId) {
      return { ...mockGoogleBusinessData, reviewsSource: "mock" }
    }

    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`

    try {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 3600 },
      })

      if (!res.ok) {
        return { ...mockGoogleBusinessData, reviewsSource: "mock" }
      }

      const data = (await res.json()) as {
        rating?: number
        userRatingCount?: number
        reviews?: PlacesReview[]
      }

      const mapped = (data.reviews ?? [])
        .map(mapPlacesReview)
        .filter((r) => r.text.length > 0)

      const rating =
        typeof data.rating === "number" ? data.rating : mockGoogleBusinessData.rating
      const totalReviews =
        typeof data.userRatingCount === "number"
          ? data.userRatingCount
          : mockGoogleBusinessData.totalReviews

      if (mapped.length === 0) {
        return {
          rating,
          totalReviews,
          reviews: mockGoogleBusinessData.reviews,
          reviewsSource: "mock",
        }
      }

      return {
        rating,
        totalReviews,
        reviews: mapped,
        reviewsSource: "live",
      }
    } catch {
      return { ...mockGoogleBusinessData, reviewsSource: "mock" }
    }
  }
)
