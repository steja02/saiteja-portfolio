
import React from "react";
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroButtons: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 w-full max-w-3xl">
      <div className="w-full">
        <a href="https://drive.google.com/file/d/1DIN9v47hKU7VqeUXjnG0N8YDQk4jK2_6/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button 
            variant="outline" 
            className="w-full border-devops-highlight/50 hover:bg-devops-highlight/20 hover:border-devops-highlight/90 transition-colors"
          >
            <FileText size={18} className="mr-2" />
            <span>View Resume</span>
          </Button>
        </a>
      </div>
      
      <div className="w-full">
        <a href="https://github.com/steja2805" target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button 
            variant="outline" 
            className="w-full border-devops-highlight/50 hover:bg-devops-highlight/20 hover:border-devops-highlight/90 transition-colors"
          >
            <Github size={18} className="mr-2" />
            <span>GitHub</span>
          </Button>
        </a>
      </div>
      
      <div className="w-full">
        <a href="https://www.linkedin.com/in/steja8494" target="_blank" rel="noopener noreferrer" className="block w-full">
          <Button 
            variant="outline" 
            className="w-full border-devops-highlight/50 hover:bg-devops-highlight/20 hover:border-devops-highlight/90 transition-colors"
          >
            <Linkedin size={18} className="mr-2" />
            <span>LinkedIn</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroButtons;
