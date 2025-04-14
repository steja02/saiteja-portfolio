
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactInfo = ({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-devops-darker/60 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-devops-highlight/30 transition-all hover:bg-devops-darker/80">
      <div className="w-10 h-10 rounded-full bg-devops-highlight/10 flex items-center justify-center text-devops-highlight">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-sm text-gray-400">{title}</h3>
        {href ? (
          <a href={href} className="text-gray-200 hover:text-devops-highlight transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-gray-200">{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-devops-darker to-devops-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="inline-block relative">
            <Mail className="inline-block mr-2 text-devops-highlight" size={32} />
            <span>Get In Touch</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-devops-highlight to-transparent"></span>
          </span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-devops-darker/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-6">Send Me A Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black/30 border-gray-700 focus:border-devops-highlight"
                      />
                    </div>
                    
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/30 border-gray-700 focus:border-devops-highlight"
                      />
                    </div>
                    
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[150px] bg-black/30 border-gray-700 focus:border-devops-highlight"
                      />
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-devops-highlight hover:bg-devops-highlight/80 text-black font-medium"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin inline-block h-4 w-4 rounded-full border-2 border-gray-900 border-t-transparent"></span>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send size={16} />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-4">
                <div className="bg-devops-darker/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-800 mb-6">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <p className="text-gray-400 mb-8">Feel free to reach out for opportunities, collaborations, or just to say hello!</p>
                  
                  <div className="space-y-4">
                    <ContactInfo
                      icon={Mail}
                      title="Email"
                      value="steja8494@gmail.com"
                      href="mailto:steja8494@gmail.com"
                    />
                    
                    <ContactInfo
                      icon={Phone}
                      title="Phone"
                      value="+91 8985779436"
                      href="tel:+918985779436"
                    />
                    
                    <ContactInfo
                      icon={MapPin}
                      title="Location"
                      value="Hyderabad, India"
                    />
                  </div>
                </div>
                
                <div className="bg-devops-darker/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/steja2805" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-devops-highlight/20 flex items-center justify-center text-gray-300 hover:text-devops-highlight transition-colors border border-gray-700 hover:border-devops-highlight"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/steja8494" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-devops-highlight/20 flex items-center justify-center text-gray-300 hover:text-devops-highlight transition-colors border border-gray-700 hover:border-devops-highlight"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
