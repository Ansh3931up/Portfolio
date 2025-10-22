"use client";

import { useRef, useState, useEffect, useMemo, useCallback, Suspense, lazy } from "react";
import { InitialLoader } from "./components/ui/InitialLoader";

// Lazy load components for better performance
const Navbar = lazy(() => import("./components/portfolio/Navbar").then(mod => ({ default: mod.Navbar })));
const HeroSection = lazy(() => import("./components/portfolio/HeroSection").then(mod => ({ default: mod.HeroSection })));
const AboutSection = lazy(() => import("./components/portfolio/AboutSection").then(mod => ({ default: mod.AboutSection })));
const SkillsSection = lazy(() => import("./components/portfolio/SkillsSection").then(mod => ({ default: mod.SkillsSection })));
const TechStacksSection = lazy(() => import("./components/portfolio/TechStacksSection").then(mod => ({ default: mod.TechStacksSection })));
const ProjectsSection = lazy(() => import("./components/portfolio/ProjectsSection").then(mod => ({ default: mod.ProjectsSection })));
const ContactSection = lazy(() => import("./components/portfolio/ContactSection").then(mod => ({ default: mod.ContactSection })));
const Footer = lazy(() => import("./components/portfolio/Footer").then(mod => ({ default: mod.Footer })));
const BackgroundShapes = lazy(() => import("./components/ui/background-shapes").then(mod => ({ default: mod.BackgroundShapes })));

// Skeleton components for loading states
const NavbarSkeleton = () => (
  <div className="fixed top-0 left-0 w-full h-16 bg-black/90 backdrop-blur-sm border-b border-red-500/20 z-50">
    <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
      <div className="h-8 w-32 bg-gray-800 animate-pulse rounded"></div>
      <div className="hidden md:flex space-x-8">
        <div className="h-6 w-16 bg-gray-800 animate-pulse rounded"></div>
        <div className="h-6 w-16 bg-gray-800 animate-pulse rounded"></div>
        <div className="h-6 w-16 bg-gray-800 animate-pulse rounded"></div>
        <div className="h-6 w-16 bg-gray-800 animate-pulse rounded"></div>
      </div>
      <div className="h-8 w-20 bg-gray-800 animate-pulse rounded"></div>
    </div>
  </div>
);

const HeroSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center">
    <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="h-12 w-80 bg-gray-800 animate-pulse rounded"></div>
          <div className="h-6 w-96 bg-gray-800 animate-pulse rounded"></div>
          <div className="h-6 w-80 bg-gray-800 animate-pulse rounded"></div>
          <div className="flex gap-4">
            <div className="h-12 w-32 bg-gray-800 animate-pulse rounded"></div>
            <div className="h-12 w-24 bg-gray-800 animate-pulse rounded"></div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="h-96 w-full bg-gray-800 animate-pulse rounded-xl"></div>
        </div>
      </div>
    </div>
  </div>
);

const SectionSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="h-10 w-48 bg-gray-800 animate-pulse rounded mx-auto mb-4"></div>
        <div className="h-1 w-20 bg-gray-800 animate-pulse rounded mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-square bg-gray-800 animate-pulse rounded-lg"></div>
        <div className="space-y-6">
          <div className="h-8 w-64 bg-gray-800 animate-pulse rounded"></div>
          <div className="h-4 w-full bg-gray-800 animate-pulse rounded"></div>
          <div className="h-4 w-3/4 bg-gray-800 animate-pulse rounded"></div>
          <div className="h-8 w-48 bg-gray-800 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
              </div>
);

const FooterSkeleton = () => (
  <div className="bg-black py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="h-32 bg-gray-800 animate-pulse rounded"></div>
        <div className="h-32 bg-gray-800 animate-pulse rounded"></div>
        <div className="h-32 bg-gray-800 animate-pulse rounded"></div>
        <div className="h-32 bg-gray-800 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
);

// Improved lazy component wrapper with intersection observer
const LazySection = ({ children, fallback, id }: { children: React.ReactNode, fallback: React.ReactNode, id: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldLoad) {
          setShouldLoad(true);
          setTimeout(() => setIsVisible(true), 100);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '200px 0px'
      }
    );

    if (ref.current && observer) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={ref} id={id}>
      {isVisible ? (
        <div className="content-transition">
          {children}
        </div>
      ) : (
        fallback
      )}
    </div>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const techStacksRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Memoize section refs array
  const sectionRefs = useMemo(() => [
    homeRef.current, 
    aboutRef.current, 
    skillsRef.current, 
    techStacksRef.current,
    projectsRef.current, 
    contactRef.current
  ], []);

  // Optimized scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Memoized mobile menu toggle function
  const toggleMobileMenu = useCallback((isOpen: boolean | ((prev: boolean) => boolean)) => {
    setIsMobileMenuOpen(isOpen);
  }, []);

  // Optimized IntersectionObserver
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    
    const setupObserver = () => {
      observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
          threshold: 0.3,
          rootMargin: '-50px 0px -50px 0px'
      }
    );

      sectionRefs.forEach((section) => {
        if (section && observer) observer.observe(section);
    });
    };

    timeoutId = setTimeout(setupObserver, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) {
        sectionRefs.forEach((section) => {
        if (section && observer) observer.unobserve(section);
      });
        observer.disconnect();
      }
    };
  }, [sectionRefs]);

  // Cleanup scroll behavior on unmount
  useEffect(() => {
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, []);

  // Preload components
  useEffect(() => {
    setTimeout(() => {
      import("./components/portfolio/AboutSection");
      import("./components/portfolio/SkillsSection");
    }, 1000);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <InitialLoader onComplete={handleLoadingComplete} />}
      <div className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Custom scrollbar styles */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(235, 94, 40, 0.5);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(235, 94, 40, 0.7);
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        html, body {
          overflow-x: hidden;
          scroll-behavior: auto;
        }
      `}</style>

      {/* Navbar with Suspense */}
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
          setMobileMenuOpen={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </Suspense>

      {/* Main content */}
      <div 
        ref={mainContentRef}
        className={`relative transition-all overflow-hidden ${isMobileMenuOpen ? 'blur-sm brightness-75' : ''}`}
      >
        <BackgroundShapes />
        
        {/* Render all sections with lazy loading */}
        <div className="w-full">
          {/* Hero section loads immediately */}
          <Suspense fallback={<HeroSkeleton />}>
            <HeroSection id="home" forwardedRef={homeRef} />
          </Suspense>
          
          {/* Other sections load on demand with intersection observer */}
          <LazySection id="about" fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <AboutSection id="about" forwardedRef={aboutRef} />
            </Suspense>
          </LazySection>
          
          <LazySection id="skills" fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <SkillsSection id="skills" forwardedRef={skillsRef} />
            </Suspense>
          </LazySection>

          <LazySection id="tech-stacks" fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <TechStacksSection id="tech-stacks" forwardedRef={techStacksRef} />
            </Suspense>
          </LazySection>
          
          <LazySection id="projects" fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <ProjectsSection id="projects" forwardedRef={projectsRef} />
            </Suspense>
          </LazySection>
          
          <LazySection id="contact" fallback={<SectionSkeleton />}>
            <Suspense fallback={<SectionSkeleton />}>
              <ContactSection id="contact" forwardedRef={contactRef} />
            </Suspense>
          </LazySection>
        </div>
        <Suspense fallback={<FooterSkeleton />}>
          <Footer />
        </Suspense>
      </div>
    </div>
    </>
  );
}