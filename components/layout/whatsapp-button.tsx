"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { clinicData } from "@/lib/data"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-lg transition-all duration-300 motion-safe:hover:scale-105 motion-safe:hover:shadow-xl",
        isVisible
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
