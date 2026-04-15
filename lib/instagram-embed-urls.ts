/** Permalinks aceitos no widget oficial (evita injetar URLs arbitrárias). */
export function filterInstagramEmbedPermalinks(urls: readonly string[]): string[] {
  return urls
    .map((s) => s.trim())
    .filter((url) => {
      if (!url) return false
      try {
        const u = new URL(url)
        const host = u.hostname.replace(/^www\./, "")
        if (host !== "instagram.com" && host !== "instagr.am") return false
        return /\/(p|reel|tv)\/[^/]+\/?/i.test(u.pathname)
      } catch {
        return false
      }
    })
}
