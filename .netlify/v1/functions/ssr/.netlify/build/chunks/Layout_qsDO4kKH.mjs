import { c as createComponent, a as createAstro, b as addAttribute, r as renderTemplate, m as maybeRenderHead, g as defineScriptVars, e as renderComponent, f as renderSlot, d as renderHead, F as Fragment } from './astro/server_-WQNH1EB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const site$1 = {
	title: "nisa - Not for every eye",
	description: "A fashion e-commerce website for modest women's clothing."
};
const navigation$1 = {
	home: "Home",
	shop: "Shop",
	about: "About",
	contact: "Contact"
};
const footer$1 = {
	copyright: "© 2026 nisa. All rights reserved.",
	tagline: "Elegance in Modesty. Not for every eye."
};
const home$1 = {
	hero: {
		title: "nisa",
		subtitle: "Not for every eye"
	},
	featuredCollection: {
		title: "Featured Collection",
		buttonText: "Shop The Full Collection"
	},
	collectionBanner: {
		title: "THE COLLECTION",
		subtitle: "Quiet luxury designed for everyday elegance.",
		buttonText: "EXPLORE"
	},
	story: {
		title: "Twice as Cozy",
		subtitle: "Our collections prioritize premium natural fabrics and relaxed silhouettes designed to offer effortless confidence and movement.",
		buttonText: "Our Philosophy"
	}
};
const about$1 = {
	title: "Our Story",
	content: "nisa was born from a desire to blend timeless modesty with contemporary elegance. We believe that style should be an expression of self, and for many women, that expression includes a commitment to modest dress. Our brand is a celebration of this choice, offering beautifully crafted pieces that are both sophisticated and empowering. The name 'nisa', meaning 'women' in Arabic, is at the core of our mission: to serve and uplift women through fashion that resonates with their values."
};
const contact$1 = {
	title: "Get In Touch",
	form: {
		name: "Name",
		email: "Email",
		message: "Message",
		submit: "Send Message",
		success: "Your message has been sent!",
		error: "Oops! There was a problem submitting your form"
	}
};
const shop$1 = {
	title: "New Arrivals",
	description: "Explore our latest collection of modest wear, featuring elegant abayas and refined sets crafted for the modern woman.",
	categories: {
		"summer-collection": "Summer Collection",
		"winter-collection": "Winter Collection",
		"autumn-collection": "Autumn Collection"
	}
};
const product$1 = {
	price: "Price",
	color: "Color",
	size: "Size",
	sizeGuide: "Size Guide",
	addToCart: "Add to Cart",
	soldOut: "Sold Out",
	comingSoon: "Coming Soon",
	details: "Details",
	detailsFit: "Details & Fit",
	fabric: "Fabric",
	fit: "Fit",
	care: "Care",
	hassleFreeReturns: "Hassle-Free Returns",
	securePayments: "Secure Payments",
	qualityFabrics: "Quality Fabrics"
};
const checkout$1 = {
	title: "Checkout",
	subtitle: "Complete your purchase",
	contactInfo: "Contact Information",
	email: "Email Address",
	phone: "Phone Number",
	shippingAddress: "Shipping Address",
	fullName: "Full Name",
	streetAddress: "Street Address",
	apartment: "Apartment, suite, etc. (optional)",
	city: "City",
	governorate: "Governorate",
	deliveryInstructions: "Landmark or special delivery instructions",
	orderSummary: "Order Summary",
	subtotal: "Subtotal",
	shipping: "Shipping",
	savings: "Savings",
	total: "Total",
	placeOrder: "Place Order",
	emptyCart: "Your cart is empty."
};
const cart$1 = {
	title: "Your Cart",
	empty: "Your cart is empty.",
	subtotal: "Subtotal",
	proceedToCheckout: "Proceed to Checkout",
	quantity: "Qty",
	remove: "Remove"
};
const thankYou$1 = {
	title: "Thank You!",
	message: "Your order has been placed successfully.",
	continueShopping: "Continue Shopping"
};
const sizeGuide$1 = {
	title: "Size Guide",
	subtitle: "All measurements are in centimeters (cm).",
	size: "Size",
	bust: "Bust",
	waist: "Waist",
	hips: "Hips"
};
const productCard$1 = {
	details: "Details",
	addToCart: "Add to Cart",
	soldOut: "Sold Out",
	comingSoon: "Coming Soon"
};
const common$1 = {
	search: "Search",
	language: "Language",
	english: "English",
	arabic: "Arabic"
};
const mobileNav$1 = {
	shop: "Shop",
	collections: "Collections",
	account: "Account",
	cart: "Cart"
};
const filterSort$1 = {
	filters: "Filters",
	sortBy: "Sort By",
	collections: "Collections",
	sizes: "Sizes",
	colors: "Colors",
	priceRange: "Price Range",
	minPrice: "Min Price (LE)",
	maxPrice: "Max Price (LE)",
	inStockOnly: "In Stock Only",
	hideOutOfStock: "Hide out of stock items",
	clearAll: "Clear All",
	applyFilters: "Apply Filters",
	types: "Product Types",
	dresses: "Dresses",
	bottom: "Bottom",
	set: "Set",
	"default": "Default / Featured",
	priceAsc: "Price: Low to High",
	priceDesc: "Price: High to Low",
	nameAsc: "Name: A to Z",
	nameDesc: "Name: Z to A",
	noProducts: "No products match the selected filters."
};
const en = {
	site: site$1,
	navigation: navigation$1,
	footer: footer$1,
	home: home$1,
	about: about$1,
	contact: contact$1,
	shop: shop$1,
	product: product$1,
	checkout: checkout$1,
	cart: cart$1,
	thankYou: thankYou$1,
	sizeGuide: sizeGuide$1,
	productCard: productCard$1,
	common: common$1,
	mobileNav: mobileNav$1,
	filterSort: filterSort$1
};

