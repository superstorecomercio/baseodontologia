"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { clinicData } from "@/lib/data"

/** Dimensões nativas do PNG em `public/images/logo-base-odontologia.png` (evita blur por upscale/downscale). */
const LOGO_WIDTH = 141
const LOGO_HEIGHT = 76

const navigation = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Tratamentos", href: "/tratamentos" },
  { name: "Blog", href: "/blog" },
  { name: "Redes Sociais", href: "/redes-sociais" },
  { name: "Contato", href: "/contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="page-container">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-4 py-2 lg:min-h-20">
          {/* Logo — 1:1 em pixels CSS com o arquivo (141×76) */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo-base-odontologia.png"
              alt={`${clinicData.clinicName}, odontologia inteligente — ir para o início`}
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              className="block h-[76px] w-[141px] max-w-none"
              sizes={`${LOGO_WIDTH}px`}
              quality={100}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 pt-4 border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
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
      </nav>
    </header>
  )
}
