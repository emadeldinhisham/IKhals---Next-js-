"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // تقدم شريط التحميل
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + 2;
      });
    }, 30);

    // بدء الاختفاء بعد 1.8 ثانية
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);

    // إخفاء كامل بعد 2.3 ثانية
    const hideTimer = setTimeout(() => setVisible(false), 2300);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0a0f1e 0%, #0f172a 50%, #0a0f1e 100%)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* زخرفة خلفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* دوائر glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(251,191,36,0.06) 0%, transparent 70%)" }}
        />

        {/* نقاط زخرفية */}
        {[...Array(12)].map((_, i) => (
          <div key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? "rgba(96,165,250,0.4)" : "rgba(251,191,36,0.3)",
              animation: `twinkle ${Math.random() * 2 + 1.5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* خطوط زخرفية */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px),
              linear-gradient(rgba(96,165,250,1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative flex flex-col items-center gap-8" style={{ animation: "logoReveal 0.8s ease forwards" }}>

        {/* حلقة دوارة خلف اللوغو */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-36 h-36 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: "rgba(37,99,235,0.6)",
              borderRightColor: "rgba(251,191,36,0.3)",
              animation: "spin 2s linear infinite",
            }}
          />
          <div className="absolute w-28 h-28 rounded-full border border-transparent"
            style={{
              borderBottomColor: "rgba(96,165,250,0.4)",
              borderLeftColor: "rgba(251,191,36,0.2)",
              animation: "spin 3s linear infinite reverse",
            }}
          />

          {/* اللوغو */}
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              boxShadow: "0 0 40px rgba(37,99,235,0.3), 0 0 80px rgba(37,99,235,0.1)",
              animation: "pulse 2s ease-in-out infinite",
            }}>
            <img
              src="/img/logo.png"
              alt="Al Ikhlas"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* اسم الشركة */}
        <div className="text-center" style={{ animation: "fadeUp 0.6s ease 0.3s forwards", opacity: 0 }}>
          <h1 className="text-3xl font-black tracking-tight mb-1"
            style={{ color: "#e2e8f0" }}>
            الإخلاص
          </h1>
          <p className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "rgba(96,165,250,0.8)" }}>
            Al-Ikhlas Industries
          </p>
        </div>

        {/* شريط التحميل */}
        <div className="flex flex-col items-center gap-2"
          style={{ animation: "fadeUp 0.6s ease 0.5s forwards", opacity: 0 }}>
          <div className="w-48 h-1 rounded-full overflow-hidden"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            <div
              className="h-full rounded-full transition-all duration-75"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(to right, #2563eb, #fbbf24)",
              }}
            />
          </div>
          <span className="text-xs font-mono" style={{ color: "rgba(148,163,184,0.6)" }}>
            {progress}%
          </span>
        </div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes logoReveal {
          from { transform: scale(0.8) translateY(20px); opacity: 0; }
          to   { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes fadeUp {
          from { transform: translateY(12px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 40px rgba(37,99,235,0.3), 0 0 80px rgba(37,99,235,0.1); }
          50%       { box-shadow: 0 0 60px rgba(37,99,235,0.5), 0 0 100px rgba(37,99,235,0.15); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
}