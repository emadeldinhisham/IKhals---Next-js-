"use client";

import Image from "next/image";

export default function Certificates() {

  const certs = [
   { img: "/img/ISO22000.png", title: "ISO 9001 Certification" },
   { img: "/img/ISO14001.png", title: "Quality Assurance Certificate" },
   { img: "/img/ISO45001.png", title: "Industrial Safety Standard" },
   { img: "/img/iso1.png", title: "International Manufacturing Standard" },
  ];

  return (

    <section id="certificates" className="py-40 text-slate-900 text-center relative bg-[#f6f8fb]">

      <h2 className="text-5xl font-black mb-20">
        الشهادات والاعتمادات
      </h2>

      <div className="grid md:grid-cols-4 gap-16 max-w-7xl mx-auto px-6">

        {certs.map((c,i)=>(

          <div
            key={i}
            className="group relative
            bg-white
            border border-gray-200
            rounded-3xl p-12
            shadow-sm
            transition duration-500
            hover:-translate-y-3
            hover:shadow-xl
            hover:border-blue-400/40"
          >

            {/* INDUSTRIAL GLOW LIGHT */}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl
              bg-gradient-to-tr from-blue-400/10 via-transparent to-yellow-400/10" />

            {/* IMAGE */}

            <div className="relative h-72 mb-8">

              <Image
                src={c.img}
                fill
                alt={c.title}
                className="object-contain transition duration-500 group-hover:scale-105"
              />

            </div>

            {/* TITLE */}

            <h3 className="text-xl font-bold text-slate-700 group-hover:text-slate-900 transition">
              {c.title}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}