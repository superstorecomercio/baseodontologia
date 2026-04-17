import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { clinicData, heroData, heroHeadlineSegments } from "@/lib/data"
import { MapPin, MessageCircle } from "lucide-react"

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`

  return (
    <section className="relative overflow-x-hidden pt-[calc(4.5rem+0.5rem)] pb-4 max-sm:pb-3 sm:pt-[calc(4.5rem+0.75rem)] sm:pb-8 lg:pt-[calc(5rem+0.5rem)] lg:pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted/50" />

      <div className="relative page-container">
        {/**
         * Mobile: foto no topo (`order-1`) — entra no viewport cedo e alinha DOM × pintura para LCP.
         * Desktop: `col-start-*` — texto à esquerda, foto à direita (order não altera o grid explícito).
         */}
        <div className="grid gap-x-0 gap-y-3 py-3 max-sm:gap-y-2.5 max-sm:py-2.5 sm:gap-y-9 sm:py-10 lg:grid-cols-[minmax(0,1fr)_min(42%,26rem)] lg:items-center lg:gap-x-12 lg:gap-y-0 lg:py-12 xl:grid-cols-[minmax(0,1fr)_28rem] xl:gap-x-16">
          <div className="hero-lcp-col relative order-1 flex justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-end lg:pb-0">
            <div className="relative w-full max-w-[14rem] max-sm:max-w-[13.25rem] sm:max-w-[19rem] md:max-w-[20rem] lg:max-w-full">
              <div className="absolute -right-2 -top-3 h-48 w-48 rounded-full bg-primary/10 blur-3xl sm:h-56 sm:w-56 lg:-right-4 lg:-top-4 lg:h-64 lg:w-64" />
              <div className="absolute -bottom-3 -left-2 h-36 w-36 rounded-full bg-primary/5 blur-2xl sm:h-40 sm:w-40" />

              <div className="relative mx-auto w-full max-w-[13.5rem] max-sm:max-w-[12.75rem] sm:max-w-[17rem] md:max-w-[18rem] lg:mx-0 lg:ml-auto lg:max-w-[min(100%,21rem)] xl:max-w-[min(100%,23rem)]">
                <div className="relative aspect-[500/550] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                  <Image
                    src="/images/hero-dr-danilo-recepcao.png"
                    alt={`${clinicData.name} na recepção da ${clinicData.clinicName}`}
                    width={500}
                    height={550}
                    sizes="(max-width: 640px) 58vw, (max-width: 1024px) 280px, 320px"
                    className="h-full w-full object-cover object-left"
                    priority
                    fetchPriority="high"
                    decoding="sync"
                  />
                  {/* Mobile: card sobre a foto, colado na base interna da imagem */}
                  <div className="absolute inset-x-2.5 bottom-2.5 z-10 rounded-lg border border-border/60 bg-card/92 px-2.5 py-1.5 text-center shadow-lg backdrop-blur-sm sm:hidden">
                    <p className="text-xs font-semibold leading-tight text-foreground">{clinicData.name}</p>
                    <p className="mt-0.5 text-[0.6875rem] leading-tight text-primary">{clinicData.cro}</p>
                  </div>
                </div>

                <div
                  className={cn(
                    "relative z-10 hidden w-full rounded-2xl border border-border/50 bg-card p-3 shadow-md sm:mt-4 sm:block sm:p-4 sm:text-left",
                    "lg:absolute lg:-bottom-6 lg:left-2 lg:mt-0 lg:max-w-[200px] lg:bg-card/95 lg:p-4 lg:shadow-lg lg:backdrop-blur-sm",
                  )}
                >
                  <p className="text-sm font-semibold text-foreground">{clinicData.name}</p>
                  <p className="text-[0.6875rem] leading-snug text-muted-foreground sm:text-xs">
                    {clinicData.specialty}
                  </p>
                  <p className="mt-1 text-xs text-primary">{clinicData.cro}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-fade-item hero-fade-item--1 order-2 max-sm:order-3 min-w-0 text-center lg:order-2 lg:col-start-1 lg:row-start-1 lg:text-left">
            <div className="mb-2.5 inline-flex max-w-full items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-left text-[11px] font-semibold tracking-wide text-primary max-sm:leading-snug sm:mb-6 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
              <MapPin className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden />
              <span className="text-balance leading-snug">
                Odontologia de confiança na Vila Clementino
              </span>
            </div>

            <h1 className="mb-2.5 font-serif text-[1.5rem] font-semibold tracking-tight text-balance leading-[1.12] text-foreground max-sm:mb-2 sm:mb-6 sm:text-3xl sm:leading-[1.12] md:text-4xl md:leading-[1.1] lg:mb-6 lg:text-[2.375rem] lg:leading-[1.08] xl:text-[2.5rem]">
              {heroHeadlineSegments.map((part, index) => (
                <span key={index} className={part.className}>
                  {part.text}
                </span>
              ))}
            </h1>

            <div className="mx-auto max-w-xl text-pretty text-[13px] leading-snug text-muted-foreground max-sm:leading-snug sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:mx-0 lg:mb-8">
              <p>{heroData.subheadline}</p>
            </div>
          </div>

          <div className="hero-fade-item hero-fade-item--3 order-3 max-sm:order-2 flex justify-center lg:order-3 lg:col-start-1 lg:row-start-2 lg:justify-start">
            <Button
              size="lg"
              className="w-full px-5 text-sm max-sm:h-10 sm:w-auto sm:px-8 sm:text-base"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                {heroData.ctaPrimary}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
