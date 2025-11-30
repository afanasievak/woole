"use client";

import { useI18n } from "@/lib/i18n-context";
import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { t } = useI18n();

  const footerNavigation = {
    shop: [
      { name: t("footer.allProducts"), href: "/shop" },
      { name: t("nav.forHim"), href: "/shop/for-him" },
      { name: t("nav.forHer"), href: "/shop/for-her" },
      { name: t("nav.forKids"), href: "/shop/for-kids" },
      { name: t("nav.gifts"), href: "/shop/gifts" },
    ],
    company: [
      { name: t("footer.aboutUs"), href: "/about" },
      { name: t("footer.ourStory"), href: "/about" },
      { name: t("footer.sustainability"), href: "/about" },
    ],
    support: [
      { name: t("footer.contact"), href: "/contact" },
      { name: t("footer.deliveryReturns"), href: "/delivery" },
      { name: t("footer.sizeGuide"), href: "/delivery" },
    ],
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-wide text-foreground">
                Woolé
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/afanasieva.ksu/?hl=en"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100021967820725"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="mailto:hello@woole.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("footer.shop")}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.shop.map((item) => (
                <li key={item.href + item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("footer.company")}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href + item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("footer.support")}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.href + item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Woolé. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
