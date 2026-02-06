"use client";

import { aboutData } from "@/data/about";

type Props = {
  lang?: "ar" | "en";
};

export default function About({ lang = "ar" }: Props) {
  const t = aboutData[lang];

  return (
    <section className="relative py-40 overflow-hidden">
      {/* خلفية سينمائية */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block mb-6 text-yellow-500 tracking-widest text-sm font-bold uppercase">
          {t.badge}
        </span>

        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          {t.title}
          <span className="block text-blue-500 mt-4">{t.highlight}</span>
        </h2>

        <div className="mt-10 space-y-6 text-lg text-slate-300 leading-relaxed">
          {t.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
