"use client";

import { useEffect, useRef } from "react";

export default function CinematicFX() {

const glowRef = useRef<HTMLDivElement>(null);

useEffect(()=>{

const move = (e:MouseEvent)=>{

 if(!glowRef.current) return;

 // 🎯 cinematic smooth motion
 const x = (e.clientX / window.innerWidth - 0.5);
 const y = (e.clientY / window.innerHeight - 0.5);

 glowRef.current.style.transform =
 `translate(${x*120}px, ${y*120}px)`;

};

window.addEventListener("mousemove",move);

return ()=> window.removeEventListener("mousemove",move);

},[]);

return (
<>

{/* 🔥 INDUSTRIAL SOFT GLOW */}

<div
ref={glowRef}
className="
fixed
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
w-[600px]
h-[600px]
rounded-full
bg-gradient-to-r
from-blue-400/10
to-yellow-400/10
blur-[200px]
pointer-events-none
z-0
"
/>

{/* 🔥 LIGHT INDUSTRIAL GRID */}

<div
className="
fixed inset-0
pointer-events-none
opacity-30
z-0
bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
bg-[size:80px_80px]
"
/>

</>
);

}