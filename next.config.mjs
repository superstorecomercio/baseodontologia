import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/tratamentos/dentistica",
        destination: "/tratamentos",
        permanent: true,
      },
      {
        source: "/tratamentos/harmonizacao",
        destination: "/tratamentos",
        permanent: true,
      },
      {
        source: "/tratamentos/limpeza",
        destination: "/tratamentos",
        permanent: true,
      },
      {
        source: "/tratamentos/avaliacao",
        destination: "/tratamentos",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },
  /**
   * Raiz explícita do Turbopack (Next 16+), evita erro ao inferir workspace
   * quando o diretório de trabalho não é a pasta do `package.json`.
   * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
   */
  turbopack: {
    root: __dirname,
  },
  images: {
    /** WebP/AVIF + redimensionamento (crítico para LCP no PageSpeed). Requer `sharp` em produção. */
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    /** Next 16 exige listar qualidades usadas em `<Image quality={...}>` */
    qualities: [75, 80, 85, 100],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-slot",
      "@radix-ui/react-accordion",
    ],
    /**
     * Inline de CSS no HTML (produção): remove `<link rel="stylesheet">` bloqueantes
     * no primeiro paint — alivia FCP/LCP no PageSpeed (Tailwind ~25 KiB é um bom alvo).
     * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss
     */
    inlineCss: true,
  },
}

export default nextConfig
