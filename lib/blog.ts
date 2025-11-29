export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  category: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Sustainable Knitwear",
    slug: "art-of-sustainable-knitwear",
    excerpt:
      "Discover how we're crafting timeless pieces that respect both tradition and the environment. Learn about our commitment to sustainable materials and ethical production.",
    content: `
      <p>At Woolé, we believe that true luxury comes from harmony—between craftsmanship and sustainability, between tradition and innovation. Our journey toward sustainable knitwear began with a simple question: How can we create beautiful, lasting pieces while respecting our planet?</p>
      
      <h2>Our Material Philosophy</h2>
      <p>Every sweater in our collection starts with carefully selected materials. We work exclusively with natural fibers—wool, cashmere, and cotton—sourced from farms that prioritize animal welfare and environmental stewardship. These materials aren't just chosen for their softness and durability; they're selected because they're biodegradable and renewable.</p>
      
      <p>Our wool comes from small-scale farms where sheep are raised with care, ensuring both the animals' wellbeing and the quality of the fiber. Our cashmere is sourced from regions where traditional herding practices have been maintained for generations, supporting local communities while preserving ancient knowledge.</p>
      
      <h2>Ethical Production</h2>
      <p>Beyond materials, we're committed to ethical production practices. Our manufacturing partners share our values, ensuring fair wages, safe working conditions, and respect for traditional craftsmanship. Each piece is made with attention to detail that can only come from skilled artisans who take pride in their work.</p>
      
      <h2>Longevity Over Trends</h2>
      <p>Perhaps the most sustainable choice we make is designing for longevity. Our sweaters are timeless, not trendy. They're crafted to be cherished for years, even decades, rather than discarded after a season. This philosophy extends to our construction techniques—reinforced seams, quality finishes, and careful attention to fit ensure that each piece becomes a wardrobe staple.</p>
      
      <p>When you choose Woolé, you're not just buying a sweater. You're investing in a piece that tells a story of care, craftsmanship, and commitment to a better future.</p>
    `,
    author: "Sarah Chen",
    date: "2024-01-15",
    image: "/natural-wool-yarn-eco-friendly-sustainable-materia.jpg",
    category: "Sustainability",
    readTime: 5,
  },
  {
    id: "2",
    title: "Caring for Your Cashmere",
    slug: "caring-for-your-cashmere",
    excerpt:
      "Learn the secrets to keeping your cashmere sweaters soft, beautiful, and long-lasting. Expert tips on washing, storing, and maintaining your investment pieces.",
    content: `
      <p>Cashmere is one of the most luxurious natural fibers, known for its incredible softness and warmth. With proper care, a well-made cashmere sweater can last for decades, becoming even softer and more beautiful over time. Here's how to care for your cashmere pieces.</p>
      
      <h2>Washing Your Cashmere</h2>
      <p>Cashmere should be hand-washed in cool water using a gentle, pH-neutral detergent designed for delicate fabrics. Never use hot water or harsh detergents, as these can damage the fibers. Gently agitate the sweater in the water, then rinse thoroughly with cool water until the water runs clear.</p>
      
      <p>When removing the sweater from the water, support its weight to prevent stretching. Never wring or twist cashmere—instead, gently press out excess water. Lay the sweater flat on a clean towel, roll it up to absorb more moisture, then reshape it and lay it flat to dry away from direct heat or sunlight.</p>
      
      <h2>Storing Your Cashmere</h2>
      <p>Proper storage is crucial for maintaining your cashmere's shape and preventing damage. Always fold cashmere sweaters rather than hanging them, as hanging can cause stretching. Store them in a cool, dry place, ideally in a breathable storage bag or drawer with cedar blocks to deter moths.</p>
      
      <p>If you notice any pilling (small balls of fiber), gently remove them with a cashmere comb or a fabric shaver. This is normal and doesn't indicate poor quality—it's simply the nature of natural fibers.</p>
      
      <h2>Wearing Your Cashmere</h2>
      <p>To extend the life of your cashmere, avoid wearing it on consecutive days. Give it time to rest and return to its natural shape. Also, be mindful of jewelry or rough surfaces that might snag the delicate fibers.</p>
      
      <p>With these simple care practices, your cashmere pieces will remain beautiful companions for years to come.</p>
    `,
    author: "Maria Rodriguez",
    date: "2024-01-08",
    image: "/cream-cashmere-turtleneck-sweater-women-elegant-so.jpg",
    category: "Care Guide",
    readTime: 4,
  },
  {
    id: "3",
    title: "The Story Behind Our Knitting Workshop",
    slug: "story-behind-our-knitting-workshop",
    excerpt:
      "Meet the artisans who bring our designs to life. Take a journey into our workshop where traditional techniques meet modern design sensibilities.",
    content: `
      <p>Nestled in a small village where knitting traditions have been passed down through generations, our workshop is more than a production facility—it's a place where stories are woven into every stitch.</p>
      
      <h2>A Legacy of Craftsmanship</h2>
      <p>Our workshop was founded by master knitter Elena Petrov, whose grandmother taught her to knit when she was just five years old. That early introduction to the craft sparked a lifelong passion that eventually led to the creation of Woolé. Today, Elena's workshop employs local artisans who share her dedication to quality and tradition.</p>
      
      <p>Each sweater begins as a vision, translated into a pattern that respects both contemporary aesthetics and time-honored techniques. Our knitters work with their hands, feeling the yarn, adjusting tension, and ensuring every stitch is perfect. This hands-on approach means that no two pieces are exactly alike—each carries the subtle signature of its maker.</p>
      
      <h2>Modern Techniques, Traditional Values</h2>
      <p>While we honor traditional methods, we're not bound by them. Our workshop combines age-old techniques with modern quality control and ergonomic workspaces. This balance allows us to create pieces that are both authentic and consistent, traditional yet contemporary.</p>
      
      <p>We work in small batches, allowing our artisans to focus on quality over quantity. This approach means longer production times, but it also means that every sweater that leaves our workshop is a piece we're proud to put our name on.</p>
      
      <h2>The Human Touch</h2>
      <p>In an age of mass production, we believe in the value of the human touch. Every sweater is inspected by hand, every detail considered. Our artisans aren't just workers—they're craftspeople who take pride in creating something beautiful and lasting.</p>
      
      <p>When you wear a Woolé sweater, you're wearing a piece of this story—a connection to a tradition of craftsmanship that spans generations.</p>
    `,
    author: "Elena Petrov",
    date: "2024-01-01",
    image: "/cozy-knitting-workshop-warm-lighting-yarn-balls.jpg",
    category: "Our Story",
    readTime: 6,
  },
  {
    id: "4",
    title: "Choosing the Perfect Sweater for Every Season",
    slug: "choosing-perfect-sweater-every-season",
    excerpt:
      "Navigate the world of knitwear with confidence. Our guide helps you select the right sweater material, weight, and style for any season or occasion.",
    content: `
      <p>With so many options available, choosing the right sweater can feel overwhelming. But understanding a few key principles can help you build a collection that serves you year-round.</p>
      
      <h2>Understanding Materials</h2>
      <p>Different materials serve different purposes. Wool is excellent for cold weather—it's naturally insulating and moisture-wicking. Cashmere offers unparalleled softness and warmth-to-weight ratio, making it ideal for layering. Cotton is breathable and versatile, perfect for transitional seasons and milder climates.</p>
      
      <h2>Weight and Thickness</h2>
      <p>The weight of a sweater determines its warmth and versatility. Lightweight knits are perfect for layering and can be worn in spring and fall, or indoors during winter. Medium-weight sweaters are your workhorses—suitable for most conditions. Heavyweight knits are reserved for the coldest days and outdoor activities.</p>
      
      <h2>Style Considerations</h2>
      <p>Consider your lifestyle when choosing styles. Crewnecks are versatile and timeless. V-necks work well for layering over collared shirts. Turtlenecks offer extra warmth and a polished look. Cardigans provide flexibility—wear them open or closed, layered or alone.</p>
      
      <h2>Building Your Collection</h2>
      <p>Start with a few versatile pieces in neutral colors. A medium-weight wool crewneck in charcoal or cream can be dressed up or down. Add a cashmere piece for special occasions or when you want that extra touch of luxury. A cotton sweater is perfect for those in-between days.</p>
      
      <p>Remember, quality over quantity. A few well-chosen, well-made sweaters will serve you better than a closet full of fast fashion. Invest in pieces you'll love for years to come.</p>
    `,
    author: "James Wilson",
    date: "2023-12-20",
    image: "/elegant-man-wearing-cream-wool-sweater-minimalist.jpg",
    category: "Style Guide",
    readTime: 5,
  },
  {
    id: "5",
    title: "Why Natural Fibers Matter",
    slug: "why-natural-fibers-matter",
    excerpt:
      "Explore the benefits of choosing natural fibers over synthetic alternatives. From comfort to sustainability, discover why natural is always better.",
    content: `
      <p>In a world increasingly filled with synthetic materials, natural fibers offer benefits that go far beyond simple aesthetics. Here's why choosing natural matters.</p>
      
      <h2>Breathability and Comfort</h2>
      <p>Natural fibers like wool, cashmere, and cotton are breathable, allowing air to circulate and moisture to evaporate. This means you stay comfortable in a wider range of temperatures. Wool, in particular, has natural temperature-regulating properties—it keeps you warm when it's cold and cool when it's warm.</p>
      
      <h2>Durability and Longevity</h2>
      <p>Natural fibers are remarkably durable when properly cared for. A well-made wool sweater can last decades, becoming softer and more comfortable over time. Unlike synthetic materials that degrade with each wash, natural fibers maintain their integrity when cared for properly.</p>
      
      <h2>Environmental Impact</h2>
      <p>Natural fibers are biodegradable, meaning they'll break down naturally at the end of their life. Synthetic materials, on the other hand, can take hundreds of years to decompose and release microplastics into the environment. By choosing natural, you're making a choice that's better for the planet.</p>
      
      <h2>Health Benefits</h2>
      <p>Natural fibers are hypoallergenic and don't trap odors the way synthetic materials do. They're also less likely to cause skin irritation. Many people find that natural fibers feel better against their skin, especially those with sensitive skin.</p>
      
      <h2>The Investment Perspective</h2>
      <p>While natural fiber sweaters may cost more upfront, their longevity and timeless appeal make them a better investment over time. A quality wool sweater that lasts 20 years is far more economical than replacing synthetic sweaters every season.</p>
      
      <p>When you choose natural, you're choosing quality, comfort, and a more sustainable future.</p>
    `,
    author: "Sarah Chen",
    date: "2023-12-10",
    image: "/natural-wool-yarn-eco-friendly-sustainable-materia.jpg",
    category: "Sustainability",
    readTime: 4,
  },
]

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}


