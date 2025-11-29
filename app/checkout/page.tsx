"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CartProvider, useCart } from "@/lib/cart-context"
import { useI18n } from "@/lib/i18n-context"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Truck, Package, ShieldCheck, ChevronRight, Check, ArrowLeft } from "lucide-react"

const europeanCountries = [
  "Austria",
  "Belgium",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
]

function CheckoutContent() {
  const { items, totalPrice, clearCart } = useCart()
  const { t } = useI18n()
  const [step, setStep] = useState(1)
  const [orderComplete, setOrderComplete] = useState(false)
  const [selectedShipping, setSelectedShipping] = useState("standard")
  const [selectedPayment, setSelectedPayment] = useState("card")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Bulgaria",
    phone: "",
    saveInfo: false,
    giftWrap: false,
    giftMessage: "",
  })

  const FREE_SHIPPING_THRESHOLD = 100

  const shippingOptions = [
    {
      id: "standard",
      name: t("checkout.standard"),
      time: t("checkout.standardTime"),
      price: totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : 8,
      description: totalPrice >= FREE_SHIPPING_THRESHOLD ? t("checkout.freeOnOrder") : t("checkout.freeOver"),
    },
    {
      id: "express",
      name: t("checkout.express"),
      time: t("checkout.expressTime"),
      price: 15,
      description: t("checkout.expressDescription"),
    },
  ]

  const paymentMethods = [
    { id: "card", name: t("checkout.card"), icon: "💳", description: t("checkout.cardDescription") },
    { id: "paypal", name: t("checkout.paypal"), icon: "🅿️", description: t("checkout.paypalDescription") },
    { id: "applepay", name: t("checkout.applepay"), icon: "🍎", description: t("checkout.applepayDescription") },
    { id: "googlepay", name: t("checkout.googlepay"), icon: "🔵", description: t("checkout.googlepayDescription") },
    { id: "revolut", name: t("checkout.revolut"), icon: "💜", description: t("checkout.revolutDescription") },
    { id: "bank", name: t("checkout.bank"), icon: "🏦", description: t("checkout.bankDescription") },
  ]

  const selectedShippingOption = shippingOptions.find((o) => o.id === selectedShipping)
  const shippingCost = selectedShippingOption?.price || 0
  const orderTotal = totalPrice + shippingCost

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handlePlaceOrder = () => {
    setOrderComplete(true)
    clearCart()
  }

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4">
        <Package className="h-16 w-16 text-muted-foreground" />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground">{t("checkout.emptyBag")}</h2>
          <p className="mt-2 text-muted-foreground">{t("checkout.emptyBagDescription")}</p>
        </div>
        <Button asChild size="lg">
          <Link href="/shop">{t("cart.continueShopping")}</Link>
        </Button>
      </div>
    )
  }

  if (orderComplete) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-semibold text-foreground">{t("checkout.orderConfirmed")}</h2>
          <p className="mt-2 text-muted-foreground">
            {t("checkout.orderConfirmedDescription")} {formData.email || "your email address"}.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{t("checkout.shippingFrom")}</p>
        </div>
        <div className="flex gap-4 mt-4">
          <Button asChild variant="outline">
            <Link href="/shop">{t("cart.continueShopping")}</Link>
          </Button>
          <Button asChild>
            <Link href="/">{t("checkout.backToHome")}</Link>
          </Button>
        </div>
      </div>
    )
  }

  const progressSteps = [
    { num: 1, label: t("checkout.step.details") },
    { num: 2, label: t("checkout.step.shipping") },
    { num: 3, label: t("checkout.step.payment") },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: t("cart.title"), href: "/shop" }, { label: t("checkout.title") }]} />

      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4 my-8">
        {progressSteps.map((s, i) => (
          <div key={s.num} className="flex items-center">
            <button
              onClick={() => s.num < step && setStep(s.num)}
              className={`flex items-center gap-2 ${s.num <= step ? "text-foreground" : "text-muted-foreground"}`}
            >
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  s.num < step
                    ? "bg-primary text-primary-foreground"
                    : s.num === step
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {s.num < step ? <Check className="h-4 w-4" /> : s.num}
              </span>
              <span className="hidden sm:inline text-sm font-medium">{s.label}</span>
            </button>
            {i < 2 && <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Step 1: Customer Details */}
          {step === 1 && (
            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-6">{t("checkout.shippingDetails")}</h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">{t("checkout.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{t("checkout.emailHelper")}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t("checkout.firstName")}</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder={t("checkout.firstName")}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t("checkout.lastName")}</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder={t("checkout.lastName")}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">{t("checkout.address")}</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder={t("checkout.address")}
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">{t("checkout.city")}</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder={t("checkout.city")}
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">{t("checkout.postalCode")}</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      placeholder={t("checkout.postalCode")}
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">{t("checkout.country")}</Label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                    >
                      {europeanCountries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">{t("checkout.phone")}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+359 888 123 456"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{t("checkout.phoneHelper")}</p>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    id="saveInfo"
                    checked={formData.saveInfo}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, saveInfo: checked as boolean }))}
                  />
                  <Label htmlFor="saveInfo" className="text-sm text-muted-foreground cursor-pointer">
                    {t("checkout.saveInfo")}
                  </Label>
                </div>
              </div>

              <Button onClick={() => setStep(2)} className="w-full mt-6" size="lg">
                {t("checkout.continueToShipping")}
              </Button>
            </div>
          )}

          {/* Step 2: Shipping Options */}
          {step === 2 && (
            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-6">{t("checkout.shippingMethod")}</h2>

              {totalPrice >= FREE_SHIPPING_THRESHOLD && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <Truck className="h-5 w-5 text-green-600" />
                  <p className="text-sm text-green-800">{t("checkout.freeShippingNotice")}</p>
                </div>
              )}

              <RadioGroup value={selectedShipping} onValueChange={setSelectedShipping} className="space-y-3">
                {shippingOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedShipping === option.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <div>
                        <p className="font-medium text-foreground">{option.name}</p>
                        <p className="text-sm text-muted-foreground">{option.time}</p>
                        <p className="text-xs text-primary mt-1">{option.description}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-foreground">
                      {option.price === 0 ? t("cart.freeShipping") : `€${option.price.toFixed(2)}`}
                    </span>
                  </label>
                ))}
              </RadioGroup>

              <Separator className="my-6" />

              {/* Gift Options */}
              <div className="space-y-4">
                <h3 className="font-medium text-foreground">{t("checkout.giftOptions")}</h3>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="giftWrap"
                    checked={formData.giftWrap}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, giftWrap: checked as boolean }))}
                  />
                  <div>
                    <Label htmlFor="giftWrap" className="cursor-pointer">
                      {t("checkout.giftWrap")}
                    </Label>
                    <p className="text-xs text-muted-foreground">{t("checkout.giftWrapDescription")}</p>
                  </div>
                </div>
                {formData.giftWrap && (
                  <div>
                    <Label htmlFor="giftMessage">{t("checkout.giftMessage")}</Label>
                    <textarea
                      id="giftMessage"
                      name="giftMessage"
                      rows={3}
                      placeholder={t("checkout.giftMessagePlaceholder")}
                      value={formData.giftMessage}
                      onChange={handleInputChange}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-4 mt-6">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("checkout.back")}
                </Button>
                <Button onClick={() => setStep(3)} className="flex-1">
                  {t("checkout.continueToPayment")}
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-6">{t("checkout.paymentMethod")}</h2>

              <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment} className="space-y-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedPayment === method.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={method.id} id={method.id} />
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <p className="font-medium text-foreground">{method.name}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </RadioGroup>

              {selectedPayment === "card" && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">{t("checkout.cardNumber")}</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">{t("checkout.expiry")}</Label>
                      <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">{t("checkout.cvv")}</Label>
                      <Input id="cvv" placeholder="123" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">{t("checkout.cardName")}</Label>
                    <Input id="cardName" placeholder={t("checkout.cardName")} className="mt-1" />
                  </div>
                </div>
              )}

              {selectedPayment === "bank" && (
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">{t("checkout.bankNote")}</p>
                </div>
              )}

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm text-green-800">{t("checkout.securePayment")}</p>
              </div>

              <div className="flex gap-4 mt-6">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("checkout.back")}
                </Button>
                <Button onClick={handlePlaceOrder} className="flex-1" size="lg">
                  {t("checkout.placeOrder")} — €{orderTotal.toFixed(2)}
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t("checkout.orderSummary")}</h3>

            <ul className="space-y-4 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <li key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-3">
                  <div className="relative h-16 w-14 flex-shrink-0 overflow-hidden rounded-md bg-secondary">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground line-clamp-1">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.selectedColor} / {item.selectedSize}
                    </p>
                    <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium">€{(item.product.price * item.quantity).toFixed(2)}</p>
                </li>
              ))}
            </ul>

            <Separator className="my-4" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("cart.subtotal")}</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("cart.shipping")}</span>
                <span className={shippingCost === 0 ? "text-green-600" : ""}>
                  {shippingCost === 0 ? t("cart.freeShipping") : `€${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-semibold text-base">
                <span>{t("cart.total")}</span>
                <span>€{orderTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <CartProvider>
      <Header />
      <CartDrawer />
      <main className="min-h-screen bg-muted/30">
        <CheckoutContent />
      </main>
      <Footer />
    </CartProvider>
  )
}
