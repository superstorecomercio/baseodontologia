"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { clinicData, heroData } from "@/lib/data"

export function WhatsAppButton() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [bubbleVisible, setBubbleVisible] = useState(false)

  useEffect(() => {
    if (!isHome) {
      setBubbleVisible(false)
      return
    }
    const timer = setTimeout(() => setBubbleVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [isHome])

  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`

  /** Home: balão flutuante. Outras páginas: faixa fixa no rodapé (mobile), igual /contato. */
  if (isHome) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-lg transition-all duration-300 motion-safe:hover:scale-105 motion-safe:hover:shadow-xl",
          bubbleVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        )}
        aria-label="Como posso ajudá-la ou ajudá-lo? Abrir conversa no WhatsApp"
      >
        <MessageCircle className="h-6 w-6 shrink-0 fill-current" />
        <span className="hidden max-w-[min(17rem,calc(100vw-7rem))] text-balance text-left text-sm font-medium leading-snug sm:inline">
          Como posso ajudá-la (o)?
        </span>
      </a>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 p-4 backdrop-blur-md md:hidden">
      <div className="page-container">
        <Button className="w-full bg-green-500 hover:bg-green-600" size="lg" asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            {heroData.ctaPrimary}
          </a>
        </Button>
      </div>
    </div>
  )
}
