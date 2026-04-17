import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/motion/page-hero"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BlogCard } from "@/components/blog-card"
import { blogPosts, clinicData } from "@/lib/data"
import { ArrowLeft, Clock, Calendar, User, MessageCircle } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Artigo não encontrado",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  const whatsappUrl = `https://wa.me/${clinicData.whatsapp}?text=Olá! Gostaria de agendar uma consulta.`

  // Extract headings for table of contents
  const headings = post.content.match(/^##\s+(.+)$/gm)?.map((h) => h.replace(/^##\s+/, "")) || []

  return (
    <>
      {/* Hero */}
      <PageHero className="bg-muted pb-12 pt-28 md:pb-14 md:pt-32">
        <div className="page-container">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Dicas de Saúde Bucal
            </Link>

            <Badge variant="secondary" className="mb-5">
              {post.category}
            </Badge>

            <h1 className="mb-7 font-serif text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl md:leading-[1.1] lg:text-5xl lg:leading-[1.08]">
              {post.title}
            </h1>

            <p className="mb-10 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar - Table of Contents */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-28">
                {headings.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                      Índice
                    </h3>
                    <ul className="space-y-2">
                      {headings.map((heading, index) => (
                        <li key={index}>
                          <a
                            href={`#${heading.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {heading}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 order-1 lg:order-2">
              <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => {
                      const id = String(children).toLowerCase().replace(/\s+/g, "-")
                      return (
                        <h2 id={id} className="scroll-mt-28 text-2xl mt-10 mb-4">
                          {children}
                        </h2>
                      )
                    },
                    h3: ({ children }) => (
                      <h3 className="text-xl mt-8 mb-3">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-muted-foreground">{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-foreground">
                        {children}
                      </strong>
                    ),
                    hr: () => <hr className="my-8 border-border" />,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Mid-article CTA */}
              <div className="my-12 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/10">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Gostou do conteúdo?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Agende uma avaliação e tire todas as suas dúvidas com nossa equipe.
                </p>
                <Button asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Agendar Avaliação
                  </a>
                </Button>
              </div>

              {/* Author Box */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-muted">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-semibold text-primary">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {clinicData.specialty}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Especialista em transformar sorrisos com tratamentos de
                    excelência e atendimento humanizado.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Pronto para cuidar do seu sorriso?
          </h2>
          <p className="text-muted-foreground mb-8">
            Agende sua avaliação gratuita e descubra o tratamento ideal para você.
          </p>
          <Button size="lg" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" />
              Agendar pelo WhatsApp
            </a>
          </Button>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section>
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Artigos Relacionados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
