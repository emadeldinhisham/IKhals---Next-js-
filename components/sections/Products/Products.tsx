"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { X, ChevronLeft, ChevronRight, CheckCircle, Ruler } from "lucide-react";

export default function Products() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const products = t.products.items;

  const [active, setActive] = useState(products[0]);
  const [selected, setSelected] = useState(null);

  return (
    // تم تغيير py-24 إلى pt-10 pb-24 لتقليل المسافة العلوية فقط
    <section id="products" className="industry-pattern relative pt-10 pb-24 bg-[#f6f8fb] text-slate-800 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-20
        bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
        bg-[size:80px_80px]" />
      <div className="absolute top-[-200px] left-[10%] w-[600px] h-[600px] bg-blue-400/8 blur-[200px] rounded-full"/>
      <div className="absolute bottom-[-200px] right-[10%] w-[600px] h-[600px] bg-yellow-400/8 blur-[200px] rounded-full"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        {/* تم تقليل المسافة السفلية للعنوان من mb-16 إلى mb-12 لمزيد من التناسق */}
        <div className="text-center mb-12">
          <span className="text-yellow-500 text-sm tracking-widest uppercase font-semibold">
            {isAr ? "تشكيلتنا" : "Our Collection"}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900">
            {t.products.title}
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full mx-auto"/>
        </div>

        {/* NAV TABS */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {products.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(p)}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300
                ${active.title === p.title
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                  : "bg-white text-slate-500 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
                }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* ACTIVE CONTENT */}
        <div className="grid md:grid-cols-3 gap-8">
          {(active.children ? active.children : [active]).map((c, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden
                border border-gray-100 shadow-sm
                hover:shadow-2xl hover:shadow-slate-200/80
                hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={c.image}
                  fill
                  alt={c.title}
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <div className="absolute inset-0 flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button
                    onClick={() => setSelected(c)}
                    className="bg-white text-blue-600 font-bold px-6 py-2.5 rounded-xl
                      shadow-xl hover:bg-blue-600 hover:text-white transition-colors duration-200
                      translate-y-4 group-hover:translate-y-0"
                  >
                    {t.products.details}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${isAr ? "text-right" : "text-left"}`}>
                <h3 className="text-lg font-black text-slate-800 mb-3">{c.title}</h3>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelected(c)}
                    className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all duration-200"
                  >
                    {isAr ? "التفاصيل" : "Details"}
                    {isAr ? <ChevronLeft className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
                  </button>
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* POPUP */}
      {selected && (
        <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-md animate-fadeIn flex items-center justify-center p-6">
          <div className="relative bg-white rounded-[40px] w-full max-w-5xl max-h-[90vh]
            overflow-y-auto shadow-2xl animate-slideUp">

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full
                bg-slate-100 hover:bg-red-50 hover:text-red-500
                flex items-center justify-center transition-all duration-200"
            >
              <X size={18}/>
            </button>

            <div className="grid md:grid-cols-2">

              {/* IMAGE */}
              <div className="relative h-[400px] md:h-full min-h-[450px] rounded-[40px] overflow-hidden">
                <Image
                  src={selected.image}
                  fill
                  alt={selected.title}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"/>
              </div>

              {/* DETAILS */}
              <div className={`p-10 ${isAr ? "text-right" : "text-left"}`}>

                <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase">
                  {isAr ? "تفاصيل المنتج" : "Product Details"}
                </span>

                <h2 className="text-3xl font-black text-slate-900 mt-2 mb-8">
                  {selected.title}
                </h2>

                {/* Features */}
                {selected.features?.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-5 h-5 text-blue-500"/>
                      <h3 className="text-sm font-black text-slate-700 uppercase tracking-wide">
                        {isAr ? "المميزات" : "Features"}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {selected.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"/>
                          </span>
                          <span className="text-slate-600 text-sm leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specs */}
                {selected.specs?.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Ruler className="w-5 h-5 text-yellow-500"/>
                      <h3 className="text-sm font-black text-slate-700 uppercase tracking-wide">
                        {isAr ? "المواصفات" : "Specifications"}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {selected.specs.map((s, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"/>
                          </span>
                          <span className="text-slate-600 text-sm leading-relaxed">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <a
                  href="#quote"
                  onClick={() => setSelected(null)}
                  className="w-full flex items-center justify-center gap-2
                    bg-blue-600 hover:bg-blue-500 text-white font-bold
                    py-4 rounded-2xl transition-all duration-300
                    hover:shadow-lg hover:shadow-blue-200 hover:scale-[1.02]"
                >
                  {isAr ? "🚀 طلب عرض سعر" : "🚀 Request a Quote"}
                </a>

              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}