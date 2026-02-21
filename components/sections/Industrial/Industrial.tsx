import Parallax from "@/components/effects/Parallax";

export default function Industrial() {

  const items = [
    { title:"تقنيات تصنيع متقدمة", desc:"استخدام أحدث خطوط الإنتاج الأوروبية." },
    { title:"قدرة إنتاج عالية", desc:"طاقة إنتاجية ضخمة لتلبية الطلبات الكبيرة." },
    { title:"تصدير عالمي", desc:"نخدم عملاء في عدة دول حول العالم." },
    { title:"معايير جودة صارمة", desc:"التزام كامل بشهادات الجودة الدولية." }
  ];

  return (

    <section className="py-40 bg-[#f6f8fb] text-slate-900 text-center relative overflow-hidden">

      {/* Industrial Grid Background */}

      <div className="absolute inset-0 opacity-30
        bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
        bg-[size:80px_80px]" />

      <div className="relative z-10">

        <h2 className="text-4xl md:text-5xl font-black mb-16">
          قدراتنا الصناعية
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">

          {items.map((item,i)=>(
            <div
              key={i}
              className="bg-white border border-gray-200 p-10 rounded-3xl
              shadow-sm hover:shadow-xl
              hover:-translate-y-2
              transition duration-300"
            >

              <div className="text-blue-600 text-3xl mb-6">
                ⚙️
              </div>

              <h3 className="text-xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>

  );
}