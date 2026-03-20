import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("light");
    }
    return false;
  });

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);

  return (
    <div className="flex items-center gap-2">
      <Moon size={14} className="text-muted-foreground" />
      <Switch checked={isLight} onCheckedChange={setIsLight} />
      <Sun size={14} className="text-muted-foreground" />
    </div>
  );
};

export default ThemeToggle;
