import { ScrollFadeSection } from "@/components/motion/scroll-fade-section"
import { Button } from "@/components/ui/button"
import { clinicData } from "@/lib/data"
import { phoneDigits } from "@/lib/utils"
import { MessageCircle, Phone } from "lucide-react"

interface CTASectionProps {
  title?: string
  description?: string
  variant?: "primary" | "light"
  /** Só o botão do WhatsApp (sem telefone); título e descrição permanecem */
  whatsappOnly?: boolean
}

export function CTASection({
  title = "Pronto para transformar seu sorriso?",
  description = "Agende sua avaliação gratuita e descubra como podemos ajudar você a conquistar o sorriso dos seus sonhos.",
  variant = "primary",
  whatsappOnly = false,
}: CTASectionProps) {
  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma avaliação.`

  if (whatsappOnly) {
    return (
      <ScrollFadeSection
        className={
          variant === "light"
            ? "bg-muted py-14 md:py-20"
            : "bg-primary py-14 md:py-20"
        }
      >
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            {variant === "light" ? (
              <>
                <h2 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
                  {title}
                </h2>
                <p className="mb-8 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  {description}
                </p>
                <div className="flex justify-center">
                  <Button size="lg" asChild>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Agendar pelo WhatsApp
                    </a>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <h2 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-balance text-primary-foreground md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
                  {title}
                </h2>
                <p className="mb-8 text-pretty text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                  {description}
                </p>
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-background text-foreground hover:bg-background/90"
                    asChild
                  >
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Agendar pelo WhatsApp
                    </a>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </ScrollFadeSection>
    )
  }

  if (variant === "light") {
    return (
      <ScrollFadeSection className="bg-muted py-14 md:py-20">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
              {title}
            </h2>
            <p className="mb-8 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${phoneDigits(clinicData.phone)}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {clinicData.phonesDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </ScrollFadeSection>
    )
  }

  return (
    <ScrollFadeSection className="bg-primary py-14 md:py-20">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-balance text-primary-foreground md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            {title}
          </h2>
          <p className="mb-8 text-pretty text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href={`tel:${phoneDigits(clinicData.phone)}`}>
                <Phone className="mr-2 h-5 w-5" />
                {clinicData.phonesDisplay}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </ScrollFadeSection>
  )
}
