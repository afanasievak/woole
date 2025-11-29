"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Breadcrumb } from "@/components/breadcrumb"
import { useI18n } from "@/lib/i18n-context"
import { Truck, RotateCcw, Clock, Globe, Shield, Leaf } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const shippingInfo = [
  {
    icon: Truck,
    title: "Standard Shipping",
    description: "5-7 business days",
    price: "€8.00",
    note: "Free on orders over €100",
  },
  {
    icon: Clock,
    title: "Express Shipping",
    description: "2-3 business days",
    price: "€15.00",
    note: "Order by 2pm for same-day dispatch",
  },
  {
    icon: Globe,
    title: "Europe-Wide Delivery",
    description: "All EU countries",
    price: "From €8.00",
    note: "Shipped from Bulgaria",
  },
]

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

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping within Europe takes 5-7 business days. Express shipping is 2-3 business days. All orders are shipped from our studio in Varna, Bulgaria.",
  },
  {
    question: "Do you ship to my country?",
    answer:
      "Yes! We ship to all European Union countries. Standard shipping costs €8 and is completely free on orders over €100.",
  },
  {
    question: "How do I return an item?",
    answer:
      "You can return any unworn item within 30 days of delivery for a full refund. Items must be in original condition with tags attached. Simply email us at hello@bymomshands.com to initiate the process.",
  },
  {
    question: "Can I exchange for a different size?",
    answer:
      "If you need a different size, please return your item for a refund and place a new order for the size you need. This ensures the fastest delivery of your replacement.",
  },
  {
    question: "How should I care for my knitwear?",
    answer:
      "We recommend hand washing in cool water with a gentle detergent. Lay flat to dry away from direct heat or sunlight. For cashmere items, store folded in a breathable bag to protect from moths.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Yes! We offer complimentary gift wrapping on all orders. Simply select the gift wrap option at checkout and include a personal message if you'd like. All packaging is eco-friendly and biodegradable.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We use only natural fibers: 100% wool, organic cotton, and premium cashmere. All materials are sourced from eco-certified suppliers in Bulgaria and neighboring EU countries.",
  },
  {
    question: "What is your quality guarantee?",
    answer:
      "All By Mom's Hands products come with a 2-year quality guarantee. If any item shows defects in materials or craftsmanship under normal use, we'll repair or replace it free of charge.",
  },
]

export default function DeliveryPage() {
  const { t } = useI18n()

  return (
    <CartProvider>
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
            <h2 className="text-xl font-semibold text-foreground">Free Shipping on Orders Over €100</h2>
            <p className="mt-2 text-muted-foreground">
              We ship to all European countries from our studio in Varna, Bulgaria
            </p>
          </div>

          {/* Shipping Options */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8">Shipping Options</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {shippingInfo.map((option) => (
                <div key={option.title} className="bg-card rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <option.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{option.title}</h3>
                  <p className="mt-1 text-muted-foreground">{option.description}</p>
                  <p className="mt-3 text-xl font-semibold text-foreground">{option.price}</p>
                  <p className="mt-1 text-sm text-primary">{option.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Shipping Process */}
          <section className="mb-16 bg-secondary/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">How It Works</h2>
            <div className="grid sm:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Order</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Place your order online and receive instant confirmation
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Handcraft</h3>
                <p className="mt-2 text-sm text-muted-foreground">Your piece is lovingly crafted in our Varna studio</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Ship</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Packed in eco-friendly materials with tracking details sent via email
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  4
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Enjoy</h3>
                <p className="mt-2 text-sm text-muted-foreground">Unbox and enjoy your new handcrafted knitwear</p>
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
                <h3 className="mt-4 text-lg font-semibold text-foreground">30-Day Returns</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Items must be unworn with tags attached
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Return shipping within EU is free
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Refunds processed within 5-7 days
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Quality Guarantee</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    2-year craftsmanship guarantee
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Free repairs for any defects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Valid with proof of purchase
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Eco Packaging</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Biodegradable paper boxes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Plastic-free shipping materials
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Reusable tissue paper wrapping
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
            <h2 className="text-2xl font-semibold text-foreground mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>
      <Footer />
    </CartProvider>
  )
}
