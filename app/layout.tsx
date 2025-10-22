import "./globals.css"
import LocomotiveProvider from "./components/LocomotiveProvider"
import { Inter, Roboto, Open_Sans,   Lato, Montserrat } from 'next/font/google'
import { ThemeProvider } from "./components/theme-provider"
import { AdminProvider } from "./contexts/AdminContext"

import { CustomMouse } from "./components/custom-mouse"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const roboto = Roboto({ 
  subsets: ["latin"], 
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900']
})
const openSans = Open_Sans({ 
  subsets: ["latin"], 
  variable: '--font-open-sans',  weight: ['300', '400', '500', '600', '700', '800']
})
const lato = Lato({ 
  subsets: ["latin"], 
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic']
})
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: {
    default: "Ansh Kumar - Full Stack Developer",
    template: "%s | Ansh Kumar"
  },
  description: "Portfolio of Ansh Kumar - Full Stack Developer and DSA Expert. Explore my projects, skills, and experience in web development, data structures, algorithms, and digital innovation.",
  keywords: [
    "Ansh Kumar",
    "Full Stack Developer",
    "DSA Expert",
    "Web Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Data Structures",
    "Algorithms",
    "Problem Solving",
    "Digital Innovation",
    "anshkumar3931"
  ],
  authors: [{ name: "Ansh Kumar", url: "https://anshkumar3931.me" }],
  creator: "Ansh Kumar",
  publisher: "Ansh Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anshkumar3931.me",
    siteName: "Ansh Kumar Portfolio",
    title: "Ansh Kumar - Full Stack Developer & DSA Expert",
    description: "Portfolio of Ansh Kumar - Full Stack Developer and DSA Expert. Explore my projects, skills, and experience in web development, data structures, algorithms, and digital innovation.",
    images: [
      {
        url: "https://anshkumar3931.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ansh Kumar - Full Stack Developer & DSA Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Kumar - Full Stack Developer & DSA Expert",
    description: "Portfolio of Ansh Kumar - Full Stack Developer and DSA Expert. Specializing in data structures, algorithms, and problem solving.",
    creator: "@anshkumar3931",
    images: ["https://anshkumar3931.me/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://anshkumar3931.me",
  },
  category: "technology",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${roboto.variable} ${openSans.variable}  ${lato.variable} ${montserrat.variable}`}>
        <AdminProvider>
          <LocomotiveProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <CustomMouse />
              {children}
            </ThemeProvider>
          </LocomotiveProvider>
        </AdminProvider>
      </body>
    </html>
  )
}

