"use client"

import { useState, useMemo } from "react"
import { useParams, notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { Breadcrumb } from "@/components/breadcrumb"
import { useI18n } from "@/lib/i18n-context"
import { getProductsByCategory, getCategoryBySlug } from "@/lib/products"

export default function CategoryPage() {
  const { t } = useI18n()
  const params = useParams()
  const categorySlug = params.category as string
  const category = getCategoryBySlug(categorySlug)

  const [selectedMaterial, setSelectedMaterial] = useState(t("shop.allMaterials"))
  const [selectedSort, setSelectedSort] = useState("featured")

  const categoryProducts = getProductsByCategory(categorySlug)

  const filteredProducts = useMemo(() => {
    let filtered = [...categoryProducts]

    if (selectedMaterial !== t("shop.allMaterials")) {
      filtered = filtered.filter((p) => p.material.toLowerCase().includes(selectedMaterial.toLowerCase()))
    }

    switch (selectedSort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        filtered.sort((a, b) => (b.isSpecial ? 1 : 0) - (a.isSpecial ? 1 : 0))
    }

    return filtered
  }, [categoryProducts, selectedMaterial, selectedSort, t])

  if (!category) {
    notFound()
  }

  return (
    <CartProvider>
      <Header />
      <CartDrawer />
      <main className="min-h-screen">
        {/* Category Hero */}
        <div
          className="relative h-64 lg:h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url('${category.image}')`,
          }}
        >
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-semibold text-card">{category.name}</h1>
              <p className="mt-2 text-lg text-card/90">{category.description}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: t("shop.breadcrumb"), href: "/shop" }, { label: category.name }]} />

          <ProductFilters
            selectedMaterial={selectedMaterial}
            selectedSort={selectedSort}
            onMaterialChange={setSelectedMaterial}
            onSortChange={setSelectedSort}
          />

          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-6">{filteredProducts.length} {t("shop.products")}</p>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </main>
      <Footer />
    </CartProvider>
  )
}
