
import { useEffect, useRef } from "react";
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = "#00e5ff";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const particlesArray: Particle[] = [];

    const createParticles = () => {
      const particleCount = window.innerWidth < 768 ? 30 : 80;
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
      }
    };

    createParticles();

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      connectParticles();
      
      requestAnimationFrame(animate);
    }

    function connectParticles() {
      if (!ctx) return;
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 1 - distance / 100;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray.length = 0;
      createParticles();
    };

    window.addEventListener("resize", handleResize);
    
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-devops-dark/70 to-devops-darker z-10"></div>
      
      <div className="container mx-auto relative z-20 text-center flex flex-col items-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-devops-highlight">
          Badagala Sai Teja
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 max-w-3xl">
          DevOps Engineer passionate about building resilient infrastructure & automating the cloud.
        </h2>
        
        <div className="bg-devops-darker/40 backdrop-blur-sm border border-devops-highlight/30 rounded-lg px-6 py-4 mb-8">
          <p className="text-gray-400 font-light tracking-wide">
            AWS | Kubernetes | Terraform | Automation | CI/CD
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            className="group relative flex items-center gap-2 border-devops-highlight/50 hover:bg-devops-highlight/20 hover:border-devops-highlight/90 transition-colors"
          >
            <FileText size={18} />
            <span>View Resume</span>
            <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="absolute inset-0 rounded-md border border-devops-highlight animate-pulse-light"></span>
            </span>
          </Button>
          
          <a href="https://github.com/steja2805" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              className="group flex items-center gap-2 border-gray-700 hover:bg-gray-800/50 hover:border-gray-600 transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </Button>
          </a>
          
          <a href="https://www.linkedin.com/in/steja8494" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              className="group flex items-center gap-2 border-gray-700 hover:bg-gray-800/50 hover:border-gray-600 transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </Button>
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 border-2 border-devops-highlight rounded-full flex items-center justify-center">
            <div className="w-1 h-3 bg-devops-highlight rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
