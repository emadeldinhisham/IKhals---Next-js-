"use client";

import { useRef } from "react";

export default function IndustrialGlow({children}:any){

 const ref = useRef<HTMLDivElement>(null);

 const move = (e:any)=>{

   const el = ref.current;
   if(!el) return;

   const rect = el.getBoundingClientRect();

   const x = e.clientX - rect.left;
   const y = e.clientY - rect.top;

   el.style.setProperty("--x",`${x}px`);
   el.style.setProperty("--y",`${y}px`);
 };

 return (

  <div
   ref={ref}
   onMouseMove={move}
   className="relative group overflow-hidden"
  >

   <div
  className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition duration-300"
      style={{
        background:
        "radial-gradient(circle at var(--x) var(--y), rgba(234,179,8,0.25), transparent 40%)"
      }}
    />

    {children}

  </div>
 );
}
