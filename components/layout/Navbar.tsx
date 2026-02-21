"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Navbar() {

const [scrolled,setScrolled] = useState(false);
const { lang, setLang } = useLanguage();

useEffect(()=>{

  const onScroll = () => {
    setScrolled(window.scrollY > 30);
  };

  window.addEventListener("scroll",onScroll);
  return ()=> window.removeEventListener("scroll",onScroll);

},[]);

return(

<header
className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
${scrolled
? "bg-white/80 backdrop-blur-xl shadow-md border-b border-[rgba(15,23,42,0.06)]"
: "bg-transparent"
}`}
>

<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

{/* LOGO */}

<div className="font-black text-lg tracking-tight text-[var(--text-main)]">

{lang==="ar"
? "الإخلاص للصناعات البلاستيكية"
: "Al Ikhlas Plastic Industries"}

</div>

{/* NAV LINKS */}

<nav className="hidden md:flex gap-10 text-sm font-semibold text-[var(--text-soft)]">

{[
  { labelAr:"من نحن", labelEn:"About", link:"#about" },
  { labelAr:"المنتجات", labelEn:"Products", link:"#products" },
  { labelAr:"الاعتمادات", labelEn:"Certificates", link:"#certificates" },
  { labelAr:"تواصل معنا", labelEn:"Contact", link:"#contact" }
].map((item,i)=>(
  <a
    key={i}
    href={item.link}
    className="relative hover:text-[var(--text-main)] transition duration-300
    after:absolute after:left-0 after:bottom-[-6px]
    after:h-[2px] after:w-0
    after:bg-[var(--accent-blue)]
    after:transition-all after:duration-300
    hover:after:w-full"
  >
    {lang==="ar" ? item.labelAr : item.labelEn}
  </a>
))}

</nav>

{/* RIGHT SIDE */}

<div className="flex items-center gap-4">

{/* LANGUAGE SWITCH */}

<button
onClick={()=> setLang(lang==="ar" ? "en":"ar")}
className="px-4 py-2 rounded-lg
bg-[var(--bg-soft)]
border border-[rgba(15,23,42,0.06)]
text-sm font-semibold
hover:bg-white
transition duration-300"
>
{lang==="ar" ? "EN" : "AR"}
</button>

{/* CTA */}

<a
href="#quote"
className="hidden md:inline-block px-6 py-3 rounded-xl
bg-[var(--accent-blue)] text-white
font-bold text-sm
shadow-md hover:shadow-lg
hover:scale-[1.03]
transition duration-300"
>
{lang==="ar" ? "طلب عرض سعر" : "Request Quote"}
</a>

</div>

</div>

</header>

);
}