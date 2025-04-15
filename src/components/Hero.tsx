
import React from "react";
import useParticleAnimation from "@/hooks/useParticleAnimation";
import HeroHeader from "@/components/hero/HeroHeader";
import HeroButtons from "@/components/hero/HeroButtons";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import WaveDivider from "@/components/hero/WaveDivider";

const Hero: React.FC = () => {
  const canvasRef = useParticleAnimation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-devops-dark/70 to-devops-darker z-10"></div>
      
      <div className="container mx-auto relative z-20 text-center flex flex-col items-center animate-fade-in">
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
