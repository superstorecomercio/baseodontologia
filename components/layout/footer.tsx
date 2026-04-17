import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"
import { clinicData } from "@/lib/data"
import { formatAddressStreet, phoneDigits } from "@/lib/utils"

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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:border-primary/35 hover:text-primary"
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
              <p>{addressLine}</p>
              <p>
                <a
                  href={`tel:${phoneDigits(clinicData.phone)}`}
                  className="text-foreground/85 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {clinicData.phone}
                </a>
                <span className="mx-1.5 text-muted-foreground/35">·</span>
                <a
                  href={`tel:${phoneDigits(clinicData.phoneMobile)}`}
                  className="text-foreground/85 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {clinicData.phoneMobile}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${clinicData.email}`}
                  className="text-foreground/85 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {clinicData.email}
                </a>
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {clinicData.hours.weekdays}
                <br />
                {clinicData.hours.saturday}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-7 text-xs text-muted-foreground">
          <span>
            © {year} {clinicData.clinicName}. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}
