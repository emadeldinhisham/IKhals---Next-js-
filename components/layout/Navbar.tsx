"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {

  const [scrolled,setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(()=>{
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll",onScroll);
    return ()=> window.removeEventListener("scroll",onScroll);
  },[]);

  return (

    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${scrolled
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"}
      `}
    >

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="font-black text-xl text-white">
          الإخلاص
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">
          <a href="#top">الرئيسية</a>
          <a href="#about">من نحن</a>
          <a href="#products">المنتجات</a>
          <a href="#certificates">الاعتمادات</a>
          <a href="#contact">تواصل معنا</a>
        </nav>

        <div className="flex items-center gap-4">

          <button
            onClick={()=>setLang(lang==="ar" ? "en":"ar")}
            className="px-4 py-2 rounded-lg bg-white/10 text-white"
          >
            {lang==="ar" ? "English" : "العربية"}
          </button>

          <a
            href="#quote"
            className="hidden md:inline-block px-5 py-2 rounded-xl bg-yellow-500 text-black font-black text-sm hover:bg-yellow-400 transition"
          >
            طلب عرض سعر
          </a>

        </div>

      </div>

    </header>
  );
}
