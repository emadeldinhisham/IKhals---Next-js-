"use client";

import { useEffect, useRef } from "react";

export default function CinematicFX() {

  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{

    const move = (e:MouseEvent)=>{
      if(!glowRef.current) return;

      glowRef.current.style.transform =
        `translate(${e.clientX-150}px, ${e.clientY-150}px)`;
    };

    window.addEventListener("mousemove",move);

    return ()=> window.removeEventListener("mousemove",move);

  },[]);

  return (
    <>
      {/* Glow ذهبي */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[300px] h-[300px]
        rounded-full bg-yellow-500/20 blur-[120px]
        pointer-events-none z-0"
      />

      {/* خطوط صناعية */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0
      bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
      bg-[size:80px_80px]"/>
    </>
  );
}
