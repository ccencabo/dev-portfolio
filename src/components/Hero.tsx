import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Palette,
  Zap,
  Folder,
  ArrowUpRight,
  FileText,
  Download,
  Eye,
  ChevronDown,
} from "lucide-react";
import TypeWriter from "./TypeWriter";
import MagneticButton from "./MagneticButton";

interface HeroProps {
  onNavigate?: (tab: string) => void;
}

const container = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const item = {
  initial: { opacity: 0, y: 20, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = ({ onNavigate }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        style={{ opacity, scale, y }}
        className="relative z-10 section-padding max-w-6xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          <motion.div
            variants={item}
            className="md:col-span-2 md:row-span-2 glass-card p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div
              className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-sans font-semibold text-[10px] tracking-wider uppercase text-primary">
                  Available for work
                </span>
              </div>
              <p className="code-tag mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
                <span className="gradient-text">Cara Encabo</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-muted-foreground mb-4">
                I build{" "}
                <TypeWriter
                  words={[
                    "web apps. ✨",
                    "interfaces. 🌸",
                    "experiences. 💕",
                    "the future. 💫",
                  ]}
                  className="text-primary"
                />
              </h2>
              <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
                A full-stack developer specializing in building exceptional,
                delightful digital experiences.
              </p>
            </div>
          </motion.div>

          {/* About card */}
          <motion.div
            variants={item}
            onClick={() => onNavigate?.("about")}
            className="glass-card p-6 cursor-pointer group hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <Code2 size={20} className="text-primary" />
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="font-sans font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                About Me
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                2+ years building modern web applications
              </p>
            </div>
          </motion.div>

          {/* Skills card */}
          <motion.div
            variants={item}
            onClick={() => onNavigate?.("skills")}
            className="glass-card p-6 cursor-pointer group hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <Zap size={20} className="text-primary" />
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="font-sans font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                Skills
              </h3>
              <div className="flex flex-wrap gap-1 mt-2">
                {["React", "TypeScript", "Node.js"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects card */}
          <motion.div
            variants={item}
            onClick={() => onNavigate?.("projects")}
            className="md:col-span-2 glass-card p-6 cursor-pointer group hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Folder size={20} className="text-primary" />
                  <h3 className="font-sans font-bold text-sm group-hover:text-primary transition-colors">
                    Featured Projects
                  </h3>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { emoji: "🛒", title: "E-Commerce" },
                  { emoji: "📋", title: "Task Manager" },
                  { emoji: "🤖", title: "AI Chat" },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="p-3 rounded-xl bg-secondary/50 border border-border/30 text-center"
                  >
                    <span className="text-xl block mb-1">{p.emoji}</span>
                    <span className="text-[10px] font-sans font-semibold text-muted-foreground">
                      {p.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social links card */}
          <motion.div
            variants={item}
            className="glass-card p-6 flex flex-col justify-between"
          >
            <p className="font-sans font-semibold text-[10px] tracking-wider uppercase text-muted-foreground mb-3">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/cara-carmel-encabo-779645286",
                  label: "LinkedIn",
                },
                { icon: Mail, href: "#", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <MagneticButton
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] block"
                >
                  <Icon size={16} />
                </MagneticButton>
              ))}
            </div>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            variants={item}
            className="glass-card p-6 group hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-0"
              title="View Resume"
            />
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 pointer-events-none">
              <div className="flex items-center justify-between mb-3">
                <FileText size={20} className="text-primary" />

                <div className="flex items-center gap-3 pointer-events-auto">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-muted-foreground hover:text-primary transition-colors"
                    title="View Resume"
                  >
                    <Eye size={16} />
                  </a>

                  <a
                    href="/resume.pdf"
                    download="Cara_Encabo_Resume.pdf"
                    className="cursor-pointer text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all"
                    title="Download Resume"
                  >
                    <Download size={16} />
                  </a>
                </div>
              </div>
              <h3 className="font-sans font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                Resume
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                View or download my CV
              </p>
            </div>
          </motion.div>

          {/* Contact CTA card */}
          <motion.div
            variants={item}
            onClick={() => onNavigate?.("contact")}
            className="md:col-span-2 glass-card p-6 cursor-pointer group hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-primary/10 to-transparent relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <Palette size={20} className="text-primary" />
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="font-sans font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                Let's Talk
              </h3>
              <p className="text-xs text-muted-foreground">
                Open to new opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => onNavigate?.("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer text-muted-foreground hover:text-primary transition-colors z-20 group"
      >
        <span className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100 transition-opacity">
          Scroll down
        </span>
        <ChevronDown
          size={16}
          className="animate-bounce"
          style={{ animationDuration: "2s" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
