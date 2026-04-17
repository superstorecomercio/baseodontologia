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
import { clinicData, faqData } from "@/lib/data"
import { formatAddressStreet, phoneDigits } from "@/lib/utils"
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Base Odontologia na Vila Clementino, São Paulo. Telefones (11) 2985-2965 e (11) 95959-3508, WhatsApp e formulário.",
}

export default function ContatoPage() {
  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${clinicData.address.street}, ${clinicData.address.neighborhood}, ${clinicData.address.city}`
  )}`

  return (
    <>
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
              {/** Mobile: panorâmica com recorte na equipa. Desktop: foto vertical original (menos corte). */}
              <div className="relative w-full max-md:aspect-[21/10] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 md:hidden">
                <Image
                  src="/images/equipe-fachada-wide.png"
                  alt={`Equipe da ${clinicData.clinicName} em frente à clínica`}
                  fill
                  sizes="100vw"
                  className="object-cover object-[center_46%] scale-[1.12]"
                  priority
                />
              </div>
              <div className="relative hidden aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 md:block">
                <Image
                  src="/images/equipe-contato-fachada.png"
                  alt={`Equipe da ${clinicData.clinicName} em frente à clínica`}
                  fill
                  sizes="(min-width: 768px) 22rem, 100vw"
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
              <div className="flex w-full flex-col gap-2">
                <Button className="w-full" variant="outline" asChild>
                  <a href={`tel:${phoneDigits(clinicData.phone)}`}>
                    {clinicData.phone}
                  </a>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <a href={`tel:${phoneDigits(clinicData.phoneMobile)}`}>
                    {clinicData.phoneMobile}
                  </a>
                </Button>
              </div>
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
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="(11) 2985-2965"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="agendamento">Agendar Consulta</option>
                  <option value="orcamento">Solicitar Orçamento</option>
                  <option value="duvida">Tirar Dúvidas</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
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
                    <br />
                    {clinicData.hours.saturday}
                    <br />
                    {clinicData.hours.sunday}
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
                    Telefones:{" "}
                    <a
                      href={`tel:${phoneDigits(clinicData.phone)}`}
                      className="text-primary hover:underline"
                    >
                      {clinicData.phone}
                    </a>
                    {" · "}
                    <a
                      href={`tel:${phoneDigits(clinicData.phoneMobile)}`}
                      className="text-primary hover:underline"
                    >
                      {clinicData.phoneMobile}
                    </a>
                    <br />
                    E-mail:{" "}
                    <a
                      href={`mailto:${clinicData.email}`}
                      className="text-primary hover:underline"
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

      {/* FAQ */}
      <Section variant="muted">
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
