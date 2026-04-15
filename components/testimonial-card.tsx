import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/ui/star-rating"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role?: string
  text: string
  rating: number
  image?: string
}

export function TestimonialCard({
  name,
  role,
  text,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6 md:p-8">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <StarRating rating={rating} size="sm" className="mb-4" />
        <p className="text-muted-foreground leading-relaxed mb-6">{text}</p>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            {role && <p className="text-sm text-muted-foreground">{role}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
