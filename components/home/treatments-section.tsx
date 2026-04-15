import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { TreatmentCard } from "@/components/treatment-card"
import { Button } from "@/components/ui/button"
import { treatments } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function TreatmentsSection() {
  // Show only first 6 treatments on homepage
  const featuredTreatments = treatments.slice(0, 6)

  return (
    <Section>
      <SectionHeader
        subtitle="Nossos Tratamentos"
        title="Conheça nossos tratamentos"
        description="Veja quais são nossos principais tratamentos e como podemos te ajudar a ter um sorriso mais saudável."
      />

      <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {featuredTreatments.map((treatment) => (
          <TreatmentCard
            key={treatment.id}
            id={treatment.id}
            title={treatment.title}
            shortDescription={treatment.shortDescription}
            image={treatment.image}
          />
        ))}
      </div>

      <div className="mt-8 text-center md:mt-10">
        <Button variant="outline" size="lg" asChild>
          <Link href="/tratamentos">
            Ver todos
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
