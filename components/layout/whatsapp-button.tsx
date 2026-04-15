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
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0"
      )}
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="hidden sm:inline font-medium">Agendar Consulta</span>
    </a>
  )
}
