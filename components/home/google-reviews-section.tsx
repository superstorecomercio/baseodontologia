import { GoogleReviewCard } from "@/components/google-review-card"
import { Section, SectionHeader } from "@/components/ui/section"
import { getGoogleBusinessData } from "@/lib/get-google-business-data"
import { GoogleStatsStrip } from "@/components/home/google-stats-strip"

export async function GoogleReviewsSection() {
  const googleBusinessData = await getGoogleBusinessData()

  return (
    <Section
      variant="default"
      className="border-t border-b border-border/80 bg-background py-8 md:py-10 lg:py-11"
    >
      <SectionHeader
        subtitle="Avaliações do Google"
        title="O que as pessoas dizem no Google"
        description="Trechos públicos. No Maps você vê todas e pode deixar a sua."
        align="left"
        density="compact"
      />

      <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {googleBusinessData.reviews.slice(0, 4).map((review) => (
          <GoogleReviewCard
            key={review.id}
            review={review}
            density="compact"
            className="rounded-2xl border-border/40 py-0 shadow-none"
          />
        ))}
      </div>

      {googleBusinessData.reviewsSource !== "live" ? (
        <p className="mt-3 text-xs text-muted-foreground">
          Exibindo conteúdo de reserva até a API e as variáveis de ambiente estarem
          ativas.
        </p>
      ) : null}

      <GoogleStatsStrip />
    </Section>
  )
}
