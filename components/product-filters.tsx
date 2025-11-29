"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useI18n } from "@/lib/i18n-context"

interface ProductFiltersProps {
  onMaterialChange: (material: string) => void
  onSortChange: (sort: string) => void
  selectedMaterial: string
  selectedSort: string
}

export function ProductFilters({
  onMaterialChange,
  onSortChange,
  selectedMaterial,
  selectedSort,
}: ProductFiltersProps) {
  const { t } = useI18n()

  const materials = [
    { value: "All Materials", label: t("shop.allMaterials") },
    { value: "Wool", label: "Wool" },
    { value: "Cashmere", label: "Cashmere" },
    { value: "Cotton", label: "Cotton" },
  ]

  const sortOptions = [
    { label: t("shop.sortFeatured"), value: "featured" },
    { label: t("shop.sortPriceLow"), value: "price-asc" },
    { label: t("shop.sortPriceHigh"), value: "price-desc" },
    { label: t("shop.sortNewest"), value: "name-asc" },
  ]

  const currentMaterial = materials.find((m) => m.value === selectedMaterial)?.label || selectedMaterial

  return (
    <div className="flex flex-wrap gap-4 items-center justify-between pb-6 border-b border-border">
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 bg-transparent">
              {currentMaterial}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {materials.map((material) => (
              <DropdownMenuItem key={material.value} onClick={() => onMaterialChange(material.value)}>
                {material.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-transparent">
            {t("shop.sortBy")}: {sortOptions.find((o) => o.value === selectedSort)?.label}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {sortOptions.map((option) => (
            <DropdownMenuItem key={option.value} onClick={() => onSortChange(option.value)}>
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
