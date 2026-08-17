"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import CinematicSection from "@/components/effects/CinematicSection";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Smile } from "lucide-react";
import Particles from "@/components/effects/Particles";

/* ══════════════════════════════════════════
   COUNT UP — رقم بيعد لغاية القيمة النهائية
   بيشتغل مرة واحدة لما loaded=true
══════════════════════════════════════════ */
function CountUp({ target, loaded, suffix = "" }: { target: number; loaded: boolean; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!loaded) return;
    let raf: number;
    const duration = 1400;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [loaded, target]);

  return <>{value}{suffix}</>;
}

export default function Hero() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";
  const [loaded, setLoaded] = useState(false);

  /* موشن فاليوز للـ tilt 3D — أنعم من manual style.transform */
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 150, damping: 20 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const glowX = useTransform(springX, [-0.5, 0.5], [-100, 100]);
  const glowY = useTransform(springY, [-0.5, 0.5], [-100, 100]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    const moveDepth = (e: MouseEvent) => {
      mvX.set(e.clientX / window.innerWidth - 0.5);
      mvY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", moveDepth);
    return () => { clearTimeout(timer); window.removeEventListener("mousemove", moveDepth); };
  }, [mvX, mvY]);

  const miniCards = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      iconColor: "#f59e0b",
      iconBg: "rgba(245,158,11,0.12)",
      borderColor: "rgba(245,158,11,0.2)",
      glowColor: "rgba(245,158,11,0.08)",
      text: isAr ? "جودة تصنيع عالية" : "High Quality",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      iconColor: "#60a5fa",
      iconBg: "rgba(96,165,250,0.12)",
      borderColor: "rgba(96,165,250,0.2)",
      glowColor: "rgba(96,165,250,0.08)",
      text: isAr ? "حلول صناعية دقيقة" : "Precise Solutions",
    },
    {
      icon: <Smile className="w-6 h-6" />,
      iconColor: "#a78bfa",
      iconBg: "rgba(167,139,250,0.12)",
      borderColor: "rgba(167,139,250,0.2)",
      glowColor: "rgba(167,139,250,0.08)",
      text: isAr ? "رضا العملاء 100%" : "100% Satisfaction",
    },
  ];

  /* variants للنص — دخول متتابع بدل transitionDelay يدوي */
  const textCol = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <CinematicSection>
      <section
        className="industry-pattern relative min-h-screen flex items-center overflow-hidden [perspective:1200px]"
        style={{ backgroundColor: "var(--bg-main)", color: "var(--text-main)" }}
      >
        {/* ── BACKGROUND ── */}
        <div className="absolute inset-0 pointer-events-none">
          <Particles count={55} />
          <div className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}/>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full blur-[180px]"
            style={{
              background: "radial-gradient(ellipse, rgba(59,130,246,0.14) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)",
              x: glowX,
              y: glowY,
            }}/>
          <div className="absolute top-[-100px] right-0 w-[500px] h-[500px] rounded-full blur-[150px]"
            style={{ background: "radial-gradient(ellipse, rgba(251,191,36,0.08) 0%, transparent 70%)" }}/>
          <div className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.10) 0%, transparent 70%)" }}/>
          <div className="absolute top-0 right-[40%] w-[1px] h-full opacity-10"
            style={{ background: "linear-gradient(to bottom, transparent, #6366f1, transparent)" }}/>
        </div>

        {/* ── CONTENT ── */}
        <div className="relative z-10 w-full px-10 xl:px-20 grid lg:grid-cols-2 gap-16 items-center py-24">

          {/* TEXT */}
          <motion.div
            variants={textCol}
            initial="hidden"
            animate={loaded ? "show" : "hidden"}
            className={`flex flex-col gap-8 ${isAr ? "items-end text-right" : "items-start text-left"}`}
          >

            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.08))", border: "1px solid rgba(99,102,241,0.25)", color: "#818cf8" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#818cf8" }}/>
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div variants={fadeUp}>
              <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-black leading-[1.1] tracking-tight">
                <span style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #818cf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {t.hero.title}
                </span>
                <br/>
                <span className="relative inline-block mt-1">
                  <span style={{ background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {t.hero.subtitle}
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full origin-left"
                    style={{ background: "linear-gradient(to right, #3b82f6, #8b5cf6, #f59e0b)" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: loaded ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeUp}>
              <p className="text-lg max-w-xl leading-relaxed" style={{ color: "var(--text-soft)" }}>
                {t.hero.desc}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp}
              className={`flex gap-4 flex-wrap ${isAr ? "justify-end" : "justify-start"}`}>

              <motion.a href="#products"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="group flex items-center gap-2 text-white px-8 py-4 rounded-2xl font-bold"
                style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", boxShadow: "0 8px 32px rgba(99,102,241,0.35)" }}>
                {t.hero.cta1}
                {isAr
                  ? <ArrowLeft  className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                  : <ArrowRight className="w-4 h-4 group-hover:translate-x-1  transition-transform"/>}
              </motion.a>

              <motion.a href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #d97706)",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(245,158,11,0.35)",
                }}>
                {t.hero.cta2}
              </motion.a>
            </motion.div>

            {/* Mini Cards */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 w-full max-w-xl">
              {miniCards.map((c, i) => (
                <motion.div key={i}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative p-4 rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${c.borderColor}`,
                    backdropFilter: "blur(12px)",
                  }}>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 50% 100%, ${c.glowColor}, transparent 70%)` }}/>

                  <div className="relative flex flex-col items-center gap-2 text-center">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: c.iconBg, color: c.iconColor }}>
                      {c.icon}
                    </motion.div>
                    <p className="text-xs font-bold leading-tight" style={{ color: "var(--text-main)" }}>
                      {c.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -48 : 48 }}
            animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : (isAr ? -48 : 48) }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative h-[72vh] rounded-[40px] overflow-visible"
              style={{ rotateY, rotateX, transformPerspective: 1200 }}>

              <div className="absolute inset-[-2px] rounded-[42px] z-0"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(251,191,36,0.2), rgba(59,130,246,0.3))", padding: "1px" }}>
                <div className="w-full h-full rounded-[41px]" style={{ backgroundColor: "var(--bg-main)" }}/>
              </div>

              <div className="relative h-full rounded-[40px] overflow-hidden z-10"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src="/img/hero.png" alt="Al-Ikhlas Plastic Industries"
                  className="w-full h-full object-cover"
                  style={{ display: "block", position: "relative", zIndex: 1 }}/>
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,15,30,0.5) 0%, transparent 40%)" }}/>
              </div>

              {/* دائرة الخبرة — عدد متحرك + تعويم هادئ مستمر */}
              <motion.div
                className="absolute bottom-[-28px] left-[-28px] z-20 w-[180px] h-[180px] rounded-full flex flex-col items-center justify-center text-center"
                style={{ background: "linear-gradient(135deg, #1e2d4a 0%, #0f172a 60%)", border: "5px solid var(--bg-main)", boxShadow: "0 20px 60px rgba(99,102,241,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: loaded ? 1 : 0,
                  scale: loaded ? 1 : 0.7,
                  y: loaded ? [0, -10, 0] : 0,
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.7 },
                  scale: { type: "spring", stiffness: 260, damping: 18, delay: 0.7 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.3 },
                }}
              >
                <div className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(ellipse at 30% 30%, rgba(99,102,241,0.2), transparent 60%)" }}/>
                <h3 className="text-5xl font-black leading-none relative z-10"
                  style={{ background: "linear-gradient(135deg, #60a5fa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  <CountUp target={50} loaded={loaded} />
                </h3>
                <p className="text-xs font-semibold mt-1 leading-tight relative z-10" style={{ color: "#94a3b8" }}>
                  {isAr ? "سنة خبرة" : "Years of Experience"}
                </p>
              </motion.div>

              {/* بطاقة عائمة — تعويم هادئ مستمر بإيقاع مختلف */}
              <motion.div
                className="absolute top-[-16px] right-[-16px] z-20 rounded-2xl px-5 py-3"
                style={{ background: "linear-gradient(135deg, #1e2d4a, #0f172a)", border: "1px solid rgba(251,191,36,0.3)", boxShadow: "0 8px 32px rgba(251,191,36,0.15)" }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: loaded ? 1 : 0,
                  scale: loaded ? 1 : 0.7,
                  y: loaded ? [0, 10, 0] : 0,
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.85 },
                  scale: { type: "spring", stiffness: 260, damping: 18, delay: 0.85 },
                  y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                }}
              >
                <p className="text-2xl font-black"
                  style={{ background: "linear-gradient(135deg, #fbbf24, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  <CountUp target={100} loaded={loaded} suffix="+" />
                </p>
                <p className="text-xs font-semibold" style={{ color: "#94a3b8" }}>
                  {isAr ? "عميل راضٍ" : "Happy Clients"}
                </p>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>
    </CinematicSection>
  );
}