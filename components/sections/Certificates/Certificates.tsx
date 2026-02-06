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

    <section id="certificates" className="py-40 text-white text-center relative">

      <h2 className="text-5xl font-black mb-20">
        الشهادات والاعتمادات
      </h2>

      <div className="grid md:grid-cols-4 gap-16 max-w-7xl mx-auto">

        {certs.map((c,i)=>(

          <div
            key={i}
            className="group relative
            backdrop-blur-xl
            bg-gradient-to-b from-white/10 to-white/5
            border border-white/10
            rounded-3xl p-12
            transition duration-500
            hover:-translate-y-3
            hover:border-blue-400/40"
          >

            {/* INDUSTRIAL GLOW */}

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl
              bg-gradient-to-tr from-blue-500/10 via-transparent to-yellow-400/10" />

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

            <h3 className="text-xl font-bold text-gray-300 group-hover:text-white transition">
              {c.title}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}
