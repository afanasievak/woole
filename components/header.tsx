"use client"

import Link from "next/link"
import { ShoppingBag, Menu } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { useI18n } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import Image from "next/image"

export function Header() {
  const { totalItems, setIsOpen } = useCart()
  const { t } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigation = [
    { name: t("nav.shop"), href: "/shop" },
    { name: t("nav.forHim"), href: "/shop/for-him" },
    { name: t("nav.forHer"), href: "/shop/for-her" },
    { name: t("nav.forKids"), href: "/shop/for-kids" },
    { name: t("nav.gifts"), href: "/shop/gifts" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.delivery"), href: "/delivery" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t("common.openMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-background">
              <div className="mt-8 flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Woolé" width={60} height={60} />

          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-foreground hover:text-primary transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">{t("common.shoppingCart")}</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
