"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {

const { lang, t } = useLanguage();
const list = testimonials[lang];

const handleMove = (e:any) => {

  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  const x = (e.clientX - rect.left - rect.width/2) / 20;
  const y = (e.clientY - rect.top - rect.height/2) / 20;

  card.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg) scale(1.04)`;
};

const handleLeave = (e:any) => {
  e.currentTarget.style.transform =
    "rotateY(0deg) rotateX(0deg) scale(1)";
};

return (
<section className="industry-pattern py-40 bg-[#f6f8fb] text-slate-900 text-center relative overflow-hidden">
<section className="py-40 relative overflow-hidden bg-[#f6f8fb]">

{/* LIGHT INDUSTRIAL BACKGROUND */}

<div className="absolute inset-0 opacity-30
bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
bg-[size:80px_80px]" />

<div className="absolute top-[-200px] left-[10%] w-[600px] h-[600px]
bg-blue-400/20 blur-[200px] rounded-full"/>

<div className="absolute bottom-[-200px] right-[10%] w-[600px] h-[600px]
bg-yellow-400/20 blur-[200px] rounded-full"/>

<div className="relative z-10 max-w-7xl mx-auto px-6">

{/* TITLE */}

<div className="text-center mb-24">

<span className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
{t.testimonials.badge}
</span>

<h2 className="text-5xl font-black mt-4 text-slate-900">
{t.testimonials.title}
</h2>

</div>

{/* CARDS */}

<div className="grid md:grid-cols-3 gap-14 perspective-[1200px]">

{list.map((item,i)=>(

<div
key={i}
onMouseMove={handleMove}
onMouseLeave={handleLeave}
className="group relative p-12 rounded-[40px]
bg-white
border border-gray-200
backdrop-blur-xl
transition duration-300 ease-out
shadow-xl hover:shadow-yellow-500/20">

{/* HOVER GLOW */}

<div className="absolute inset-0 opacity-0 group-hover:opacity-100
transition pointer-events-none
bg-gradient-to-br from-yellow-400/10 to-transparent rounded-[40px]" />

<p className="text-lg text-slate-600 leading-relaxed mb-10 italic relative z-10">
“{item.quote}”
</p>

<div className="relative z-10">

<p className="text-xl font-bold text-slate-900">
{item.name}
</p>

<p className="text-sm text-slate-500">
{item.role}
</p>

</div>

</div>

))}

</div>

</div>

</section>
</section>
);
}