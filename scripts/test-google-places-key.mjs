/**
 * Testa GOOGLE_PLACES_API_KEY + resolução do lugar (mesmo fluxo do site).
 * Uso: node --env-file=.env.local scripts/test-google-places-key.mjs
 */

function normalizePlaceId(raw) {
  const t = String(raw).trim()
  if (t.startsWith("places/")) return t.slice("places/".length)
  return t
}

const key = process.env.GOOGLE_PLACES_API_KEY?.trim()
if (!key) {
  console.error("Falta GOOGLE_PLACES_API_KEY no ambiente (.env.local + --env-file)")
  process.exit(1)
}

const textQuery =
  process.env.GOOGLE_PLACE_TEXT_QUERY?.trim() ||
  "BASE Odontologia Inteligente São Paulo"
const bias = process.env.GOOGLE_PLACE_SEARCH_BIAS_LATLON?.trim()
let placeId = process.env.GOOGLE_PLACE_ID?.trim()
  ? normalizePlaceId(process.env.GOOGLE_PLACE_ID)
  : null

if (!placeId) {
  const body = { textQuery, pageSize: 5 }
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
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "places.id,places.name,places.displayName",
    },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  console.log("Text Search:", res.status, res.statusText)
  if (!res.ok) {
    console.error(JSON.stringify(data, null, 2))
    process.exit(1)
  }
  const places = data.places ?? []
  if (places.length === 0) {
    console.error("Nenhum lugar encontrado para a query.")
    process.exit(1)
  }
  console.log("Candidatos (até 5):")
  for (const p of places) {
    const id = p.id ?? p.name?.replace(/^places\//, "")
    console.log(" -", p.displayName?.text ?? "(sem nome)", "| id:", id ?? "?")
  }
  const first = places[0]
  placeId = first.id
    ? normalizePlaceId(first.id)
    : first.name?.startsWith("places/")
      ? normalizePlaceId(first.name)
      : null
  if (!placeId) {
    console.error("Não foi possível obter place id do primeiro resultado.")
    process.exit(1)
  }
}

const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`
const detailRes = await fetch(url, {
  headers: {
    "X-Goog-Api-Key": key,
    "X-Goog-FieldMask": "rating,userRatingCount,reviews",
  },
})
const detail = await detailRes.json()
console.log("\nPlace Details:", detailRes.status, detailRes.statusText)
if (!detailRes.ok) {
  console.error(JSON.stringify(detail, null, 2))
  process.exit(1)
}

const n = detail.reviews?.length ?? 0
console.log(
  "Place ID usado:",
  placeId.slice(0, 20) + (placeId.length > 20 ? "…" : "")
)
console.log("Rating:", detail.rating, "| userRatingCount:", detail.userRatingCount)
console.log("Reviews no JSON (amostra da API):", n)
if (n > 0) {
  const t = detail.reviews[0].text?.text ?? ""
  const preview = t.replace(/\s+/g, " ").slice(0, 100)
  console.log("Primeira review (trecho):", preview + (t.length > 100 ? "…" : ""))
}

console.log("\nOK — API key e Places (New) respondendo como o site espera.")
