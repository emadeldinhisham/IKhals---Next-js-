"use client";

import { useRef, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useLanguage } from "@/components/providers/LanguageProvider";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const EXPORT_COUNTRIES = [
  { nameAr: "تركيا",   nameEn: "Turkey",  coords: [35.2433, 38.9637] as [number, number], id: "792" },
  { nameAr: "روسيا",   nameEn: "Russia",  coords: [105.3188, 61.5240] as [number, number], id: "643" },
  { nameAr: "ليبيا",   nameEn: "Libya",   coords: [17.2283, 26.3351] as [number, number], id: "434" },
  { nameAr: "اليونان", nameEn: "Greece",  coords: [21.8243, 39.0742] as [number, number], id: "300" },
  { nameAr: "ألبانيا", nameEn: "Albania", coords: [20.1683, 41.1533] as [number, number], id: "008" },
  { nameAr: "تونس",    nameEn: "Tunisia", coords: [9.5375, 33.8869] as [number, number],  id: "788" },
  { nameAr: "الجزائر", nameEn: "Algeria", coords: [1.6596, 28.0339] as [number, number],  id: "012" },
  { nameAr: "سوريا",   nameEn: "Syria",   coords: [38.9968, 34.8021] as [number, number], id: "760" },
  { nameAr: "السودان", nameEn: "Sudan",   coords: [30.2176, 12.8628] as [number, number], id: "729" },
  { nameAr: "الأردن",  nameEn: "Jordan",  coords: [36.2384, 30.5852] as [number, number], id: "400" },
];

const HIGHLIGHTED_IDS = new Set(EXPORT_COUNTRIES.map((c) => c.id));

// GPS Pin SVG
function GPSPin({ size = 20 }: { size?: number }) {
  const s = size;
  return (
    <g transform={`translate(${-s / 2}, ${-s * 1.6})`}>
      <path
        d={`M${s/2},0 C${s*0.1},0 0,${s*0.4} 0,${s*0.7} C0,${s*1.1} ${s*0.3},${s*1.3} ${s/2},${s*1.6} C${s*0.7},${s*1.3} ${s},${s*1.1} ${s},${s*0.7} C${s},${s*0.4} ${s*0.9},0 ${s/2},0 Z`}
        fill="#facc15"
        stroke="#fff"
        strokeWidth={1.5}
      />
      <circle cx={s/2} cy={s*0.65} r={s*0.22} fill="#fff" opacity={0.9}/>
    </g>
  );
}

export default function ExportMap() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; name: string } | null>(null);

  return (
    <section className="industry-pattern relative py-24 bg-[var(--bg-main)] overflow-hidden">

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[1000px] h-[600px] rounded-full
          bg-gradient-to-r from-blue-500/8 to-yellow-400/8 blur-[160px]"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className={`mb-16 ${isAr ? "text-right" : "text-left"}`}>
          <span className="text-yellow-500 text-sm tracking-widest uppercase font-semibold">
            {isAr ? "حضورنا العالمي" : "Global Presence"}
          </span>
          <h2 className="mt-3 text-4xl xl:text-5xl font-black text-[var(--text-main)]">
            {isAr
              ? <> نصدّر إلى <span className="text-blue-600">{EXPORT_COUNTRIES.length} دول</span></>
              : <> Exporting to <span className="text-blue-600">{EXPORT_COUNTRIES.length} Countries</span></>
            }
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl text-lg leading-relaxed">
            {isAr
              ? "نوفر منتجاتنا الصناعية عبر شراكات موثوقة في الشرق الأوسط وأوروبا وأفريقيا"
              : "We supply our industrial products through trusted partnerships across the Middle East, Europe and Africa."}
          </p>
          <div className="mt-5 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"/>
        </div>

        {/* MAP */}
        <div ref={containerRef} className="relative w-full">
          <div className="rounded-3xl border border-gray-100 overflow-hidden
            shadow-2xl shadow-slate-200/60 bg-white/70 backdrop-blur-sm">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 200, center: [30, 42] }}
              style={{ width: "100%", height: "auto" }}
              viewBox="0 0 1000 600"
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isHighlighted = HIGHLIGHTED_IDS.has(geo.id);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={(e) => {
                          if (isHighlighted) {
                            const country = EXPORT_COUNTRIES.find((c) => c.id === geo.id);
                            if (country) {
                              const rect = containerRef.current?.getBoundingClientRect();
                              setTooltip({
                                x: e.clientX - (rect?.left ?? 0),
                                y: e.clientY - (rect?.top ?? 0),
                                name: isAr ? country.nameAr : country.nameEn,
                              });
                            }
                          }
                        }}
                        onMouseLeave={() => setTooltip(null)}
                        style={{
                          default: {
                            fill: isHighlighted ? "#2563eb" : "#e2e8f0",
                            stroke: "#fff",
                            strokeWidth: 0.5,
                            outline: "none",
                            transition: "fill 0.2s",
                          },
                          hover: {
                            fill: isHighlighted ? "#1d4ed8" : "#cbd5e1",
                            stroke: "#fff",
                            strokeWidth: 0.5,
                            outline: "none",
                            cursor: isHighlighted ? "pointer" : "default",
                          },
                          pressed: {
                            fill: isHighlighted ? "#1e40af" : "#e2e8f0",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* GPS Pins */}
              {EXPORT_COUNTRIES.map((country) => (
                <Marker key={country.id} coordinates={country.coords}>
                  <GPSPin size={18} />
                </Marker>
              ))}
            </ComposableMap>

            {/* Tooltip */}
            {tooltip && (
              <div
                className="absolute pointer-events-none z-20
                  bg-blue-600 text-white text-sm font-bold
                  px-4 py-2 rounded-xl shadow-xl border border-blue-400/30
                  flex items-center gap-2"
                style={{ left: tooltip.x + 14, top: tooltip.y - 14 }}
              >
                📍 {tooltip.name}
              </div>
            )}
          </div>
        </div>

        {/* Country Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {EXPORT_COUNTRIES.map((country) => (
            <div
              key={country.id}
              className="flex items-center gap-2 bg-white border border-gray-100
                rounded-full px-5 py-2.5 shadow-sm
                hover:shadow-md hover:border-blue-200 hover:bg-blue-50
                hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-yellow-500 text-sm">📍</span>
              <span className="text-sm font-bold text-slate-700">
                {isAr ? country.nameAr : country.nameEn}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}