
import React from "react";
import { useTheme } from "@/components/ThemeProvider";

interface HeroHeaderProps {
  name: string;
  title: string;
  skills: string;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ name, title, skills }) => {
  const { theme } = useTheme();
  
  return (
    <>
      <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent ${
        theme === "light" 
          ? "bg-gradient-to-r from-devops-accent1 to-devops-accent2" 
          : "bg-gradient-to-r from-white to-devops-highlight"
      } transition-colors duration-500`}>
        {name}
      </h1>
      
      <h2 className={`text-xl md:text-2xl lg:text-3xl mb-6 max-w-3xl ${
        theme === "light" 
          ? "text-gray-700" 
          : "text-gray-300"
      } transition-colors duration-500`}>
        {title}
      </h2>
      
      <div className={`${
        theme === "light" 
          ? "bg-white/60 backdrop-blur-sm border border-gray-200 text-gray-700" 
          : "bg-devops-darker/40 backdrop-blur-sm border border-devops-highlight/30 text-gray-400"
      } rounded-lg px-6 py-4 mb-8 transition-all duration-500`}>
        <p className="font-light tracking-wide">
          {skills}
        </p>
      </div>
    </>
  );
};

export default HeroHeader;
