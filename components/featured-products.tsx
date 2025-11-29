"use client"

import { getFeaturedProducts } from "@/lib/products"
import { ProductCard } from "./product-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function FeaturedProducts() {
  const { t } = useI18n()
  const featured = getFeaturedProducts()

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-medium tracking-widest text-primary uppercase">{t("featured.subtitle")}</p>
            <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">{t("featured.title")}</h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("featured.viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link
          href="/shop"
          className="mt-8 flex sm:hidden items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("featured.viewAllProducts")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
