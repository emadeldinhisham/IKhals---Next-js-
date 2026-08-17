"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, FileText } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark,     setDark]     = useState(false);
  const [mounted,  setMounted]  = useState(false);
  const [visible,  setVisible]  = useState(true);
  const lastYRef   = useRef(0);
  const ticking    = useRef(false);

  const { lang, setLang } = useLanguage();
  const isAr = lang === "ar";

  /* ── Dark mode ── */
  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem("darkMode") === "true") setDark(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("darkMode", String(dark));
  }, [dark, mounted]);

  /* ── Scroll — requestAnimationFrame لمنع التقطع ── */
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 30);
        if (y > lastYRef.current + 10 && y > 100) {
          setVisible(false);
        } else if (y < lastYRef.current - 5) {
          setVisible(true);
        }
        lastYRef.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { labelAr: "الرئيسية",   labelEn: "Home",         link: "#"             },
    { labelAr: "من نحن",     labelEn: "About",        link: "#about"        },
    { labelAr: "المنتجات",   labelEn: "Products",     link: "#products"     },
    { labelAr: "الاعتمادات", labelEn: "Certificates", link: "#certificates" },
    { labelAr: "تواصل معنا", labelEn: "Contact",      link: "#contact"      },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-[9000]"
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: 1,
      }}
      transition={{
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      }}
      style={{
        background:     scrolled ? "var(--navbar-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom:   scrolled ? "1px solid var(--border)" : "none",
        boxShadow:      scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
        transition:     "background 0.3s, box-shadow 0.3s, border-bottom 0.3s",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO — دائري بحلقة متدرجة، وتلوين ثنائي للاسم */}
        <a href="#" className="flex items-center gap-3 group">
          <motion.div
            className="relative w-20 h-20 rounded-full flex-shrink-0"
            whileHover={{ scale: 1.06, rotate: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* حلقة متدرجة حول اللوجو */}
            <div className="absolute inset-[-2px] rounded-full"
              style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1, #f59e0b)" }}/>
            <div className="absolute inset-0 rounded-full overflow-hidden"
              style={{ border: "2px solid var(--bg-main)" }}>
              <img src="/img/logo2.png" alt="Al Ikhlas Logo" className="w-full h-full object-cover"/>
            </div>
          </motion.div>

          <div className={`font-black text-base tracking-tight leading-tight ${isAr ? "text-right" : "text-left"}`}>
            {isAr ? (
              <>
                <span style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  الإخلاص
                </span>
                <span className="block text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  للصناعات البلاستيكية
                </span>
              </>
            ) : (
              <>
                <span style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Al Ikhlas
                </span>
                <span className="block text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  for Plastic Industries
                </span>
              </>
            )}
          </div>
        </a>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          {navLinks.map((item, i) => (
            <a key={i} href={item.link}
              className="relative py-1 transition-colors duration-300 hover:text-blue-500
                after:absolute after:left-0 after:bottom-[-4px]
                after:h-[2px] after:w-0 after:rounded-full
                after:bg-gradient-to-r after:from-blue-500 after:to-yellow-400
                after:transition-all after:duration-300
                hover:after:w-full"
              style={{ color: "var(--text-soft)" }}>
              {isAr ? item.labelAr : item.labelEn}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">

          {/* DARK MODE — أيقونة بتلف مع التبديل */}
          <motion.button onClick={() => setDark(!dark)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="p-2 rounded-xl border overflow-hidden"
            style={{ borderColor: "var(--border)", color: "var(--text-soft)", backgroundColor: "transparent" }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                {dark ? <Sun size={18}/> : <Moon size={18}/>}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* LANGUAGE */}
          <motion.button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="px-3 py-2 rounded-xl border text-sm font-bold"
            style={{ borderColor: "var(--border)", color: "var(--text-soft)", backgroundColor: "transparent" }}>
            {isAr ? "EN" : "AR"}
          </motion.button>

          {/* صمم طلبيتك */}
          <motion.a href="#request-ads"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              color: "#fff",
              boxShadow: "0 4px 16px rgba(245,158,11,0.35)",
            }}>
            <FileText size={15}/>
            {isAr ? "صمم طلبيتك" : "Design Order"}
          </motion.a>

          {/* Mobile Button */}
          <motion.button onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-xl border"
            style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {menuOpen ? <X size={20}/> : <Menu size={20}/>}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU — انزلاق حقيقي بدل max-height */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 py-4 flex flex-col gap-3 border-t"
              style={{ backgroundColor: "var(--navbar-bg)", borderColor: "var(--border)", backdropFilter: "blur(20px)" }}>
              {navLinks.map((item, i) => (
                <motion.a key={i} href={item.link} onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: isAr ? 12 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="text-sm font-semibold py-2 border-b transition-colors duration-200 hover:text-blue-500"
                  style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}>
                  {isAr ? item.labelAr : item.labelEn}
                </motion.a>
              ))}
              <a href="#request-ads" onClick={() => setMenuOpen(false)}
                className="mt-2 text-center font-bold py-3 rounded-xl"
                style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#fff" }}>
                {isAr ? "🎨 صمم طلبيتك" : "🎨 Design Order"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}