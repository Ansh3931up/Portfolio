import "./globals.css"
import LocomotiveProvider from "./components/LocomotiveProvider"
import { Inter, Playfair_Display, UnifrakturMaguntia, Noto_Serif, Poppins, Rubik_Distressed } from 'next/font/google'
import { ThemeProvider } from "./components/theme-provider"

import { CustomMouse } from "./components/custom-mouse"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' })
const unifraktur = UnifrakturMaguntia({ weight: '400', variable: '--font-unifraktur', subsets: ["latin"] })
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: '--font-noto-serif' })
const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})

const rubikDistressed = Rubik_Distressed({ 
  subsets: ["latin"], 
  variable: '--font-rubik-distressed',
  weight: '400'
})

export const metadata = {
  title: "Newspaper Portfolio",
  description: "A newspaper-themed portfolio website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${playfair.variable} ${unifraktur.variable} ${notoSerif.variable} ${poppins.variable} ${rubikDistressed.variable}`}>
        <LocomotiveProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <CustomMouse />
            {children}
          </ThemeProvider>
        </LocomotiveProvider>
      </body>
    </html>
  )
}

