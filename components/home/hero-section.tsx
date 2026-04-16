import Image from "next/image"
import { Button } from "@/components/ui/button"
import { clinicData, heroData, heroHeadlineSegments } from "@/lib/data"
import { Star, MessageCircle, CalendarCheck } from "lucide-react"

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`

  return (
    <section className="relative overflow-x-hidden pt-[calc(4.5rem+0.75rem)] pb-6 sm:pb-8 lg:pt-[calc(5rem+0.5rem)] lg:pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted/50" />

      <div className="relative page-container">
        {/**
         * Mobile: foto `order-1` fica acima da dobra (LCP pinta cedo). Desktop: `lg:order-none` +
         * `col-start-*` mantém texto à esquerda e foto à direita.
         */}
        <div className="grid gap-x-0 gap-y-8 py-8 sm:gap-y-9 sm:py-10 lg:grid-cols-[minmax(0,1fr)_min(42%,26rem)] lg:items-center lg:gap-x-12 lg:gap-y-0 lg:py-12 xl:grid-cols-[minmax(0,1fr)_28rem] xl:gap-x-16">
          <div className="hero-lcp-col relative order-1 flex justify-center lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-end lg:pb-0">
            <div className="relative w-full max-w-[17.5rem] sm:max-w-[19rem] md:max-w-[20rem] lg:max-w-full">
              <div className="absolute -right-2 -top-3 h-48 w-48 rounded-full bg-primary/10 blur-3xl sm:h-56 sm:w-56 lg:-right-4 lg:-top-4 lg:h-64 lg:w-64" />
              <div className="absolute -bottom-3 -left-2 h-36 w-36 rounded-full bg-primary/5 blur-2xl sm:h-40 sm:w-40" />

              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/dentist-hero.png"
                  alt={`${clinicData.name} - ${clinicData.specialty}`}
                  width={800}
                  height={800}
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 320px, 448px"
                  className="h-full w-full object-cover object-center"
                  priority
                  fetchPriority="high"
                  decoding="sync"
                />
              </div>

              <div className="relative z-10 mt-3 w-full rounded-2xl border border-border/50 bg-card p-3 shadow-md sm:mt-4 sm:p-4 lg:absolute lg:-bottom-6 lg:left-2 lg:mt-0 lg:max-w-[200px] lg:bg-card/95 lg:p-4 lg:shadow-lg lg:backdrop-blur-sm">
                <p className="text-sm font-semibold text-foreground">{clinicData.name}</p>
                <p className="text-[0.6875rem] leading-snug text-muted-foreground sm:text-xs">
                  {clinicData.specialty}
                </p>
                <p className="mt-1 text-xs text-primary">{clinicData.cro}</p>
              </div>
            </div>
          </div>

          <div className="hero-fade-item hero-fade-item--1 order-2 min-w-0 text-center lg:order-none lg:col-start-1 lg:row-start-1 lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wide text-primary sm:mb-6 sm:text-sm">
              <Star className="h-4 w-4 shrink-0 fill-primary" />
              <span>Mais de 3.000 sorrisos transformados</span>
            </div>

            <h1 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-balance leading-[1.12] text-foreground sm:mb-6 md:text-4xl md:leading-[1.1] lg:mb-6 lg:text-[2.375rem] lg:leading-[1.08] xl:text-[2.5rem]">
              {heroHeadlineSegments.map((part, index) => (
                <span key={index} className={part.className}>
                  {part.text}
                </span>
              ))}
            </h1>

            <p className="mx-auto max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed lg:mx-0 lg:mb-8">
              {heroData.subheadline}
            </p>
          </div>

          <div className="hero-fade-item hero-fade-item--3 order-3 flex flex-col items-center justify-center gap-4 sm:flex-row lg:order-none lg:col-start-1 lg:row-start-2 lg:justify-start">
            <Button size="lg" className="w-full px-8 text-base sm:w-auto" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {heroData.ctaPrimary}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full px-8 text-base sm:w-auto"
              asChild
            >
              <a href="/contato">
                <CalendarCheck className="mr-2 h-5 w-5" />
                {heroData.ctaSecondary}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
