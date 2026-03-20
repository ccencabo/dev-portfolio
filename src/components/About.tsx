import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";
import TextReveal from "./TextReveal";
import ProfilePic from "../assets/cara.jpg";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const infoItems = [
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      label: "Education",
      value: "BS Information Technology",
      sub: "Cebu Institute of Technology - University",
      extra: "Magna Cum Laude (2020 – 2024)",
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      label: "Location",
      value: "Cebu City, Philippines",
      sub: "Open to Remote / Hybrid / On-site",
      extra: "Available for worldwide projects",
    },
  ];

  return (
    <section id="about" className="section-padding max-w-6xl mx-auto" ref={ref}>
      <TextReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get to know me<span className="text-primary">.</span>
        </h2>
      </TextReveal>
      <div className="glow-line mb-10" />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Info & Paragraph */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-border bg-card/50 hover:bg-card transition-all group"
              >
                <div className="mb-3 p-2 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </h3>
                <p className="text-foreground font-bold mt-1">{item.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.sub}</p>
                <p className="text-xs font-semibold text-primary mt-2">
                  {item.extra}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I’m a{" "}
              <span className="text-foreground font-medium">
                Full Stack Web Developer
              </span>{" "}
              with a keen eye for{" "}
              <span className="text-foreground font-medium">UI/UX Design</span>.
              I don't just write code; I craft digital experiences that are as
              functional as they are beautiful.
            </p>
            <p>
              When I’m away from my keyboard, you’ll likely find me lost in a
              good book, climbing ranks in games, or chasing my next big
              adventure outdoors.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <motion.div style={{ y }} className="relative group">
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={ProfilePic}
                alt="Cara Encabo"
                className="h-full w-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
            <div className="absolute -inset-1 -z-10 rounded-2xl border-2 border-primary/30 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-primary/50" />
            <div className="absolute -inset-4 -z-20 rounded-3xl bg-primary/5 blur-2xl transition-opacity duration-300 group-hover:bg-primary/10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
