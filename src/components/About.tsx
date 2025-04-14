
import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-devops-darker to-devops-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="inline-block relative">
            <User className="inline-block mr-2 text-devops-highlight" size={32} />
            <span>About Me</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-devops-highlight to-transparent"></span>
          </span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-devops-highlight/30">
                {/* Replace with your image or avatar */}
                <div className="w-full h-full bg-gradient-to-br from-devops-accent1 to-devops-accent2 flex items-center justify-center text-4xl font-bold">
                  BST
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 rounded-lg rotate-12 bg-devops-dark border border-devops-highlight/50 flex items-center justify-center p-3">
                <span className="text-sm md:text-base text-center text-devops-highlight font-semibold">DevOps Engineer</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-devops-darker/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-devops-highlight/30 transition-all duration-500">
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a DevOps Engineer with real-world experience in infrastructure automation, cloud orchestration, and CI/CD practices. I focus on building scalable and reliable systems while automating workflows to save time and reduce error.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I enjoy tackling operational challenges and enabling seamless software delivery. My approach combines technical expertise with a collaborative mindset to ensure infrastructure that supports both development agility and production stability.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-devops-darker p-4 rounded-lg border border-gray-800">
                  <h3 className="font-medium text-devops-highlight mb-1">Current Focus</h3>
                  <p className="text-sm text-gray-400">Cloud-native architectures & IaC best practices</p>
                </div>
                <div className="bg-devops-darker p-4 rounded-lg border border-gray-800">
                  <h3 className="font-medium text-devops-highlight mb-1">Location</h3>
                  <p className="text-sm text-gray-400">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
