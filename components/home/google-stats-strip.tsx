import { StarRating } from "@/components/ui/star-rating"
import { getGoogleBusinessData } from "@/lib/get-google-business-data"
import { clinicData } from "@/lib/data"
import { ExternalLink, Facebook } from "lucide-react"

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

/** Marca Doctoralia (cor aproximada da identidade visual). */
function DoctoraliaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="7" fill="#00BFA5" />
      <path
        d="M10 22V10h5.2c2.76 0 5 2.02 5 4.5s-2.24 4.5-5 4.5H14v3H10zm4-8.25V15h.9c1.05 0 1.9-.78 1.9-1.75S15.95 11.5 14.9 11.5H14v2.25z"
        fill="white"
      />
    </svg>
  )
}

/** Faixa horizontal: Google + Doctoralia + Facebook (avaliações). */
export async function GoogleStatsStrip() {
  const googleBusinessData = await getGoogleBusinessData()
  const { doctoraliaUrl, facebookReviewsUrl, platformReviewCounts } = clinicData

  return (
    <div className="flex flex-col items-stretch justify-center gap-8 border-t border-border/60 bg-background pt-8 md:flex-row md:items-center md:gap-0 md:pt-10">
      <div className="flex flex-1 flex-col items-center gap-4 sm:flex-row sm:justify-center md:flex-initial md:items-center md:gap-4 md:pr-8 lg:pr-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <GoogleMark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <div className="text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <span className="text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
                {googleBusinessData.rating}
              </span>
              <StarRating rating={googleBusinessData.rating} size="md" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {googleBusinessData.totalReviews} avaliações no Google
            </p>
            <a
              href={clinicData.googleMapsListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline sm:justify-start"
            >
              Ver no Google
              <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div
        className="hidden h-14 w-px shrink-0 bg-border md:block"
        aria-hidden
      />

      <div className="grid flex-1 grid-cols-2 gap-4 text-center sm:gap-8 md:flex md:flex-1 md:items-stretch md:justify-center md:gap-0 md:pl-4 lg:pl-6">
        <a
          href={doctoraliaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 rounded-lg px-2 py-1 text-center transition-colors hover:bg-muted/50 md:flex-1 md:flex-row md:items-center md:justify-center md:gap-3 md:px-4"
          aria-label={`${platformReviewCounts.doctoralia} avaliações no Doctoralia — abrir perfil`}
        >
          <DoctoraliaMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
          <div>
            <p className="text-xl font-bold tabular-nums text-foreground sm:text-2xl md:text-3xl">
              {platformReviewCounts.doctoralia}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
              avaliações no Doctoralia
            </p>
          </div>
        </a>

        <div
          className="hidden w-px shrink-0 self-center bg-border md:block md:h-14"
          aria-hidden
        />

        <a
          href={facebookReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 rounded-lg px-2 py-1 text-center transition-colors hover:bg-muted/50 md:flex-1 md:flex-row md:items-center md:justify-center md:gap-3 md:px-4"
          aria-label={`${platformReviewCounts.facebook} avaliações no Facebook — abrir avaliações`}
        >
          <Facebook
            className="h-9 w-9 shrink-0 fill-[#1877F2] text-[#1877F2] sm:h-10 sm:w-10"
            aria-hidden
          />
          <div>
            <p className="text-xl font-bold tabular-nums text-foreground sm:text-2xl md:text-3xl">
              {platformReviewCounts.facebook}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
              avaliações no Facebook
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
