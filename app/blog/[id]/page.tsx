"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Breadcrumb } from "@/components/breadcrumb"
import { getBlogPostById, getAllBlogPosts } from "@/lib/blog"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function BlogDetailContent() {
  const params = useParams()
  const postId = params.id as string
  const post = getBlogPostById(postId)

  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="min-h-screen">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <Link href="/blog">
            <Button variant="ghost" className="mb-6 -ml-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <article>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </span>
              <span>By {post.author}</span>
            </div>

            <h1 className="mb-6 text-3xl lg:text-4xl font-semibold text-foreground">{post.title}</h1>

            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-xl bg-secondary">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div
              className="blog-content text-muted-foreground leading-relaxed [&>p]:mb-4 [&>p]:text-base [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-foreground [&>h2]:first:mt-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {relatedPosts.length > 0 && (
              <section className="mt-16 border-t border-border pt-12">
                <h2 className="mb-8 text-2xl font-semibold text-foreground">Related Articles</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group block overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                          {relatedPost.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function BlogDetailPage() {
  return (
    <CartProvider>
      <BlogDetailContent />
    </CartProvider>
  )
}

