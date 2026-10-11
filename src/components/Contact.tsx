import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AtSign, Github, Linkedin, MapPin } from "lucide-react";
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
            Get in touch<span className="text-primary">.</span>
          </h2>
        </TextReveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12"
      >
        <div className="relative py-2 lg:py-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 right-4 -z-10 font-mono text-[9rem] font-bold leading-none text-primary/[0.06] sm:text-[11rem] lg:right-0"
          >
            @
          </span>

          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
            Contact channels
          </p>
          <h3 className="max-w-xs text-xl font-bold leading-snug tracking-tight sm:text-2xl">
            Start a conversation.
          </h3>

          <div className="mt-8 flex w-fit items-center gap-2 text-xs text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            Cebu City, Philippines
          </div>
        </div>

        <div className="glass-card overflow-hidden rounded-2xl">
          {contactLinks.map(({ label, value, href, icon: Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
              className={`group flex min-w-0 items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:outline-none sm:px-6 sm:py-6 ${
                index < contactLinks.length - 1
                  ? "border-b border-border/40"
                  : ""
              }`}
            >
              <span className="shrink-0 text-primary">
                <Icon size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </span>
                <span className="block break-words text-sm font-semibold transition-colors group-hover:text-primary sm:text-base">
                  {value}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
