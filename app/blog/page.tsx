import type { Metadata } from "next"
import { PageHero } from "@/components/motion/page-hero"
import { Section } from "@/components/ui/section"
import { BlogCard } from "@/components/blog-card"
import { Badge } from "@/components/ui/badge"
import { blogPosts, blogCategories } from "@/lib/data"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dicas de saúde bucal, novidades sobre tratamentos odontológicos e conteúdo educativo. Fique por dentro das últimas novidades da odontologia.",
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <>
      {/* Hero Section */}
      <PageHero className="bg-muted pb-16 pt-28 md:pb-20 md:pt-32">
        <div className="page-container">
          <div className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Blog
            </p>
            <h1 className="mb-7 font-serif text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl md:leading-[1.08]">
              Dicas e novidades sobre saúde bucal
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Conteúdo educativo e informativo para ajudar você a cuidar melhor
              do seu sorriso e conhecer os tratamentos mais modernos.
            </p>
          </div>
        </div>
      </PageHero>

      {/* Search and Categories */}
      <Section className="pb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar artigos..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <Badge
                key={category}
                variant={category === "Todos" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Post */}
      <Section className="pt-0">
        <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
          Destaque
        </h2>
        <BlogCard post={featuredPost} featured />
      </Section>

      {/* Posts Grid */}
      <Section variant="muted">
        <h2 className="text-2xl font-semibold text-foreground mb-8">
          Últimos Artigos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Receba novidades por e-mail
          </h2>
          <p className="text-muted-foreground mb-8">
            Cadastre-se para receber dicas de saúde bucal e novidades sobre
            tratamentos diretamente no seu e-mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </Section>
    </>
  )
}
