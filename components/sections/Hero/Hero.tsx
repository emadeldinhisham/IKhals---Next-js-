"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import CinematicSection from "@/components/effects/CinematicSection";
import { useEffect, useRef } from "react";
import { Award, Target, Star } from "lucide-react";

export default function Hero() {

const { lang, t } = useLanguage();

const imageRef = useRef<HTMLDivElement>(null);
const glowRef = useRef<HTMLDivElement>(null);

useEffect(()=>{

 const moveDepth = (e:MouseEvent)=>{

   const x = (e.clientX / window.innerWidth - 0.5);
   const y = (e.clientY / window.innerHeight - 0.5);

   // IMAGE 3D DEPTH
   if(imageRef.current){

     imageRef.current.style.transform =
       `rotateY(${x*10}deg) rotateX(${y*-10}deg) scale(1.03)`;

   }

   // GLOW MOVE
   if(glowRef.current){

     glowRef.current.style.transform =
       `translate(${x*120}px, ${y*120}px)`;

   }

 };

 window.addEventListener("mousemove", moveDepth);

 return ()=> window.removeEventListener("mousemove", moveDepth);

},[]);


return (

<CinematicSection>

<section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617] text-white [perspective:1200px]">

{/* BACKGROUND */}

<div className="absolute inset-0">

<div className="absolute inset-0 opacity-10
bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
bg-[size:70px_70px]" />

<div
ref={glowRef}
className="absolute w-[700px] h-[700px]
bg-gradient-to-r from-blue-500/20 to-yellow-500/20
blur-[200px] rounded-full transition-transform duration-300"
/>

</div>


{/* CONTENT */}

<div className="relative z-10 w-full px-10 grid lg:grid-cols-2 gap-16 items-center">

{/* TEXT */}

<div className={`flex flex-col gap-6
${lang==="ar" ? "items-end text-right" : "items-start text-left"}`}>

<span className="text-yellow-400 text-sm tracking-widest">
{t.hero.badge}
</span>

<h1 className="text-5xl xl:text-6xl font-black leading-tight">

{t.hero.title}

<br/>

<span className="text-blue-500">
{t.hero.subtitle}
</span>

</h1>

<p className="text-lg text-gray-400 max-w-xl">
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
hover:border-white/40 transition hover:scale-105"
>
{t.hero.cta2}
</a>

</div>
{/* ULTRA HERO INDUSTRIAL CARDS */}

<div className="grid md:grid-cols-3 gap-6 mt-14 max-w-3xl w-full">

{/* CARD */}

<div className="group relative p-[1px] rounded-2xl
bg-gradient-to-r from-blue-500/30 to-yellow-400/30
transition duration-500 hover:scale-105">

<div className="relative flex items-center gap-4
bg-[#020617]/90 backdrop-blur-xl
p-6 rounded-2xl border border-white/10">

<div className="p-3 rounded-xl bg-yellow-400/10">
<Award size={24} className="text-yellow-400"/>
</div>

<p className="font-semibold text-sm">
جودة في التصنيع والدفاع
</p>

</div>

</div>

{/* CARD */}

<div className="group relative p-[1px] rounded-2xl
bg-gradient-to-r from-pink-500/30 to-blue-400/30
transition duration-500 hover:scale-105">

<div className="relative flex items-center gap-4
bg-[#020617]/90 backdrop-blur-xl
p-6 rounded-2xl border border-white/10">

<div className="p-3 rounded-xl bg-pink-400/10">
<Target size={24} className="text-pink-400"/>
</div>

<p className="font-semibold text-sm">
جودة الإنتاج ومتانته هدفنا
</p>

</div>

</div>

{/* CARD */}

<div className="group relative p-[1px] rounded-2xl
bg-gradient-to-r from-blue-400/30 to-cyan-400/30
transition duration-500 hover:scale-105">

<div className="relative flex items-center gap-4
bg-[#020617]/90 backdrop-blur-xl
p-6 rounded-2xl border border-white/10">

<div className="p-3 rounded-xl bg-blue-400/10">
<Star size={24} className="text-blue-400"/>
</div>

<p className="font-semibold text-sm">
100% رضا العملاء
</p>

</div>

</div>

</div>

</div>


{/* IMAGE DEPTH */}

<div className="relative h-[70vh] rounded-[50px] overflow-hidden border border-white/10">

{/* IMAGE */}

<Image
  src="/img/hero.png"
  fill
  alt="industrial"
  className="object-cover"
  priority
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>


{/* ULTRA LUXURY EXPERIENCE CIRCLE */}

{/* ULTRA ATTACHED EXPERIENCE CIRCLE */}

{/* ULTRA PREMIUM INDUSTRIAL CIRCLE */}





</div>

<div className="
absolute
bottom-[-70px]
left-[-70px]
w-[240px]
h-[240px]
rounded-full
flex flex-col items-center justify-center
text-center
border-[10px] border-[#020617]
bg-gradient-to-br
from-[#0B1220]
via-[#1E293B]
to-[#C8A951]
shadow-[0_40px_120px_rgba(0,0,0,0.6)]
backdrop-blur-xl
">

<h3 className="text-6xl font-black text-[#FDE68A]">
13
</h3>

<p className="text-sm font-semibold text-white mt-2">
Years of<br/>Experience
</p>

</div>
</div>

</section>

</CinematicSection>

);
}
