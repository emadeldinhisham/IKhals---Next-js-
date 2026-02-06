"use client";

import { useRef } from "react";

export default function Magnetic({ children }) {

  const ref = useRef(null);

  const handleMouseMove = (e) => {

    const el = ref.current;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="inline-block transition duration-300"
    >
      {children}
    </div>
  );
}
