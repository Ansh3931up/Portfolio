"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  Upload, 
  Eye, 
  EyeOff,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Image,
  Code,
  Globe,
  Smartphone,
  Database,
  X,
  Search,
  Filter,
  SortAsc,
  MoreVertical
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'DSA' | 'Mobile';
  status: 'Completed' | 'In Progress' | 'Planning';
  featured: boolean;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export const ProjectManagement: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('updatedAt');

  // Load projects from localStorage
  useEffect(() => {
    const savedProjects = localStorage.getItem('admin_projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // Save projects to localStorage
  useEffect(() => {
    localStorage.setItem('admin_projects', JSON.stringify(projects));
  }, [projects]);

  const handleSaveProject = (project: Project) => {
    if (editingProject) {
      setProjects(prev => prev.map(p => p.id === editingProject.id ? project : p));
      setEditingProject(null);
    } else {
      setProjects(prev => [...prev, { ...project, id: Date.now().toString() }]);
      setIsAddingNew(false);
    }
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setIsAddingNew(false);
  };

  // Filter and search projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'createdAt':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'updatedAt':
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      default:
        return 0;
    }
  });

  const defaultProject: Project = {
    id: '',
    name: '',
    description: '',
    technologies: [],
    category: 'Full Stack',
    status: 'Completed',
    featured: false,
    image: '',
    githubUrl: '',
    liveUrl: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Project Management</h3>
          <p className="text-[#f0f3bd]/70 text-sm">Manage your portfolio projects</p>
        </div>
        <button
          onClick={() => {
            setIsAddingNew(true);
            setEditingProject(null);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#05668d] to-[#028090] text-white rounded-lg hover:from-[#05668d]/80 hover:to-[#028090]/80 transition-all"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#f0f3bd]/50" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white placeholder-[#f0f3bd]/50 focus:outline-none focus:border-[#2dbef7]"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white focus:outline-none focus:border-[#2dbef7]"
        >
          <option value="all">All Categories</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="DSA">DSA</option>
          <option value="Mobile">Mobile</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white focus:outline-none focus:border-[#2dbef7]"
        >
          <option value="updatedAt">Last Updated</option>
          <option value="createdAt">Date Created</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onEdit={handleEditProject}
            onDelete={handleDeleteProject}
          />
        ))}
      </div>

      {/* Empty State */}
      {sortedProjects.length === 0 && (
        <div className="text-center py-12">
          <Code className="w-16 h-16 text-[#f0f3bd]/30 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-white mb-2">No projects found</h4>
          <p className="text-[#f0f3bd]/70 mb-6">
            {searchTerm || filterCategory !== 'all' 
              ? 'Try adjusting your search or filters'
              : 'Get started by adding your first project'
            }
          </p>
          {!searchTerm && filterCategory === 'all' && (
            <button
              onClick={() => {
                setIsAddingNew(true);
                setEditingProject(null);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#05668d] to-[#028090] text-white rounded-lg hover:from-[#05668d]/80 hover:to-[#028090]/80 transition-all"
            >
              <Plus className="w-4 h-4" />
              Add Your First Project
            </button>
          )}
        </div>
      )}

      {/* Add/Edit Project Form */}
      {(isAddingNew || editingProject) && (
        <ProjectForm
          project={editingProject || defaultProject}
          onSave={handleSaveProject}
          onCancel={() => {
            setIsAddingNew(false);
            setEditingProject(null);
          }}
        />
      )}
    </div>
  );
};

// Project Card Component
interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onEdit, onDelete }) => {
  const [showActions, setShowActions] = useState(false);

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
        return "bg-[#02c39a]/20 text-[#02c39a] border-[#02c39a]/30";
      case "In Progress":
        return "bg-[#f4d35e]/20 text-[#f4d35e] border-[#f4d35e]/30";
      case "Planning":
        return "bg-[#05668d]/20 text-[#05668d] border-[#05668d]/30";
      default:
        return "bg-[#f0f3bd]/20 text-[#f0f3bd] border-[#f0f3bd]/30";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-br from-[#05668d]/10 to-[#028090]/10 backdrop-blur-sm rounded-xl overflow-hidden border border-[#05668d]/20 hover:border-[#2dbef7]/40 transition-all"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
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

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-[#f4d35e] to-[#ee964b] text-black text-xs font-medium rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Actions Menu */}
        <div className="absolute top-4 right-12">
          <button
            onClick={() => setShowActions(!showActions)}
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          
          <AnimatePresence>
            {showActions && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="absolute right-0 top-12 bg-[#01151d] border border-[#05668d]/30 rounded-lg shadow-xl z-10 min-w-[120px]"
              >
                <button
                  onClick={() => {
                    onEdit(project);
                    setShowActions(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-[#05668d]/20 transition-colors"
                >
                  <Edit className="w-3 h-3" />
                  Edit
                </button>
                <button
                  onClick={() => {
                    onDelete(project.id);
                    setShowActions(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  Delete
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          {getCategoryIcon(project.category)}
          <span className="text-sm text-[#2dbef7] font-medium">{project.category}</span>
        </div>
        
        <h4 className="text-lg font-semibold text-white mb-2">{project.name}</h4>
        <p className="text-[#f0f3bd]/70 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#05668d]/20 text-[#2dbef7] text-xs rounded-full border border-[#05668d]/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-[#f0f3bd]/10 text-[#f0f3bd]/60 text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#05668d]/20 text-[#2dbef7] rounded-lg hover:bg-[#05668d]/30 transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#028090]/20 text-[#03c0d9] rounded-lg hover:bg-[#028090]/30 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Project Form Component
interface ProjectFormProps {
  project: Project;
  onSave: (project: Project) => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Project>(project);
  const [newTech, setNewTech] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      updatedAt: new Date().toISOString()
    });
  };

  const addTechnology = () => {
    if (newTech.trim() && !formData.technologies.includes(newTech.trim())) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, newTech.trim()]
      }));
      setNewTech('');
    }
  };

  const removeTechnology = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onCancel}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-[#01151d] to-[#001a1d] rounded-xl border border-[#05668d]/30 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#05668d]/20">
          <h3 className="text-xl font-semibold text-white">
            {project.id ? 'Edit Project' : 'Add New Project'}
          </h3>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-[#05668d]/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#f0f3bd]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#f0f3bd] mb-2">Project Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white placeholder-[#f0f3bd]/50 focus:outline-none focus:border-[#2dbef7]"
                placeholder="Enter project name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#f0f3bd] mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
                className="w-full px-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white focus:outline-none focus:border-[#2dbef7]"
              >
                <option value="Full Stack">Full Stack</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="DSA">DSA</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#f0f3bd] mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white placeholder-[#f0f3bd]/50 focus:outline-none focus:border-[#2dbef7] h-20 resize-none"
              placeholder="Brief project description"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#f0f3bd] mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
                className="w-full px-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white focus:outline-none focus:border-[#2dbef7]"
              >
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Planning">Planning</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="flex items-center gap-2 text-[#f0f3bd]">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="rounded border-[#05668d]/30 bg-[#05668d]/10 text-[#2dbef7] focus:ring-[#2dbef7]"
                />
                Featured Project
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#f0f3bd] mb-2">Technologies</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                placeholder="Add technology"
                className="flex-1 px-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white placeholder-[#f0f3bd]/50 focus:outline-none focus:border-[#2dbef7]"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
              />
              <button
                type="button"
                onClick={addTechnology}
                className="px-4 py-2 bg-[#05668d] text-white rounded-lg hover:bg-[#05668d]/80 transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1 px-3 py-1 bg-[#05668d]/20 text-[#2dbef7] rounded-full text-sm border border-[#05668d]/30"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTechnology(tech)}
                    className="hover:text-red-400 transition-colors"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#f0f3bd] mb-2">GitHub URL</label>
              <input
                type="url"
                value={formData.githubUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
                className="w-full px-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white placeholder-[#f0f3bd]/50 focus:outline-none focus:border-[#2dbef7]"
                placeholder="https://github.com/username/repo"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#f0f3bd] mb-2">Live URL (Optional)</label>
              <input
                type="url"
                value={formData.liveUrl || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, liveUrl: e.target.value }))}
                className="w-full px-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white placeholder-[#f0f3bd]/50 focus:outline-none focus:border-[#2dbef7]"
                placeholder="https://your-project.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#f0f3bd] mb-2">Project Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
              className="w-full px-4 py-2 bg-[#05668d]/10 border border-[#05668d]/30 rounded-lg text-white placeholder-[#f0f3bd]/50 focus:outline-none focus:border-[#2dbef7]"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#05668d] to-[#028090] text-white rounded-lg hover:from-[#05668d]/80 hover:to-[#028090]/80 transition-all font-medium"
            >
              <Save className="w-4 h-4" />
              Save Project
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 bg-[#f0f3bd]/10 text-[#f0f3bd] rounded-lg hover:bg-[#f0f3bd]/20 transition-colors border border-[#f0f3bd]/20"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};
