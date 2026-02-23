"use client";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Industrial() {

  const { lang } = useLanguage();

  const items = {
    ar: [
      {
        icon: "🔧",
        title: "تقنيات تصنيع متقدمة",
        desc: "استخدام أحدث خطوط الإنتاج الأوروبية لضمان أعلى جودة.",
        stat: "100%",
        statLabel: "أتمتة"
      },
      {
        icon: "⚡",
        title: "قدرة إنتاج عالية",
        desc: "طاقة إنتاجية ضخمة لتلبية الطلبات الكبيرة في أسرع وقت.",
        stat: "24/7",
        statLabel: "تشغيل مستمر"
      },
      {
        icon: "🌍",
        title: "تصدير عالمي",
        desc: "نخدم عملاء في عدة دول حول العالم بكفاءة واحترافية.",
        stat: "7+",
        statLabel: "دول مصدّرة"
      },
      {
        icon: "🏆",
        title: "معايير جودة صارمة",
        desc: "التزام كامل بشهادات الجودة الدولية في كل مرحلة إنتاج.",
        stat: "ISO",
        statLabel: "معتمد دولياً"
      },
    ],
    en: [
      {
        icon: "🔧",
        title: "Advanced Manufacturing Technologies",
        desc: "Utilizing the latest European production lines to ensure the highest quality.",
        stat: "100%",
        statLabel: "Automated"
      },
      {
        icon: "⚡",
        title: "High Production Capacity",
        desc: "Massive production capacity to meet large-scale orders in the shortest time.",
        stat: "24/7",
        statLabel: "Continuous Operation"
      },
      {
        icon: "🌍",
        title: "Global Export",
        desc: "Serving customers in multiple countries around the world with efficiency and professionalism.",
        stat: "7+",
        statLabel: "Export Countries"
      },
      {
        icon: "🏆",
        title: "Strict Quality Standards",
        desc: "Full compliance with international quality certifications at every production stage.",
        stat: "ISO",
        statLabel: "Internationally Certified"
      },
    ]
  };

  return (
    <section className="industry-pattern relative py-24 bg-[#f6f8fb] text-slate-900 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-20
        bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
        bg-[size:80px_80px]" />
      <div className="absolute top-[-200px] right-[5%] w-[500px] h-[500px] bg-blue-400/8 blur-[180px] rounded-full"/>
      <div className="absolute bottom-[-200px] left-[5%] w-[500px] h-[500px] bg-yellow-400/8 blur-[180px] rounded-full"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm tracking-widest uppercase font-semibold">
            {lang === "ar" ? "ما يميزنا" : "What Sets Us Apart"}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900">
            {lang === "ar" ? (
              <>لماذا <span className="text-blue-600">نتميز؟</span></>
            ) : (
              <>Why <span className="text-blue-600">We Excel?</span></>
            )}
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            {lang === "ar"
              ? "نجمع بين التكنولوجيا الحديثة والخبرة الطويلة لنقدم منتجات تفوق التوقعات"
              : "We combine modern technology and long experience to deliver products that exceed expectations"}
          </p>
          <div className="mt-5 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full mx-auto"/>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-6">
          {items[lang].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 p-8 rounded-3xl
                shadow-sm hover:shadow-2xl hover:shadow-slate-200/80
                hover:-translate-y-3 hover:border-blue-100
                transition-all duration-500"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5
                bg-gradient-to-r from-transparent via-blue-400 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"/>

              {/* Icon */}
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Stat badge */}
              <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100
                px-3 py-1 rounded-xl mb-5">
                <span className="text-blue-600 font-black text-sm">{item.stat}</span>
                <span className="text-blue-400 text-xs">{item.statLabel}</span>
              </div>

              <h3 className="text-lg font-black text-slate-800 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom arrow on hover */}
              <div className="mt-6 flex items-center gap-2 text-blue-500 text-sm font-bold
                opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                transition-all duration-300">
                <span>{lang === "ar" ? "اكتشف المزيد" : "Learn More"}</span>
                <span>{lang === "ar" ? "←" : "→"}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}