"use client"

// import { motion } from "framer-motion"
import Image from "next/image"

export function NewspaperLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-[#faf7f2]">
      <div className="grid grid-cols-12 gap-4 px-4 md:px-8">
        {/* Left Sidebar - Hidden on mobile */}
        <aside className="hidden lg:block lg:col-span-2 space-y-6">
          <div className="border-2 border-[#2c1810] p-4">
            <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-[#2c1810]">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm font-newspaper-body">
              <li>• Front Page</li>
              <li>• Latest Projects</li>
              <li>• Tech Stack</li>
              <li>• Contact Info</li>
            </ul>
          </div>

          <div className="border-2 border-[#2c1810] p-4">
            <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-[#2c1810]">
              TECH TRENDS
            </h3>
            <div className="space-y-3 text-sm font-newspaper-body">
              <div>
                <p className="font-bold">React 19</p>
                <p className="text-xs">Coming Soon</p>
              </div>
              <div>
                <p className="font-bold">Next.js 14</p>
                <p className="text-xs">Now Available</p>
              </div>
              <div>
                <p className="font-bold">TypeScript 5.3</p>
                <p className="text-xs">Latest Release</p>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#2c1810] p-4 text-center">
            <p className="font-newspaper-heading text-xs mb-2">ADVERTISEMENT</p>
            <div className="relative aspect-[3/4] mb-2">
              <Image
                src="/placeholder.svg"
                alt="Advertisement"
                layout="fill"
                className="grayscale"
              />
            </div>
            <p className="text-xs font-newspaper-body">Your Ad Here</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-12 lg:col-span-8">
          {children}
        </main>

        {/* Right Sidebar - Hidden on mobile */}
        <aside className="hidden lg:block lg:col-span-2 space-y-6">
          <div className="border-2 border-[#2c1810] p-4">
            <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-[#2c1810]">
              AVAILABILITY
            </h3>
            <div className="space-y-2 text-sm font-newspaper-body">
              <p className="font-bold text-green-700">OPEN TO WORK</p>
              <p>Currently accepting:</p>
              <ul className="list-disc list-inside">
                <li>Frontend Projects</li>
                <li>Full Stack Development</li>
                <li>Code Reviews</li>
                <li>Consulting</li>
              </ul>
            </div>
          </div>

          <div className="border-2 border-[#2c1810] p-4">
            <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-[#2c1810]">
              WEATHER REPORT
            </h3>
            <div className="text-center space-y-2 text-sm font-newspaper-body">
              <p className="font-bold">Development Forecast</p>
              <p>Sunny with occasional</p>
              <p>debugging showers</p>
              <p className="text-xs mt-4">High productivity expected</p>
            </div>
          </div>

          <div className="border-2 border-[#2c1810] p-4">
            <h3 className="font-newspaper-heading text-lg font-bold mb-4 border-b border-[#2c1810]">
              STOCK TICKER
            </h3>
            <div className="space-y-2 text-sm font-newspaper-body">
              <div className="flex justify-between">
                <span>REACT</span>
                <span className="text-green-700">↑ 98%</span>
              </div>
              <div className="flex justify-between">
                <span>NEXTJS</span>
                <span className="text-green-700">↑ 95%</span>
              </div>
              <div className="flex justify-between">
                <span>TS</span>
                <span className="text-green-700">↑ 92%</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#2c1810] p-4 text-center">
            <p className="font-newspaper-heading text-xs mb-2">SPECIAL OFFER</p>
            <p className="font-newspaper-heading text-xl mb-1">20% OFF</p>
            <p className="text-sm font-newspaper-body mb-2">First Project</p>
            <button className="bg-[#2c1810] text-[#faf7f2] px-4 py-1 text-sm font-newspaper-heading hover:bg-[#2c1810]/80 transition-colors">
              CLAIM NOW
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

