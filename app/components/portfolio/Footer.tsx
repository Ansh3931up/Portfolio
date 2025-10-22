"use client";

import React, { useState } from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useAdmin } from "../../contexts/AdminContext";
import { AdminAuthModal } from "../admin/AdminAuthModal";
import { AdminDashboard } from "../admin/AdminDashboard";

/**
 * Footer component for the portfolio
 */
export const Footer: React.FC = () => {
  const { logoClickCount, incrementLogoClicks, resetLogoClicks, isAdmin, loginAsAdmin, logoutAdmin } = useAdmin();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    incrementLogoClicks();
    
    if (logoClickCount >= 2) { // 3 clicks total (0, 1, 2)
      setShowAuthModal(true);
      resetLogoClicks();
    }
  };

  const handleAdminLogin = (password: string) => {
    const success = loginAsAdmin(password);
    if (success) {
      setShowAdminDashboard(true);
      setShowAuthModal(false);
    }
    return success;
  };

  return (
    <footer className="relative z-10 bg-black backdrop-blur-sm border-t border-red-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div 
                className="h-10 w-10 rounded-full bg-gradient-to-r from-[#eb5e28] to-[#ca4713] flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={handleLogoClick}
                title={`Logo clicks: ${logoClickCount}/3`}
              >
                <span className="text-white font-bold text-lg">AK</span>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                <span className="text-[#eb5e28]">Ansh</span>
                <span className="text-gray-200">Kumar</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Full Stack Developer & DSA Expert passionate about creating innovative solutions 
              and solving complex problems through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block text-gray-400 hover:text-red-400 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="block text-gray-400 hover:text-red-400 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="block text-gray-400 hover:text-red-400 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block text-gray-400 hover:text-red-400 transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Get In Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:anshkumar3931@gmail.com"
                className="flex items-center text-gray-400 hover:text-red-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                anshkumar3931@gmail.com
              </a>
              <a 
                href="tel:+917206244949"
                className="flex items-center text-gray-400 hover:text-red-400 transition-colors text-sm"
              >
                <span className="w-4 h-4 mr-2 flex items-center justify-center">📞</span>
                +91 7206244949
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/anshkumar3931"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
                aria-label="Visit my GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ansh-kumar-a08461253"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
                aria-label="Visit my LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:anshkumar3931@gmail.com"
                className="p-2 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
                aria-label="Send me an email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Ansh Kumar. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and lots of coffee.</span>
            </div>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 rounded-lg transition-all duration-300 border border-red-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Admin Modals */}
      <AdminAuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleAdminLogin}
      />
      
      <AdminDashboard
        isOpen={showAdminDashboard}
        onClose={() => setShowAdminDashboard(false)}
      />
    </footer>
  );
};
