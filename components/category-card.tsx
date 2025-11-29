import Link from "next/link"
import Image from "next/image"
import type { Category } from "@/lib/products"
import { ArrowRight } from "lucide-react"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/shop/${category.slug}`} className="group relative block overflow-hidden rounded-xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
        <h3 className="text-xl font-semibold">{category.name}</h3>
        <p className="mt-1 text-sm opacity-90">{category.description}</p>
        <div className="mt-3 flex items-center gap-2 text-sm font-medium">
          <span>Explore</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
