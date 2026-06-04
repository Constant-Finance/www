import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-[#3c3c43] py-8 px-6 text-center text-sm text-gray-500 dark:text-[rgba(235,235,245,0.4)]">
      <p className="mb-1">
        <Link href="/about" className="hover:text-gray-800 transition-colors">About</Link>
        {'. '}
        <Link href="/privacy-policy" className="hover:text-gray-800 transition-colors">Privacy Policy</Link>
        {'. '}
        <Link href="/term-of-use" className="hover:text-gray-800 transition-colors">Term of Use</Link>
        {'. '}
        <Link href="/contact" className="hover:text-gray-800 transition-colors">Contact</Link>
        {'.'}
      </p>
      <p>Copyright © 2026 Constant Finance Team</p>
    </footer>
  )
}
