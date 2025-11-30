"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { Breadcrumb } from "@/components/breadcrumb"
import { products } from "@/lib/products"
import { useI18n } from "@/lib/i18n-context"

export default function ShopPage() {
  const { t } = useI18n()
  const [selectedMaterial, setSelectedMaterial] = useState("All Materials")
  const [selectedSort, setSelectedSort] = useState("featured")

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedMaterial !== "All Materials") {
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
  }, [selectedMaterial, selectedSort])

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: t("nav.shop") }]} />

          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-semibold text-foreground">{t("shop.title")}</h1>
            <p className="mt-2 text-muted-foreground">{t("footer.description")}</p>
          </div>

          <ProductFilters
            selectedMaterial={selectedMaterial}
            selectedSort={selectedSort}
            onMaterialChange={setSelectedMaterial}
            onSortChange={setSelectedSort}
          />

          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-6">
              {filteredProducts.length} {t("shop.products")}
            </p>
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
