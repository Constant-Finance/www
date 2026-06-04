'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/constant_fi',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/gCXeqHYCXC',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.128 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@constantfinance',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ConstantFinance',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

function ThemeSwitch({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle color scheme"
      onClick={onToggle}
      style={{
        position: 'relative',
        width: 40,
        height: 22,
        borderRadius: 11,
        flexShrink: 0,
        border: '1px solid',
        cursor: 'pointer',
        transition: 'border-color 0.25s, background-color 0.25s',
        borderColor: isDark ? '#3c3c43' : '#dadadc',
        backgroundColor: isDark ? 'rgba(101,117,133,.38)' : 'rgba(235,235,235,.8)',
      }}
    >
      {/* Sliding thumb */}
      <span
        style={{
          position: 'absolute',
          top: 1,
          left: 1,
          width: 18,
          height: 18,
          borderRadius: '50%',
          backgroundColor: isDark ? '#1e1e20' : '#fff',
          boxShadow: '0 1px 3px rgba(0,0,0,.15)',
          transition: 'transform 0.25s, background-color 0.25s',
          transform: isDark ? 'translateX(18px)' : 'translateX(0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Sun — shown in dark mode */}
        <svg
          viewBox="0 0 24 24"
          width={12}
          height={12}
          fill="currentColor"
          style={{
            position: 'absolute',
            color: isDark ? 'rgba(235,235,245,.6)' : 'transparent',
            transition: 'opacity 0.25s',
            opacity: isDark ? 1 : 0,
          }}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
        {/* Moon — shown in light mode */}
        <svg
          viewBox="0 0 24 24"
          width={12}
          height={12}
          fill="currentColor"
          style={{
            position: 'absolute',
            color: isDark ? 'transparent' : '#8e96aa',
            transition: 'opacity 0.25s',
            opacity: isDark ? 0 : 1,
          }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleDark = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[rgba(27,27,31,0.9)] backdrop-blur border-b border-gray-200 dark:border-[#3c3c43]">
      <div className="max-w-[1440px] mx-auto px-8 h-16 flex items-center gap-4">

        {/* Logo — left */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 mr-4">
          <Image src="/logo.svg" alt="" width={24} height={26} priority />
          <span className="text-sm font-semibold text-gray-800 dark:text-[rgba(255,255,245,0.86)]">
            Constant Finance
          </span>
        </Link>

        <div className="flex-1" />

        {/* Nav links — right */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a
            href="/litepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-[rgba(235,235,245,0.6)] hover:text-gray-900 dark:hover:text-[rgba(255,255,245,0.86)] transition-colors"
          >
            Litepaper
          </a>
          <a
            href="https://constfi.gitbook.io/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-[rgba(235,235,245,0.6)] hover:text-gray-900 dark:hover:text-[rgba(255,255,245,0.86)] transition-colors"
          >
            Quick Start
          </a>
          <span className="text-gray-400 dark:text-[rgba(235,235,245,0.25)] cursor-not-allowed select-none">
            Launch App
          </span>
        </nav>

        {/* Divider */}
        <div className="hidden md:block w-px h-6 bg-gray-200 dark:bg-[#3c3c43] mx-1" />

        {/* Dark mode toggle */}
        <span className="hidden md:flex">
          <ThemeSwitch isDark={isDark} onToggle={toggleDark} />
        </span>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-gray-500 dark:text-[rgba(235,235,245,0.6)] hover:text-gray-900 dark:hover:text-[rgba(255,255,245,0.86)] transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600 dark:text-gray-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-[#3c3c43] px-6 py-4 space-y-4 bg-white dark:bg-[#1b1b1f]">
          <a href="/litepaper.pdf" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-700 dark:text-gray-300">Litepaper</a>
          <a href="https://constfi.gitbook.io/docs" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-700 dark:text-gray-300">Quick Start</a>
          <span className="block text-sm text-gray-400 cursor-not-allowed">Launch App</span>
          <div className="flex items-center gap-4 pt-2">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-gray-500 dark:text-gray-400">
                {s.icon}
              </a>
            ))}
            <ThemeSwitch isDark={isDark} onToggle={toggleDark} />
          </div>
        </div>
      )}
    </header>
  )
}
