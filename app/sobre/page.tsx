import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/motion/page-hero"
import { Section, SectionHeader } from "@/components/ui/section"
import { clinicData, aboutData, differentials } from "@/lib/data"
import { CheckCircle2, Target, Eye, Heart, Shield, Camera, Clock, CreditCard, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o Dr. Danilo Sorgini, gestor clínico da Base Odontologia, com formação e títulos pela FORP/USP, atuação em prótese, implantes e reabilitação oral.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  camera: Camera,
  clock: Clock,
  creditCard: CreditCard,
  heart: Heart,
  award: Award,
}

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero className="bg-muted pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="page-container">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Sobre Nós
            </p>
            <h1 className="mb-7 font-serif text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl md:leading-[1.08]">
              Ciência USP ao serviço do seu sorriso
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Conheça a história da {clinicData.clinicName} e nossa missão de
              transformar sorrisos com excelência e humanidade.
            </p>
          </div>
        </div>
      </PageHero>

      {/* About the Dentist */}
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Image */}
          <div className="flex w-full justify-center lg:w-auto lg:justify-start">
            <div className="relative w-full max-w-full pb-16 sm:max-w-[19rem] md:max-w-[20rem] lg:max-w-[22rem] lg:pb-14">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/dr-danilo-sobre.png"
                  alt={clinicData.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 352px"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div className="absolute -bottom-4 right-2 max-w-[11rem] rounded-2xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur-sm sm:-bottom-5 sm:right-4 sm:max-w-none sm:p-5">
                <p className="text-lg font-bold leading-tight text-primary sm:text-xl">
                  FORP/USP
                </p>
                <p className="text-xs leading-snug text-muted-foreground sm:text-sm">
                  Graduação, especialização, mestrado e doutorado
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              {aboutData.eyebrow}
            </p>
            <h2 className="mb-6 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {clinicData.name}
            </h2>
            <p className="text-muted-foreground mb-2">{clinicData.specialty}</p>
            <p className="text-sm text-primary mb-6">{clinicData.cro}</p>

            <div className="prose prose-muted max-w-none mb-8">
              {aboutData.fullBio.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Credentials */}
            <h3 className="font-semibold text-foreground mb-4">
              Formação e Credenciais
            </h3>
            <ul className="space-y-3">
              {aboutData.credentials.map((credential) => (
                <li key={credential} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section variant="muted">
        <SectionHeader
          subtitle="Nossa Essência"
          title="Missão, Visão e Valores"
          description="Os princípios que guiam nosso trabalho e nosso compromisso com cada paciente."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Missão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {aboutData.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              {aboutData.vision}
            </p>
          </div>

          {/* Values */}
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Valores
            </h3>
            <ul className="space-y-2">
              {aboutData.values.map((value) => (
                <li
                  key={value}
                  className="text-muted-foreground flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Clinic Structure */}
      <Section>
        <SectionHeader
          subtitle="Nossa Estrutura"
          title="Uma clínica pensada para o seu conforto"
          description="Ambiente moderno, equipamentos de última geração e uma equipe dedicada ao seu bem-estar."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => {
            const Icon = iconMap[item.icon] || Shield
            return (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-card rounded-2xl shadow-sm border border-border"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
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
      </Section>

      {/* Equipe — foto primeiro no DOM (mobile: acima do texto; desktop: coluna direita) */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="mx-auto w-full max-w-xl lg:col-start-2 lg:row-start-1 lg:max-w-none">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/equipe-base-odontologia.png"
                alt={`Equipe da ${clinicData.clinicName} reunida no consultório`}
                fill
                sizes="(max-width: 896px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <SectionHeader
              subtitle="Nossa equipe"
              title="Sobre nós"
              description="Profissionais experientes e acolhedores, em um ambiente moderno, trabalhando com você em cada etapa do tratamento."
              align="left"
            />
          </div>
        </div>
      </Section>

      {/* Team at clinic */}
      <Section variant="muted">
        <div className="relative aspect-[4/3] md:aspect-[3/2] lg:aspect-[2/1] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/equipe-fachada-base.png"
            alt={`Equipe da ${clinicData.clinicName} em frente à clínica`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-2xl md:text-3xl font-semibold text-white max-w-2xl text-balance">
              A equipe que transforma sorrisos com excelência e acolhimento na{" "}
              {clinicData.clinicName}.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
