"use client"

import { useParams, notFound } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CartProvider, useCart } from "@/lib/cart-context"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProductById, getProductsByCategory, getCategoryBySlug } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { Check, Truck, RotateCcw, Shield } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

function ProductDetailContent() {
  const params = useParams()
  const productId = params.id as string
  const product = getProductById(productId)
  const { addItem } = useCart()
  const { t } = useI18n()

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "")

  if (!product) {
    notFound()
  }

  const category = getCategoryBySlug(product.categorySlug)
  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedColor, selectedSize)
  }

  const colorMap: Record<string, string> = {
    Charcoal: "#36454F",
    Cream: "#FFFDD0",
    "Deep Navy": "#000080",
    "Light Grey": "#D3D3D3",
    Sand: "#C2B280",
    "Forest Green": "#228B22",
    "Soft Pink": "#FFB6C1",
    Burgundy: "#800020",
  }

  // Helper functions for translations
  const getTranslatedName = (productId: string, defaultName: string) => {
    return t(`product.${productId}.name`) || defaultName
  }

  const getTranslatedMaterial = (material: string) => {
    if (material.includes("Wool")) return t("material.wool")
    if (material.includes("Cotton")) return t("material.cotton")
    if (material.includes("Cashmere")) return t("material.cashmere")
    return material
  }

  const getTranslatedCategory = (category: string) => {
    if (category === "For Him") return t("category.forHim")
    if (category === "For Her") return t("category.forHer")
    if (category === "For Kids") return t("category.forKids")
    if (category === "Gifts") return t("category.gifts")
    return category
  }

  const getTranslatedColor = (color: string) => {
    const colorMap: Record<string, string> = {
      Charcoal: "color.charcoal",
      Cream: "color.cream",
      "Deep Navy": "color.deepNavy",
      "Light Grey": "color.lightGrey",
      Sand: "color.sand",
      "Forest Green": "color.forestGreen",
      "Soft Pink": "color.softPink",
      Burgundy: "color.burgundy",
    }
    const key = colorMap[color]
    return key ? t(key) : color
  }

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb
            items={[
              { label: t("nav.shop"), href: "/shop" },
              { label: category ? getTranslatedCategory(category.name) : "", href: `/shop/${product.categorySlug}` },
              { label: getTranslatedName(product.id, product.name) },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-secondary">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={getTranslatedName(product.id, product.name)}
                fill
                className="object-cover"
                priority
              />
              {product.isSpecial && (
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {t("productDetail.specialPiece")}
                </Badge>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div>
                <p className="text-sm text-muted-foreground">{getTranslatedCategory(product.category)}</p>
                <h1 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">
                  {getTranslatedName(product.id, product.name)}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-foreground">€{product.price}</p>
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                {t(`product.${product.id}.description`) || product.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                <span>{getTranslatedMaterial(product.material)}</span>
              </div>

              {/* Color Selection */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-foreground">
                  {t("productDetail.color")}: <span className="text-muted-foreground">{getTranslatedColor(selectedColor)}</span>
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? "border-primary ring-2 ring-primary ring-offset-2"
                          : "border-border hover:border-primary/50"
                      }`}
                      style={{ backgroundColor: colorMap[color] || "#ccc" }}
                      title={getTranslatedColor(color)}
                    >
                      <span className="sr-only">{getTranslatedColor(color)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-foreground">{t("productDetail.size")}</h3>
                  <Link href="/delivery#size-guide" className="text-sm text-primary hover:underline">
                    {t("delivery.sizeGuide")}
                  </Link>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm font-medium rounded-md border transition-all ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background text-foreground border-border hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <Button size="lg" className="mt-8 w-full" onClick={handleAddToCart}>
                {t("productDetail.addToBag")} — €{product.price}
              </Button>

              {/* Product Benefits */}
              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Truck className="h-5 w-5" />
                  <span>{t("productDetail.freeShippingOver")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <RotateCcw className="h-5 w-5" />
                  <span>{t("productDetail.returnsPolicy")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Shield className="h-5 w-5" />
                  <span>{t("productDetail.qualityGuarantee")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl font-semibold text-foreground mb-8">{t("productDetail.youMayAlsoLike")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function ProductPage() {
  return (
    <CartProvider>
      <ProductDetailContent />
    </CartProvider>
  )
}
