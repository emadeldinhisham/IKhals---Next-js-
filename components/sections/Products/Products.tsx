"use client";

import { useState } from "react";
import Image from "next/image";
import Magnetic from "@/components/effects/Magnetic";

export default function Products() {

 const products = [

  {
    title: "أكياس BOPP",
    image: "/img/p1.jpg",
    features: [
      "Double-Sided Printing (Up to 8 Colors)",
      "Optional BOPP Layer",
      "High Durability"
    ],
    specs: [
      "Width: 35cm - 80cm",
      "Length: 40cm - 125cm"
    ]
  },

  {
    title: "أكياس منسوجة",
    image: "/img/p2.jpg",
    features: [
      "Heavy Duty Material",
      "High Load Capacity",
      "UV Protection"
    ],
    specs: [
      "Width: 50cm - 100cm",
      "Length: Custom"
    ]
  },

  {
    title: "أكياس مغلفة",
    image: "/img/p3.jpg",
    features: [
      "Water Resistant",
      "Extra Protection Layer"
    ],
    specs: [
      "Thickness: 120 micron",
      "Custom Sizes"
    ]
  },

  {
    title: "أكياس مطبوعة",
    image: "/img/p4.jpg",
    features: [
      "High Quality Printing",
      "Custom Branding",
      "Gloss Finish"
    ],
    specs: [
      "Up to 8 colors",
      "Custom Dimensions"
    ]
  }

];


  const [selected,setSelected] = useState(null);

  return (

    <section id="products" className="py-40 text-white text-center">

      <h2 className="text-5xl font-black mb-20">
        منتجاتنا
      </h2>

      <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">

        {products.map((p,i)=>(
<div
  key={i}
  className="group relative rounded-3xl overflow-hidden
  border border-white/10
  transition duration-500 hover:border-blue-400/40"
>

  {/* IMAGE */}

  <div className="relative h-[420px]">

    <Image
      src={p.image}
      fill
      alt={p.title}
      className="object-cover transition duration-700 group-hover:scale-110"
    />

    {/* DARK OVERLAY */}

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

    {/* HOVER CONTENT */}

    <div className="absolute inset-0 flex flex-col justify-end p-8
      opacity-0 group-hover:opacity-100
      transition duration-500">

      <h3 className="text-2xl font-bold mb-3 text-right">
        {p.title}
      </h3>

     <Magnetic>

<button
  onClick={()=>setSelected(p)}
  className="self-end bg-blue-600 px-6 py-3 rounded-xl
  font-bold hover:bg-blue-500 transition"
>
  التفاصيل
</button>

</Magnetic>


    </div>

  </div>

</div>

          

        ))}

      </div>

      {/* POPUP */}

     {selected && (

<div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-10">

<div className="bg-[#0b1220] border border-white/10 rounded-3xl
max-w-6xl w-full grid md:grid-cols-2 overflow-hidden">

{/* IMAGE SIDE */}

<div
  className="relative min-h-[500px] overflow-hidden"
  onMouseMove={(e)=>{

    const img = e.currentTarget.querySelector("img");

    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width/2) / 30;
    const y = (e.clientY - rect.top - rect.height/2) / 30;

    img.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;

  }}

  onMouseLeave={(e)=>{

    const img = e.currentTarget.querySelector("img");
    img.style.transform = "scale(1) translate(0px,0px)";

  }}
>


<Image
src={"/img/logo2.jpg"}
fill
alt={selected.title}
className="object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>

</div>


{/* CONTENT SIDE */}

<div className="p-12 text-left text-white relative">

<button
onClick={()=>setSelected(null)}
className="absolute top-6 right-6 text-xl"
>
✕
</button>

<h2 className="text-4xl font-bold mb-8">
{selected.title}
</h2>


{/* FEATURES */}

<h3 className="text-yellow-400 text-xl mb-4">
✨ Features
</h3>

<ul className="space-y-2 mb-8">

{selected.features?.map((f,i)=>(
<li key={i}>✔ {f}</li>
))}

</ul>


{/* SPECS */}

<h3 className="text-yellow-400 text-xl mb-4">
📐 Specification
</h3>

<ul className="space-y-2">

{selected.specs?.map((s,i)=>(
<li key={i}>• {s}</li>
))}

</ul>

</div>

</div>

</div>

)}


    </section>
  );
}
