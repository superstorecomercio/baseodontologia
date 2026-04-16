import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/motion/page-hero"
import { RevealOnView } from "@/components/motion/reveal-on-view"
import { TreatmentStaggerArticle } from "@/components/motion/treatment-stagger-article"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { TreatmentFaqAccordion } from "@/components/treatment-faq-accordion"
import { clinicData } from "@/lib/data"
import type { TreatmentWithPage } from "@/lib/treatments"
import { CheckCircle2, ChevronRight, MessageCircle, XCircle } from "lucide-react"

interface TreatmentDetailProps {
  treatment: TreatmentWithPage
}

function buildWhatsAppHref(treatmentTitle: string): string {
  const text = encodeURIComponent(
    `Olá! Tenho interesse em ${treatmentTitle}. Gostaria de agendar uma avaliação.`
  )
  return `https://wa.me/${clinicData.whatsapp}?text=${text}`
}

const h1Class =
  "font-serif text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl md:text-[2.5rem] md:leading-[1.12]"

const h2Class =
  "font-serif text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl md:text-[2rem] md:leading-snug"

const h3Class = "text-base font-semibold text-foreground sm:text-lg"

const h3LabelClass =
  "text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px]"

const bodyClass =
  "text-base leading-[1.7] text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.75]"

const listCheckClass = "flex gap-3.5 py-1.5 leading-relaxed text-muted-foreground sm:gap-4"

