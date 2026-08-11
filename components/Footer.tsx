import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center text-sm border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.28)' }}
    >
      <p className="mb-1.5 space-x-1">
        {[
          { label: 'About', href: '/about' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Term of Use', href: '/term-of-use' },
          { label: 'Contact', href: '/contact' },
        ].map((item, i, arr) => (
          <span key={item.href}>
            <Link
              href={item.href}
              className="hover:text-white/70 transition-colors"
            >
              {item.label}
            </Link>
            {i < arr.length - 1 && <span className="ml-1 text-white/15">·</span>}
          </span>
        ))}
      </p>
      <p>Copyright © 2026 Constant Finance Team</p>
    </footer>
  )
}
