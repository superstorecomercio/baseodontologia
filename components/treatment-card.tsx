import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface TreatmentCardProps {
  id: string
  title: string
  shortDescription: string
  image: string
  imageAlt?: string
  href?: string
  /** Home: imagem e textos menores. */
  size?: "default" | "compact"
}

export function TreatmentCard({
  id,
  title,
  shortDescription,
  image,
  imageAlt,
  href,
  size = "default",
}: TreatmentCardProps) {
  const alt = imageAlt ?? `${title} — tratamento odontológico na Base Odontologia`
  const compact = size === "compact"

  return (
    <Card className="group premium-card-hover h-full overflow-hidden border-0 p-0 shadow-sm">
      <div
        className={
          compact
            ? "relative aspect-[5/3] w-full shrink-0 overflow-hidden bg-muted"
            : "relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted"
        }
      >
        <Image
          src={image}
          alt={alt}
          width={640}
          height={400}
          sizes={
            compact
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="img-zoom-hover h-full w-full object-cover"
        />
      </div>
      <CardContent
        className={
          compact
            ? "flex flex-col py-4 md:py-5"
            : "flex flex-col py-6 md:py-8"
        }
      >
        <h3
          className={
            compact
              ? "mb-2 text-base font-semibold leading-snug text-foreground md:text-[1.0625rem]"
              : "mb-3 text-xl font-semibold text-foreground"
          }
        >
          {title}
        </h3>
        <p
          className={
            compact
              ? "mb-4 flex-1 text-pretty text-xs leading-snug text-muted-foreground md:text-[13px] md:leading-snug"
              : "mb-6 flex-1 leading-relaxed text-muted-foreground"
          }
        >
          {shortDescription}
        </p>
        <Button
          variant="ghost"
          className="h-auto justify-start p-0 text-primary hover:bg-transparent hover:text-primary/80"
          asChild
        >
          <Link href={href || `/tratamentos/${id}`}>
            Saiba mais
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
