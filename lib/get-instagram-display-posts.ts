import { cache } from "react"
import {
  clinicData,
  instagramCuratedPosts,
  instagramOfficialEmbedUrls,
} from "@/lib/data"
import { filterInstagramEmbedPermalinks } from "@/lib/instagram-embed-urls"

const MAX_POSTS = 6
const MAX_EMBEDS = 6

export const DEMO_GRADIENTS = [
  "from-violet-600/85 to-fuchsia-600/75",
  "from-pink-500/85 to-orange-400/75",
  "from-sky-600/80 to-indigo-600/75",
  "from-emerald-600/80 to-teal-600/75",
  "from-amber-500/85 to-rose-500/75",
  "from-purple-600/85 to-blue-600/75",
] as const

export interface InstagramGridPost {
  id: string
  permalink: string
  caption?: string
  imageUrl?: string
}

interface GraphMediaNode {
  id?: string
  caption?: string
  media_type?: string
  media_url?: string
  permalink?: string
  thumbnail_url?: string
}

function mapGraphMediaToPost(node: GraphMediaNode): InstagramGridPost | null {
  const id = node.id
  const permalink = node.permalink
  if (!id || !permalink) return null
  const mediaType = node.media_type ?? "IMAGE"
  const imageUrl = (
    mediaType === "VIDEO"
      ? (node.thumbnail_url ?? node.media_url)
      : (node.media_url ?? node.thumbnail_url)
  )
    ?.trim()
  if (!imageUrl) return null
  const caption =
    typeof node.caption === "string" ? node.caption.trim().slice(0, 140) : undefined
  return { id, permalink, imageUrl, caption }
}

async function fetchLatestFromInstagramGraph(): Promise<InstagramGridPost[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim()
  const userId = process.env.INSTAGRAM_USER_ID?.trim()
  if (!token || !userId) return null

  try {
    const url = new URL(
      `https://graph.facebook.com/v21.0/${encodeURIComponent(userId)}/media`
    )
    url.searchParams.set(
      "fields",
      "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp"
    )
    url.searchParams.set("access_token", token)
    url.searchParams.set("limit", String(MAX_POSTS))

    const res = await fetch(url.toString(), {
      next: { revalidate: 1800 },
    })

    if (!res.ok) return null

    const json = (await res.json()) as {
      data?: GraphMediaNode[]
      error?: { message?: string }
    }
    if (json.error || !Array.isArray(json.data)) return null

    const posts = json.data
      .map(mapGraphMediaToPost)
      .filter((p): p is InstagramGridPost => p !== null)
    return posts.length > 0 ? posts.slice(0, MAX_POSTS) : null
  } catch {
    return null
  }
}

export type InstagramDisplayView = "grid" | "embed"

export type InstagramDisplaySource =
  | "api"
  | "embed"
  | "curated"
  | "demo"

export type InstagramDisplayResult =
  | {
      view: "grid"
      source: "api" | "curated" | "demo"
      posts: InstagramGridPost[]
      demoGradients: readonly string[]
    }
  | {
      view: "embed"
      source: "embed"
      urls: string[]
    }

/**
 * Ordem de prioridade:
 * 1. **API** — `INSTAGRAM_ACCESS_TOKEN` + `INSTAGRAM_USER_ID` → últimos posts automaticamente ([Instagram Graph API](https://developers.facebook.com/docs/instagram-api/)).
 * 2. **Embeds manuais** — `instagramOfficialEmbedUrls` em `data.ts`.
 * 3. **Grade manual** — `instagramCuratedPosts`.
 * 4. **Demo** — layout de prévia.
 */
export const getInstagramDisplayPosts = cache(async (): Promise<InstagramDisplayResult> => {
  const fromApi = await fetchLatestFromInstagramGraph()
  if (fromApi && fromApi.length > 0) {
    return {
      view: "grid",
      source: "api",
      posts: fromApi,
      demoGradients: DEMO_GRADIENTS,
    }
  }

  const embedUrls = filterInstagramEmbedPermalinks(instagramOfficialEmbedUrls).slice(
    0,
    MAX_EMBEDS
  )
  if (embedUrls.length > 0) {
    return { view: "embed", source: "embed", urls: embedUrls }
  }

  const curated: InstagramGridPost[] = instagramCuratedPosts
    .filter((p) => p.imageSrc && p.href)
    .map((p, i) => ({
      id: `curated-${i}`,
      imageUrl: p.imageSrc,
      permalink: p.href,
      caption: p.alt,
    }))

  if (curated.length > 0) {
    return {
      view: "grid",
      source: "curated",
      posts: curated,
      demoGradients: DEMO_GRADIENTS,
    }
  }

  const profile = clinicData.social.instagram
  const demo: InstagramGridPost[] = Array.from({ length: 6 }, (_, i) => ({
    id: `demo-${i}`,
    permalink: profile,
    caption: "Prévia do layout",
  }))

  return {
    view: "grid",
    source: "demo",
    posts: demo,
    demoGradients: DEMO_GRADIENTS,
  }
})