export function TreatmentDetail({ treatment }: TreatmentDetailProps) {
  const { page } = treatment
  const whatsappHref = buildWhatsAppHref(treatment.title)

  return (
    <>
      <PageHero className="bg-muted pb-10 pt-28 md:pb-14 md:pt-32">
        <div className="page-container">
          <nav
            className="mb-8 flex max-w-2xl flex-wrap items-center gap-1 text-sm text-muted-foreground md:mb-10"
            aria-label="Navegação estrutural"
          >
            <Link href="/" className="hover:text-foreground">
              Início
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
            <Link href="/tratamentos" className="hover:text-foreground">
              Tratamentos
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
            <span className="font-medium text-foreground">{treatment.title}</span>
          </nav>

          <div className="mx-auto max-w-2xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Tratamento
            </p>
            <h1 className={h1Class}>{page.h1WhatIs}</h1>
            <p className={`mt-6 max-w-prose ${bodyClass}`}>{page.whatIsParagraph}</p>
          </div>
        </div>
      </PageHero>

      <Section className="!pt-10 md:!pt-14">
        <div className="mx-auto max-w-2xl">
          <RevealOnView
            as="figure"
            rootMargin="0px"
            threshold={0.2}
            className="mb-14 overflow-hidden rounded-2xl bg-muted shadow-lg ring-1 ring-black/5 md:mb-20"
            revealClassName="scroll-reveal scroll-reveal-treatment-figure"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={treatment.image}
                alt={`${treatment.title} — imagem ilustrativa do tratamento na ${clinicData.clinicName}`}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
                priority
              />
            </div>
          </RevealOnView>

          <TreatmentStaggerArticle className="flex flex-col gap-14 md:gap-[4.5rem]">
            <section className="space-y-6" aria-labelledby="sec-indicacoes">
              <h2 id="sec-indicacoes" className={h2Class}>
                {page.whoCanH2}
              </h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className={h3Class}>Indicações</h3>
                  <ul className="space-y-1" role="list">
                    {page.indications.map((line) => (
                      <li key={line} className={listCheckClass}>
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className={h3Class}>Contraindicações</h3>
                  <ul className="space-y-1" role="list">
                    {page.contraindications.map((line) => (
                      <li key={line} className={listCheckClass}>
                        <XCircle
                          className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section
              className="space-y-6 border-t border-border pt-14 md:space-y-8 md:pt-16"
              aria-labelledby="sec-como"
            >
              <h2 id="sec-como" className={h2Class}>
                {page.howItWorksH2}
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className={h3Class}>Etapas do procedimento</h3>
                  <ol className="list-decimal space-y-4 pl-6 marker:font-semibold marker:text-primary">
                    {page.procedureSteps.map((step) => (
                      <li key={step} className={`pl-2 ${bodyClass}`}>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <p className={`rounded-xl border border-border bg-muted/50 px-5 py-4 ${bodyClass}`}>
                  <span className="font-semibold text-foreground">Tempo médio: </span>
                  {page.procedureDurationDetail}
                </p>
                {page.technologies.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className={h3Class}>Tecnologias e materiais</h3>
                    <ul className="list-disc space-y-3 pl-6 marker:text-primary" role="list">
                      {page.technologies.map((tech) => (
                        <li key={tech} className={bodyClass}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </section>

            <section className="space-y-6 border-t border-border pt-14 md:pt-16" aria-labelledby="sec-beneficios">
              <h2 id="sec-beneficios" className={h2Class}>
                {page.benefitsH2}
              </h2>
              <ul className="space-y-1" role="list">
                {treatment.benefits.map((benefit) => (
                  <li key={benefit} className={listCheckClass}>
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="space-y-8 border-t border-border pt-14 md:pt-16"
              aria-labelledby="sec-recuperacao"
            >
              <h2 id="sec-recuperacao" className={h2Class}>
                {page.recoveryH2}
              </h2>
              <div className="space-y-10">
                <div className="space-y-3">
                  <h3 className={h3LabelClass}>Tempo de recuperação</h3>
                  <p className={bodyClass}>{page.recoveryTime}</p>
                </div>
                <div className="space-y-3">
                  <h3 className={h3LabelClass}>Dor e inchaço</h3>
                  <p className={bodyClass}>{page.painAndSwelling}</p>
                </div>
                <div className="space-y-3">
                  <h3 className={h3LabelClass}>Cuidados</h3>
                  <p className={bodyClass}>{page.postOpCare}</p>
                </div>
                <div className="space-y-3">
                  <h3 className={h3LabelClass}>Retorno às atividades</h3>
                  <p className={bodyClass}>{page.returnToActivities}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6 border-t border-border pt-14 md:pt-16" aria-labelledby="sec-resultados">
              <h2 id="sec-resultados" className={h2Class}>
                {page.resultsH2}
              </h2>
              <ul className="list-disc space-y-4 pl-6 marker:text-primary" role="list">
                {page.expectedResults.map((line) => (
                  <li key={line} className={bodyClass}>
                    {line}
                  </li>
                ))}
              </ul>
              <p className={`rounded-xl border border-border bg-muted/50 px-5 py-4 ${bodyClass}`}>
                <span className="font-semibold text-foreground">Tempo para resultado final: </span>
                {page.timeToFinalResult}
              </p>
              {page.beforeAfterNote ? (
                <p className={bodyClass}>
                  <span className="font-semibold text-foreground">Antes e depois: </span>
                  {page.beforeAfterNote}
                </p>
              ) : null}
            </section>

            <section
              className="space-y-6 border-t border-border pt-14 md:space-y-8 md:pt-16"
              aria-labelledby="sec-faq"
            >
              <h2 id="sec-faq" className={h2Class}>
                {page.faqH2}
              </h2>
              <TreatmentFaqAccordion items={page.faqItems} />
            </section>
          </TreatmentStaggerArticle>

          <RevealOnView
            rootMargin="0px"
            threshold={0.3}
            className="mx-auto mt-16 flex max-w-2xl flex-col gap-3 border-t border-border pt-12 sm:flex-row sm:items-center md:mt-20 md:pt-14"
          >
            <Button asChild size="lg">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar avaliação
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/tratamentos">Ver todos os tratamentos</Link>
            </Button>
          </RevealOnView>
        </div>
      </Section>
    </>
  )
}
