"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import Reveal from "@/components/effects/Reveal";
import CinematicSection from "@/components/effects/CinematicSection";
import { useEffect, useRef } from "react";

export default function About() {

 const { t, lang } = useLanguage();

 const glowRef = useRef<HTMLDivElement>(null);

 useEffect(()=>{

  const moveGlow = (e:MouseEvent)=>{

    if(!glowRef.current) return;

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glowRef.current.style.transform =
      `translate(${x*60}px, ${y*60}px)`;

  };

  window.addEventListener("mousemove", moveGlow);

  return ()=> window.removeEventListener("mousemove", moveGlow);

 },[]);


  return (

<CinematicSection>

<section
  id="about"
  className="relative py-48 overflow-hidden text-white"
>

{/* BACKGROUND */}

<div className="absolute inset-0 pointer-events-none">

<div className="absolute inset-0 opacity-20
bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
bg-[size:80px_80px]" />

<div
ref={glowRef}
className="absolute w-[700px] h-[700px]
bg-gradient-to-r from-yellow-500/20 to-blue-500/20
blur-[200px] rounded-full transition-transform duration-300"
/>

</div>


<div className={`relative z-10 max-w-7xl mx-auto px-6
${lang==="ar" ? "text-right" : "text-left"}`}>

{/* TITLE */}

<Reveal>

<h2 className="text-6xl md:text-7xl font-black mb-16 leading-tight">

<span className="bg-gradient-to-r
from-blue-400 via-white to-yellow-400
bg-clip-text text-transparent">

{t.about.title}

</span>

</h2>

</Reveal>


{/* PARAGRAPHS */}

<div className="space-y-6 max-w-4xl">

{t.about.paragraphs.map((p,i)=>(

<Reveal key={i}>
<p className="text-xl text-gray-300 leading-relaxed">
{p}
</p>
</Reveal>

))}

</div>


{/* CARDS */}

<div className="grid lg:grid-cols-3 gap-10 mt-24">

{/* VALUES */}

<Reveal>

<div className="p-12 rounded-[40px]
bg-gradient-to-b from-white/5 to-white/0
border border-white/10 backdrop-blur-xl
hover:scale-[1.03]
hover:border-blue-400/40 transition duration-500">

<h3 className="text-3xl font-black text-blue-400 mb-6">
{t.about.valuesTitle}
</h3>

<p className="text-gray-300 leading-relaxed">
{t.about.valuesText}
</p>

</div>

</Reveal>


{/* WHY */}

<Reveal>

<div className="p-12 rounded-[40px]
bg-gradient-to-b from-white/5 to-white/0
border border-white/10 backdrop-blur-xl
hover:scale-[1.03]
hover:border-yellow-400/40 transition duration-500">

<h3 className="text-3xl font-black text-yellow-400 mb-6">
{t.about.whyTitle}
</h3>

<p className="text-gray-300 leading-relaxed">
{t.about.whyText}
</p>

</div>

</Reveal>


{/* HISTORY */}

<Reveal>

<div className="p-12 rounded-[40px]
bg-gradient-to-b from-white/5 to-white/0
border border-white/10 backdrop-blur-xl
hover:scale-[1.03]
hover:border-green-400/40 transition duration-500">

<h3 className="text-3xl font-black text-green-400 mb-6">
{t.about.historyTitle}
</h3>

<p className="text-gray-300 leading-relaxed">
{t.about.historyText}
</p>

</div>

</Reveal>

</div>

</div>

</section>

</CinematicSection>

  );
}
