"use client";

import { impactStats } from "@/data/impact";

const COLORS = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-500", bar: "bg-blue-500" },
  green:{ bg: "bg-green-500/10", text:"text-green-500", bar:"bg-green-500" },
  gold: { bg: "bg-yellow-500/10", text:"text-yellow-500", bar:"bg-yellow-500" },
};

export default function Impact() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
            الأرقام تتحدث
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            قدراتنا الإنتاجية
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impactStats.map((stat, i) => {
            const c = COLORS[stat.color as keyof typeof COLORS];
            return (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${c.bg}`}>
                  <span className={`text-xl font-black ${c.text}`}>
                    {stat.value}{stat.unit}
                  </span>
                </div>
                <p className="text-sm uppercase tracking-wider opacity-70 mb-2">
                  {stat.label}
                </p>
                <div className="mt-6 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className={`${c.bar} h-full`} style={{ width: "80%" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
