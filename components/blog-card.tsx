import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/data"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
        <Link href={`/blog/${post.slug}`}>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[16/10] md:aspect-auto bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
              <span className="text-6xl font-serif text-primary/20">
                {post.title.charAt(0)}
              </span>
            </div>
            <CardContent className="p-6 md:p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-4">
                {post.category}
              </Badge>
              <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </CardContent>
          </div>
        </Link>
      </Card>
    )
  }

  return (
    <Card className="group h-full overflow-hidden border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
          <span className="text-5xl font-serif text-primary/20">
            {post.title.charAt(0)}
          </span>
        </div>
        <CardContent className="p-6 flex flex-col flex-1">
          <Badge variant="secondary" className="w-fit mb-3">
            {post.category}
          </Badge>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{post.date}</span>
            <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
              Ler mais
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
