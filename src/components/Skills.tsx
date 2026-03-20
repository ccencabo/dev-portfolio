import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TextReveal from "./TextReveal";

const skillCategories = [
  {
    title: "Frontend",
    color: "175 80% 50%",
    skills: [
      "Javascript",
      "HTML/CSS",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    color: "195 80% 60%",
    skills: ["PHP", "Laravel", "Java", "MySQL", "REST APIs"],
  },
  {
    title: "Tools & Other Skills",
    color: "160 70% 45%",
    skills: [
      "UI/UX Design",
      "Git",
      "Github / Bitbucket",
      "Figma",
      "Postman",
      "Docker",
    ],
  },
];

const SkillCard = ({
  category,
  index,
  inView,
}: {
  category: (typeof skillCategories)[0];
  index: number;
  inView: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      className="perspective-[800px] cursor-pointer"
      initial={{ opacity: 0, y: 40, rotateX: 15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: "easeOut" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-[320px] md:h-[350px]" // Changed to fixed height for consistent flipping
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border p-6 md:p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            background: `linear-gradient(145deg, hsl(${category.color} / 0.08), hsl(var(--card)) 60%)`,
            borderColor: `hsl(${category.color} / 0.2)`,
            boxShadow: `0 4px 30px hsl(${category.color} / 0.05)`,
          }}
        >
          <div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-mono text-lg font-bold"
              style={{
                background: `hsl(${category.color} / 0.12)`,
                color: `hsl(${category.color})`,
                border: `1px solid hsl(${category.color} / 0.25)`,
              }}
            >
              {index === 0 ? "</>" : index === 1 ? "{}" : "⚙"}
            </div>
            <h3
              className="text-xl md:text-2xl font-bold font-mono mb-2"
              style={{ color: `hsl(${category.color})` }}
            >
              {category.title}
            </h3>
            <p className="text-sm text-muted-foreground font-mono">
              {category.skills.length} technologies
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {category.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono px-3 py-1 rounded-full border"
                style={{
                  borderColor: `hsl(${category.color} / 0.25)`,
                  color: `hsl(${category.color} / 0.8)`,
                  background: `hsl(${category.color} / 0.06)`,
                }}
              >
                {skill}
              </span>
            ))}
            <span
              className="text-xs font-mono px-3 py-1 rounded-full border"
              style={{
                borderColor: `hsl(${category.color} / 0.15)`,
                color: `hsl(${category.color} / 0.5)`,
              }}
            >
              +{category.skills.length - 3}
            </span>
          </div>

          <p className="text-[10px] font-mono mt-4 tracking-wider uppercase opacity-40">
            click to flip →
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border p-6 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(145deg, hsl(${category.color} / 0.12), hsl(var(--card)) 50%)`,
            borderColor: `hsl(${category.color} / 0.3)`,
          }}
        >
          <h4
            className="text-lg font-bold font-mono mb-4 shrink-0"
            style={{ color: `hsl(${category.color})` }}
          >
            {category.title}
          </h4>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-2 gap-2">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill}
                  className="flex items-center justify-center rounded-xl border px-2 py-3 font-mono text-[12px] text-center transition-all"
                  style={{
                    borderColor:
                      hoveredSkill === skill
                        ? `hsl(${category.color} / 0.6)`
                        : `hsl(${category.color} / 0.15)`,
                    background:
                      hoveredSkill === skill
                        ? `hsl(${category.color} / 0.15)`
                        : `hsl(${category.color} / 0.04)`,
                    color:
                      hoveredSkill === skill
                        ? `hsl(${category.color})`
                        : `hsl(${category.color} / 0.7)`,
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-[10px] font-mono mt-4 tracking-wider uppercase opacity-40 shrink-0">
            ← flip back
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="section-padding max-w-6xl mx-auto"
      ref={ref}
    >
      <TextReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tech Stack<span className="text-primary">.</span>
        </h2>
      </TextReveal>
      <div className="glow-line mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.title} category={cat} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
