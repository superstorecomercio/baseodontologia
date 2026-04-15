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
}

export function TreatmentCard({
  id,
  title,
  shortDescription,
  image,
  imageAlt,
  href,
}: TreatmentCardProps) {
  const alt = imageAlt ?? `${title} — tratamento odontológico na Base Odontologia`

  return (
    <Card className="group h-full overflow-hidden border-0 p-0 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={alt}
          width={640}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <CardContent className="flex flex-col py-6 md:py-8">
        <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
          {shortDescription}
        </p>
        <Button
          variant="ghost"
          className="h-auto justify-start p-0 text-primary hover:bg-transparent hover:text-primary/80"
          asChild
        >
          <Link href={href || `/tratamentos#${id}`}>
            Saiba mais
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
