import Image from "next/image"
import { Section, SectionHeader } from "@/components/ui/section"
import { clinicData, differentials } from "@/lib/data"
import { Shield, Camera, Clock, CreditCard, Heart, Award } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  camera: Camera,
  clock: Clock,
  creditCard: CreditCard,
  heart: Heart,
  award: Award,
}

export function WhyChooseSection() {
  return (
    <Section variant="muted" scrollStagger>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Image: primeiro no DOM e no mobile; coluna esquerda no `lg`. */}
        <div className="relative order-1">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl shadow-xl lg:mx-0 lg:max-w-none lg:aspect-[4/5]">
            <Image
              src="/images/clinic-diferenciais.png"
              alt={`Recepção e sala de espera da ${clinicData.clinicName}: ambiente moderno, iluminado e acolhedor para o seu atendimento.`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              loading="lazy"
              fetchPriority="low"
            />
          </div>
          {/* Stats card */}
          <div className="absolute -bottom-6 -right-6 max-w-[13.5rem] rounded-2xl border border-border bg-card p-4 shadow-lg sm:max-w-none sm:p-6">
            <p className="text-lg font-bold leading-tight text-primary sm:text-xl">
              Clínica Base
            </p>
            <p className="mt-0.5 text-xs leading-snug text-muted-foreground sm:text-sm">
              Vila Clementino-SP
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="order-2">
          <SectionHeader
            subtitle="Por que nos escolher?"
            title="Diferenciais que fazem toda a diferença"
            align="left"
            className="mb-6 md:mb-7"
          />

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {differentials.map((item) => {
              const Icon = iconMap[item.icon] || Shield
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
