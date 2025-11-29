"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-cozy-knit-sweaters.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-xl">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">{t("hero.subtitle")}</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance leading-tight">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">{t("hero.description")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/shop">
                {t("hero.shopCollection")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">{t("hero.ourStory")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
