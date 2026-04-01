"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function CinematicSection({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage() ?? {};
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth  - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      glowRef.current.style.transform = `translate(${x * 80}px, ${y * 80}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative overflow-hidden">

      {/* SOFT GLOW */}
      <div
        ref={glowRef}
        className="absolute w-[600px] h-[600px] pointer-events-none
          bg-gradient-to-r from-blue-400/10 to-yellow-400/10
          blur-[180px] rounded-full transition-transform duration-500"
      />

      {/* CONTENT */}
      <div className={`relative z-10 ${lang === "ar" ? "text-right" : "text-left"}`}>
        {children}
      </div>

    </div>
  );
}