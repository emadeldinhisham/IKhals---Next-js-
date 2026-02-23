"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import CinematicSection from "@/components/effects/CinematicSection";
import { useEffect, useRef, useState } from "react";
import { Award, Target, Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Animation on load
    const timer = setTimeout(() => setLoaded(true), 100);

    const moveDepth = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      if (imageRef.current) {
        imageRef.current.style.transform = `rotateY(${x * 8}deg) rotateX(${y * -8}deg) scale(1.02)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x * 120}px, ${y * 120}px)`;
      }
    };

    window.addEventListener("mousemove", moveDepth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", moveDepth);
    };
  }, []);

  const miniCards = t.hero?.cards ?? [
    { icon: <Award className="text-yellow-500 w-5 h-5" />, text: isAr ? "جودة تصنيع عالية" : "High Quality" },
    { icon: <Target className="text-blue-500 w-5 h-5" />, text: isAr ? "حلول صناعية دقيقة" : "Precise Solutions" },
    { icon: <Star className="text-blue-600 w-5 h-5" />, text: isAr ? "رضا العملاء 100%" : "100% Satisfaction" },
  ];

  return (
    <CinematicSection>
      <section className="industry-pattern relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] [perspective:1200px]">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]
            bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)]
            bg-[size:60px_60px]"/>

          {/* Main glow */}
          <div
            ref={glowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[800px] h-[800px]
              bg-gradient-to-r from-blue-500/15 via-transparent to-yellow-500/15
              blur-[200px] rounded-full transition-transform duration-500"
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/5 blur-[100px] rounded-full"/>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 blur-[100px] rounded-full"/>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full px-10 xl:px-20 grid lg:grid-cols-2 gap-16 items-center py-20">

          {/* TEXT */}
          <div className={`flex flex-col gap-7 ${isAr ? "items-end text-right" : "items-start text-left"}`}>

            {/* Badge */}
            <div
              className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0ms" }}
            >
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100
                text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"/>
                {t.hero.badge}
              </span>
            </div>

            {/* Title */}
            <div
              className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "150ms" }}
            >
              <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight tracking-tight">
                {t.hero.title}
                <br />
                <span className="relative">
                  <span className="text-blue-600">{t.hero.subtitle}</span>
                  {/* Underline accent */}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"/>
                </span>
              </h1>
            </div>

            {/* Description */}
            <div
              className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "250ms" }}
            >
              <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
                {t.hero.desc}
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`flex gap-4 flex-wrap transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${isAr ? "justify-end" : "justify-start"}`}
              style={{ transitionDelay: "350ms" }}
            >
              <a
                href="#products"
                className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl
                  font-bold hover:bg-blue-500 transition-all duration-300 hover:scale-105
                  hover:shadow-xl hover:shadow-blue-200"
              >
                {t.hero.cta1}
                {isAr
                  ? <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                  : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                }
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 border-2 border-gray-200 px-8 py-4 rounded-2xl
                  font-bold hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                {t.hero.cta2}
              </a>
            </div>

            {/* Mini Cards */}
            <div
              className={`grid grid-cols-3 gap-4 w-full max-w-2xl transition-all duration-700
                ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "450ms" }}
            >
              {miniCards.map((c: { icon: React.ReactNode; text: string }, i: number) => (
                <div
                  key={i}
                  className="group p-4 rounded-2xl bg-white border border-gray-100
                    shadow-sm hover:shadow-md hover:-translate-y-1
                    hover:border-blue-100 transition-all duration-300"
                >
                  <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div className="p-1.5 rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors">
                      {c.icon}
                    </div>
                    <p className="text-xs font-bold text-slate-700 leading-tight">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* IMAGE */}
          <div
            className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-x-0" : `opacity-0 ${isAr ? "-translate-x-12" : "translate-x-12"}`}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div
              ref={imageRef}
              className="relative h-[72vh] rounded-[40px] overflow-visible"
              style={{ transition: "transform 0.1s ease-out" }}
            >
              {/* Image container */}
              <div className="relative h-full rounded-[40px] overflow-hidden
                border border-white/50 shadow-2xl shadow-slate-300/50">
                <Image
                  src="/img/hero.png"
                  fill
                  alt="Al-Ikhlas Plastic Industries"
                  className="object-cover"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"/>

                {/* Corner badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm
                  rounded-2xl px-4 py-2 shadow-lg border border-white">
                  <p className="text-xs font-black text-blue-600 uppercase tracking-wider">
                    {isAr ? "🏭 مصنع الإخلاص" : "🏭 Al-Ikhlas Factory"}
                  </p>
                </div>
              </div>

              {/* EXPERIENCE CIRCLE */}
              <div className="
                absolute bottom-[-30px] left-[-30px]
                w-[200px] h-[200px]
                rounded-full
                flex flex-col items-center justify-center text-center
                border-[8px] border-white
                bg-gradient-to-br from-white via-slate-50 to-yellow-300
                shadow-[0_20px_80px_rgba(0,0,0,0.15)]
                z-10
              ">
                <h3 className="text-5xl font-black text-blue-600 leading-none">13</h3>
                <p className="text-xs font-bold text-slate-600 mt-1 leading-tight">
                  {isAr ? "سنة\nخبرة" : "Years of\nExperience"}
                </p>
              </div>

              {/* Floating stat */}
              <div className="absolute top-[-20px] right-[-20px]
                bg-white rounded-2xl px-5 py-3 shadow-xl border border-gray-100 z-10">
                <p className="text-2xl font-black text-blue-600">500+</p>
                <p className="text-xs text-slate-500 font-semibold">
                  {isAr ? "عميل راضٍ" : "Happy Clients"}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </CinematicSection>
  );
}