const site = {
	title: "نيسا - ليس لكل عين",
	description: "موقع تجارة إلكترونية للأزياء للملابس النسائية المحتشمة."
};
const navigation = {
	home: "الرئيسية",
	shop: "المتجر",
	about: "من نحن",
	contact: "اتصل بنا"
};
const footer = {
	copyright: "© 2026 نيسا. جميع الحقوق محفوظة.",
	tagline: "أناقة في الاحتشام. ليس لكل عين."
};
const home = {
	hero: {
		title: "نيسا",
		subtitle: "ليس لكل عين"
	},
	featuredCollection: {
		title: "المجموعة المميزة",
		buttonText: "تسوق المجموعة الكاملة"
	},
	collectionBanner: {
		title: "المجموعة",
		subtitle: "فخامة هادئة مصممة للأناقة اليومية.",
		buttonText: "اكتشف"
	},
	story: {
		title: "أناقة ودفء",
		subtitle: "تمنح مجموعاتنا الأولوية للأقمشة الطبيعية الفاخرة والقصات المريحة المصممة لتوفير الثقة والحركة دون عناء.",
		buttonText: "فلسفتنا"
	}
};
const about = {
	title: "قصتنا",
	content: "ولدت نيسا من رغبة في المزج بين الاحتشام الخالدة والأناقة العصرية. نؤمن بأن الأناقة يجب أن تكون تعبيراً عن الذات، وللكثير من النساء، يشمل هذا التعبير التزاماً بالملابس المحتشمة. علامتنا التجارية تحتفل بهذا الخيار، وتقدم قطعاً مصممة بدقة تجمع بين الرقي والتمكين. اسم 'نيسا'، الذي يعني 'النساء' بالعربية، هو جوهر مهمتنا: خدمة وتمكين النساء من خلال أزياء تلامس قيمهن."
};
const contact = {
	title: "تواصل معنا",
	form: {
		name: "الاسم",
		email: "البريد الإلكتروني",
		message: "الرسالة",
		submit: "إرسال الرسالة",
		success: "تم إرسال رسالتك بنجاح!",
		error: "عذراً! حدث خطأ أثناء إرسال النموذج"
	}
};
const shop = {
	title: "وصلنا حديثاً",
	description: "اكتشفي أحدث مجموعاتنا من الملابس المحتشمة، والتي تضم عبايات أنيقة وأطقم راقية مصممة للمرأة العصرية.",
	categories: {
		"summer-collection": "مجموعة الصيف",
		"winter-collection": "مجموعة الشتاء",
		"autumn-collection": "مجموعة الخريف"
	}
};
const product = {
	price: "السعر",
	color: "اللون",
	size: "المقاس",
	sizeGuide: "دليل المقاسات",
	addToCart: "أضف للسلة",
	soldOut: "نفذت الكمية",
	comingSoon: "قريباً",
	details: "التفاصيل",
	detailsFit: "التفاصيل والمقاس",
	fabric: "القماش",
	fit: "المقاس",
	care: "العناية",
	hassleFreeReturns: "إرجاع سهل",
	securePayments: "مدفوعات آمنة",
	qualityFabrics: "أقمشة عالية الجودة"
};
const checkout = {
	title: "إتمام الطلب",
	subtitle: "أكمل عملية الشراء",
	contactInfo: "معلومات التواصل",
	email: "عنوان البريد الإلكتروني",
	phone: "رقم الهاتف",
	shippingAddress: "عنوان الشحن",
	fullName: "الاسم الكامل",
	streetAddress: "عنوان الشارع",
	apartment: "الشقة، الجناح، إلخ (اختياري)",
	city: "المدينة",
	governorate: "المحافظة",
	deliveryInstructions: "معلم أو تعليمات توصيل خاصة",
	orderSummary: "ملخص الطلب",
	subtotal: "المجموع الفرعي",
	shipping: "الشحن",
	savings: "التوفير",
	total: "الإجمالي",
	placeOrder: "تقديم الطلب",
	emptyCart: "سلتك فارغة."
};
const cart = {
	title: "سلتك",
	empty: "سلتك فارغة.",
	subtotal: "المجموع الفرعي",
	proceedToCheckout: "الانتقال للدفع",
	quantity: "الكمية",
	remove: "إزالة"
};
const thankYou = {
	title: "شكراً لك!",
	message: "تم تقديم طلبك بنجاح.",
	continueShopping: "مواصلة التسوق"
};
const sizeGuide = {
	title: "دليل المقاسات",
	subtitle: "جميع القياسات بالسنتيمتر (سم).",
	size: "المقاس",
	bust: "الصدر",
	waist: "الخصر",
	hips: "الوركين"
};
const productCard = {
	details: "التفاصيل",
	addToCart: "أضف للسلة",
	soldOut: "نفذت الكمية",
	comingSoon: "قريباً"
};
const common = {
	search: "بحث",
	language: "اللغة",
	english: "الإنجليزية",
	arabic: "العربية"
};
const mobileNav = {
	shop: "المتجر",
	collections: "المجموعات",
	account: "الحساب",
	cart: "السلة"
};
const filterSort = {
	filters: "الفلاتر",
	sortBy: "ترتيب حسب",
	collections: "المجموعات",
	sizes: "المقاسات",
	colors: "الألوان",
	priceRange: "نطاق السعر",
	minPrice: "أقل سعر (ج.م)",
	maxPrice: "أعلى سعر (ج.م)",
	inStockOnly: "المتوفر في المخزن فقط",
	hideOutOfStock: "إخفاء المنتجات غير المتوفرة",
	clearAll: "مسح الكل",
	applyFilters: "تطبيق الفلاتر",
	types: "نوع المنتج",
	dresses: "فساتين",
	bottom: "بنطلونات وتنانير",
	set: "أطقم",
	"default": "الافتراضي / المميز",
	priceAsc: "السعر: من الأقل للأعلى",
	priceDesc: "السعر: من الأعلى للأقل",
	nameAsc: "الاسم: أ إلى ي",
	nameDesc: "الاسم: ي إلى أ",
	noProducts: "لا توجد منتجات تطابق الفلاتر المحددة."
};
const ar = {
	site: site,
	navigation: navigation,
	footer: footer,
	home: home,
	about: about,
	contact: contact,
	shop: shop,
	product: product,
	checkout: checkout,
	cart: cart,
	thankYou: thankYou,
	sizeGuide: sizeGuide,
	productCard: productCard,
	common: common,
	mobileNav: mobileNav,
	filterSort: filterSort
};

const locales = ["en", "ar"];
const defaultLocale = "en";
const translations = {
  en,
  ar
};
function getTranslation(locale) {
  return translations[locale] || translations[defaultLocale];
}
function t(locale, key) {
  const translation = getTranslation(locale);
  const keys = key.split(".");
  let value = translation;
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  return typeof value === "string" ? value : key;
}
function isRTL(locale) {
  return locale === "ar";
}

