import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/motion/page-hero"
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ContactForm } from "@/components/contact/contact-form"
import { ContatoEnvioToast } from "@/components/contact/contato-envio-toast"
import { clinicData, faqData } from "@/lib/data"
import { formatAddressStreet, phoneDigits } from "@/lib/utils"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  ClipboardList,
  ShieldCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Base Odontologia na Vila Clementino, São Paulo. Telefone, WhatsApp, formulário e como funciona a consulta de avaliação.",
}

export default function ContatoPage() {
  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${clinicData.address.street}, ${clinicData.address.neighborhood}, ${clinicData.address.city}`
  )}`

  return (
    <>
      <ContatoEnvioToast />
      {/* Hero Section */}
      <PageHero className="bg-muted pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="page-container">
          {/**
           * Coluna da foto com largura fixa em `md+` evita largura 0 (grelha `auto` + filho `w-full`).
           * Mobile: foto primeiro (`order-1`), largura total do contentor.
           */}
          <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_min(20rem,42%)] md:gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
            <div className="order-2 min-w-0 max-w-2xl md:order-1">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary md:mb-3">
                Contato
              </p>
              <h1 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-balance text-foreground md:mb-6 md:text-4xl md:leading-[1.1] lg:text-[2.5rem]">
                Estamos prontos para atender você
              </h1>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
                {clinicData.locationParagraphs[0]}
              </p>
            </div>

            <div className="order-1 w-full min-w-0 md:order-2">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
                <Image
                  src="/images/equipe-contato-fachada.png"
                  alt={`Equipe da ${clinicData.clinicName} em frente à clínica`}
                  fill
                  sizes="(max-width: 767px) 100vw, 22rem"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Contact Options */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* WhatsApp */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="h-14 w-14 rounded-2xl bg-green-500 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Atendimento rápido e personalizado
              </p>
              <Button className="w-full bg-green-500 hover:bg-green-600" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Enviar Mensagem
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ligue para agendar ou tirar dúvidas
              </p>
              <Button className="w-full" variant="outline" asChild>
                <a href={`tel:${phoneDigits(clinicData.phone)}`}>
                  {clinicData.phone}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Envie sua mensagem por e-mail
              </p>
              <Button className="w-full" variant="outline" asChild>
                <a href={`mailto:${clinicData.email}`}>Enviar E-mail</a>
              </Button>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Navigation className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Como Chegar</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Veja o trajeto no Google Maps
              </p>
              <Button className="w-full" variant="outline" asChild>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Ver no Mapa
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Envie uma mensagem
            </h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Informações da Clínica
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Endereço</p>
                  <p className="text-muted-foreground">
                    {formatAddressStreet(clinicData.address)}
                    <br />
                    {clinicData.address.neighborhood} - {clinicData.address.city}/
                    {clinicData.address.state}
                    {clinicData.address.zip ? (
                      <>
                        <br />
                        CEP: {clinicData.address.zip}
                      </>
                    ) : null}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">
                    Horário de Atendimento
                  </p>
                  <p className="text-muted-foreground">
                    {clinicData.hours.weekdays}
                    {clinicData.hours.saturday ? (
                      <>
                        <br />
                        {clinicData.hours.saturday}
                      </>
                    ) : null}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Contato</p>
                  <p className="text-muted-foreground">
                    Telefone:{" "}
                    <a
                      href={`tel:${phoneDigits(clinicData.phone)}`}
                      className="text-primary hover:underline"
                    >
                      {clinicData.phone}
                    </a>
                    <br />
                    E-mail:{" "}
                    <a
                      href={`mailto:${clinicData.email}`}
                      className="text-primary hover:underline break-all"
                    >
                      {clinicData.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={clinicData.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Localização — ${clinicData.clinicName}`}
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Como funciona a avaliação */}
      <Section variant="muted">
        <SectionHeader
          subtitle="Como funciona"
          title="Sua consulta de avaliação na Base"
          description="Uma avaliação completa, com diagnóstico realizado pelo Dr. Danilo e exames já inclusos no atendimento."
        />

        <div className="grid items-start gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Avaliação e diagnóstico — R$ 410,00
                </h3>
              </div>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                A consulta para avaliação e diagnóstico é realizada com o{" "}
                <span className="text-foreground font-medium">Dr. Danilo</span>,
                gestor clínico e especialista em reabilitação oral. Já estão
                inclusos todos os exames diagnósticos necessários realizados em
                consultório:
              </p>
              <ul className="mb-5 space-y-2.5">
                {[
                  "Exame clínico detalhado",
                  "Videomicroscopia digital",
                  "Escaneamento intraoral",
                  "Radiografias interproximais quando necessárias",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Com base nesses exames, o Dr. Danilo avalia suas necessidades
                com mais precisão e elabora o{" "}
                <span className="text-foreground font-medium">
                  planejamento personalizado
                </span>{" "}
                do seu tratamento, indicando as especialidades adequadas a cada
                caso.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Convênios e reembolso
                </h3>
              </div>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Não atendemos por convênios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Realizamos a emissão de{" "}
                <span className="text-foreground font-medium">
                  nota fiscal e relatório clínico
                </span>{" "}
                para que você solicite o reembolso junto ao seu convênio,
                conforme as condições de cada plano.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader
          subtitle="Dúvidas Frequentes"
          title="Perguntas sobre agendamento"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.slice(0, 4).map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </>
  )
}
