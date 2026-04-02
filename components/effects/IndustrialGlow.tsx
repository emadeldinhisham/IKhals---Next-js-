"use client";

import { useRef } from "react";

export default function IndustrialGlow({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      className="relative group overflow-hidden transition duration-500"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(
            circle at var(--x) var(--y),
            rgba(37,99,235,0.12),
            rgba(212,160,23,0.08),
            transparent 60%
          )`
        }}
      />
      {children}
    </div>
  );
}