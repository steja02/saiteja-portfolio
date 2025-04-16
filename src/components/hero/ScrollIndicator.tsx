
import React from "react";
import { useTheme } from "@/components/ThemeProvider";

const ScrollIndicator: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#about" className="block group">
        <div className={`w-10 h-10 border-2 ${theme === "light" 
          ? "border-devops-accent1 shadow-md" 
          : "border-devops-highlight"
        } rounded-full flex items-center justify-center transition-all duration-300 
          group-hover:border-opacity-100 group-hover:animate-glow group-hover:scale-110`}>
          <div className={`w-1 h-3 ${theme === "light" 
            ? "bg-devops-accent1" 
            : "bg-devops-highlight"
          } rounded-full transition-colors duration-300`}></div>
        </div>
      </a>
    </div>
  );
};

export default ScrollIndicator;
