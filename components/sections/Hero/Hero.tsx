"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import CinematicSection from "@/components/effects/CinematicSection";
import { useEffect, useRef } from "react";
import { Award, Target, Star } from "lucide-react";

export default function Hero() {
  const { lang, t } = useLanguage();

  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveDepth = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      if (imageRef.current) {
        imageRef.current.style.transform = `rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale(1.03)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x * 120}px, ${y * 120}px)`;
      }
    };

    window.addEventListener("mousemove", moveDepth);
    return () => window.removeEventListener("mousemove", moveDepth);
  }, []);

  const miniCards = t.hero?.cards ?? [
    { icon: <Award className="text-yellow-500" />, text: "جودة تصنيع عالية" },
    { icon: <Target className="text-blue-500" />, text: "حلول صناعية دقيقة" },
    { icon: <Star className="text-blue-600" />, text: "رضا العملاء 100%" },
  ];

  return (
    <CinematicSection>
      {/* ✅ industry-pattern بدون نقطة في البداية */}
      <section className="industry-pattern relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] [perspective:1200px]">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10
            bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
            bg-[size:70px_70px]" />

          <div
            ref={glowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[700px] h-[700px]
              bg-gradient-to-r from-blue-500/20 to-yellow-500/20
              blur-[200px] rounded-full transition-transform duration-300"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full px-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div className={`flex flex-col gap-6 ${lang === "ar" ? "items-end text-right" : "items-start text-left"}`}>

            <span className="text-yellow-500 text-sm tracking-widest">
              {t.hero.badge}
            </span>

            <h1 className="text-5xl xl:text-6xl font-black leading-tight">
              {t.hero.title}
              <br />
              <span className="text-blue-600">
                {t.hero.subtitle}
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl">
              {t.hero.desc}
            </p>

            <div className={`flex gap-4 ${lang === "ar" ? "justify-end" : "justify-start"}`}>
              <a
                href="#products"
                className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold
                  hover:bg-blue-500 transition hover:scale-105"
              >
                {t.hero.cta1}
              </a>

              <a
                href="#contact"
                className="border border-gray-300 px-10 py-4 rounded-xl
                  hover:border-gray-500 transition hover:scale-105"
              >
                {t.hero.cta2}
              </a>
            </div>

            {/* INDUSTRIAL MINI CARDS */}
            <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-3xl w-full">
              {miniCards.map((c: { icon: React.ReactNode; text: string }, i: number) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3">
                    {c.icon}
                    <p className="text-sm font-semibold">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* IMAGE */}
          <div
            ref={imageRef}
            className="relative h-[70vh] rounded-[50px] overflow-visible border border-gray-200 shadow-xl"
          >
            <div className="relative h-full rounded-[50px] overflow-hidden">
              <Image
                src="/img/hero.png"
                fill
                alt="Industrial machinery"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>

            {/* EXPERIENCE CIRCLE */}
            <div className="
              absolute
              bottom-[-40px]
              left-[-40px]
              w-[240px]
              h-[240px]
              rounded-full
              flex flex-col items-center justify-center
              text-center
              border-[10px] border-white
              bg-gradient-to-br from-white via-slate-100 to-yellow-400
              shadow-[0_40px_120px_rgba(0,0,0,0.15)]
              z-10
            ">
              <h3 className="text-6xl font-black text-blue-600">13</h3>
              <p className="text-sm font-semibold text-slate-800 mt-2">
                Years of<br />Experience
              </p>
            </div>

          </div>

        </div>
      </section>
    </CinematicSection>
  );
}