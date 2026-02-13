"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CinematicSection({ children }) {

const { lang } = useLanguage();

const glowRef = useRef(null);

useEffect(()=>{

const move = (e)=>{

 if(!glowRef.current) return;

 const x = e.clientX / window.innerWidth;
 const y = e.clientY / window.innerHeight;

 glowRef.current.style.transform =
 `translate(${x*60}px, ${y*60}px)`;

};

window.addEventListener("mousemove", move);

return ()=> window.removeEventListener("mousemove", move);

},[]);


return(

<section className="relative overflow-hidden bg-[#020617]">

{/* INDUSTRIAL GRID */}

<div className="absolute inset-0 opacity-20 pointer-events-none
bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
bg-[size:80px_80px]" />

{/* CINEMATIC GLOW */}

<div
ref={glowRef}
className="absolute w-[700px] h-[700px]
bg-gradient-to-r from-blue-500/20 to-yellow-500/20
blur-[220px] rounded-full transition-transform duration-300"
/>

<div className={`relative z-10 ${lang==="ar" ? "text-right" : "text-left"}`}>

{children}

</div>

</section>

)

}
