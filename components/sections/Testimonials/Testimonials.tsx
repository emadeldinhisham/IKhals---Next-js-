"use client";

import { testimonials } from "../../../data/testimonials";

type Props = {
  lang?: "ar" | "en";
};

export default function Testimonials({ lang = "ar" }: Props) {
  const list = testimonials[lang];

  return (
    <section className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
            {lang === "ar" ? "آراء العملاء" : "Testimonials"}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 text-white">
            {lang === "ar"
              ? "شركاؤنا يثقون بنا"
              : "Trusted by Industry Leaders"}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {list.map((t, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
            >
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                “{t.quote}”
              </p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
