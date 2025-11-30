"use client"

import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n-context"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useI18n()

  const getTranslatedName = (productId: string, defaultName: string) => {
    return t(`product.${productId}.name`) || defaultName
  }

  const getTranslatedMaterial = (material: string) => {
    if (material.includes("Wool")) return t("material.wool")
    if (material.includes("Cotton")) return t("material.cotton")
    if (material.includes("Cashmere")) return t("material.cashmere")
    return material
  }

  return (
    <div className="group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={getTranslatedName(product.id, product.name)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.isSpecial && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">{t("product.special")}</Badge>
          )}
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {getTranslatedName(product.id, product.name)}
          </h3>
          <p className="text-xs text-muted-foreground">{getTranslatedMaterial(product.material)}</p>
          <p className="text-sm font-semibold text-foreground">€{product.price}</p>
        </div>
      </Link>
      <Button asChild variant="outline" className="mt-3 w-full">
        <Link href={`/product/${product.id}`}>{t("product.moreInfo")}</Link>
      </Button>
    </div>
  )
}
