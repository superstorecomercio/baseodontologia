import { treatments } from "@/lib/data"
import {
  treatmentPageSeoById,
  type TreatmentPageSeo,
} from "@/lib/treatment-page-seo"

export type Treatment = (typeof treatments)[number]

export interface TreatmentWithPage extends Treatment {
  page: TreatmentPageSeo
}

export function getTreatmentBySlug(slug: string): TreatmentWithPage | undefined {
  const t = treatments.find((x) => x.id === slug)
  if (!t) return undefined
  const page = treatmentPageSeoById[t.id]
  if (!page) return undefined
  return { ...t, page }
}

export function getAllTreatmentSlugs(): string[] {
  return treatments.map((t) => t.id)
}

const requiredSeoIds = new Set(treatments.map((t) => t.id))
for (const id of requiredSeoIds) {
  if (!(id in treatmentPageSeoById)) {
    throw new Error(`treatmentPageSeoById: falta conteúdo SEO para o id "${id}"`)
  }
}
