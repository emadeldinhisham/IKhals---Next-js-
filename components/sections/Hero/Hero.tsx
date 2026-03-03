"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import CinematicSection from "@/components/effects/CinematicSection";
import { useEffect, useRef, useState } from "react";
import { Award, Target, Star, ArrowLeft, ArrowRight } from "lucide-react";
import Particles from "@/components/effects/Particles";

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
      if (imageRef.current)
        imageRef.current.style.transform = `rotateY(${x * 6}deg) rotateX(${y * -6}deg) scale(1.02)`;
      if (glowRef.current)
        glowRef.current.style.transform = `translate(${x * 100}px, ${y * 100}px)`;
    };
    window.addEventListener("mousemove", moveDepth);
    return () => { clearTimeout(timer); window.removeEventListener("mousemove", moveDepth); };
  }, []);

  const miniCards = [
    { icon: <Award  className="w-5 h-5" style={{ color: "#f59e0b" }} />, text: isAr ? "جودة تصنيع عالية"  : "High Quality"      },
    { icon: <Target className="w-5 h-5" style={{ color: "#3b82f6" }} />, text: isAr ? "حلول صناعية دقيقة" : "Precise Solutions" },
    { icon: <Star   className="w-5 h-5" style={{ color: "#8b5cf6" }} />, text: isAr ? "رضا العملاء 100%"  : "100% Satisfaction" },
  ];

  return (
    <CinematicSection>
      <section
        className="industry-pattern relative min-h-screen flex items-center overflow-hidden [perspective:1200px]"
        style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}
      >

        {/* ── BACKGROUND LAYERS ── */}
        <div className="absolute inset-0 pointer-events-none">

          {/* Particles */}
          <Particles count={55} />

          {/* Grid */}
          <div className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />

          {/* Main glow blob */}
          <div ref={glowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[900px] h-[700px] rounded-full blur-[180px] transition-transform duration-700"
            style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.14) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)" }}
          />

          {/* Corner accents */}
          <div className="absolute top-[-100px] right-0 w-[500px] h-[500px] rounded-full blur-[150px]"
            style={{ background: "radial-gradient(ellipse, rgba(251,191,36,0.08) 0%, transparent 70%)" }}/>
          <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 70%)" }}/>

          {/* Diagonal accent line */}
          <div className="absolute top-0 right-[40%] w-[1px] h-full opacity-10"
            style={{ background: "linear-gradient(to bottom, transparent, #6366f1, transparent)" }}/>
        </div>

        {/* ── CONTENT ── */}
        <div className="relative z-10 w-full px-10 xl:px-20 grid lg:grid-cols-2 gap-16 items-center py-24">

          {/* TEXT SIDE */}
          <div className={`flex flex-col gap-8 ${isAr ? "items-end text-right" : "items-start text-left"}`}>

            {/* Badge */}
            <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.08))",
                  border: "1px solid rgba(99,102,241,0.25)",
                  color: "#818cf8"
                }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#818cf8" }}/>
                {t.hero.badge}
              </span>
            </div>

            {/* Title */}
            <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "150ms" }}>
              <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-black leading-[1.1] tracking-tight">
                <span style={{ color: "var(--text-main)" }}>{t.hero.title}</span>
                <br/>
                <span className="relative inline-block mt-1">
                  <span style={{
                    background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                    {t.hero.subtitle}
                  </span>
                  {/* Underline */}
                  <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full"
                    style={{ background: "linear-gradient(to right, #3b82f6, #8b5cf6, #f59e0b)" }}/>
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
                className="group flex items-center gap-2 text-white px-8 py-4 rounded-2xl font-bold
                  transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  boxShadow: "0 8px 32px rgba(99,102,241,0.35)"
                }}>
                {t.hero.cta1}
                {isAr
                  ? <ArrowLeft  className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                  : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>}
              </a>

              <a href="#contact"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold
                  transition-all duration-300 hover:scale-105"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--text-main)",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(8px)"
                }}>
                {t.hero.cta2}
              </a>
            </div>

            {/* Mini Cards */}
            <div className={`grid grid-cols-3 gap-3 w-full max-w-xl transition-all duration-700
              ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "450ms" }}>
              {miniCards.map((c, i) => (
                <div key={i}
                  className="group p-4 rounded-2xl hover:-translate-y-1 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)"
                  }}>
                  <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                    <div className="p-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.06)" }}>
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

          {/* IMAGE SIDE */}
          <div
            className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-x-0" : `opacity-0 ${isAr ? "-translate-x-12" : "translate-x-12"}`}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div ref={imageRef}
              className="relative h-[72vh] rounded-[40px] overflow-visible"
              style={{ transition: "transform 0.12s ease-out" }}>

              {/* Outer glow ring */}
              <div className="absolute inset-[-2px] rounded-[42px] z-0"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(251,191,36,0.2), rgba(59,130,246,0.3))", padding: "1px" }}>
                <div className="w-full h-full rounded-[41px]" style={{ backgroundColor: "var(--bg-main)" }}/>
              </div>

              {/* Image */}
              <div className="relative h-full rounded-[40px] overflow-hidden z-10"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <img
                  src="/img/hero.png"
                  alt="Al-Ikhlas Plastic Industries"
                  className="w-full h-full object-cover"
                  style={{ display: "block", position: "relative", zIndex: 1 }}
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,15,30,0.5) 0%, transparent 40%)" }}/>

                {/* Corner badge */}
                <div className="absolute top-5 left-5 z-20 rounded-2xl px-4 py-2 shadow-lg"
                  style={{
                    background: "rgba(10,15,30,0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(99,102,241,0.3)"
                  }}>
                  <p className="text-xs font-black uppercase tracking-wider" style={{ color: "#818cf8" }}>
                    {isAr ? "🏭 مصنع الإخلاص" : "🏭 Al-Ikhlas Factory"}
                  </p>
                </div>
              </div>

              {/* EXPERIENCE CIRCLE */}
              <div className="absolute bottom-[-28px] left-[-28px] z-20
                w-[180px] h-[180px] rounded-full
                flex flex-col items-center justify-center text-center"
                style={{
                  background: "linear-gradient(135deg, #1e2d4a 0%, #0f172a 60%)",
                  border: "5px solid var(--bg-main)",
                  boxShadow: "0 20px 60px rgba(99,102,241,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                }}>
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(ellipse at 30% 30%, rgba(99,102,241,0.2), transparent 60%)" }}/>
                <h3 className="text-5xl font-black leading-none relative z-10"
                  style={{ background: "linear-gradient(135deg, #60a5fa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  13
                </h3>
                <p className="text-xs font-semibold mt-1 leading-tight relative z-10" style={{ color: "#94a3b8" }}>
                  {isAr ? "سنة خبرة" : "Years of\nExperience"}
                </p>
              </div>

              {/* Floating stat */}
              <div className="absolute top-[-16px] right-[-16px] z-20 rounded-2xl px-5 py-3"
                style={{
                  background: "linear-gradient(135deg, #1e2d4a, #0f172a)",
                  border: "1px solid rgba(251,191,36,0.3)",
                  boxShadow: "0 8px 32px rgba(251,191,36,0.15)"
                }}>
                <p className="text-2xl font-black"
                  style={{ background: "linear-gradient(135deg, #fbbf24, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  500+
                </p>
                <p className="text-xs font-semibold" style={{ color: "#94a3b8" }}>
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