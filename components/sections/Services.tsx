"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Factory, ShieldCheck, Globe } from "lucide-react";

export default function Services() {

const { t, lang } = useLanguage();

const icons = [
  <Factory size={28} />,
  <ShieldCheck size={28} />,
  <Globe size={28} />
];

return (

<section className="relative py-48 overflow-hidden bg-[#f6f8fb]">

{/* INDUSTRIAL GRID BACKGROUND */}

<div className="absolute inset-0 opacity-30
bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
bg-[size:80px_80px]" />

{/* SOFT GLOW */}

<div className="absolute top-[-200px] left-[10%] w-[600px] h-[600px]
bg-blue-400/10 blur-[200px] rounded-full"/>

<div className="absolute bottom-[-200px] right-[10%] w-[600px] h-[600px]
bg-yellow-400/10 blur-[200px] rounded-full"/>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

{/* TITLE */}

<h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tight">
{t.services.title}
</h2>

<p className="text-slate-600 max-w-3xl mx-auto mb-24 text-lg">
{t.services.desc}
</p>

{/* CARDS */}

<div className="grid lg:grid-cols-3 gap-12">

{t.services.items.map((item,i)=>(

<div
key={i}
className="group relative rounded-[40px] p-[1px]
bg-gradient-to-r from-blue-400/20 to-yellow-400/20
transition duration-500 hover:scale-[1.04]"
>

{/* CARD BODY */}

<div className={`relative h-full p-14 rounded-[40px]
bg-white border border-gray-200
shadow-sm transition duration-500
group-hover:shadow-2xl
${lang==="ar" ? "text-right" : "text-left"}`}>

{/* ICON */}

<div className="mb-8 inline-flex p-4 rounded-2xl
bg-blue-50 text-blue-500
group-hover:bg-yellow-50 group-hover:text-yellow-500
transition duration-500">

{icons[i]}

</div>

{/* TITLE */}

<h3 className="text-3xl font-black text-blue-600 mb-6">
{item.title}
</h3>

{/* TEXT */}

<p className="text-slate-600 leading-relaxed text-lg">
{item.text}
</p>

</div>

</div>

))}

</div>

</div>

</section>

);
}