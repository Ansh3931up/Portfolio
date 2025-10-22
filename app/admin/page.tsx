"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Settings, 
  Users, 
  BarChart3, 
  FileText, 
  Image, 
  Code, 
  Mail, 
  Globe,
  Plus,
  Edit,
  Trash2,
  Save,
  Upload,
  Download,
  Eye,
  EyeOff,
  Search,
  Filter,
  MoreVertical,
  LogOut,
  Home,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

interface DashboardStats {
  totalProjects: number;
  totalViews: number;
  totalContacts: number;
  totalSkills: number;
}

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
  createdAt: string;
  updatedAt: string;
}

interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
  icon?: string;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'replied';
}

export default function AdminDashboard() {
  const { isAdmin, logoutAdmin } = useAdmin();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    totalViews: 0,
    totalContacts: 0,
    totalSkills: 0
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('admin_projects');
    const savedSkills = localStorage.getItem('admin_skills');
    const savedContacts = localStorage.getItem('admin_contacts');
    
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedSkills) setSkills(JSON.parse(savedSkills));
    if (savedContacts) setContacts(JSON.parse(savedContacts));
    
    // Update stats
    setStats({
      totalProjects: savedProjects ? JSON.parse(savedProjects).length : 0,
      totalViews: Math.floor(Math.random() * 10000) + 5000, // Mock data
      totalContacts: savedContacts ? JSON.parse(savedContacts).length : 0,
      totalSkills: savedSkills ? JSON.parse(savedSkills).length : 0
    });
  }, []);

  const handleLogout = () => {
    logoutAdmin();
    window.location.href = '/';
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#0d3b66] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-gray-300 mb-6">You need admin privileges to access this page.</p>
          <a href="/" className="text-[#2e8ce4] hover:text-[#74b2ed]">Return to Portfolio</a>
        </div>
      </div>
    );
  }

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contacts', label: 'Messages', icon: Mail },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d3b66] to-[#05182a] flex">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="w-64 bg-[#08243e] border-r border-[#0b3053] flex flex-col"
          >
            {/* Logo */}
            <div className="p-6 border-b border-[#0b3053]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2e8ce4] to-[#1764ad] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AK</span>
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">Admin Panel</h2>
                  <p className="text-[#74b2ed] text-sm">Portfolio Management</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-[#1764ad] text-white'
                        : 'text-[#74b2ed] hover:bg-[#0b3053] hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-[#0b3053]">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 text-[#f95738] hover:bg-[#0b3053] rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#08243e] border-b border-[#0b3053] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-[#74b2ed] hover:text-white hover:bg-[#0b3053] rounded-lg transition-colors"
            >
              {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
            <h1 className="text-2xl font-bold text-white capitalize">
              {activeTab === 'dashboard' ? 'Dashboard' : activeTab}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="flex items-center space-x-2 text-[#74b2ed] hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>View Portfolio</span>
            </a>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <DashboardOverview stats={stats} />
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <ProjectManagement projects={projects} setProjects={setProjects} />
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <SkillManagement skills={skills} setSkills={setSkills} />
              </motion.div>
            )}

            {activeTab === 'contacts' && (
              <motion.div
                key="contacts"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <ContactManagement contacts={contacts} setContacts={setContacts} />
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <AnalyticsDashboard stats={stats} />
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <PortfolioSettings />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// Dashboard Overview Component
const DashboardOverview: React.FC<{ stats: DashboardStats }> = ({ stats }) => {
  const statCards = [
    {
      title: 'Total Projects',
      value: stats.totalProjects,
      icon: FolderOpen,
      color: 'from-[#2e8ce4] to-[#1764ad]',
      change: '+12%'
    },
    {
      title: 'Portfolio Views',
      value: stats.totalViews.toLocaleString(),
      icon: Eye,
      color: 'from-[#ee964b] to-[#e47615]',
      change: '+8%'
    },
    {
      title: 'Messages',
      value: stats.totalContacts,
      icon: Mail,
      color: 'from-[#f95738] to-[#ed2e07]',
      change: '+23%'
    },
    {
      title: 'Skills',
      value: stats.totalSkills,
      icon: Code,
      color: 'from-[#f4d35e] to-[#efc21e]',
      change: '+5%'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#08243e] rounded-xl p-6 border border-[#0b3053]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#74b2ed] text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                  <p className="text-[#f4d35e] text-sm mt-1">{stat.change} from last month</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#08243e] rounded-xl p-6 border border-[#0b3053]">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New project added', time: '2 hours ago', type: 'project' },
              { action: 'Portfolio updated', time: '5 hours ago', type: 'update' },
              { action: 'New message received', time: '1 day ago', type: 'message' },
              { action: 'Skill added', time: '2 days ago', type: 'skill' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'project' ? 'bg-[#2e8ce4]' :
                  activity.type === 'update' ? 'bg-[#f4d35e]' :
                  activity.type === 'message' ? 'bg-[#f95738]' : 'bg-[#ee964b]'
                }`} />
                <div>
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-[#74b2ed] text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#08243e] rounded-xl p-6 border border-[#0b3053]">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Add Project', icon: Plus, color: 'bg-[#2e8ce4] hover:bg-[#1764ad]' },
              { label: 'View Analytics', icon: BarChart3, color: 'bg-[#ee964b] hover:bg-[#e47615]' },
              { label: 'Manage Skills', icon: Code, color: 'bg-[#f4d35e] hover:bg-[#efc21e]' },
              { label: 'Settings', icon: Settings, color: 'bg-[#f95738] hover:bg-[#ed2e07]' },
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className={`${action.color} text-white p-4 rounded-lg flex flex-col items-center space-y-2 transition-colors`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Management Component
const ProjectManagement: React.FC<{
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}> = ({ projects, setProjects }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteProject = (id: string) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem('admin_projects', JSON.stringify(updatedProjects));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Project Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-[#2e8ce4] hover:bg-[#1764ad] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#74b2ed] w-4 h-4" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#08243e] border border-[#0b3053] rounded-lg text-white placeholder-[#74b2ed] focus:outline-none focus:border-[#2e8ce4]"
          />
        </div>
        <button className="p-2 bg-[#08243e] border border-[#0b3053] rounded-lg text-[#74b2ed] hover:text-white transition-colors">
          <Filter className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-[#08243e] rounded-xl p-6 border border-[#0b3053]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="text-[#74b2ed] text-sm">{project.category}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingProject(project)}
                  className="p-1 text-[#f4d35e] hover:text-white transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="p-1 text-[#f95738] hover:text-white transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2 py-1 bg-[#0b3053] text-[#74b2ed] text-xs rounded-full">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-[#0b3053] text-[#74b2ed] text-xs rounded-full">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 rounded-full text-xs ${
                project.status === 'Completed' ? 'bg-[#f4d35e]/20 text-[#f4d35e]' :
                project.status === 'In Progress' ? 'bg-[#ee964b]/20 text-[#ee964b]' :
                'bg-[#74b2ed]/20 text-[#74b2ed]'
              }`}>
                {project.status}
              </span>
              {project.featured && (
                <span className="px-2 py-1 bg-[#2e8ce4]/20 text-[#2e8ce4] rounded-full text-xs">
                  Featured
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <FolderOpen className="w-16 h-16 text-[#74b2ed] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
          <p className="text-gray-400 mb-6">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by adding your first project.'}
          </p>
          {!searchTerm && (
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-[#2e8ce4] hover:bg-[#1764ad] text-white px-6 py-3 rounded-lg transition-colors"
            >
              Add Your First Project
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// Skill Management Component
const SkillManagement: React.FC<{
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
}> = ({ skills, setSkills }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Skill Management</h2>
        <button className="bg-[#2e8ce4] hover:bg-[#1764ad] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Skill</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-[#08243e] rounded-xl p-6 border border-[#0b3053]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <span className="text-[#f4d35e] font-medium">{skill.level}%</span>
            </div>
            
            <div className="mb-4">
              <div className="w-full bg-[#0b3053] rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[#2e8ce4] to-[#1764ad] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
            
            <p className="text-[#74b2ed] text-sm">{skill.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Management Component
const ContactManagement: React.FC<{
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}> = ({ contacts, setContacts }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Message Management</h2>
        <div className="flex items-center space-x-4">
          <span className="text-[#74b2ed]">Total: {contacts.length}</span>
        </div>
      </div>

      <div className="bg-[#08243e] rounded-xl border border-[#0b3053] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#0b3053]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#74b2ed] uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#74b2ed] uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#74b2ed] uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#74b2ed] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#74b2ed] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#74b2ed] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0b3053]">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-[#0b3053]/50">
                  <td className="px-6 py-4 whitespace-nowrap text-white font-medium">
                    {contact.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#74b2ed]">
                    {contact.email}
                  </td>
                  <td className="px-6 py-4 text-gray-300 max-w-xs truncate">
                    {contact.message}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      contact.status === 'new' ? 'bg-[#f95738]/20 text-[#f95738]' :
                      contact.status === 'read' ? 'bg-[#f4d35e]/20 text-[#f4d35e]' :
                      'bg-[#2e8ce4]/20 text-[#2e8ce4]'
                    }`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-[#2e8ce4] hover:text-white">View</button>
                      <button className="text-[#f95738] hover:text-white">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Analytics Dashboard Component
const AnalyticsDashboard: React.FC<{ stats: DashboardStats }> = ({ stats }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#08243e] rounded-xl p-6 border border-[#0b3053]">
          <h3 className="text-lg font-semibold text-white mb-4">Portfolio Views</h3>
          <div className="h-64 flex items-center justify-center">
            <p className="text-[#74b2ed]">Chart visualization would go here</p>
          </div>
        </div>

        <div className="bg-[#08243e] rounded-xl p-6 border border-[#0b3053]">
          <h3 className="text-lg font-semibold text-white mb-4">Popular Projects</h3>
          <div className="space-y-3">
            {[
              { name: 'NeuraCampus', views: 1250, percentage: 85 },
              { name: 'Algorithm Visualizer', views: 980, percentage: 70 },
              { name: 'E-Commerce Platform', views: 750, percentage: 55 },
            ].map((project, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{project.name}</p>
                  <div className="w-full bg-[#0b3053] rounded-full h-2 mt-1">
                    <div 
                      className="bg-gradient-to-r from-[#2e8ce4] to-[#1764ad] h-2 rounded-full"
                      style={{ width: `${project.percentage}%` }}
                    />
                  </div>
                </div>
                <span className="text-[#74b2ed] text-sm ml-4">{project.views}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Portfolio Settings Component
const PortfolioSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Portfolio Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#08243e] rounded-xl p-6 border border-[#0b3053]">
          <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#74b2ed] mb-1">Name</label>
              <input
                type="text"
                defaultValue="Ansh Kumar"
                className="w-full px-3 py-2 bg-[#0b3053] border border-[#1764ad] rounded-lg text-white focus:outline-none focus:border-[#2e8ce4]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#74b2ed] mb-1">Title</label>
              <input
                type="text"
                defaultValue="Full Stack Developer & DSA Expert"
                className="w-full px-3 py-2 bg-[#0b3053] border border-[#1764ad] rounded-lg text-white focus:outline-none focus:border-[#2e8ce4]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#74b2ed] mb-1">Email</label>
              <input
                type="email"
                defaultValue="anshkumar3931@gmail.com"
                className="w-full px-3 py-2 bg-[#0b3053] border border-[#1764ad] rounded-lg text-white focus:outline-none focus:border-[#2e8ce4]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#08243e] rounded-xl p-6 border border-[#0b3053]">
          <h3 className="text-lg font-semibold text-white mb-4">Theme Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#74b2ed] mb-2">Color Scheme</label>
              <div className="grid grid-cols-3 gap-3">
                {['Yale Blue', 'Lapis Lazuli', 'Teal'].map((scheme) => (
                  <button
                    key={scheme}
                    className="p-3 bg-[#0b3053] border border-[#1764ad] rounded-lg text-white text-sm hover:border-[#2e8ce4] transition-colors"
                  >
                    {scheme}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#08243e] rounded-xl p-6 border border-[#0b3053]">
        <h3 className="text-lg font-semibold text-white mb-4">Backup & Export</h3>
        <div className="flex space-x-4">
          <button className="bg-[#2e8ce4] hover:bg-[#1764ad] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
          <button className="bg-[#ee964b] hover:bg-[#e47615] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Upload className="w-4 h-4" />
            <span>Import Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};
