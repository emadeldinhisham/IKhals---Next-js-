"use client";

import { aboutData } from "@/data/about";
import Reveal from "@/components/effects/Reveal";

export default function About({ lang = "ar" }) {

  const data = aboutData[lang];

  return (

<section
  id="about"
  className="relative py-40 overflow-hidden bg-[#020617]"
>

{/* 🔥 INDUSTRIAL CINEMATIC BACKGROUND */}

<div className="absolute inset-0 pointer-events-none">

{/* grid industrial */}
<div className="absolute inset-0 opacity-20
bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
bg-[size:80px_80px]" />

{/* glow cinematic */}
<div className="absolute top-0 left-0 w-[700px] h-[700px]
bg-yellow-500/10 blur-[200px]" />

<div className="absolute bottom-0 right-0 w-[600px] h-[600px]
bg-blue-500/10 blur-[200px]" />

</div>


<div className="relative z-10 max-w-7xl mx-auto px-6 text-right">

{/* TITLE */}

<Reveal>
<h2 className="text-6xl font-black mb-16 text-white leading-tight">
{data.title}
</h2>
</Reveal>


{/* MAIN PARAGRAPHS */}

<div className="space-y-6 max-w-4xl">

{data.paragraphs.map((p,i)=>(

<Reveal key={i}>
<p className="text-xl text-gray-300 leading-relaxed">
{p}
</p>
</Reveal>

))}

</div>


{/* ULTRA INDUSTRIAL CARDS */}

<div className="grid lg:grid-cols-3 gap-10 mt-24">

{/* VALUES */}

<Reveal>
<div className="p-12 rounded-[40px]
bg-gradient-to-b from-white/5 to-white/0
border border-white/10
backdrop-blur-xl
hover:scale-[1.02] transition duration-500">

<h3 className="text-3xl font-black text-blue-400 mb-6">
{data.values.title}
</h3>

<p className="text-gray-300 leading-relaxed">
{data.values.content}
</p>

</div>
</Reveal>


{/* WHY US */}

<Reveal>
<div className="p-12 rounded-[40px]
bg-gradient-to-b from-white/5 to-white/0
border border-white/10
backdrop-blur-xl
hover:scale-[1.02] transition duration-500">

<h3 className="text-3xl font-black text-yellow-400 mb-6">
{data.whyUs.title}
</h3>

<p className="text-gray-300 leading-relaxed">
{data.whyUs.content}
</p>

</div>
</Reveal>


{/* HISTORY */}

<Reveal>
<div className="p-12 rounded-[40px]
bg-gradient-to-b from-white/5 to-white/0
border border-white/10
backdrop-blur-xl
hover:scale-[1.02] transition duration-500">

<h3 className="text-3xl font-black text-green-400 mb-6">
{data.history.title}
</h3>

<p className="text-gray-300 leading-relaxed">
{data.history.content}
</p>

</div>
</Reveal>

</div>

</div>

</section>

  );
}
