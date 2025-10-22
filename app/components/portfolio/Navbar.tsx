"use client";

import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { NavItem } from "./NavItem";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeSection, 
  scrollToSection,
  isMobileMenuOpen,
  setMobileMenuOpen 
}) => {
  const [scrolled, setScrolled] = useState(false);
  
  // Navigation links
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Tech Stacks", id: "tech-stacks" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Section-based color influences
  const sectionColors = {
    home: "from-black/30 to-[#2e8ce4]/40",
    about: "from-[#2e8ce4]/30 to-black/40",
    skills: "from-[#1764ad]/30 to-[#2e8ce4]/40",
    "tech-stacks": "from-[#2e8ce4]/30 to-[#1764ad]/40",
    projects: "from-black/30 to-[#2e8ce4]/40",
    contact: "from-[#2e8ce4]/30 to-black/40",
  };

  // Enhanced glass overlay colors
  const glassOverlay = {
    home: "bg-black/5",
    about: "bg-[#2e8ce4]/5",
    skills: "bg-[#1764ad]/10",
    "tech-stacks": "bg-[#2e8ce4]/5",
    projects: "bg-black/5",
    contact: "bg-[#2e8ce4]/5",
  };

  // Handle mobile navigation click
  const handleMobileNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -70;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
        
        scrollToSection(sectionId);
      } else {
        scrollToSection(sectionId);
      }
    }, 400);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Get current section color or default
  const currentSectionColor = scrolled ? 
    sectionColors[activeSection as keyof typeof sectionColors] || "from-black/20 to-red-900/30" : 
    "from-transparent to-transparent";
    
  const currentGlassEffect = scrolled ? 
    glassOverlay[activeSection as keyof typeof glassOverlay] || "bg-black/5" : 
    "bg-transparent";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]">
      <div
        className={`w-full mx-auto flex items-center justify-between p-3 lg:px-8 transition-all duration-700 
          bg-gradient-to-r ${currentSectionColor} backdrop-blur-sm ${currentGlassEffect}
          ${scrolled ? "shadow-lg border-b border-red-500/10" : ""}
        `}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">AK</span>
          </div>
          <span className="text-2xl font-extrabold text-white tracking-tight">
            <span className="text-red-400">Ansh</span>
            <span className="text-gray-200">Kumar</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {links.map((link) => (
            <NavItem 
              key={link.id}
              id={link.id}
              label={link.name}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
          ))}
          
          {/* Social Links */}
          <div className="flex items-center ml-4 space-x-2">
            <a
              href="https://github.com/anshkumar3931"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-red-400 transition-colors"
              aria-label="Visit my GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ansh-kumar-a08461253"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-red-400 transition-colors"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:anshkumar3931@gmail.com"
              className="p-2 text-gray-300 hover:text-red-400 transition-colors"
              aria-label="Send me an email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center text-white p-2 hover:bg-red-500/10 rounded-md transition-all duration-300"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Full screen backdrop blur overlay */}
              <motion.div 
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-[-1] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Mobile menu drawer */}
              <motion.div 
                className="absolute top-full left-0 right-0 md:hidden bg-gradient-to-b from-black to-red-900 border-t border-red-500/20 shadow-2xl rounded-b-2xl overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="py-3 px-2">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <button
                        onClick={() => handleMobileNavClick(link.id)}
                        className={`w-full px-4 py-3 text-left text-sm font-medium rounded-lg transition-all duration-300 flex items-center 
                          ${activeSection === link.id 
                            ? "bg-red-600 text-white"
                            : "text-white hover:bg-red-700/40"
                          }`}
                      >
                        {link.name}
                      </button>
                    </motion.div>
                  ))}
                  
                  {/* Social Links - Mobile */}
                  <div className="mt-4 px-2 space-y-2">
                    <div className="flex justify-center space-x-4 py-2">
                      <a
                        href="https://github.com/anshkumar3931"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-300 hover:text-red-400 transition-colors"
                        aria-label="Visit my GitHub profile"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/ansh-kumar-a08461253"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-300 hover:text-red-400 transition-colors"
                        aria-label="Visit my LinkedIn profile"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="mailto:anshkumar3931@gmail.com"
                        className="p-2 text-gray-300 hover:text-red-400 transition-colors"
                        aria-label="Send me an email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
