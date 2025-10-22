"use client";

import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { BackgroundShapes } from "../ui/background-shapes";
import { ExternalLink, Github, Code, Database, Globe, Smartphone, Loader2 } from "lucide-react";
import { fetchProjectsWithImages, ProjectWithImage } from "../../utils/github-api";

interface ProjectsSectionProps {
  id: string;
  forwardedRef: React.RefObject<HTMLDivElement | null>;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = memo(({ id, forwardedRef }) => {
  const [projects, setProjects] = useState<ProjectWithImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const fetchedProjects = await fetchProjectsWithImages();
        setProjects(fetchedProjects);
      } catch (err) {
        setError('Failed to load projects');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack":
        return <Code className="w-4 h-4" />;
      case "Frontend":
        return <Globe className="w-4 h-4" />;
      case "Backend":
        return <Database className="w-4 h-4" />;
      case "DSA":
        return <Code className="w-4 h-4" />;
      case "Mobile":
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Planning":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section
      id={id}
      ref={forwardedRef}
      className="h-auto min-h-screen bg-gradient-to-b from-black to-[#252422] pt-24 pb-12 flex items-center relative overflow-hidden"
    >
      <BackgroundShapes />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-[#eb5e28] mx-auto"></div>
          <p className="text-gray-300/80 text-sm md:text-base max-w-xl mx-auto mt-4">
            A showcase of my work and projects that demonstrate my skills and passion for development
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="h-8 w-8 animate-spin text-white" />
              <p className="text-gray-400">Loading projects from GitHub...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-400 mb-4">{error}</p>
            <p className="text-gray-400">Please check your internet connection and try again.</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-8 text-center">Featured Projects</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} featured={true} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-8 text-center">Other Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} featured={false} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* No projects message */}
            {projects.length === 0 && !loading && !error && (
              <div className="text-center py-20">
                <p className="text-gray-400">No projects found. Check back later!</p>
              </div>
            )}
          </>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Interested in collaborating?</h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always open to discussing new opportunities and interesting projects. 
              Let&apos;s create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/anshkumar3931"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>
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
            className="fill-current text-gray-800/40"
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
            className="fill-current text-black"
          />
        </svg>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

// Project Card Component
interface ProjectCardProps {
  project: ProjectWithImage;
  index: number;
  featured: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, featured }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack":
        return <Code className="w-4 h-4" />;
      case "Frontend":
        return <Globe className="w-4 h-4" />;
      case "Backend":
        return <Database className="w-4 h-4" />;
      case "DSA":
        return <Code className="w-4 h-4" />;
      case "Mobile":
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Planning":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/20 ${
        featured ? 'lg:col-span-1' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="w-full h-full project-bg"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
            {getCategoryIcon(project.category)}
            {project.category}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-700/20 text-gray-300 text-xs rounded-full border border-gray-600/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};