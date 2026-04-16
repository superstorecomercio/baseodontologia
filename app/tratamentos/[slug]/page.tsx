import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CTASection } from "@/components/cta-section"
import { TreatmentDetail } from "@/components/treatment-detail"
import { getAllTreatmentSlugs, getTreatmentBySlug } from "@/lib/treatments"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const treatment = getTreatmentBySlug(slug)
  if (!treatment) {
    return { title: "Tratamento" }
  }
  const description =
    treatment.page.whatIsParagraph.length > 155
      ? `${treatment.page.whatIsParagraph.slice(0, 152)}…`
      : treatment.page.whatIsParagraph

  return {
    title: treatment.title,
    description,
  }
}

export default async function TratamentoSlugPage({ params }: PageProps) {
  const { slug } = await params
  const treatment = getTreatmentBySlug(slug)
  if (!treatment) {
    notFound()
  }

  return (
    <>
      <TreatmentDetail treatment={treatment} />
      <CTASection
        title="Não encontrou o tratamento que procura?"
        description="Entre em contato conosco e agende uma avaliação. Teremos prazer em apresentar todas as opções disponíveis para o seu caso."
      />
    </>
  )
}
