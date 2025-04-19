
import React from "react";
import useParticleAnimation from "@/hooks/useParticleAnimation";
import HeroHeader from "@/components/hero/HeroHeader";
import HeroButtons from "@/components/hero/HeroButtons";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import WaveDivider from "@/components/hero/WaveDivider";
import { useTheme } from "@/components/ThemeProvider";

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useParticleAnimation();

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-16 md:py-20 px-4">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full"></canvas>
      <div className={`absolute inset-0 ${
        theme === "light" 
          ? "bg-gradient-to-b from-gray-200/70 to-gray-50" 
          : "bg-gradient-to-b from-devops-dark/70 to-devops-darker"
        } z-10 transition-colors duration-500`}></div>
      
      <div className="container mx-auto relative z-20 text-center flex flex-col items-center animate-fade-in max-w-5xl px-4">
        <HeroHeader 
          name="Badagala Sai Teja" 
          title="DevOps Engineer passionate about building resilient infrastructure & automating the cloud."
          skills="AWS | Kubernetes | Terraform | Automation | CI/CD"
        />
        
        <HeroButtons />
        
        <ScrollIndicator />
      </div>

      <WaveDivider />
    </section>
  );
};

export default Hero;
