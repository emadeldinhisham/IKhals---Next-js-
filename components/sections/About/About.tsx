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
  className="relative py-48 overflow-hidden bg-[#f6f8fb] text-slate-800"
>
<section className="industry-pattern py-40 bg-[#f6f8fb] text-slate-900 text-center relative overflow-hidden">
{/* BACKGROUND */}

<div className="absolute inset-0 pointer-events-none">

<div className="absolute inset-0 opacity-10
bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
bg-[size:80px_80px]" />

<div
ref={glowRef}
className="absolute w-[700px] h-[700px]
bg-gradient-to-r from-yellow-400/20 to-blue-400/20
blur-[200px] rounded-full transition-transform duration-300"
/>

</div>


<div className={`relative z-10 max-w-7xl mx-auto px-6
${lang==="ar" ? "text-right" : "text-left"}`}>

{/* TITLE */}

<Reveal>

<h2 className="text-6xl md:text-7xl font-black mb-16 leading-tight">

<span className="bg-gradient-to-r
from-blue-500 via-slate-900 to-yellow-500
bg-clip-text text-transparent">

{t.about.title}

</span>

</h2>

</Reveal>


{/* PARAGRAPHS */}

<div className="space-y-6 max-w-4xl">

{t.about.paragraphs.map((p,i)=>(

<Reveal key={i}>
<p className="text-xl text-slate-600 leading-relaxed">
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
bg-white
border border-gray-200
shadow-xl
hover:scale-[1.03]
hover:border-blue-400 transition duration-500">

<h3 className="text-3xl font-black text-blue-500 mb-6">
{t.about.valuesTitle}
</h3>

<p className="text-slate-600 leading-relaxed">
{t.about.valuesText}
</p>

</div>

</Reveal>


{/* WHY */}

<Reveal>

<div className="p-12 rounded-[40px]
bg-white
border border-gray-200
shadow-xl
hover:scale-[1.03]
hover:border-yellow-400 transition duration-500">

<h3 className="text-3xl font-black text-yellow-500 mb-6">
{t.about.whyTitle}
</h3>

<p className="text-slate-600 leading-relaxed">
{t.about.whyText}
</p>

</div>

</Reveal>


{/* HISTORY */}

<Reveal>

<div className="p-12 rounded-[40px]
bg-white
border border-gray-200
shadow-xl
hover:scale-[1.03]
hover:border-green-400 transition duration-500">

<h3 className="text-3xl font-black text-green-500 mb-6">
{t.about.historyTitle}
</h3>

<p className="text-slate-600 leading-relaxed">
{t.about.historyText}
</p>

</div>

</Reveal>

</div>

</div>

</section>
</section>
</CinematicSection>

  );
}