
import React from "react";

interface HeroHeaderProps {
  name: string;
  title: string;
  skills: string;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ name, title, skills }) => {
  return (
    <>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-devops-highlight">
        {name}
      </h1>
      
      <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 max-w-3xl">
        {title}
      </h2>
      
      <div className="bg-devops-darker/40 backdrop-blur-sm border border-devops-highlight/30 rounded-lg px-6 py-4 mb-8">
        <p className="text-gray-400 font-light tracking-wide">
          {skills}
        </p>
      </div>
    </>
  );
};

export default HeroHeader;
