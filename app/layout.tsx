import "./globals.css"
import { Inter, Playfair_Display, UnifrakturMaguntia, Noto_Serif } from 'next/font/google'
import { ThemeProvider } from "./components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' })
const unifraktur = UnifrakturMaguntia({ weight: '400', variable: '--font-unifraktur', subsets: ["latin"] })
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: '--font-noto-serif' })

export const metadata = {
  title: "Newspaper Portfolio",
  description: "A newspaper-themed portfolio website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${playfair.variable} ${unifraktur.variable} ${notoSerif.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

