
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  isActive
}: {
  title: string;
  company: string;
  period: string;
  description: string[];
  isActive: boolean;
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="mb-12 relative">
      {/* Timeline element */}
      <div className={`absolute top-0 -left-4 md:-left-6 h-full w-px ${
        theme === "light" ? "bg-gray-400" : "bg-gray-700"
      } transition-colors duration-300`}></div>
      <div className={`absolute top-0 -left-4 md:-left-6 h-4 w-4 rounded-full border-2 ${
        isActive 
          ? theme === "light" 
            ? "bg-devops-accent1 border-devops-accent1 animate-glow" 
            : "bg-devops-highlight border-devops-highlight animate-glow" 
          : theme === "light"
            ? "bg-white border-gray-400"
            : "bg-gray-900 border-gray-600"
      } -translate-x-1/2 transition-colors duration-300`}></div>
      
      <motion.div 
        className="ml-6 md:ml-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <span className={`block text-sm ${
          theme === "light" ? "text-devops-accent1" : "text-devops-highlight"
        } font-medium mb-1 transition-colors duration-300`}>{period}</span>
        <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${
          theme === "light" ? "text-gray-800" : "text-white"
        } transition-colors duration-300`}>{title}</h3>
        <h4 className={`text-lg ${
          theme === "light" ? "text-gray-600" : "text-gray-300"
        } mb-4 transition-colors duration-300`}>{company}</h4>
        <div className={`${
          theme === "light"
            ? "bg-white shadow-md border-gray-200"
            : "bg-devops-darker/40 backdrop-blur-sm border-gray-800"
        } p-4 rounded-lg border hover:border-${
          theme === "light" ? "devops-accent1/50" : "devops-highlight/30"
        } transition-all duration-300`}>
          <ul className={`list-disc list-inside ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          } space-y-2 transition-colors duration-300`}>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const { theme } = useTheme();
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Quintype Technologies",
      period: "June 2024 - Present",
      description: [
        "Upgraded and managed EKS clusters with automation scripts.",
        "Acted as Terraform code owner, ensuring synchronization with live AWS infra.",
        "Conducted daily infrastructure monitoring and supported production deployments.",
        "Handled technical support tickets and collaborated with teams during go-live events."
      ],
      isActive: true
    },
    {
      title: "DevOps Intern",
      company: "Quintype Technologies",
      period: "Feb 2024 - June 2024",
      description: [
        "Built automation for detecting proxy usage by clients.",
        "Managed staging environments and user access permissions.",
        "Participated in routine monitoring, troubleshooting, and resource scaling."
      ],
      isActive: false
    }
  ];

  return (
    <section id="experience" className={`py-20 ${
      theme === "light" 
        ? "bg-gradient-to-b from-white to-gray-100" 
        : "bg-gradient-to-b from-devops-dark to-devops-darker"
    } transition-colors duration-500`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="inline-block relative">
            <Briefcase className={`inline-block mr-2 ${
              theme === "light" ? "text-devops-accent1" : "text-devops-highlight"
            } transition-colors duration-300`} size={32} />
            <span>Professional Experience</span>
            <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
              theme === "light" 
                ? "bg-gradient-to-r from-devops-accent1 to-transparent" 
                : "bg-gradient-to-r from-devops-highlight to-transparent"
            } transition-colors duration-300`}></span>
          </span>
        </h2>

        <div className="max-w-3xl mx-auto mt-12 pl-4 md:pl-6 relative">
          {/* Main timeline */}
          <div className={`absolute top-0 left-0 h-full w-px ${
            theme === "light" ? "bg-gray-400" : "bg-gray-800"
          } transition-colors duration-300`}></div>
          
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              isActive={exp.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
