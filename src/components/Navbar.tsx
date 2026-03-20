import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

interface NavbarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const menuVars = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVars = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        mobileOpen
          ? "bg-background"
          : "bg-background/80 backdrop-blur-xl border-b border-border/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16 relative z-50">
        <motion.a
          href="#"
          whileHover="hover"
          initial="rest"
          className="group flex items-center font-mono text-xl font-bold tracking-tight"
        >
          <motion.span
            variants={{ rest: { x: 0 }, hover: { x: -2 } }}
            className="text-primary opacity-60 transition-opacity group-hover:opacity-100"
          >
            &lt;
          </motion.span>

          <span className="relative mx-1 text-foreground transition-colors duration-300 group-hover:text-primary">
            cara
          </span>

          <motion.span
            variants={{ rest: { x: 0 }, hover: { x: 2 } }}
            className="ml-1 text-primary opacity-60 transition-opacity group-hover:opacity-100"
          >
            /&gt;
          </motion.span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-border/50 bg-card/60 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="relative px-4 py-1.5 font-mono text-sm transition-colors duration-300 rounded-full"
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30"
                  style={{
                    boxShadow: "0 0 20px hsl(var(--primary) / 0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeTab === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground relative z-50 p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col justify-center h-screen"
          >
            <div className="flex flex-col items-center gap-8 px-6">
              {navItems.map((item, i) => (
                <div key={item.id} className="overflow-hidden">
                  <motion.button
                    variants={linkVars}
                    onClick={() => {
                      onTabChange(item.id);
                      setMobileOpen(false);
                    }}
                    className="group relative flex items-center justify-center text-3xl font-bold tracking-tighter sm:text-4xl transition-colors"
                  >
                    <span
                      className={`font-mono text-sm sm:text-base mr-4 transition-colors duration-300 ${
                        activeTab === item.id
                          ? "text-primary"
                          : "text-primary/50 group-hover:text-primary"
                      }`}
                    >
                      0{i + 1}.
                    </span>
                    <span
                      className={`relative transition-colors duration-300 ${
                        activeTab === item.id
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.label}

                      {activeTab === item.id && (
                        <motion.div
                          layoutId="mobile-active-line"
                          className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </span>
                  </motion.button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
