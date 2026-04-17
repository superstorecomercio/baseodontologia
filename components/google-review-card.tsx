import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/ui/star-rating"
import { cn } from "@/lib/utils"
import type { GoogleReview } from "@/lib/data"

interface GoogleReviewCardProps {
  review: GoogleReview
  /** Padding e texto menores (grade da home). */
  density?: "default" | "compact"
  className?: string
}

export function GoogleReviewCard({
  review,
  density = "default",
  className,
}: GoogleReviewCardProps) {
  const compact = density === "compact"
  return (
    <Card
      className={cn(
        "premium-card-hover h-full border border-border/50 bg-card/80 shadow-sm backdrop-blur-[2px]",
        className,
      )}
    >
      <CardContent className={compact ? "p-4" : "p-6"}>
        <div className={cn("flex items-start gap-2.5", compact ? "mb-2.5" : "mb-4")}>
          <div
            className={cn(
              "flex shrink-0 items-center justify-center rounded-full bg-primary/10",
              compact ? "h-8 w-8" : "h-10 w-10",
            )}
          >
            <span
              className={cn(
                "font-semibold text-primary",
                compact ? "text-xs" : "text-sm",
              )}
            >
              {review.author.charAt(0)}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">
              {review.author}
            </p>
            <p className="text-[11px] text-muted-foreground">{review.date}</p>
          </div>
        </div>
        <StarRating
          rating={review.rating}
          size="sm"
          className={compact ? "mb-2" : "mb-3"}
        />
        <p
          className={cn(
            "leading-snug text-muted-foreground",
            compact ? "text-xs line-clamp-3" : "text-sm leading-relaxed line-clamp-4",
          )}
        >
          {review.text}
        </p>
      </CardContent>
    </Card>
  )
}
