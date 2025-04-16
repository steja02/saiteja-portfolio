
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 dark:bg-devops-darker py-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0 transition-colors duration-300">
              © {new Date().getFullYear()} Badagala Sai Teja | DevOps Engineer
            </p>
          </div>
          
          <div>
            <button
              onClick={scrollToTop}
              className="text-gray-600 dark:text-gray-400 hover:text-devops-accent1 dark:hover:text-devops-highlight flex items-center gap-2 transition-colors duration-300 button-hover"
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
