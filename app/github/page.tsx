"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GitHubUser, GitHubRepo, getGitHubUser, getGitHubRepos } from '../utils/github'
import { Navigation } from '../components/navigation'
import { BottomNavigation } from '../components/bottom-navigation'

export default function GitHubPage() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userData, reposData] = await Promise.all([
          getGitHubUser('Ansh3931up'),
          getGitHubRepos('Ansh3931up')
        ]);
        setUser(userData);
        setRepos(reposData);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#141111] text-white flex items-center pb-28 justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Loading GitHub profile...</p>
        </div>
      </main>
    );
  }

  if (!user || !repos) {
    return (
      <main className="min-h-screen bg-[#141111] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Unable to load profile data
          </h1>
          <p className="text-white/70">
            Please try refreshing the page
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#141111] text-white">
      <Navigation />
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="hero-section mx-2 sm:mx-4 md:mx-6 my-2 sm:my-4 md:my-6 border-2 rounded-xl shadow-white border-white bg-[#1a1a1a] relative shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] z-10 overflow-hidden p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              {/* GitHub Profile Header */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <img 
                  src={user.avatar_url} 
                  alt={user.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-red-500 shadow-lg"
                />
                <div className="text-center sm:text-left">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
                    {user.name}
                  </h1>
                  <p className="text-lg sm:text-xl text-white/80 mb-4 max-w-2xl">
                    {user.bio || 'Passionate developer building amazing things'}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25 font-medium"
                    >
                      View GitHub Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* GitHub Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-red-500">{user.public_repos}</p>
                  <p className="text-sm text-white/70">Repositories</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-red-500">{user.followers}</p>
                  <p className="text-sm text-white/70">Followers</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-red-500">{user.following}</p>
                  <p className="text-sm text-white/70">Following</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-red-500">2024</p>
                  <p className="text-sm text-white/70">Active Year</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.slice(0, 6).map((repo) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-[#0f0f0f] rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 group-hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                      {repo.name}
                    </h3>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="flex items-center justify-between">
                    {repo.language && (
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-500 border border-red-500/30">
                        {repo.language}
                      </span>
                    )}
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <span>⭐ {repo.stargazers_count || 0}</span>
                      <span>📅 {new Date(repo.updated_at).getFullYear()}</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Latest Activity */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Latest Activity
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-[#0f0f0f] p-8 rounded-xl border border-white/10">
            <div className="space-y-6">
              {repos.slice(0, 5).map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-red-500 transition-colors">
                        {repo.name}
                      </h3>
                      <p className="text-sm text-white/60">
                        Last updated: {new Date(repo.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 transition-colors font-medium"
                  >
                    View →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Repository Languages Overview */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from(new Set(repos.map(repo => repo.language).filter(Boolean))).slice(0, 12).map((language) => (
              <motion.div
                key={language}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center p-4 bg-[#0f0f0f] rounded-lg border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">{language?.charAt(0)}</span>
                </div>
                <p className="text-sm text-white/80 font-medium">{language}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </main>
  )
}