import { GoogleReviewCard } from "@/components/google-review-card"
import { StarRating } from "@/components/ui/star-rating"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { getGoogleBusinessData } from "@/lib/get-google-business-data"
import { clinicData } from "@/lib/data"
import { cn } from "@/lib/utils"
import { MapPin, ShieldCheck } from "lucide-react"

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
    <Section
      variant="default"
      className="border-t border-b border-border/80 bg-background py-8 md:py-10 lg:py-11"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
        {/* Coluna esquerda: resumo compacto e premium */}
        <aside className="lg:col-span-4 xl:col-span-5">
          <div className="lg:sticky lg:top-24 xl:top-28">
            <div
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/50 bg-card",
                "shadow-[0_1px_0_rgba(255,255,255,0.65)_inset,0_14px_36px_-16px_rgba(0,0,0,0.12)]",
                "ring-1 ring-black/[0.035]",
                "transition-[box-shadow,transform] duration-300 ease-out",
                "hover:-translate-y-px hover:shadow-[0_1px_0_rgba(255,255,255,0.65)_inset,0_22px_50px_-18px_rgba(0,0,0,0.14)]",
                "dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_14px_36px_-16px_rgba(0,0,0,0.45)]",
                "dark:hover:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_22px_50px_-18px_rgba(0,0,0,0.5)]",
              )}
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/65 to-primary/0"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-primary/[0.075] blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-amber-400/[0.07] blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
                  backgroundSize: "15px 15px",
                }}
                aria-hidden
              />

              <div className="relative px-5 py-6 md:px-6 md:py-7">
                <div className="flex items-start gap-3.5">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_2px_10px_-2px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] dark:shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_2px_10px_-2px_rgba(0,0,0,0.5)]">
                    <GoogleMark className="relative z-10 h-7 w-7" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                      Google Maps
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-foreground">
                      Perfil oficial da clínica
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Nota média e avaliações públicas.
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-border/40 bg-gradient-to-br from-muted/55 via-muted/25 to-transparent p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:from-muted/25 dark:via-muted/10 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
                  <div className="flex items-end justify-between gap-3">
                    <span className="font-serif text-[2.65rem] font-semibold leading-none tabular-nums tracking-tight text-foreground sm:text-5xl">
                      {googleBusinessData.rating}
                    </span>
                    <div className="flex min-w-0 flex-col items-end gap-1">
                      <StarRating
                        rating={googleBusinessData.rating}
                        size="lg"
                        className="shrink-0"
                      />
                      <span className="text-right text-[11px] font-medium text-muted-foreground sm:text-xs">
                        {googleBusinessData.totalReviews} avaliações
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 flex gap-2.5 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>
                    {googleBusinessData.reviewsSource === "live"
                      ? "Dados públicos do Google, sincronizados periodicamente."
                      : "Ative a Places API no servidor para listar resenhas ao vivo."}
                  </span>
                </p>

                <div className="mt-5 flex flex-col gap-2 border-t border-border/50 pt-5">
                  <Button
                    variant="default"
                    size="default"
                    className="h-10 w-full gap-2 rounded-lg text-sm font-semibold shadow-sm"
                    asChild
                  >
                    <a
                      href={clinicData.googleMapsListingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="!size-4 shrink-0" />
                      Abrir no Google Maps
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    className="h-10 w-full rounded-lg border-border/65 bg-background/70 text-sm font-medium backdrop-blur-sm"
                    asChild
                  >
                    <a
                      href={clinicData.googleWriteReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Avaliar no Google
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Coluna direita: título enxuto + grade de resenhas */}
        <div className="min-w-0 lg:col-span-8 xl:col-span-7">
          <header className="mb-4 border-b border-border/50 pb-4 md:mb-5 md:pb-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary md:text-[11px]">
              Avaliações do Google
            </p>
            <h2 className="mt-1.5 font-serif text-2xl font-semibold tracking-tight text-foreground text-balance md:text-3xl md:leading-snug">
              O que as pessoas dizem no Google
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Trechos públicos. No Maps você vê todas e pode deixar a sua.
            </p>
          </header>

          <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
            {googleBusinessData.reviews.slice(0, 4).map((review) => (
              <GoogleReviewCard
                key={review.id}
                review={review}
                density="compact"
                className="rounded-2xl border-border/40 py-0 shadow-sm"
              />
            ))}
          </div>

          {googleBusinessData.reviewsSource !== "live" ? (
            <p className="mt-3 text-xs text-muted-foreground">
              Exibindo conteúdo de reserva até a API e as variáveis de ambiente
              estarem ativas.
            </p>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
