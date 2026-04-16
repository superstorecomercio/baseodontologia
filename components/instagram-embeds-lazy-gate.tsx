"use client"

import dynamic from "next/dynamic"

function InstagramEmbedSkeleton() {
  return (
    <div
      className="mx-auto flex min-h-[min(70vh,28rem)] w-full max-w-6xl flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-muted/15 px-4 py-16 text-center text-sm text-muted-foreground"
      aria-hidden
    >
      A carregar publicações…
    </div>
  )
}

const InstagramOfficialEmbedsLazy = dynamic(
  () =>
    import("@/components/instagram-official-embeds").then((m) => ({
      default: m.InstagramOfficialEmbeds,
    })),
  {
    ssr: false,
    loading: () => <InstagramEmbedSkeleton />,
  }
)

interface InstagramEmbedsLazyGateProps {
  urls: readonly string[]
}

/** Carrega o widget do Instagram só no cliente — menos JS e rede no primeiro paint (mobile). */
export function InstagramEmbedsLazyGate({ urls }: InstagramEmbedsLazyGateProps) {
  return <InstagramOfficialEmbedsLazy urls={urls} />
}
