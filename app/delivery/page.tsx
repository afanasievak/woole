"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { Breadcrumb } from "@/components/breadcrumb"
import { useI18n } from "@/lib/i18n-context"
import { Truck, RotateCcw, Clock, Globe, Shield, Leaf } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const sizeGuide = {
  women: [
    { size: "XS", chest: "86-91", waist: "71-76" },
    { size: "S", chest: "91-96", waist: "76-81" },
    { size: "M", chest: "96-101", waist: "81-86" },
    { size: "L", chest: "101-107", waist: "86-91" },
    { size: "XL", chest: "107-112", waist: "91-96" },
  ],
  men: [
    { size: "XS", chest: "96-101", waist: "81-86" },
    { size: "S", chest: "101-107", waist: "86-91" },
    { size: "M", chest: "107-112", waist: "91-96" },
    { size: "L", chest: "112-117", waist: "96-101" },
    { size: "XL", chest: "117-122", waist: "101-107" },
  ],
  kids: [
    { size: "2-3y", height: "92-98", chest: "53-55" },
    { size: "4-5y", height: "104-110", chest: "56-58" },
    { size: "6-7y", height: "116-122", chest: "59-61" },
    { size: "8-9y", height: "128-134", chest: "63-67" },
    { size: "10-11y", height: "140-146", chest: "69-73" },
  ],
}


export default function DeliveryPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: t("delivery.title") }]} />

          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-semibold text-foreground">{t("delivery.title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("delivery.subtitle")}
            </p>
          </div>

          {/* Free Shipping Banner */}
          <div className="mb-12 p-6 bg-primary/10 rounded-xl text-center">
            <Truck className="h-10 w-10 mx-auto text-primary mb-3" />
            <h2 className="text-xl font-semibold text-foreground">{t("delivery.freeShippingBanner")}</h2>
            <p className="mt-2 text-muted-foreground">
              {t("delivery.freeShippingText")}
            </p>
          </div>

          {/* Shipping Options */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">{t("delivery.shippingOptions")}</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t("delivery.shipping.standard.title")}</h3>
                <p className="mt-1 text-muted-foreground">{t("delivery.shipping.standard.description")}</p>
                <p className="mt-3 text-xl font-semibold text-foreground">{t("delivery.shipping.standard.price")}</p>
                <p className="mt-1 text-sm text-primary">{t("delivery.shipping.standard.note")}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t("delivery.shipping.express.title")}</h3>
                <p className="mt-1 text-muted-foreground">{t("delivery.shipping.express.description")}</p>
                <p className="mt-3 text-xl font-semibold text-foreground">{t("delivery.shipping.express.price")}</p>
                <p className="mt-1 text-sm text-primary">{t("delivery.shipping.express.note")}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t("delivery.shipping.europe.title")}</h3>
                <p className="mt-1 text-muted-foreground">{t("delivery.shipping.europe.description")}</p>
                <p className="mt-3 text-xl font-semibold text-foreground">{t("delivery.shipping.europe.price")}</p>
                <p className="mt-1 text-sm text-primary">{t("delivery.shipping.europe.note")}</p>
              </div>
            </div>
          </section>

          {/* Shipping Process */}
          <section className="mb-16 bg-secondary/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">{t("delivery.howItWorks")}</h2>
            <div className="grid sm:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{t("delivery.step.order")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("delivery.step.orderDesc")}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{t("delivery.step.handcraft")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("delivery.step.handcraftDesc")}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{t("delivery.step.ship")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("delivery.step.shipDesc")}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  4
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{t("delivery.step.enjoy")}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t("delivery.step.enjoyDesc")}</p>
              </div>
            </div>
          </section>

          {/* Returns & Sustainability */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <RotateCcw className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t("delivery.returns.title")}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {t("delivery.returns.item1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {t("delivery.returns.item2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {t("delivery.returns.item3")}
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t("delivery.guarantee.title")}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {t("delivery.guarantee.item1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {t("delivery.guarantee.item2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {t("delivery.guarantee.item3")}
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t("delivery.packaging.title")}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {t("delivery.packaging.item1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {t("delivery.packaging.item2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {t("delivery.packaging.item3")}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Size Guide */}
          <section id="size-guide" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-foreground mb-8">{t("delivery.sizeGuide")}</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Women Sizes */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">{t("delivery.sizeGuide.women")}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-medium text-muted-foreground">{t("delivery.sizeGuide.size")}</th>
                        <th className="text-left py-3 px-2 font-medium text-muted-foreground">{t("delivery.sizeGuide.chest")}</th>
                        <th className="text-left py-3 px-2 font-medium text-muted-foreground">{t("delivery.sizeGuide.waist")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeGuide.women.map((row) => (
                        <tr key={row.size} className="border-b border-border/50">
                          <td className="py-3 px-2 font-medium text-foreground">{row.size}</td>
                          <td className="py-3 px-2 text-muted-foreground">{row.chest}</td>
                          <td className="py-3 px-2 text-muted-foreground">{row.waist}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Men Sizes */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">{t("delivery.sizeGuide.men")}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-medium text-muted-foreground">{t("delivery.sizeGuide.size")}</th>
                        <th className="text-left py-3 px-2 font-medium text-muted-foreground">{t("delivery.sizeGuide.chest")}</th>
                        <th className="text-left py-3 px-2 font-medium text-muted-foreground">{t("delivery.sizeGuide.waist")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeGuide.men.map((row) => (
                        <tr key={row.size} className="border-b border-border/50">
                          <td className="py-3 px-2 font-medium text-foreground">{row.size}</td>
                          <td className="py-3 px-2 text-muted-foreground">{row.chest}</td>
                          <td className="py-3 px-2 text-muted-foreground">{row.waist}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Kids Sizes */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">{t("delivery.sizeGuide.kids")}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-medium text-muted-foreground">{t("delivery.sizeGuide.age")}</th>
                        <th className="text-left py-3 px-2 font-medium text-muted-foreground">{t("delivery.sizeGuide.height")}</th>
                        <th className="text-left py-3 px-2 font-medium text-muted-foreground">{t("delivery.sizeGuide.chest")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeGuide.kids.map((row) => (
                        <tr key={row.size} className="border-b border-border/50">
                          <td className="py-3 px-2 font-medium text-foreground">{row.size}</td>
                          <td className="py-3 px-2 text-muted-foreground">{row.height}</td>
                          <td className="py-3 px-2 text-muted-foreground">{row.chest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              {t("delivery.sizeGuide.help")}
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">{t("delivery.faq.title")}</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {t("delivery.faq.shippingTime.question")}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{t("delivery.faq.shippingTime.answer")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {t("delivery.faq.shipCountry.question")}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{t("delivery.faq.shipCountry.answer")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {t("delivery.faq.return.question")}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{t("delivery.faq.return.answer")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {t("delivery.faq.exchange.question")}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{t("delivery.faq.exchange.answer")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {t("delivery.faq.care.question")}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{t("delivery.faq.care.answer")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {t("delivery.faq.giftWrap.question")}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{t("delivery.faq.giftWrap.answer")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {t("delivery.faq.materials.question")}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{t("delivery.faq.materials.answer")}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-8">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {t("delivery.faq.guarantee.question")}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{t("delivery.faq.guarantee.answer")}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
