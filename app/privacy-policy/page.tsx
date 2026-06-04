import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const metadata = { title: 'Privacy Policy — Constant Finance' }

export default function PrivacyPolicy() {
  const content = fs.readFileSync(
    path.join(process.cwd(), 'content/privacy-policy.md'),
    'utf-8'
  )
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  )
}
