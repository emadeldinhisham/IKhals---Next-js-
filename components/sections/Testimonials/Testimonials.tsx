"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {

const { lang, t } = useLanguage();

const list = testimonials[lang];

return (

<section className="py-40 relative overflow-hidden">

<div className="relative z-10 max-w-6xl mx-auto px-6">

{/* TITLE */}

<div className="text-center mb-20">

<span className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
{t.testimonials.badge}
</span>

<h2 className="text-4xl md:text-5xl font-black mt-4 text-white">
{t.testimonials.title}
</h2>

</div>

{/* CARDS */}

<div className="grid md:grid-cols-3 gap-8">

{list.map((item,i)=>(

<div
key={i}
className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
>

<p className="text-lg text-slate-300 leading-relaxed mb-8">
“{item.quote}”
</p>

<div>

<p className="font-bold text-white">
{item.name}
</p>

<p className="text-sm text-slate-400">
{item.role}
</p>

</div>

</div>

))}

</div>

</div>

</section>

);

}
