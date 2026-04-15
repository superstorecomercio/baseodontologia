"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

interface InstagramOfficialEmbedsProps {
  /** URLs de post/reel (ex.: https://www.instagram.com/p/ABC/) */
  urls: readonly string[]
}

function runInstagramProcess() {
  window.instgrm?.Embeds?.process()
}

/**
 * Widget com os [embeds oficiais](https://www.instagram.com/developer/embedding/)
 * do Instagram: cada URL precisa ser de um post/reel público (copiar do navegador ou do «Incorporar»).
 */
export function InstagramOfficialEmbeds({ urls }: InstagramOfficialEmbedsProps) {
  useEffect(() => {
    runInstagramProcess()
  }, [urls])

  if (urls.length === 0) return null

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="flex flex-col items-stretch gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-8">
        {urls.map((url) => (
          <div
            key={url}
            className="instagram-embed-shell flex min-h-[480px] min-w-0 flex-1 justify-center md:min-w-[320px] md:max-w-[420px]"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "transparent",
                border: 0,
                borderRadius: "3px",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "280px",
                padding: 0,
                width: "calc(100% - 2px)",
              }}
            />
          </div>
        ))}
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={runInstagramProcess}
      />
    </div>
  )
}
