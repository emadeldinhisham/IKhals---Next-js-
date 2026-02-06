"use client";

import { testimonials } from "@/data/testimonials";
import Reveal from "@/components/effects/Reveal";

type Props = {
  lang?: "ar" | "en";
};

export default function Testimonials({ lang = "ar" }: Props) {

  const list = testimonials[lang];

  return (

<section className="relative py-40 overflow-hidden bg-[#020617]">

{/* 🔥 GOD MODE BACKGROUND */}

<div className="absolute inset-0 pointer-events-none">

<div className="absolute inset-0 opacity-20
bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
bg-[size:80px_80px]" />

<div className="absolute top-0 left-0 w-[600px] h-[600px]
bg-yellow-500/10 blur-[200px]" />

<div className="absolute bottom-0 right-0 w-[600px] h-[600px]
bg-blue-500/10 blur-[200px]" />

</div>


<div className="relative z-10 max-w-7xl mx-auto px-6">

{/* TITLE */}

<Reveal>
<div className="text-center mb-24">
<span className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
{lang === "ar" ? "آراء العملاء" : "Testimonials"}
</span>

<h2 className="text-5xl font-black mt-4 text-white">
{lang === "ar"
? "شركاؤنا يثقون بنا"
: "Trusted by Industry Leaders"}
</h2>
</div>
</Reveal>


{/* GOD MODE CARDS */}

<div className="grid md:grid-cols-3 gap-12">

{list.map((t,i)=>(

<Reveal key={i}>

<div className="
group p-12 rounded-[40px]
bg-gradient-to-b from-white/5 to-white/0
border border-white/10
backdrop-blur-xl
transition duration-500
hover:scale-[1.03]
hover:border-yellow-500/40
">

<p className="text-lg text-slate-300 leading-relaxed mb-10">
“{t.quote}”
</p>

<div>
<p className="font-bold text-white text-lg">{t.name}</p>
<p className="text-sm text-slate-400">{t.role}</p>
</div>

</div>

</Reveal>

))}

</div>

</div>

</section>

  );
}
