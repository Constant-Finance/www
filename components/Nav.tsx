'use client'
import { useState } from 'react'
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

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 h-16 flex items-center gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 mr-2">
          <Image src="/logo.svg" alt="" width={24} height={26} priority />
          <span
            className="text-sm font-semibold text-white/90"
            style={{ fontFamily: 'var(--font-clash)' }}
          >
            Constant Finance
          </span>
        </Link>

        <div className="flex-1" />

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {[
            { label: 'Litepaper', href: '/litepaper.pdf' },
            { label: 'Quick Start', href: 'https://constfi.gitbook.io/docs' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg transition-all"
              style={{ fontFamily: 'var(--font-clash)', color: 'rgba(255,255,255,0.55)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.90)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = '' }}
            >
              {item.label}
            </a>
          ))}

          {/* Launch App — coming soon */}
          <span
            className="px-4 py-2 rounded-lg cursor-not-allowed select-none"
            style={{ fontFamily: 'var(--font-clash)', color: 'rgba(255,255,255,0.20)' }}
            title="Coming soon"
          >
            Launch App
          </span>

          {/* Points — amber CTA */}
          <a
            href="https://points.constant.finance/rewards"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-black"
            style={{
              fontFamily: 'var(--font-clash)',
              background: 'linear-gradient(135deg, #ffb74d, #f78c1f)',
            }}
          >
            Points
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </a>
        </nav>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 mx-1" style={{ background: 'rgba(255,255,255,0.08)' }} />

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-white/35 hover:text-white/75 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/50 hover:text-white/80 transition-colors"
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
        <div
          className="md:hidden border-t px-6 py-5 space-y-1"
          style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#000' }}
        >
          {[
            { label: 'Litepaper', href: '/litepaper.pdf' },
            { label: 'Quick Start', href: 'https://constfi.gitbook.io/docs' },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              className="block px-4 py-2.5 rounded-lg text-sm text-white/60 hover:text-white/90 hover:bg-white/5 transition-all"
              style={{ fontFamily: 'var(--font-clash)' }}>
              {item.label}
            </a>
          ))}
          <span className="block px-4 py-2.5 text-sm text-white/20 cursor-not-allowed" style={{ fontFamily: 'var(--font-clash)' }}>
            Launch App
          </span>
          <a href="https://points.constant.finance/rewards" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-black mt-1"
            style={{ fontFamily: 'var(--font-clash)', background: 'linear-gradient(135deg, #ffb74d, #f78c1f)' }}>
            Points →
          </a>
          <div className="flex items-center gap-4 px-4 pt-3">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.name} className="text-white/40 hover:text-white/70 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
