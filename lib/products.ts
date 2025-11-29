export interface Product {
  id: string
  name: string
  price: number
  material: string
  description: string
  colors: string[]
  sizes: string[]
  category: string
  categorySlug: string
  image: string
  isSpecial?: boolean
}

export interface Category {
  name: string
  slug: string
  description: string
  image: string
}

export const categories: Category[] = [
  {
    name: "For Him",
    slug: "for-him",
    description: "Timeless sweaters crafted for the modern gentleman",
    image: "/elegant-man-wearing-cream-wool-sweater-minimalist.jpg",
  },
  {
    name: "For Her",
    slug: "for-her",
    description: "Luxurious knitwear designed for effortless elegance",
    image: "/elegant-woman-wearing-cashmere-turtleneck-minimali.jpg",
  },
  {
    name: "For Kids",
    slug: "for-kids",
    description: "Gentle warmth for your most important ones",
    image: "/happy-child-wearing-cozy-knit-sweater-soft-colors.jpg",
  },
  {
    name: "Gifts",
    slug: "gifts",
    description: "Thoughtful pieces for hearts you treasure",
    image: "/gift-wrapped-cashmere-scarf-and-beanie-elegant.jpg",
  },
]

export const products: Product[] = [
  // FOR HIM
  {
    id: "him-1",
    name: "Classic Wool Crewneck",
    price: 169,
    material: "100% Wool",
    description:
      "A timeless wool crewneck designed for everyday comfort. Warm, soft, and durable—perfect for layering or wearing on its own.",
    colors: ["Charcoal", "Cream", "Deep Navy", "Light Grey"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "For Him",
    categorySlug: "for-him",
    image: "/classic-charcoal-wool-crewneck-sweater-men-minimal.jpg",
  },
  {
    id: "him-2",
    name: "Cotton Everyday Pullover",
    price: 149,
    material: "100% Cotton",
    description:
      "A lightweight cotton pullover that balances breathability with a structured silhouette. Ideal for all-season wear.",
    colors: ["Sand", "Charcoal", "Forest Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "For Him",
    categorySlug: "for-him",
    image: "/sand-cotton-pullover-sweater-men-minimal-style.jpg",
  },
  {
    id: "him-3",
    name: "Cashmere Essential V-Neck",
    price: 199,
    material: "100% Cashmere",
    description:
      "A refined V-neck made from premium cashmere for an ultra-soft touch. A sophisticated staple suitable for both work and weekend.",
    colors: ["Deep Navy", "Burgundy", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "For Him",
    categorySlug: "for-him",
    image: "/navy-cashmere-v-neck-sweater-men-elegant.jpg",
  },
  {
    id: "him-4",
    name: "Wool Fisherman Knit",
    price: 139,
    material: "100% Wool",
    description:
      "Inspired by traditional fisherman knits, this textured sweater offers warmth with a rugged yet polished look.",
    colors: ["Light Grey", "Forest Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "For Him",
    categorySlug: "for-him",
    image: "/textured-fisherman-knit-sweater-grey-wool-men.jpg",
  },
  // FOR HER
  {
    id: "her-1",
    name: "Cashmere Soft Turtleneck",
    price: 219,
    material: "100% Cashmere",
    description:
      "A luxurious turtleneck with a relaxed drape and buttery-soft feel. Designed for comfort without sacrificing elegance.",
    colors: ["Soft Pink", "Cream", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "For Her",
    categorySlug: "for-her",
    image: "/cream-cashmere-turtleneck-sweater-women-elegant-so.jpg",
  },
  {
    id: "her-2",
    name: "Wool Ribbed Cardigan",
    price: 179,
    material: "100% Wool",
    description:
      "A ribbed cardigan featuring a clean silhouette and natural warmth. Wear it open or buttoned for versatile styling.",
    colors: ["Light Grey", "Charcoal"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "For Her",
    categorySlug: "for-her",
    image: "/grey-wool-ribbed-cardigan-women-minimal.jpg",
  },
  {
    id: "her-3",
    name: "Cotton Everyday Knit Top",
    price: 99,
    material: "100% Cotton",
    description:
      "A breathable, lightweight knit top ideal for layering. Smooth texture and a feminine fit that works for all seasons.",
    colors: ["Sand", "Soft Pink", "Forest Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "For Her",
    categorySlug: "for-her",
    image: "/soft-pink-cotton-knit-top-women-light-elegant.jpg",
  },
  {
    id: "her-4",
    name: "Cashmere Wrap Sweater",
    price: 210,
    material: "100% Cashmere",
    description:
      "A modern wrap-style cashmere sweater that flatters the body with its soft structure. Designed for feeling wrapped in comfort.",
    colors: ["Cream", "Deep Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "For Her",
    categorySlug: "for-her",
    isSpecial: true,
    image: "/cream-cashmere-wrap-sweater-women-luxurious.jpg",
  },
  // FOR KIDS
  {
    id: "kid-1",
    name: "Wool Cozy Kids Crew",
    price: 79,
    material: "100% Wool",
    description:
      "A warm and gentle wool crewneck for curious little explorers. Soft on the skin and perfect for cold days.",
    colors: ["Cream", "Forest Green"],
    sizes: ["2-3y", "4-5y", "6-7y", "8-9y", "10-11y"],
    category: "For Kids",
    categorySlug: "for-kids",
    image: "/child-wearing-cream-wool-crewneck-sweater-cozy.jpg",
  },
  {
    id: "kid-2",
    name: "Cotton Play Sweater",
    price: 59,
    material: "100% Cotton",
    description: "Lightweight and breathable, this cotton sweater keeps up with every jump, run, and giggle.",
    colors: ["Soft Pink", "Light Grey", "Sand"],
    sizes: ["2-3y", "4-5y", "6-7y", "8-9y", "10-11y"],
    category: "For Kids",
    categorySlug: "for-kids",
    image: "/child-cotton-sweater-pink-playful-happy.jpg",
  },
  {
    id: "kid-3",
    name: "Kid's Cashmere Hug Pullover",
    price: 109,
    material: "100% Cashmere",
    description: "As soft as a hug—this sweater wraps little ones in gentle warmth with a cloud-like feel.",
    colors: ["Burgundy", "Cream"],
    sizes: ["2-3y", "4-5y", "6-7y", "8-9y", "10-11y"],
    category: "For Kids",
    categorySlug: "for-kids",
    isSpecial: true,
    image: "/child-cashmere-pullover-burgundy-soft-cozy.jpg",
  },
  {
    id: "kid-4",
    name: "Wool Mini Fisherman Knit",
    price: 59,
    material: "100% Wool",
    description: "A playful twist on the traditional fisherman knit, sized perfectly for small adventurers.",
    colors: ["Deep Navy", "Light Grey"],
    sizes: ["2-3y", "4-5y", "6-7y", "8-9y", "10-11y"],
    category: "For Kids",
    categorySlug: "for-kids",
    image: "/navy-wool-mini-fisherman-knit-kids-sweater.jpg",
  },
  // GIFTS
  {
    id: "gift-1",
    name: "Cashmere Heart Beanie",
    price: 99,
    material: "100% Cashmere",
    description:
      "A soft, warm cashmere beanie designed as a thoughtful gift. Minimalist fit with a heart-warm intention.",
    colors: ["Soft Pink", "Burgundy", "Cream"],
    sizes: ["One Size"],
    category: "Gifts",
    categorySlug: "gifts",
    image: "/soft-pink-cashmere-beanie-minimalist-elegant.jpg",
  },
  {
    id: "gift-2",
    name: "Wool Heart Cable Knit",
    price: 139,
    material: "100% Wool",
    description:
      "A classic cable knit sweater with subtle woven heart-inspired patterning—perfect for meaningful gifting.",
    colors: ["Charcoal", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Gifts",
    categorySlug: "gifts",
    image: "/cream-wool-cable-knit-sweater-heart-pattern-elegan.jpg",
  },
  {
    id: "gift-3",
    name: "Cashmere Gift Scarf",
    price: 119,
    material: "100% Cashmere",
    description:
      "Exceptionally soft scarf designed for gifting loved ones (or yourself). Delicate texture and timeless style.",
    colors: ["Deep Navy", "Soft Pink", "Light Grey"],
    sizes: ["One Size"],
    category: "Gifts",
    categorySlug: "gifts",
    isSpecial: true,
    image: "/navy-cashmere-scarf-luxury-gift-wrapped-elegant.jpg",
  },
  {
    id: "gift-4",
    name: "Cotton Relax Gift Set",
    price: 79,
    material: "100% Cotton",
    description:
      "A light, breathable two-piece set (top + mini wrap scarf) made for cozy moments. Perfect for care packages or thoughtful surprises.",
    colors: ["Sand", "Forest Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "Gifts",
    categorySlug: "gifts",
    image: "/sand-cotton-gift-set-top-scarf-elegant-package.jpg",
  },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isSpecial)
}
