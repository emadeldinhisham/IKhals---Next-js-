"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Products() {

const { t, lang } = useLanguage();

const products = t.products.items;

const [active,setActive] = useState(products[0]);
const [selected,setSelected] = useState(null);

return (

<section id="products" className="py-40 bg-[#f6f8fb] text-slate-800">
<section className="industry-pattern py-40 bg-[#f6f8fb] text-slate-900 text-center relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-5xl font-black mb-20">
{t.products.title}
</h2>

{/* NAV TABS */}

<div className="flex justify-center gap-10 mb-20 flex-wrap">

{products.map((p,i)=>(

<button
key={i}
onClick={()=>setActive(p)}
className={`text-lg font-bold transition
${active.title===p.title
? "text-blue-500 border-b-2 border-blue-500"
: "text-slate-500 hover:text-slate-900"}`}
>

{p.title}

</button>

))}

</div>


{/* ACTIVE CONTENT */}

<div className="grid md:grid-cols-3 gap-10">

{active.children
? active.children.map((c,i)=>(

<div
key={i}
className="group border border-gray-200 bg-white rounded-3xl overflow-hidden shadow-xl
hover:border-blue-400 transition duration-500"
>

<div className="relative h-[350px]">

<Image
src={c.image}
fill
alt={c.title}
className="object-cover transition duration-700 group-hover:scale-110"
/>

</div>

<div className="p-6">

<h3 className="text-xl font-bold mb-4">
{c.title}
</h3>

<button
onClick={()=>setSelected(c)}
className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-500"
>

{t.products.details}

</button>

</div>

</div>

))

: (

<div className="border border-gray-200 bg-white rounded-3xl overflow-hidden shadow-xl">

<div className="relative h-[350px]">

<Image
src={active.image}
fill
alt={active.title}
className="object-cover"
/>

</div>

<div className="p-6">

<h3 className="text-xl font-bold">
{active.title}
</h3>

<button
onClick={()=>setSelected(active)}
className="bg-blue-600 text-white px-6 py-2 rounded-xl mt-4"
>

{t.products.details}

</button>

</div>

</div>

)}

</div>

</div>


{/* POPUP */}

{selected && (

<div className="fixed inset-0 z-[999] bg-white/95 backdrop-blur-xl animate-fadeIn">

<button
onClick={()=>setSelected(null)}
className="absolute top-8 right-10 text-3xl z-50 hover:scale-110 transition"
>
✕
</button>

<div className="h-full flex items-center">

<div className="max-w-7xl mx-auto px-10 w-full">

<div
className={`grid md:grid-cols-2 gap-20 items-center
transition-all duration-700 animate-slideUp`}
>

{/* IMAGE */}

<div className="relative h-[600px] rounded-[40px] overflow-hidden
border border-gray-200 shadow-2xl">

<Image
src={selected.image}
fill
alt={selected.title}
className="object-cover"
/>

</div>


{/* DETAILS */}

<div className={`${lang==="ar" ? "text-right" : "text-left"}`}>

<h2 className="text-5xl font-black mb-10">
{selected.title}
</h2>

<h3 className="text-yellow-500 text-xl mb-6">
✨ Features
</h3>

<ul className="space-y-4 mb-12">

{selected.features?.map((f,i)=>(

<li key={i}>✔ {f}</li>

))}

</ul>

<h3 className="text-yellow-500 text-xl mb-6">
📐 Specifications
</h3>

<ul className="space-y-4">

{selected.specs?.map((s,i)=>(

<li key={i}>• {s}</li>

))}

</ul>

</div>

</div>

</div>

</div>

</div>

)}

</section>
</section>
);
}