import { ScrollFadeSection } from "@/components/motion/scroll-fade-section"
import { StarRating } from "@/components/ui/star-rating"
import { getGoogleBusinessData } from "@/lib/get-google-business-data"
import { clinicData } from "@/lib/data"
import { ExternalLink } from "lucide-react"

export async function SocialProofSection() {
  const googleBusinessData = await getGoogleBusinessData()

  return (
    <ScrollFadeSection className="border-y border-border bg-card py-8 md:py-10">
      <div className="page-container">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
          {/* Google Rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
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
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {googleBusinessData.rating}
                  </span>
                  <StarRating rating={googleBusinessData.rating} size="sm" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {googleBusinessData.totalReviews} avaliações no Google
                </p>
                <a
                  href={clinicData.googleMapsListingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Ver no Google
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-border" />

          {/* Stats */}
          <div className="flex items-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-foreground">15+</p>
              <p className="text-sm text-muted-foreground">Anos de experiência</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">3.000+</p>
              <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollFadeSection>
  )
}
