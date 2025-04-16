
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-devops-darker/60 backdrop-blur-sm hover:border-devops-highlight/50 dark:hover:border-devops-highlight/30 transition-all hover:shadow-md dark:hover:bg-devops-darker/80"
    >
      <div className="w-10 h-10 rounded-full bg-devops-highlight/10 flex items-center justify-center text-devops-highlight">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
        {href ? (
          <a href={href} className="text-gray-800 dark:text-gray-200 hover:text-devops-highlight transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-gray-800 dark:text-gray-200">{value}</p>
        )}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Email sending functionality
      const response = await fetch("https://formsubmit.co/ajax/steja8494@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Portfolio Contact: Message from ${data.name}`
        })
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-devops-darker dark:to-devops-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            <span className="inline-block relative">
              <Mail className="inline-block mr-2 text-devops-highlight" size={32} />
              <span>Get In Touch</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-devops-highlight to-transparent"></span>
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to new opportunities and challenges.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/80 dark:bg-devops-darker/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Send Me A Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your Name"
                              className="bg-white dark:bg-black/30 border-gray-300 dark:border-gray-700 focus:border-devops-highlight"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="Your Email"
                              className="bg-white dark:bg-black/30 border-gray-300 dark:border-gray-700 focus:border-devops-highlight"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Your Message"
                              className="min-h-[150px] bg-white dark:bg-black/30 border-gray-300 dark:border-gray-700 focus:border-devops-highlight"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-devops-highlight hover:bg-devops-highlight/80 text-black font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98]"
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
                  </form>
                </Form>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-devops-darker/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-200 dark:border-gray-800 mb-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">Feel free to reach out for opportunities, collaborations, or just to say hello!</p>
                  
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
                
                <div className="bg-white/80 dark:bg-devops-darker/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Connect With Me</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/steja2805" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-devops-highlight/20 dark:bg-gray-800 dark:hover:bg-devops-highlight/20 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-devops-highlight dark:hover:text-devops-highlight transition-colors border border-gray-300 dark:border-gray-700 hover:border-devops-highlight dark:hover:border-devops-highlight"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/steja8494" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-devops-highlight/20 dark:bg-gray-800 dark:hover:bg-devops-highlight/20 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-devops-highlight dark:hover:text-devops-highlight transition-colors border border-gray-300 dark:border-gray-700 hover:border-devops-highlight dark:hover:border-devops-highlight"
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
