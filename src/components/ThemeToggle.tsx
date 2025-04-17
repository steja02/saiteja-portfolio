
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Toggle } from "@/components/ui/toggle";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsChanging(true);
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Reset animation state after transition
    setTimeout(() => setIsChanging(false), 800);
  };

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      aria-label="Toggle theme"
      variant="outline"
      className={`rounded-full w-10 h-10 p-0 transition-all duration-300 
        ${theme === "light" 
          ? "bg-white border-gray-200 hover:border-devops-accent1 hover:bg-gray-50 shadow-md" 
          : "bg-devops-darker border-devops-highlight/30 hover:border-devops-highlight hover:bg-devops-highlight/10"
        }`}
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
    >
      <div className={`transition-all duration-500 ${isChanging ? "rotate-180" : ""}`}>
        {theme === "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-devops-highlight" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-devops-accent1" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
}
