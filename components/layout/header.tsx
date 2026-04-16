"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { clinicData, treatments } from "@/lib/data"

/** Dimensões nativas do PNG em `public/images/logo-base-odontologia.png` (evita blur por upscale/downscale). */
const LOGO_WIDTH = 141
const LOGO_HEIGHT = 76

const simpleNav = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Blog", href: "/blog" },
  { name: "Redes Sociais", href: "/redes-sociais" },
  { name: "Contato", href: "/contato" },
] as const

function isTratamentosSection(path: string): boolean {
  return path === "/tratamentos" || path.startsWith("/tratamentos/")
}

const navLinkClass =
  "rounded-lg px-4 py-2 text-sm font-medium tracking-wide transition-colors"

function navLinkActive(pathname: string, href: string): string {
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`)
  return cn(
    navLinkClass,
    active
      ? "bg-primary/10 text-primary"
      : "text-muted-foreground hover:bg-accent hover:text-foreground"
  )
}

interface HeaderMobileNavProps {
  pathname: string
}

/**
 * Estado do drawer remonta com `key={pathname}` no pai (fecha ao navegar)
 * sem setState em effect. O drawer usa `basis-full` + `flex-wrap` no header.
 */
function HeaderMobileNav({ pathname }: HeaderMobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false)

  return (
    <>
      <button
        className="-mr-2 p-2 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>

      <div
        className={cn(
          "w-full basis-full overflow-y-auto transition-all duration-300 lg:hidden",
          isOpen ? "max-h-[min(85vh,32rem)] pb-6" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-1 border-t border-border pt-4">
          {simpleNav.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}

          <div className="rounded-lg">
            <button
              type="button"
              onClick={() => setMobileTreatmentsOpen((v) => !v)}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium transition-colors",
                isTratamentosSection(pathname)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
              aria-expanded={mobileTreatmentsOpen}
            >
              Tratamentos
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform",
                  mobileTreatmentsOpen && "rotate-180"
                )}
                aria-hidden
              />
            </button>
            {mobileTreatmentsOpen ? (
              <div className="ml-4 space-y-0.5 border-l border-border py-1 pl-3">
                <Link
                  href="/tratamentos"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  Ver todos
                </Link>
                {treatments.map((t) => (
                  <Link
                    key={t.id}
                    href={`/tratamentos/${t.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    {t.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {simpleNav.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-4 border-t border-border pt-4">
            <Button asChild className="w-full">
              <a
                href={`https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-card/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="page-container">
        <div className="flex min-h-[4.5rem] flex-wrap items-center justify-between gap-4 py-2 lg:min-h-20 lg:flex-nowrap">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo-base-odontologia.png"
              alt={`${clinicData.clinicName}, odontologia inteligente — ir para o início`}
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              className="block h-[76px] w-[141px] max-w-none"
              sizes={`${LOGO_WIDTH}px`}
              quality={85}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {simpleNav.slice(0, 2).map((item) => (
              <Link key={item.href} href={item.href} className={navLinkActive(pathname, item.href)}>
                {item.name}
              </Link>
            ))}

            <div className="group/tratamentos relative">
              <Link
                href="/tratamentos"
                className={cn(
                  "inline-flex items-center gap-1 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  navLinkClass,
                  isTratamentosSection(pathname)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                Tratamentos
                <ChevronDown
                  className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover/tratamentos:rotate-180 group-focus-within/tratamentos:rotate-180"
                  aria-hidden
                />
              </Link>
              <div
                className={cn(
                  "absolute left-0 top-full z-50 pt-2",
                  "pointer-events-none opacity-0 transition-opacity duration-150",
                  "group-hover/tratamentos:pointer-events-auto group-hover/tratamentos:opacity-100",
                  "group-focus-within/tratamentos:pointer-events-auto group-focus-within/tratamentos:opacity-100"
                )}
                role="presentation"
              >
                <div className="min-w-[15rem] rounded-md border border-border bg-popover py-1 text-popover-foreground shadow-md">
                  <Link
                    href="/tratamentos"
                    className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    Todos os tratamentos
                  </Link>
                  <div className="my-1 h-px bg-border" role="separator" />
                  <ul className="max-h-[min(70vh,22rem)] overflow-y-auto py-0.5">
                    {treatments.map((t) => (
                      <li key={t.id}>
                        <Link
                          href={`/tratamentos/${t.id}`}
                          className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {t.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {simpleNav.slice(2).map((item) => (
              <Link key={item.href} href={item.href} className={navLinkActive(pathname, item.href)}>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild size="sm">
              <a
                href={`https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </Button>
          </div>

          <HeaderMobileNav key={pathname} pathname={pathname} />
        </div>
      </nav>
    </header>
  )
}
