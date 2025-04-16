
import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const useParticleAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class ParticleClass implements Particle {
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
        // Adjust particle color based on theme
        this.color = theme === "light" ? "#6e59a5" : "#00e5ff";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw(ctx: CanvasRenderingContext2D) {
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
        particlesArray.push(new ParticleClass());
      }
    };

    createParticles();

    function connectParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 1 - distance / 100;
            // Adjust line color based on theme
            const lineColor = theme === "light" 
              ? `rgba(110, 89, 165, ${opacity * 0.2})` 
              : `rgba(0, 229, 255, ${opacity * 0.2})`;
              
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      connectParticles();
      
      requestAnimationFrame(animate);
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
  }, [theme]); // Add theme as a dependency to recreate particles when theme changes

  return canvasRef;
};

export default useParticleAnimation;
