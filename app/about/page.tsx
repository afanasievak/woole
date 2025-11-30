"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useI18n } from "@/lib/i18n-context"
import Image from "next/image"
import { Leaf, Heart, Users, Award, Sparkles } from "lucide-react"

export default function AboutPage() {
  const { t } = useI18n()

  const values = [
    {
      icon: Heart,
      title: t("about.value.authenticity.title"),
      description: t("about.value.authenticity.description"),
    },
    {
      icon: Leaf,
      title: t("about.value.sustainability.title"),
      description: t("about.value.sustainability.description"),
    },
    {
      icon: Award,
      title: t("about.value.craftsmanship.title"),
      description: t("about.value.craftsmanship.description"),
    },
    {
      icon: Users,
      title: t("about.value.community.title"),
      description: t("about.value.community.description"),
    },
  ]

  const timeline = [
    {
      year: "2018",
      title: t("about.timeline.2018.title"),
      description: t("about.timeline.2018.description"),
    },
    {
      year: "2020",
      title: t("about.timeline.2020.title"),
      description: t("about.timeline.2020.description"),
    },
    {
      year: "2022",
      title: t("about.timeline.2022.title"),
      description: t("about.timeline.2022.description"),
    },
    {
      year: "2024",
      title: t("about.timeline.2024.title"),
      description: t("about.timeline.2024.description"),
    },
  ]
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 lg:h-[500px]">
          <Image
            src="/cozy-knitting-workshop-warm-lighting-yarn-balls.jpg"
            alt="Woolé workshop with artisans crafting knitwear"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-2xl px-4">
              <h1 className="text-4xl lg:text-5xl font-semibold text-card">{t("about.heroTitle")}</h1>
              <p className="mt-4 text-lg text-card/90">{t("about.heroSubtitle")}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: t("about.breadcrumb") }]} />

          {/* Mission & Vision */}
          <section className="py-12 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Sparkles className="h-10 w-10 mx-auto text-primary mb-4" />
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground text-balance">
                {t("about.mission")}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t("about.missionDescription")}
              </p>
            </div>
          </section>

          {/* Founder Story */}
          <section className="py-12 lg:py-20 border-t border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="/founder-portrait-woman-knitting-cozy-workshop.jpg"
                  alt="Our founder in the Varna studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium tracking-widest text-primary uppercase">{t("about.founderStory")}</p>
                <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">{t("about.founderTitle")}</h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t("about.founderText1")}</p>
                  <p>{t("about.founderText2")}</p>
                  <p>{t("about.founderText3")}</p>
                </div>
                <p className="mt-8 text-foreground font-medium italic">
                  "{t("about.quote")}"
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{t("about.quoteAuthor")}</p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-12 lg:py-20 border-t border-border">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-widest text-primary uppercase">{t("about.valuesTitle")}</p>
              <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">{t("about.valuesHeading")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sustainability Section */}
          <section className="py-12 lg:py-20 border-t border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium tracking-widest text-primary uppercase">{t("about.commitment")}</p>
                <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">{t("about.sustainableTitle")}</h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t("about.sustainableText")}</p>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{t("about.materials.title")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("about.materials.description")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{t("about.packaging.title")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("about.packaging.description")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{t("about.recycling.title")}</p>
                      <p className="text-sm text-muted-foreground">
                        {t("about.recycling.description")}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/natural-wool-yarn-eco-friendly-sustainable-materia.jpg"
                  alt="Natural materials and sustainable practices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-12 lg:py-20 border-t border-border">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-widest text-primary uppercase">{t("about.journey")}</p>
              <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">{t("about.timelineTitle")}</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                        {item.year.slice(-2)}
                      </div>
                      {index < timeline.length - 1 && <div className="w-px h-full bg-border mt-2" />}
                    </div>
                    <div className="pb-8">
                      <p className="text-sm text-primary font-medium">{item.year}</p>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="py-12 lg:py-20 border-t border-border">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-medium tracking-widest text-primary uppercase">{t("about.vision")}</p>
              <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground text-balance">
                {t("about.visionTitle")}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {t("about.visionDescription")}
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
