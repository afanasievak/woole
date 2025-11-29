"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "en" | "bg"

type Translations = {
  [key: string]: string
}

const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    "nav.shop": "Shop",
    "nav.forHim": "For Him",
    "nav.forHer": "For Her",
    "nav.forKids": "For Kids",
    "nav.gifts": "Gifts",
    "nav.about": "About",
    "nav.delivery": "Delivery",
    "nav.contact": "Contact",

    // Hero
    "hero.subtitle": "Handcrafted with Love",
    "hero.title": "Wrapped in Comfort, Woven with Care",
    "hero.description":
      "Discover timeless pieces crafted from the finest wool, cashmere, and cotton. Every stitch tells a story of quality and a mother's love.",
    "hero.shopCollection": "Shop Collection",
    "hero.ourStory": "Our Story",

    // Value Props
    "values.sustainable.title": "Sustainable Materials",
    "values.sustainable.description": "Ethically sourced fibers from trusted suppliers worldwide",
    "values.crafted.title": "Crafted with Care",
    "values.crafted.description": "Every piece made by skilled artisans who love their craft",
    "values.shipping.title": "Free Shipping",
    "values.shipping.description": "Complimentary delivery on all orders over €100",
    "values.quality.title": "Quality Guaranteed",
    "values.quality.description": "Two-year warranty on all our knitwear pieces",

    // Categories
    "categories.title": "Shop by Category",
    "categories.subtitle": "Collections",

    // Featured Products
    "featured.title": "Special Pieces",
    "featured.subtitle": "Curated Selection",
    "featured.viewAll": "View All",
    "featured.viewAllProducts": "View All Products",

    // Newsletter
    "newsletter.title": "Join the Family",
    "newsletter.description":
      "Subscribe for exclusive offers, early access to new collections, and stories from our workshop.",
    "newsletter.placeholder": "Enter your email",
    "newsletter.subscribe": "Subscribe",
    "newsletter.thanks": "Thank you for subscribing!",

    // Footer
    "footer.description":
      "Timeless knitwear crafted from the finest natural fibers. Every piece tells a story of quality, comfort, and conscious craftsmanship.",
    "footer.shop": "Shop",
    "footer.allProducts": "All Products",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.ourStory": "Our Story",
    "footer.sustainability": "Sustainability",
    "footer.support": "Support",
    "footer.contact": "Contact",
    "footer.deliveryReturns": "Delivery & Returns",
    "footer.sizeGuide": "Size Guide",
    "footer.copyright": "All rights reserved. Crafted with care.",

    // Product Card
    "product.addToCart": "Add to Cart",
    "product.special": "Special",
    "product.from": "From",

    // Cart
    "cart.title": "Shopping Bag",
    "cart.empty": "Your bag is empty",
    "cart.emptyDescription": "Discover our collection and find something you'll love",
    "cart.startShopping": "Start Shopping",
    "cart.subtotal": "Subtotal",
    "cart.shipping": "Shipping",
    "cart.freeShipping": "Free",
    "cart.calculatedAtCheckout": "Calculated at checkout",
    "cart.total": "Total",
    "cart.checkout": "Checkout",
    "cart.continueShopping": "Continue Shopping",
    "cart.freeShippingProgress": "away from free shipping",
    "cart.freeShippingUnlocked": "You've unlocked free shipping!",
    "cart.remove": "Remove",

    // Checkout
    "checkout.title": "Checkout",
    "checkout.step.details": "Details",
    "checkout.step.shipping": "Shipping",
    "checkout.step.payment": "Payment",
    "checkout.shippingDetails": "Shipping Details",
    "checkout.email": "Email Address",
    "checkout.emailHelper": "We'll send your order confirmation here",
    "checkout.firstName": "First Name",
    "checkout.lastName": "Last Name",
    "checkout.address": "Street Address",
    "checkout.city": "City",
    "checkout.postalCode": "Postal Code",
    "checkout.country": "Country",
    "checkout.phone": "Phone Number",
    "checkout.phoneHelper": "For delivery updates only",
    "checkout.saveInfo": "Save this information for next time",
    "checkout.continueToShipping": "Continue to Shipping",
    "checkout.shippingMethod": "Shipping Method",
    "checkout.freeShippingNotice": "Your order qualifies for free standard shipping!",
    "checkout.standard": "Standard Shipping",
    "checkout.standardTime": "5-7 business days",
    "checkout.express": "Express Shipping",
    "checkout.expressTime": "2-3 business days",
    "checkout.expressDescription": "Priority handling & faster delivery",
    "checkout.freeOnOrder": "Free on your order!",
    "checkout.freeOver": "Free on orders over €100",
    "checkout.giftOptions": "Gift Options",
    "checkout.giftWrap": "Add gift wrapping (Free)",
    "checkout.giftWrapDescription": "Your items will be beautifully wrapped in our eco-friendly packaging",
    "checkout.giftMessage": "Gift Message (optional)",
    "checkout.giftMessagePlaceholder": "Add a personal message...",
    "checkout.back": "Back",
    "checkout.continueToPayment": "Continue to Payment",
    "checkout.paymentMethod": "Payment Method",
    "checkout.card": "Credit / Debit Card",
    "checkout.cardDescription": "Visa, Mastercard, Maestro",
    "checkout.paypal": "PayPal",
    "checkout.paypalDescription": "Pay with your PayPal account",
    "checkout.applepay": "Apple Pay",
    "checkout.applepayDescription": "Quick and secure checkout",
    "checkout.googlepay": "Google Pay",
    "checkout.googlepayDescription": "Fast checkout with Google",
    "checkout.revolut": "Revolut Pay",
    "checkout.revolutDescription": "Pay instantly with Revolut",
    "checkout.bank": "Bank Transfer (SEPA)",
    "checkout.bankDescription": "Direct bank transfer within Europe",
    "checkout.bankNote":
      "After placing your order, you'll receive our SEPA bank details via email. Your order will be processed once we receive the payment.",
    "checkout.securePayment": "Your payment is secured with SSL encryption. We never store your card details.",
    "checkout.placeOrder": "Place Order",
    "checkout.cardNumber": "Card Number",
    "checkout.expiry": "Expiry Date",
    "checkout.cvv": "CVV",
    "checkout.cardName": "Name on Card",
    "checkout.orderSummary": "Order Summary",
    "checkout.emptyBag": "Your bag is empty",
    "checkout.emptyBagDescription": "Add some items to your bag to checkout",
    "checkout.orderConfirmed": "Order Confirmed!",
    "checkout.orderConfirmedDescription": "Thank you for your order. We've sent a confirmation email to",
    "checkout.shippingFrom":
      "Your handcrafted items will be carefully prepared and shipped from our studio in Varna, Bulgaria.",
    "checkout.backToHome": "Back to Home",

    // Product Detail
    "productDetail.color": "Color",
    "productDetail.size": "Size",
    "productDetail.material": "Material",
    "productDetail.description": "Description",
    "productDetail.addedToBag": "Added to your bag!",
    "productDetail.freeShipping": "Free shipping over €100",
    "productDetail.easyReturns": "14-day easy returns",
    "productDetail.securePayment": "Secure payment",
    "productDetail.youMayAlsoLike": "You May Also Like",

    // About Page
    "about.title": "Our Story",
    "about.subtitle": "About Us",

    // Contact Page
    "contact.title": "Get in Touch",
    "contact.subtitle": "Contact Us",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sent": "Message Sent!",
    "contact.sentDescription": "Thank you for reaching out. We'll get back to you within 24-48 hours.",
    "contact.info": "Contact Information",
    "contact.hours": "Business Hours",
    "contact.followUs": "Follow Us",

    // Delivery Page
    "delivery.title": "Delivery & Returns",
    "delivery.subtitle": "Shipping Information",

    // Shop Page
    "shop.title": "All Products",
    "shop.filter": "Filter",
    "shop.sortBy": "Sort by",
    "shop.sortFeatured": "Featured",
    "shop.sortPriceLow": "Price: Low to High",
    "shop.sortPriceHigh": "Price: High to Low",
    "shop.sortNewest": "Newest",
    "shop.material": "Material",
    "shop.allMaterials": "All Materials",
    "shop.products": "products",

    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.close": "Close",
    "common.openMenu": "Open menu",
    "common.shoppingCart": "Shopping cart",
  },
  bg: {
    // Navigation
    "nav.shop": "Магазин",
    "nav.forHim": "За Него",
    "nav.forHer": "За Нея",
    "nav.forKids": "За Деца",
    "nav.gifts": "Подаръци",
    "nav.about": "За Нас",
    "nav.delivery": "Доставка",
    "nav.contact": "Контакти",

    // Hero
    "hero.subtitle": "Изработено с Любов",
    "hero.title": "Обгърнати в Комфорт, Изплетени с Грижа",
    "hero.description":
      "Открийте вечни изделия, изработени от най-фин вълна, кашмир и памук. Всеки бод разказва история за качество и майчина любов.",
    "hero.shopCollection": "Разгледай Колекцията",
    "hero.ourStory": "Нашата История",

    // Value Props
    "values.sustainable.title": "Устойчиви Материали",
    "values.sustainable.description": "Етично добити влакна от доверени доставчици по света",
    "values.crafted.title": "Изработено с Грижа",
    "values.crafted.description": "Всяко изделие е създадено от опитни занаятчии",
    "values.shipping.title": "Безплатна Доставка",
    "values.shipping.description": "Безплатна доставка за поръчки над €100",
    "values.quality.title": "Гарантирано Качество",
    "values.quality.description": "Двугодишна гаранция за всички плетени изделия",

    // Categories
    "categories.title": "Пазарувай по Категория",
    "categories.subtitle": "Колекции",

    // Featured Products
    "featured.title": "Специални Изделия",
    "featured.subtitle": "Подбрана Селекция",
    "featured.viewAll": "Виж Всички",
    "featured.viewAllProducts": "Виж Всички Продукти",

    // Newsletter
    "newsletter.title": "Присъедини се към Семейството",
    "newsletter.description":
      "Абонирай се за ексклузивни оферти, ранен достъп до нови колекции и истории от нашата работилница.",
    "newsletter.placeholder": "Въведи имейл",
    "newsletter.subscribe": "Абонирай се",
    "newsletter.thanks": "Благодарим за абонамента!",

    // Footer
    "footer.description":
      "Вечни плетива, изработени от най-фини естествени влакна. Всяко изделие разказва история за качество, комфорт и съзнателно майсторство.",
    "footer.shop": "Магазин",
    "footer.allProducts": "Всички Продукти",
    "footer.company": "Компания",
    "footer.aboutUs": "За Нас",
    "footer.ourStory": "Нашата История",
    "footer.sustainability": "Устойчивост",
    "footer.support": "Поддръжка",
    "footer.contact": "Контакти",
    "footer.deliveryReturns": "Доставка и Връщане",
    "footer.sizeGuide": "Таблица с Размери",
    "footer.copyright": "Всички права запазени. Изработено с грижа.",

    // Product Card
    "product.addToCart": "Добави в Кошницата",
    "product.special": "Специално",
    "product.from": "От",

    // Cart
    "cart.title": "Пазарска Чанта",
    "cart.empty": "Чантата ви е празна",
    "cart.emptyDescription": "Разгледайте нашата колекция и намерете нещо, което ще харесате",
    "cart.startShopping": "Започни Пазаруване",
    "cart.subtotal": "Междинна сума",
    "cart.shipping": "Доставка",
    "cart.freeShipping": "Безплатно",
    "cart.calculatedAtCheckout": "Изчислява се при плащане",
    "cart.total": "Общо",
    "cart.checkout": "Към Плащане",
    "cart.continueShopping": "Продължи Пазаруването",
    "cart.freeShippingProgress": "до безплатна доставка",
    "cart.freeShippingUnlocked": "Отключихте безплатна доставка!",
    "cart.remove": "Премахни",

    // Checkout
    "checkout.title": "Плащане",
    "checkout.step.details": "Данни",
    "checkout.step.shipping": "Доставка",
    "checkout.step.payment": "Плащане",
    "checkout.shippingDetails": "Данни за Доставка",
    "checkout.email": "Имейл Адрес",
    "checkout.emailHelper": "Ще изпратим потвърждение тук",
    "checkout.firstName": "Име",
    "checkout.lastName": "Фамилия",
    "checkout.address": "Адрес",
    "checkout.city": "Град",
    "checkout.postalCode": "Пощенски Код",
    "checkout.country": "Държава",
    "checkout.phone": "Телефонен Номер",
    "checkout.phoneHelper": "Само за актуализации по доставката",
    "checkout.saveInfo": "Запази информацията за следващ път",
    "checkout.continueToShipping": "Продължи към Доставка",
    "checkout.shippingMethod": "Метод на Доставка",
    "checkout.freeShippingNotice": "Вашата поръчка се квалифицира за безплатна стандартна доставка!",
    "checkout.standard": "Стандартна Доставка",
    "checkout.standardTime": "5-7 работни дни",
    "checkout.express": "Експресна Доставка",
    "checkout.expressTime": "2-3 работни дни",
    "checkout.expressDescription": "Приоритетна обработка и по-бърза доставка",
    "checkout.freeOnOrder": "Безплатно за вашата поръчка!",
    "checkout.freeOver": "Безплатно за поръчки над €100",
    "checkout.giftOptions": "Опции за Подарък",
    "checkout.giftWrap": "Добави подаръчна опаковка (Безплатно)",
    "checkout.giftWrapDescription": "Вашите артикули ще бъдат красиво опаковани в екологична опаковка",
    "checkout.giftMessage": "Подаръчно Съобщение (незадължително)",
    "checkout.giftMessagePlaceholder": "Добавете лично съобщение...",
    "checkout.back": "Назад",
    "checkout.continueToPayment": "Продължи към Плащане",
    "checkout.paymentMethod": "Метод на Плащане",
    "checkout.card": "Кредитна / Дебитна Карта",
    "checkout.cardDescription": "Visa, Mastercard, Maestro",
    "checkout.paypal": "PayPal",
    "checkout.paypalDescription": "Плати с PayPal акаунт",
    "checkout.applepay": "Apple Pay",
    "checkout.applepayDescription": "Бързо и сигурно плащане",
    "checkout.googlepay": "Google Pay",
    "checkout.googlepayDescription": "Бързо плащане с Google",
    "checkout.revolut": "Revolut Pay",
    "checkout.revolutDescription": "Плати моментално с Revolut",
    "checkout.bank": "Банков Превод (SEPA)",
    "checkout.bankDescription": "Директен банков превод в Европа",
    "checkout.bankNote":
      "След поръчката ще получите нашите SEPA банкови данни по имейл. Поръчката ще бъде обработена след получаване на плащането.",
    "checkout.securePayment": "Плащането ви е защитено със SSL криптиране. Никога не съхраняваме данни от картата ви.",
    "checkout.placeOrder": "Потвърди Поръчката",
    "checkout.cardNumber": "Номер на Карта",
    "checkout.expiry": "Валидност",
    "checkout.cvv": "CVV",
    "checkout.cardName": "Име на Картата",
    "checkout.orderSummary": "Обобщение на Поръчката",
    "checkout.emptyBag": "Чантата ви е празна",
    "checkout.emptyBagDescription": "Добавете артикули в чантата, за да продължите",
    "checkout.orderConfirmed": "Поръчката е Потвърдена!",
    "checkout.orderConfirmedDescription": "Благодарим за поръчката. Изпратихме потвърждение на",
    "checkout.shippingFrom":
      "Ръчно изработените ви артикули ще бъдат внимателно подготвени и изпратени от нашето студио във Варна, България.",
    "checkout.backToHome": "Към Началото",

    // Product Detail
    "productDetail.color": "Цвят",
    "productDetail.size": "Размер",
    "productDetail.material": "Материал",
    "productDetail.description": "Описание",
    "productDetail.addedToBag": "Добавено в чантата!",
    "productDetail.freeShipping": "Безплатна доставка над €100",
    "productDetail.easyReturns": "14-дневно лесно връщане",
    "productDetail.securePayment": "Сигурно плащане",
    "productDetail.youMayAlsoLike": "Може Също Да Харесате",

    // About Page
    "about.title": "Нашата История",
    "about.subtitle": "За Нас",

    // Contact Page
    "contact.title": "Свържете се с Нас",
    "contact.subtitle": "Контакти",
    "contact.name": "Вашето Име",
    "contact.email": "Вашият Имейл",
    "contact.subject": "Тема",
    "contact.message": "Съобщение",
    "contact.send": "Изпрати Съобщение",
    "contact.sent": "Съобщението е Изпратено!",
    "contact.sentDescription": "Благодарим, че се свързахте. Ще ви отговорим до 24-48 часа.",
    "contact.info": "Информация за Контакт",
    "contact.hours": "Работно Време",
    "contact.followUs": "Последвайте ни",

    // Delivery Page
    "delivery.title": "Доставка и Връщане",
    "delivery.subtitle": "Информация за Доставка",

    // Shop Page
    "shop.title": "Всички Продукти",
    "shop.filter": "Филтър",
    "shop.sortBy": "Сортирай по",
    "shop.sortFeatured": "Препоръчани",
    "shop.sortPriceLow": "Цена: Ниска към Висока",
    "shop.sortPriceHigh": "Цена: Висока към Ниска",
    "shop.sortNewest": "Най-нови",
    "shop.material": "Материал",
    "shop.allMaterials": "Всички Материали",
    "shop.products": "продукти",

    // Common
    "common.loading": "Зареждане...",
    "common.error": "Нещо се обърка",
    "common.close": "Затвори",
    "common.openMenu": "Отвори меню",
    "common.shoppingCart": "Пазарска количка",
  },
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "bg")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
