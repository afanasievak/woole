"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { Breadcrumb } from "@/components/breadcrumb"
import { getAllBlogPosts } from "@/lib/blog"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "Blog" }]} />

          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-semibold text-foreground">Our Blog</h1>
            <p className="mt-2 text-muted-foreground">
              Stories, guides, and insights about knitwear, sustainability, and craftsmanship
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-lg"
              >
                <Link href={`/blog/${post.id}`} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <h2 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="mb-4 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>

                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min read
                      </span>
                      <span>By {post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:gap-2"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}


