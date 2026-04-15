import type { Metadata } from "next"
import Image from "next/image"
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { treatments, clinicData } from "@/lib/data"
import {
  Sparkles,
  Sun,
  Smile,
  Plus,
  AlignCenter,
  Search,
  Heart,
  Baby,
  Gem,
  HeartPulse,
  Layers,
  CheckCircle2,
  Clock,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tratamentos",
  description:
    "Conheça nossos tratamentos odontológicos: clareamento, lentes de contato dental, implantes, ortodontia e muito mais. Tecnologia de ponta e profissionais qualificados.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  sun: Sun,
  smile: Smile,
  plus: Plus,
  alignCenter: AlignCenter,
  search: Search,
  heart: Heart,
  baby: Baby,
  gem: Gem,
  heartPulse: HeartPulse,
  layers: Layers,
}

export default function TratamentosPage() {
  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de saber mais sobre os tratamentos.`

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="page-container">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Nossos Tratamentos
            </p>
            <h1 className="mb-7 font-serif text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl md:leading-[1.08]">
              Soluções completas para a saúde e beleza do seu sorriso
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Oferecemos uma ampla gama de tratamentos odontológicos, desde
              procedimentos preventivos até tratamentos estéticos avançados,
              sempre com tecnologia de ponta e atendimento humanizado.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <Section>
        <div className="space-y-16 md:space-y-20">
          {treatments.map((treatment, index) => {
            const Icon = iconMap[treatment.icon] || Sparkles
            const isEven = index % 2 === 0

            return (
              <div
                key={treatment.id}
                id={treatment.id}
                className="scroll-mt-28"
              >
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    <h2 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                      {treatment.title}
                    </h2>

                    <p className="mb-7 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {treatment.fullDescription}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-foreground mb-3">
                        Benefícios
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {treatment.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{treatment.duration}</span>
                      </div>
                    </div>

                    {/* Indication */}
                    <div className="p-4 rounded-xl bg-muted mb-6">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">
                          Indicação:{" "}
                        </span>
                        {treatment.indication}
                      </p>
                    </div>

                    <Button asChild>
                      <a
                        href={`${whatsappUrl} Tenho interesse em ${treatment.title}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Agendar Avaliação
                      </a>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div
                    className={`${
                      isEven ? "" : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-lg ring-1 ring-black/5">
                      <Image
                        src={treatment.image}
                        alt={`${treatment.title} — imagem ilustrativa do tratamento`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {index < treatments.length - 1 && (
                  <div className="mt-16 border-b border-border md:mt-20" />
                )}
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Não encontrou o tratamento que procura?"
        description="Entre em contato conosco e agende uma avaliação. Teremos prazer em apresentar todas as opções disponíveis para o seu caso."
      />
    </>
  )
}
