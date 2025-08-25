"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Star, Coffee, Code, Terminal, GraduationCap, Briefcase, Trophy, MapPin, Phone, Award } from 'lucide-react'
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
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-6 font-poppins text-sm bg-white rounded-2xl shadow-xl border border-gray-200 p-6 h-fit sticky top-8 "
    >
      {/* Header with Profile Picture and Home Title */}
      <div className="flex items-center mb-8">
        <div className="relative w-12 h-12 mr-4">
          <img 
            src="/faceimage.png"
            alt="Profile"
            className="w-12 h-12 rounded-lg border-2 border-red-500 shadow-lg"
          />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Ansh Kumar</h2>
      </div>

      {/* Quick Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-red-500 p-4 rounded-lg bg-red-50"
      >
        <h3 className="font-bold text-lg mb-4 border-b border-red-500 pb-2 text-gray-900 flex items-center">
          <Phone className="w-5 h-5 mr-2 text-red-500" />
          CONTACT INFO
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-red-500" />
            <span className="text-gray-700">anshkumar3931@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-red-500" />
            <span className="text-gray-700">+91-7206000725</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-gray-700">Una, Himachal Pradesh</span>
          </div>
        </div>
      </motion.div>

      {/* Education Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-red-500 p-4 rounded-lg bg-red-50"
      >
        <h3 className="font-bold text-lg mb-4 border-b border-red-500 pb-2 text-gray-900 flex items-center">
          <GraduationCap className="w-5 h-5 mr-2 text-red-500" />
          EDUCATION
        </h3>
        <div className="space-y-3">
          <div className="border border-red-200 rounded-lg p-3 bg-white">
            <div className="font-semibold text-gray-900">B.Tech ECE</div>
            <div className="text-xs text-gray-600">IIIT Una</div>
            <div className="text-sm font-bold text-red-500">9.12 CGPA</div>
          </div>
          <div className="border border-red-200 rounded-lg p-3 bg-white">
            <div className="font-semibold text-gray-900">Senior Secondary</div>
            <div className="text-xs text-gray-600">CBSE Board</div>
            <div className="text-sm font-bold text-red-500">94.6%</div>
          </div>
        </div>
      </motion.div>

     

      {/* Development Dashboard */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-red-500 p-4 rounded-lg bg-red-50"
      >
        <h3 className="font-bold text-lg mb-4 border-b border-red-500 pb-2 text-gray-900">
          DEVELOPMENT DASHBOARD
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-2 border border-red-500 rounded-lg bg-white">
            <Code className="w-6 h-6 mx-auto mb-1 text-red-500" />
            <p className="font-bold text-gray-900">{loading ? '...' : stats.totalRepos}</p>
            <p className="text-xs text-gray-600">Repositories</p>
          </div>
          <div className="text-center p-2 border border-red-500 rounded-lg bg-white">
            <Star className="w-6 h-6 mx-auto mb-1 text-red-500" />
            <p className="font-bold text-gray-900">{loading ? '...' : stats.followers}</p>
            <p className="text-xs text-gray-600">Followers</p>
          </div>
          <div className="text-center p-2 border border-red-500 rounded-lg bg-white">
            <Terminal className="w-6 h-6 mx-auto mb-1 text-red-500" />
            <p className="font-bold text-gray-900">{loading ? '...' : stats.following}</p>
            <p className="text-xs text-gray-600">Following</p>
          </div>
          <div className="text-center p-2 border border-red-500 rounded-lg bg-white">
            <Coffee className="w-6 h-6 mx-auto mb-1 text-red-500" />
            <p className="font-bold text-gray-900">∞</p>
            <p className="text-xs text-gray-600">Coffee Cups</p>
          </div>
        </div>
      </motion.div>

      {/* Tech Radar - Top Languages */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-red-500 p-4 rounded-lg bg-red-50"
      >
        <h3 className="font-bold text-lg mb-4 border-b border-red-500 pb-2 text-gray-900">
          TOP LANGUAGES
        </h3>
        <div className="space-y-3">
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : (
            topLanguages.map(([language]) => (
              <div key={language} className="flex justify-between items-center">
                <span className="text-gray-700">{language}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < 4 ? 'fill-red-500 text-red-500' : 'fill-none text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>

      {/* Key Achievements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-2 border-red-500 p-4 rounded-lg bg-red-50"
      >
        <h3 className="font-bold text-lg mb-4 border-b border-red-500 pb-2 text-gray-900 flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-red-500" />
          ACHIEVEMENTS
        </h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-700 text-sm">
            <Award className="w-4 h-4 text-red-500" />
            <span>Hackathon Recognition at NIT Hamirpur</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 text-sm">
            <Award className="w-4 h-4 text-red-500" />
            <span>Runner-up in College Coding Contest</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 text-sm">
            <Award className="w-4 h-4 text-red-500" />
            <span>PR Head at ECOVA, IIIT Una</span>
          </div>
        </div>
      </motion.div>

      

     
    </motion.div>
  )
}

