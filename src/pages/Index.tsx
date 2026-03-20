import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import MouseGlow from "@/components/MouseGlow";

const sections: Record<string, React.ComponentType> = {
  home: Hero,
  about: About,
  projects: Projects,
  skills: Skills,
  contact: Contact,
};

const pageVariants = {
  initial: { opacity: 0, y: 40, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -30, filter: "blur(4px)" },
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const ActiveSection = sections[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <ParticleField />
      <MouseGlow />
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="pt-16 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab === "home" ? (
              <Hero onNavigate={setActiveTab} />
            ) : (
              <ActiveSection />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
