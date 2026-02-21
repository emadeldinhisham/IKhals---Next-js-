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
  { nameAr: "تونس",   nameEn: "Tunisia",  coords: [9.5375, 33.8869] as [number, number],  id: "788" },
  { nameAr: "الجزائر", nameEn: "Algeria", coords: [1.6596, 28.0339] as [number, number],  id: "012" },
];

const HIGHLIGHTED_IDS = new Set(EXPORT_COUNTRIES.map((c) => c.id));

export default function ExportMap() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; name: string } | null>(null);

  return (
    <section className="relative py-28 bg-[var(--bg-main)] overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[1000px] h-[700px] rounded-full
          bg-gradient-to-r from-blue-500/10 to-yellow-400/10
          blur-[160px]" />
      </div>

      {/* Header */}
      <div className={`relative z-10 mb-16 px-6 ${isAr ? "text-right" : "text-left"} max-w-7xl mx-auto`}>
        <span className="text-yellow-500 text-sm tracking-widest uppercase">
          {isAr ? "حضورنا العالمي" : "Global Presence"}
        </span>
        <h2 className="mt-3 text-4xl xl:text-5xl font-black text-[var(--text-main)]">
          {isAr ? (
            <>نصدّر إلى <span className="text-blue-600">{EXPORT_COUNTRIES.length} دول</span></>
          ) : (
            <>Exporting to <span className="text-blue-600">{EXPORT_COUNTRIES.length} Countries</span></>
          )}
        </h2>
        <p className="mt-4 text-slate-500 max-w-xl text-lg">
          {isAr
            ? "نوفر منتجاتنا الصناعية عبر شراكات موثوقة في منطقتي المتوسط وأوروبا الشرقية"
            : "We supply our industrial products through trusted partnerships across the Mediterranean and Eastern Europe."}
        </p>
      </div>

      {/* Map */}
      <div ref={containerRef} className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-xl bg-white/50 backdrop-blur-sm">
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
                          fill: isHighlighted ? "#1d4ed8" : "#e2e8f0",
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

            {/* Markers */}
            {EXPORT_COUNTRIES.map((country) => (
              <Marker key={country.id} coordinates={country.coords}>
                <circle r={7} fill="#facc15" stroke="#fff" strokeWidth={2} />
              </Marker>
            ))}
          </ComposableMap>

          {/* Tooltip */}
          {tooltip && (
            <div
              className="absolute pointer-events-none z-20 bg-blue-600 text-white
                text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg"
              style={{ left: tooltip.x + 12, top: tooltip.y - 10 }}
            >
              {tooltip.name}
            </div>
          )}
        </div>
      </div>

      {/* Country Badges */}
      <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-4 px-6">
        {EXPORT_COUNTRIES.map((country) => (
          <div
            key={country.id}
            className="flex items-center gap-2 bg-white border border-gray-200
              rounded-full px-5 py-2.5 shadow-sm hover:shadow-md hover:border-blue-300
              hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
            <span className="text-sm font-semibold text-slate-700">
              {isAr ? country.nameAr : country.nameEn}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
