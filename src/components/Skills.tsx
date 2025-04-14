
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps Tools",
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform"]
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS"]
    },
    {
      title: "Scripting & Languages",
      skills: ["Bash", "C", "C++"]
    },
    {
      title: "Operating Systems",
      skills: ["Linux"]
    },
    {
      title: "Other",
      skills: ["CI/CD pipelines", "Infrastructure as Code", "Monitoring"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-devops-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="inline-block relative">
            <Heart className="inline-block mr-2 text-devops-highlight" size={32} />
            <span>Technical Skills</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-devops-highlight to-transparent"></span>
          </span>
        </h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-devops-darker/60 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-devops-highlight/40 transition-all group"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-devops-highlight">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="px-3 py-2 bg-black/30 rounded-md border border-gray-800 text-sm text-gray-300 cursor-default hover:border-devops-highlight hover:text-white transition-all hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <div className="px-6 py-3 bg-devops-darker/60 backdrop-blur-sm rounded-lg border border-gray-800 inline-block">
              <p className="text-gray-400 text-sm">
                <span className="text-devops-highlight font-medium">Always Learning:</span> Continuously expanding my knowledge in cloud technologies and infrastructure automation
              </p>
            </div>
            <div className="absolute -right-2 -top-2 w-4 h-4 bg-devops-highlight rounded-full animate-pulse-light"></div>
            <div className="absolute -left-2 -bottom-2 w-4 h-4 bg-devops-accent1 rounded-full animate-pulse-light" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
