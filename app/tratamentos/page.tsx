import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { TreatmentCard } from "@/components/treatment-card"
import { CTASection } from "@/components/cta-section"
import { treatments, clinicData } from "@/lib/data"

export const metadata: Metadata = {
  title: "Tratamentos",
  description:
    "Conheça nossos tratamentos odontológicos: clareamento, lentes de contato dental, implantes, ortodontia e muito mais. Tecnologia de ponta e profissionais qualificados.",
}

export default function TratamentosPage() {
  return (
    <>
      <section className="bg-muted pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="page-container">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Nossos Tratamentos
            </p>
            <h1 className="mb-7 font-serif text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl md:leading-[1.08]">
              Soluções completas para a saúde e beleza do seu sorriso
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Oferecemos uma ampla gama de tratamentos odontológicos, desde
              procedimentos preventivos até tratamentos estéticos avançados,
              sempre com tecnologia de ponta e atendimento humanizado na{" "}
              {clinicData.clinicName}.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader
          subtitle="Catálogo"
          title="Escolha um tratamento para saber mais"
          description="Cada página traz benefícios, indicações e como agendar sua avaliação."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              id={treatment.id}
              title={treatment.title}
              shortDescription={treatment.shortDescription}
              image={treatment.image}
              href={`/tratamentos/${treatment.id}`}
            />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Prefere falar com a equipe antes de escolher?{" "}
          <Link
            href={`https://wa.me/${clinicData.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de orientação sobre qual tratamento é mais indicado para mim.")}`}
            className="font-medium text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chame no WhatsApp
          </Link>
          .
        </p>
      </Section>

      <CTASection
        title="Não encontrou o tratamento que procura?"
        description="Entre em contato conosco e agende uma avaliação. Teremos prazer em apresentar todas as opções disponíveis para o seu caso."
      />
    </>
  )
}
