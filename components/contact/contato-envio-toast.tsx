"use client"

import { Suspense, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"

function ContatoEnvioToastInner() {
  const searchParams = useSearchParams()
  const hasShown = useRef(false)

  useEffect(() => {
    if (hasShown.current) return
    if (searchParams.get("enviado") !== "1") return

    hasShown.current = true
    toast.success(
      "Mensagem enviada! Em breve nossa equipe entra em contato com você.",
    )

    const url = new URL(window.location.href)
    url.searchParams.delete("enviado")
    const next = `${url.pathname}${url.search}${url.hash}`
    window.history.replaceState(null, "", next)
  }, [searchParams])

  return null
}

export function ContatoEnvioToast() {
  return (
    <Suspense fallback={null}>
      <ContatoEnvioToastInner />
    </Suspense>
  )
}
