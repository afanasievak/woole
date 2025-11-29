"use client"

import { Leaf, Heart, Truck, Award } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function ValueProps() {
  const { t } = useI18n()

  const values = [
    {
      icon: Leaf,
      title: t("values.sustainable.title"),
      description: t("values.sustainable.description"),
    },
    {
      icon: Heart,
      title: t("values.crafted.title"),
      description: t("values.crafted.description"),
    },
    {
      icon: Truck,
      title: t("values.shipping.title"),
      description: t("values.shipping.description"),
    },
    {
      icon: Award,
      title: t("values.quality.title"),
      description: t("values.quality.description"),
    },
  ]

  return (
    <section className="py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
