import { Section, SectionHeader } from "@/components/ui/section"
import { TestimonialCard } from "@/components/testimonial-card"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <Section variant="muted">
      <SectionHeader
        subtitle="Depoimentos"
        title="O que nossos pacientes dizem"
        description="A satisfação de nossos pacientes é nossa maior recompensa. Confira alguns depoimentos de quem já transformou o sorriso conosco."
      />

      <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            text={testimonial.text}
            rating={testimonial.rating}
            image={testimonial.image}
          />
        ))}
      </div>
    </Section>
  )
}
