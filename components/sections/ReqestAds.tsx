"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import emailjs from "@emailjs/browser";

// =============================================
// ⚙️ إعدادات EmailJS — عدّل هذه القيم فقط
// =============================================
const EMAILJS_SERVICE_ID  = "service_3h61ej1";   // من لوحة EmailJS
const EMAILJS_TEMPLATE_ID = "template_3cwu65p";  // من لوحة EmailJS
const EMAILJS_PUBLIC_KEY  = "Hxt1ORdZ3xjJ19xXc";     // Public Key من EmailJS
const TO_EMAIL             = "emadeldinhisham@gmail.com";  // الإيميل المستلِم
// =============================================

const COLORS = [
  { nameAr: "أبيض",       nameEn: "White",       hex: "#FFFFFF", border: "#e2e8f0" },
  { nameAr: "كريمي",      nameEn: "Cream",       hex: "#FFF8E7", border: "#e8dcc8" },
  { nameAr: "بيج",        nameEn: "Beige",       hex: "#F5DEB3", border: "#d4b896" },
  { nameAr: "رمادي فاتح", nameEn: "Light Gray",  hex: "#D1D5DB", border: "#9ca3af" },
  { nameAr: "رمادي",      nameEn: "Gray",        hex: "#6B7280", border: "#4b5563" },
  { nameAr: "أسود",       nameEn: "Black",       hex: "#1F2937", border: "#111827" },
  { nameAr: "أزرق فاتح",  nameEn: "Light Blue",  hex: "#BFDBFE", border: "#93c5fd" },
  { nameAr: "أزرق",       nameEn: "Blue",        hex: "#2563EB", border: "#1d4ed8" },
  { nameAr: "أخضر",       nameEn: "Green",       hex: "#16A34A", border: "#15803d" },
  { nameAr: "أحمر",       nameEn: "Red",         hex: "#DC2626", border: "#b91c1c" },
  { nameAr: "برتقالي",    nameEn: "Orange",      hex: "#EA580C", border: "#c2410c" },
  { nameAr: "أصفر",       nameEn: "Yellow",      hex: "#EAB308", border: "#ca8a04" },
  { nameAr: "بني",        nameEn: "Brown",       hex: "#92400E", border: "#78350f" },
  { nameAr: "أخضر زيتي",  nameEn: "Olive",       hex: "#65A30D", border: "#4d7c0f" },
  { nameAr: "وردي",       nameEn: "Pink",        hex: "#EC4899", border: "#db2777" },
  { nameAr: "بنفسجي",     nameEn: "Purple",      hex: "#7C3AED", border: "#6d28d9" },
];

const WEIGHTS = ["5 kg", "10 kg", "25 kg", "50 kg", "100 kg", "مخصص / Custom"];

// رسم الشكارة SVG ثلاثية الأبعاد
function BagSVG({ color, borderColor }: { color: string; borderColor: string }) {
  const isLight = ["#FFFFFF","#FFF8E7","#F5DEB3","#D1D5DB","#BFDBFE","#EAB308"].includes(color);
  const textColor = isLight ? "#374151" : "#ffffff";
  const shadow = isLight ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0.4)";

  return (
    <svg viewBox="0 0 220 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
      <defs>
        <linearGradient id="bagFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1"/>
          <stop offset="60%" stopColor={color} stopOpacity="0.95"/>
          <stop offset="100%" stopColor={shadow} stopOpacity="0.6"/>
        </linearGradient>
        <linearGradient id="bagSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={borderColor} stopOpacity="0.8"/>
          <stop offset="100%" stopColor={shadow} stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="bagTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1"/>
          <stop offset="100%" stopColor={borderColor} stopOpacity="0.7"/>
        </linearGradient>
        <filter id="bagShadow">
          <feDropShadow dx="4" dy="8" stdDeviation="10" floodOpacity="0.25"/>
        </filter>
      </defs>

      {/* ظل الكيس */}
      <ellipse cx="110" cy="268" rx="75" ry="10" fill="rgba(0,0,0,0.15)"/>

      {/* الجانب الأيمن (3D) */}
      <polygon
        points="170,55 200,70 200,240 170,230"
        fill="url(#bagSide)"
        stroke={borderColor}
        strokeWidth="0.5"
      />

      {/* الوجه الأمامي */}
      <rect
        x="30" y="55" width="140" height="175"
        rx="8" ry="8"
        fill="url(#bagFront)"
        stroke={borderColor}
        strokeWidth="1"
        filter="url(#bagShadow)"
      />

      {/* الجزء العلوي (القمة) */}
      <polygon
        points="30,55 170,55 200,70 60,70"
        fill="url(#bagTop)"
        stroke={borderColor}
        strokeWidth="0.5"
      />

      {/* خياطة الوجه */}
      <rect x="40" y="65" width="120" height="155" rx="4"
        fill="none" stroke={textColor} strokeWidth="1" strokeOpacity="0.2"
        strokeDasharray="4,3"/>

      {/* شريط علوي */}
      <rect x="30" y="55" width="140" height="22" rx="4"
        fill={borderColor} opacity="0.5"/>

      {/* خط الخياطة العلوي */}
      <line x1="50" y1="66" x2="150" y2="66"
        stroke={textColor} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3,3"/>

      {/* شريط سفلي */}
      <rect x="30" y="208" width="140" height="22" rx="4"
        fill={borderColor} opacity="0.5"/>

      {/* خط الخياطة السفلي */}
      <line x1="50" y1="219" x2="150" y2="219"
        stroke={textColor} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3,3"/>

      {/* شعار وسط الكيس */}
      <circle cx="100" cy="143" r="28"
        fill={textColor} fillOpacity="0.08"
        stroke={textColor} strokeWidth="0.8" strokeOpacity="0.2"/>
      <text x="100" y="138" textAnchor="middle"
        fontSize="9" fill={textColor} fillOpacity="0.5" fontFamily="serif" fontWeight="bold">
        INDUSTRIAL
      </text>
      <text x="100" y="151" textAnchor="middle"
        fontSize="7" fill={textColor} fillOpacity="0.4" fontFamily="serif">
        PACKAGING
      </text>

      {/* فتحة علوية (valve) */}
      <rect x="82" y="48" width="36" height="10" rx="3"
        fill={borderColor} stroke={borderColor} strokeWidth="0.5"/>
      <rect x="90" y="44" width="20" height="8" rx="2"
        fill={color} stroke={borderColor} strokeWidth="0.5"/>
    </svg>
  );
}

