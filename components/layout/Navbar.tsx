"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
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
    <header
      className="fixed top-0 left-0 w-full z-[9000]"
      style={{
        background:     scrolled ? "var(--navbar-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom:   scrolled ? "1px solid var(--border)" : "none",
        boxShadow:      scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
        transform:      visible  ? "translateY(0)" : "translateY(-100%)",
        transition:     "transform 0.4s cubic-bezier(0.4,0,0.2,1), background 0.3s, box-shadow 0.3s",
        willChange:     "transform",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-md shadow-blue-500/20">
            <img src="/img/logo.png" alt="Al Ikhlas Logo" className="w-full h-full object-contain"/>
          </div>
          <div className={`font-black text-base tracking-tight leading-tight ${isAr ? "text-right" : "text-left"}`}>
            {isAr ? (
              <>
                <span style={{ color: "var(--accent-blue)" }}>شركة الإخلاص</span>
                <span className="block text-xs font-normal" style={{ color: "var(--text-soft)" }}>للصناعات البلاستيكية</span>
              </>
            ) : (
              <>
                <span style={{ color: "var(--accent-blue)" }}>Al Ikhlas</span>
                <span className="block text-xs font-normal" style={{ color: "var(--text-soft)" }}>Plastic Industries</span>
              </>
            )}
          </div>
        </a>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          {navLinks.map((item, i) => (
            <a key={i} href={item.link}
              className="relative py-1 transition duration-300 hover:text-blue-500
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

          {/* DARK MODE */}
          <button onClick={() => setDark(!dark)}
            className="p-2 rounded-xl border hover:scale-105 transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--text-soft)", backgroundColor: "transparent" }}>
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>

          {/* LANGUAGE */}
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="px-3 py-2 rounded-xl border text-sm font-bold hover:scale-105 transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--text-soft)", backgroundColor: "transparent" }}>
            {isAr ? "EN" : "AR"}
          </button>

          {/* ── صمم طلبيتك → يذهب لسكشن ReqestAds ── */}
          <a href="#request-ads"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              color: "#fff",
              boxShadow: "0 4px 16px rgba(245,158,11,0.35)",
            }}>
            <FileText size={15}/>
            {isAr ? "صمم طلبيتك" : "Design Order"}
          </a>

          {/* Mobile Button */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl border transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}>
            {menuOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-4 flex flex-col gap-3 border-t"
          style={{ backgroundColor: "var(--navbar-bg)", borderColor: "var(--border)", backdropFilter: "blur(20px)" }}>
          {navLinks.map((item, i) => (
            <a key={i} href={item.link} onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold py-2 border-b transition-colors duration-200 hover:text-blue-500"
              style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}>
              {isAr ? item.labelAr : item.labelEn}
            </a>
          ))}
          <a href="#request-ads" onClick={() => setMenuOpen(false)}
            className="mt-2 text-center font-bold py-3 rounded-xl"
            style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#fff" }}>
            {isAr ? "🎨 صمم طلبيتك" : "🎨 Design Order"}
          </a>
        </div>
      </div>
    </header>
  );
}