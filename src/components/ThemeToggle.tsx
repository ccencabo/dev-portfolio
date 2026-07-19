import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="flex items-center gap-2">
      <Moon size={14} className="text-muted-foreground transition-opacity" style={{ opacity: isDark ? 1 : 0.4 }} />
      <Switch checked={!isDark} onCheckedChange={(checked) => setIsDark(!checked)} />
      <Sun size={14} className="text-muted-foreground transition-opacity" style={{ opacity: !isDark ? 1 : 0.4 }} />
    </div>
  );
};

export default ThemeToggle;
