import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import MouseGlow from "@/components/MouseGlow";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const isScrollingProgrammatically = useRef(false);
  const scrollTimeout = useRef<number | null>(null);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      isScrollingProgrammatically.current = true;
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);

      const offset = 64; // navbar height offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Clear the scroll lock after smooth scrolling completes
      scrollTimeout.current = window.setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 800);
    }
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "contact"];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          if (isScrollingProgrammatically.current) return;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(id);
            }
          });
        },
        {
          rootMargin: "-25% 0px -45% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      <ParticleField />
      <MouseGlow />
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="relative z-10">
        <Hero onNavigate={handleTabChange} />
        
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
