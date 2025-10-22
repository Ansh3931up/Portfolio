"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

interface ContactSectionProps {
  id: string;
  forwardedRef: React.RefObject<HTMLDivElement | null>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ id, forwardedRef }) => {
  return (
    <section
      id={id}
      ref={forwardedRef}
      className="h-auto min-h-screen bg-black pt-24 pb-12 flex items-center relative overflow-hidden"
    >
     
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-[#eb5e28] mx-auto"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          className="w-full space-x-reverse h-auto"
        >
          <motion.path
            initial={{
              d: "M321.39,80.44c58-15.79,114.16-35.13,172-50.86,82.39-20.72,168.19-22.73,250.45-3.39C823.78,40,906.67,90,985.66,110.83c70.05,20.48,146.53,30.09,214.34,8V0H0V35.35A600.21,600.21,0,0,0,321.39,80.44Z",
            }}
            animate={{
              d: [
                "M321.39,75.44c58-20.79,114.16-32.13,172-45.86,82.39-22.72,168.19-22.73,250.45-4.39C823.78,35,906.67,85,985.66,105.83c70.05,18.48,146.53,28.09,214.34,6V0H0V32.35A600.21,600.21,0,0,0,321.39,75.44Z",
                "M321.39,80.44c58-15.79,114.16-35.13,172-50.86,82.39-20.72,168.19-22.73,250.45-3.39C823.78,40,906.67,90,985.66,110.83c70.05,20.48,146.53,30.09,214.34,8V0H0V35.35A600.21,600.21,0,0,0,321.39,80.44Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            }}
            className="fill-current text-red-900/40"
          />

          <motion.path
            initial={{
              d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
            }}
            animate={{
              d: [
                "M321.39,50.44c58-15.79,114.16-25.13,172-35.86,82.39-18.72,168.19-18.73,250.45-.39C823.78,20,906.67,65,985.66,85.83c70.05,16.48,146.53,24.09,214.34,5V0H0V25.35A600.21,600.21,0,0,0,321.39,50.44Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              duration: 6,
              ease: "easeInOut",
            }}
            className="fill-current bg-black border-0 border-black text-black"
          />
        </svg>
      </div>
    </section>
  );
};

/**
 * Contact form component
 */
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.log(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl border border-gray-600/20">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">Send me a message</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              placeholder="Tell me about your project or just say hello!"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full px-6 py-3 bg-[#eb5e28] text-white font-medium rounded-md transition-colors flex items-center justify-center gap-2 ${
              status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#ca4713]'
            }`}
          >
            {status === 'loading' ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
          {status === 'success' && (
            <p className="text-green-400 text-sm mt-2 text-center">Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm mt-2 text-center">Failed to send message. Please try again or contact me directly.</p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

/**
 * Contact information component
 */
const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col justify-between space-y-8"
    >
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">Contact Information</h3>
        <div className="space-y-6">
          <ContactInfoItem
            icon={<Mail className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />}
            title="Email"
            content="anshkumar3931@gmail.com"
            link="mailto:anshkumar3931@gmail.com"
          />
          <ContactInfoItem
            icon={<Phone className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />}
            title="Phone"
            content="+91 7206244949"
            link="tel:+917206244949"
          />
          <ContactInfoItem
            icon={<MapPin className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />}
            title="Location"
            content="India"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-red-500/20">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Let's Connect</h3>
        <p className="text-gray-300 mb-6">
          Follow me on social media to stay updated with my latest projects and thoughts on technology.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/anshkumar3931"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-300"
            aria-label="Visit my GitHub profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/ansh-kumar-a08461253"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-300"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:anshkumar3931@gmail.com"
            className="p-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-300"
            aria-label="Send me an email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

/**
 * Contact information item component
 */
const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content, link }) => {
  const contentElement = (
    <div className="flex items-start">
      {icon}
      <div>
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-gray-300 mt-1">{content}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="block hover:bg-white/5 p-3 rounded-lg transition-colors">
      {contentElement}
    </a>
  ) : (
    contentElement
  );
};
