"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  Upload, 
  Eye, 
  EyeOff,
  Settings,
  Users,
  FileText,
  BarChart3,
  Palette,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Download,
  RefreshCw,
  Database,
  Shield,
  Activity,
  TrendingUp,
  MessageSquare,
  Image,
  Code,
  Layers
} from 'lucide-react';
import { ProjectManagement } from './ProjectManagement';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DashboardStats {
  totalProjects: number;
  totalViews: number;
  totalMessages: number;
  lastUpdated: string;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    totalViews: 0,
    totalMessages: 0,
    lastUpdated: new Date().toISOString()
  });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'media', label: 'Media', icon: Image },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  useEffect(() => {
    if (isOpen) {
      // Load dashboard data
      const savedProjects = localStorage.getItem('admin_projects');
      const projectCount = savedProjects ? JSON.parse(savedProjects).length : 0;
      
      setStats(prev => ({
        ...prev,
        totalProjects: projectCount,
        lastUpdated: new Date().toISOString()
      }));
    }
  }, [isOpen]);

  const StatCard = ({ title, value, icon: Icon, color }: { title: string; value: string | number; icon: any; color: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-br from-[#05668d]/20 to-[#028090]/20 backdrop-blur-sm rounded-xl p-6 border border-[#05668d]/30 ${color}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#f0f3bd]/70 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
        </div>
        <div className="p-3 bg-[#05668d]/20 rounded-lg">
          <Icon className="w-6 h-6 text-[#2dbef7]" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 bg-gradient-to-br from-[#01151d] to-[#001a1d] rounded-xl border border-[#05668d]/30 shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#05668d]/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-[#05668d] to-[#028090] rounded-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Admin Dashboard</h2>
                  <p className="text-[#2dbef7] text-sm">Portfolio Management System</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#05668d]/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-[#f0f3bd]" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#05668d]/20 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-[#2dbef7] border-b-2 border-[#2dbef7] bg-[#05668d]/10'
                        : 'text-[#f0f3bd]/60 hover:text-[#f0f3bd] hover:bg-[#05668d]/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto">
              {activeTab === 'overview' && (
                <div className="p-6">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Dashboard Overview</h3>
                    <p className="text-[#f0f3bd]/70">Welcome to your portfolio management dashboard</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                      title="Total Projects"
                      value={stats.totalProjects}
                      icon={Code}
                      color="hover:from-[#05668d]/30 hover:to-[#028090]/30"
                    />
                    <StatCard
                      title="Page Views"
                      value="1,234"
                      icon={Eye}
                      color="hover:from-[#028090]/30 hover:to-[#00a896]/30"
                    />
                    <StatCard
                      title="Messages"
                      value="56"
                      icon={MessageSquare}
                      color="hover:from-[#00a896]/30 hover:to-[#02c39a]/30"
                    />
                    <StatCard
                      title="Last Updated"
                      value="Today"
                      icon={Calendar}
                      color="hover:from-[#02c39a]/30 hover:to-[#05668d]/30"
                    />
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-gradient-to-br from-[#05668d]/10 to-[#028090]/10 backdrop-blur-sm rounded-xl p-6 border border-[#05668d]/20">
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: 'Add Project', icon: Plus, color: 'bg-[#05668d] hover:bg-[#05668d]/80' },
                        { label: 'Manage Content', icon: FileText, color: 'bg-[#028090] hover:bg-[#028090]/80' },
                        { label: 'View Analytics', icon: BarChart3, color: 'bg-[#00a896] hover:bg-[#00a896]/80' },
                        { label: 'Settings', icon: Settings, color: 'bg-[#02c39a] hover:bg-[#02c39a]/80' }
                      ].map((action) => {
                        const Icon = action.icon;
                        return (
                          <button
                            key={action.label}
                            onClick={() => setActiveTab(action.label.toLowerCase().replace(' ', ''))}
                            className={`flex flex-col items-center gap-2 p-4 ${action.color} text-white rounded-lg transition-all hover:scale-105`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{action.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <ProjectManagement />
              )}

              {activeTab === 'content' && (
                <div className="p-6">
                  <ContentManagement />
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="p-6">
                  <SettingsPanel />
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="p-6">
                  <AnalyticsPanel />
                </div>
              )}

              {activeTab === 'messages' && (
                <div className="p-6">
                  <MessagesPanel />
                </div>
              )}

              {activeTab === 'media' && (
                <div className="p-6">
                  <MediaPanel />
                </div>
              )}

              {activeTab === 'security' && (
                <div className="p-6">
                  <SecurityPanel />
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Placeholder components for different tabs
const ProjectManagementTab = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-semibold text-white">Project Management</h3>
      <button className="flex items-center gap-2 px-4 py-2 bg-[#05668d] text-white rounded-lg hover:bg-[#05668d]/80 transition-colors">
        <Plus className="w-4 h-4" />
        Add Project
      </button>
    </div>
    <div className="bg-gradient-to-br from-[#05668d]/10 to-[#028090]/10 backdrop-blur-sm rounded-xl p-6 border border-[#05668d]/20">
      <p className="text-[#f0f3bd]/70">Project management interface will be implemented here...</p>
    </div>
  </div>
);

const ContentManagement = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Content Management</h3>
    <div className="bg-gradient-to-br from-[#05668d]/10 to-[#028090]/10 backdrop-blur-sm rounded-xl p-6 border border-[#05668d]/20">
      <p className="text-[#f0f3bd]/70">Content management interface will be implemented here...</p>
    </div>
  </div>
);

const SettingsPanel = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Settings</h3>
    <div className="bg-gradient-to-br from-[#05668d]/10 to-[#028090]/10 backdrop-blur-sm rounded-xl p-6 border border-[#05668d]/20">
      <p className="text-[#f0f3bd]/70">Settings panel will be implemented here...</p>
    </div>
  </div>
);

const AnalyticsPanel = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Analytics</h3>
    <div className="bg-gradient-to-br from-[#05668d]/10 to-[#028090]/10 backdrop-blur-sm rounded-xl p-6 border border-[#05668d]/20">
      <p className="text-[#f0f3bd]/70">Analytics dashboard will be implemented here...</p>
    </div>
  </div>
);

const MessagesPanel = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Messages</h3>
    <div className="bg-gradient-to-br from-[#05668d]/10 to-[#028090]/10 backdrop-blur-sm rounded-xl p-6 border border-[#05668d]/20">
      <p className="text-[#f0f3bd]/70">Messages management will be implemented here...</p>
    </div>
  </div>
);

const MediaPanel = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Media Library</h3>
    <div className="bg-gradient-to-br from-[#05668d]/10 to-[#028090]/10 backdrop-blur-sm rounded-xl p-6 border border-[#05668d]/20">
      <p className="text-[#f0f3bd]/70">Media library will be implemented here...</p>
    </div>
  </div>
);

const SecurityPanel = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-white">Security Settings</h3>
    <div className="bg-gradient-to-br from-[#05668d]/10 to-[#028090]/10 backdrop-blur-sm rounded-xl p-6 border border-[#05668d]/20">
      <p className="text-[#f0f3bd]/70">Security settings will be implemented here...</p>
    </div>
  </div>
);
