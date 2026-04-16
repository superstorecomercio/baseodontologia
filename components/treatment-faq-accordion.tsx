"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { TreatmentFaqItem } from "@/lib/treatment-page-seo"

interface TreatmentFaqAccordionProps {
  items: TreatmentFaqItem[]
}

export function TreatmentFaqAccordion({ items }: TreatmentFaqAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-xl border border-border bg-card px-1 shadow-sm"
    >
      {items.map((item, index) => (
        <AccordionItem value={`faq-${index}`} key={item.question} className="border-b border-border px-4 last:border-b-0">
          <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline md:text-[1.0625rem]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
