import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { aboutData, clinicData } from "@/lib/data"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function AboutSection() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Content */}
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            {aboutData.eyebrow}
          </p>
          <h2 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-balance text-foreground md:mb-6 md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            Cuidado especializado com um toque de humanidade
          </h2>
          <p className="mb-6 text-pretty text-base leading-relaxed text-muted-foreground md:mb-7 md:text-lg">
            {aboutData.shortBio}
          </p>

          <ul className="mb-10 space-y-4">
            {aboutData.credentials.slice(0, 4).map((credential) => (
              <li key={credential} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{credential}</span>
              </li>
            ))}
          </ul>

          <Button asChild>
            <Link href="/sobre">
              Conheça nossa história
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[17.5rem] pb-12 sm:max-w-[19rem] sm:pb-14 md:max-w-[20rem] lg:max-w-[22rem]">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/dentist-hero.png"
                alt={clinicData.name}
                fill
                sizes="(max-width: 1024px) 320px, 352px"
                className="object-cover object-center"
                loading="lazy"
                fetchPriority="low"
              />
            </div>
            {/* Credential card — ancorado à foto */}
            <div className="absolute -bottom-5 left-2 right-2 rounded-2xl border border-border bg-card/95 p-3.5 shadow-lg backdrop-blur-sm sm:-bottom-6 sm:left-4 sm:right-auto sm:p-4 sm:pr-5">
              <p className="font-semibold text-foreground">{clinicData.name}</p>
              <p className="text-sm text-muted-foreground">{clinicData.cro}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
