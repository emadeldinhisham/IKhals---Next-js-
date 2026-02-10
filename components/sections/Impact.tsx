"use client";
import { useLanguage } from "@/components/providers/LanguageProvider";

import Reveal from "@/components/effects/Reveal";

export default function Impact() {
   const { t } = useLanguage();
 
const stats = [

{
title: t.impact.production,
value:"5K+",
color:"text-blue-400"
},

{
title: t.impact.export,
value:"10+",
color:"text-yellow-400"
},

{
title: t.impact.sectors,
value:"12+",
color:"text-green-400"
}

];



return(

<section className="relative py-40 overflow-hidden bg-[#020617]">

{/* INDUSTRIAL BACKGROUND */}

<div className="absolute inset-0 pointer-events-none">

<div className="absolute inset-0 opacity-20
bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
bg-[size:80px_80px]" />

<div className="absolute top-0 left-0 w-[600px] h-[600px]
bg-blue-500/10 blur-[200px]" />

</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

<Reveal>

<h2 className="text-5xl font-black text-white mb-24">

{t.impact.title}

</h2>

</Reveal>


<div className="grid md:grid-cols-3 gap-12">

{stats.map((s,i)=>(

<Reveal key={i}>

<div className="
p-16 rounded-[40px]
bg-gradient-to-b from-white/5 to-white/0
border border-white/10
backdrop-blur-xl
transition duration-500
hover:scale-[1.05]
hover:border-yellow-500/40
">

<h3 className={`text-6xl font-black mb-6 ${s.color}`}>
{s.value}
</h3>

<p className="text-lg text-gray-300">
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
