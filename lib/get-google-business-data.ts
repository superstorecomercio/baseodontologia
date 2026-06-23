import { cache } from "react"

import type { GoogleBusinessData } from "@/lib/data"
import { googleBusinessData as mockGoogleBusinessData } from "@/lib/data"
import { readGoogleBusinessFromCache } from "@/lib/google-business-cache"

/**
 * Avaliações e nota do Google — sempre lidos do cache em `data/google-business-cache.json`.
 * Para atualizar: `npm run sync:google-reviews` (consulta a Places API uma vez e grava o arquivo).
 * O site em produção não chama a API do Google.
 */
export const getGoogleBusinessData = cache((): GoogleBusinessData => {
  const cached = readGoogleBusinessFromCache()
  if (cached) return cached

  return { ...mockGoogleBusinessData, reviewsSource: "mock" }
})
