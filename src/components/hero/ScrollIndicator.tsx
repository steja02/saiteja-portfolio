
import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { useIsMobile } from "@/hooks/use-mobile";

const ScrollIndicator: React.FC = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  
  return (
    <div className={`absolute ${isMobile ? 'bottom-[-70px]' : 'bottom-[-120px]'} left-1/2 -translate-x-1/2 animate-bounce`}>
      <a 
        href="#about" 
        className="block group"
        role="button"
        aria-label="Scroll to about section"
      >
        <div className={`w-8 sm:w-10 h-8 sm:h-10 border-2 ${theme === "light" 
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
