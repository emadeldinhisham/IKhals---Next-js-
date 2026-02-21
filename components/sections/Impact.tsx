"use client";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Reveal from "@/components/effects/Reveal";

export default function Impact() {

const { t } = useLanguage();

const stats = [

{
title: t.impact.production,
value:"5K+",
color:"text-blue-600"
},

{
title: t.impact.export,
value:"10+",
color:"text-yellow-500"
},

{
title: t.impact.sectors,
value:"12+",
color:"text-green-600"
}

];

return(

<section className="relative py-40 overflow-hidden bg-[#f6f8fb]">

{/* LIGHT INDUSTRIAL BACKGROUND */}

<div className="absolute inset-0 pointer-events-none">

<div className="absolute inset-0 opacity-30
bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
bg-[size:80px_80px]" />

<div className="absolute top-0 left-0 w-[600px] h-[600px]
bg-blue-400/20 blur-[200px]" />

</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

<Reveal>

<h2 className="text-5xl font-black text-slate-900 mb-24">
{t.impact.title}
</h2>

</Reveal>

<div className="grid md:grid-cols-3 gap-12">

{stats.map((s,i)=>(

<Reveal key={i}>

<div className="
p-16 rounded-[40px]
bg-white
border border-gray-200
shadow-sm
transition duration-500
hover:scale-[1.05]
hover:shadow-xl
hover:border-yellow-400/40
">

<h3 className={`text-6xl font-black mb-6 ${s.color}`}>
{s.value}
</h3>

<p className="text-lg text-slate-600">
{s.title}
</p>

</div>

</Reveal>

))}

</div>

</div>

</section>

)
}