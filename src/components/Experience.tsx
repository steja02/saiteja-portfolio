
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

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
  return (
    <div className="mb-12 relative">
      {/* Timeline element */}
      <div className="absolute top-0 -left-4 md:-left-6 h-full w-px bg-gray-700"></div>
      <div className={`absolute top-0 -left-4 md:-left-6 h-4 w-4 rounded-full border-2 ${isActive ? 'bg-devops-highlight border-devops-highlight animate-glow' : 'bg-gray-900 border-gray-600'} -translate-x-1/2`}></div>
      
      <motion.div 
        className="ml-6 md:ml-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <span className="block text-sm text-devops-highlight font-medium mb-1">{period}</span>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">{title}</h3>
        <h4 className="text-lg text-gray-300 mb-4">{company}</h4>
        <div className="bg-devops-darker/40 backdrop-blur-sm p-4 rounded-lg border border-gray-800 hover:border-devops-highlight/30 transition-all duration-300">
          <ul className="list-disc list-inside text-gray-400 space-y-2">
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
    <section id="experience" className="py-20 bg-gradient-to-b from-devops-dark to-devops-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="inline-block relative">
            <Briefcase className="inline-block mr-2 text-devops-highlight" size={32} />
            <span>Professional Experience</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-devops-highlight to-transparent"></span>
          </span>
        </h2>

        <div className="max-w-3xl mx-auto mt-12 pl-4 md:pl-6 relative">
          {/* Main timeline */}
          <div className="absolute top-0 left-0 h-full w-px bg-gray-800"></div>
          
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
