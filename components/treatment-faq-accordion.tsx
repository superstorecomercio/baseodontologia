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
    <Accordion type="single" collapsible className="not-prose w-full">
      {items.map((item, index) => (
        <AccordionItem value={`faq-${index}`} key={item.question}>
          <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
