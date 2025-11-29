"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { useI18n } from "@/lib/i18n-context"
import { Minus, Plus, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart()
  const { t } = useI18n()

  const FREE_SHIPPING_THRESHOLD = 250
  const amountToFreeShipping = FREE_SHIPPING_THRESHOLD - totalPrice

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg bg-background flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">{t("cart.title")}</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <p className="text-muted-foreground">{t("cart.empty")}</p>
            <Button onClick={() => setIsOpen(false)} asChild>
              <Link href="/shop">{t("cart.continueShopping")}</Link>
            </Button>
          </div>
        ) : (
          <>
            {amountToFreeShipping > 0 ? (
              <div className="py-3 px-4 bg-primary/10 rounded-lg mb-2">
                <p className="text-sm text-foreground text-center">
                  <strong>€{amountToFreeShipping.toFixed(2)}</strong> {t("cart.freeShippingProgress")}
                </p>
                <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${Math.min((totalPrice / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="py-3 px-4 bg-green-100 rounded-lg mb-2">
                <p className="text-sm text-green-800 text-center font-medium">{t("cart.freeShippingUnlocked")}</p>
              </div>
            )}

            <div className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="flex gap-4 p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-md bg-secondary">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-foreground">{item.product.name}</h3>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {item.selectedColor} / {item.selectedSize}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.selectedColor, item.selectedSize)}
                          className="text-muted-foreground hover:text-foreground"
                          aria-label={t("cart.remove")}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity - 1)
                            }
                            className="p-1 rounded border border-border hover:bg-secondary"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.selectedColor, item.selectedSize, item.quantity + 1)
                            }
                            className="p-1 rounded border border-border hover:bg-secondary"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium">€{(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between text-sm">
                <p className="text-muted-foreground">{t("cart.subtotal")}</p>
                <p className="font-medium">€{totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-muted-foreground">{t("cart.shipping")}</p>
                <p
                  className={
                    totalPrice >= FREE_SHIPPING_THRESHOLD ? "text-green-600 font-medium" : "text-muted-foreground"
                  }
                >
                  {totalPrice >= FREE_SHIPPING_THRESHOLD ? t("cart.freeShipping") : t("cart.calculatedAtCheckout")}
                </p>
              </div>
              <div className="flex justify-between text-base font-medium pt-2 border-t border-border">
                <p>{t("cart.total")}</p>
                <p>€{totalPrice.toFixed(2)}</p>
              </div>
              <Button className="w-full" size="lg" asChild>
                <Link href="/checkout" onClick={() => setIsOpen(false)}>
                  {t("cart.checkout")}
                </Link>
              </Button>
              <button
                onClick={clearCart}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("cart.remove")}
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
