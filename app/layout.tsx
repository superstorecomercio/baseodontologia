import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Dr. Danilo Sorgini | Base Odontologia — São Paulo",
    template: "%s | Base Odontologia",
  },
  description:
    "Base Odontologia em São Paulo: gestão clínica do Dr. Danilo Sorgini (FORP/USP), prótese dentária, implantodontia e reabilitação oral com rigor científico. Agende sua avaliação.",
  keywords: [
    "Dr. Danilo Sorgini",
    "Base Odontologia",
    "dentista São Paulo",
    "prótese dentária",
    "reabilitação oral",
    "implantes dentários",
    "FORP USP",
    "odontologia estética",
    "implantodontia",
  ],
  authors: [{ name: "Dr. Danilo Sorgini" }],
  creator: "Base Odontologia",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://baseodontologia.com.br",
    siteName: "Base Odontologia — Dr. Danilo Sorgini",
    title: "Dr. Danilo Sorgini | Base Odontologia",
    description:
      "Reabilitação oral, prótese e implantes com excelência acadêmica e clínica. Conheça a Base Odontologia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Danilo Sorgini | Base Odontologia",
    description:
      "Reabilitação oral, prótese dentária e implantodontia com excelência.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#35596a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans text-base font-normal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
