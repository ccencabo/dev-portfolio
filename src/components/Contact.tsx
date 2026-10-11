import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  AtSign,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import TextReveal from "./TextReveal";

const contactLinks = [
  {
    label: "Email",
    value: "caraencabo012301@gmail.com",
    href: "mailto:caraencabo012301@gmail.com",
    icon: AtSign,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/cara-carmel-encabo-779645286",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "See what I am building",
    href: "https://github.com/ccencabo",
    icon: Github,
  },
];

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.35, 1, 1, 0.45],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.98, 1, 1, 0.98],
  );

  return (
    <motion.section
      id="contact"
      className="section-padding relative mx-auto max-w-6xl"
      ref={ref}
      style={{ opacity, scale }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5" />
      </div>

      <div className="mb-10 md:mb-14">
        <TextReveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Start a conversation<span className="text-primary">.</span>
          </h2>
        </TextReveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl border border-border/50 bg-card/70 shadow-2xl backdrop-blur-xl"
      >
        <div className="relative flex items-center justify-between border-b border-border/30 bg-muted/60 px-4 py-3 select-none">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="pointer-events-none absolute left-1/2 max-w-[60%] -translate-x-1/2 truncate text-center font-mono text-[9px] text-muted-foreground/70 sm:max-w-[70%] md:text-[10px]">
            contact.app - choose a channel
          </span>
          <span className="hidden font-mono text-[9px] text-muted-foreground/50 sm:inline md:text-[10px]">
            portfolio.app
          </span>
          <span className="w-10 sm:hidden" />
        </div>

        <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative">
            <div className="mb-8 flex flex-col gap-5 border-b border-border/30 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Contact channels
                </p>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Choose what works for you.
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={14} className="text-primary" />
                Cebu City, Philippines
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {contactLinks.map(({ label, value, href, icon: Icon }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
                  className="glass-card group relative flex min-h-40 min-w-0 flex-col justify-between overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 focus-visible:border-primary/40 focus-visible:outline-none sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative z-10 flex items-start">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={18} />
                    </span>
                  </div>
                  <span className="relative z-10 mt-8 min-w-0">
                    <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-semibold">
                      {value}
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
