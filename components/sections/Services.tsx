"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Services() {

const { t } = useLanguage();

return (

<section className="relative py-48 overflow-hidden">

<div className="max-w-7xl mx-auto px-6 text-center">

{/* TITLE */}

<h2 className="text-6xl font-black text-white mb-6 tracking-tight">
{t.services.title}
</h2>

<p className="text-gray-400 max-w-3xl mx-auto mb-24 text-lg">
{t.services.desc}
</p>

{/* CARDS */}

<div className="grid lg:grid-cols-3 gap-10">

{t.services.items.map((item,i)=>(

<div key={i}
className="group relative p-14 rounded-[40px]
bg-gradient-to-b from-white/5 to-transparent
border border-white/10
backdrop-blur-xl
transition-all duration-700
hover:scale-[1.06]
hover:border-blue-400/40
hover:shadow-[0_0_60px_rgba(59,130,246,0.2)]">

<h3 className="text-3xl font-black text-blue-400 mb-6">
{item.title}
</h3>

<p className="text-gray-300 leading-relaxed text-lg">
{item.text}
</p>

</div>

))}

</div>

</div>

</section>

);

}
