import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Folder, ArrowUpRight } from "lucide-react";
import TextReveal from "./TextReveal";

type ProjectImage = {
  src: string;
  label: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  image: string;
  color: string;
  picture?: string;
  pictures?: ProjectImage[];
};

const projects: Project[] = [
  {
    title: "The Second Chapter",
    description:
      "A marketplace built for my small secondhand bookstore to automate book listings, scheduled drops, customer claims, order tracking, and inventory management—replacing a previously manual sales process with a streamlined online workflow.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (PostgreSQL, Auth & Storage)",
      "Cloudflare Workers",
      "Vite",
      "Docker",
    ],
    github: "#",
    live: "https://thesecondchapter.caralib.com/",
    image: "📚",
    pictures: [
      {
        src: "/The-Second-Chapter-Homepage-Buyer.png",
        label: "Buyer homepage",
      },
      {
        src: "/The-Second-Chapter-Latest-Drops.png",
        label: "Latest book drops",
      },
      {
        src: "/The-Second-Chapter-Tutorial.png",
        label: "Buyer claiming tutorial",
      },
      {
        src: "/The-Second-Chapter-Homepage-Seller.png",
        label: "Seller claims dashboard",
      },
      {
        src: "/The-Second-Chapter-Inventory.png",
        label: "Seller inventory dashboard",
      },
    ],
    color: "from-emerald-400/15 to-orange-200/15",
  },
  {
    title: "DataMate",
    description:
      "A team capstone project streamlining data management for MSMEs. Automates spreadsheet uploads, data cleaning, normalization, and inconsistency detection, converting sheets into a secure database with SQL exports.",
    tags: ["Java", "TypeScript", "React", "MySQL", "Tailwind CSS"],
    github: "#",
    image: "📊",
    picture: "/DataMate-Home.png",
    color: "from-blue-400/15 to-indigo-300/15",
  },
  {
    title: "Arangkada",
    description:
      "A web-based PUV (Public Utility Vehicle) rental management system connecting operators and professional drivers. Operators can list fleets, track payments, and monitor driver assignments online, while drivers can search, apply to lease vehicles, and process rental payments.",
    tags: ["Java", "TypeScript", "React", "MySQL", "Tailwind CSS"],
    github: "#",
    image: "🚙",
    picture: "/Arangkada-Home.png",
    color: "from-violet-400/15 to-indigo-300/15",
  },
];

const otherProjects = [
  {
    title: "Brewed Tales",
    tags: ["React", "Next.js", "Google Books API", "AI Integration"],
  },
  { title: "Coming Soon", tags: [] },
  { title: "Coming Soon", tags: [] },
];

type ProjectCardProps = {
  project: Project;
  index: number;
  targetScale: number;
};

const ProjectCard = ({ project, index, targetScale }: ProjectCardProps) => {
  const container = useRef(null);
  const [activePicture, setActivePicture] = useState(0);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const gallery = project.pictures ?? [];
  const selectedPicture = gallery[activePicture];

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
        className="glass-card relative w-full max-w-3xl h-[580px] p-6 md:p-8 overflow-hidden flex flex-col justify-between border border-border/30 shadow-2xl bg-background/95 backdrop-blur-xl"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} -z-10`}
        />

        <div className="absolute top-4 right-8 font-sans text-8xl font-bold opacity-[0.03] select-none">
          0{index + 1}
        </div>

        <div className="flex flex-col h-full gap-5">
          {/* Picture/emoji on top */}
          <div className="w-[85%] max-w-[440px] mx-auto h-[200px] md:h-[260px] bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center overflow-hidden relative z-20">
            {selectedPicture ? (
              <>
                <img
                  src={selectedPicture.src}
                  alt={`${project.title} — ${selectedPicture.label}`}
                  className="w-full min-h-0 flex-1 object-contain p-2"
                />
                <div
                  className="flex w-full gap-1.5 px-2 pb-2"
                  role="group"
                  aria-label={`${project.title} screenshot gallery`}
                >
                  {gallery.map(
                    (
                      picture: ProjectImage,
                      pictureIndex: number,
                    ) => (
                      <button
                        key={picture.src}
                        type="button"
                        onClick={() => setActivePicture(pictureIndex)}
                        aria-label={`Show ${picture.label}`}
                        aria-pressed={activePicture === pictureIndex}
                        className={`h-8 flex-1 overflow-hidden rounded border transition-all ${
                          activePicture === pictureIndex
                            ? "border-primary ring-1 ring-primary"
                            : "border-white/10 opacity-55 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={picture.src}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ),
                  )}
                </div>
              </>
            ) : project.picture ? (
              <img
                src={project.picture}
                alt={project.title}
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <span className="text-6xl md:text-7xl">{project.image}</span>
            )}
          </div>

          {/* Description on bottom */}
          <div className="flex-1 flex flex-col justify-between space-y-4 relative z-20">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{project.image}</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {project.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs font-sans font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <Github size={16} />{" "}
                  <span className="text-xs md:text-sm font-medium">Code</span>
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                  >
                    <span className="text-xs md:text-sm font-medium">
                      Live Demo
                    </span>{" "}
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    title="Live demo unavailable"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 opacity-40 cursor-not-allowed"
                  >
                    <span className="text-xs md:text-sm font-medium">
                      Live Demo
                    </span>{" "}
                    <ArrowUpRight size={16} />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="px-6 md:px-12 lg:px-24 pt-10 pb-0 md:pt-16 md:pb-0 max-w-6xl mx-auto relative"
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
      </section>

      {/* Other projects grid */}
      <div className="max-w-6xl mx-auto relative z-20 pt-10 border-t border-border/30 bg-transparent">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-sans font-bold text-xl text-muted-foreground mb-12"
        >
          Other Projects
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-20">
          {otherProjects.map((p, i) => (
            <motion.div
              key={`${p.title}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 group cursor-pointer bg-transparent hover:bg-white/5 transition-colors"
            >
              <Folder
                size={32}
                className="text-primary mb-4 group-hover:rotate-[-5deg] transition-transform"
              />
              <h4 className="font-sans text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-sans font-semibold text-muted-foreground bg-white/5 border border-border/20 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
