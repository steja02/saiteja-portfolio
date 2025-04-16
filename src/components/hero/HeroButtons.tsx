
import React from "react";
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const HeroButtons: React.FC = () => {
  const { theme } = useTheme();
  
  const buttonClasses = theme === "light" 
    ? "border-devops-accent1/50 hover:bg-devops-accent1/20 hover:border-devops-accent1/90 active:scale-95 transition-transform duration-200"
    : "border-devops-highlight/50 hover:bg-devops-highlight/20 hover:border-devops-highlight/90 active:scale-95 transition-transform duration-200";
    
  const iconColor = theme === "light" ? "#6e59a5" : "#00e5ff";
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-12 w-full max-w-3xl px-4">
      <div className="w-full">
        <a 
          href="https://drive.google.com/file/d/1DIN9v47hKU7VqeUXjnG0N8YDQk4jK2_6/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full"
          aria-label="View Resume"
        >
          <Button 
            variant="outline" 
            className={`w-full ${buttonClasses} transition-colors`}
          >
            <FileText size={18} className="mr-2" color={iconColor} />
            <span className={theme === "light" ? "text-gray-800" : "text-white"}>View Resume</span>
          </Button>
        </a>
      </div>
      
      <div className="w-full">
        <a 
          href="https://github.com/steja2805" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full"
          aria-label="GitHub Profile"
        >
          <Button 
            variant="outline" 
            className={`w-full ${buttonClasses} transition-colors`}
          >
            <Github size={18} className="mr-2" color={iconColor} />
            <span className={theme === "light" ? "text-gray-800" : "text-white"}>GitHub</span>
          </Button>
        </a>
      </div>
      
      <div className="w-full">
        <a 
          href="https://www.linkedin.com/in/steja8494" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full"
          aria-label="LinkedIn Profile"
        >
          <Button 
            variant="outline" 
            className={`w-full ${buttonClasses} transition-colors`}
          >
            <Linkedin size={18} className="mr-2" color={iconColor} />
            <span className={theme === "light" ? "text-gray-800" : "text-white"}>LinkedIn</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroButtons;
