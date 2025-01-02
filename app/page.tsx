import { Navigation } from "./components/navigation"
import { MovingSubheader } from "./components/moving-subheader"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import  {Projects}  from "./components/projects"
import { Skills } from "./components/skills"
import { Feedback } from "./components/feedback"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { BackgroundTexture } from "./components/background-texture"
import { HireMe } from "./components/hire-me"
import { CVPopup } from "./components/cv-popup"
import { Sidebar } from "./components/sidebar"
import { NewsBrief } from "./components/news-brief"
import { Achievements } from "./components/achievements"
import { PageLoader } from "./components/page-loader"
// import { GitHubProfile } from './components/github-profile'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] dark:bg-black relative">
      <PageLoader />
      <BackgroundTexture />
      <div className="relative z-10">
        <Navigation />
        <MovingSubheader />
        
        <div className="max-w-7xl mx-auto dark:bg-black px-4 sm:px-6 lg:px-8">
          <Hero />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <NewsBrief
                    title="Frontend Innovation"
                    content="Latest project showcases cutting-edge React patterns and exceptional performance metrics."
                    date="2 hours ago"
                  />
                  <NewsBrief
                    title="Backend Excellence"
                    content="Implementing robust API architecture with Next.js App Router and Server Components."
                    date="4 hours ago"
                  />
                </div>
                <div className="space-y-4">
                  <NewsBrief
                    title="Design Philosophy"
                    content="Merging classic aesthetics with modern functionality for unique user experiences."
                    date="1 day ago"
                  />
                  <NewsBrief
                    title="Code Quality"
                    content="Maintaining high standards with comprehensive testing and clean architecture."
                    date="2 days ago"
                  />
                </div>
              </div>

              <section id="about">
                <About />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>

          <section id="hire">
            <HireMe />
          </section>

          <section id="testimonials">
            <Feedback />
          </section>
        </div>
        
      </div>
      <CVPopup />
      <Achievements />
      <Footer />
      {/* <GitHubProfile username="Ansh3931up" /> */}
    </main>
  )
}

