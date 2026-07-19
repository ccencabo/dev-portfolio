import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import TextReveal from "./TextReveal";
import ProfilePic from "../assets/cara.jpg";

const InspectorAccordion = ({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-border/30 py-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full font-sans text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 hover:text-foreground transition-colors duration-200"
      >
        <span
          className={`inline-block text-[9px] transition-transform duration-200 select-none ${isOpen ? "rotate-90" : "rotate-0"
            }`}
        >
          ▶
        </span>
        <span>{title}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-2.5 pl-4 overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

// Main About Component
const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const windowVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 60 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 110,
        damping: 15,
        delay,
      },
    }),
  };

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.3, 1, 1, 0.3]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.97, 1, 1, 0.97]
  );

  return (
    <motion.section
      id="about"
      className="section-padding max-w-6xl mx-auto"
      ref={ref}
      style={{ opacity, scale }}
    >
      <TextReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get to know me<span className="text-primary">.</span>
        </h2>
      </TextReveal>
      <div className="glow-line mb-10" />

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* Left Column: macOS Profile Widget (col-span-5) */}
        <motion.div
          variants={windowVariants}
          custom={0.1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:col-span-5 border border-border/50 bg-card/40 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between group hover:border-primary/30 transition-all duration-300 select-none"
        >
          {/* Header dots */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/30 bg-muted/40">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground/60">
              cara.png
            </span>
            <div className="w-10" />
          </div>

          {/* Photo area */}
          <div className="p-6 flex flex-col items-center justify-center bg-card/5">
            <div className="h-48 w-48 md:h-56 md:w-56 overflow-hidden rounded-xl border border-border bg-card/40 shadow-inner">
              <img
                src={ProfilePic}
                alt="Cara Encabo"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: macOS Finder Inspector Get Info panel (col-span-7) */}
        <motion.div
          variants={windowVariants}
          custom={0.25}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:col-span-7 border border-border/50 bg-card/40 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between group hover:border-primary/30 transition-all duration-300"
        >

          {/* Inspector Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/30 bg-muted/40 select-none">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[10px] font-sans font-bold text-muted-foreground/60">
              Cara Encabo Info — Get Info
            </span>
            <div className="w-10" />
          </div>

          {/* Inspector Core Body */}
          <div className="p-6 md:p-8 flex flex-col space-y-4">

            {/* Top file stats info */}
            <div className="flex items-center gap-4 select-none border-b border-border/20 pb-4">
              {/* Custom SVG Document Icon */}
              <div className="p-3.5 rounded-xl border border-primary/20 bg-primary/5 text-primary">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="m10 13-2 2 2 2" />
                  <path d="m14 17 2-2-2-2" />
                </svg>
              </div>
              <div className="space-y-0.5 text-left">
                <h3 className="text-lg font-bold font-sans tracking-tight text-foreground">
                  Cara Encabo
                </h3>
                <p className="text-xs text-muted-foreground font-semibold">
                  Full Stack Developer
                </p>
                <p className="text-[10px] font-mono text-primary font-bold">
                  Size: 183 KB on disk
                </p>
              </div>
            </div>

            {/* Accordion 1: General Bio */}
            <InspectorAccordion title="General Info" defaultOpen={true}>
              <div className="space-y-2 text-left">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed select-text font-sans font-medium">
                  I'm a full stack web developer passionate about building
                  scalable, user-focused applications. I enjoy solving complex
                  problems, developing reliable backend systems, and creating
                  intuitive interfaces that deliver a seamless user experience.
                </p>
                <div className="grid grid-cols-3 gap-y-1.5 text-[11px] md:text-xs font-sans text-left">
                  <div className="text-muted-foreground font-semibold">City:</div>
                  <div className="col-span-2 text-foreground font-bold">
                    Cebu City, Philippines
                  </div>
                  <div className="text-muted-foreground font-semibold">Work Preferences:</div>
                  <div className="col-span-2 text-foreground font-bold">
                    Remote, Hybrid, or On-site opportunities
                  </div>
                  <div className="text-muted-foreground font-semibold">Status:</div>
                  <div className="col-span-2 text-primary font-bold">
                    Active & open for new paths
                  </div>
                </div>
              </div>
            </InspectorAccordion>

            {/* Accordion 2: Education */}
            <InspectorAccordion title="Education" defaultOpen={false}>
              <div className="grid grid-cols-3 gap-y-1.5 text-[11px] md:text-xs font-sans text-left">
                <div className="text-muted-foreground font-semibold">Degree:</div>
                <div className="col-span-2 text-foreground font-bold">
                  BS Information Technology
                </div>
                <div className="text-muted-foreground font-semibold">Honors:</div>
                <div className="col-span-2 text-primary font-bold">
                  Magna Cum Laude 🏆
                </div>
                <div className="text-muted-foreground font-semibold">University:</div>
                <div className="col-span-2 text-foreground font-bold leading-tight">
                  Cebu Institute of Technology – University (CIT-U)
                </div>
              </div>
            </InspectorAccordion>

            {/* Accordion 3: Beyond Work */}
            <InspectorAccordion title="Beyond Work" defaultOpen={false}>
              <div className="space-y-2 text-left">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed select-text font-sans font-medium">
                  When I'm away from the keyboard, I recharge by getting lost in a novel, watching a good movie, gaming, or exploring the outdoors.
                </p>
              </div>
            </InspectorAccordion>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;
