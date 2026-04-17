import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { TreatmentCard } from "@/components/treatment-card"
import { Button } from "@/components/ui/button"
import { treatments } from "@/lib/data"
import { ArrowRight } from "lucide-react"

/** Ordem e textos curtos só na home (páginas de detalhe seguem `lib/data`). */
const HOME_TREATMENT_IDS = [
  "tratamento-de-canal",
  "odontopediatria",
  "proteses",
  "periodontia",
] as const

const HOME_TREATMENT_COPY: Record<
  (typeof HOME_TREATMENT_IDS)[number],
  { title: string; shortDescription: string }
> = {
  "tratamento-de-canal": {
    title: "Tratamento de Canal",
    shortDescription: "Remover infecção do dente e fechar",
  },
  odontopediatria: {
    title: "Tratamento de crianças (odontopediatria)",
    shortDescription: "Prevenção e cuidado dos dentes infantis",
  },
  proteses: {
    title: "Prótese dentária",
    shortDescription: "Substituição de dentes perdidos",
  },
  periodontia: {
    title: "Tratamentos e cirurgias gengivais",
    shortDescription: "Cuidar e tratar doenças da gengiva",
  },
}

export function TreatmentsSection() {
  const featuredTreatments = HOME_TREATMENT_IDS.map((id) => {
    const base = treatments.find((t) => t.id === id)
    const copy = HOME_TREATMENT_COPY[id]
    if (!base) {
      throw new Error(`Tratamento não encontrado: ${id}`)
    }
    return {
      ...base,
      title: copy.title,
      shortDescription: copy.shortDescription,
    }
  })

  return (
    <Section>
      <SectionHeader
        subtitle="Nossos Tratamentos"
        title="Conheça nossos tratamentos"
        description="Veja quais são nossos principais tratamentos e como podemos te ajudar a ter um sorriso mais saudável."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
        {featuredTreatments.map((treatment) => (
          <TreatmentCard
            key={treatment.id}
            id={treatment.id}
            title={treatment.title}
            shortDescription={treatment.shortDescription}
            image={treatment.image}
            size="compact"
          />
        ))}
      </div>

      <div className="mt-8 text-center md:mt-10">
        <Button variant="outline" size="lg" asChild>
          <Link href="/tratamentos">
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
