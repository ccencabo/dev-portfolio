import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import TextReveal from "./TextReveal";

const row1Skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Framer Motion",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Radix UI",
  "shadcn/ui"
];

const row2Skills = [
  "PHP",
  "Laravel",
  "Java",
  "MySQL",
  "PostgreSQL",
  "REST APIs",
  "Figma",
  "Git",
  "GitHub",
  "Docker",
  "Postman"
];

const Skills = () => {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState("frontend.json");

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

  // Tab definitions
  const tabs = [
    { name: "frontend.json", label: "frontend.json" },
    { name: "backend.json", label: "backend.json" },
    { name: "tools.json", label: "tools.json" },
  ];

  return (
    <motion.section
      id="skills"
      className="section-padding max-w-6xl mx-auto"
      ref={ref}
      style={{ opacity, scale }}
    >
      <TextReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tech Stack<span className="text-primary">.</span>
        </h2>
      </TextReveal>
      <div className="glow-line mb-8" />

      {/* Aesthetic Instruction Comment */}
      <p className="text-center font-sans text-xs text-muted-foreground/50 mb-6 tracking-wide flex items-center justify-center gap-1.5 select-none">
        <span className="text-primary font-mono font-bold">//</span> Click the tabs below to explore different files
        <span className="text-primary animate-pulse">✨</span>
      </p>

      {/* macOS Styled Code Editor */}
      <div className="relative w-full border border-border/40 rounded-2xl bg-[#0f0a0d] shadow-2xl overflow-hidden group hover:shadow-[0_0_50px_hsl(var(--primary)/0.08)] transition-shadow duration-500">

        {/* Soft background glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none opacity-40" />

        {/* Editor Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-[#160f13] select-none">
          {/* Windows Dots */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          {/* File Tabs */}
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-3.5 py-1 rounded-md text-[10px] md:text-[11px] font-sans font-bold cursor-pointer transition-all duration-200 border ${activeTab === tab.name
                    ? "bg-[#25151e] text-primary border-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.1)]"
                    : "text-muted-foreground/60 border-transparent hover:text-muted-foreground"
                  }`}
              >
                {tab.label}
              </div>
            ))}
          </div>

          {/* Editor Metadata */}
          <span className="text-[9px] font-sans font-bold tracking-wider text-muted-foreground/30 uppercase">
            JSON
          </span>
        </div>

        {/* Editor Content Area */}
        <div className="p-4 md:p-8 overflow-x-auto text-left min-h-[280px] flex items-start select-text leading-relaxed">
          {/* Line Numbers */}
          <div className="text-muted-foreground/30 text-right pr-4 select-none border-r border-border/20 mr-4 font-sans text-xs md:text-sm">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
          </div>

          {/* Syntax Highlighted JSON Views */}
          <div className="text-[#e2cbd6] font-mono text-xs md:text-sm flex-1">
            {activeTab === "frontend.json" && (
              <div>
                <div>
                  <span className="text-[#a78bfa]">{`{`}</span>
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"languages"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"JavaScript"</span>,{" "}
                  <span className="text-[#fca5a5]">"TypeScript"</span>,{" "}
                  <span className="text-[#fca5a5]">"HTML5"</span>,{" "}
                  <span className="text-[#fca5a5]">"CSS3"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"frameworks"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"React.js"</span>,{" "}
                  <span className="text-[#fca5a5]">"Next.js"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"styling"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"Tailwind CSS"</span>,{" "}
                  <span className="text-[#fca5a5]">"Bootstrap"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"animations"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"Framer Motion"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"uiComponents"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"Radix UI"</span>,{" "}
                  <span className="text-[#fca5a5]">"shadcn/ui"</span>
                  <span className="text-[#a78bfa]">]</span>
                </div>
                <div>
                  <span className="text-[#a78bfa]">{`}`}</span>
                  <span className="animate-cursor-blink text-primary ml-1">|</span>
                </div>
              </div>
            )}

            {activeTab === "backend.json" && (
              <div>
                <div>
                  <span className="text-[#a78bfa]">{`{`}</span>
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"languages"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"PHP"</span>,{" "}
                  <span className="text-[#fca5a5]">"Java"</span>,{" "}
                  <span className="text-[#fca5a5]">"Node.js"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"frameworks"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"Laravel"</span>,{" "}
                  <span className="text-[#fca5a5]">"Express.js"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"databases"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"MySQL"</span>,{" "}
                  <span className="text-[#fca5a5]">"PostgreSQL"</span>,{" "}
                  <span className="text-[#fca5a5]">"Prisma ORM"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"communication"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"REST APIs"</span>,{" "}
                  <span className="text-[#fca5a5]">"WebSockets"</span>
                  <span className="text-[#a78bfa]">]</span>
                </div>
                <div>
                  <span className="text-[#a78bfa]">{`}`}</span>
                  <span className="animate-cursor-blink text-primary ml-1">|</span>
                </div>
              </div>
            )}

            {activeTab === "tools.json" && (
              <div>
                <div>
                  <span className="text-[#a78bfa]">{`{`}</span>
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"design"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"Figma"</span>,{" "}
                  <span className="text-[#fca5a5]">"UI/UX Design"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"versionControl"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"Git"</span>,{" "}
                  <span className="text-[#fca5a5]">"GitHub"</span>,{" "}
                  <span className="text-[#fca5a5]">"Bitbucket"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"testing"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"Postman"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"containers"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"Docker"</span>
                  <span className="text-[#a78bfa]">]</span>,
                </div>
                <div className="pl-6">
                  <span className="text-[#ec4899]">"packageManagers"</span>:{" "}
                  <span className="text-[#a78bfa]">[</span>
                  <span className="text-[#fca5a5]">"npm"</span>,{" "}
                  <span className="text-[#fca5a5]">"pnpm"</span>,{" "}
                  <span className="text-[#fca5a5]">"yarn"</span>
                  <span className="text-[#a78bfa]">]</span>
                </div>
                <div>
                  <span className="text-[#a78bfa]">{`}`}</span>
                  <span className="animate-cursor-blink text-primary ml-1">|</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Infinite Auto-Playing Marquee Chips */}
      <div className="mt-16 space-y-6">
        {/* Style block */}
        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-container {
            display: flex;
            overflow: hidden;
            user-select: none;
            gap: 1rem;
            padding: 1.25rem 0;
            mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          }
          .marquee-content {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 1rem;
            min-width: 100%;
          }
          .marquee-left {
            animation: marquee-left 30s linear infinite;
          }
          .marquee-right {
            animation: marquee-right 30s linear infinite;
          }
          .marquee-container:hover .marquee-left,
          .marquee-container:hover .marquee-right {
            animation-play-state: paused;
          }
        `}</style>

        {/* Row 1 (Left Scrolling) */}
        <div className="marquee-container">
          <div className="marquee-content marquee-left">
            {row1Skills.concat(row1Skills).map((skill, idx) => (
              <span
                key={`r1-${skill}-${idx}`}
                className="px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-sans font-bold shadow-[0_0_15px_hsl(var(--primary)/0.03)] hover:scale-105 hover:bg-primary/10 hover:border-primary/40 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all duration-300 cursor-default inline-block shrink-0 animate-float"
                style={{ animationDelay: `${(idx % 4) * 0.4}s`, animationDuration: "4s" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 (Right Scrolling) */}
        <div className="marquee-container">
          <div className="marquee-content marquee-right">
            {row2Skills.concat(row2Skills).map((skill, idx) => (
              <span
                key={`r2-${skill}-${idx}`}
                className="px-5 py-2.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-sans font-bold shadow-[0_0_15px_hsl(var(--accent)/0.03)] hover:scale-105 hover:bg-accent/10 hover:border-accent/40 hover:shadow-[0_0_15px_hsl(var(--accent)/0.15)] transition-all duration-300 cursor-default inline-block shrink-0 animate-float"
                style={{ animationDelay: `${(idx % 4) * 0.4 + 0.2}s`, animationDuration: "4s" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
