"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Hero() {

  const { lang, t } = useLanguage();
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleScroll = () => {

      if (!imageRef.current) return;

      const scrollY = window.scrollY;

      imageRef.current.style.transform =
        `translateY(${scrollY * 0.08}px) scale(1.02)`;

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

<section className="min-h-screen flex items-center relative overflow-hidden bg-[#020617] text-white">

{/* CINEMATIC BACKGROUND */}

<div className="absolute inset-0">

<div className="absolute inset-0 opacity-20
bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
bg-[size:80px_80px]" />

<div className="absolute top-[-200px] left-[10%] w-[600px] h-[600px]
bg-yellow-500/10 blur-[160px] rounded-full"/>

<div className="absolute bottom-[-200px] right-[10%] w-[600px] h-[600px]
bg-blue-500/10 blur-[160px] rounded-full"/>

</div>

{/* CONTENT */}

<div className="relative z-10 w-full px-10 grid lg:grid-cols-2 gap-16 items-center">

{/* TEXT SIDE */}

<div className={`flex flex-col
${lang==="ar" ? "items-end text-right" : "items-start text-left"}`}>

<span className="text-yellow-400 text-sm mb-6 tracking-wider">
{t.hero.badge}
</span>

<h1 className="text-5xl xl:text-6xl font-black leading-tight mb-6">

{t.hero.title}

<br/>

<span className="text-blue-500">
{t.hero.subtitle}
</span>

</h1>

<p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
{t.hero.desc}
</p>

<div className={`flex gap-4
${lang==="ar" ? "justify-end" : "justify-start"}`}>

<a
href="#products"
className="bg-blue-600 px-10 py-4 rounded-xl font-bold
hover:bg-blue-500 transition hover:scale-105"
>
{t.hero.cta1}
</a>

<a
href="#contact"
className="border border-white/20 px-10 py-4 rounded-xl
hover:border-white/40 transition"
>
{t.hero.cta2}
</a>

</div>

</div>

{/* IMAGE SIDE */}

<div
ref={imageRef}
className="relative h-[70vh] rounded-[50px] overflow-hidden border border-white/10 shadow-2xl"
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
