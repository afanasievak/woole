"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Breadcrumb } from "@/components/breadcrumb"
import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react"

export default function ContactPage() {
  const { t } = useI18n()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <CartProvider>
      <Header />
      <CartDrawer />
      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: t("nav.contact") }]} />

          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-semibold text-foreground">{t("contact.title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 border border-border">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-foreground">{t("contact.sent")}</h2>
                  <p className="mt-2 text-muted-foreground">
                    {t("contact.sentDescription")}
                  </p>
                  <Button
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", subject: "", message: "" })
                    }}
                  >
                    {t("contact.sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.name")}</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("contact.namePlaceholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.email")}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t("contact.emailPlaceholder")}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact.subject")}</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t("contact.subjectPlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")}</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("contact.messagePlaceholder")}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    {t("contact.send")}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">{t("contact.info")}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t("contact.emailLabel")}</p>
                      <a
                        href="mailto:hello@woole.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@woole.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t("contact.Label")}</p>
                      <a href="tel:+359897922541text-muted-foreground hover:text-primary transition-colors">
                        +359 89 792 2541
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t("contact.addressLabel")}</p>
                      <p className="text-muted-foreground">
                        Woolé Workshop
                        <br />
                        Knyaz Alexander I Boulevard 12
                        <br />
                        Varna, Bulgaria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t("contact.hours")}</p>
                      <p className="text-muted-foreground">
                        {t("contact.hours.weekday")}
                        <br />
                        {t("contact.hours.saturday")}
                        <br />
                        {t("contact.hours.sunday")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h2 className="text-xl font-semibold text-foreground mb-6">{t("contact.followUs")}</h2>
                <p className="text-muted-foreground mb-4">
                  {t("contact.followUsDescription")}
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">{t("contact.faq")}</h2>
                <p className="text-muted-foreground">
                  {t("contact.faqDescription")}{" "}
                  <a href="/delivery" className="text-primary hover:underline">
                    {t("contact.faqLink")}
                  </a>{" "}
                  {t("contact.faqLinkEnd")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </CartProvider>
  )
}
