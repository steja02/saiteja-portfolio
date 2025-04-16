
import { ArrowUp } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`${
      theme === "light" 
        ? "bg-white border-gray-200" 
        : "bg-devops-darker border-gray-800"
    } py-10 border-t transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className={`${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            } mb-4 md:mb-0 transition-colors duration-300`}>
              © {new Date().getFullYear()} Badagala Sai Teja | DevOps Engineer
            </p>
          </div>
          
          <div>
            <button
              onClick={scrollToTop}
              className={`${
                theme === "light" 
                  ? "text-gray-600 hover:text-devops-accent1" 
                  : "text-gray-400 hover:text-devops-highlight"
              } flex items-center gap-2 transition-colors duration-300 button-hover`}
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
