
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
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 w-full max-w-3xl">
          <a href="https://drive.google.com/file/d/1DIN9v47hKU7VqeUXjnG0N8YDQk4jK2_6/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block w-full">
            <div className="w-full">
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
                className="w-full border-gray-700 hover:bg-gray-800/50 hover:border-gray-600 transition-colors"
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
                className="w-full border-gray-700 hover:bg-gray-800/50 hover:border-gray-600 transition-colors"
              >
                <Linkedin size={18} className="mr-2" />
                <span>LinkedIn</span>
              </Button>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="block group">
            <div className="w-10 h-10 border-2 border-devops-highlight rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-opacity-100 group-hover:animate-glow">
              <div className="w-1 h-3 bg-devops-highlight rounded-full"></div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-devops-darker opacity-80"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-devops-darker opacity-60"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-devops-darker opacity-40"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;