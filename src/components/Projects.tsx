
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

type Project = {
  title: string;
  description: string[];
  image: string;
  technologies: string[];
  github: string;
  live?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <motion.div 
      className={`rounded-xl overflow-hidden ${
        theme === "light"
          ? "bg-white border-gray-200 shadow-md"
          : "bg-devops-darker border-gray-800"
      } border hover:border-${
        theme === "light" ? "devops-accent1/70" : "devops-highlight/50"
      } transition-all group`}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-48 ${
        theme === "light"
          ? "bg-gradient-to-br from-devops-accent1/10 to-devops-accent2/10"
          : "bg-gradient-to-br from-devops-accent1/30 to-devops-accent2/30"
      } relative overflow-hidden transition-colors duration-300`}>
        {/* Project image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Code size={48} className={`${
            theme === "light" ? "text-devops-accent1" : "text-devops-highlight"
          } opacity-30 transition-colors duration-300`} />
        </div>
        
        {/* Overlay */}
        <div className={`absolute inset-0 ${
          theme === "light"
            ? "bg-gray-100/90"
            : "bg-devops-darker/80"
        } backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className={`rounded-full ${
                theme === "light"
                  ? "hover:bg-devops-accent1/20 border-gray-300"
                  : "hover:bg-devops-highlight/20 border-gray-700"
              } transition-colors duration-300`}>
                <Github size={18} />
                <span className="ml-2">Code</span>
              </Button>
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className={`rounded-full ${
                  theme === "light"
                    ? "hover:bg-devops-accent1/20 border-gray-300"
                    : "hover:bg-devops-highlight/20 border-gray-700"
                } transition-colors duration-300`}>
                  <ExternalLink size={18} />
                  <span className="ml-2">Demo</span>
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-semibold ${
          theme === "light" 
            ? "text-gray-800 group-hover:text-devops-accent1" 
            : "text-white group-hover:text-devops-highlight"
        } mb-2 transition-colors duration-300`}>{project.title}</h3>
        
        <div className="mb-4">
          <ul className={`list-disc list-inside ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          } space-y-1 transition-colors duration-300`}>
            {project.description.map((item, index) => (
              <li key={index} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`text-xs px-2 py-1 ${
                theme === "light" 
                  ? "bg-gray-100 border-gray-300 text-gray-700" 
                  : "bg-black/30 border-gray-800 text-gray-400"
              } rounded border transition-colors duration-300`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  const projects = [
    {
      title: "Terraform AWS WordPress Deployment",
      description: [
        "Provisioned EC2 instances and infrastructure using Terraform.",
        "Dockerized part of the stack; implemented WordPress on a cloud environment.",
        "Explored improvement areas for automation and secure credential management."
      ],
      image: "",
      technologies: ["Terraform", "AWS", "Docker", "WordPress"],
      github: "https://github.com/steja2805/Terraform_AWS_project"
    },
    {
      title: "EKS Terraform Kubernetes Project",
      description: [
        "Provisioned EKS cluster using Terraform.",
        "Deployed React-based Quiz App and Weather App using Kubernetes manifests.",
        "Projects fully containerized and orchestrated in a scalable way."
      ],
      image: "",
      technologies: ["EKS", "Terraform", "Kubernetes", "React", "Docker"],
      github: "https://github.com/steja2805/eks_terraform_k8s"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className={`py-20 ${
      theme === "light" 
        ? "bg-gray-100" 
        : "bg-devops-darker"
    } transition-colors duration-500`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="inline-block relative">
            <Code className={`inline-block mr-2 ${
              theme === "light" ? "text-devops-accent1" : "text-devops-highlight"
            } transition-colors duration-300`} size={32} />
            <span>Projects</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
              theme === "light" 
                ? "bg-gradient-to-r from-devops-accent1 to-transparent" 
                : "bg-gradient-to-r from-devops-highlight to-transparent"
            } transition-colors duration-300`}></span>
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/steja2805" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${
                theme === "light" 
                  ? "text-devops-accent1 hover:text-devops-accent1/80" 
                  : "text-devops-highlight hover:text-devops-highlight/80"
              } transition-colors`}
            >
              <Github size={18} />
              <span>View more projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
