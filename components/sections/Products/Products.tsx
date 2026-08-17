"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { X, ChevronLeft, ChevronRight, CheckCircle, Ruler } from "lucide-react";

/* ══════════════════════════════════════════
   SVG FALLBACKS
══════════════════════════════════════════ */
function RollSVG({ hovered }: { hovered?: boolean }) {
  return (
    <svg viewBox="0 0 320 280" className="w-full h-full">
      <defs>
        <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe"/><stop offset="60%" stopColor="#7dd3fc"/><stop offset="100%" stopColor="#0ea5e9"/>
        </linearGradient>
        <linearGradient id="rg2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0369a1"/><stop offset="100%" stopColor="#0ea5e9"/>
        </linearGradient>
        <linearGradient id="rcore" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef9c3"/><stop offset="100%" stopColor="#eab308"/>
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="245" rx="88" ry="13" fill="rgba(14,165,233,0.18)"/>
      <g style={{ transform: hovered ? "translateY(-10px)" : "translateY(0)", transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}>
        <rect x="58" y="62" width="148" height="162" rx="5" fill="url(#rg1)"/>
        {Array.from({length:9}).map((_,i)=>(
          <rect key={i} x="58" y={62+i*18} width="148" height="9" fill="rgba(255,255,255,0.11)"/>
        ))}
        <ellipse cx="58"  cy="143" rx="26" ry="81" fill="url(#rg2)"/>
        <ellipse cx="206" cy="143" rx="26" ry="81" fill="#0284c7"/>
        <ellipse cx="58"  cy="143" rx="13" ry="38" fill="url(#rcore)"/>
        <ellipse cx="206" cy="143" rx="13" ry="38" fill="#ca8a04"/>
        <ellipse cx="108" cy="88"  rx="34" ry="13" fill="rgba(255,255,255,0.42)" style={{ filter:"blur(5px)" }}/>
        <rect x="90" y="115" width="84" height="56" rx="6" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
        <text x="132" y="138" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif" fontWeight="bold">AL-IKHLAS</text>
        <text x="132" y="151" textAnchor="middle" fontSize="6"   fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">PP WOVEN ROLL</text>
      </g>
    </svg>
  );
}

function WovenBagSVG({ hovered }: { hovered?: boolean }) {
  return (
    <svg viewBox="0 0 320 290" className="w-full h-full">
      <defs>
        <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dcfce7"/><stop offset="60%" stopColor="#4ade80"/><stop offset="100%" stopColor="#16a34a"/>
        </linearGradient>
        <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14532d"/><stop offset="100%" stopColor="#166534"/>
        </linearGradient>
        <pattern id="wp" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="7" height="7" fill="rgba(255,255,255,0.17)"/>
          <rect x="7" y="7" width="7" height="7" fill="rgba(255,255,255,0.17)"/>
        </pattern>
      </defs>
      <ellipse cx="160" cy="254" rx="78" ry="12" fill="rgba(22,163,74,0.2)"/>
      <g style={{ transform: hovered?"translateY(-10px) rotate(1.5deg)":"translateY(0) rotate(0)", transition:"transform 0.5s cubic-bezier(0.34,1.56,0.64,1)", transformOrigin:"160px 155px" }}>
        <polygon points="208,58 238,76 238,226 208,208" fill="url(#wg2)"/>
        <rect x="68" y="58" width="140" height="150" rx="8" fill="url(#wg1)"/>
        <rect x="68" y="58" width="140" height="150" rx="8" fill="url(#wp)"/>
        <polygon points="68,58 208,58 238,76 98,76" fill="#22c55e" fillOpacity="0.7"/>
        <polygon points="68,208 208,208 238,226 98,226" fill="#14532d" fillOpacity="0.85"/>
        <rect x="80" y="70" width="116" height="128" rx="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="6,4"/>
        <circle cx="138" cy="134" r="28" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        <text x="138" y="130" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.85)" fontFamily="sans-serif" fontWeight="bold">AL-IKHLAS</text>
        <text x="138" y="143" textAnchor="middle" fontSize="6.5" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">WOVEN PP</text>
        <ellipse cx="110" cy="84" rx="30" ry="11" fill="rgba(255,255,255,0.32)" style={{ filter:"blur(5px)" }}/>
        <path d="M 108 58 Q 108 38 138 38 Q 168 38 168 58" fill="none" stroke="#22c55e" strokeWidth="7" strokeLinecap="round"/>
        <path d="M 108 58 Q 108 38 138 38 Q 168 38 168 58" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

function BOPPBagSVG({ hovered }: { hovered?: boolean }) {
  return (
    <svg viewBox="0 0 320 290" className="w-full h-full">
      <defs>
        <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ede9fe"/><stop offset="50%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#6d28d9"/>
        </linearGradient>
        <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4c1d95"/><stop offset="100%" stopColor="#6d28d9"/>
        </linearGradient>
        <linearGradient id="bshine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)"/><stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="254" rx="78" ry="12" fill="rgba(109,40,217,0.2)"/>
      <g style={{ transform:hovered?"translateY(-10px) rotate(-1.5deg)":"translateY(0) rotate(0)", transition:"transform 0.5s cubic-bezier(0.34,1.56,0.64,1)", transformOrigin:"160px 155px" }}>
        <polygon points="208,58 238,76 238,226 208,208" fill="url(#bg2)"/>
        <rect x="68" y="58" width="140" height="150" rx="8" fill="url(#bg1)"/>
        <rect x="68" y="58" width="140" height="150" rx="8" fill="url(#bshine)"/>
        <polygon points="68,58 208,58 238,76 98,76" fill="#7c3aed" fillOpacity="0.75"/>
        <polygon points="68,208 208,208 238,226 98,226" fill="#4c1d95" fillOpacity="0.85"/>
        <rect x="88" y="80" width="100" height="118" rx="5" fill="rgba(255,255,255,0.1)"/>
        <rect x="96" y="90" width="84" height="5" rx="2.5" fill="rgba(255,255,255,0.6)"/>
        <circle cx="138" cy="138" r="26" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
        <text x="138" y="134" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.9)" fontFamily="sans-serif" fontWeight="bold">BOPP</text>
        <text x="138" y="146" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">LAMINATED</text>
        <ellipse cx="110" cy="84" rx="30" ry="11" fill="rgba(255,255,255,0.35)" style={{ filter:"blur(5px)" }}/>
        <path d="M 108 58 Q 108 38 138 38 Q 168 38 168 58" fill="none" stroke="#8b5cf6" strokeWidth="7" strokeLinecap="round"/>
        <path d="M 108 58 Q 108 38 138 38 Q 168 38 168 58" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

function PrintedBagSVG({ hovered }: { hovered?: boolean }) {
  return (
    <svg viewBox="0 0 320 290" className="w-full h-full">
      <defs>
        <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7"/><stop offset="40%" stopColor="#fbbf24"/><stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
        <linearGradient id="pg2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#92400e"/><stop offset="100%" stopColor="#78350f"/>
        </linearGradient>
        <linearGradient id="paccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444"/><stop offset="100%" stopColor="#dc2626"/>
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="254" rx="78" ry="12" fill="rgba(217,119,6,0.2)"/>
      <g style={{ transform:hovered?"translateY(-10px) scale(1.03)":"translateY(0) scale(1)", transition:"transform 0.5s cubic-bezier(0.34,1.56,0.64,1)", transformOrigin:"160px 155px" }}>
        <polygon points="208,58 238,76 238,226 208,208" fill="url(#pg2)"/>
        <rect x="68" y="58" width="140" height="150" rx="8" fill="url(#pg1)"/>
        <rect x="68" y="58" width="140" height="28" rx="8" fill="url(#paccent)" fillOpacity="0.85"/>
        <rect x="68" y="180" width="140" height="28" rx="8" fill="url(#paccent)" fillOpacity="0.85"/>
        <polygon points="68,58 208,58 238,76 98,76" fill="#ef4444" fillOpacity="0.75"/>
        <polygon points="68,208 208,208 238,226 98,226" fill="#78350f" fillOpacity="0.85"/>
        <circle cx="138" cy="148" r="26" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        <text x="138" y="144" textAnchor="middle" fontSize="7.5" fill="rgba(92,40,14,0.9)" fontFamily="sans-serif" fontWeight="bold">PRINTED</text>
        <text x="138" y="156" textAnchor="middle" fontSize="6" fill="rgba(92,40,14,0.65)" fontFamily="sans-serif">WOVEN BAG</text>
        <ellipse cx="110" cy="84" rx="30" ry="11" fill="rgba(255,255,255,0.38)" style={{ filter:"blur(5px)" }}/>
        <path d="M 108 58 Q 108 38 138 38 Q 168 38 168 58" fill="none" stroke="#fbbf24" strokeWidth="7" strokeLinecap="round"/>
        <path d="M 108 58 Q 108 38 138 38 Q 168 38 168 58" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

function ProductSVG({ id, hovered }: { id: string; hovered?: boolean }) {
  const low = (id||"").toLowerCase();
  if (low.includes("roll"))                             return <RollSVG hovered={hovered}/>;
  if (low.includes("bopp")||low.includes("laminated")) return <BOPPBagSVG hovered={hovered}/>;
  if (low.includes("print"))                           return <PrintedBagSVG hovered={hovered}/>;
  return <WovenBagSVG hovered={hovered}/>;
}

function cardBg(id: string) {
  const low = (id||"").toLowerCase();
  if (low.includes("roll"))                             return "linear-gradient(135deg,#0c1e3d,#0c3460)";
  if (low.includes("bopp")||low.includes("laminated")) return "linear-gradient(135deg,#1a0938,#2d1060)";
  if (low.includes("print"))                           return "linear-gradient(135deg,#2d1500,#3b1800)";
  return "linear-gradient(135deg,#0a2d18,#0f4023)";
}

/* ══════════════════════════════════════════
   PRELOAD IMAGES
══════════════════════════════════════════ */
function usePreloadImages(srcs: string[]) {
  useEffect(() => {
    srcs.forEach(src => {
      if (!src) return;
      const img = new window.Image();
      img.src = src;
    });
  }, []);
}

/* ══════════════════════════════════════════
   CARD IMAGE
══════════════════════════════════════════ */
function CardImage({ src, alt, id, hovered, priority }: { src:string; alt:string; id:string; hovered:boolean; priority?:boolean }) {
  const [error,  setError]  = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <motion.div layoutId={`product-image-${id}`} className="w-full h-full flex items-center justify-center p-6" style={{ background: cardBg(id) }}>
        <div style={{ width:"80%", maxWidth:"200px" }}>
          <ProductSVG id={id} hovered={hovered}/>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div layoutId={`product-image-${id}`} className="w-full h-full relative overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 z-10" style={{ background: cardBg(id) }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.4s infinite",
          }}/>
          <div className="absolute inset-0 flex items-center justify-center p-8 opacity-40">
            <div style={{ width:"70%", maxWidth:"170px" }}>
              <ProductSVG id={id}/>
            </div>
          </div>
        </div>
      )}
      <motion.div
        className="w-full h-full relative"
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <Image
          src={src} alt={alt} fill
          priority={priority}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 400px"
          className="object-cover"
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s" }}
          onLoad={()=>setLoaded(true)}
          onError={()=>setError(true)}
        />
      </motion.div>
      <motion.div className="absolute inset-0"
        style={{ background:"linear-gradient(to top,rgba(10,15,30,0.55) 0%,transparent 50%)", pointerEvents:"none" }}
        animate={{ opacity: loaded ? (hovered ? 1 : 0.4) : 0 }}
        transition={{ duration: 0.4 }}
      />
      <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
    </motion.div>
  );
}

function PopupImage({ src, alt, id }: { src:string; alt:string; id:string }) {
  const [error,  setError]  = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [ph,     setPh]     = useState(false);

  if (error || !src) {
    return (
      <motion.div layoutId={`product-image-${id}`} style={{ minHeight:"420px", borderRadius:"32px 0 0 32px", background:cardBg(id), display:"flex", alignItems:"center", justifyContent:"center", padding:"40px" }}>
        <div style={{ width:"100%", maxWidth:"260px" }}><ProductSVG id={id} hovered={ph}/></div>
      </motion.div>
    );
  }

  return (
    <motion.div layoutId={`product-image-${id}`}
      style={{ position:"relative", minHeight:"420px", borderRadius:"32px 0 0 32px", overflow:"hidden", cursor:"pointer", background:cardBg(id) }}
      onMouseEnter={()=>setPh(true)} onMouseLeave={()=>setPh(false)}>
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center p-12 opacity-50">
          <div style={{ width:"70%", maxWidth:"240px" }}><ProductSVG id={id}/></div>
        </div>
      )}
      <motion.div
        className="w-full h-full relative"
        animate={{ scale: ph ? 1.06 : 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
      >
        <Image
          src={src} alt={alt} fill
          priority
          sizes="450px"
          className="object-cover"
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s" }}
          onLoad={()=>setLoaded(true)}
          onError={()=>setError(true)}
        />
      </motion.div>
      {loaded && (
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(10,15,30,0.45),transparent)", pointerEvents:"none" }}/>
      )}
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   POPUP
══════════════════════════════════════════ */
function ProductPopup({ selectedId, onClose, isAr, t }: { selectedId:string; onClose:()=>void; isAr:boolean; t:any }) {
  const allItems: any[] = [];
  for (const cat of t.products.items) {
    if (cat.id === selectedId) allItems.push(cat);
    if (cat.children) for (const ch of cat.children) { if (ch.id === selectedId) allItems.push(ch); }
  }
  const selected = allItems[0];
  if (!selected) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const listStagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  };
  const listItem: Variants = {
    hidden: { opacity: 0, x: isAr ? 12 : -12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return createPortal(
    <motion.div
      style={{ position:"fixed",inset:0,zIndex:999999,backgroundColor:"rgba(0,0,0,0.82)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px" }}
      onClick={(e)=>{ if(e.target===e.currentTarget) onClose(); }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        style={{ position:"relative",width:"100%",maxWidth:"900px",maxHeight:"90vh",overflowY:"auto",borderRadius:"32px",backgroundColor:"var(--bg-card)",border:"1px solid var(--border)",boxShadow:"0 40px 100px rgba(0,0,0,0.7)" }}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        <button onClick={onClose} style={{ position:"absolute",top:"16px",right:"16px",zIndex:10,width:"40px",height:"40px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--bg-card2)",color:"var(--text-soft)",border:"none",cursor:"pointer" }}>
          <X size={18}/>
        </button>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr" }}>
          <PopupImage src={selected.image} alt={selected.title} id={selected.id}/>
          <motion.div
            style={{ padding:"40px",textAlign:isAr?"right":"left",direction:isAr?"rtl":"ltr" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.35 }}
          >
            <span style={{ fontSize:"11px",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--accent-gold)" }}>
              {isAr?"تفاصيل المنتج":"Product Details"}
            </span>
            <h2 style={{ fontSize:"28px",fontWeight:900,marginTop:"8px",marginBottom:"24px",color:"var(--text-main)" }}>{selected.title}</h2>

            {selected.features?.length>0 && (
              <div style={{ marginBottom:"24px" }}>
                <div style={{ display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px",flexDirection:isAr?"row-reverse":"row" }}>
                  <CheckCircle size={18} style={{ color:"var(--accent-blue)",flexShrink:0 }}/>
                  <span style={{ fontSize:"12px",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-main)" }}>{isAr?"المميزات":"Features"}</span>
                </div>
                <motion.ul variants={listStagger} initial="hidden" animate="show" style={{ listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"10px" }}>
                  {selected.features.map((f:string,i:number)=>(
                    <motion.li key={i} variants={listItem} style={{ display:"flex",alignItems:"flex-start",gap:"10px",flexDirection:isAr?"row-reverse":"row" }}>
                      <span style={{ width:"18px",height:"18px",borderRadius:"50%",flexShrink:0,marginTop:"2px",backgroundColor:"var(--bg-card2)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                        <span style={{ width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"var(--accent-blue)",display:"block" }}/>
                      </span>
                      <span style={{ fontSize:"14px",lineHeight:1.6,color:"var(--text-soft)" }}>{f}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            )}

            {selected.specs?.length>0 && (
              <div style={{ marginBottom:"24px" }}>
                <div style={{ display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px",flexDirection:isAr?"row-reverse":"row" }}>
                  <Ruler size={18} style={{ color:"var(--accent-gold)",flexShrink:0 }}/>
                  <span style={{ fontSize:"12px",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--text-main)" }}>{isAr?"المواصفات":"Specifications"}</span>
                </div>
                <motion.ul variants={listStagger} initial="hidden" animate="show" style={{ listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"10px" }}>
                  {selected.specs.map((s:string,i:number)=>(
                    <motion.li key={i} variants={listItem} style={{ display:"flex",alignItems:"flex-start",gap:"10px",flexDirection:isAr?"row-reverse":"row" }}>
                      <span style={{ width:"18px",height:"18px",borderRadius:"50%",flexShrink:0,marginTop:"2px",backgroundColor:"var(--bg-card2)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                        <span style={{ width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"var(--accent-gold)",display:"block" }}/>
                      </span>
                      <span style={{ fontSize:"14px",lineHeight:1.6,color:"var(--text-soft)" }}>{s}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            )}

            <motion.a href="#request-ads" onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",width:"100%",padding:"14px",borderRadius:"16px",background:"linear-gradient(135deg,#3b82f6,#6366f1)",color:"#fff",fontWeight:700,fontSize:"15px",textDecoration:"none",boxShadow:"0 8px 24px rgba(99,102,241,0.35)" }}>
              {isAr?"🚀 صمم طلبيتك":"🚀 Design Your Order"}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

/* ══════════════════════════════════════════
   MAIN
══════════════════════════════════════════ */
export default function Products() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const products = t.products.items;

  const [activeId,   setActiveId]   = useState<string>(products[0].id);
  const [selectedId, setSelectedId] = useState<string|null>(null);
  const [mounted,    setMounted]    = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number|null>(null);

  useEffect(()=>{ setMounted(true); },[]);

  const allImageSrcs = products.flatMap((p: any) =>
    p.children ? p.children.map((c: any) => c.image) : [p.image]
  );
  usePreloadImages(allImageSrcs);

  const active = products.find((p:any)=>p.id===activeId) || products[0];
  const cards  = active.children ? active.children : [active];

  const gridVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 24 } },
  };

  return (
    <section id="products" className="industry-pattern relative pt-10 pb-24 overflow-hidden"
      style={{ backgroundColor:"var(--bg-soft)",color:"var(--text-main)" }}>

      <div className="absolute top-[-200px] left-[10%] w-[600px] h-[600px] blur-[200px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(ellipse,rgba(59,130,246,0.08),transparent)" }}/>
      <div className="absolute bottom-[-200px] right-[10%] w-[600px] h-[600px] blur-[200px] rounded-full pointer-events-none"
        style={{ background:"radial-gradient(ellipse,rgba(251,191,36,0.06),transparent)" }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-yellow-500 text-sm tracking-widest uppercase font-semibold">{isAr?"تشكيلتنا":"Our Collection"}</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black" style={{ color:"var(--text-main)" }}>{t.products.title}</h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full mx-auto"/>
        </motion.div>

        {/* TABS */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {products.map((p:any)=>(
            <button key={p.id} onClick={()=>setActiveId(p.id)}
              className="relative px-6 py-3 rounded-2xl text-sm font-bold"
              style={{ color: activeId===p.id ? "#fff" : "var(--text-soft)", border: activeId===p.id ? "none" : "1px solid var(--border)" }}>
              {activeId===p.id && (
                <motion.span
                  layoutId="tabPill"
                  className="absolute inset-0 rounded-2xl"
                  style={{ background:"linear-gradient(135deg,#3b82f6,#6366f1)", boxShadow:"0 8px 24px rgba(99,102,241,0.3)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{p.title}</span>
            </button>
          ))}
        </div>

        {/* CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className="grid md:grid-cols-3 gap-8"
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {cards.map((c:any, i:number)=>{
              const isHov = hoveredIdx===i;
              return (
                <motion.div key={c.id}
                  variants={cardVariants}
                  layout
                  className="rounded-3xl overflow-hidden cursor-pointer"
                  style={{ backgroundColor:"var(--bg-card)",border:"1px solid var(--border)" }}
                  animate={{
                    y: isHov ? -10 : 0,
                    boxShadow: isHov ? "0 24px 64px rgba(0,0,0,0.22)" : "0 4px 24px rgba(0,0,0,0.06)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  onMouseEnter={()=>setHoveredIdx(i)}
                  onMouseLeave={()=>setHoveredIdx(null)}
                  onClick={()=>setSelectedId(c.id)}>

                  <div className="relative h-[260px] overflow-hidden">
                    <CardImage src={c.image} alt={c.title} id={c.id} hovered={isHov} priority={i === 0}/>
                    <div style={{ position:"absolute",inset:0,display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:"20px",pointerEvents:"none" }}>
                      <motion.span
                        style={{ backgroundColor:"#fff",color:"#2563eb",fontWeight:700,fontSize:"13px",padding:"8px 24px",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.3)" }}
                        animate={{ y: isHov ? 0 : 20, opacity: isHov ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {t.products.details}
                      </motion.span>
                    </div>
                  </div>

                  <div className={`p-6 ${isAr?"text-right":"text-left"}`}>
                    <h3 className="text-lg font-black mb-3" style={{ color:"var(--text-main)" }}>{c.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-bold text-sm" style={{ color:"var(--accent-blue)" }}>
                        {isAr?"التفاصيل":"Details"}
                        {isAr?<ChevronLeft className="w-4 h-4"/>:<ChevronRight className="w-4 h-4"/>}
                      </span>
                      <motion.div className="w-8 h-8 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor:"var(--bg-card2)" }}
                        animate={{ rotate: isHov ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor:"var(--accent-blue)" }}/>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mounted && selectedId && (
          <ProductPopup selectedId={selectedId} onClose={()=>setSelectedId(null)} isAr={isAr} t={t}/>
        )}
      </AnimatePresence>
    </section>
  );
}