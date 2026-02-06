"use client";

import Image from "next/image";

export default function Hero() {

  return (

    <section
      className="min-h-screen flex items-center
      bg-[#020617] text-white relative overflow-hidden"
    >

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none
      bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
      bg-[size:80px_80px]" />

      <div className="w-full px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
<div className="text-right flex flex-col items-end">

          <span className="text-yellow-400 text-lg mb-6 inline-block">
            الريادة في صناعة البلاستيك ✨
          </span>

          <h1 className="text-7xl xl:text-8xl font-black leading-tight mb-8">

            الإخلاص

            <br/>

            <span className="text-blue-500">
              للصناعات البلاستيكية
            </span>

          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-xl">

            نصنع الجودة… ونقود المستقبل عبر أحدث
            تقنيات التصنيع الصناعية.

          </p>

          <div className="flex gap-6 justify-end">

          <a
  href="#products"
  className="bg-blue-600 text-white
  px-14 py-6
  text-xl font-bold
  rounded-2xl
  shadow-lg shadow-blue-500/20
  hover:bg-blue-500
  hover:scale-105
  transition duration-300"
>
  اكتشف منتجاتنا
</a>

<a
  href="#contact"
  className="border border-white/20
  px-14 py-6
  text-xl font-bold
  rounded-2xl
  backdrop-blur
  hover:border-white/40
  hover:scale-105
  transition duration-300"
>
  تواصل معنا
</a>

          </div>

        </div>
 {/* IMAGE */}

          <div className="relative w-full max-w-xl aspect-square rounded-[80px_160px_80px_160px] overflow-hidden border-4 border-white/20 shadow-2xl animate-float z-10">

          <Image
            src="/img/hero.png"
            fill
            alt="industrial"
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
        </div>

      </div>

    </section>
  );
}
