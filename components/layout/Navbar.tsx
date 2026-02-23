"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-100/80 border-b border-slate-100"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            {/* ضع مسار الصورة الصحيح هنا */}
            <div className="relative w-15 h-15">
              <Image
                src="/img/logo.png"
                fill
                alt="Al Ikhlas Logo"
                className="object-contain"
              />
            </div>
            <div className={`font-black text-base tracking-tight text-[var(--text-main)] leading-tight ${isAr ? "text-right" : "text-left"}`}>
              {isAr ? (
                <>
                  <span className="text-blue-600">شركة الإخلاص</span>
                  <span className="text-slate-400 font-normal text-xs block">للصناعات البلاستيكية</span>
                </>
              ) : (
                <>
                  <span className="text-blue-600">Al Ikhlas</span>
                  <span className="text-slate-400 font-normal text-xs block">For Plastic Industries</span>
                </>
              )}
            </div>
          </div>

          {/* NAV LINKS — Desktop */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
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

            {/* LANGUAGE SWITCH */}
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="px-4 py-2 rounded-xl border border-slate-200
                text-sm font-bold text-slate-600
                hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600
                transition-all duration-300"
            >
              {isAr ? "EN" : "AR"}
            </button>

            {/* CTA */}
            <a
              href="#quote"
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
              className="md:hidden p-2 rounded-xl border border-slate-200
                hover:bg-slate-50 transition-all duration-200"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600
                  py-2 border-b border-slate-50 transition-colors duration-200"
              >
                {isAr ? item.labelAr : item.labelEn}
              </a>
            ))}
            <a
              href="#quote"
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