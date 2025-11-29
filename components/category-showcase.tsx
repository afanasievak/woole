"use client"

import { categories } from "@/lib/products"
import { CategoryCard } from "./category-card"
import { useI18n } from "@/lib/i18n-context"

export function CategoryShowcase() {
  const { t } = useI18n()

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">{t("categories.subtitle")}</p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">{t("categories.title")}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
