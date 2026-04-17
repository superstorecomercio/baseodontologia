import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { clinicData, heroData, heroHeadlineSegments } from "@/lib/data"
import { MapPin, MessageCircle } from "lucide-react"

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`

  return (
    <section className="relative overflow-x-hidden pt-[calc(4.5rem+0.75rem)] pb-6 sm:pb-8 lg:pt-[calc(5rem+0.5rem)] lg:pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted/50" />

      <div className="relative page-container">
        {/**
         * Mobile: foto no topo (`order-1`) — entra no viewport cedo e alinha DOM × pintura para LCP.
         * Desktop: `col-start-*` — texto à esquerda, foto à direita (order não altera o grid explícito).
         */}
        <div className="grid gap-x-0 gap-y-8 py-8 sm:gap-y-9 sm:py-10 lg:grid-cols-[minmax(0,1fr)_min(42%,26rem)] lg:items-center lg:gap-x-12 lg:gap-y-0 lg:py-12 xl:grid-cols-[minmax(0,1fr)_28rem] xl:gap-x-16">
          <div className="hero-lcp-col relative order-1 flex justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-end lg:pb-0">
            <div className="relative w-full max-w-[17.5rem] sm:max-w-[19rem] md:max-w-[20rem] lg:max-w-full">
              <div className="absolute -right-2 -top-3 h-48 w-48 rounded-full bg-primary/10 blur-3xl sm:h-56 sm:w-56 lg:-right-4 lg:-top-4 lg:h-64 lg:w-64" />
              <div className="absolute -bottom-3 -left-2 h-36 w-36 rounded-full bg-primary/5 blur-2xl sm:h-40 sm:w-40" />

              <div className="relative mx-auto w-full max-w-[15.5rem] pb-7 max-sm:pb-9 sm:max-w-[17rem] sm:pb-0 md:max-w-[18rem] lg:mx-0 lg:ml-auto lg:max-w-[min(100%,21rem)] xl:max-w-[min(100%,23rem)]">
                <div className="relative aspect-[500/550] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                  <Image
                    src="/images/hero-dr-danilo-recepcao.png"
                    alt={`${clinicData.name} na recepção da ${clinicData.clinicName}`}
                    width={500}
                    height={550}
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 280px, 320px"
                    className="h-full w-full object-cover object-left"
                    priority
                    fetchPriority="high"
                    decoding="sync"
                  />
                </div>

                <div
                  className={cn(
                    "z-10 w-full rounded-2xl border border-border/50 bg-card/95 text-center shadow-md backdrop-blur-sm",
                    "max-sm:absolute max-sm:left-1/2 max-sm:bottom-0 max-sm:w-[calc(100%-1.25rem)] max-sm:-translate-x-1/2 max-sm:translate-y-1/2 max-sm:px-3 max-sm:py-2.5 max-sm:shadow-lg",
                    "sm:relative sm:bottom-auto sm:left-auto sm:mt-4 sm:translate-x-0 sm:translate-y-0 sm:px-4 sm:py-4 sm:text-left",
                    "lg:absolute lg:-bottom-6 lg:left-2 lg:mt-0 lg:max-w-[200px] lg:shadow-lg",
                  )}
                >
                  <p className="text-sm font-semibold text-foreground">{clinicData.name}</p>
                  <p className="hidden text-[0.6875rem] leading-snug text-muted-foreground sm:block sm:text-xs">
                    {clinicData.specialty}
                  </p>
                  <p
                    className={cn(
                      "text-xs text-primary",
                      "max-sm:mt-0.5 sm:mt-1",
                    )}
                  >
                    {clinicData.cro}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-fade-item hero-fade-item--1 order-2 min-w-0 text-center lg:col-start-1 lg:row-start-1 lg:text-left">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-left text-xs font-semibold tracking-wide text-primary sm:mb-6 sm:text-sm">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              <span className="text-balance leading-snug">
                Odontologia de confiança na Vila Clementino
              </span>
            </div>

            <h1 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-balance leading-[1.12] text-foreground sm:mb-6 md:text-4xl md:leading-[1.1] lg:mb-6 lg:text-[2.375rem] lg:leading-[1.08] xl:text-[2.5rem]">
              {heroHeadlineSegments.map((part, index) => (
                <span key={index} className={part.className}>
                  {part.text}
                </span>
              ))}
            </h1>

            <div className="mx-auto max-w-xl text-pretty text-base leading-relaxed md:text-lg md:leading-relaxed lg:mx-0 lg:mb-8">
              <p className="text-muted-foreground">{heroData.subheadline}</p>
            </div>
          </div>

          <div className="hero-fade-item hero-fade-item--3 order-3 flex justify-center lg:col-start-1 lg:row-start-2 lg:justify-start">
            <Button size="lg" className="w-full px-8 text-base sm:w-auto" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {heroData.ctaPrimary}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
