import type { Metadata } from "next";
import "./globals.css";
import CinematicFX from "@/components/effects/CinematicFX";
import SmoothScroll from "@/components/effects/SmoothScroll";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

export const metadata: Metadata = {
  title: {
    default: "الإخلاص للصناعات البلاستيكية | حلول تعبئة متكاملة",
    template: "%s | الإخلاص للصناعات البلاستيكية",
  },
  description:
    "شركة الإخلاص للصناعات البلاستيكية – رائدة في تصنيع أكياس البولي بروبلين المنسوجة وحلول التعبئة الصناعية منذ 2013.",
  keywords: [
    "أكياس بلاستيك",
    "أكياس بولي بروبلين",
    "PP Woven Bags",
    "Plastic Packaging Egypt",
    "Industrial Packaging",
    "plastic packaging",
    "raffia bags",
    "BOPP bags",
    "industrial packaging",
  ],
  authors: [{ name: "Al-Ikhlas Plastic Industries" }],
  openGraph: {
    title: "الإخلاص للصناعات البلاستيكية",
    description:
      "نصنع الجودة… ونقود المستقبل في حلول التعبئة الصناعية.",
    url: "https://ikhlas.com",
    siteName: "Al-Ikhlas Plastics",
    locale: "ar_EG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
      <CinematicFX />
      <SmoothScroll />
          <LanguageProvider>
            {children}
          </LanguageProvider>
      
      <div className="fixed inset-0 pointer-events-none z-0">

  {/* Glow صناعي */}
  <div className="absolute top-[-200px] left-[10%] w-[600px] h-[600px] bg-yellow-500/10 blur-[160px] rounded-full"/>

  {/* Glow ثاني */}
  <div className="absolute bottom-[-200px] right-[10%] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"/>

</div>

      </body>
    </html>
  );
}
