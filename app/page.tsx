import { Navigation } from "./components/navigation"
import { BottomNavigation } from "./components/bottom-navigation"

import { Hero } from "./components/hero"
import { About } from "./components/about"
import  {Projects}  from "./components/projects"
import { Skills } from "./components/skills"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { BackgroundTexture } from "./components/background-texture"
import { Sidebar } from "./components/sidebar"
import { PageLoader } from "./components/page-loader"
import { ScrollSection } from "./components/scroll-section"
import { ScrollController } from "./components/scroll-controller"
// import { GitHubProfile } from './components/github-profile'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141111] text-white">
      
      <PageLoader />
      <BackgroundTexture />
      
      {/* Hero Section with Dark Red Background */}
      <div className="hero-section max-w-[calc(100vw-60px)] mx-auto my-1.5 sm:my-3 md:my-5 border-2 rounded-xl shadow-white border-white bg-[#1a1a1a] relative shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] z-10 overflow-hidden">
        
        <Navigation />
        <div className=" mx-auto px-1.5 sm:px-3 md:px-5 lg:px-6 relative z-10">
          <Hero />
        </div>
      </div>
      
      {/* Main Content with Dark Gray Background */}
      <ScrollController maxScrollSpeed={40} enableScrollControl={true}>
        <div className="relative z-10 section-dark-gray text-white overflow-hidden">
         
          <div className="max-w-[calc(100vw-60px)] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8">
              {/* Main Content Column */}
              <div className="lg:col-span-8">

                <ScrollSection delay={0.1}>
                  <section id="about" className="section-darker-gray py-2 sm:py-3 lg:py-4 rounded-xl mb-3 sm:mb-4">
                    <About />
                  </section>
                </ScrollSection>

                
               
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-4">
                <Sidebar />
              </div>
            </div>
          </div>
          
        </div>
        <ScrollSection delay={0.2}>
                  <section id="projects" className="section-dark-gray py-8 sm:py-12 lg:py-16 rounded-xl mb-6 sm:mb-8">
                    <Projects />
                  </section>
                </ScrollSection>

        <ScrollSection delay={0.3}>
                  <section id="skills" className="section-darker-gray py-8 sm:py-12 lg:py-16 rounded-xl mb-6 sm:mb-8">
                    <Skills />
                  </section>
                </ScrollSection>

                <ScrollSection delay={0.4}>
                  <section id="contact" className="section-dark-gray py-8 sm:py-12 lg:py-16 rounded-xl mb-6 sm:mb-8">
                    <Contact />
                  </section>
                </ScrollSection>
      </ScrollController>
      <Footer />
      {/* <GitHubProfile username="Ansh3931up" /> */}
      
      {/* Bottom Navigation - Fixed on every screen except hero */}
      <BottomNavigation />
    </main>
  )
}

