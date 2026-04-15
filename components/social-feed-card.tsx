import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, ExternalLink } from "lucide-react"
import type { SocialPost } from "@/lib/data"

interface SocialFeedCardProps {
  post: SocialPost
}

export function SocialFeedCard({ post }: SocialFeedCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Image placeholder */}
        <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-serif text-primary/20">
              {post.caption.charAt(0)}
            </span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex items-center gap-6 text-white">
              <span className="flex items-center gap-2">
                <Heart className="h-6 w-6 fill-white" />
                {post.likes}
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="h-6 w-6 fill-white" />
                {post.comments}
              </span>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {post.caption}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{post.date}</span>
            <ExternalLink className="h-4 w-4" />
          </div>
        </CardContent>
      </a>
    </Card>
  )
}