const $$Astro$3 = createAstro();
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Seo;
  const { title, description, image = "/placeholder-social.jpg", locale } = Astro2.props;
  const canonicalPath = Astro2.url.pathname;
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(new URL(canonicalPath, Astro2.url), "href")}>${locales.map((l) => renderTemplate`<link rel="alternate"${addAttribute(l, "hreflang")}${addAttribute(new URL(canonicalPath.replace(`/${locale}/`, `/${l}/`), Astro2.url), "href")}>`)}<link rel="alternate" hreflang="x-default"${addAttribute(new URL(canonicalPath.replace(`/${locale}/`, "/en/"), Astro2.url), "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="og:locale"${addAttribute(locale === "ar" ? "ar_AR" : "en_US", "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">`;
}, "C:/Users/HP/Desktop/nisa-website/src/components/Seo.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { locale } = Astro2.props;
  const navItems = [
    { key: "home", href: `/${locale}/` },
    { key: "shop", href: `/${locale}/shop/` },
    { key: "about", href: `/${locale}/about/` },
    { key: "contact", href: `/${locale}/contact/` }
  ];
  const otherLocale = locales.find((l) => l !== locale) || "en";
  return renderTemplate`${maybeRenderHead()}<header class="bg-white/80 dark:bg-[#081622]/90 backdrop-blur-lg sticky top-0 z-40 border-b border-[#D4E4E8] dark:border-[#1b456b]"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-20"> <a${addAttribute(`/${locale}/`, "href")} class="flex items-center space-x-2 text-4xl font-medium tracking-wider"> <img src="/assets/logo/asset-2-8-68f93a3e091c5.webp" alt="nisa logo" class="h-12 dark:brightness-0 dark:invert"> </a> <nav class="hidden md:flex items-center gap-6"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-lg relative py-1 hover:text-[#6B7B8C] dark:hover:text-[#3182ce] transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#204566] dark:after:bg-[#3182ce] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">${t(locale, `navigation.${item.key}`)}</a>`)} <button id="theme-toggle-desktop" onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95" aria-label="Toggle theme"> <svg class="w-5 h-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> <svg class="w-5 h-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> </button> <a${addAttribute(`/${otherLocale}/`, "href")} class="text-sm border border-[#1b456b] dark:border-[#3182ce] rounded px-3 py-1 hover:bg-[#1b456b] dark:hover:bg-[#3182ce] hover:text-white transition-all hover:scale-105"> ${t(locale, otherLocale === "ar" ? "common.arabic" : "common.english")} </a> </nav> <div class="flex items-center gap-3"> <button id="theme-toggle" onclick="toggleTheme()" class="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95" aria-label="Toggle theme"> <svg class="w-5 h-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> <svg class="w-5 h-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> </button> <a${addAttribute(`/${otherLocale}/`, "href")} class="text-sm border border-[#1b456b] dark:border-[#3182ce] rounded px-3 py-1 hover:bg-[#1b456b] dark:hover:bg-[#3182ce] hover:text-white transition-all hover:scale-105 md:hidden"> ${t(locale, otherLocale === "ar" ? "common.arabic" : "common.english")} </a> <button id="cart-button" class="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 active:scale-95"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> <span id="cart-count" class="absolute -top-1 -right-1 bg-[#BEE2E8] text-[#1b456b] text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center cart-count" style="display: none;">0</span> </button> <button id="mobile-menu-button" class="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110 active:scale-90"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> </button> </div> </div> </div> <div id="mobile-menu" class="hidden md:hidden px-4 pb-4 space-y-2"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block text-lg hover:text-[#6B7B8C] dark:hover:text-[#3182ce] transition-colors">${t(locale, `navigation.${item.key}`)}</a>`)} <button onclick="toggleTheme()" class="block text-lg hover:text-[#6B7B8C] dark:hover:text-[#3182ce] transition-colors w-full text-left"> <span class="dark:hidden">${t(locale, "common.arabic")} Theme</span> <span class="hidden dark:inline">${t(locale, "common.english")} Theme</span> </button> </div> </header>`;
}, "C:/Users/HP/Desktop/nisa-website/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { locale } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-[#D4E4E8] dark:border-[#1b456b] mt-16"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="text-center text-[#6B7B8C] dark:text-[#94a3b8]"> <p>${t(locale, "footer.copyright")}</p> <p class="mt-2 text-sm">${t(locale, "footer.tagline")}</p> </div> </div> </footer>`;
}, "C:/Users/HP/Desktop/nisa-website/src/components/Footer.astro", void 0);

let productRepositoryInstances = {
  en: null,
  ar: null
};
let contentRepositoryInstance = null;
let shippingRepositoryInstance = null;
async function loadJsonProductRepository(locale) {
  const { JsonProductRepository } = await import('./json-product-repository_sUSzeI91.mjs');
  return new JsonProductRepository(locale);
}
async function loadJsonContentRepository() {
  const { JsonContentRepository } = await import('./json-content-repository_CdeR37bN.mjs');
  return new JsonContentRepository();
}
async function loadJsonShippingRepository() {
  const { JsonShippingRepository } = await import('./json-shipping-repository_DVHU46sw.mjs');
  return new JsonShippingRepository();
}
async function getProductRepository(locale = "en") {
  if (!productRepositoryInstances[locale]) {
    productRepositoryInstances[locale] = await loadJsonProductRepository(locale);
  }
  return productRepositoryInstances[locale];
}
async function getContentRepository() {
  if (!contentRepositoryInstance) {
    contentRepositoryInstance = await loadJsonContentRepository();
  }
  return contentRepositoryInstance;
}
async function getShippingRepository() {
  if (!shippingRepositoryInstance) {
    shippingRepositoryInstance = await loadJsonShippingRepository();
  }
  return shippingRepositoryInstance;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = t(Astro2.props.locale, "site.title"),
    description = t(Astro2.props.locale, "site.description"),
    locale
  } = Astro2.props;
  const productRepo = await getProductRepository(locale);
  const shippingRepo = await getShippingRepository();
  const productsList = await productRepo.getAll();
  const shippingRates = await shippingRepo.getAllRates();
  const rtl = isRTL(locale);
  const pathname = Astro2.url.pathname;
  const isShop = pathname.includes("/shop");
  const isHome = !isShop && !pathname.includes("/contact") && !pathname.includes("/about");
  pathname.includes("/contact");
  const isAbout = pathname.includes("/about");
  return renderTemplate(_a || (_a = __template(["<html", "", "> <head>", "", "<script>\n        (function() {\n            const theme = localStorage.getItem('nisa-theme') || 'light';\n            if (theme === 'dark') document.documentElement.classList.add('dark');\n        })();\n    <\/script>", '</head> <body class="antialiased"', '> <div id="toast" class="fixed bottom-5 right-5 text-white py-2 px-4 rounded-lg shadow-md hidden" style="z-index: 9999;"> <span id="toast-message"></span> </div> ', ' <main class="pb-20 md:pb-0"> ', " </main> ", ' <!-- Sticky Bottom Navigation for Mobile --> <div class="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#081622]/95 backdrop-blur-md border-t border-[#D4E4E8] dark:border-[#1b456b] z-40 md:hidden flex justify-around items-center py-2 px-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_12px_rgba(0,0,0,0.3)]"> <a', "", '> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> <span class="scale-90 origin-top uppercase">', "</span> </a> <a", "", '> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg> <span class="scale-90 origin-top uppercase">', "</span> </a> <a", "", '> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span class="scale-90 origin-top uppercase">', '</span> </a> <button id="cart-button-mobile" class="flex-1 flex flex-col items-center gap-1 text-[10px] font-medium tracking-wider transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-[#6B7B8C] dark:text-[#94a3b8] focus:outline-none py-1"> <div class="relative"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> <span class="absolute -top-2 -right-2 bg-[#BEE2E8] text-[#1b456b] text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center cart-count" style="display: none;">0</span> </div> <span class="scale-90 origin-top uppercase">', '</span> </button> </div> <!-- Cart Drawer --> <div id="cart-drawer-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden"></div> <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-[#0e2537] z-50 transform translate-x-full"> <div class="flex flex-col h-full"> <div class="flex items-center justify-between p-6 border-b border-[#D4E4E8] dark:border-[#1b456b]"> <h2 class="text-2xl font-medium" id="cart-drawer-title">', '</h2> <button id="close-cart-button" class="text-3xl">&times;</button> </div> <div id="cart-items" class="flex-grow p-6 overflow-y-auto"> <p class="text-center text-[#6B7B8C] dark:text-[#94a3b8]">', '</p> </div> <div class="p-6 border-t border-[#D4E4E8] dark:border-[#1b456b]"> <div class="flex justify-between items-center text-xl font-medium mb-4"> <span>', '</span> <span id="cart-subtotal">EGP 0</span> </div> <button id="checkoutBtn" class="w-full"> <svg style="width:24px;height:24px" viewBox="0 0 24 24" id="cart"> <path fill="#fff" d="M17,18A2,2 0 0,1 19,20A2,2,0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"></path> </svg> <span>', '</span> <svg id="check" style="width:24px;height:24px" viewBox="0 0 24 24"> <path stroke-width="2" fill="none" stroke="#ffffff" d="M 3,12 l 6,6 l 12, -12"></path> </svg> </button> </div> </div> </div> <!-- Size Guide Modal --> <div id="size-guide-modal-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden"></div> <div id="size-guide-modal" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#0e2537] shadow-2xl z-50 rounded-lg p-8 w-11/12 max-w-2xl hidden"> <button id="close-size-guide-button" class="absolute top-4 right-4 text-3xl">&times;</button> <h2 class="text-2xl font-medium mb-4 text-center">', '</h2> <p class="text-center text-[#6B7B8C] dark:text-[#94a3b8] mb-6">', '</p> <div class="overflow-x-auto"> <table class="w-full text-left border-collapse"> <thead> <tr class="border-b border-[#D4E4E8] dark:border-[#334155]"> <th class="py-2 px-4">', '</th> <th class="py-2 px-4">', '</th> <th class="py-2 px-4">', '</th> <th class="py-2 px-4">', '</th> </tr> </thead> <tbody> <tr class="border-b border-[#D4E4E8] dark:border-[#334155]"> <td class="py-2 px-4 font-medium">S</td> <td class="py-2 px-4">86-89</td> <td class="py-2 px-4">69-71</td> <td class="py-2 px-4">94-97</td> </tr> <tr class="border-b border-[#D4E4E8] dark:border-[#334155]"> <td class="py-2 px-4 font-medium">M</td> <td class="py-2 px-4">91-94</td> <td class="py-2 px-4">74-76</td> <td class="py-2 px-4">99-102</td> </tr> <tr class="border-b border-[#D4E4E8] dark:border-[#334155]"> <td class="py-2 px-4 font-medium">L</td> <td class="py-2 px-4">98-102</td> <td class="py-2 px-4">80-84</td> <td class="py-2 px-4">105-109</td> </tr> <tr> <td class="py-2 px-4 font-medium">XL</td> <td class="py-2 px-4">105-109</td> <td class="py-2 px-4">88-92</td> <td class="py-2 px-4">113-117</td> </tr> </tbody> </table> </div> </div> <script>(function(){', `
