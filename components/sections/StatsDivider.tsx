"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

const ITEMS_AR = [
  "🏭 جودة تصنيع عالية",
  "⚙️ تقنيات أوروبية متقدمة",
  "🌍 تصدير إلى 7 دول",
  "📦 أكياس بولي بروبلين",
  "✅ شهادات جودة دولية",
  "🤝 500+ عميل راضٍ",
  "🏆 13 سنة خبرة",
  "🚀 طاقة إنتاجية ضخمة",
];

const ITEMS_EN = [
  "🏭 High Manufacturing Quality",
  "⚙️ Advanced European Technology",
  "🌍 Exporting to 7 Countries",
  "📦 PP Woven Bags",
  "✅ International Quality Certifications",
  "🤝 500+ Happy Clients",
  "🏆 13 Years Experience",
  "🚀 High Production Capacity",
];

export default function StatsDivider() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const items = isAr ? ITEMS_AR : ITEMS_EN;
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden bg-white">

      {/* خط ذهبي علوي */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"/>

      {/* الشريط المتحرك */}
      <div className="py-5 overflow-hidden relative">

        {/* تلاشي يسار */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10
          bg-gradient-to-r from-white to-transparent pointer-events-none"/>

        {/* تلاشي يمين */}
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10
          bg-gradient-to-l from-white to-transparent pointer-events-none"/>

        {/* الشريط */}
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{
            animation: "marquee 30s linear infinite",
          }}
        >
          {repeated.map((item, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <span className="text-sm font-bold text-slate-700 tracking-wide">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"/>
            </div>
          ))}
        </div>
      </div>

      {/* خط ذهبي سفلي */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"/>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>

    </div>
  );
}