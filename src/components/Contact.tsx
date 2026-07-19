import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="section-padding max-w-3xl mx-auto text-center relative"
      ref={ref}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full opacity-[0.05] dark:opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)), transparent 70%)",
          }}
        />
      </div>

      <div className="relative">
        <TextReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Work Together<span className="text-primary">.</span>
          </h2>
        </TextReveal>
        <div className="glow-line mb-8 max-w-xs mx-auto" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-10 leading-relaxed font-sans"
        >
          I'm currently open to new opportunities. Whether you have a project in
          mind, a question, or just want to say hi — my inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MagneticButton
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-primary/50 text-primary font-sans font-bold text-lg hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300 group"
          >
            <Mail size={20} />
            Say Hello
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
