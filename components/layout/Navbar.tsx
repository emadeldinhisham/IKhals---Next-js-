"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {

  const [scrolled,setScrolled] = useState(false);

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
        
        {/* Logo */}
        <div className="font-black text-xl text-white">
          الإخلاص
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">

          <a href="#top" className="hover:text-white transition">الرئيسية</a>
          <a href="#about" className="hover:text-white transition">من نحن</a>
          <a href="#products" className="hover:text-white transition">المنتجات</a>
          <a href="#certificates" className="hover:text-white transition">الاعتمادات</a>
          <a href="#contact" className="hover:text-white transition">تواصل معنا</a>

        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">

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
