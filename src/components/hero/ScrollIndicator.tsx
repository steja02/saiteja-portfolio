
import React from "react";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 animate-bounce">
      <a href="#about" className="block group">
        <div className="w-10 h-10 border-2 border-devops-highlight rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-opacity-100 group-hover:animate-glow">
          <div className="w-1 h-3 bg-devops-highlight rounded-full"></div>
        </div>
      </a>
    </div>
  );
};

export default ScrollIndicator;
