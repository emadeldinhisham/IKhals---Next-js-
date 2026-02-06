"use client";

import { useEffect, useRef } from "react";

export default function Parallax({ children, speed = 0.3 }: any) {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(()=>{

    const handleScroll = () => {

      if(!ref.current) return;

      const offset = window.scrollY * speed;

      ref.current.style.transform =
        `translateY(${offset}px)`;
    };

    window.addEventListener("scroll",handleScroll);

    return ()=>window.removeEventListener("scroll",handleScroll);

  },[speed]);

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  );
}