const lang = locale;
// --- UTILS ---
const formatPrice = (price, currency = 'EGP') => {
    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency', currency, minimumFractionDigits: 0
    }).format(price);

    if (isNaN(parseInt(formatted[0], 10))) {
        const firstDigitIndex = formatted.search(/\\d/);
        if (firstDigitIndex > 0) {
            return formatted.slice(0, firstDigitIndex) + ' ' + formatted.slice(firstDigitIndex);
        }
    }
    return formatted;
};

const t = (key) => {
    const strings = {
        'cart.empty': lang === 'ar' ? '\u0633\u0644\u062A\u0643 \u0641\u0627\u0631\u063A\u0629.' : 'Your cart is empty.',
        'cart.title': lang === 'ar' ? '\u0633\u0644\u062A\u0643' : 'Your Cart',
        'cart.subtotal': lang === 'ar' ? '\u0627\u0644\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0641\u0631\u0639\u064A' : 'Subtotal',
        'cart.remove': lang === 'ar' ? '\u0625\u0632\u0627\u0644\u0629' : 'Remove',
        'cart.proceedToCheckout': lang === 'ar' ? '\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0644\u0644\u062F\u0641\u0639' : 'Proceed to Checkout',
        'checkout.emptyCart': lang === 'ar' ? '\u0633\u0644\u062A\u0643 \u0641\u0627\u0631\u063A\u0629.' : 'Your cart is empty.',
    };
    return strings[key] || key;
};

