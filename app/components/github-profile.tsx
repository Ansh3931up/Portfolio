"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GitHubUser, GitHubRepo, getGitHubUser, getGitHubRepos } from '../utils/github'
import { Star, GitFork, Clock } from 'lucide-react'

export function GitHubProfile({ username }: { username: string }) {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true;

    async function fetchGitHubData() {
      try {
        setLoading(true)
        setError(null)

        const [userData, reposData] = await Promise.all([
          getGitHubUser(username),
          getGitHubRepos(username)
        ])

        if (mounted) {
          setUser(userData)
          setRepos(reposData)
        }
      } catch (err) {
        console.error('Error fetching GitHub data:', err)
        if (mounted) {
          setError('Unable to load GitHub profile. Please check your token and try again.')
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    fetchGitHubData()

    return () => {
      mounted = false
    }
  }, [username])

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px] bg-destructive/10 rounded-lg m-4">
        <p className="text-destructive font-newspaper-heading text-center px-4">
          {error}
        </p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) return null;

  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center gap-6 mb-12"
        >
          <img 
            src={user.avatar_url} 
            alt="GitHub Profile"
            className="w-32 h-32 rounded-full border-4 border-primary/20"
          />
          <div className="text-center md:text-left">
            <h2 className="font-newspaper-heading text-3xl mb-2">{user.name}</h2>
            <p className="text-muted-foreground mb-4">{user.bio}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="text-sm">
                <strong>{user.public_repos}</strong> repositories
              </span>
              <span className="text-sm">
                <strong>{user.followers}</strong> followers
              </span>
              <span className="text-sm">
                <strong>{user.following}</strong> following
              </span>
            </div>
          </div>
        </motion.div>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-background rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-newspaper-heading text-xl mb-2">{repo.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{repo.description}</p>
              
              <div className="flex items-center gap-4 text-sm">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star size={16} />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
