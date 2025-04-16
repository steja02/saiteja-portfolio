
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      
      setScroll(position > 50);
      setScrollProgress(totalHeight ? (position / totalHeight) * 100 : 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scroll ? "bg-white/90 dark:bg-devops-darker/90 shadow-lg backdrop-blur-sm" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-devops-highlight font-bold text-xl hover:text-opacity-80 transition-all cursor-pointer" onClick={scrollToTop}>
            BST
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {["about", "skills", "experience", "projects", "contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)} 
                className="text-gray-700 dark:text-gray-300 hover:text-devops-highlight dark:hover:text-devops-highlight transition-colors capitalize"
              >
                {item}
              </button>
            ))}
            <ThemeToggle />
          </nav>
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              className="text-devops-highlight hover:bg-devops-accent1/10"
              onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
            >
              Menu
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div id="mobile-menu" className="md:hidden hidden bg-white/95 dark:bg-devops-darker/95 py-4 backdrop-blur-sm">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {["about", "skills", "experience", "projects", "contact"].map((item) => (
              <button 
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }} 
                className="text-gray-700 dark:text-gray-300 hover:text-devops-highlight dark:hover:text-devops-highlight transition-colors py-2 capitalize text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        
        <div 
          className="h-1 bg-devops-highlight" 
          style={{ width: `${scrollProgress}%`, transition: "width 0.2s ease-out" }}
        ></div>
      </header>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 rounded-full bg-devops-accent1 p-3 shadow-lg transition-all duration-300 hover:bg-devops-highlight ${scroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

export default Navbar;
