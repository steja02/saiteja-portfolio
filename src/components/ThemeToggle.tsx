
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Toggle } from "@/components/ui/toggle";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      aria-label="Toggle theme"
      variant="outline"
      className="rounded-full w-10 h-10 p-0 border-devops-highlight/30 hover:border-devops-highlight bg-transparent hover:bg-devops-highlight/10 dark:bg-transparent dark:hover:bg-devops-highlight/20 transition-all"
      pressed={theme === "dark"}
      onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
    >
      {theme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-devops-highlight" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-devops-highlight" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
}
