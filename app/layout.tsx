import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "الإخلاص للصناعات البلاستيكية | Al-Ikhlas Plastic Industries",
    template: "%s | الإخلاص للصناعات البلاستيكية",
  },
  description:
    "شركة الإخلاص للصناعات البلاستيكية — رائدة في تصنيع أكياس البولي بروبلين المنسوجة بجودة عالية. نصدر إلى 10 دول بخبرة 13 عاماً. Al-Ikhlas Plastic Industries — leading PP woven bag manufacturer exporting to 10 countries.",
  keywords: [
    "أكياس بولي بروبلين", "PP woven bags", "الإخلاص للصناعات البلاستيكية",
    "Al-Ikhlas Plastic", "أكياس بلاستيك مصر", "plastic bags Egypt",
    "تصنيع أكياس", "bag manufacturer", "أكياس BOPP", "أكياس مطبوعة",
    "تعبئة وتغليف", "packaging Egypt",
  ],
  authors:  [{ name: "الإخلاص للصناعات البلاستيكية" }],
  creator:  "Al-Ikhlas Plastic Industries",
  publisher:"Al-Ikhlas Plastic Industries",

  // Open Graph — الصورة عند المشاركة في واتساب وفيسبوك وتويتر
  openGraph: {
    type:        "website",
    locale:      "ar_EG",
    alternateLocale: ["en_US"],
    url:         "https://ikhlas.com",
    siteName:    "الإخلاص للصناعات البلاستيكية",
    title:       "الإخلاص للصناعات البلاستيكية | Al-Ikhlas Plastic Industries",
    description: "رائدة في تصنيع أكياس البولي بروبلين المنسوجة — جودة عالية، تصدير لـ 10 دول، خبرة 13 عاماً.",
    images: [
      {
        url:    "/img/og-image.png",  // ضع صورة 1200×630 في public/img/
        width:  1200,
        height: 630,
        alt:    "الإخلاص للصناعات البلاستيكية",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card:        "summary_large_image",
    title:       "الإخلاص للصناعات البلاستيكية",
    description: "رائدة في تصنيع أكياس البولي بروبلين المنسوجة.",
    images:      ["/img/og-image.png"],
  },

  // روابط أخرى
  robots: {
    index:  true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  icons: {
    icon:    "/img/logo.png",
    apple:   "/img/logo.png",
    shortcut:"/img/logo.png",
  },

  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Dark mode بدون وميض */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('darkMode') === 'true') {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
        {/* Schema.org JSON-LD للـ SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "الإخلاص للصناعات البلاستيكية",
              "alternateName": "Al-Ikhlas Plastic Industries",
              "url": "https://ikhlas.com",
              "logo": "https://ikhlas.com/img/logo.png",
              "description": "رائدة في تصنيع أكياس البولي بروبلين المنسوجة بجودة عالية.",
              "foundingDate": "2011",
              "numberOfEmployees": { "@type": "QuantitativeValue", "value": "100+" },
              "areaServed": ["EG","SA","AE","KW","QA","BH","OM","JO","IQ","LY"],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["Arabic", "English"],
              },
              "sameAs": [],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}