"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {

  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const content = {
    ar: {
      company: "شركة الإخلاص",
      subtitle: "للصناعات البلاستيكية",
      desc: "شركة رائدة في تصنيع الأكياس البلاستيكية عالية الجودة وفق أحدث المعايير العالمية وبطاقة إنتاجية متطورة.",
      quickLinks: "روابط سريعة",
      contact: "تواصل معنا",
      whatsapp: "واتساب مباشر",
      rights: "© 2024 الإخلاص للصناعات البلاستيكية - جميع الحقوق محفوظة",
      formTitle: "أرسل رسالة",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        message: "رسالتك",
        send: "إرسال الرسالة",
        sent: "✓ تم الإرسال بنجاح!"
      },
      links: [
        { label: "الرئيسية",   link: "#top"          },
        { label: "المنتجات",   link: "#products"     },
        { label: "من نحن",     link: "#about"        },
        { label: "الاعتمادات", link: "#certificates" },
        { label: "تواصل معنا", link: "#contact"      },
      ]
    },
    en: {
      company: "Al Ikhlas",
      subtitle: "For Plastic Industries",
      desc: "A leading company in manufacturing high-quality plastic bags according to the latest global standards with advanced production capacity.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      whatsapp: "WhatsApp Direct",
      rights: "© 2024 Al Ikhlas Plastic Industries - All Rights Reserved",
      formTitle: "Send a Message",
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        send: "Send Message",
        sent: "✓ Sent Successfully!"
      },
      links: [
        { label: "Home",         link: "#top"          },
        { label: "Products",     link: "#products"     },
        { label: "About",        link: "#about"        },
        { label: "Certificates", link: "#certificates" },
        { label: "Contact",      link: "#contact"      },
      ]
    }
  };

  const t = content[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer className="relative bg-white text-slate-700 overflow-hidden border-t border-slate-100">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10
        bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
        bg-[size:80px_80px]" />

      {/* Glow blobs */}
      <div className="absolute top-[-100px] right-[10%] w-[400px] h-[400px] bg-blue-400/8 blur-[180px] rounded-full pointer-events-none"/>
      <div className="absolute bottom-[-100px] left-[10%] w-[400px] h-[400px] bg-yellow-400/8 blur-[180px] rounded-full pointer-events-none"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* LOGO + Description */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10">
              <Image
                src="/img/logo.png"
                fill
                alt="Al Ikhlas Logo"
                className="object-contain"
              />
            </div>
            <div className={`font-black text-base tracking-tight leading-tight ${isAr ? "text-right" : "text-left"}`}>
              <span className="text-blue-600">{t.company}</span>
              <span className="text-slate-400 font-normal text-xs block">{t.subtitle}</span>
            </div>
          </div>

          <p className="text-slate-500 leading-relaxed max-w-sm text-sm">
            {t.desc}
          </p>

          {/* Social icons */}
          <div className="mt-8 flex items-center gap-3">
            {/* Instagram */}
            <a href="#" className="w-9 h-9 rounded-lg bg-pink-50 border border-pink-100
              flex items-center justify-center hover:bg-pink-100 hover:scale-110
              transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#e1306c" stroke="none"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100
              flex items-center justify-center hover:bg-blue-100 hover:scale-110
              transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1877f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100
              flex items-center justify-center hover:bg-sky-100 hover:scale-110
              transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0077b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-black text-slate-800 mb-8 text-base relative inline-block">
            {t.quickLinks}
            <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"/>
          </h4>
          <ul className="space-y-4">
            {t.links.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="text-slate-500 text-sm font-semibold
                    hover:text-blue-600 transition duration-300 relative
                    after:absolute after:left-0 after:bottom-[-3px]
                    after:h-[2px] after:w-0 after:rounded-full
                    after:bg-gradient-to-r after:from-blue-500 after:to-yellow-400
                    after:transition-all after:duration-300
                    hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-black text-slate-800 mb-8 text-base relative inline-block">
            {t.contact}
            <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"/>
          </h4>
          <div className="space-y-4 text-sm text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100
                flex items-center justify-center text-blue-600 shrink-0">📞</div>
              <span>+20 10 0000 0000</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100
                flex items-center justify-center text-blue-600 shrink-0">✉</div>
              <span>info@ikhlas.com</span>
            </div>
          </div>
          <a
            href="https://wa.me/201000000000"
            className="mt-8 inline-flex items-center gap-2
              bg-green-500 hover:bg-green-600 text-white
              px-6 py-3 rounded-xl font-bold text-sm
              shadow-md hover:shadow-lg hover:scale-105
              transition-all duration-300"
          >
            <span>💬</span>
            {t.whatsapp}
          </a>
        </div>

        {/* Contact Form */}
        <div>
          <h4 className="font-black text-slate-800 mb-8 text-base relative inline-block">
            {t.formTitle}
            <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"/>
          </h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              required
              placeholder={t.form.name}
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200
                text-sm text-slate-700 placeholder:text-slate-400
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                transition-all duration-300"
            />
            <input
              type="email"
              required
              placeholder={t.form.email}
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200
                text-sm text-slate-700 placeholder:text-slate-400
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                transition-all duration-300"
            />
            <textarea
              required
              rows={3}
              placeholder={t.form.message}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200
                text-sm text-slate-700 placeholder:text-slate-400
                focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500
                text-white font-bold text-sm
                hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-200
                transition-all duration-300"
            >
              {sent ? t.form.sent : t.form.send}
            </button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-slate-100 py-6 text-center text-xs text-slate-400">
        {t.rights}
      </div>

    </footer>
  );
}