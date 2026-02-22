import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero/Hero";
import Impact from "../components/sections/Impact";
import About from "../components/sections/About";
import Products from "../components/sections/Products/Products";
import Certificates from "../components/sections/Certificates/Certificates";
import Footer from "../components/layout/Footer";
import Industrial from "../components/sections/Industrial/Industrial";
import Reveal from "@/components/effects/Reveal";
import ExportMap from "../components/sections/ExportMap";
import Services from "@/components/sections/Services";
import ReqestAds from "@/components/sections/ReqestAds";
import StatsDivider from "@/components/sections/StatsDivider";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <StatsDivider />

      <About />
      <StatsDivider />

      <Impact />
      <StatsDivider />

      <Products />
      <StatsDivider />

      <Reveal><Services /></Reveal>
      <StatsDivider />

      <ExportMap />
      <StatsDivider />

      <ReqestAds />
      <StatsDivider />

      <Reveal><Industrial /></Reveal>
      <StatsDivider />

      <Reveal><Certificates /></Reveal>

      <Footer />
    </>
  );
}