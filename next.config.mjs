import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Raiz explícita do Turbopack (Next 16+), evita erro ao inferir workspace
   * quando o diretório de trabalho não é a pasta do `package.json`.
   * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
   */
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
    /** Next 16 exige listar qualidades usadas em `<Image quality={...}>` */
    qualities: [75, 100],
  },
}

export default nextConfig