// --- CART ---
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('nisaCart')) || [];
        // Sanitize old paths from localStorage
        this.items.forEach(item => {
            if (item.image && item.image.includes('/assets/products/New folder/')) {
                item.image = item.image.replace('/assets/products/New folder/', '/assets/products/new/');
            }
        });
        this.updateCartUI();
    }
    addItem(product, color, size, quantity = 1) {
        const existingItem = this.items.find(i => i.id === product.id && i.size === size && i.color.name === color.name);
        if (existingItem) { existingItem.quantity += quantity; }
        else {
            const price = product.price;
            this.items.push({ id: product.id, name: product.name, price: product.price, priceBefore: product.priceBefore, size, color, quantity, image: color.images[0] });
        }
        this.save();
    }
    removeItem(itemId, colorName, size) {
        this.items = this.items.filter(i => !(i.id === itemId && i.color.name === colorName && i.size === size));
        this.save();
    }
    updateQuantity(itemId, colorName, size, newQuantity) {
        const item = this.items.find(i => i.id === itemId && i.color.name === colorName && i.size === size);
        if (item) {
            if (newQuantity > 0) { item.quantity = newQuantity; }
            else { this.removeItem(itemId, colorName, size); }
        }
        this.save();
    }
    getTotal() { return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0); }
    getItemCount() { return this.items.reduce((sum, item) => sum + item.quantity, 0); }
    save() {
        localStorage.setItem('nisaCart', JSON.stringify(this.items));
        this.updateCartUI();
        document.dispatchEvent(new CustomEvent('cart-updated'));
    }
    clear() {
        this.items = [];
        this.save();
    }
    updateCartUI() {
        const count = this.getItemCount();
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.disabled = count === 0;
        }
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
        const itemsContainer = document.getElementById('cart-items');
        if (itemsContainer) {
            if (this.items.length === 0) {
                itemsContainer.innerHTML = \`<p class="text-center text-[#6B7B8C]">\${t('cart.empty')}</p>\`;
            } else {
                itemsContainer.innerHTML = this.items.map(item => {
                    const isSale = item.price < item.priceBefore;
                    return \`
                    <div class="flex gap-4 mb-4">
                        <img src="\${item.image}" alt="\${item.name}" class="w-24 h-32 object-cover rounded-md">
                        <div class="flex-grow flex flex-col justify-between">
                            <div>
                                <h4 class="font-medium">\${item.name}</h4>
                                <p class="text-sm text-[#6B7B8C]">\${item.color.name} / \${item.size}</p>
                                <div class="font-medium mt-2">
                                    \${isSale ? \`
                                        <span class="text-red-500">\${formatPrice(item.price)}</span>
                                        <span class="line-through text-sm text-gray-500 ml-2">\${formatPrice(item.priceBefore)}</span>
                                    \` : \`
                                        <span>\${formatPrice(item.price)}</span>
                                    \`}
                                </div>
                            </div>
                            <div class="flex items-center border border-gray-300 rounded w-max mt-2">
                                <button class="px-2 py-1 cart-quantity-change" data-id="\${item.id}" data-color="\${item.color.name}" data-size="\${item.size}" data-amount="-1">-</button>
                                <span class="px-3 py-1">\${item.quantity}</span>
                                <button class="px-2 py-1 cart-quantity-change" data-id="\${item.id}" data-color="\${item.color.name}" data-size="\${item.size}" data-amount="1">+</button>
                            </div>
                        </div>
                        <button class="text-xs text-red-500 hover:underline remove-from-cart self-start" data-id="\${item.id}" data-color="\${item.color.name}" data-size="\${item.size}">\${t('cart.remove')}</button>
                    </div>
                \`}).join('');
            }
        }
        const cartSubtotal = document.getElementById('cart-subtotal');
        if(cartSubtotal) {
            cartSubtotal.textContent = formatPrice(this.getTotal());
        }
    }
}

const cart = new ShoppingCart();

// --- UI INTERACTIONS ---
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    let product;
    let selectedColor;
    let selectedSize;

    // --- INITIALIZATION ---
    function initProductPage() {
        const productPageContainer = document.getElementById('add-to-cart-product-page-btn');
        if (!productPageContainer) return;

        const productId = productPageContainer.dataset.productId;
        product = products.find(p => p.id === productId);
        if (!product) return;

        selectedColor = product.colors[0];
        selectedSize = product.sizes[0];
        updateGallery(selectedColor.images);
    }

    function initCheckoutPage() {
        const checkoutForm = document.getElementById('checkout-form');
        if (!checkoutForm) return;

        const itemsContainer = document.getElementById('checkout-items');
        const subtotalEl = document.getElementById('checkout-subtotal');
        const shippingEl = document.getElementById('checkout-shipping');
        const totalEl = document.getElementById('checkout-total');
        const governorateSelect = checkoutForm.querySelector('select[name="governorate"]');

        const updateTotals = () => {
            const selectedGovernorate = governorateSelect.value;
            const shippingInfo = shipping.find(s => s.city === selectedGovernorate);
            const shippingCost = cart.items.length > 0 ? (shippingInfo ? shippingInfo.price : 50) : 0;

            if (cart.items.length === 0) {
                itemsContainer.innerHTML = \`<p class="text-center text-[#6B7B8C]">\${t('checkout.emptyCart')}</p>\`;
                const checkoutButton = checkoutForm.querySelector('button[type="submit"]');
                if(checkoutButton) checkoutButton.disabled = true;

            } else {
                itemsContainer.innerHTML = cart.items.map(item => {
                    const isSale = item.price < item.priceBefore;
                    return \`
                    <div class="flex gap-4 items-center">
                        <div class="relative">
                            <img src="\${item.image}" alt="\${item.name}" class="w-16 h-20 object-cover rounded-md">
                            <span class="absolute top-1 right-1 bg-[#BEE2E8] text-[#204566] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">\${item.quantity}</span>
                        </div>
                        <div class="flex-grow">
                            <h4 class="font-medium text-sm">\${item.name}</h4>
                            <p class="text-xs text-[#6B7B8C]">\${item.color.name} / \${item.size}</p>
                            <p class="text-xs">\${formatPrice(item.price)} each</p>
                        </div>
                        <div class="text-sm font-medium text-right">
                            \${isSale ? \`
                                <span class="text-red-500">\${formatPrice(item.price * item.quantity)}</span>
                                <br>
                                <span class="line-through text-xs text-gray-500">\${formatPrice(item.priceBefore * item.quantity)}</span>
                            \` : \`
                                <span>\${formatPrice(item.price * item.quantity)}</span>
                            \`}
                        </div>
                    </div>
                \`}).join('');
            }

            const subtotal = cart.getTotal();
            const subtotalBefore = cart.items.reduce((sum, item) => sum + (item.priceBefore * item.quantity), 0);
            const totalSavings = subtotalBefore - subtotal;

            const total = subtotal + shippingCost;
            if(subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
            if(shippingEl) shippingEl.textContent = formatPrice(shippingCost);
            if(totalEl) totalEl.textContent = formatPrice(total);

            const savingsEl = document.getElementById('checkout-savings');
            const savingsContainerEl = document.getElementById('checkout-savings-container');

            if (savingsEl && savingsContainerEl) {
                if (totalSavings > 0) {
                    savingsEl.textContent = \`-\${formatPrice(totalSavings)}\`;
                    savingsContainerEl.style.display = 'flex';
                } else {
                    savingsContainerEl.style.display = 'none';
                }
            }

            const orderSummaryInput = document.getElementById('order-summary-input');
            const orderTotalInput = document.getElementById('order-total-input');
            const itemsJsonInput = document.getElementById('items-json-input');

            if (orderSummaryInput) {
                const itemsSummary = cart.items.map(item => {
                    const isSale = item.price < item.priceBefore;
                    const priceString = isSale
                        ? \`Price: \${formatPrice(item.price * item.quantity)} (was \${formatPrice(item.priceBefore * item.quantity)})\`
                        : \`Price: \${formatPrice(item.price * item.quantity)}\`;
                    return \`\${item.name} (\${item.color.name} / \${item.size}) - Qty: \${item.quantity} - \${priceString}\`;
                }).join('\\n');
                const shippingSummary = \`Shipping: \${formatPrice(shippingCost)}\`;
                orderSummaryInput.value = \`\${itemsSummary}\\n\${shippingSummary}\`;
            }
            if (orderTotalInput) {
                orderTotalInput.value = formatPrice(total);
            }
            if (itemsJsonInput) {
                itemsJsonInput.value = JSON.stringify(cart.items.map(item => ({
                    id: item.id,
                    name: item.name,
                    color: item.color.name,
                    size: item.size,
                    quantity: item.quantity,
                    price: item.price
                })));
            }
        }

        governorateSelect.addEventListener('change', updateTotals);
        updateTotals();

        document.addEventListener('cart-updated', updateTotals);

        checkoutForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(checkoutForm);
            const submitButton = checkoutForm.querySelector('button[type="submit"]');

            if(submitButton) submitButton.disabled = true;

            fetch(checkoutForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    cart.clear();
                    window.location.href = '/' + lang + '/thank-you/';
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert('Oops! There was a problem submitting your form');
                        }
                        if(submitButton) submitButton.disabled = false;
                    })
                }
            }).catch(error => {
                alert('Oops! There was a problem submitting your form');
                if(submitButton) submitButton.disabled = false;
            });
        });
    }

    // --- EVENT LISTENERS ---
    body.addEventListener('click', e => {
        if (e.target.closest('#cart-button') || e.target.closest('#cart-button-mobile')) toggleCartDrawer(true);
        if (e.target.closest('#close-cart-button')) toggleCartDrawer(false);
        if (e.target.closest('#cart-drawer-overlay')) toggleCartDrawer(false);

        const addToCartCardBtn = e.target.closest('.add-to-cart-card-btn');
        if (addToCartCardBtn) {
            const productId = addToCartCardBtn.dataset.productId;
            const p = products.find(p => p.id === productId);
            if (p && p.inStock) {
                cart.addItem(p, p.colors[0], p.sizes[0]);
                toggleCartDrawer(true);
            }
        }

        const addToCartPageBtn = e.target.closest('#add-to-cart-product-page-btn');
        if (addToCartPageBtn) {
            cart.addItem(product, selectedColor, selectedSize);
            toggleCartDrawer(true);
        }

        const quantityChangeBtn = e.target.closest('.cart-quantity-change');
        if (quantityChangeBtn) {
            const { id, color, size, amount } = quantityChangeBtn.dataset;
            const item = cart.items.find(i => i.id === id && i.color.name === color && i.size === size);
            if (item) cart.updateQuantity(id, color, size, item.quantity + parseInt(amount));
        }

        const removeFromCartBtn = e.target.closest('.remove-from-cart');
        if (removeFromCartBtn) {
            const { id, color, size } = removeFromCartBtn.dataset;
            cart.removeItem(id, color, size);
        }

        if (e.target.closest('#mobile-menu-button')) {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        if (e.target.closest('#size-guide-btn')) toggleSizeGuideModal(true);
        if (e.target.closest('#close-size-guide-button')) toggleSizeGuideModal(false);
        if (e.target.closest('#size-guide-modal-overlay')) toggleSizeGuideModal(false);

        const colorSwatch = e.target.closest('.color-swatch');
        if (colorSwatch) {
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('border-[#204566]'));
            colorSwatch.classList.add('border-[#204566]');
            const colorIndex = parseInt(colorSwatch.dataset.colorIndex);
            selectedColor = product.colors[colorIndex];
            updateGallery(selectedColor.images);
        }

        const sizeBtn = e.target.closest('.size-btn');
        if (sizeBtn) {
            document.querySelectorAll('.size-btn').forEach(b => {
                b.classList.remove('bg-[#204566]', 'text-white');
                b.classList.add('bg-transparent');
            });
            sizeBtn.classList.remove('bg-transparent');
            sizeBtn.classList.add('bg-[#204566]', 'text-white');
            selectedSize = sizeBtn.innerText;
        }

        if (e.target.closest('#prev-image')) updateGalleryByOffset(-1);
        if (e.target.closest('#next-image')) updateGalleryByOffset(1);
        const thumb = e.target.closest('#thumbnail-container img');
        if (thumb) {
            const index = parseInt(thumb.dataset.index);
            updateGallery(null, index);
        }
    });

    // --- HELPER FUNCTIONS ---
    function toggleCartDrawer(open) {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-drawer-overlay');
        if (drawer && overlay) {
            if (open) {
                overlay.classList.remove('hidden');
                drawer.classList.remove('translate-x-full');
            } else {
                overlay.classList.add('hidden');
                drawer.classList.add('translate-x-full');
            }
        }
    }

    function toggleSizeGuideModal(open) {
        const modal = document.getElementById('size-guide-modal');
        const overlay = document.getElementById('size-guide-modal-overlay');
        if (modal && overlay) {
            if (open) {
                modal.classList.remove('hidden');
                overlay.classList.remove('hidden');
            }
            else {
                modal.classList.add('hidden');
                overlay.classList.add('hidden');
            }
        }
    }

    let currentImages = [];
    let currentImageIndex = 0;

    function updateGallery(images, index) {
        const mainImage = document.getElementById('main-product-image');
        const galleryControls = document.getElementById('gallery-controls');
        const thumbnailContainer = document.getElementById('thumbnail-container');
        if (!mainImage || !galleryControls || !thumbnailContainer) return;

        if (images) currentImages = images;
        if (index !== undefined) currentImageIndex = index;

        if (currentImages && currentImages.length > 0) {
            mainImage.src = currentImages[currentImageIndex];
        } else {
            const comingSoonText = lang === 'ar' ? '\u0642\u0631\u064A\u0628\u0627\u064B' : 'Coming Soon';
            mainImage.src = \`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'>\${comingSoonText}</text></svg>\`;
        }

        galleryControls.style.display = currentImages.length > 1 ? 'flex' : 'none';

        thumbnailContainer.innerHTML = currentImages.map((image, i) => \`
            <img src="\${image}" class="w-16 h-16 object-cover rounded-md cursor-pointer \${i === currentImageIndex ? 'border-2 border-[#204566]' : ''}" data-index="\${i}">
        \`).join('');
    }

    function updateGalleryByOffset(offset) {
        currentImageIndex = (currentImageIndex + offset + currentImages.length) % currentImages.length;
        updateGallery(null, currentImageIndex);
    }

    initProductPage();
    initCheckoutPage();

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            document.documentElement.classList.add('checked-out');

            setTimeout(() => {
                window.location.href = '/' + lang + '/checkout/';
            }, 1500);
        });
    }
});
})();<\/script>  </body> </html>`], ["<html", "", "> <head>", "", "<script>\n        (function() {\n            const theme = localStorage.getItem('nisa-theme') || 'light';\n            if (theme === 'dark') document.documentElement.classList.add('dark');\n        })();\n    <\/script>", '</head> <body class="antialiased"', '> <div id="toast" class="fixed bottom-5 right-5 text-white py-2 px-4 rounded-lg shadow-md hidden" style="z-index: 9999;"> <span id="toast-message"></span> </div> ', ' <main class="pb-20 md:pb-0"> ', " </main> ", ' <!-- Sticky Bottom Navigation for Mobile --> <div class="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-[#081622]/95 backdrop-blur-md border-t border-[#D4E4E8] dark:border-[#1b456b] z-40 md:hidden flex justify-around items-center py-2 px-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_12px_rgba(0,0,0,0.3)]"> <a', "", '> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> <span class="scale-90 origin-top uppercase">', "</span> </a> <a", "", '> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg> <span class="scale-90 origin-top uppercase">', "</span> </a> <a", "", '> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span class="scale-90 origin-top uppercase">', '</span> </a> <button id="cart-button-mobile" class="flex-1 flex flex-col items-center gap-1 text-[10px] font-medium tracking-wider transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer text-[#6B7B8C] dark:text-[#94a3b8] focus:outline-none py-1"> <div class="relative"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> <span class="absolute -top-2 -right-2 bg-[#BEE2E8] text-[#1b456b] text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center cart-count" style="display: none;">0</span> </div> <span class="scale-90 origin-top uppercase">', '</span> </button> </div> <!-- Cart Drawer --> <div id="cart-drawer-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden"></div> <div id="cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-[#0e2537] z-50 transform translate-x-full"> <div class="flex flex-col h-full"> <div class="flex items-center justify-between p-6 border-b border-[#D4E4E8] dark:border-[#1b456b]"> <h2 class="text-2xl font-medium" id="cart-drawer-title">', '</h2> <button id="close-cart-button" class="text-3xl">&times;</button> </div> <div id="cart-items" class="flex-grow p-6 overflow-y-auto"> <p class="text-center text-[#6B7B8C] dark:text-[#94a3b8]">', '</p> </div> <div class="p-6 border-t border-[#D4E4E8] dark:border-[#1b456b]"> <div class="flex justify-between items-center text-xl font-medium mb-4"> <span>', '</span> <span id="cart-subtotal">EGP 0</span> </div> <button id="checkoutBtn" class="w-full"> <svg style="width:24px;height:24px" viewBox="0 0 24 24" id="cart"> <path fill="#fff" d="M17,18A2,2 0 0,1 19,20A2,2,0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"></path> </svg> <span>', '</span> <svg id="check" style="width:24px;height:24px" viewBox="0 0 24 24"> <path stroke-width="2" fill="none" stroke="#ffffff" d="M 3,12 l 6,6 l 12, -12"></path> </svg> </button> </div> </div> </div> <!-- Size Guide Modal --> <div id="size-guide-modal-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden"></div> <div id="size-guide-modal" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#0e2537] shadow-2xl z-50 rounded-lg p-8 w-11/12 max-w-2xl hidden"> <button id="close-size-guide-button" class="absolute top-4 right-4 text-3xl">&times;</button> <h2 class="text-2xl font-medium mb-4 text-center">', '</h2> <p class="text-center text-[#6B7B8C] dark:text-[#94a3b8] mb-6">', '</p> <div class="overflow-x-auto"> <table class="w-full text-left border-collapse"> <thead> <tr class="border-b border-[#D4E4E8] dark:border-[#334155]"> <th class="py-2 px-4">', '</th> <th class="py-2 px-4">', '</th> <th class="py-2 px-4">', '</th> <th class="py-2 px-4">', '</th> </tr> </thead> <tbody> <tr class="border-b border-[#D4E4E8] dark:border-[#334155]"> <td class="py-2 px-4 font-medium">S</td> <td class="py-2 px-4">86-89</td> <td class="py-2 px-4">69-71</td> <td class="py-2 px-4">94-97</td> </tr> <tr class="border-b border-[#D4E4E8] dark:border-[#334155]"> <td class="py-2 px-4 font-medium">M</td> <td class="py-2 px-4">91-94</td> <td class="py-2 px-4">74-76</td> <td class="py-2 px-4">99-102</td> </tr> <tr class="border-b border-[#D4E4E8] dark:border-[#334155]"> <td class="py-2 px-4 font-medium">L</td> <td class="py-2 px-4">98-102</td> <td class="py-2 px-4">80-84</td> <td class="py-2 px-4">105-109</td> </tr> <tr> <td class="py-2 px-4 font-medium">XL</td> <td class="py-2 px-4">105-109</td> <td class="py-2 px-4">88-92</td> <td class="py-2 px-4">113-117</td> </tr> </tbody> </table> </div> </div> <script>(function(){', `
const lang = locale;
// --- UTILS ---
const formatPrice = (price, currency = 'EGP') => {
    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency', currency, minimumFractionDigits: 0
    }).format(price);

    if (isNaN(parseInt(formatted[0], 10))) {
        const firstDigitIndex = formatted.search(/\\\\d/);
        if (firstDigitIndex > 0) {
            return formatted.slice(0, firstDigitIndex) + ' ' + formatted.slice(firstDigitIndex);
        }
    }
    return formatted;
};

const t = (key) => {
    const strings = {
        'cart.empty': lang === 'ar' ? '\u0633\u0644\u062A\u0643 \u0641\u0627\u0631\u063A\u0629.' : 'Your cart is empty.',
        'cart.title': lang === 'ar' ? '\u0633\u0644\u062A\u0643' : 'Your Cart',
        'cart.subtotal': lang === 'ar' ? '\u0627\u0644\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0641\u0631\u0639\u064A' : 'Subtotal',
        'cart.remove': lang === 'ar' ? '\u0625\u0632\u0627\u0644\u0629' : 'Remove',
        'cart.proceedToCheckout': lang === 'ar' ? '\u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0644\u0644\u062F\u0641\u0639' : 'Proceed to Checkout',
        'checkout.emptyCart': lang === 'ar' ? '\u0633\u0644\u062A\u0643 \u0641\u0627\u0631\u063A\u0629.' : 'Your cart is empty.',
    };
    return strings[key] || key;
};

// --- CART ---
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('nisaCart')) || [];
        // Sanitize old paths from localStorage
        this.items.forEach(item => {
            if (item.image && item.image.includes('/assets/products/New folder/')) {
                item.image = item.image.replace('/assets/products/New folder/', '/assets/products/new/');
            }
        });
        this.updateCartUI();
    }
    addItem(product, color, size, quantity = 1) {
        const existingItem = this.items.find(i => i.id === product.id && i.size === size && i.color.name === color.name);
        if (existingItem) { existingItem.quantity += quantity; }
        else {
            const price = product.price;
            this.items.push({ id: product.id, name: product.name, price: product.price, priceBefore: product.priceBefore, size, color, quantity, image: color.images[0] });
        }
        this.save();
    }
    removeItem(itemId, colorName, size) {
        this.items = this.items.filter(i => !(i.id === itemId && i.color.name === colorName && i.size === size));
        this.save();
    }
    updateQuantity(itemId, colorName, size, newQuantity) {
        const item = this.items.find(i => i.id === itemId && i.color.name === colorName && i.size === size);
        if (item) {
            if (newQuantity > 0) { item.quantity = newQuantity; }
            else { this.removeItem(itemId, colorName, size); }
        }
        this.save();
    }
    getTotal() { return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0); }
    getItemCount() { return this.items.reduce((sum, item) => sum + item.quantity, 0); }
    save() {
        localStorage.setItem('nisaCart', JSON.stringify(this.items));
        this.updateCartUI();
        document.dispatchEvent(new CustomEvent('cart-updated'));
    }
    clear() {
        this.items = [];
        this.save();
    }
    updateCartUI() {
        const count = this.getItemCount();
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.disabled = count === 0;
        }
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
        const itemsContainer = document.getElementById('cart-items');
        if (itemsContainer) {
            if (this.items.length === 0) {
                itemsContainer.innerHTML = \\\`<p class="text-center text-[#6B7B8C]">\\\${t('cart.empty')}</p>\\\`;
            } else {
                itemsContainer.innerHTML = this.items.map(item => {
                    const isSale = item.price < item.priceBefore;
                    return \\\`
                    <div class="flex gap-4 mb-4">
                        <img src="\\\${item.image}" alt="\\\${item.name}" class="w-24 h-32 object-cover rounded-md">
                        <div class="flex-grow flex flex-col justify-between">
                            <div>
                                <h4 class="font-medium">\\\${item.name}</h4>
                                <p class="text-sm text-[#6B7B8C]">\\\${item.color.name} / \\\${item.size}</p>
                                <div class="font-medium mt-2">
                                    \\\${isSale ? \\\`
                                        <span class="text-red-500">\\\${formatPrice(item.price)}</span>
                                        <span class="line-through text-sm text-gray-500 ml-2">\\\${formatPrice(item.priceBefore)}</span>
                                    \\\` : \\\`
                                        <span>\\\${formatPrice(item.price)}</span>
                                    \\\`}
                                </div>
                            </div>
                            <div class="flex items-center border border-gray-300 rounded w-max mt-2">
                                <button class="px-2 py-1 cart-quantity-change" data-id="\\\${item.id}" data-color="\\\${item.color.name}" data-size="\\\${item.size}" data-amount="-1">-</button>
                                <span class="px-3 py-1">\\\${item.quantity}</span>
                                <button class="px-2 py-1 cart-quantity-change" data-id="\\\${item.id}" data-color="\\\${item.color.name}" data-size="\\\${item.size}" data-amount="1">+</button>
                            </div>
                        </div>
                        <button class="text-xs text-red-500 hover:underline remove-from-cart self-start" data-id="\\\${item.id}" data-color="\\\${item.color.name}" data-size="\\\${item.size}">\\\${t('cart.remove')}</button>
                    </div>
                \\\`}).join('');
            }
        }
        const cartSubtotal = document.getElementById('cart-subtotal');
        if(cartSubtotal) {
            cartSubtotal.textContent = formatPrice(this.getTotal());
        }
    }
}

const cart = new ShoppingCart();

// --- UI INTERACTIONS ---
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    let product;
    let selectedColor;
    let selectedSize;

    // --- INITIALIZATION ---
    function initProductPage() {
        const productPageContainer = document.getElementById('add-to-cart-product-page-btn');
        if (!productPageContainer) return;

        const productId = productPageContainer.dataset.productId;
        product = products.find(p => p.id === productId);
        if (!product) return;

        selectedColor = product.colors[0];
        selectedSize = product.sizes[0];
        updateGallery(selectedColor.images);
    }

    function initCheckoutPage() {
        const checkoutForm = document.getElementById('checkout-form');
        if (!checkoutForm) return;

        const itemsContainer = document.getElementById('checkout-items');
        const subtotalEl = document.getElementById('checkout-subtotal');
        const shippingEl = document.getElementById('checkout-shipping');
        const totalEl = document.getElementById('checkout-total');
        const governorateSelect = checkoutForm.querySelector('select[name="governorate"]');

        const updateTotals = () => {
            const selectedGovernorate = governorateSelect.value;
            const shippingInfo = shipping.find(s => s.city === selectedGovernorate);
            const shippingCost = cart.items.length > 0 ? (shippingInfo ? shippingInfo.price : 50) : 0;

            if (cart.items.length === 0) {
                itemsContainer.innerHTML = \\\`<p class="text-center text-[#6B7B8C]">\\\${t('checkout.emptyCart')}</p>\\\`;
                const checkoutButton = checkoutForm.querySelector('button[type="submit"]');
                if(checkoutButton) checkoutButton.disabled = true;

            } else {
                itemsContainer.innerHTML = cart.items.map(item => {
                    const isSale = item.price < item.priceBefore;
                    return \\\`
                    <div class="flex gap-4 items-center">
                        <div class="relative">
                            <img src="\\\${item.image}" alt="\\\${item.name}" class="w-16 h-20 object-cover rounded-md">
                            <span class="absolute top-1 right-1 bg-[#BEE2E8] text-[#204566] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">\\\${item.quantity}</span>
                        </div>
                        <div class="flex-grow">
                            <h4 class="font-medium text-sm">\\\${item.name}</h4>
                            <p class="text-xs text-[#6B7B8C]">\\\${item.color.name} / \\\${item.size}</p>
                            <p class="text-xs">\\\${formatPrice(item.price)} each</p>
                        </div>
                        <div class="text-sm font-medium text-right">
                            \\\${isSale ? \\\`
                                <span class="text-red-500">\\\${formatPrice(item.price * item.quantity)}</span>
                                <br>
                                <span class="line-through text-xs text-gray-500">\\\${formatPrice(item.priceBefore * item.quantity)}</span>
                            \\\` : \\\`
                                <span>\\\${formatPrice(item.price * item.quantity)}</span>
                            \\\`}
                        </div>
                    </div>
                \\\`}).join('');
            }

            const subtotal = cart.getTotal();
            const subtotalBefore = cart.items.reduce((sum, item) => sum + (item.priceBefore * item.quantity), 0);
            const totalSavings = subtotalBefore - subtotal;

            const total = subtotal + shippingCost;
            if(subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
            if(shippingEl) shippingEl.textContent = formatPrice(shippingCost);
            if(totalEl) totalEl.textContent = formatPrice(total);

            const savingsEl = document.getElementById('checkout-savings');
            const savingsContainerEl = document.getElementById('checkout-savings-container');

            if (savingsEl && savingsContainerEl) {
                if (totalSavings > 0) {
                    savingsEl.textContent = \\\`-\\\${formatPrice(totalSavings)}\\\`;
                    savingsContainerEl.style.display = 'flex';
                } else {
                    savingsContainerEl.style.display = 'none';
                }
            }

            const orderSummaryInput = document.getElementById('order-summary-input');
            const orderTotalInput = document.getElementById('order-total-input');
            const itemsJsonInput = document.getElementById('items-json-input');

            if (orderSummaryInput) {
                const itemsSummary = cart.items.map(item => {
                    const isSale = item.price < item.priceBefore;
                    const priceString = isSale
                        ? \\\`Price: \\\${formatPrice(item.price * item.quantity)} (was \\\${formatPrice(item.priceBefore * item.quantity)})\\\`
                        : \\\`Price: \\\${formatPrice(item.price * item.quantity)}\\\`;
                    return \\\`\\\${item.name} (\\\${item.color.name} / \\\${item.size}) - Qty: \\\${item.quantity} - \\\${priceString}\\\`;
                }).join('\\\\n');
                const shippingSummary = \\\`Shipping: \\\${formatPrice(shippingCost)}\\\`;
                orderSummaryInput.value = \\\`\\\${itemsSummary}\\\\n\\\${shippingSummary}\\\`;
            }
            if (orderTotalInput) {
                orderTotalInput.value = formatPrice(total);
            }
            if (itemsJsonInput) {
                itemsJsonInput.value = JSON.stringify(cart.items.map(item => ({
                    id: item.id,
                    name: item.name,
                    color: item.color.name,
                    size: item.size,
                    quantity: item.quantity,
                    price: item.price
                })));
            }
        }

        governorateSelect.addEventListener('change', updateTotals);
        updateTotals();

        document.addEventListener('cart-updated', updateTotals);

        checkoutForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(checkoutForm);
            const submitButton = checkoutForm.querySelector('button[type="submit"]');

            if(submitButton) submitButton.disabled = true;

            fetch(checkoutForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    cart.clear();
                    window.location.href = '/' + lang + '/thank-you/';
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert('Oops! There was a problem submitting your form');
                        }
                        if(submitButton) submitButton.disabled = false;
                    })
                }
            }).catch(error => {
                alert('Oops! There was a problem submitting your form');
                if(submitButton) submitButton.disabled = false;
            });
        });
    }

    // --- EVENT LISTENERS ---
    body.addEventListener('click', e => {
        if (e.target.closest('#cart-button') || e.target.closest('#cart-button-mobile')) toggleCartDrawer(true);
        if (e.target.closest('#close-cart-button')) toggleCartDrawer(false);
        if (e.target.closest('#cart-drawer-overlay')) toggleCartDrawer(false);

        const addToCartCardBtn = e.target.closest('.add-to-cart-card-btn');
        if (addToCartCardBtn) {
            const productId = addToCartCardBtn.dataset.productId;
            const p = products.find(p => p.id === productId);
            if (p && p.inStock) {
                cart.addItem(p, p.colors[0], p.sizes[0]);
                toggleCartDrawer(true);
            }
        }

        const addToCartPageBtn = e.target.closest('#add-to-cart-product-page-btn');
        if (addToCartPageBtn) {
            cart.addItem(product, selectedColor, selectedSize);
            toggleCartDrawer(true);
        }

        const quantityChangeBtn = e.target.closest('.cart-quantity-change');
        if (quantityChangeBtn) {
            const { id, color, size, amount } = quantityChangeBtn.dataset;
            const item = cart.items.find(i => i.id === id && i.color.name === color && i.size === size);
            if (item) cart.updateQuantity(id, color, size, item.quantity + parseInt(amount));
        }

        const removeFromCartBtn = e.target.closest('.remove-from-cart');
        if (removeFromCartBtn) {
            const { id, color, size } = removeFromCartBtn.dataset;
            cart.removeItem(id, color, size);
        }

        if (e.target.closest('#mobile-menu-button')) {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        if (e.target.closest('#size-guide-btn')) toggleSizeGuideModal(true);
        if (e.target.closest('#close-size-guide-button')) toggleSizeGuideModal(false);
        if (e.target.closest('#size-guide-modal-overlay')) toggleSizeGuideModal(false);

        const colorSwatch = e.target.closest('.color-swatch');
        if (colorSwatch) {
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('border-[#204566]'));
            colorSwatch.classList.add('border-[#204566]');
            const colorIndex = parseInt(colorSwatch.dataset.colorIndex);
            selectedColor = product.colors[colorIndex];
            updateGallery(selectedColor.images);
        }

        const sizeBtn = e.target.closest('.size-btn');
        if (sizeBtn) {
            document.querySelectorAll('.size-btn').forEach(b => {
                b.classList.remove('bg-[#204566]', 'text-white');
                b.classList.add('bg-transparent');
            });
            sizeBtn.classList.remove('bg-transparent');
            sizeBtn.classList.add('bg-[#204566]', 'text-white');
            selectedSize = sizeBtn.innerText;
        }

        if (e.target.closest('#prev-image')) updateGalleryByOffset(-1);
        if (e.target.closest('#next-image')) updateGalleryByOffset(1);
        const thumb = e.target.closest('#thumbnail-container img');
        if (thumb) {
            const index = parseInt(thumb.dataset.index);
            updateGallery(null, index);
        }
    });

    // --- HELPER FUNCTIONS ---
    function toggleCartDrawer(open) {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-drawer-overlay');
        if (drawer && overlay) {
            if (open) {
                overlay.classList.remove('hidden');
                drawer.classList.remove('translate-x-full');
            } else {
                overlay.classList.add('hidden');
                drawer.classList.add('translate-x-full');
            }
        }
    }

    function toggleSizeGuideModal(open) {
        const modal = document.getElementById('size-guide-modal');
        const overlay = document.getElementById('size-guide-modal-overlay');
        if (modal && overlay) {
            if (open) {
                modal.classList.remove('hidden');
                overlay.classList.remove('hidden');
            }
            else {
                modal.classList.add('hidden');
                overlay.classList.add('hidden');
            }
        }
    }

    let currentImages = [];
    let currentImageIndex = 0;

    function updateGallery(images, index) {
        const mainImage = document.getElementById('main-product-image');
        const galleryControls = document.getElementById('gallery-controls');
        const thumbnailContainer = document.getElementById('thumbnail-container');
        if (!mainImage || !galleryControls || !thumbnailContainer) return;

        if (images) currentImages = images;
        if (index !== undefined) currentImageIndex = index;

        if (currentImages && currentImages.length > 0) {
            mainImage.src = currentImages[currentImageIndex];
        } else {
            const comingSoonText = lang === 'ar' ? '\u0642\u0631\u064A\u0628\u0627\u064B' : 'Coming Soon';
            mainImage.src = \\\`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'>\\\${comingSoonText}</text></svg>\\\`;
        }

        galleryControls.style.display = currentImages.length > 1 ? 'flex' : 'none';

        thumbnailContainer.innerHTML = currentImages.map((image, i) => \\\`
            <img src="\\\${image}" class="w-16 h-16 object-cover rounded-md cursor-pointer \\\${i === currentImageIndex ? 'border-2 border-[#204566]' : ''}" data-index="\\\${i}">
        \\\`).join('');
    }

    function updateGalleryByOffset(offset) {
        currentImageIndex = (currentImageIndex + offset + currentImages.length) % currentImages.length;
        updateGallery(null, currentImageIndex);
    }

    initProductPage();
    initCheckoutPage();

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            document.documentElement.classList.add('checked-out');

            setTimeout(() => {
                window.location.href = '/' + lang + '/checkout/';
            }, 1500);
        });
    }
});
})();<\/script>  </body> </html>`])), addAttribute(locale, "lang"), addAttribute(rtl ? "rtl" : "ltr", "dir"), renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "locale": locale }), locale === "ar" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">` })}`, renderHead(), addAttribute(locale, "data-locale"), renderComponent($$result, "Header", $$Header, { "locale": locale }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "locale": locale }), addAttribute(`/${locale}/shop/`, "href"), addAttribute([
    "flex-1 flex flex-col items-center gap-1 text-[10px] font-medium tracking-wider transition-colors duration-200 py-1",
    isShop ? "text-[#204566] dark:text-[#3182ce]" : "text-[#6B7B8C] dark:text-[#94a3b8]"
  ], "class:list"), t(locale, "mobileNav.shop"), addAttribute(`/${locale}/`, "href"), addAttribute([
    "flex-1 flex flex-col items-center gap-1 text-[10px] font-medium tracking-wider transition-colors duration-200 py-1",
    isHome ? "text-[#204566] dark:text-[#3182ce]" : "text-[#6B7B8C] dark:text-[#94a3b8]"
  ], "class:list"), t(locale, "mobileNav.collections"), addAttribute(`/${locale}/about/`, "href"), addAttribute([
    "flex-1 flex flex-col items-center gap-1 text-[10px] font-medium tracking-wider transition-colors duration-200 py-1",
    isAbout ? "text-[#204566] dark:text-[#3182ce]" : "text-[#6B7B8C] dark:text-[#94a3b8]"
  ], "class:list"), t(locale, "mobileNav.account"), t(locale, "mobileNav.cart"), t(locale, "cart.title"), t(locale, "cart.empty"), t(locale, "cart.subtotal"), t(locale, "cart.proceedToCheckout"), t(locale, "sizeGuide.title"), t(locale, "sizeGuide.subtitle"), t(locale, "sizeGuide.size"), t(locale, "sizeGuide.bust"), t(locale, "sizeGuide.waist"), t(locale, "sizeGuide.hips"), defineScriptVars({ products: productsList, shipping: shippingRates, locale }));
}, "C:/Users/HP/Desktop/nisa-website/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getProductRepository as a, getContentRepository as b, getShippingRepository as g, locales as l, t };
