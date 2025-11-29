import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { HeroSection } from "@/components/hero-section"
import { CategoryShowcase } from "@/components/category-showcase"
import { FeaturedProducts } from "@/components/featured-products"
import { ValueProps } from "@/components/value-props"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <CartProvider>
      <Header />
      <CartDrawer />
      <main>
        <HeroSection />
        <ValueProps />
        <CategoryShowcase />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Footer />
    </CartProvider>
  )
}
