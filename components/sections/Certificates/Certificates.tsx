"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Certificates() {

  const { lang } = useLanguage();

  const content = {
    ar: {
      badge: "اعتماداتنا الدولية",
      title: "شهادات",
      titleHighlight: "الجودة",
      desc: "نفخر بحصولنا على أرقى شهادات الجودة الدولية التي تؤكد التزامنا بأعلى المعايير الصناعية",
      certs: [
        { img: "/img/ISO22000.png", title: "ISO 9001", desc: "نظام إدارة الجودة" },
        { img: "/img/ISO14001.png", title: "ISO 14001", desc: "الإدارة البيئية" },
        { img: "/img/ISO45001.png", title: "ISO 45001", desc: "السلامة المهنية" },
        { img: "/img/iso1.png", title: "ISO Standard", desc: "معيار التصنيع الدولي" },
      ]
    },
    en: {
      badge: "Our International Accreditations",
      title: "Quality",
      titleHighlight: "Certificates",
      desc: "We are proud to hold the most prestigious international quality certificates that confirm our commitment to the highest industrial standards",
      certs: [
        { img: "/img/ISO22000.png", title: "ISO 9001", desc: "Quality Management System" },
        { img: "/img/ISO14001.png", title: "ISO 14001", desc: "Environmental Management" },
        { img: "/img/ISO45001.png", title: "ISO 45001", desc: "Occupational Safety" },
        { img: "/img/iso1.png", title: "ISO Standard", desc: "International Manufacturing Standard" },
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="certificates" className="industry-pattern relative py-24 text-slate-900 bg-[#f6f8fb] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-[-150px] right-[10%] w-[500px] h-[500px] bg-blue-400/8 blur-[180px] rounded-full"/>
      <div className="absolute bottom-[-150px] left-[10%] w-[500px] h-[500px] bg-yellow-400/8 blur-[180px] rounded-full"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm tracking-widest uppercase font-semibold">
            {t.badge}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900">
            {t.title}{" "}
            <span className="text-blue-600">{t.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            {t.desc}
          </p>
          <div className="mt-5 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full mx-auto"/>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-6">
          {t.certs.map((c, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100
                rounded-3xl p-8 shadow-sm
                hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-200/80
                hover:border-blue-100
                transition-all duration-500"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-6 right-6 h-0.5
                bg-gradient-to-r from-transparent via-blue-400 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"/>

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl
                bg-gradient-to-tr from-blue-400/5 via-transparent to-yellow-400/5"/>

              {/* Badge */}
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-green-50
                border border-green-200 flex items-center justify-center">
                <span className="text-green-500 text-xs">✓</span>
              </div>

              {/* IMAGE */}
              <div className="relative h-48 mb-6">
                <Image
                  src={c.img}
                  fill
                  alt={c.title}
                  className="object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="text-center">
                <h3 className="text-lg font-black text-blue-600 mb-1">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  {c.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}