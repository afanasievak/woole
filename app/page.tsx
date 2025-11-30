import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { HeroSection } from "@/components/hero-section"
import { CategoryShowcase } from "@/components/category-showcase"
import { FeaturedProducts } from "@/components/featured-products"
import { ValueProps } from "@/components/value-props"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <>
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
    </>
  )
}
