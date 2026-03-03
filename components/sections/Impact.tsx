"use client";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useEffect, useRef, useState } from "react";

/* =============================================
   STAT CARD مع عداد متحرك
============================================= */
function StatCard({
  value, suffix, title, color, delay, icon
}: {
  value: number; suffix: string; title: string;
  color: string; delay: number; icon: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count,   setCount]   = useState(0);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setStarted(true), delay);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const duration = 2200;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * progress); // easeOutExpo
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  return (
    <div
      ref={ref}
      className="relative p-10 rounded-[32px] border overflow-hidden
        transition-all duration-700 hover:scale-[1.04] group"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(50px)",
        transitionDelay: `${delay}ms`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      }}
    >
      {/* glow عند hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}15 0%, transparent 65%)` }}/>

      {/* خط علوي */}
      <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full transition-all duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${color}80, transparent)` }}/>
      <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}/>

      {/* أيقونة */}
      <div className="text-4xl mb-5">{icon}</div>

      {/* العداد */}
      <div className="flex items-end gap-0.5 mb-3">
        <span className="text-6xl xl:text-7xl font-black leading-none tabular-nums"
          style={{ color }}>
          {value >= 1000 ? (count >= 1000 ? `${(count/1000).toFixed(1)}K` : count) : count}
        </span>
        <span className="text-4xl font-black mb-1" style={{ color }}>{suffix}</span>
      </div>

      {/* العنوان */}
      <p className="text-base font-semibold leading-snug" style={{ color: "var(--text-soft)" }}>
        {title}
      </p>
    </div>
  );
}

/* =============================================
   IMPACT SECTION
============================================= */
export default function Impact() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const stats = [
    { value: 5000, suffix: "+", title: t.impact.production, color: "#60a5fa", delay: 0,   icon: "🏭" },
    { value: 10,   suffix: "+", title: t.impact.export,     color: "#fbbf24", delay: 150, icon: "🌍" },
    { value: 12,   suffix: "+", title: t.impact.sectors,    color: "#34d399", delay: 300, icon: "⚙️" },
  ];

  return (
    <section className="industry-pattern relative py-36 overflow-hidden"
      style={{ backgroundColor: "var(--bg-soft)" }}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}/>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.08), transparent 70%)" }}/>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(ellipse, rgba(251,191,36,0.06), transparent 70%)" }}/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`mb-20 ${isAr ? "text-right" : "text-left"}`}>
          <span className="text-xs font-bold tracking-widest uppercase mb-3 block"
            style={{ color: "var(--accent-gold)" }}>
            {isAr ? "بالأرقام" : "By The Numbers"}
          </span>
          <h2 className="text-5xl xl:text-6xl font-black" style={{ color: "var(--text-main)" }}>
            {t.impact.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s, i) => <StatCard key={i} {...s} />)}
        </div>

      </div>
    </section>
  );
}