"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import CinematicSection from "@/components/effects/CinematicSection";
import { useEffect, useRef, useState } from "react";
import { Award, Target, Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef  = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    const moveDepth = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth  - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (imageRef.current) {
        imageRef.current.style.transform = `rotateY(${x * 8}deg) rotateX(${y * -8}deg) scale(1.02)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x * 120}px, ${y * 120}px)`;
      }
    };
    window.addEventListener("mousemove", moveDepth);
    return () => { clearTimeout(timer); window.removeEventListener("mousemove", moveDepth); };
  }, []);

  const miniCards = [
    { icon: <Award className="text-yellow-500 w-5 h-5" />, text: isAr ? "جودة تصنيع عالية"   : "High Quality"       },
    { icon: <Target className="text-blue-500 w-5 h-5" />, text: isAr ? "حلول صناعية دقيقة"  : "Precise Solutions"  },
    { icon: <Star   className="text-blue-600 w-5 h-5" />, text: isAr ? "رضا العملاء 100%"    : "100% Satisfaction"  },
  ];

  return (
    <CinematicSection>
      <section className="industry-pattern relative min-h-screen flex items-center overflow-hidden [perspective:1200px]"
        style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}>

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]
            bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)]
            bg-[size:60px_60px]"/>
          <div ref={glowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[800px] h-[800px] blur-[200px] rounded-full transition-transform duration-500"
            style={{ background: "radial-gradient(ellipse, var(--glow-blue) 0%, transparent 60%)" }}/>
          <div className="absolute top-0 left-0 w-96 h-96 blur-[100px] rounded-full"
            style={{ background: "var(--glow-blue)" }}/>
          <div className="absolute bottom-0 right-0 w-96 h-96 blur-[100px] rounded-full"
            style={{ background: "var(--glow-gold)" }}/>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full px-10 xl:px-20 grid lg:grid-cols-2 gap-16 items-center py-20">

          {/* TEXT */}
          <div className={`flex flex-col gap-7 ${isAr ? "items-end text-right" : "items-start text-left"}`}>

            {/* Badge */}
            <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 border text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "var(--bg-card2)",
                  borderColor: "var(--border)",
                  color: "var(--accent-blue)"
                }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: "var(--accent-blue)" }}/>
                {t.hero.badge}
              </span>
            </div>

            {/* Title */}
            <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "150ms" }}>
              <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight tracking-tight">
                {t.hero.title}
                <br />
                <span className="relative">
                  <span style={{ color: "var(--accent-blue)" }}>{t.hero.subtitle}</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                    style={{ background: "linear-gradient(to right, var(--accent-blue), var(--accent-gold))" }}/>
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "250ms" }}>
              <p className="text-lg max-w-xl leading-relaxed" style={{ color: "var(--text-soft)" }}>
                {t.hero.desc}
              </p>
            </div>

            {/* CTAs */}
            <div className={`flex gap-4 flex-wrap transition-all duration-700
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              ${isAr ? "justify-end" : "justify-start"}`}
              style={{ transitionDelay: "350ms" }}>
              <a href="#products"
                className="group flex items-center gap-2 text-white px-8 py-4 rounded-2xl
                  font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "var(--accent-blue)" }}>
                {t.hero.cta1}
                {isAr
                  ? <ArrowLeft  className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                  : <ArrowRight className="w-4 h-4 group-hover:translate-x-1  transition-transform"/>}
              </a>
              <a href="#contact"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold
                  transition-all duration-300 hover:scale-105 border-2"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-main)",
                  backgroundColor: "transparent"
                }}>
                {t.hero.cta2}
              </a>
            </div>

            {/* Mini Cards */}
            <div className={`grid grid-cols-3 gap-4 w-full max-w-2xl transition-all duration-700
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "450ms" }}>
              {miniCards.map((c, i) => (
                <div key={i}
                  className="group p-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1
                    transition-all duration-300 border"
                  style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div className="p-1.5 rounded-lg transition-colors"
                      style={{ backgroundColor: "var(--bg-card2)" }}>
                      {c.icon}
                    </div>
                    <p className="text-xs font-bold leading-tight" style={{ color: "var(--text-main)" }}>
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* IMAGE */}
          <div className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-x-0" : `opacity-0 ${isAr ? "-translate-x-12" : "translate-x-12"}`}`}
            style={{ transitionDelay: "200ms" }}>
            <div ref={imageRef}
              className="relative h-[72vh] rounded-[40px] overflow-visible"
              style={{ transition: "transform 0.1s ease-out" }}>

              {/* Image container */}
              <div className="relative h-full rounded-[40px] overflow-hidden shadow-2xl"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                <img
                  src="/img/hero.png"
                  alt="Al-Ikhlas Plastic Industries"
                  className="w-full h-full object-cover"
                  style={{ display: "block", position: "relative", zIndex: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"/>

                {/* Corner badge */}
                <div className="absolute top-6 left-6 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border"
                  style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <p className="text-xs font-black uppercase tracking-wider"
                    style={{ color: "var(--accent-blue)" }}>
                    {isAr ? "🏭 مصنع الإخلاص" : "🏭 Al-Ikhlas Factory"}
                  </p>
                </div>
              </div>

              {/* EXPERIENCE CIRCLE */}
              <div className="absolute bottom-[-30px] left-[-30px]
                w-[200px] h-[200px] rounded-full z-10
                flex flex-col items-center justify-center text-center
                shadow-[0_20px_80px_rgba(0,0,0,0.2)]"
                style={{
                  background: "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-card2) 60%, #fde68a 100%)",
                  border: "8px solid var(--bg-main)"
                }}>
                <h3 className="text-5xl font-black leading-none" style={{ color: "var(--accent-blue)" }}>13</h3>
                <p className="text-xs font-bold mt-1 leading-tight" style={{ color: "var(--text-soft)" }}>
                  {isAr ? "سنة\nخبرة" : "Years of\nExperience"}
                </p>
              </div>

              {/* Floating stat */}
              <div className="absolute top-[-20px] right-[-20px] rounded-2xl px-5 py-3 shadow-xl z-10 border"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                <p className="text-2xl font-black" style={{ color: "var(--accent-blue)" }}>500+</p>
                <p className="text-xs font-semibold" style={{ color: "var(--text-soft)" }}>
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