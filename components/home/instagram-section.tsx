import { Section, SectionHeader } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { InstagramEmbedsLazyGate } from "@/components/instagram-embeds-lazy-gate"
import { getInstagramDisplayPosts } from "@/lib/get-instagram-display-posts"
import { clinicData } from "@/lib/data"
import { Instagram, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export async function InstagramSection() {
  const display = await getInstagramDisplayPosts()
  const profileUrl = clinicData.social.instagram
  const handle = clinicData.instagramHandle

  const isDemo = display.view === "grid" && display.source === "demo"
  const isApi = display.view === "grid" && display.source === "api"
  const isCurated = display.view === "grid" && display.source === "curated"
  const isEmbed = display.view === "embed"

  const posts = display.view === "grid" ? display.posts : []
  const demoGradients = display.view === "grid" ? display.demoGradients : []
  const embedUrls = display.view === "embed" ? display.urls : []

  return (
    <Section variant="muted" id="instagram">
      <SectionHeader
        subtitle="Instagram"
        title={handle}
        description={
          isApi
            ? "Últimas publicações sincronizadas automaticamente com a conta comercial (Instagram Graph API)."
            : isEmbed
              ? "Posts reais embutidos com o recurso oficial do Instagram. A lista de links fica na configuração central do site."
              : isDemo
                ? "Grade só para mostrar o layout: cada quadrado abre o perfil oficial. Com a API configurada, aqui entram os posts reais sozinhos."
                : "Destaques escolhidos para o site — os links levam às publicações no Instagram."
        }
        density="compact"
      />

      {isApi ? (
        <p className="mb-4 text-center text-xs text-muted-foreground md:text-left">
          Até {posts.length} posts recentes (cache ~30 min). Requer conta Instagram profissional e
          variáveis de ambiente no servidor.
        </p>
      ) : null}

      {isEmbed ? (
        <p className="mb-6 text-center text-xs text-muted-foreground md:text-left">
          Modo manual: quando publicarem algo novo, atualizem os links na configuração — ou
          configurem a API para puxar sozinho.
        </p>
      ) : null}

      {isDemo ? (
        <p className="mb-4 rounded-lg border border-dashed border-primary/25 bg-primary/5 px-3 py-2 text-center text-xs text-muted-foreground md:text-left">
          <span className="font-medium text-foreground">Sem API configurada:</span> esta grade é
          só demonstração. Com <code className="rounded bg-muted px-1 py-0.5 text-[11px]">
            INSTAGRAM_ACCESS_TOKEN
          </code>{" "}
          e{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-[11px]">INSTAGRAM_USER_ID</code> no
          servidor, os últimos posts aparecem aqui automaticamente.
        </p>
      ) : null}

      {isCurated ? (
        <p className="mb-4 text-center text-xs text-muted-foreground md:text-left">
          Modo manual com imagens da pasta pública. A API do Instagram, se ativa, substitui esta
          lista.
        </p>
      ) : null}

      {display.view === "embed" ? (
        <InstagramEmbedsLazyGate urls={embedUrls} />
      ) : (
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-sm transition hover:border-primary/30 hover:shadow-md"
            >
              {post.imageUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element -- CDN Instagram (API) ou /public */}
                  <img
                    src={post.imageUrl}
                    alt={
                      post.caption
                        ? post.caption.slice(0, 80)
                        : `Post do Instagram — ${handle}`
                    }
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-80 transition group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                    <Instagram className="h-6 w-6 shrink-0 text-white drop-shadow-sm" aria-hidden />
                    <ExternalLink
                      className="h-4 w-4 shrink-0 text-white/90 opacity-0 transition group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                </>
              ) : (
                <div
                  className={cn(
                    "relative flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-br p-4 text-center transition group-hover:brightness-110",
                    demoGradients[index % demoGradients.length],
                  )}
                >
                  <Instagram className="h-11 w-11 text-white drop-shadow-md" aria-hidden />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90">
                    Prévia
                  </span>
                  <ExternalLink
                    className="absolute right-3 top-3 h-4 w-4 text-white/85 opacity-70 transition group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
              )}
            </a>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center md:mt-10">
        <Button size="lg" asChild>
          <a href={profileUrl} target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
            Ver perfil no Instagram
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </Section>
  )
}
