"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CinematicSection({ children }) {

const { lang } = useLanguage();

const glowRef = useRef(null);

useEffect(()=>{

const move = (e)=>{

 if(!glowRef.current) return;

 const x = (e.clientX / window.innerWidth - 0.5);
 const y = (e.clientY / window.innerHeight - 0.5);

 glowRef.current.style.transform =
 `translate(${x*80}px, ${y*80}px)`;

};

window.addEventListener("mousemove", move);

return ()=> window.removeEventListener("mousemove", move);

},[]);

return(

<section className="relative overflow-hidden bg-[var(--bg-main)]">

{/* INDUSTRIAL GRID (LIGHT MODE FIX) */}

<div className="absolute inset-0 opacity-30 pointer-events-none
bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
bg-[size:80px_80px]" />

{/* SOFT INDUSTRIAL GLOW */}

<div
ref={glowRef}
className="absolute w-[600px] h-[600px]
bg-gradient-to-r from-blue-400/15 to-yellow-400/15
blur-[180px] rounded-full transition-transform duration-500"
/>

{/* CONTENT */}

<div className={`relative z-10 ${lang==="ar" ? "text-right" : "text-left"}`}>

{children}

</div>

</section>

)

}