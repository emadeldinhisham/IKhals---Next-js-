"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') setDark(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('darkMode', 'false');
    }
  }, [dark, mounted]);

  const { lang, setLang } = useLanguage();
  const isAr = lang === "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { labelAr: "الرئيسية",   labelEn: "Home",         link: "#"             },
    { labelAr: "من نحن",     labelEn: "About",        link: "#about"        },
    { labelAr: "المنتجات",   labelEn: "Products",     link: "#products"     },
    { labelAr: "الاعتمادات", labelEn: "Certificates", link: "#certificates" },
    { labelAr: "تواصل معنا", labelEn: "Contact",      link: "#contact"      },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        style={{
          background: scrolled ? "var(--navbar-bg, rgba(248,250,252,0.92))" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-15 h-15 rounded-x2 overflow-hidden flex-shrink-0 shadow-md shadow-blue-500/20">
              <img
                src="/img/logo.png"
                alt="Al Ikhlas Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className={`font-black text-base tracking-tight leading-tight ${isAr ? "text-right" : "text-left"}`}>
              {isAr ? (
                <>
                  <span className="text-blue-500">شركة الإخلاص</span>
                  <span className="block text-xs font-normal" style={{ color: "var(--text-soft)" }}>للصناعات البلاستيكية</span>
                </>
              ) : (
                <>
                  <span className="text-blue-500">Al Ikhlas for</span>
                  <span className="block text-xs font-normal" style={{ color: "var(--text-soft)" }}>Plastic Industries</span>
                </>
              )}
            </div>
          </div>

          {/* NAV LINKS — Desktop */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold" style={{ color: "var(--text-soft)" }}>
            {navLinks.map((item, i) => (
              <a key={i} href={item.link}
                className="relative hover:text-blue-600 transition duration-300 py-1
                  after:absolute after:left-0 after:bottom-[-4px]
                  after:h-[2px] after:w-0 after:rounded-full
                  after:bg-gradient-to-r after:from-blue-500 after:to-yellow-400
                  after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {isAr ? item.labelAr : item.labelEn}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* DARK MODE */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-xl border hover:scale-105 transition-all duration-200"
              style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}
              title={dark ? (isAr ? "الوضع النهاري" : "Light Mode") : (isAr ? "الوضع الليلي" : "Dark Mode")}
            >
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>

            {/* LANGUAGE SWITCH */}
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="px-4 py-2 rounded-xl border text-sm font-bold hover:scale-105 transition-all duration-200"
              style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}
            >
              {isAr ? "EN" : "AR"}
            </button>

            {/* CTA */}
            <a href="#quote"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
                bg-blue-600 text-white font-bold text-sm
                hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-200
                transition-all duration-300"
            >
              {isAr ? "طلب عرض سعر" : "Request Quote"}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-700
                hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              {menuOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-6 py-4 flex flex-col gap-4 border-t"
            style={{ backgroundColor: "var(--navbar-bg)", borderColor: "var(--border)", backdropFilter: "blur(20px)" }}>
            {navLinks.map((item, i) => (
              <a key={i} href={item.link} onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300
                  hover:text-blue-600 py-2 border-b border-slate-50 dark:border-slate-800
                  transition-colors duration-200"
              >
                {isAr ? item.labelAr : item.labelEn}
              </a>
            ))}
            <a href="#quote"
              className="mt-2 text-center bg-blue-600 text-white font-bold
                py-3 rounded-xl hover:bg-blue-500 transition-colors duration-200"
            >
              {isAr ? "طلب عرض سعر" : "Request Quote"}
            </a>
          </div>
        </div>

      </header>
    </>
  );
}