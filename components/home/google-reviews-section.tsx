import { Section, SectionHeader } from "@/components/ui/section"
import { GoogleReviewCard } from "@/components/google-review-card"
import { StarRating } from "@/components/ui/star-rating"
import { Button } from "@/components/ui/button"
import { getGoogleBusinessData } from "@/lib/get-google-business-data"
import { clinicData } from "@/lib/data"
import { ExternalLink } from "lucide-react"

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

export async function GoogleReviewsSection() {
  const googleBusinessData = await getGoogleBusinessData()

  return (
    <Section className="py-10 md:py-14 lg:py-16">
      {/* Resumo + ações em uma faixa */}
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-5 md:p-5">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <GoogleMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Google Maps
            </p>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-serif text-3xl font-bold tabular-nums text-foreground sm:text-4xl">
                {googleBusinessData.rating}
              </span>
              <StarRating
                rating={googleBusinessData.rating}
                size="sm"
                className="shrink-0"
              />
              <span className="text-sm text-muted-foreground">
                {googleBusinessData.totalReviews} avaliações
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">
              {googleBusinessData.reviewsSource === "live"
                ? "Dados públicos, atualizados periodicamente."
                : "Ative a Places API no servidor para listar resenhas ao vivo."}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[200px] sm:max-w-xs">
          <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
            <a
              href={clinicData.googleMapsListingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Ver no Maps
            </a>
          </Button>
          <a
            href={clinicData.googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-xs font-medium text-primary underline-offset-4 hover:underline sm:text-left"
          >
            Avaliar no Google
          </a>
        </div>
      </div>

      <SectionHeader
        subtitle="Avaliações do Google"
        title="O que as pessoas dizem no Google"
        description="Trechos públicos. No Maps você vê todas e pode deixar a sua."
        align="left"
        density="compact"
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:gap-3.5">
        {googleBusinessData.reviews.slice(0, 4).map((review) => (
          <GoogleReviewCard key={review.id} review={review} density="compact" />
        ))}
      </div>

      {googleBusinessData.reviewsSource !== "live" ? (
        <p className="mt-4 text-center text-xs text-muted-foreground sm:text-left">
          Exibindo conteúdo de reserva até a API e as variáveis de ambiente estarem ativas.
        </p>
      ) : null}
    </Section>
  )
}
