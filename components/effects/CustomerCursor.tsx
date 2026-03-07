"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [clicked,  setClicked]  = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden,   setHidden]   = useState(true);

  useEffect(() => {
    // لا يعمل على الموبايل
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top  = `${mouseY}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top  = `${ringY}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onDown  = () => setClicked(true);
    const onUp    = () => setClicked(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-magnetic]")) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-magnetic]")) setHovering(false);
    };

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mouseout",   onOut);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseout",   onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* DOT */}
      <div ref={dotRef}
        className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          zIndex: 9999999, // فوق الـ portal
          width:  clicked ? "6px" : "8px",
          height: clicked ? "6px" : "8px",
          borderRadius: "50%",
          background: hovering ? "linear-gradient(135deg,#f59e0b,#fbbf24)" : "linear-gradient(135deg,#60a5fa,#818cf8)",
          boxShadow: hovering ? "0 0 12px rgba(251,191,36,0.8)" : "0 0 10px rgba(96,165,250,0.8)",
          transition: "width 0.15s, height 0.15s, background 0.3s, box-shadow 0.3s",
          opacity: hidden ? 0 : 1,
        }}
      />

      {/* RING */}
      <div ref={ringRef}
        className="fixed pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          zIndex: 9999998,
          width:  hovering ? "52px" : clicked ? "28px" : "36px",
          height: hovering ? "52px" : clicked ? "28px" : "36px",
          borderRadius: "50%",
          border: hovering ? "1.5px solid rgba(251,191,36,0.6)" : "1.5px solid rgba(99,102,241,0.5)",
          background: hovering ? "rgba(251,191,36,0.05)" : "rgba(99,102,241,0.03)",
          transition: "width 0.3s cubic-bezier(0.34,1.56,0.64,1), height 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s",
          opacity: hidden ? 0 : hovering ? 0.9 : 0.6,
        }}
      />

      {/* إخفاء الـ cursor الافتراضي — على html فقط لا على * */}
      <style>{`
        html, html * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}