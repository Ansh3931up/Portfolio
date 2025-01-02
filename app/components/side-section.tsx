"use client"

import { useState, useEffect } from 'react'
import { GitHubUser, getGitHubUser } from '../utils/github'
import { motion } from 'framer-motion'
import { Mail, MapPin, Link as LinkIcon, Github } from 'lucide-react'

export function SideSection() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const userData = await getGitHubUser('Ansh3931up')
        setUser(userData)
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <aside className="w-full lg:w-1/4 lg:min-h-screen p-6 border-r border-primary/20">
      {/* Profile Section */}
      <div className="mb-8 text-center">
        {loading ? (
          <div className="animate-pulse">
            <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4"></div>
            <div className="h-6 bg-primary/20 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-primary/20 rounded w-1/2 mx-auto"></div>
          </div>
        ) : user ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={user.avatar_url}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary/20"
            />
            <h2 className="font-newspaper-heading text-2xl mb-2">{user.name}</h2>
            <p className="text-muted-foreground">{user.bio}</p>
          </motion.div>
        ) : null}
      </div>

      {/* Contact Information */}
      <div className="space-y-4 mb-8">
        {user && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            {user.location && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-primary" />
                <span>{user.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} className="text-primary" />
              <a href="mailto:contact@example.com" className="hover:text-primary">
                contact@example.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Github size={16} className="text-primary" />
              <a 
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                GitHub Profile
              </a>
            </div>
            {user.blog && (
              <div className="flex items-center gap-2 text-sm">
                <LinkIcon size={16} className="text-primary" />
                <a 
                  href={user.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Portfolio
                </a>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Stats Section */}
      {user && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card p-4 rounded-lg border border-primary/20"
        >
          <h3 className="font-newspaper-heading text-lg mb-4">GitHub Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Repositories</span>
              <span className="font-bold">{user.public_repos}</span>
            </div>
            <div className="flex justify-between">
              <span>Followers</span>
              <span className="font-bold">{user.followers}</span>
            </div>
            <div className="flex justify-between">
              <span>Following</span>
              <span className="font-bold">{user.following}</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Advertisement Section */}
      <div className="mt-8">
        <div className="bg-card p-4 rounded-lg border border-primary/20">
          <h3 className="font-newspaper-heading text-lg mb-4">Latest Updates</h3>
          <div className="space-y-4">
            {/* You can add more dynamic content here */}
            <p className="text-sm text-muted-foreground">
              Check out my latest projects and contributions on GitHub!
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
} 