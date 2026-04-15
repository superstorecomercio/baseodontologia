import { Section, SectionHeader } from "@/components/ui/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/lib/data"

export function FAQSection() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          subtitle="Dúvidas Frequentes"
          title="Perguntas que nossos pacientes costumam fazer"
          description="Reunimos aqui as perguntas mais comuns. Se não encontrar o que procura, entre em contato conosco."
        />

        <Accordion type="single" collapsible className="space-y-3">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/50"
            >
              <AccordionTrigger className="py-4 text-left font-medium text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
