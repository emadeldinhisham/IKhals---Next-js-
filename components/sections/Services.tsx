"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Factory, ShieldCheck, Globe, CheckCircle } from "lucide-react";

export default function Services() {

  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const icons = [
    <Factory size={28} />,
    <ShieldCheck size={28} />,
    <Globe size={28} />
  ];

  return (
    <section className="industry-pattern relative py-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-soft)" }}>

      <div className="absolute inset-0 opacity-30
        bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
        bg-[size:80px_80px]" />
      <div className="absolute top-[-200px] left-[10%] w-[600px] h-[600px] bg-blue-400/10 blur-[200px] rounded-full"/>
      <div className="absolute bottom-[-200px] right-[10%] w-[600px] h-[600px] bg-yellow-400/10 blur-[200px] rounded-full"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ===== INNOVATIVE PACKAGING ===== */}
        <div className={`mb-24 ${isAr ? "text-right" : "text-left"}`}>

          <div className="mb-16">
            <span className="text-yellow-500 text-sm tracking-widest uppercase font-semibold">
              {isAr ? "حلول التعبئة" : "Packaging Solutions"}
            </span>
            <h2 className="mt-3 text-4xl xl:text-5xl font-black" style={{ color: "var(--text-main)" }}>
              {isAr ? "التعبئة" : "Innovative"}{" "}
              <span className="text-blue-600">{isAr ? "المبتكرة" : "Packaging"}</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed italic" style={{ color: "var(--text-soft)" }}>
              {isAr
                ? "أكياس البولي بروبلين المنسوجة أكثر من مجرد حل للتعبئة — إنها منتج ابتكار وتكنولوجيا."
                : "PP woven sacks are more than just a packaging solution — a product of innovation and technology."}
            </p>
          </div>

          {/* Row */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-3xl p-8 border shadow-sm flex items-start gap-6"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
              <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center flex-shrink-0 text-2xl">
                💡
              </div>
              <p className="leading-relaxed" style={{ color: "var(--text-soft)" }}>
                {isAr
                  ? "متانتها ومرونتها وصداقتها للبيئة تجعلها أصلاً قيماً. تلعب أكياس PP المنسوجة دوراً محورياً في تشكيل مشهد حلول التعبئة."
                  : "Their durability, versatility, and eco-friendliness make them a valuable asset. PP woven sacks are set to play a pivotal role in shaping packaging solutions."}
              </p>
            </div>
            <p className="leading-relaxed text-lg" style={{ color: "var(--text-soft)" }}>
              {isAr
                ? "تتميز أكياس PP المنسوجة بقدرتها على التكيف ومرونتها. تصميمها يخدم تطبيقات متعددة، من تخزين المنتجات الزراعية إلى تعبئة مواد البناء."
                : "PP woven sacks stand out for their adaptability and resilience. Their design caters to a multitude of applications, from storing agricultural produce to packaging construction materials."}
            </p>
          </div>

          {/* Future Outlook — النص دائماً أسود لأن الخلفية صفراء */}
          <div className="bg-yellow-400 rounded-3xl p-10 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300/40 rounded-full -translate-y-20 translate-x-20"/>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wide"
                style={{ color: "#0f172a" }}>
                🔭 {isAr ? "النظرة المستقبلية" : "Future Outlook"}:
              </h3>
              <p className="font-semibold leading-relaxed text-base"
                style={{ color: "#1e293b" }}>
                {isAr
                  ? "تتطلع الإخلاص إلى نمو مستمر ونجاح متواصل. نحن ملتزمون بخدمة عملائنا بنفس التفاني والتميز. معاً نتطلع لبناء مستقبل أكثر إشراقاً."
                  : "Looking ahead, Al-Ikhlas is poised for continued growth and success. We are committed to serving our clients with the same dedication and excellence. Together, we look forward to building a brighter future."}
              </p>
            </div>
          </div>

          {/* Why Choose */}
          <div className="rounded-3xl p-10 border shadow-sm"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
            <h3 className="text-2xl font-black mb-8" style={{ color: "var(--text-main)" }}>
              {isAr ? "✅ لماذا تختار أكياس PP المنسوجة؟" : "✅ Why Choose PP Woven Bags?"}
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {(isAr ? [
                "مصنوعة من نسيج بولي بروبلين محكم يوفر مقاومة ممتازة للماء والأتربة.",
                "تلبي احتياجات متنوعة من التخزين الزراعي إلى تعبئة مواد البناء.",
                "خيار اقتصادي فعال — خفيفة الوزن تقلل تكاليف الشحن.",
                "صديقة للبيئة — مصنوعة من مواد قابلة لإعادة التدوير.",
                "متانة عالية تتحمل الظروف القاسية وتضمن سلامة المحتوى.",
                "قابلة للتخصيص بالطباعة والألوان والأحجام المختلفة.",
              ] : [
                "Crafted from tightly woven polypropylene offering exceptional durability.",
                "Caters to diverse needs from agricultural to construction packaging.",
                "Cost-effective — lightweight reduces overall shipping costs.",
                "Eco-friendly — made from recyclable materials.",
                "High strength withstands harsh conditions ensuring safe containment.",
                "Customizable with printing, colors, and various sizes.",
              ]).map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-sm" style={{ color: "var(--text-soft)" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ===== SERVICES ===== */}
        <div className="text-center">
          <h2 className="text-6xl font-black mb-6 tracking-tight" style={{ color: "var(--text-main)" }}>
            {t.services.title}
          </h2>
          <p className="max-w-3xl mx-auto mb-24 text-lg" style={{ color: "var(--text-soft)" }}>
            {t.services.desc}
          </p>

          <div className="grid lg:grid-cols-3 gap-12">
            {t.services.items.slice(0, 3).map((item, i) => (
              <div key={i}
                className="group relative rounded-[40px] p-[1px]
                  bg-gradient-to-r from-blue-400/20 to-yellow-400/20
                  transition duration-500 hover:scale-[1.04]">
                <div className={`relative h-full p-14 rounded-[40px] border
                  shadow-sm transition duration-500 group-hover:shadow-2xl
                  ${isAr ? "text-right" : "text-left"}`}
                  style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className="mb-8 inline-flex p-4 rounded-2xl
                    bg-blue-50 text-blue-500 group-hover:bg-yellow-50 group-hover:text-yellow-500
                    transition duration-500">
                    {icons[i]}
                  </div>
                  <h3 className="text-3xl font-black text-blue-600 mb-6">{item.title}</h3>
                  <p className="leading-relaxed text-lg" style={{ color: "var(--text-soft)" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}