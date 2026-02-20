import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero/Hero";
import Impact from "../components/sections/Impact";
import About from "../components/sections/About";
import Products from "../components/sections/Products/Products";
import Certificates from "../components/sections/Certificates/Certificates";
import Footer from "../components/layout/Footer";
import Industrial from "../components/sections/Industrial/Industrial";
import Reveal from "@/components/effects/Reveal";
import { revalidatePath } from "next/cache";
import ExportMap from "../components/sections/ExportMap";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     
  <About />

  <div className="h-40 bg-gradient-to-b from-transparent to-[#020617]"/>

  <Impact />

  <div className="h-40 bg-gradient-to-b from-[#020617] to-transparent"/>
       <div className="h-40 bg-gradient-to-b from-[#020617] to-transparent"/>

  <Products />
       <div className="h-40 bg-gradient-to-b from-transparent to-[#020617]"/>

  <Reveal><Services /></Reveal>
<ExportMap />
 
      <Reveal> <Industrial /></Reveal>
    
  
      <Reveal><Certificates /></Reveal>
      
      <Footer />
      
    </>
  );
}
