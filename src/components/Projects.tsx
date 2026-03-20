import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Folder, ArrowUpRight } from "lucide-react";
import TextReveal from "./TextReveal";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, payments, and admin dashboard. Built with React, Node.js, and Stripe integration.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    github: "#",
    live: "#",
    image: "🛒",
    color: "from-cyan-500/10 to-blue-500/10",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative task manager with drag-and-drop, team boards, and activity tracking.",
    tags: ["TypeScript", "Next.js", "WebSocket", "Prisma"],
    github: "#",
    live: "#",
    image: "📋",
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "AI Chat Interface",
    description:
      "Sleek conversational UI for interacting with language models, featuring markdown rendering and code highlighting.",
    tags: ["React", "Tailwind", "OpenAI", "Streaming"],
    github: "#",
    live: "#",
    image: "🤖",
    color: "from-emerald-500/10 to-teal-500/10",
  },
];

const otherProjects = [
  { title: "Portfolio v1", tags: ["HTML", "CSS", "JS"] },
  { title: "Weather Dashboard", tags: ["React", "API", "Charts"] },
  { title: "CLI Tool", tags: ["Node.js", "Commander"] },
  { title: "Blog CMS", tags: ["Next.js", "MDX", "Vercel"] },
];

const ProjectCard = ({ project, index, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5% + ${index * 25}px)`,
        }}
        className="glass-card relative w-full max-w-5xl h-[500px] md:h-[600px] p-8 md:p-12 overflow-hidden flex flex-col justify-between border border-white/10 shadow-2xl bg-background/95 backdrop-blur-xl"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} -z-10`}
        />

        <div className="absolute top-4 right-8 font-mono text-8xl font-bold opacity-[0.03] select-none">
          0{index + 1}
        </div>

        <div className="flex flex-col md:flex-row h-full gap-12 items-center">
          <div className="flex-1 space-y-6 relative z-20">
            <div className="space-y-2">
              <span className="text-4xl">{project.image}</span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                {project.title}
              </h3>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={project.github}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <Github size={18} />{" "}
                <span className="text-sm font-medium">Code</span>
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <span className="text-sm font-medium">Live Demo</span>{" "}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="hidden md:flex flex-1 w-full h-full bg-white/5 rounded-2xl border border-white/10 items-center justify-center text-8xl grayscale hover:grayscale-0 transition-all duration-500 relative z-20">
            {project.image}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding max-w-6xl mx-auto relative"
    >
      <TextReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured Projects<span className="text-primary">.</span>
        </h2>
      </TextReveal>
      <div className="glow-line" />

      {/* Featured projects */}
      <div className="relative z-10">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={project.title}
              index={i}
              project={project}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Other projects grid */}
      <div className="relative z-20 pt-10 border-t border-white/5 bg-background">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-xl text-muted-foreground mb-12"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-20">
          {otherProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 group cursor-pointer bg-background/50 hover:bg-background/80 transition-colors"
            >
              <Folder
                size={32}
                className="text-primary mb-4 group-hover:rotate-[-5deg] transition-transform"
              />
              <h4 className="font-mono text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
