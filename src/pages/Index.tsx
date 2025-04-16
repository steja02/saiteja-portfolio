
import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useTheme } from "@/components/ThemeProvider";

// Lazy load components for better performance
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Simple loading component for lazy-loaded sections
const SectionLoading = () => (
  <div className="h-96 flex items-center justify-center">
    <div className="animate-pulse text-devops-accent1 dark:text-devops-highlight">
      Loading section...
    </div>
  </div>
);

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-devops-darker text-gray-800 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<SectionLoading />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
