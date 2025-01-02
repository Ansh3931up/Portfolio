"use client"

import { motion } from "framer-motion"
import { Calendar, Mail, Github, Linkedin, Star, Coffee, Code, Terminal } from 'lucide-react'
import Image from "next/image"
import { getGitHubUser, getGitHubRepos } from '../utils/github'
import { useEffect, useState } from "react"

interface GitHubStats {
  totalRepos: number
  followers: number
  following: number
  languages: { [key: string]: number }
}

export function Sidebar() {
  const [stats, setStats] = useState<GitHubStats>({
    totalRepos: 0,
    followers: 0,
    following: 0,
    languages: {}
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [user, repos] = await Promise.all([
          getGitHubUser('Ansh3931up'),
          getGitHubRepos('Ansh3931up')
        ])

        // Calculate language stats
        const languages: { [key: string]: number } = {}
        repos.forEach(repo => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1
          }
        })

        setStats({
          totalRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
          languages
        })
      } catch (error) {
        console.error('Error fetching GitHub data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  // Sort languages by usage count
  const topLanguages = Object.entries(stats.languages)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)

  return (
    <div className="space-y-6 font-newspaper-body text-sm border-l border-primary pl-4">
      {/* Development Dashboard */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-primary p-4"
      >
        <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-primary pb-2">
          DEVELOPMENT DASHBOARD
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-2 border border-primary">
            <Code className="w-6 h-6 mx-auto mb-1" />
            <p className="font-bold">{loading ? '...' : stats.totalRepos}</p>
            <p className="text-xs">Repositories</p>
          </div>
          <div className="text-center p-2 border border-primary">
            <Star className="w-6 h-6 mx-auto mb-1" />
            <p className="font-bold">{loading ? '...' : stats.followers}</p>
            <p className="text-xs">Followers</p>
          </div>
          <div className="text-center p-2 border border-primary">
            <Terminal className="w-6 h-6 mx-auto mb-1" />
            <p className="font-bold">{loading ? '...' : stats.following}</p>
            <p className="text-xs">Following</p>
          </div>
          <div className="text-center p-2 border border-primary">
            <Coffee className="w-6 h-6 mx-auto mb-1" />
            <p className="font-bold">∞</p>
            <p className="text-xs">Coffee Cups</p>
          </div>
        </div>
      </motion.div>

      {/* Tech Radar - Now showing actual top languages */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-primary p-4"
      >
        <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-primary pb-2">
          TOP LANGUAGES
        </h3>
        <div className="space-y-3">
          {loading ? (
            <p>Loading...</p>
          ) : (
            topLanguages.map(([language]) => (
              <div key={language} className="flex justify-between items-center">
                <span>{language}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < 4 ? 'fill-primary' : 'fill-none'}`} 
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>

      {/* Latest Updates */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-primary p-4"
      >
        <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-primary pb-2">
          LATEST UPDATES
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Performance Optimization",
              content: "Achieved 100/100 Lighthouse score across all metrics",
              date: "2 hours ago"
            },
            {
              title: "New Feature Launch",
              content: "Implemented AI-powered code suggestions",
              date: "1 day ago"
            },
            {
              title: "Client Success",
              content: "E-commerce platform sees 200% increase in conversions",
              date: "2 days ago"
            }
          ].map((update, i) => (
            <div key={i} className="border-b border-primary/30 last:border-0 pb-3 last:pb-0">
              <h4 className="font-bold mb-1">{update.title}</h4>
              <p className="text-sm">{update.content}</p>
              <p className="text-xs text-primary/70 mt-1">{update.date}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Features */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-primary p-4"
      >
        <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-primary pb-2">
          COMING SOON
        </h3>
        <ul className="space-y-2 list-disc list-inside">
          <li>Advanced Animation System</li>
          <li>Real-time Collaboration Tools</li>
          <li>Enhanced Mobile Experience</li>
          <li>AI-Powered Development</li>
          <li>Extended API Integration</li>
        </ul>
      </motion.div>

      {/* Client Testimonial */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-primary p-4"
      >
        <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-primary pb-2">
          FEATURED TESTIMONIAL
        </h3>
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <Image
              src="/placeholder.svg"
              alt="Client"
              layout="fill"
              className="rounded-full grayscale"
            />
          </div>
          <p className="italic mb-2">
            &quot;Exceptional work! Exceeded all our expectations with innovative solutions and timely delivery.&quot;
          </p>
          <p className="font-bold">John Smith</p>
          <p className="text-xs text-primary/70">CEO, Tech Innovations Inc.</p>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-primary p-4"
      >
        <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-primary pb-2">
          EDITORIAL CONTACT
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 shrink-0" />
            <p>developer@example.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 shrink-0" />
            <p>Available: 9AM - 6PM GMT</p>
          </div>
          <div className="flex justify-center gap-4 pt-2">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Mini Advertisement */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-primary p-4 text-center bg-primary/5"
      >
        <p className="font-newspaper-heading text-xs mb-2">SPECIAL OFFER</p>
        <p className="font-newspaper-heading text-xl mb-1">Early Bird Discount</p>
        <p className="text-xs mb-2">20% Off First Project</p>
        <p className="text-xs mb-4">Valid until [Next Month]</p>
        <button className="bg-primary text-primary-foreground px-4 py-1 text-sm font-newspaper-heading hover:bg-primary/80 transition-colors">
          CLAIM NOW
        </button>
      </motion.div>
    </div>
  )
}

