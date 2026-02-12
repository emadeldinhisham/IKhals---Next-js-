"use client";

import { useEffect, useRef } from "react";

export default function IndustrialWave() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(()=>{

    const canvas = canvasRef.current;
    if(!canvas) return;

    const ctx = canvas.getContext("2d");

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    window.addEventListener("resize",()=>{
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    let t = 0;

    function draw(){

      ctx.clearRect(0,0,w,h);

      for(let y=0;y<20;y++){

        ctx.beginPath();

        for(let x=0;x<w;x++){

          const wave =
            Math.sin(x*0.01 + t + y*0.4)*20;

          ctx.lineTo(x, h/2 + wave + y*25);
        }

        ctx.strokeStyle="rgba(150,80,255,0.15)";
        ctx.lineWidth=1;
        ctx.stroke();
      }

      t += 0.02;
      requestAnimationFrame(draw);
    }

    draw();

  },[]);

  return (

    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />

  );

}
