import { Star, StarHalf } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  className?: string
}

export function StarRating({
  rating,
  size = "md",
  showValue = false,
  className,
}: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  const sizeClasses = {
    sm: "h-3.5 w-3.5",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(sizeClasses[size], "fill-yellow-400 text-yellow-400")}
          />
        ))}
        {hasHalfStar && (
          <StarHalf
            className={cn(sizeClasses[size], "fill-yellow-400 text-yellow-400")}
          />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(sizeClasses[size], "text-muted-foreground/30")}
          />
        ))}
      </div>
      {showValue && (
        <span className="font-medium text-foreground ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  )
}
