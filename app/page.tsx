import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logotypes from "@/components/Logotypes";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import CaseStudies from "@/components/CaseStudies";
import WorkingProcess from "@/components/WorkingProcess";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollCraftInit from "@/components/ScrollCraftInit";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollCraftInit />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Logotypes />
        <Services />
        <CtaBanner />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
