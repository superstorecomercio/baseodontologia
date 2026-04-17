import type { Metadata } from "next"
import { PageHero } from "@/components/motion/page-hero"
import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { clinicData } from "@/lib/data"
import { Instagram, Facebook, Youtube, MessageCircle, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Redes Sociais",
  description:
    "Siga a Base Odontologia nas redes sociais. Dicas de saúde bucal, antes e depois de tratamentos e conteúdo exclusivo.",
}

const socialNetworks = [
  {
    name: "Instagram",
    description: "Acompanhe transformações de sorrisos, dicas de saúde bucal e bastidores da clínica.",
    icon: Instagram,
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    url: clinicData.social.instagram,
    followers: "12.5K",
    handle: clinicData.instagramHandle,
  },
  {
    name: "Facebook",
    description: "Conteúdo exclusivo, eventos e novidades sobre tratamentos odontológicos.",
    icon: Facebook,
    color: "bg-blue-600",
    url: clinicData.social.facebook,
    followers: "8.2K",
    handle: "/baseodontologia",
  },
  {
    name: "TikTok",
    description: "Vídeos curtos e divertidos sobre odontologia e cuidados com o sorriso.",
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    color: "bg-black",
    url: clinicData.social.tiktok,
    followers: "5.8K",
    handle: "@baseodontologia",
  },
  {
    name: "YouTube",
    description: "Vídeos educativos, depoimentos de pacientes e procedimentos explicados.",
    icon: Youtube,
    color: "bg-red-600",
    url: clinicData.social.youtube,
    followers: "3.2K",
    handle: "@baseodontologia",
  },
  {
    name: "WhatsApp",
    description: "Atendimento rápido e personalizado. Tire suas dúvidas e agende consultas.",
    icon: MessageCircle,
    color: "bg-green-500",
    url: `https://wa.me/${clinicData.whatsapp}`,
    followers: null,
    handle: clinicData.phoneMobile,
  },
]

export default function RedesSociaisPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero className="bg-muted pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="page-container">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Redes Sociais
            </p>
            <h1 className="mb-7 font-serif text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl md:leading-[1.08]">
              Conecte-se conosco nas redes sociais
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Siga nossas redes para acompanhar transformações incríveis, dicas
              de saúde bucal, novidades sobre tratamentos e muito mais conteúdo
              exclusivo.
            </p>
          </div>
        </div>
      </PageHero>

      {/* Social Networks Cards */}
      <Section>
        <SectionHeader
          subtitle="Nossas Redes"
          title="Escolha sua plataforma favorita"
          description="Estamos presentes nas principais redes sociais para você acompanhar nosso conteúdo onde preferir."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialNetworks.map((network) => {
            const Icon = network.icon
            return (
              <Card
                key={network.name}
                className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`h-14 w-14 rounded-2xl ${network.color} flex items-center justify-center text-white flex-shrink-0`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {network.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {network.handle}
                      </p>
                      {network.followers && (
                        <p className="text-sm text-primary font-medium">
                          {network.followers} seguidores
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {network.description}
                  </p>

                  <Button className="w-full" variant="outline" asChild>
                    <a
                      href={network.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {network.name === "WhatsApp" ? "Enviar Mensagem" : "Seguir"}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>
    </>
  )
}
