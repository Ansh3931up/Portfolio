"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Edit, Trash2, Save, Upload, Eye, EyeOff } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'DSA' | 'Mobile';
  status: 'Completed' | 'In Progress' | 'Planning';
  featured: boolean;
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'settings'>('projects');

  // Load projects from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('admin_projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // Save projects to localStorage whenever projects change
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
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setIsAddingNew(false);
  };

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
    liveUrl: ''
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Admin Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 bg-gray-900 rounded-xl border border-blue-500/20 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-700">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'projects'
                    ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Projects Management
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'settings'
                    ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Settings
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto">
              {activeTab === 'projects' && (
                <div className="p-6">
                  {/* Add New Project Button */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-white">Projects</h3>
                    <button
                      onClick={() => {
                        setIsAddingNew(true);
                        setEditingProject(null);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add Project
                    </button>
                  </div>

                  {/* Projects List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onEdit={handleEditProject}
                        onDelete={handleDeleteProject}
                      />
                    ))}
                  </div>

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
              )}

              {activeTab === 'settings' && (
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Settings</h3>
                  <div className="space-y-6">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="text-lg font-medium text-white mb-2">Portfolio Information</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                          <input
                            type="text"
                            defaultValue="Ansh Kumar"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                          <input
                            type="text"
                            defaultValue="Full Stack Developer & DSA Expert"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                          <input
                            type="email"
                            defaultValue="anshkumar3931@gmail.com"
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Project Card Component
interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-white">{project.name}</h4>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(project)}
            className="p-1 hover:bg-gray-700 rounded"
          >
            <Edit className="w-4 h-4 text-blue-400" />
          </button>
          <button
            onClick={() => onDelete(project.id)}
            className="p-1 hover:bg-gray-700 rounded"
          >
            <Trash2 className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-2 line-clamp-2">{project.description}</p>
      <div className="flex items-center gap-2">
        <span className={`px-2 py-1 rounded-full text-xs ${
          project.featured ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-600/20 text-gray-400'
        }`}>
          {project.category}
        </span>
        <span className={`px-2 py-1 rounded-full text-xs ${
          project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
          project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-blue-500/20 text-blue-400'
        }`}>
          {project.status}
        </span>
      </div>
    </div>
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
    onSave(formData);
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
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">
        {project.id ? 'Edit Project' : 'Add New Project'}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Project Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
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
          <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white h-20"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as any }))}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
            >
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Planning">Planning</option>
            </select>
          </div>

          <div className="flex items-center">
            <label className="flex items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="rounded"
              />
              Featured Project
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Technologies</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              placeholder="Add technology"
              className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
            />
            <button
              type="button"
              onClick={addTechnology}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.technologies.map((tech) => (
              <span
                key={tech}
                className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => removeTechnology(tech)}
                  className="hover:text-red-400"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">GitHub URL</label>
            <input
              type="url"
              value={formData.githubUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Live URL (Optional)</label>
            <input
              type="url"
              value={formData.liveUrl || ''}
              onChange={(e) => setFormData(prev => ({ ...prev, liveUrl: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Image URL</label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
            required
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Save className="w-4 h-4" />
            Save Project
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
