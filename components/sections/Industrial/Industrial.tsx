import Parallax from "@/components/effects/Parallax";
export default function Industrial() {

  const items = [
    { title:"تقنيات تصنيع متقدمة", desc:"استخدام أحدث خطوط الإنتاج الأوروبية." },
    { title:"قدرة إنتاج عالية", desc:"طاقة إنتاجية ضخمة لتلبية الطلبات الكبيرة." },
    { title:"تصدير عالمي", desc:"نخدم عملاء في عدة دول حول العالم." },
    { title:"معايير جودة صارمة", desc:"التزام كامل بشهادات الجودة الدولية." }
  ];

  return (

    <section className="py-40 bg-black text-white text-center">

      <h2 className="text-4xl font-bold mb-16">
        قدراتنا الصناعية
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">

        {items.map((item,i)=>(
          <div
            key={i}
            className="bg-gradient-to-b from-white/5 to-black border border-white/10 p-10 rounded-3xl hover:scale-105 transition duration-300"
          >

            <div className="text-yellow-400 text-3xl mb-6">
              ⚙️
            </div>

            <h3 className="text-xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
