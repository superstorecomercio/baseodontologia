import Link from "next/link"
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"
import { clinicData } from "@/lib/data"
import { cn, formatAddressStreet, phoneDigits } from "@/lib/utils"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(className)}
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Tratamentos", href: "/tratamentos" },
  { name: "Dicas de Saúde Bucal", href: "/blog" },
  { name: "Redes Sociais", href: "/redes-sociais" },
  { name: "Contato", href: "/contato" },
] as const

const socialLinks = [
  {
    href: clinicData.social.instagram,
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: clinicData.social.facebook,
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: clinicData.social.tiktok,
    label: "TikTok",
    Icon: TikTokIcon,
  },
  {
    href: clinicData.social.youtube,
    label: "YouTube",
    Icon: Youtube,
  },
] as const

export function Footer() {
  const year = new Date().getFullYear()
  const addressLine = `${formatAddressStreet(clinicData.address)} — ${clinicData.address.neighborhood}, ${clinicData.address.city}/${clinicData.address.state}`

  return (
    <footer className="border-t border-border/70 bg-muted/25">
      <div className="page-container py-10 md:py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          {/* Marca */}
          <div className="max-w-md shrink-0 space-y-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {clinicData.clinicName}
              </p>
              <p className="mt-2 font-serif text-xl font-semibold tracking-tight text-foreground">
                {clinicData.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {clinicData.specialty}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Excelência em reabilitação oral, prótese e implantes — São Paulo.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon-premium inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:border-primary/35 hover:text-primary"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação + contato em linha no desktop */}
          <div className="flex flex-1 flex-col gap-8 sm:flex-row sm:gap-12 lg:justify-end lg:gap-16">
            <nav className="shrink-0" aria-label="Mapa do site">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Site
              </p>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="max-w-xs shrink-0 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Contato
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>{addressLine}</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a
                  href={`tel:${phoneDigits(clinicData.phone)}`}
                  className="text-foreground/85 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {clinicData.phone}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <a
                  href={`mailto:${clinicData.email}`}
                  className="break-all text-foreground/85 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {clinicData.email}
                </a>
              </p>
              <p className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>
                  {clinicData.hours.weekdays}
                  <br />
                  {clinicData.hours.saturday}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span>
            © {year} {clinicData.clinicName}. Todos os direitos reservados.
          </span>
          <span>
            Desenvolvido por{" "}
            <a
              href="https://siteparamedico.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Site para Médico
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
