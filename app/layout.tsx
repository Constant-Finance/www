import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Constant Finance',
  description: 'Decentralized lending protocol with Fixed Rates, Flexible Access and Higher Yields',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent dark mode flash */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const t = localStorage.getItem('theme')
            if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            }
          } catch(e) {}
        `}} />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-[#1b1b1f] text-gray-900 dark:text-[rgba(255,255,245,0.86)] antialiased`}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