export default function QuoteRequest() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const formRef = useRef<HTMLFormElement>(null);

  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    weight: "",
    width: "",
    height: "",
    depth: "",
    quantity: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      to_email:    TO_EMAIL,
      from_name:   form.name,
      from_email:  form.email,
      phone:       form.phone,
      bag_color:   isAr ? selectedColor.nameAr : selectedColor.nameEn,
      bag_color_hex: selectedColor.hex,
      weight:      form.weight,
      width:       form.width,
      height:      form.height,
      depth:       form.depth,
      quantity:    form.quantity,
      notes:       form.notes,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name:"", email:"", phone:"", weight:"", width:"", height:"", depth:"", quantity:"", notes:"" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border border-gray-200 bg-white
    text-sm text-slate-700 placeholder-slate-400
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    transition-all duration-200`;

  const labelClass = `block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5`;

  return (
    <section className="relative py-24 bg-[var(--bg-main)] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[900px] h-[600px] rounded-full
          bg-gradient-to-r from-blue-500/10 to-yellow-400/8 blur-[180px]"/>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`mb-16 ${isAr ? "text-right" : "text-left"}`}>
          <span className="text-yellow-500 text-sm tracking-widest uppercase">
            {isAr ? "طلب عرض سعر" : "Request a Quote"}
          </span>
          <h2 className="mt-3 text-4xl xl:text-5xl font-black text-[var(--text-main)]">
            {isAr ? "صمّم" : "Design Your"}{" "}
            <span className="text-blue-600">
              {isAr ? "شكارتك" : "Bag"}
            </span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg text-lg">
            {isAr
              ? "حدد المواصفات واللون والأبعاد وسنرسل لك عرض السعر فوراً"
              : "Specify your bag details and we'll send you a quote immediately"}
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ===== LEFT: Bag Preview ===== */}
            <div className="flex flex-col items-center gap-8">

              {/* 3D Bag */}
              <div className="relative w-64 h-80 transition-all duration-500">
                <BagSVG color={selectedColor.hex} borderColor={selectedColor.border}/>

                {/* Weight badge */}
                {form.weight && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                    bg-white/90 backdrop-blur-sm border border-gray-200
                    rounded-full px-4 py-1.5 shadow-lg text-sm font-black text-blue-600">
                    {form.weight}
                  </div>
                )}
              </div>

              {/* Color name */}
              <div className="text-center">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">
                  {isAr ? "اللون المختار" : "Selected Color"}
                </p>
                <p className="text-lg font-black text-slate-700">
                  {isAr ? selectedColor.nameAr : selectedColor.nameEn}
                </p>
              </div>

              {/* Color Picker */}
              <div className="w-full">
                <p className={labelClass}>
                  {isAr ? "اختر اللون" : "Choose Color"}
                </p>
                <div className="grid grid-cols-8 gap-2">
                  {COLORS.map((c) => (
                    <button
                      key={c.hex}
                      type="button"
                      title={isAr ? c.nameAr : c.nameEn}
                      onClick={() => setSelectedColor(c)}
                      className="w-full aspect-square rounded-lg transition-all duration-200 hover:scale-110"
                      style={{
                        backgroundColor: c.hex,
                        border: selectedColor.hex === c.hex
                          ? `3px solid #2563eb`
                          : `2px solid ${c.border}`,
                        boxShadow: selectedColor.hex === c.hex
                          ? "0 0 0 2px #bfdbfe"
                          : "none",
                      }}
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* ===== RIGHT: Form ===== */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 flex flex-col gap-6">

              {/* Personal Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className={labelClass}>{isAr ? "الاسم الكامل" : "Full Name"} *</label>
                  <input name="name" required value={form.name} onChange={handleChange}
                    placeholder={isAr ? "محمد أحمد" : "John Doe"}
                    className={inputClass}/>
                </div>
                <div>
                  <label className={labelClass}>{isAr ? "البريد الإلكتروني" : "Email"} *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange}
                    placeholder="email@example.com"
                    className={inputClass}/>
                </div>
                <div>
                  <label className={labelClass}>{isAr ? "رقم الهاتف" : "Phone"}</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+966 5x xxx xxxx"
                    className={inputClass}/>
                </div>
              </div>

              {/* Bag Specs */}
              <div>
                <p className="text-sm font-black text-slate-700 mb-4 pb-2 border-b border-gray-100">
                  {isAr ? "📦 مواصفات الشكارة" : "📦 Bag Specifications"}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className={labelClass}>{isAr ? "الوزن" : "Weight"} *</label>
                    <select name="weight" required value={form.weight} onChange={handleChange}
                      className={inputClass}>
                      <option value="">{isAr ? "اختر الوزن..." : "Select weight..."}</option>
                      {WEIGHTS.map(w => (
                        <option key={w} value={w}>{w}</option>
                      ))}
                    </select>
                  </div>

                  {/* Dimensions */}
                  <div>
                    <label className={labelClass}>{isAr ? "العرض (سم)" : "Width (cm)"}</label>
                    <input name="width" type="number" value={form.width} onChange={handleChange}
                      placeholder="50" className={inputClass}/>
                  </div>
                  <div>
                    <label className={labelClass}>{isAr ? "الارتفاع (سم)" : "Height (cm)"}</label>
                    <input name="height" type="number" value={form.height} onChange={handleChange}
                      placeholder="80" className={inputClass}/>
                  </div>
                  <div>
                    <label className={labelClass}>{isAr ? "العمق (سم)" : "Depth (cm)"}</label>
                    <input name="depth" type="number" value={form.depth} onChange={handleChange}
                      placeholder="10" className={inputClass}/>
                  </div>
                  <div>
                    <label className={labelClass}>{isAr ? "الكمية (قطعة)" : "Quantity"} *</label>
                    <input name="quantity" type="number" required value={form.quantity} onChange={handleChange}
                      placeholder="1000" className={inputClass}/>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className={labelClass}>{isAr ? "ملاحظات إضافية" : "Additional Notes"}</label>
                <textarea name="notes" value={form.notes} onChange={handleChange}
                  rows={3}
                  placeholder={isAr ? "أي تفاصيل إضافية..." : "Any additional details..."}
                  className={`${inputClass} resize-none`}/>
              </div>

              {/* Color summary */}
              <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-lg border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: selectedColor.hex }}/>
                <div>
                  <p className="text-xs text-slate-400">{isAr ? "اللون المختار" : "Selected Color"}</p>
                  <p className="text-sm font-bold text-slate-700">
                    {isAr ? selectedColor.nameAr : selectedColor.nameEn}
                    <span className="text-slate-400 font-normal ml-2 text-xs">{selectedColor.hex}</span>
                  </p>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full py-4 rounded-xl font-black text-white text-base
                  bg-blue-600 hover:bg-blue-500 active:bg-blue-700
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-200"
              >
                {status === "sending" ? (isAr ? "جارٍ الإرسال..." : "Sending...") :
                 status === "sent"    ? (isAr ? "✅ تم الإرسال بنجاح!" : "✅ Sent Successfully!") :
                 status === "error"   ? (isAr ? "❌ حدث خطأ، حاول مجدداً" : "❌ Error, try again") :
                                        (isAr ? "🚀 إرسال طلب عرض السعر" : "🚀 Send Quote Request")}
              </button>

              {status === "sent" && (
                <p className="text-center text-sm text-green-600 font-semibold">
                  {isAr
                    ? "سنتواصل معك في أقرب وقت ممكن 🎉"
                    : "We'll get back to you as soon as possible 🎉"}
                </p>
              )}

            </div>
          </div>
        </form>
      </div>
    </section>
  );
}