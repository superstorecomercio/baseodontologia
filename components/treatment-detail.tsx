import Image from "next/image"
import Link from "next/link"
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

const proseArticle =
  "prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-headings:text-foreground prose-h2:mt-12 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground"

export function TreatmentDetail({ treatment }: TreatmentDetailProps) {
  const { page } = treatment
  const whatsappHref = buildWhatsAppHref(treatment.title)

  return (
    <>
      <section className="bg-muted pb-8 pt-28 md:pb-10 md:pt-32">
        <div className="page-container">
          <nav className="mb-8 flex max-w-3xl flex-wrap items-center gap-1 text-sm text-muted-foreground">
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
        </div>
      </section>

      <Section className="pt-0 md:pt-0">
        <article className={`mx-auto max-w-3xl ${proseArticle}`}>
          {/* 1 — H1 + o que é */}
          <h1 className="text-balance">{page.h1WhatIs}</h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {page.whatIsParagraph}
          </p>

          <figure className="not-prose my-10 overflow-hidden rounded-2xl bg-muted shadow-lg ring-1 ring-black/5">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={treatment.image}
                alt={`${treatment.title} — imagem ilustrativa do tratamento na ${clinicData.clinicName}`}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover"
                priority
              />
            </div>
          </figure>

          {/* 2 — Para quem é indicado */}
          <h2>{page.whoCanH2}</h2>
          <h3>Indicações</h3>
          <ul className="list-none space-y-2 pl-0">
            {page.indications.map((line) => (
              <li key={line} className="flex gap-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <h3>Contraindicações</h3>
          <ul className="list-none space-y-2 pl-0">
            {page.contraindications.map((line) => (
              <li key={line} className="flex gap-3">
                <XCircle className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {/* 3 — Como funciona */}
          <h2>{page.howItWorksH2}</h2>
          <h3>Etapas</h3>
          <ol>
            {page.procedureSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p>
            <strong>Tempo médio</strong>: {page.procedureDurationDetail}
          </p>
          {page.technologies.length > 0 ? (
            <>
              <h3>Tecnologias e materiais</h3>
              <ul>
                {page.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </>
          ) : null}

          {/* 4 — Benefícios */}
          <h2>{page.benefitsH2}</h2>
          <ul className="list-none space-y-2 pl-0">
            {treatment.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  aria-hidden
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {/* 5 — Recuperação */}
          <h2>{page.recoveryH2}</h2>
          <h3>Tempo de recuperação</h3>
          <p>{page.recoveryTime}</p>
          <h3>Dor e inchaço</h3>
          <p>{page.painAndSwelling}</p>
          <h3>Cuidados</h3>
          <p>{page.postOpCare}</p>
          <h3>Retorno às atividades</h3>
          <p>{page.returnToActivities}</p>

          {/* 6 — Resultados */}
          <h2>{page.resultsH2}</h2>
          <ul>
            {page.expectedResults.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p>
            <strong>Tempo para resultado final</strong>: {page.timeToFinalResult}
          </p>
          {page.beforeAfterNote ? (
            <p>
              <strong>Antes e depois</strong>: {page.beforeAfterNote}
            </p>
          ) : null}

          {/* 7 — FAQ */}
          <h2>{page.faqH2}</h2>
          <TreatmentFaqAccordion items={page.faqItems} />
        </article>

        <div className="not-prose mx-auto mt-14 flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar avaliação
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/tratamentos">Ver todos os tratamentos</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}
