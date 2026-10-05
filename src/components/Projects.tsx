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
  {
    title: "Brewed Tales",
    description:
      "A playful book-discovery and reading companion with a cozy, interactive interface. Features community shelf sharing, curated recommendations, a 'blind date' style discovery flow, and AI integration for book summaries to make finding your next book fun and inviting.",
    tags: ["React", "Next.js", "Google Books API", "AI Integration"],
    github: "#",
    image: "📖",
    color: "from-amber-400/15 to-orange-200/15",
  },
];

const otherProjects = [
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
      className="sticky top-0 flex h-screen items-start justify-center pb-4 pt-20 md:items-center md:py-0"
    >
      <motion.div
        style={{
          scale,
        }}
        className="relative flex h-[calc(100vh-6rem)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/80 shadow-2xl backdrop-blur-xl md:h-[620px]"
      >
        <div className="relative z-30 flex items-center justify-between border-b border-border/30 bg-muted/60 px-4 py-3 select-none">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="absolute inset-x-14 truncate text-center font-mono text-[9px] text-muted-foreground/70 md:text-[10px]">
            Project 0{index + 1} — {project.title}
          </span>
          <span className="hidden font-mono text-[9px] text-muted-foreground/50 sm:inline md:text-[10px]">
            portfolio.app
          </span>
          <span className="w-10 sm:hidden" />
        </div>

        <div className="relative flex-1 overflow-y-auto p-4 sm:p-5 md:overflow-hidden md:p-8">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
          />

          <div className="relative z-20 grid min-h-full gap-4 md:h-full md:min-h-0 md:grid-cols-[1.2fr_0.8fr] md:gap-8">
            {/* Project preview */}
            <div className="flex h-40 flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-background/30 shadow-inner sm:h-[230px] md:h-full">
            {selectedPicture ? (
              <>
                <img
                  src={selectedPicture.src}
                  alt={`${project.title} — ${selectedPicture.label}`}
                  className="w-full min-h-0 flex-1 object-contain p-2.5"
                />
                <div
                  className="flex w-full gap-1.5 border-t border-white/10 bg-background/20 px-2 py-2"
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
                className="h-full w-full object-contain p-3"
              />
            ) : (
              <div className="flex flex-col items-center gap-4">
                <span className="text-7xl md:text-8xl">{project.image}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Preview coming soon
                </span>
              </div>
            )}
          </div>

            {/* Project details */}
            <div className="flex min-h-0 flex-col justify-between gap-5">
              <div>
                <div className="mb-4 flex items-center gap-3 border-b border-border/30 pb-4">
                  <span className="text-3xl">{project.image}</span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                      Featured project / 0{index + 1}
                    </p>
                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-md border border-primary/20 bg-background/35 px-2.5 py-1 font-sans text-[10px] font-semibold text-primary md:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 border-t border-border/30 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 rounded-md border border-border/50 bg-background/35 px-4 py-2 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Github size={15} />
                    <span className="text-xs font-medium">Code</span>
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-md border border-border/50 bg-background/35 px-4 py-2 transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <span className="text-xs font-medium">Live Demo</span>
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      title="Live demo unavailable"
                      className="flex cursor-not-allowed items-center gap-2 rounded-md border border-border/30 bg-background/20 px-4 py-2 opacity-40"
                    >
                      <span className="text-xs font-medium">Live Demo</span>
                      <ArrowUpRight size={15} />
                    </span>
                  )}
                </div>
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

        <div className="mx-auto max-w-xl px-6 pb-20">
          {otherProjects.map((p, i) => (
            <motion.div
              key={`${p.title}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-card/40 shadow-xl backdrop-blur-md transition-colors hover:border-primary/30"
            >
              <div className="relative flex items-center justify-between border-b border-border/30 bg-muted/40 px-4 py-2.5">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 font-mono text-[9px] text-muted-foreground/60">
                  projects / upcoming
                </span>
                <div className="w-10" />
              </div>
              <div className="flex min-h-44 flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center">
                <Folder
                  size={38}
                  className="mb-4 text-primary transition-transform group-hover:rotate-[-5deg]"
                />
                <h4 className="font-sans text-lg font-bold transition-colors group-hover:text-primary">
                  {p.title}
                </h4>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  New work is on the way
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/20 bg-background/30 px-2 py-1 font-sans text-xs font-semibold text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
