import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import ProfilePic from "../assets/cara.jpg";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

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

  const timelineItems = [
    {
      step: "01 / WHO I AM",
      title: "Full Stack Web Developer",
      desc: "I'm a full stack web developer passionate about building scalable, user-focused applications. I enjoy solving complex problems, developing reliable backend systems, and creating intuitive interfaces that deliver a seamless user experience.",
    },
    {
      step: "02 / LOCATION",
      title: "Cebu City, Philippines",
      desc: "Based in Cebu City and open to remote, hybrid, or on-site opportunities.",
    },
    {
      step: "03 / EDUCATION",
      title: "BS Information Technology",
      desc: "Graduated Magna Cum Laude with a Bachelor of Science in Information Technology from Cebu Institute of Technology – University (CIT-U).",
    },
    {
      step: "04 / BEYOND WORK",
      title: "Books, Gaming & Outdoors",
      desc: "When I'm away from my keyboard, you'll likely find me reading thriller books, climbing ranks in games, or chasing adventures outdoors.",
    },
  ];

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

        {/* Left Column: macOS Profile widget (col-span-5) */}
        <div className="md:col-span-5 border border-border/50 bg-[#160f13] rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between group hover:border-primary/30 transition-all duration-300 select-none">
          {/* Header dots */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/40 bg-[#160f13]/80">
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
          <div className="p-6 flex flex-col items-center justify-center bg-card/10">
            <div className="h-48 w-48 md:h-56 md:w-56 overflow-hidden rounded-xl border border-border bg-card/40 shadow-inner">
              <img
                src={ProfilePic}
                alt="Cara Encabo"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Timeline Widget list (col-span-7) */}
        <div className="md:col-span-7 border border-border/50 bg-card/40 backdrop-blur-sm rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300">
          <div className="relative border-l border-primary/20 ml-3 pl-6 space-y-8">
            {timelineItems.map((item, idx) => (
              <div key={idx} className="relative group select-none">
                {/* Timeline dot */}
                <span className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full border border-primary bg-background group-hover:bg-primary transition-all duration-300 shadow-[0_0_8px_hsl(var(--primary)/0.3)] group-hover:scale-110" />

                <div className="text-[9px] font-mono text-primary font-bold uppercase tracking-wider">
                  {item.step}
                </div>

                <h4 className="text-base font-bold font-sans mt-0.5 text-foreground transition-colors group-hover:text-primary duration-300">
                  {item.title}
                </h4>

                <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default About;
