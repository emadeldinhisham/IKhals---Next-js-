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

<header className={`fixed top-0 left-0 w-full z-50
transition-all duration-500

${scrolled
? "backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg"
: "bg-transparent"
}

`}>

<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

{/* LOGO */}

<div className="font-black text-lg text-white tracking-wide">

{lang==="ar" ? "الإخلاص للصناعات البلاستيكية" : " Al ikhlas For Plastic Industries"}

</div>

{/* NAV LINKS */}

<nav className="hidden md:flex gap-8 text-sm font-bold text-white/70">

<a href="#about" className="hover:text-white transition">
{lang==="ar" ? "من نحن" : "About"}
</a>

<a href="#products" className="hover:text-white transition">
{lang==="ar" ? "المنتجات" : "Products"}
</a>

<a href="#certificates" className="hover:text-white transition">
{lang==="ar" ? "الاعتمادات" : "Certificates"}
</a>

<a href="#contact" className="hover:text-white transition">
{lang==="ar" ? "تواصل معنا" : "Contact"}
</a>

</nav>

{/* RIGHT SIDE */}

<div className="flex items-center gap-4">

{/* LANGUAGE BUTTON */}

<button
onClick={()=> setLang(lang==="ar" ? "en":"ar")}
className="px-4 py-2 rounded-lg
border border-white/20
text-sm font-bold
hover:border-white/40 transition">

{lang==="ar" ? "EN" : "AR"}

</button>

{/* CTA */}

<a
href="#quote"
className="hidden md:inline-block px-5 py-2 rounded-xl
bg-yellow-500 text-black font-black text-sm
hover:bg-yellow-400 transition">

{lang==="ar" ? "طلب عرض سعر" : "Request Quote"}

</a>

</div>

</div>

</header>

);

}
