import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"
import { Leaf, Heart, Users, Award, Sparkles } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "Every piece is handmade with love and care by skilled artisans who pour their hearts into their craft.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Natural fibers and eco-friendly packaging at every step. We believe in fashion that respects our planet.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description: "Tradition, detail, and quality above all. Each stitch carries generations of knitting expertise.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Empowering local artisans in Bulgaria and supporting the slow fashion movement worldwide.",
  },
]

const timeline = [
  {
    year: "2018",
    title: "A Mother's Gift",
    description:
      "What started as handknit gifts for family became something bigger—a dream to share this warmth with the world.",
  },
  {
    year: "2020",
    title: "First Collection",
    description:
      "Our first collection of 12 sweaters launched online, each piece handcrafted in our Varna home studio.",
  },
  {
    year: "2022",
    title: "Growing Family",
    description: "Welcomed talented local knitters to join our mission of preserving traditional craftsmanship.",
  },
  {
    year: "2024",
    title: "European Reach",
    description: "Now shipping to homes across Europe, bringing handmade warmth to families everywhere.",
  },
]

export default function AboutPage() {
  return (
    <CartProvider>
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
              <h1 className="text-4xl lg:text-5xl font-semibold text-card">Our Story</h1>
              <p className="mt-4 text-lg text-card/90">Handcrafted knitwear made with love, tradition, and purpose</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={[{ label: "About Us" }]} />

          {/* Mission & Vision */}
          <section className="py-12 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Sparkles className="h-10 w-10 mx-auto text-primary mb-4" />
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground text-balance">
                Woolé creates high-quality, handcrafted knitwear made with care, tradition, and purpose.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We blend family heritage with modern design, using natural materials and eco-friendly practices to bring
                warmth and authenticity to every wardrobe.
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
                <p className="text-sm font-medium tracking-widest text-primary uppercase">Founder's Story</p>
                <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">Made with a Mother's Love</h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Woolé began in a small home in Varna, Bulgaria, where my mother spent her evenings creating
                    beautiful knitwear for our family. The rhythmic click of her needles and the soft warmth of fresh
                    wool became the soundtrack of my childhood.
                  </p>
                  <p>
                    When friends and neighbors started asking for their own pieces, we realized these weren't just
                    sweaters—they were wearable hugs, crafted with the same love a mother puts into everything she makes
                    for her family.
                  </p>
                  <p>
                    Today, our small team of artisans works from our studio overlooking the Black Sea. We source the
                    finest wool, cashmere, and cotton from ethical suppliers in Bulgaria and neighboring EU countries.
                    And we pour our hearts into every stitch.
                  </p>
                </div>
                <p className="mt-8 text-foreground font-medium italic">
                  "Knitwear is more than clothing—it's a warm embrace you can wear."
                </p>
                <p className="mt-2 text-sm text-muted-foreground">— From our family to yours</p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-12 lg:py-20 border-t border-border">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-widest text-primary uppercase">What We Stand For</p>
              <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">Our Values</h2>
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
                <p className="text-sm font-medium tracking-widest text-primary uppercase">Our Commitment</p>
                <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">Sustainable by Nature</h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Sustainability isn't just a buzzword for us—it's woven into everything we do. From sourcing to
                    shipping, we make choices that respect our planet.
                  </p>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Natural Materials Only</p>
                      <p className="text-sm text-muted-foreground">
                        100% wool, organic cotton, and cashmere from eco-certified suppliers
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Eco-Friendly Packaging</p>
                      <p className="text-sm text-muted-foreground">
                        Biodegradable boxes, tissue paper, and plastic-free shipping
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Future: Recycling Program</p>
                      <p className="text-sm text-muted-foreground">
                        We're developing a program for customers to return old knitwear for repair or reuse
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
              <p className="text-sm font-medium tracking-widest text-primary uppercase">Our Journey</p>
              <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground">The Story So Far</h2>
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
              <p className="text-sm font-medium tracking-widest text-primary uppercase">Our Vision</p>
              <h2 className="mt-2 text-3xl lg:text-4xl font-semibold text-foreground text-balance">
                Sharing the warmth of handmade craftsmanship with the world
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We're creating timeless knitwear that connects comfort, love, and sustainability. Because true luxury
                isn't about trends—it's about lasting quality and the love that goes into making something by hand.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </CartProvider>
  )
}
