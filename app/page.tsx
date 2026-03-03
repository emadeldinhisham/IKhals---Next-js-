import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero/Hero";
import Impact from "../components/sections/Impact";
import About from "../components/sections/About";
import Products from "../components/sections/Products/Products";
import Certificates from "../components/sections/Certificates/Certificates";
import Footer from "../components/layout/Footer";
import Industrial from "../components/sections/Industrial/Industrial";
import ExportMap from "../components/sections/ExportMap";
import Services from "@/components/sections/Services";
import ReqestAds from "@/components/sections/ReqestAds";
import StatsDivider from "@/components/sections/StatsDivider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import LoadingScreen from "@/components/effects/LoadingScreen";
import CustomCursor from "@/components/effects/CustomerCursor";
import PageTransition from "@/components/effects/Pagetransition";

export default function Home() {
  return (
    <LanguageProvider>

      <LoadingScreen />
      <CustomCursor />

      <PageTransition>
        <Navbar />

        <Hero />
        <StatsDivider />

        <About />
        <StatsDivider />

        <Impact />
        <StatsDivider />

        <Products />
        <StatsDivider />

        <Services />
        <StatsDivider />

        <ExportMap />
        <StatsDivider />

        <ReqestAds />
        <StatsDivider />

        <Industrial />
        <StatsDivider />

        <Certificates />

        <Footer />
      </PageTransition>

    </LanguageProvider>
  );
}