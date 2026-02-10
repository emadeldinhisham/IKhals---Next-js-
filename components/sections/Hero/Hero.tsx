"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Hero() {

const { t, lang } = useLanguage();



  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleScroll = () => {

      if (!imageRef.current) return;

      const scrollY = window.scrollY;

      imageRef.current.style.transform =
        `translateY(${scrollY * 0.15}px)`;

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  return (

    <section
      className="min-h-screen flex items-center
      bg-[#020617] text-white relative overflow-hidden"
    >

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none
      bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
      bg-[size:80px_80px]" />

      <div className="w-full px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
<div className={`flex flex-col ${lang === "ar" ? "items-end text-right" : "items-start text-left"}`}>

          <span className="text-yellow-400 text-lg mb-6 inline-block">
            {t.hero.badge}

          </span>

          <h1 className="text-7xl xl:text-8xl font-black leading-tight mb-8">

            {t.hero.title}

            <br/>

            <span className="text-blue-500">
              {t.hero.subtitle}
            </span>

          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-xl">
            {t.hero.desc}
          </p>

          <div className={`flex gap-6 ${lang === "ar" ? "justify-end" : "justify-start"}`}>

          <a
  href="#products"
  className="bg-blue-600 text-white
  px-14 py-6
  text-xl font-bold
  rounded-2xl
  shadow-lg shadow-blue-500/20
  hover:bg-blue-500
  hover:scale-105
  transition duration-300"
>
  {t.hero.cta1}
</a>

<a
  href="#contact"
  className="border border-white/20
  px-14 py-6
  text-xl font-bold
  rounded-2xl
  backdrop-blur
  hover:border-white/40
  hover:scale-105
  transition duration-300"
>
  {t.hero.cta2}
</a>

          </div>

        </div>

 {/* IMAGE */}
<div
  ref={imageRef}
  className="relative h-[80vh] rounded-[60px] overflow-hidden border border-white/10 transition-transform duration-300"
>

          <Image
            src="/img/hero.png"
            fill
            alt="industrial"
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
        </div>

      </div>

    </section>
  );
}
