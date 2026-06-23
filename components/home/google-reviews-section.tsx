import { GoogleReviewCard } from "@/components/google-review-card"
import { Section, SectionHeader } from "@/components/ui/section"
import { getGoogleBusinessData } from "@/lib/get-google-business-data"
import { GoogleStatsStrip } from "@/components/home/google-stats-strip"

export async function GoogleReviewsSection() {
  const googleBusinessData = await getGoogleBusinessData()

  return (
    <Section
      variant="default"
      scrollStagger
      className="border-t border-b border-border/80 bg-background py-8 md:py-10 lg:py-11"
    >
      <SectionHeader
        subtitle="Avaliações do Google"
        title="O que dizem no Google"
        description="Trechos públicos. No Maps você vê todas e pode deixar a sua."
        align="left"
        density="compact"
        headingClassName="max-sm:text-[1.1875rem] max-sm:leading-snug max-sm:tracking-tight sm:tracking-tight"
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

      {googleBusinessData.reviewsSource === "mock" ? (
        <p className="mt-3 text-xs text-muted-foreground">
          Exibindo conteúdo de reserva. Execute{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-[0.7rem]">
            npm run sync:google-reviews
          </code>{" "}
          para carregar avaliações reais do Google.
        </p>
      ) : null}

      <GoogleStatsStrip />
    </Section>
  )
}
